// Fethc API is used to get data from a server. It is a modern way to make HTTP requests in JavaScript.

// What the below code does is, it fetches data from the server and waits for the response. Once the response is received, it converts the response to JSON format and returns it. The rest of the code will wait for it to complete before moving on.

// What if we dont write await with data and jsonData? The code will not wait for the response and will move on to the next line of code. This will result in an error as the data will not be available when we try to access it.

// fetch()
//    ↓
// response
//    ↓
// response.json()
//    ↓
// data

async function func() {
    // simulating getting data from a server
    let data = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    let jsonData = await data.json();
    return jsonData;
}


async function asyncCall() {
    console.log("One");
    console.log("Two");
    let third = await func();
    console.log(third);
    console.log("Four");
    console.log("Five");

}

asyncCall();


// You can search Post request example or other in google and use that to make a post request using fetch API for your real project. You can also use fetch API to make PUT, DELETE requests as well.
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch