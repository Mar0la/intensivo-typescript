/* eslint-disable @typescript-eslint/consistent-type-imports */
import { HttpResponse } from '../protocols/http'
import { ServerError } from '../err/server-error'

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: error
})

export const serverError = (): HttpResponse => ({
  statusCode: 500,
  body: new ServerError()
})
