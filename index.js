// Write a function that takes n number of arrays of integers and returns an array of distinct
// integers i.e the integers should appear only once among the input arrays.
// Example: [1,2,3], [2,3,4], [3,4,5] => [1,5]. Note: The number of arrays can be ‘n’. The
// function should work when inputs are increased or decreased. Create a private GitHub gist
// of the same function and share it with us.


function distinct(arr) {
    const combined = arr.flat();
    const freq = combined.reduce((acc, num) => {
        acc[num] = (acc[num] || 0) + 1;
        return acc
    }, {});
    return Object.keys(freq).filter(key => freq[key] === 1).map(Number)

}

const array = [[1, 2, 3], [2, 3, 4], [3, 4, 5]]

const result = distinct(array);
console.log(result)