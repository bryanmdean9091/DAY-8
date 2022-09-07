const myDog = {
    name: 'Sebastian',
    size: 'small',
    color: 'gray', 
    speak: 'woof!',
    cry: 'whimper'
};
console.log(`My dog's name is ${myDog.name}  and he is ${myDog.size}. He is ${myDog.color} and says ${myDog.speak}`)


// function bark() {
    
//     let input =  prompt("do you want to go for a walk, Sebastian?!");
//     if (input === null) {
//         alert(myDog.cry);
//     }
//     else alert(myDog.speak);
// };
// bark()

// let backgroundBark = document.getElementById("pix")

function meetDog() {
    document.getElementById("sebastian").innerHTML = `My dog's name is ${myDog.name}  and he is ${myDog.size}. He is ${myDog.color} and says ${myDog.speak}`
}


function displayBark() {
    document.getElementById("reply2").innerHTML = (myDog.speak)
    document.getElementById("pix").style.display = "block"
    document.getElementById("cry").style.display = "none"

};
function displayCry() {
    document.getElementById("reply2").innerHTML = (myDog.cry)
    document.getElementById("pix").style.display = "none"
    document.getElementById("cry").style.display = "block"

    

};





//  div = document.createElement("div");
// div.style.width = "500px";
// div.style.height = "500px";
// bg.style.backgroundImage = 'url("https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.natgeofe.com%2Fn%2F4f5aaece-3300-41a4-b2a8-ed2708a0a27c%2Fdomestic-dog_thumb_3x4.jpg&imgrefurl=https%3A%2F%2Fwww.nationalgeographic.com%2Fanimals%2Fmammals%2Ffacts%2Fdomestic-dog&tbnid=FldRyHXdcwNAQM&vet=12ahUKEwjAl_CCk_X5AhUAm2oFHdqpDtQQMygLegUIARDwAQ..i&docid=VGirYKV8sLnrzM&w=2304&h=3072&q=dog&ved=2ahUKEwjAl_CCk_X5AhUAm2oFHdqpDtQQMygLegUIARDwAQ");';
//     bg.style.height = "300px";
//     statsDiv.appendChild(bg);
// div.style.color ="black";
// div.style.textAlign = "center"
// div.style.display = "flex-center";
// div.innerHTML = "Hello";

// document.getElementById("main").appendChild(div);
// let buttonsDiv = document.getElementById('buttons');

// let btn = document.createElement("button");
// btn.innerHTML = "yes";
// btn.type = "submit";
// btn.style.backgroundColor = "green";
// btn.style.marginRight = "10px";
// btn.addEventListener = "click";

// buttonsDiv.appendChild(btn);

// let btn2 = document.createElement("button");
// btn2.innerHTML = "no";
// btn2.type = "submit";
// btn2.style.backgroundColor = "red";
// buttonsDiv.appendChild(btn2);
 
