import app from './app';

const [, , port] = process.env.APP_URL.split(':');

app.listen(port);
