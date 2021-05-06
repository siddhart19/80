function getparah(){
    var input=[];
    for(var i=1;i<=5;i++){
        input.push(document.getElementById("input_"+i).value);
    }
    document.getElementById("label1").innerHTML=input.join(".");
}