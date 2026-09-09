import { HttpResponse } from '../HttpResponse';
import { HttpResponseFactory } from '../HttpResponseFactory';

export class CompleteSetupController {
  async getSetup(): Promise<HttpResponse> {
    return HttpResponseFactory.html(`
<!DOCTYPE html>
<html>
  <head>
    <title>Gamerr Setup Complete</title>
  </head>

  <body>
    <h1>Setup Complete</h1>

    <p>
      Step 4 of 4
    </p>

    <h2>Gamerr Is Ready</h2>

    <p>
      Your setup configuration has been collected.
    </p>

    <p>
      Future versions of this page will:
    </p>

    <ul>
      <li>Save settings to the database</li>
      <li>Validate library paths</li>
      <li>Configure metadata providers</li>
      <li>Start the initial scan</li>
    </ul>

    <p>
      <button
        onclick="window.location.href='/setup/scan'">
        Back
      </button>

      <button>
        Finish Setup
      </button>
    </p>
  </body>
</html>
    `);
  }
}
