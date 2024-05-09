const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	for(let i=0;i<arr.length;i++){
        sm+=arr[i];
        if(sm>n){
            sm=arr[i];
            ans.push(tmp);
            tmp=[];
        }
        tmp.push(arr[i]);
    }
    ans.push(tmp);
    return ans;
	
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
