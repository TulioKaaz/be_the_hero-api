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

    const ongExist = await Ong.findOne({
      where: { email },
      attributes: ['id'],
    });

    if (ongExist) {
      return res.status(401).json({
        errors: {
          error: 'Este email ja esta em uso.',
          key: 'email',
        },
      });
    }

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
