Here is a JavaScript solution using dynamic programming:

```javascript
function canSegmentString(s, dictionary) {
    let solved = new Array(s.length + 1).fill(false);
    solved[s.length] = true;

    for (let i = s.length - 1; i >= 0; i--) {
        let word = '';
        for (let j = i; j < s.length; j++) {
            word += s[j];
            if (dictionary.includes(word) && solved[j + 1]) {
                solved[i] = true;
                break;
            }
        }
    }
    return solved[0];
}

let dictionary = ['apple', 'pear', 'pier', 'pie'];
let s = 'applepie';
console.log(canSegmentString(s, dictionary));
```

In this solution, the function `canSegmentString` checks if a string `s` can be segmented into words from a dictionary. It uses a dynamic programming approach where it iteratively builds up a solution by defining a `solved` array that keeps track of whether a substring of `s` starting from index `i` can be segmented into dictionary words. The `solved` array is initialized with `false` values, except for the last element which is `true` because an empty string can always be segmented.

The function then iterates over the string `s` in reverse order. For each character, it builds a word by appending the character to the current word and checks if this word is in the dictionary and if the rest of the string can be segmented (as indicated by the `solved` array). If both conditions are met, it sets the `solved` value for the current index to `true` and breaks the inner loop.

Finally, the function returns the first element of the `solved` array, which indicates whether the entire string `s` can be segmented into dictionary words. The console.log statement tests the function with a string `s` and a dictionary of words.