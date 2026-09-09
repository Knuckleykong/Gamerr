import { HttpResponse } from '../HttpResponse';
import { HttpResponseFactory } from '../HttpResponseFactory';

export class MetadataSetupController {
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
      Step 2 of 4
    </p>

    <h2>Metadata Configuration</h2>

    <p>
      Select a metadata provider.
    </p>

    <p>
      <input
        type="radio"
        id="screenscraper"
        name="metadata"
        checked
      />

      <label for="screenscraper">
        ScreenScraper
      </label>
    </p>

    <p>
      <input
        type="radio"
        id="thegamesdb"
        name="metadata"
      />

      <label for="thegamesdb">
        TheGamesDB
      </label>
    </p>

    <p>
      <button onclick="window.location.href='/setup'">
        Back
      </button>

      <button
        onclick="window.location.href='/setup/scan'">
        Save and Continue
      </button>
    </p>
  </body>
</html>
    `);
  }
}
