class WordSegmentation {
    dictionary: Set<string>;

    constructor(dictionary: string[]) {
        this.dictionary = new Set(dictionary);
    }
}