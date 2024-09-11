// document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');
    const loginForm = document.getElementById("loginForm");
    const loginInfo = document.getElementById("loginInfo");


//     // Example validation: check if username and password match hardcoded values
//     if (username === 'admin' && password === 'password123') {
//         alert('Login successful!');
//         errorMessage.textContent = '';
//     } else {
//         errorMessage.textContent = 'Invalid username or password.';
//     }
// });

loginForm.addEventListener("submit", function(event) {
    event.preventDefault();  // ป้องกันการรีเฟรชหน้า
    const username = inputUser.value;
    const password = inputPass.value;
   
    // แสดงข้อมูลใต้กล่องล็อกอิน
    loginInfo.innerHTML = `
        <p><strong>Username:</strong> ${username}</p>
        <p><strong>Password:</strong> ${password}</p>
    `;
});