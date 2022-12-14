// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // api_baseurl: 'https://brandtalks.in/ucciawards/api',
  api_baseurl: 'https://awardsbackend.ucciudaipur.com/api',
  // api_baseurl: "http://192.168.29.166:8000/api",

  // award API Base URL

  // award_base_url: 'https://brandtalks.in/ucciaward/api',
  award_base_url: 'https://awardsbackend.ucciudaipur.com/api',

  // profile_baseUrl:
  //   'https://ucci.brandtalks.in/storage/app/public/events/coverage_image/',
  profile_baseUrl:
    'https://awardsbackend.ucciudaipur.com/storage/app/public/events/coverage_image/',

  // image_baseURL : 'https://awards.ucciudaipur.com/',
  // image_baseURL : 'https://brandtalks.in/ucciawardsfrontend/',
  // profile_baseUrl : 'http://192.168.29.166:8000/storage/app/public/events/coverage_image/',

  rezorpay_key: 'rzp_test_5R3ifzCtFSn1j1',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
