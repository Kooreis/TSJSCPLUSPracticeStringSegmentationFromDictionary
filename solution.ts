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