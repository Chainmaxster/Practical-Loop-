// Part 1 Fizz Buzz
// Loop through numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    // Check if the number is divisible by both 3 and 5
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("Fizz Buzz");
    }
    // Check if the number is divisible by 3
    else if (i % 3 === 0) {
        console.log("Fizz");
    }
    // Check if the number is divisible by 5
    else if (i % 5 === 0) {
        console.log("Buzz");
    }
    // If the number is not divisible by either 3 or 5, just print the number itself
    else {
        console.log(i);
    }
}

// Part 2 Prime Time
function isPrime(num) {
    if (num <= 1) return false; // 1 and below are not prime
    if (num <= 3) return true; // 2 and 3 are prime

    // Check if the number is divisible by 2 or 3
    if (num % 2 === 0 || num % 3 === 0) return false;

    // Check for prime numbers starting from 5
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }

    return true; // If no divisors found, it's prime
}

function findNextPrime(n) {
    // Start searching for the next prime number from n onwards
    while (true) {
        // Check if the current number is prime
        if (isPrime(n)) {
            // If prime, log it and exit the loop
            console.log(n);
            break;
        }
        // Increment to the next number
        n++;
    }
}

// Test with an arbitrary number
findNextPrime(4); // Logs: 5
findNextPrime(5); // Logs: 7
findNextPrime(9); // Logs: 11

// Part 3 Feeling Loopy
function parseCSV(csvString) {
    let rows = csvString.split('\\n');
    
    for (let row of rows) {
        let cells = row.split(',');
        console.log(cells[0], cells[1], cells[2], cells[3]);
    }
}

// CSV string
let csvData = "ID,Name,Occupation,Age\\n42,Bruce,Knight,41\\n57,Bob,Fry Cook,19\\n63,Blaine,Quiz Master,58\\n98,Bill,Doctor’s Assistant,26";

parseCSV(csvData);