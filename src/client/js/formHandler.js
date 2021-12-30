function handleSubmit(event) {
    event.preventDefault()
 
    let formText=document.getElementById('name').value;
    let language=`EN`;
    if(Client.checkForName(formText)) {
        console.log("::: Form Submitted :::")
    
        postData('http://localhost:8080/api', {url: formText})
        .then(function(res) {
            console.log(res);
            document.getElementById('polarity').innerHTML = 'Polarity: '+res.score_tag;
            document.getElementById("agreement").innerHTML = `Agreement: ${res.agreement}`;
            document.getElementById("subjectivity").innerHTML = `Subjectivity: ${res.subjectivity}`;
            document.getElementById("confidence").innerHTML = `Confidence: ${res.confidence}`;
            document.getElementById("irony").innerHTML = `Irony: ${res.irony}`;
        })
        } else {
            alert('Seems like an invalid URL, please try with a valid URL.');
        }

}


const postData = async (url = "", data = {}) => {
    console.log(data)
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });
    try {
        const newData = await response.json();
        console.log('Data received:', newData)
        return newData;
    } catch (error) {
        console.log(response);
        console.log('error', error);
    }
};
    
export { handleSubmit }