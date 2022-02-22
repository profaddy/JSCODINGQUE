//User function Template for javascript

/**
 * @param {Node} root
 * @returns {number[]}
*/

/*
class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
*/

class Solution 
{
    //Function to store the zig zag order traversal of tree in a list.
    zigZagTraversal(root)
    {
        let result = [];
        
        const lot = (root,level) => {
            if(!root) return;
            if(result[level]){
                result[level].push(root.data)
                
            }else{
                result[level] = [root.data];
            }
            lot(root.left,level+1);
            lot(root.right,level + 1);
        }
        lot(root,0);
        console.log(result);
        return result.map((item,index) => (index%2 !== 0) ? item.reverse:item)
        //your code here
    }
}