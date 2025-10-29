let arr = ["빵","옥","니","혀"];


for(let i = 0 ; i < arr.length;i++){
    if(arr[i] == "옥" || arr[i] == "빵"){
        arr.splice(i,1);
        i--;
    }else{
        console.log(arr[i]);
    }
}