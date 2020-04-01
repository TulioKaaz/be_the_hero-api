import Incident from '../models/Incident';
import Ong from '../models/Ong';

class IncidentController {
  async index(req, res) {
    const { page = 1 } = req.query;
    const limit = 5;

    const count = await Incident.count();

    const incidents = await Incident.findAll({
      limit,
      offset: (page - 1) * limit,
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
      include: {
        model: Ong,
        as: 'ong',
        attributes: {
          exclude: ['password_hash', 'id', 'createdAt', 'updatedAt'],
        },
      },
    });

    res.header('X-Total-Count', count);

    return res.json(incidents);
  }

  async store(req, res) {
    const { title, description, value } = req.body;

    const ong_id = req.ongId;

    const ongExists = await Ong.findOne({ where: { id: ong_id } });

    if (!ongExists) {
      return res.status(400).json({ error: 'Ong não encontrada' });
    }

    const { id } = await Incident.create({
      title,
      description,
      value,
      ong_id,
    });

    return res.json({ id, message: 'Caso criado com sucesso' });
  }

  async delete(req, res) {
    const { id } = req.params;

    const ong_id = req.ongId;

    const incident = await Incident.findOne({
      where: { id },
      attributes: ['ong_id'],
    });

    if (incident.ong_id !== ong_id) {
      return res.status(401).json({
        error: 'Este caso não pertence a sua ONG, operação não permitida',
      });
    }

    Incident.destroy({ where: { id } });

    return res.json({ message: 'Caso deletado com sucesso' });
  }
}

export default new IncidentController();
