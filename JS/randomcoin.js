var round = prompt("จำนวนรอบ");
for(var i = 0; i < round; i++ ) {
    var random = prompt("หัว หรือ ก้อย")
    document.getElementById("randomcoin-me").innerHTML += "คุณทาย : " + random + "<br>"
    var random_coin = ""
    if(Math.floor(Math.random()*10) <= 5 ) {
        random_coin = "หัว"
    }
    else {
        random_coin = "ก้อย"
    }

    if(random == random_coin) {
        alert("คุณทายถูก")
    }
    else {
        alert("คุณทายผิด")
    }
    document.getElementById("randomcoin-answer").innerHTML += "หน้าที่ออก : " + random_coin + "<br>"
}