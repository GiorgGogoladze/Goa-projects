document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('account-form');
    let accountId = 1;
    const accounts = [];

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const balance = document.getElementById('balance').value;

        const account = {
            id: accountId++,
            name,
            email,
            balance: parseFloat(balance).toFixed(2)
        };

        accounts.push(account);
        console.log(accounts);

        form.reset();
    });
});
