let messages = [
    'You won 1000 USD! Congratulations!',
    'You did not win anything, keep trying!',
    'You won 4000 USD! Awesome!',
    'You won a car of your choice! Nice!',
    'You won 2 tickets for any place you want! Congratulations!',
    'You won 1 year free tickets! Incredible!'
]

function newMessage(){
    let randomNumber = Math.floor(Math.random() * (messages.length));
    document.getElementById('messageDisplay').innerHTML = messages[randomNumber];
}