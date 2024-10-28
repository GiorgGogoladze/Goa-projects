document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('profile-form');
    const profileInfo = document.getElementById('profile-info');

    form.onsubmit = (e) => {
        e.preventDefault();

        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const age = form.age.value;
        const dob = form.dob.value;

        const profileText = `Name: ${firstName} ${lastName}\nAge: ${age}\nDate of Birth: ${dob}`;
        profileInfo.textContent = profileText;

        form.reset();
    };
});
