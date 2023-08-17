const button  = document.querySelector("button")
button.addEventListener("click" , () => {
    console.log("checkout");
    fetch('/v1/checkout/sessions' , {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            items: [
                {id:1 , quantity:3},
                {id:2 , quantity:2},
            ]
        })
    }).then(res => {
        if(res.ok) return res.json()
        return res.json().then(json => Promise.reject(json))
    }).then(({url}) => {
        console.log(url); 
        window.location = url
    }).catch(e => {
        console.log(e)
    })
})