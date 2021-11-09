let messageElement = document.getElementById('message')
let hideMessageElement = document.getElementById('hideMessage')


function showMessage() {
    messageElement.classList.add('messageVisible')
    hideMessageElement.classList.remove('messageVisible')
    epilepsy()
}

function hideMessage() {
    messageElement.classList.remove('messageVisible')
    hideMessageElement.classList.add('messageVisible')
    setTimeout( () => {showMessage()}, 3000 )
}


function unsJoguim(x, y) {
    console.log("BORA JOGAR "+ x + " " + "LÁ EM CASA, ÀS " + y + " HOJE") }

    unsJoguim("Jogo da Velha", "17:46")