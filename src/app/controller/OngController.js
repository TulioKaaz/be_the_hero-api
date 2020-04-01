import Ong from '../models/Ong';

class OngController {
  async index(req, res) {
    const ongs = await Ong.findAll({
      attributes: {
        exclude: ['password_hash'],
      },
    });

    return res.json(ongs);
  }

  async store(req, res) {
    const { email, password, name, whatsapp, city, uf } = req.body;

    await Ong.create({
      email,
      password,
      name,
      whatsapp,
      city,
      uf,
    });

    return res.json({ message: 'ONG cadastrada com sucesso' });
  }
}

export default new OngController();
