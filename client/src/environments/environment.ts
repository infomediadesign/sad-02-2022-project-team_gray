// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const baseUrl="http://localhost:53123";
export const environment = {
  production: false,
  userLogin:`${baseUrl}/auth/userLogin`,
  insertHotelDetails:`${baseUrl}/hotelDetails/insertHotelDetails`,
  getAllHotelDetails:`${baseUrl}/hotelDetails/getAllHotelDetails`,
  getAllCities:`${baseUrl}/cities/getAllCities`,
  hotelLogin:`${baseUrl}/auth/hotelLogin`,
  insertUserDetails:`${baseUrl}/userDetails/insertUserDetails`,
  getAllUserDetails:`${baseUrl}/userDetails/getAllUserDetails`,
  insertUserBidDetails:`${baseUrl}/userBid/insertUserBidDetails`,
  insertBids:`${baseUrl}/biddingList/bidding_List`,
  insertParticipatedBids:`${baseUrl}/biddingList/participatedBidding_List`,
  BidsForUserTable:`${baseUrl}/biddingList/bidsForUserTable`,

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
