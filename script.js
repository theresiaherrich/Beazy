function toggleForm(formType) {
  const loginForm = document.querySelector('.login-form');
  const signupForm = document.querySelector('.signup-form');
  if (formType === 'signup') {
    loginForm.style.display = 'none';
    signupForm.style.display = 'block';
  } else {
    loginForm.style.display = 'block';
    signupForm.style.display = 'none';
  }
}
