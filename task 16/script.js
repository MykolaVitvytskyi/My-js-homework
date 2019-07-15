var nums1 = [0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1];
var nums2 = [0,0,1,1,1,1,0,1,1,1];

function arrCompress(arr){
    var count = 1;
    var result = [];
    for(i = 0; i < arr.length; i++){
        if(arr[i] === arr[i+1]){
            count++;
        }else{
            result.push(count);
            count = 1;
        }
    }
    return result;
}

var compressedNums1 = arrCompress(nums1);
var compressedNums2 = arrCompress(nums2);
console.log('[' + nums1 + ']' + ' = '+ '[' + compressedNums1 + ']');
console.log('[' + nums2 + ']' + ' = '+ '[' + compressedNums2 + ']');