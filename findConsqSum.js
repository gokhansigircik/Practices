/* 
  using JOKEAPI
  You are given a list of integers. Find all the consecutive sets of 
  integers that adds up to the sum passed in as one of the inputs.
*/

const nums1 = [2, 5, 3, 6, 7, 23, 12];
const sum1 = 16;
const expected1 = [
  [2, 5, 3, 6],
  [3, 6, 7],
];

const nums2 = [];
const sum2 = 5;
const expected2 = [];

const nums3 = [10, 15, 20, 35, 30];
const sum3 = 5;
const expected3 = [];

// Bonus:
const nums4 = [2, 5, 3, 6, 7, 0, 0, 23, 13];
const sum4 = 16;
const expected4 = [
  [2, 5, 3, 6],
  [3, 6, 7],
  [3, 6, 7, 0],
  [3, 6, 7, 0, 0],
];

// Bonus:
const nums5 = [-2, -5, -3, -6, -7, -0, -0, -23, -12];
const sum5 = -16;
const expected5 = [
  [-2, -5, -3, -6],
  [-3, -6, -7],
  [-3, -6, -7, -0],
  [-3, -6, -7, -0, -0],
];

/**
 * Finds all the sets of consecutive numbers that sum to the given target sum.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums Unordered nums.
 * @param {number} targetSum
 * @returns {Array<Array<number>>} 2d array where each nested array is a set of
 *    consecutive numbers that add up to the given targetSum. Consecutive in
 *    this context means the numbers whose indexes are one after the other
 *    only.
 */
function findConsqSums(nums, targetSum) {
    let result = [], subArray = [], pointer = 0, runner=0, subArraySum = 0;
    while( pointer < nums.length){
        subArray = [];
        subArraySum = 0;
        while ( subArraySum <= Math.abs(targetSum) && runner < nums.length){
            subArraySum += nums[runner];
            subArray.push(nums[runner]);
            if(subArraySum === targetSum ){
                result.push(subArray);
                subArray = [...subArray];
            }
            runner ++;
        }
        pointer++;
        runner = pointer;
    }
    console.log(result);
    return result;
}

//create temp variables: result[], subArray[], pointer=0, runner=0, subArraySum = 0;
//outter loop go through the array with pointer variable, pointer will increment each iteration; if pointer is less than given array length, continue iterate;
//inner loop go through the array with runner variable; if subArraySum is less or equals to target sum and runner doesnt reach the end of the array length, continue iterate;
//inside the inner loop subArraySum adds up the array element at runner index, and array element at runner index will be push into subArray;
//condition inside inner loop; if subArraySum equals targetSum, push the subArray into the resultArray;
//after each inner loop, reset subArray and subArraySum;
//after the outer loop, return resultArray;

findConsqSums(nums4, sum4)
// findConsqSums(nums5, sum5)