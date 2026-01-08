lucide.createIcons();

const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#password');

togglePassword.addEventListener('click', function () {
    // Toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);

    // Toggle the icon
    if (type === 'text') {
        this.innerHTML = '<i data-lucide="eye-off"></i>';
    } else {
        this.innerHTML = '<i data-lucide="eye"></i>';
    }

    // Re-render the new icon
    lucide.createIcons();
});