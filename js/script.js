
const form = document.getElementById("loginForm");
    form.addEventListener("submit", function(e){
    e.preventDefault();
const email = document.getElementById("email").value;
const password = document.getElementById("password").value;
const toastEl = document.getElementById("loginToast");
const toastMsg = document.getElementById("toastMessage");

   if(email === "admin@gmail.com" && password === "1234"){
      toastMsg.innerText = "Login Successful!";
      toastEl.classList.add("bg-success","text-white");
      setTimeout(()=>{
      window.location.href="dashboard.html";
      },1500);
    }
   else{
      toastMsg.innerText = "Invalid Email or Password";
      toastEl.classList.add("bg-danger","text-white");
    }
const toast = new bootstrap.Toast(toastEl);
       toast.show();
});