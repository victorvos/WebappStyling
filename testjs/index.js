let addOne = () => {
    console.log(count);
    count++;
    document.getElementById("this-one").innerHTML = count;
}




let count = 0;
let count2 = 0;
let two = 2; // parameter
let $thisTwo = document.querySelector("#this-two");
document.getElementById("button1").addEventListener('click', addOne);      
document.getElementById("button2").addEventListener('click', () =>{
    console.log(count);
    count+=two;
    $thisTwo.innerHTML = count;
}); 




