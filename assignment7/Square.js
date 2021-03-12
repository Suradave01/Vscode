let start = document.getElementById('start');

const Startgame = () => {
    alert("Ready!")
    addBox()
    timeStart()
    document.querySelector('.win').style.display = 'none';
    document.querySelector('.lose').style.display = 'none'; 
}
start.addEventListener('click', Startgame);

const addBox = () => {
    let numbox = document.querySelector('#numbox').value;
    let Numberbox = parseInt(numbox)
    let color = document.getElementById('color').value;
    let layer = document.querySelector('#game-layer');
    for ( let i = 0; i < Numberbox; i++ ) {
        let tempbox = document.createElement('div');
        tempbox.className = 'square';
		tempbox.id = "box" + i;
        tempbox.style.background = color;
		tempbox.style.left = Math.random() * (690 - 50) + "px";
		tempbox.style.top = Math.random() * (590 - 50) + "px";  
        layer.appendChild(tempbox);
        bindBox(tempbox);
    }
}

const bindBox = (box) => {
	let Boxingame = document.getElementById('game-layer');
	box.onclick = () => {
		Boxingame.removeChild(box);
		console.log(box);
	}
}

const timeStart = () => {
    let Second = 1000;
	let timer = null;
	let time = 0.5*60; 
	let showtime = document.getElementById('clock');
    let start = document.getElementById('start');
    console.log(time);

	timer = setInterval(timeCount,Second);
    function timeCount() {
        let showtime = document.getElementById('clock');
        let numbox = document.querySelector('#numbox');
        let squarebox = document.querySelectorAll('#game-layer div')
        let number = document.querySelector('#numbox').value;
        time = --time;
        showtime.innerHTML = time;
        if( time > 0 ) {
            document.getElementById('start').disabled = true;
        }
        else {
            document.getElementById('start').disabled = false;
        }
        if( number == '') {
            alert("Pls! Enter Number of box.")
            clearInterval(timer);
            timer = null;
            showtime.innerHTML = '';
            document.getElementById('start').disabled = false;
        }
        else if( squarebox.length == 0) {
            alert(`You win! use time ${time} second`);
			document.getElementById('start').disabled = false;
            clearInterval(timer);
            timer = null;
			clearScreen();
            numbox.value = '';
            showtime.innerHTML = '';
            document.querySelector('.win').style.display = 'block';
        }
        else if ( time == 0) {
            alert('You lose')
            document.getElementById('start').disabled = false;
            clearInterval(timer);
			timer = null;
			clearScreen();   
            numbox.value = '';
            showtime.innerHTML = '';
            document.querySelector('.lose').style.display = 'block';       
        }
    }
	
}

const clearScreen = () => {
	let allbox = document.querySelectorAll("#game-layer div");
	let layerBox = document.getElementById('game-layer');			

	for (let i = 0; i < allbox.length; i++ ) {
		layerBox.removeChild( allbox[i] );
	}

}
