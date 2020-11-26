// Full screen window

document.addEventListener("keydown", function(e) {
    console.log(e)
    // space bar key
    if (e.keyCode === 32) {
        runSpeechRecognition();
    } 
    // down arrow key
    else if (e.keyCode === 40) {
        // next mail
        textToAudio('down');
    }
    // up arrow key
    else if (e.keyCode === 38) {
        // prev mail
        textToAudio('up');
    } 
    // // j key
    // else if (e.keyCode === 13) {
    //     navigateInbox();
    // }
}, false);

runSpeechRecognition = () => {
    // new speech recognition object
    var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
    var recognition = new SpeechRecognition();

    // This runs when the speech recognition service starts
    recognition.onstart = () => {
        textToAudio('listening, please speak');
    };
    
    recognition.onspeechend = () => {
        textToAudio('stopped listening');
        recognition.stop();
    }

    // This runs when the speech recognition service returns result
    recognition.onresult = function(event) {
        var transcript = event.results[0][0].transcript;
        // var transcript = 'go to inbox';
        var confidence = event.results[0][0].confidence;
        // console.log(event, results...)
        console.log(transcript, confidence);
        // console.log(transcript);

        var flag = false;

        if (transcript.includes('go to')) {
            page = {
                'inbox': 'inbox.html',
                'compose': 'composemail.html',
                'draft': 'draft.html',
                'draught': 'draft.html',
                'dashboard': 'index.html'
            }
            // console.log(transcript.split()[2])
            for(el in page) {
                if(transcript.includes(el)) {
                    textToAudio(`Redirecting you to ${el}`);
                    window.location = page[el];
                    flag = true;
                }
            }
            if (!flag) {
                textToAudio('Please retry');
            }
        }
    };
  
    // start recognition
    recognition.start();
}

textToAudio = (msg) => {                
    let speech = new SpeechSynthesisUtterance();
    speech.lang = "en-US";
    
    speech.text = msg;
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    
    window.speechSynthesis.speak(speech);
}

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



// getMails = () => {
//     const url = "http://localhost:8000";
	
// 	setInterval(
//     () => {
//       fetch(url+"/receive")
//             .then((response) => {
//              //  console.log(response.json());
//               return response.json();
//              })
//              .then((data)=>{
//             //    setFaceDetected(data);
//                console.log(data);
//              })}
//     , 3000);
// }