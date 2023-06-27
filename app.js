// Event Listeners

// element.addEventListener("click", function)

/*const buttonTwo = document.querySelector('.btn-2');

function alertBtn() {
    alert('I also Love JavaScript');
}

buttonTwo.addEventListener("click", alertBtn);


// MouseOver

const newBackgroundColor = document.querySelector('.box-3');

function changeBgColor() {
    newBackgroundColor.style.backgroundColor = 'orange';
}

newBackgroundColor.addEventListener('mouseover', changeBgColor);*/



// Reveal Event

/*const revealBtn = document.querySelector('.reveal-btn');

const hiddenContent = document.querySelector('.hidden-content');

function revealContent() {
    
    if(hiddenContent.classList.contains('reveal-btn')) {
        hiddenContent.classList.remove('reveal-btn')
        revealBtn.classList.remove('dummy')

    } else {
        hiddenContent.classList.add('reveal-btn')
        revealBtn.classList.add('dummy')
    }
}

revealBtn.addEventListener('click', revealContent);*/


/*window.addEventListener("click", function() {
    console.log('Window');
},false);

document.addEventListener("click", function() {
    console.log('Document');
},false);

document.querySelector(".div2").addEventListener("click", function() {
    //e.stopPropagation()
    console.log('DIV2');
},{once: true});

document.querySelector(".div1").addEventListener("click", function() {
    console.log('DIV1');
},false);

document.querySelector('.button').addEventListener("click", function(e) {
    e.preventDefault()
    console.log(e.target.innerText = 'Clicked!');
},false);*/



/*document.querySelector('#football').addEventListener('click',function(e) {
    console.log('football is clicked@');

    const target = e.target;

    if(target.matches('li')) {
        target.style.backgroundColor = 'lightgrey'
    }
})

document.querySelector('#basketball').addEventListener('click',function(e) {
    console.log('basketball is clicked!');

    const target = e.target;

    if(target.matches('li')) {
        target.style.backgroundColor = 'lightgrey'
    }
})

document.querySelector('#boxing').addEventListener('click',function(e) {
    console.log('boxing is clicked$');

    const target = e.target;

    if(target.matches('li')) {
        target.style.backgroundColor = 'lightgrey'
    }
})

document.querySelector('#tennis').addEventListener('click',function(e) {
    console.log('tennis is clicked%');

    const target = e.target;

    if(target.matches('li')) {
        target.style.backgroundColor = 'lightgrey'
    }
})

document.querySelector('#golf').addEventListener('click',function(e) {
    console.log('golf is clicked$');

    const target = e.target;

    if(target.matches('li')) {
        target.style.backgroundColor = 'lightgrey'
    }
})*/


document.querySelector('#sports').addEventListener('click', function(e) {

    console.log(e.target.getAttribute('id') + ' is clicked');

    const target = e.target;

    if(target.matches('li')) {
        target.style.backgroundColor = 'lightgrey';
    }
})


const sports = document.querySelector('#sports');
const newSport = document.createElement('li');

newSport.innerText = 'Rugby';
newSport.setAttribute('id', 'rugby');

sports.appendChild(newSport)