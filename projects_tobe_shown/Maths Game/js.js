
function hello(){
    var h=[1,2,3,4];
    console.log(h.length);
    h.splice(3-1,1);
    console.log(h+" length:"+h.length);
}

hello();