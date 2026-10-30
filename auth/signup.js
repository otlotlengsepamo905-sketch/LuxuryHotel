import { auth, db } from "../config.js";
import { createUserWithEmailAndPassword, updateProfile } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-auth.js";
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-firestore.js";

const signupForm = document.getElementById("interactive-form");

if (signupForm) {
  signupForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    // FIX: Match your HTML IDs - use nameInput not name
    const name = document.getElementById("name")?.value.trim() || document.getElementById("nameInput")?.value.trim();
    const email = document.getElementById("email")?.value.trim() || document.getElementById("emailInput")?.value.trim();
    const password = document.getElementById("password")?.value || document.getElementById("passwordInput")?.value;
    const confirmPassword = document.getElementById("confirmpassword")?.value;
    const termsConsent = document.getElementById("terms-consent")?.checked;
    const feedbackContainer = document.getElementById("form-feedback");

    if (feedbackContainer) {
      feedbackContainer.textContent = "";
      feedbackContainer.style.color = "inherit";
    }

    // 1. Password Matching Validation (YOUR CODE - GOOD)
    if (password !== confirmPassword) {
      if (feedbackContainer) {
        feedbackContainer.style.color = "#dc3545";
        feedbackContainer.textContent = "❌ Passwords do not match. Please try again.";
      } else {
        alert("Passwords do not match");
      }
      return;
    }

    // 2. Minimum Length Rule Check (YOUR CODE - GOOD)
    if (password.length < 6) {
      if (feedbackContainer) {
        feedbackContainer.style.color = "#dc3545";
        feedbackContainer.textContent = "❌ Password must be at least 6 characters long.";
      }
      return;
    }

    // 3. Document Terms Agreement Safeguard (YOUR CODE - GOOD)
    if (termsConsent !== undefined && !termsConsent) {
      if (feedbackContainer) {
        feedbackContainer.style.color = "#dc3545";
        feedbackContainer.textContent = "❌ You must agree to the Terms & Conditions.";
      }
      return;
    }

    // 4. THE MISSING PART - ACTUAL SIGNUP TO FIREBASE
    try {
      const cred = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(cred.user, { displayName: name });
      
      // Save to Firestore
      await setDoc(doc(db, "users", cred.user.uid), {
        name: name,
        email: email,
        createdAt: new Date()
      });

      if (feedbackContainer) {
        feedbackContainer.style.color = "green";
        feedbackContainer.textContent = "✅ Account created! Redirecting to login...";
      }
      
      setTimeout(() => {
        window.location.href = "index.html"; // FORCE SIGNUP -> LOGIN FLOW
      }, 1000);

    } catch (error) {
      console.error(error);
      if (feedbackContainer) {
        feedbackContainer.style.color = "#dc3545";
        if(error.code === 'auth/email-already-in-use'){
          feedbackContainer.textContent = "❌ Email already used. Please log in instead.";
        } else if(error.code === 'auth/network-request-failed'){
          feedbackContainer.textContent = "❌ Network error! Use hotspot, school WiFi blocks Firebase.";
        } else {
          feedbackContainer.textContent = "❌ " + error.message;
        }
      }
    }
  });
}

