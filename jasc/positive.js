function check(){
    let values=document.getElementById("num").value;
    console.log(values);
    if(values<0)
    {
        document.getElementById("results").innerHTML=`The give number(${values}) is Negative Number`;
    }
    else{
    document.getElementById("results").innerHTML=`The give number(${values}) is Positive Number`;
    }
}