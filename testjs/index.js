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
    count2+=2;
    $thisTwo.innerHTML = count2;
});

let $hallo = document.querySelector('#hallo');
let hallo = $hallo.innerHTML;

let $addingAmount = document.querySelector('#adding-amount');
let addingAmount; 

document.getElementById("buttonAddInputAmount").addEventListener('click', () =>{
    addingAmount = parseInt($addingAmount.value);
    console.log(addingAmount);
    count3+=addingAmount;
    $thisThree.innerHTML = count3;
})

let $divSquare = document.querySelector('#divSquare');


    $divSquare.addEventListener('click', () =>{
        console.log('Ready!');
        $divSquare.style.backgroundColor = "transparent";
    })



