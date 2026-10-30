  import { auth} from "../config.js"; 
  import {signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/13.1.0/firebase-auth.js';

  

  document.addEventListener("DOMContentLoaded", () => {
    // Use IDs — change these to match your inputs
    const nameInput = document.getElementById("name") || document.querySelector('input[placeholder*="Name"]');
    const emailInput = document.getElementById("email") || document.querySelector('input[type="email"]');
    const passwordInput = document.getElementById("password") || document.querySelector('input[type="password"]');
    const loginBtn = document.getElementById("loginBtn") || document.querySelector('button');

    console.log("Found:", { loginBtn, emailInput, passwordInput });

    if (!loginBtn) {
      console.error("Login button not found! Add id='loginBtn' to your button");
      return;
    }

    loginBtn.addEventListener("click", async (e) => {
      e.preventDefault();
      
      const email = emailInput?.value.trim();
      const password = passwordInput?.value.trim();
      const name = nameInput?.value.trim() || "otlotleng";

      if (!email || !password) {
        alert("Enter email and password");
        return;
      }

      loginBtn.textContent = "Logging in...";
      loginBtn.disabled = true;

      try {
        const cred = await signInWithEmailAndPassword(auth, email, password);
        
        localStorage.setItem("user", JSON.stringify({
          uid: cred.user.uid,
          email: cred.user.email,
          name: name
        }));

      localStorage.setItem("userEmail", cred.user.email);
    localStorage.setItem("userId", cred.user.uid);
    localStorage.setItem("isLoggedIn", "true");

        alert(`Welcome ${name} !`);
        
        // SMART REDIRECT - works from any folder
        if (window.location.pathname.includes("/auth/")){
 window.location.href = "../explore.html"; // if index.html is in auth folder
        }else{
            Window.location.href ="../explore.html"; // if index.html is in hotel root
        }
       



      } catch (err) {
        console.error(err);
        alert("Login failed: " + err.message);
        loginBtn.textContent = "loginn";
        loginBtn.disabled = false;
      }
    });
  });

  // FORGOT PASSWORD FEATURE - Makes "Forgot Password?" work
import { sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-auth.js";

const forgotLink = document.querySelector('a[href*="Forgot"], .forgot-password, #forgotPasswordLink') ||
                   document.evaluate("//a[contains(text(),'Forgot Password')]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

// If link doesn't have ID, add ID to your HTML first:
// <a href="#" id="forgotPasswordLink">Forgot Password?</a>

if (forgotLink || document.getElementById('forgotPasswordLink')) {
  const link = document.getElementById('forgotPasswordLink') || forgotLink;
 
  link.addEventListener('click', async (e) => {
    e.preventDefault();
   
    // Get email from your Email Address input
    const emailInput = document.getElementById('email') || document.getElementById('emailInput') || document.querySelector('input[type="email"]');
    const email = emailInput?.value.trim();

    // If no email typed, ask for it
    let targetEmail = email;
    if (!targetEmail) {
      targetEmail = prompt("Enter your email to reset password:\n(e.g. otlotlengsepamo905@gmail.com)");
    }

    if (!targetEmail) {
      alert("Please enter your email first.");
      return;
    }

    try {
      await sendPasswordResetEmail(auth, targetEmail);
      alert(`✅ Reset email sent to ${targetEmail}!\n\nCheck your inbox (and spam) - Click the link to set new password.`);
      console.log("Password reset email sent to:", targetEmail);
    } catch (error) {
      console.error(error);
      if (error.code === 'auth/user-not-found') {
        alert("❌ No account found with that email. Please signup first!");
        window.location.href = "signup.html";
      } else if (error.code === 'auth/invalid-email') {
        alert("❌ Invalid email format!");
      } else if (error.code === 'auth/network-request-failed') {
        alert("❌ Network blocked! Use phone hotspot - school WiFi blocks Firebase.");
      } else {
        alert("❌ Error: " + error.message);
      }
    }
  });
} 