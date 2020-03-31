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
    const newOng = await request(app)
      .post('/ongs')
      .send({
        name: 'wef',
        password: '1234test',
        confirmPassword: '1234test',
        email: 'oi@wef.com',
        whatsapp: '5199714911',
        city: 'Mostardas',
        uf: 'RS',
      })
      .expect('Content-Type', /json/)
      .expect(200);

    expect(newOng.body).toMatchObject({
      message: 'Successfully created ONG',
    });
  });
});
