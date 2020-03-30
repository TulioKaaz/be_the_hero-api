import jwt from 'jsonwebtoken';
import connection from '../database/connection';
import checkPassword from '../utils/checkPassword';
import authConfig from '../config/auth';

export default {
  async store(req, res) {
    const { email, password } = req.body;

    const ong = await connection('ongs').where('email', email).first();

    if (!ong) {
      return res.status(400).json({ error: 'No ONG found with this email' });
    }

    if (!(await checkPassword(password, ong.password_hash))) {
      return res.status(401).json({ error: 'Passoword does not match' });
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
  },
};
