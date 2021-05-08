const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const email = document.querySelector('#username-input').value.trim();
  const password = document.querySelector('#pw-input').value.trim();

  if (email && password) {
    // Send a POST request to the API endpoint
    let response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json', }
    })

    const body = await response.json();

    if (response.status === 200) {
      if (!body.user.is_trainer) {
        document.location.replace('/competencies');
        console.log('something', email, password)
      } else {
        document.location.replace('/training');
        console.log('anything')
      }
    } else {
      document.location.replace('/login');
      console.log('nothing', email, password)
    };
  };
};

document
  .querySelector('#login-button')
  .addEventListener('click', loginFormHandler);
