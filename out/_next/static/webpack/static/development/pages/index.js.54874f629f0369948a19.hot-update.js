webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/database/upcoming_events.js":
/*!************************************************!*\
  !*** ./components/database/upcoming_events.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// import https from "https";
var events = [{
  id: 1,
  eventName: "Aandklas",
  eventUrl: "https://www.facebook.com/events/443377719742041/",
  location: "Stellenbosch, WC",
  tickets: {
    price: "R40",
    url: null
  }
}]; // async function importEvents() {
//   let events = [];
//   let photoURLs = [];
//   let curDate = new Date();
//   const client_id = "2204470346481135";
//   const client_secret = "387b35517837cb9cfcd22355594c1552";
//   let access_token = "";
//   fetch(
//     `https://graph.facebook.com/oauth/access_token?client_id=${client_id}&client_secret=${client_secret}&debug=all&grant_type=client_credentials`
//   )
//     .then(response => response.json())
//     .then(token => {
//       access_token = token.access_token;
//       // console.log(access_token);
//       access_token =
//         "EAAfU9DZCrfe8BAGVe3cZBUtiik3GWjs6nSBK127J96FmJd8JBhTHQBE0ynRR4ZBYdbdXYt3sH0X9UJz4n6hwqH1QzJgoHeE8UGbiriGjjOyP6PoLccG1KtZCKq6rTQxZCGB7np7ZBY2UZAmQDr6zaKxfm8FW33fvaTDk6Lqqvj6kkE4nnkIGknNkpbrr9Kh9geREnL0KipHCgZDZD";
//       fetch(
//         // `https://graph.facebook.com/kontrasband/events?fields=name,start_time,place{name}&access_token=${access_token}`
//         `https://graph.facebook.com/kontrasband/events?fields=name,start_time,place{name}&access_token=${access_token}`
//       )
//         .then(response => response.json())
//         .then(response => {
//           console.log(access_token);
//           console.log(response);
//           var i = 0;
//           var evtDate = new Date(response.data[i].start_time);
//           var tempEvents = [];
//           // only add future events
//           while (evtDate >= curDate) {
//             tempEvents.push(response.data[i++]);
//             evtDate = new Date(response.data[i].start_time);
//           }
//           // reverse the order of the events
//           for (
//             var i = tempEvents.length - 1;
//             i >= tempEvents.length - 3 && i >= 0;
//             i--
//           ) {
//             events.push(tempEvents[i]);
//           }
//         })
//         .catch();
//     })
//     .catch(e => console.log(e));
//   // var query = {
//   //   host: "graph.facebook.com",
//   //   path:
//   //     "/oauth/access_token?client_id=1863448487237636&client_secret=f613a611fa8843bf77485de64ed0a22a&grant_type=client_credentials",
//   //   method: "GET",
//   //   headers: {
//   //     "Content-Type": "application/json"
//   //   }
//   // };
//   // // GET access token
//   // https
//   //   .request(query, function(response) {
//   //     var str = "";
//   //     //another chunk of data has been received, so append it to `str`
//   //     response.on("data", function(chunk) {
//   //       str += chunk;
//   //     });
//   //     //the whole response has been received, so we just print it out here
//   //     response.on("end", function() {
//   //       var token = JSON.parse(str).access_token;
//   //       // GET soldier events
//   //       // https
//   //       //   .request(
//   //       //     {
//   //       //       host: "graph.facebook.com",
//   //       //       path:
//   //       //         "/kontrasband/events?fields=name,start_time,place{name}&access_token=" +
//   //       //         token,
//   //       //       method: "GET",
//   //       //       headers: {
//   //       //         "Content-Type": "application/json"
//   //       //       }
//   //       //     },
//   //       //     function(response) {
//   //       //       var str = "";
//   //       //       //another chunk of data has been received, so append it to `str`
//   //       //       response.on("data", function(chunk) {
//   //       //         str += chunk;
//   //       //       });
//   //       //       //the whole response has been received, so we just print it out here
//   //       //       response.on("end", function() {
//   //       //         var data = JSON.parse(str);
//   //       //         var i = 0;
//   //       //         var evtDate = new Date(data.data[i].start_time);
//   //       //         var tempEvents = [];
//   //       //         // only add future events
//   //       //         while (evtDate >= curDate) {
//   //       //           tempEvents.push(data.data[i++]);
//   //       //           evtDate = new Date(data.data[i].start_time);
//   //       //         }
//   //       //         // reverse the order of the events
//   //       //         for (
//   //       //           var i = tempEvents.length - 1;
//   //       //           i >= tempEvents.length - 3 && i >= 0;
//   //       //           i--
//   //       //         ) {
//   //       //           events.push(tempEvents[i]);
//   //       //         }
//   //       //       });
//   //       //     }
//   //       //   )
//   //       //   .end();
//   //       // //GET all images in website album
//   //       // https
//   //       //   .request(
//   //       //     {
//   //       //       host: "graph.facebook.com",
//   //       //       path: "/1395443363854785/photos?fields=id&access_token=" + token,
//   //       //       method: "GET",
//   //       //       headers: {
//   //       //         "Content-Type": "application/json"
//   //       //       }
//   //       //     },
//   //       //     function(response) {
//   //       //       var str = "";
//   //       //       //another chunk of data has been received, so append it to `str`
//   //       //       response.on("data", function(chunk) {
//   //       //         str += chunk;
//   //       //       });
//   //       //       //the whole response has been received, so we just print it out here
//   //       //       response.on("end", function() {
//   //       //         var data = JSON.parse(str);
//   //       //         var photoIDString = "";
//   //       //         for (var i = 0; i < data.data.length; i++) {
//   //       //           photoIDString += data.data[i].id;
//   //       //           if (i < data.data.length - 1) {
//   //       //             photoIDString += ",";
//   //       //           }
//   //       //         }
//   //       //         //GET image source URLs
//   //       //         https
//   //       //           .request(
//   //       //             {
//   //       //               host: "graph.facebook.com",
//   //       //               path:
//   //       //                 "/?ids=" +
//   //       //                 photoIDString +
//   //       //                 "&fields=images{source}&access_token=" +
//   //       //                 token,
//   //       //               method: "GET",
//   //       //               headers: {
//   //       //                 "Content-Type": "application/json"
//   //       //               }
//   //       //             },
//   //       //             function(response) {
//   //       //               var str = "";
//   //       //               //another chunk of data has been received, so append it to `str`
//   //       //               response.on("data", function(chunk) {
//   //       //                 str += chunk;
//   //       //               });
//   //       //               //the whole response has been received, so we just print it out here
//   //       //               response.on("end", function() {
//   //       //                 var data = JSON.parse(str);
//   //       //                 var small = "";
//   //       //                 var large = "";
//   //       //                 var jsonStr = "";
//   //       //                 for (var id in data) {
//   //       //                   if (data.hasOwnProperty(id)) {
//   //       //                     large = data[id].images[0].source;
//   //       //                     small =
//   //       //                       data[id].images[data[id].images.length - 1].source;
//   //       //                     jsonStr =
//   //       //                       '{ "small": "' +
//   //       //                       small +
//   //       //                       '", "large": "' +
//   //       //                       large +
//   //       //                       '"}';
//   //       //                     photoURLs.push(JSON.parse(jsonStr));
//   //       //                   }
//   //       //                 }
//   //       //               });
//   //       //             }
//   //       //           )
//   //       //           .end();
//   //       //       });
//   //       //     }
//   //       //   )
//   //       //   .end();
//   //     });
//   //   })
//   //   .end();
//   return events;
// }
// export { importEvents };

/* harmony default export */ __webpack_exports__["default"] = (events);

/***/ })

})
//# sourceMappingURL=index.js.54874f629f0369948a19.hot-update.js.map