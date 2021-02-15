/**
 * 
 * @param {string} s
 * * Iterate through the string 
 * * Push the words into a stack (to reverse order)
 * * Push the spaces into a queue (to maintain order)
 * * After filling the stack & queue, reconstruct the reversed string by popping stack & dequeing queue
 */
function reverseWords(s) {

    if(!s) return "";
    if(s.length <= 2) return s;


    var stack = [];
    var spaceQueue = [];

    var reversedString = "";
    
    var hasLeadingSpaces = s[0] === ' ';

    var n = s.length;
    var startIterator = 0;
    
    var singleWord = "";
    var interWordSpace = "";

    while (startIterator < n) { 
        while(startIterator < n && isSpace(s[startIterator]) ) { 
            interWordSpace = interWordSpace.concat(s[startIterator++]);
        } 
        if(interWordSpace.length !== 0) {
            spaceQueue.push(interWordSpace);
        } // adding contiguous spaces
        interWordSpace = "";

        while(startIterator < n && !isSpace(s[startIterator]) ) {
            singleWord = singleWord.concat(s[startIterator++]);
        } 
        
        if(singleWord.length !== 0) {
            stack.push(singleWord);
        } // adding words
        singleWord = "";
    }
    
    
    while(stack.length !== 0 && spaceQueue.length !== 0) {
        var word = stack.pop();
        var space = spaceQueue.shift();
        
        if(hasLeadingSpaces)
            reversedString = reversedString.concat(space+word);
        else
            reversedString = reversedString.concat(word+space);
    }
    
    while(stack.length !== 0) {
        reversedString = reversedString.concat(stack.pop());
    }

    while(spaceQueue.length !== 0) {
        reversedString = reversedString.concat(spaceQueue.shift());
    }

    return reversedString;
}

function isSpace(c) {
    return c === ' ';
}

function tests() {
    const testCases = [
        { test: "Mary had a little lamb​", answer: "lamb little a had Mary" },
        { test: "This sentence has one space", answer: "space one has sentence This" },
        { test: "  This  sentence  has  two  spaces  ", answer: "  spaces  two  has  sentence  This  " },
        { test: "This sentence  has   non-uniform spacing ", answer: "spacing non-uniform  has   sentence This " }
    ];

    console.info("Assumption: This program does not handle special characters (e.g, punctuation).");
    console.info("=======================================================================");
    for (let i in testCases) {
        let actual = reverseWords(testCases[i].test);
        let passed = actual.localeCompare(testCases[i].answer) === 0;
        if(passed) {
            console.info("[PASS]" +" - Input: ["+testCases[i].test+"] - Answer: [" + actual+"]");
        } else {
            console.warn("[FAIL]\tExpected: [" + testCases[i].answer + "] - Actual: [" + actual+"]");
        }
        
    }
}

tests();