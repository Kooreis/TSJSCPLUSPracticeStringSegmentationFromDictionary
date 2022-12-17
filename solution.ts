Here is a TypeScript solution for the problem:

```typescript
class WordSegmentation {
    dictionary: Set<string>;

    constructor(dictionary: string[]) {
        this.dictionary = new Set(dictionary);
    }

    canSegmentString(input: string): boolean {
        const memo: boolean[] = new Array(input.length + 1).fill(false);
        memo[0] = true;

        for (let i = 1; i <= input.length; i++) {
            for (let j = 0; j < i; j++) {
                if (memo[j] && this.dictionary.has(input.substring(j, i))) {
                    memo[i] = true;
                    break;
                }
            }
        }

        return memo[input.length];
    }
}

const dictionary = ['apple', 'pear', 'pier', 'pie'];
const wordSegmentation = new WordSegmentation(dictionary);

console.log(wordSegmentation.canSegmentString('applepie'));  // true
console.log(wordSegmentation.canSegmentString('applepeer'));  // false
```

This solution uses dynamic programming to solve the problem. It iterates over the input string and checks if each substring can be segmented into words from the dictionary. The `canSegmentString` method returns `true` if the string can be segmented and `false` otherwise.