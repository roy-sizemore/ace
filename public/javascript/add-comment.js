async function newFormHandler(event) {
    event.preventDefault();

    const comment = document.querySelector("#comment-box").value

    const response = await fetch(`/api/dish`, {
        method: 'POST',
        body: JSON.stringify({
            
        })
    })
}