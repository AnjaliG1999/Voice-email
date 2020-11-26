sendMail = () => {
    const url = "http://localhost:8000";
    const To = document.getElementById("to").value;
    const Subject = document.getElementById("subject").value;
    const Message = document.getElementById("message").value;
    data = {
        "To": To,
        "Subject": Subject,
        "Content": Message
    }
    // console.log(data);
    const requestOptions = {    
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };
    fetch(url+'/send', requestOptions)
    .then(response => response.json())
    .then(data => {
        // console.log("Okay");
        textToAudio("Mail sent successfully! Redirecting you to the dashboard"); 
        window.location.href = 'index.html';
    })
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

cancelSend = () => {
    textToAudio('Mail not sent. Redirecting you to inbox');
    window.location.href='inbox.html';
}