// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { HttpResponse, HttpRequest } from '../protocols/http'
import { MissingParamError } from '../err/missing-param-error'
import { badRequest } from '../helpers/http-helper'

export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.name) {
      return badRequest(new MissingParamError('name'))
    }
    if (!httpRequest.body.email) {
      return badRequest(new MissingParamError('email'))
    }
  }
}
