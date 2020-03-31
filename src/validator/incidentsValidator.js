import * as Yup from 'yup';

export default {
  listIncidents(req, res, next) {
    const schema = Yup.object().shape({
      page: Yup.number().typeError(
        'O número da pagina deve ser um valor numérico'
      ),
    });

    schema.validate(req.query, { abortEarly: false }).catch((err) =>
      res.json({
        error: [...err.errors],
        field: err.inner.map((e) => e.path),
      })
    );

    next();
  },

  createIncident(req, res, next) {
    const schema = Yup.object().shape({
      title: Yup.string()
        .required('O titulo é um campo obrigatorio')
        .label('Titulo'),
      description: Yup.string()
        .required('A descrição é um campo obrigatorio')
        .label('Descrição'),
      value: Yup.number()
        .required('O valor é um campo obrigatorio')
        .typeError('O valor deve ser numérico')
        .label('Valor'),
    });

    schema.validate(req.body, { abortEarly: false }).catch((err) =>
      res.json({
        error: [...err.errors],
        field: err.inner.map((e) => e.path),
      })
    );

    next();
  },

  deleteIncident(req, res, next) {
    const schema = Yup.object().shape({
      id: Yup.number()
        .required()
        .typeError(`O parametro id do caso deve ser numérico.`),
    });

    schema.validate(req.params, { abortEarly: false }).catch((err) =>
      res.json({
        error: [...err.errors],
        field: err.inner.map((e) => e.path),
      })
    );

    next();
  },
};
