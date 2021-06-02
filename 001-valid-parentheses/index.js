/* 
    Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.
*/

function validParentheses(parens) {
    if (!parens) return true;

    if (parens[0] == ")" || parens[parens.length - 1] == "(") return false;

    let counter = 0;
    parens.split("").forEach((paren) => {
        if (counter < 0) return false;

        paren == "(" ? counter++ : counter--;
    });

    return counter === 0;
}

console.log(validParentheses("()"));
console.log(validParentheses("())"));
console.log(validParentheses(")(()))"));
console.log(validParentheses("("));
console.log(validParentheses("(())((()())())"));
console.log(validParentheses("())("));
console.log(validParentheses("())(()"));
console.log(validParentheses(""));
