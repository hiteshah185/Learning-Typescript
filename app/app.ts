function electronMoves() {
    var name = "My Electronics App"; //Naming
    var messageElement = document.getElementById('messages');
    messageElement!.innerText = 'Voltage or a potential difference causes electrons to flow in a wire.';
    //A Sample message
}
document.getElementById('startFlow')!.addEventListener('click', electronMoves);