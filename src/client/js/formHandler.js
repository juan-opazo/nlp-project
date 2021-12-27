function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    if(Client.checkForName(formText)) {
        postData('http://localhost:8081/api', {url: formText})
        .then(function(res) {
            document.getElementById("results").innerHTML = res.message;
        })
    } else {
        alert('Seems like an invalid URL, please try with a valid URL.');
    }

    const postData = async (url = "", data = {}) => {
        console.log('Analyzing:', data);
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
            console.log('error', error);
        }
    };

    // console.log("::: Form Submitted :::")
    // fetch('http://localhost:8080/test')
    // .then(res => res.json())
    // .then(function(res) {
    //     document.getElementById('results').innerHTML = res.message
    // })
}

export { handleSubmit }
