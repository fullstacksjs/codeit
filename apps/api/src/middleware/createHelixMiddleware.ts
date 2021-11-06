import type { Request as ExpressRequest, RequestHandler } from 'express';
import type { GraphQLSchema } from 'graphql';
import type { Request as HelixRequest } from 'graphql-helix';
import {
  getGraphQLParameters,
  processRequest,
  renderGraphiQL,
  sendResult,
  shouldRenderGraphiQL,
} from 'graphql-helix';

const fromExpressRequest = (req: ExpressRequest): HelixRequest => ({
  body: req.body,
  headers: req.headers,
  method: req.method,
  query: req.query,
});

type CreateHelixMiddleware = (args: {
  schema: GraphQLSchema;
}) => RequestHandler;

export const createHelixMiddleware: CreateHelixMiddleware =
  ({ schema }) =>
  async (req, res) => {
    const request = fromExpressRequest(req);
    if (shouldRenderGraphiQL(request)) return res.send(renderGraphiQL());
    const { operationName, query, variables } = getGraphQLParameters(request);
    const result = await processRequest({
      operationName,
      query,
      variables,
      request,
      schema,
    });

    return sendResult(result, res);
  };
