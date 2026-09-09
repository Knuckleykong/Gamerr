import { HttpResponse } from '../HttpResponse';
import { HttpResponseFactory } from '../HttpResponseFactory';

export class SetupController {
  async getSetup(): Promise<HttpResponse> {
    return HttpResponseFactory.html(`
<!DOCTYPE html>
<html>
  <head>
    <title>Gamerr Setup</title>
  </head>

  <body>
    <h1>Welcome to Gamerr</h1>

    <p>
      Gamerr has not been configured.
    </p>

    <p>
      Setup wizard coming soon.
    </p>

    <p>
      <button onclick="window.location.href='/setup'">
        Begin Setup
      </button>
    </p>
  </body>
</html>
    `);
  }
}
