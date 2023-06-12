// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  weatherApiUrl: 'https://air-quality-api.p.rapidapi.com/air-quality?city=amsterdam&country=netherlands&lat=52.377956&lon=4.897070',
  XRapidAPIKeyHeader: 'X-RapidAPI-Key',
  XRapidAPIHostHeader: 'X-RapidAPI-Host',
  XRapidAPIKey: 'a60ca7c267msh373091a6c48cd65p1671f0jsn6aed35526059',
  XRapidAPIHost: 'air-quality-api.p.rapidapi.com'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
