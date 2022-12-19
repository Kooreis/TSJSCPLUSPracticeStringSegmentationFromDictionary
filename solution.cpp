bool canSegment(std::string s, std::unordered_set<std::string>& dict) {
    int n = s.size();
    std::vector<bool> dp(n + 1, false);
    dp[0] = true;
    for (int i = 1; i <= n; i++) {
        for (int j = i - 1; j >= 0; j--) {
            if (dp[j]) {
                std::string word = s.substr(j, i - j);
                if (dict.find(word) != dict.end()) {
                    dp[i] = true;
                    break;
                }
            }
        }
    }
    return dp[n];
}