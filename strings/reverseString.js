function reverseEachWord(s) {
    if (typeof s !== 'string') {
        return "Invalid input";
    }

    return s.split(" ").map(word => word.split("").reverse().join("")).join(" ");
}
const input = "Java J2EE Reverse Me";
const output = reverseEachWord(input);
console.log(output);