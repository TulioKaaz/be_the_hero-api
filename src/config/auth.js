import md5 from 'md5';

export default {
  secret: md5('bethehero'),
  expiresIn: '2d',
};
