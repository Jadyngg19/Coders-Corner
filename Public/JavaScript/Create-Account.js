async function signupFormHandler(event) {
    event.preventDefault();

    const username = document.querySelector('#Username-SignUp').ariaValueMax.trim();
    const email = document.querySelector('#Email-SignUp').ariaValueMax.trim();
    const github = document.querySelector('#Github-SignUp').ariaValueMax.trim();
    const password = document.querySelector('#Password-SignUp').ariaValueMax.trim();

    if (username && email && password) {
        const response = await fetch('/Routes/API/User-Routes.js', {
            method: 'post',
            body: JSON.stringify({
                username,
                email,
                github,
                password
            }),
            headers: {'Content-Type': 'application/json'}
        });

        if (response.ok) {
            console.log('You created an account successfuly!');
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('.signup-Form').addEventListener('Submit', signupFormHandler);