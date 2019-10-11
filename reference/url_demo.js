const url = require('url');
const myUrl = new URL('http:mywebsite.com:8000/hello.html?id=100&status=active');

// SERIALIZED URL
console.log(myUrl.href);
console.log(myUrl.toString());

// GET THE HOST (ROOT DOMAIN)
console.log(myUrl.host);

// GET THE HOST NAME OF THE DOMAIN(DOES NOT INCLUDE PORT)
console.log(myUrl.hostname);

// PATHNAME
console.log(myUrl.pathname);

// SERIALIZED QUERY
console.log(myUrl.search);

// PARAMS OBJECT
console.log(myUrl.searchParams);

// ADD PARAMS
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);

// LOOP THROUGH PARAMS
myUrl.searchParams.forEach((value, name) => console.log(`${name} ${value}`))