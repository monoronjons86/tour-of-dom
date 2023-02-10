console.log('this is separate js file')

//option 2:add onclick function
function makeRed(){
    document.body.style.backgroundColor='red';
}


//option 3:
    const makeBlueButton=document.getElementById('make-blue');
    makeBlueButton.onclick =makeBlue;
    function makeBlue(){
        document.body.style.backgroundColor='blue'
    }

//option 3:another
const purpleButton=document.getElementById('make-purple')
purpleButton.onclick=function makePurple(){
    document.body.style.backgroundColor='purple'
}

//option 4

    const makePinkButton=document.getElementById('make-pink');
    makePinkButton.addEventListener('click',makePink)

    function makePink(){
    document.body.style.backgroundColor='pink';
    }

//another 4:another
    const makeGreenButton=document.getElementById('make-green');
    makeGreenButton.addEventListener('click', function makeGreen(){
        document.body.style.backgroundColor='green';
    })

//option 04:final
    document.getElementById('make-goldenred').addEventListener('click',function(){
        document.body.style.backgroundColor='goldenrod'
    })