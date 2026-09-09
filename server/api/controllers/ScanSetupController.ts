import { HttpResponse } from '../HttpResponse';
import { HttpResponseFactory } from '../HttpResponseFactory';

export class ScanSetupController {
  async getSetup(): Promise<HttpResponse> {
    return HttpResponseFactory.html(`
<!DOCTYPE html>
<html>
  <head>
    <title>Gamerr Setup</title>
  </head>

  <body>
    <h1>Gamerr Setup</h1>

    <p>
      Step 3 of 4
    </p>

    <h2>Initial Scan Configuration</h2>

    <p>
      Choose what Gamerr should do after setup is complete.
    </p>

    <p>
      <input
        type="checkbox"
        id="initialScan"
        checked
      />

      <label for="initialScan">
        Run initial library scan after setup
      </label>
    </p>

    <p>
      <button
        onclick="window.location.href='/setup/metadata'">
        Back
      </button>

      <button
        onclick="window.location.href='/setup/complete'">
        Save and Continue
      </button>
    </p>
  </body>
</html>
    `);
  }
}
