import request from 'supertest';
import connection from '../../src/database/connection';
import app from '../../src/app';

describe('ONG', () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it('should be able to create a new ONG', async () => {
    const response = await request(app).post('/ongs').send({
      name: 'wef',
      email: 'oi@wef.com',
      whatsapp: '5199714911',
      city: 'Mostardas',
      uf: 'RS',
    });

    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toHaveLength(8);
  });
});
