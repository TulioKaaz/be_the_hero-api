import connection from '../database/connection';

export default {
  async index(req, res) {
    const { page = 1 } = req.query;
    const limit = 5;

    const [count] = await connection('incidents').count();

    const incidents = await connection('incidents')
      .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
      .limit(limit)
      .offset((page - 1) * limit)
      .select([
        'incidents.*',
        'ongs.name',
        'ongs.email',
        'ongs.whatsapp',
        'ongs.city',
        'ongs.uf',
      ]);

    res.header('X-Total-Count', count['count(*)']);

    return res.json(incidents);
  },

  async store(req, res) {
    const { title, description, value } = req.body;

    const ong_id = req.ongId;

    const ongExists = await connection('ongs').where('id', ong_id).select('id');

    if (!ongExists[0]) {
      return res.status(400).json({ error: 'Ong not found' });
    }

    const [id] = await connection('incidents').insert({
      title,
      description,
      value,
      ong_id,
    });

    return res.json({ id });
  },

  async delete(req, res) {
    const { id } = req.params;

    const ong_id = req.ongId;

    const incident = await connection('incidents')
      .where('id', id)
      .select('ong_id')
      .first();

    if (incident.ong_id !== ong_id) {
      return res.status(401).json({ error: 'Operation not permitted.' });
    }

    await connection('incidents').where('id', id).delete();

    return res.status(204).send();
  },
};
