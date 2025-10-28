// For browser-compatible bcrypt functionality
import bcrypt from 'bcryptjs';

const saltValue = 10;

export const hash = (value) => {
  const salt = bcrypt.genSaltSync(saltValue);
  return bcrypt.hashSync(value, salt);
};

export const compare = (value, hash) =>
  bcrypt.compareSync(value, hash);

export const encrypt = (val) => {
  const utf8encoder = new TextEncoder();
  return utf8encoder.encode(JSON.stringify(val));
};

export const decrypt = (encodedVal) => {
  const decoder = new TextDecoder();
  return JSON.parse(decoder.decode(encodedVal));
};
