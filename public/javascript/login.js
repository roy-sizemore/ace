const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const email = document.querySelector('#username-input').value.trim();
  const password = document.querySelector('#pw-input').value.trim();

  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      if (!isTrainer) {
      // If successful, redirect the browser to the profile page
      document.location.replace('/competencies');
    } else {
      document.location.replace('/training');
    }
  } else {
    document.location.replace('/login');
  };
  };
};

document
  .querySelector('#login-button')
  .addEventListener('click', loginFormHandler);
