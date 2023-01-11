exports.getDate = function () {
   let options = {weekday: "long", month: "long", day: "numeric"};
   let today = new Date().toLocaleDateString("en-us", options);
   today = new Date().toLocaleDateString("en-us", options);
   return today;
}