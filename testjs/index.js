
let count2 = 0;
let $thisTwo = document.querySelector("#this-two");

function addTwo(){
    count2+=2;
    console.log("count2",count2);
    $thisTwo.innerHTML = count2;
}

