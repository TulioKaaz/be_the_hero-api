import jwt from 'jsonwebtoken';
import authConfig from '../../config/auth';

import Ong from '../models/Ong';

class SessionController {
  async store(req, res) {
    const { email, password } = req.body;

    const ong = await Ong.findOne({ where: { email } });

    if (!ong) {
      return res
        .status(400)
        .json({ error: 'A Ong com este email não foi encontrada' });
    }

    if (!(await ong.checkPassword(password))) {
      return res.status(401).json({ error: 'A senha não bate' });
    }

    const { id, name } = ong;

    return res.json({
      ong: {
        id,
        name,
        email,
      },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }
}

export default new SessionController();
