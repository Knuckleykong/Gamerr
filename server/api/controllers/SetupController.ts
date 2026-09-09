import { HttpResponse } from '../HttpResponse';
import { HttpResponseFactory } from '../HttpResponseFactory';

import { SetupService } from '../../services/SetupService';

export class SetupController {
  private setupService =
    new SetupService();

  async getSetup(): Promise<HttpResponse> {
    const setupState =
      await this.setupService.getSetupState();

    if (setupState.isConfigured) {
      return HttpResponseFactory.html(`
<!DOCTYPE html>
<html>
  <head>
    <title>Gamerr</title>
  </head>

  <body>
    <h1>Welcome to Gamerr</h1>

    <p>
      Gamerr is configured and ready.
    </p>

    <p>
      <button>
        Dashboard
      </button>
    </p>

    <p>
      <button>
        Library
      </button>
    </p>

    <p>
      <button>
        Settings
      </button>
    </p>
  </body>
</html>
      `);
    }

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
      <button onclick="window.location.href='/setup'">
        Begin Setup
      </button>
    </p>
  </body>
</html>
    `);
  }
}
