let value = document.getElementById('text1');
let Postbutton = document.getElementById('post');
let ShowTopic = document.getElementById('topic1');
let Clear = document.getElementById('clear');
var i = 0;

let postFunction = () => {
    let text = value.value;
    if(i == 0 && text != '') {
        document.getElementById('topic1').style.display= 'block';
        document.getElementById('topic1').innerHTML = text;
        document.getElementById('text1').value = '';
        console.log(text);
        console.log(value);
        i++
    }
    else if(i == 1 && text != '') {
        document.getElementById('comment1').style.display = 'block';
        document.getElementById('comment1').innerHTML = text;
        document.getElementById('text1').value = '';
        i++
    }
    else if (i == 2 && text != '') {
        document.getElementById('comment2').style.display = 'block';
        document.getElementById('comment2').innerHTML = text;
        document.getElementById('text1').value = '';
        i++
        Postbutton.disabled = true;
    }
    else {
        if(i <= 2) {
            alert("พิมอะไรซักอย่าง")
        }
    }
    console.log(i);
    console.log(typeof i);
}
Postbutton.addEventListener('click', postFunction);

function clearFunction() {
    document.getElementById('topic1').style.display='none';
    document.getElementById('topic1').innerHTML = "";
    document.getElementById('comment1').style.display='none';
    document.getElementById('comment1').innerHTML = "";
    document.getElementById('comment2').style.display='none';
    document.getElementById('comment2').innerHTML = "";
    document.getElementById('text1').value = '';
    Postbutton.disabled = false;
    i = 0;
}
Clear.addEventListener('click', clearFunction);



