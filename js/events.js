console.log('This is separate js file');
// make red btn func
function make_red(){
    document.body.style.backgroundColor='red';
}
// make blue btn 
const makeBlueButton= document.getElementById('make-blue');
makeBlueButton.onclick= make_blue;
function make_blue(){
    document.body.style.backgroundColor='blue';
}

// make purple section
const makePurpleButton=document.getElementById("make-purple");
// console.log(makePurpleButton);
makePurpleButton.onclick= function make_purple(){
    document.body.style.backgroundColor='purple';
}

