// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { HttpResponse, HttpRequest } from '../protocols/http'
import { MissingParamError } from '../err/missing-param-error'

export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.name) {
      return {
        statusCode: 400,
        body: new MissingParamError('name')
      }
    }
    if (!httpRequest.body.email) {
      return {
        statusCode: 400,
        body: new MissingParamError('email')
      }
    }
  }
}
