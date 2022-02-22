// JavaScript program to find largest word in Dictionary
// by deleting some characters of given string
 
// Returns true if word[] is a subsequence of str[].
// m is length of str1 and n is length of str
function isSubSequence(word, str)
{
  console.log("word:",word,"str:",str)
    var m = word.length, n = str.length;
 
    var j = 0; // For index of word (or subsequence
 
    // Traverse str and word, and compare current
    // character of str with first unmatched char
    // of word, if matched then move ahead in word
    for (var i = 0; i < n && j < m; i++)
    console.log("word[j]:",word[j],"str[i]:",str[i])
    if (word[j] == str[i])
            j++;
 
    // If all characters of word were found in str
    return (j == m);
}
 
// Returns the longest string in dictionary which is a
// subsequence of str.
function findLongestString(dict, str)
{
    var result = "";
    var length = 0;
 
    // Traverse through all words of dictionary
 
    dict.forEach(word => {
        
        // If current word is subsequence of str and is
        // largest such word so far.
        if (length < word.length
            && isSubSequence(word, str)) {
            result = word;
            length = word.length;
        }
    });
 
    // Return longest string
    return result;
}
 
// Driver program to test above function
var dict
    = ["ale", "apple", "monkey", "plea"];
var str = "abpcplea";

console.log(findLongestString(dict,str));