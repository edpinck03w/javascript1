var nums = [2, 10, 9, 6, 12, 3];
var totalSum = 0;
for(var i in nums) {
    totalSum += nums[i];
}
var average = totalSum / nums.length;


for(i=0;i<=5;i++){
    alert("Number " + nums[i]);
    }

alert('The Average is: ' + average);