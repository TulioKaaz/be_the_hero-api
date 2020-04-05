import jwt from 'jsonwebtoken';
import authConfig from '../../config/auth';

import Ong from '../models/Ong';

class SessionController {
  async store(req, res) {
    const { email, password } = req.body;

    const ong = await Ong.findOne({ where: { email } });

    if (!ong) {
      return res.status(400).json({
        errors: {
          error: 'A ong com este email, não foi encontrada',
          key: 'email',
        },
      });
    }

    if (!(await ong.checkPassword(password))) {
      return res.status(401).json({
        errors: {
          error: 'A senha esta errada',
          key: 'password',
        },
      });
    }

    const { id, name } = ong;

    return res.json({
      ong: {
        id,
        name,
      },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }
}

export default new SessionController();
