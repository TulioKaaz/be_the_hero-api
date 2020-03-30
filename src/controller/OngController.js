import connection from '../database/connection';

import generatePasswordHash from '../utils/generatePasswordHash';

export default {
  async index(req, res) {
    const ongs = await connection('ongs').select('*');

    return res.json(ongs);
  },

  async store(req, res) {
    const { email, password, name, whatsapp, city, uf } = req.body;

    const password_hash = await generatePasswordHash(password);

    await connection('ongs').insert({
      email,
      password_hash,
      name,
      whatsapp,
      city,
      uf,
    });

    return res.json({ message: 'Successfully created ONG' });
  },
};
