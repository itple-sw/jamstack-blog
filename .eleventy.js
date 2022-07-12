const { DateTime } = require("luxon");

module.exports = function (config) {
  config.addPassthroughCopy("./input/style.css");
  config.addPassthroughCopy("./input/assets");
  config.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });
  config.addCollection("myCustomSort", function(collectionApi) {
    return collectionApi.getAll().sort(function(a, b) {
      //return a.date - b.date; // sort by date - ascending
      return b.order - a.order; // sort by date - descending
      //return a.inputPath.localeCompare(b.inputPath); // sort by path - ascending
      //return b.inputPath.localeCompare(a.inputPath); // sort by path - descending
    });
  });
  return {
    dir: {
      input: "input",
      output: "_site",
    },
  };
};
