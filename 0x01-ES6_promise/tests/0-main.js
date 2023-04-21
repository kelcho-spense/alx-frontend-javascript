import getFullResponseFromAPI from "./0-promise.js";

console.log(getFullResponseFromAPI(true));
console.log(getFullResponseFromAPI(false));

// You can also use `.then()` and `.catch()` to handle the Promise
getFullResponseFromAPI(true).then((response) => console.log(response)).catch((error) => console.error(error));
getFullResponseFromAPI(false).then((response) => console.log(response)).catch((error) => console.error(error));
