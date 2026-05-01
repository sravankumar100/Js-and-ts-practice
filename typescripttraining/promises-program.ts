//asynchronous function that returns a promise & reject 
function prmoseMethod(): Promise<string> {
    return new Promise((resolve, reject) => {
        const randomNum = Math.random();
        console.log(`Generated number: ${randomNum}`);
        if (randomNum > 0.5) {
            resolve(`Resolved with number: ${randomNum}`);
        } else {
            reject(new Error(`Rejected with number: ${randomNum}`));
        }
    })
};

async function executeTest():Promise<void>  {
    const result: string = await prmoseMethod();
    console.log(result);
}
executeTest();

//executeTest2
function sumOfNumbers(input: number): number {
    let sum = 0;
    for (let i = 1; i <= input; i++) {
        sum += i;
    }
    return sum;
}

function executeTest2(): void {
    let sum = sumOfNumbers(10);
    console.log("Sum of first 10 numbers is: " + sum);
}

executeTest2();

/* Explanation
prmoseMethod()
Returns a Promise<string>.
Inside it creates a new Promise with resolve and reject.
Generates randomNum using Math.random().
Logs the generated random number.
If randomNum > 0.5, it calls:
resolve(\Resolved with number: ${randomNum}`)`
Otherwise it calls:
reject(new Error(\Rejected with number: ${randomNum}`))`
This means the promise may either fulfill with a string or reject with an Error.

executeTest()
Declared as async and returns Promise<void>.
Calls await prmoseMethod() and stores the returned string in result.
Logs result.
Important: because there is no try/catch, if prmoseMethod() rejects, executeTest() will throw and produce an unhandled promise rejection.

executeTest() invocation
executeTest(); runs the async test.
It will either print:
Generated number: ...
Resolved with number: ...
Or it may fail if the random number is <= 0.5.
sumOfNumbers(input)
Takes a number input.
Computes the sum of integers from 1 to input.
Uses a for loop and accumulates sum.
Returns the total.
Example:

sumOfNumbers(10) returns 55.
executeTest2()
Calls sumOfNumbers(10).
Logs:
Sum of first 10 numbers is: 55
Final behavior
executeTest() runs the promise logic.
executeTest2() runs the sum logic.
The code includes both async promise handling and a simple synchronous loop calculation.
Note: There is a likely typo in the function name prmoseMethod — it probably should be promiseMethod. */