class Password {
    superstrongpassword() {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        const numbers = "0123456789";
        const special_chars = "!@#$%^&*()_+";
        let password = "";

        for (let i = 0; i < 12; i++) {
            if (i === 0) {
                password += chars.charAt(Math.floor(Math.random() * chars.length)).toUpperCase();
            } else if (i === 6) {
                password += special_chars.charAt(Math.floor(Math.random() * special_chars.length));
            }
            else if (i === 10){
                password += numbers.charAt(Math.floor(Math.random() * numbers.length));
            }
            else {
                password += chars.charAt(Math.floor(Math.random() * chars.length));
            }
        }
        return password;
    }

    copypassword() {
        const input = document.getElementById("password");
        navigator.clipboard.writeText(input.value)
            .then(() => alert("Password copied!"))
            .catch(err => console.error("Copy failed", err));
    }
}

const obj = new Password();

document.getElementById("generate").addEventListener("click", () => {
    const generatedPassword = obj.superstrongpassword();
    document.getElementById("password").value = generatedPassword; // use .value
});

document.getElementById("clear-btn").addEventListener("click", () => {
    document.getElementById("password").value = "";
});

document.getElementById("copy-btn").addEventListener("click", () => {
    obj.copypassword();
});