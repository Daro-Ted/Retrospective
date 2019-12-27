// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  //Secure https
  // retrospective: 'https://localhost:44356/api/Retrospectives/GetRetrospectives',
  // retrospectiveByDate: 'https://localhost:44356/api/Retrospectives//api/Retrospectives/GetRetrospectivesByDate?date=',
  // createRetrospective: 'https://localhost:44356/api/Retrospectives/AddRetrospective',
  // feedback: 'https://localhost:44356/api/Retrospectives/AddFeedback?retrospectiveId='
  
  //None Secure http
  retrospective: 'http://localhost:52644/api/Retrospectives/GetRetrospectives',
  retrospectiveByDate: 'http://localhost:52644/api/Retrospectives/GetRetrospectivesByDate?date=',
  createRetrospective: 'http://localhost:52644/api/Retrospectives/AddRetrospective',
  feedback: 'http://localhost:52644/api/Retrospectives/AddFeedback?retrospectiveId='
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
