// Full screen window

document.addEventListener("keydown", function(e) {
    console.log(e)
    if (e.code === 'Space') {
        runSpeechRecognition();
    } 
    else if (e.code === 'ArrowDown') {
        // next mail
        textToAudio('down');
    }
    else if (e.code === 'ArrowUp') {
        // prev mail
        textToAudio('up');
    } 
    // // j key
    // else if (e.keyCode === 13) {
    //     navigateInbox();
    // }
}, false);

navigateInbox = () => {
    // console.log('hello');
    const emails = document.getElementById('inbox-mails');
    console.log(emails);
    document.addEventListener("keypress", function(e) {
        console.log(e)
        // down arrow key
        if (e.keyCode === 40) {
            // next mail
            textToAudio('down');
        }
        // up arrow key
        else if (e.keyCode === 38) {
            // prev mail
            textToAudio('up');
        } 
    }, false);
} 