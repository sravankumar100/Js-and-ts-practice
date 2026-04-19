function evaluateMarks(marks: number): void {
    if (marks >= 90) {
        console.log("Grade A");
        
        // Nested if inside the first condition
        if (marks >= 95) {
            console.log("Excellent performance!");
        } else {
            console.log("Very good, but can aim higher.");
        }

    } else if (marks >= 75) {
        console.log("Grade B");
        
        // Nested if inside the else-if
        if (marks >= 85) {
            console.log("Almost Grade A, keep pushing!");
        } else {
            console.log("Solid performance, keep improving.");
        }

    } else {
        console.log("Grade C or below");
        
        // Nested if inside the final else
        if (marks >= 60) {
            console.log("Pass, but needs improvement.");
        } else {
            console.log("Fail, must work harder.");
        }
    }
}

// Example runs
evaluateMarks(97); // Grade A + Excellent performance!
evaluateMarks(80); // Grade B + Solid performance
evaluateMarks(65); // Grade C or below + Pass, but needs improvement
evaluateMarks(40); // Grade C or below + Fail, must work harder