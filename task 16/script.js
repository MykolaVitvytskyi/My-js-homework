var nums1 = [0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1];
var nums2 = [0,0,1,1,1,1,0,1,1,1];

function arrCompress(arr){
    var result = [1];
    for(i = 0; i < arr.length-1; i++){
        if(arr[i] === arr[i+1]){
            result[result.length-1]++;
        }else{  
            result.push(1);
        }
    }
    return result;
}

var compressedNums1 = arrCompress(nums1);
var compressedNums2 = arrCompress(nums2);
console.log('[' + nums1 + ']' + ' = '+ '[' + compressedNums1 + ']');
console.log('[' + nums2 + ']' + ' = '+ '[' + compressedNums2 + ']');