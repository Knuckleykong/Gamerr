import { HttpResponse } from '../HttpResponse';
import { HttpResponseFactory } from '../HttpResponseFactory';

export class SetupWizardController {
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
      Step 1 of 4
    </p>

    <h2>Library Configuration</h2>

    <p>
      Enter the path where your ROMs are stored.
    </p>

    <input
      type="text"
      placeholder="D:\\ROMs"
      size="50"
    />

    <p>
      <button>
        Save and Continue
      </button>
    </p>
  </body>
</html>
    `);
  }
}
