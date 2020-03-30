import bcrypt from 'bcryptjs';

export default function (password) {
  return bcrypt.hash(password, 8);
}
