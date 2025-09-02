function lengthOfLongestSubstring(s){
    const store = new Set();
    let start = 0;
    let max_length = 0;

    for (let i=0;i<s.length;i++){
        while (store.has(s[i])){
            store.delete(s[start]);
            start++;
        }
        store.add(s[i]);
        max_length = Math.max(max_length,i-start+1)
    }

    return max_length;
}

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
