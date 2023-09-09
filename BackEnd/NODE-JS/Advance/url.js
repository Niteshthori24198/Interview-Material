// Parsing URLs : You can use the url.parse() method to parse a URL string and create a URL object with its various components like protocol, hostname, port, pathname, query parameters, and more.

const url = require('url');

const urlString = 'https://www.example.com:8080/path?param1=value1&param2=value2';

const parsedUrl = url.parse(urlString);

console.log(parsedUrl)

console.log(parsedUrl.protocol); // 'https:'

console.log(parsedUrl.hostname); // 'www.example.com'

console.log(parsedUrl.port); // '8080'

console.log(parsedUrl.pathname); // '/path'

console.log(parsedUrl.query); // 'param1=value1&param2=value2'


// Formatting URLs : You can use the url.format() method to create a URL string from a URL object. This is useful when you want to construct URLs dynamically.


const urlObject = {
  protocol: 'https:',
  hostname: 'www.example.com',
  port: '8080',
  pathname: '/path',
  query: 'param1=value1&param2=value2',
};

const formattedUrl = url.format(urlObject);

console.log("==>",formattedUrl); // 'https://www.example.com:8080/path?param1=value1&param2=value2'


// Manipulating URLs : You can use the URL object's properties to modify or manipulate specific parts of the URL, such as adding or removing query parameters, changing the protocol, or updating the pathname.


const urlString1 = 'https://www.example.com/path?param1=value1&param2=value2';

const parsedUrl1 = url.parse(urlString1);

// Modify the query parameters
parsedUrl1.query = 'newParam=value3';

// Change the protocol to HTTP
parsedUrl1.protocol = 'http:';

// Add a new pathname segment
parsedUrl1.pathname += '/subpath';

const modifiedUrl = url.format(parsedUrl1);

console.log('----->',modifiedUrl);


// Resolving Relative URLs : The url.resolve() method allows you to resolve a relative URL against a base URL, producing an absolute URL. This is useful when constructing links or navigating within a web application.

const baseUrl = 'https://www.example.com/path/';

const relativeUrl = '../page.html';

const absoluteUrl = url.resolve(baseUrl, relativeUrl);

console.log('abs--->',absoluteUrl); // 'https://www.example.com/page.html'