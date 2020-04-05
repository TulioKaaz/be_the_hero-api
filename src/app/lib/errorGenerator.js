export default (err) => {
  const { errors } = err;
  const keys = err.inner.map((e) => e.path);

  let data = [];

  keys.forEach((key, index) => {
    data = [...data, { error: errors[index], key }];
  });

  return data;
};
