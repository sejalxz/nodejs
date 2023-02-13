const url = require('url')

const myUrl = new URL('https://mywebsite.com/hello.html?id=100&status=active'); 

// toString() : returns stringified url
// href (It's a property not a method) : returns url

console.log(myUrl.href);
console.log(myUrl.toString());

// host (property) : returns the host (root domain). It also retuns port number
console.log(myUrl.host);

// hostname (property) : returns the hostname. Doesn't get port number
console.log(myUrl.hostname);

// pathname (property) : returns the pathname, i.e. the actual file path/name.
console.log(myUrl.pathname);

// search (property) : returns serialized query
console.log(myUrl.search);

// searchParams (property) : returns object of a serialised query
console.log(myUrl.searchParams);

//append() : add paramters to the object.
myUrl.searchParams.append('port', 8000);
console.log(myUrl.searchParams);

// Loop through the params

myUrl.searchParams.forEach((value, name) => {
    console.log(`${name}: ${value}`);
})