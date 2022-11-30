'use strict';

module.exports = async (server, { hdbCore, logger }) => {
  server.route({
    url: '/skus/list',
    method: 'GET',
    preParsing: (request, response, done) => {
      request.body = {
        operation: 'sql',
        sql: 'SELECT * FROM products.skus'
      }
      done();
    },
    preValidation: hdbCore.preValidation,
    handler: hdbCore.request
  })

  server.route({
    url: '/skus/add',
    method: 'POST',
    preValidation: (request, response, done) => {
      const { product } = JSON.parse(request.body);
      request.body = {
        operation: 'insert',
        schema: 'products',
        table: 'skus',
        records: [product]
      };
      done();
    },
    handler: hdbCore.request
  });

  server.route({
    url: '/skus/update',
    method: 'POST',
    preValidation: (request, response, done) => {
      const { product } = JSON.parse(request.body);
      request.body = {
        operation: 'update',
        schema: 'products',
        table: 'skus',
        records: [product]
      };
      done();
    },
    handler: hdbCore.request,
  });

  server.route({
    url: '/skus/delete',
    method: 'POST',
    preValidation: (request, response, done) => {
      const { id } = JSON.parse(request.body);
      request.body = {
        operation: 'delete',
        schema: 'products',
        table: 'skus',
        hash_values: [id]
      };
      done();
    },
    handler: hdbCore.request,
  });
};
