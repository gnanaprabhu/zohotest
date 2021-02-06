function sample(n){
for(var i=n;i<0;i--){
  var arr=[];
  var t =n-1;
    for(var j=n;j<0;j--){
       if(i==n||j==n){
         arr.push(n);
       }else{
        let total = j*i;
        if(total >= j){
          t=t-1;
        }
        arr.push(t);
       }
    }
    console.log(arr);
}
}
