function electronMoves() {
    var messageElement = document.getElementById('messages');
    messageElement.innerText = 'Voltage or a potential difference causes electrons to flow in a wire.';
}
document.getElementById('startFlow').addEventListener('click', electronMoves);
