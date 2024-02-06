function startGame() {
    let playerName: string = 'Arjun';
    logPlayer(playerName);
    var messageElement = document.getElementById('messages');
    messageElement!.innerText = 'Welcome to Electronics Game. Start new game.';
}
function logPlayer(name: string) {
    console.log('New game staring for player - ', name);
}
document.getElementById('startGame')!.addEventListener('click', startGame);