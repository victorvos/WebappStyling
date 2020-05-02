let addOne = () => {
    console.log(count);
    count++;
    document.getElementById("this-one").innerHTML = count;
}

let count = 0;
let count2 = 0;
let count3 = 0;
let two = 2; // parameter

let $thisTwo = document.querySelector("#this-two");
let $thisThree = document.querySelector('#this-three');

document.getElementById("button1").addEventListener('click', addOne);      
document.getElementById("button2").addEventListener('click', () =>{
    console.log(count2);
    count2+=two;
    $thisTwo.innerHTML = count2;
});

let $addingAmount = document.querySelector('#adding-amount').value;
$addingAmount = Number($addingAmount);

document.getElementById("buttonAddInputAmount").addEventListener('click', () =>{
    console.log(count3);
    count3+=$addingAmount;
    $thisThree.innerHTML = count3;
})