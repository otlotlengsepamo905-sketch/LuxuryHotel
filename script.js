
document.addEventListener('DOMContentLoaded', () => {
  // --- DOM Elements ---
  const tabs = document.querySelectorAll('.tab');
  const authForm = document.getElementById('auth-form');
  const identityInput = document.getElementById('identity-input');
  const passwordInput = document.getElementById('password-input');
  const togglePassword = document.getElementById('toggle-password');
  
  // Dynamic UI Content Elements
  const formSubLabel = document.getElementById('form-sub-label');
  const formMainTitle = document.getElementById('form-main-title');
  const formDesc = document.getElementById('form-desc');
  const identityLabel = document.getElementById('identity-label');
  const passcodeLabel = document.getElementById('passcode-label');
  const forgotLink = document.getElementById('forgot-link');
  const submitBtn = document.getElementById('submit-btn');
  const alternativeAuthSection = document.getElementById('alternative-auth-section');
  const signupPrompt = document.getElementById('signup-prompt');
  
  // Error Elements
  const identityError = document.getElementById('identity-error');
  const passwordError = document.getElementById('password-error');
  const emailWrapper = document.getElementById('email-wrapper');
  const passwordWrapper = document.getElementById('password-wrapper');

  // Switch Box Footer Elements
  const switchBoxBtn = document.getElementById('switch-box-btn');
  const switchBoxTitle = document.getElementById('switch-box-title');
  const switchBoxDesc = document.getElementById('switch-box-desc');

  let currentRole = 'member'; // Track state ('member' or 'staff')

  // --- 1. Tab & Role Switching Logic ---
  function updateRoleUI(role) {
    currentRole = role;
    
    // Clear any previous error states safely during transitions
    clearErrors();

    // Toggle active classes on tab headers
    tabs.forEach(t => {
      if(t.getAttribute('data-target') === role) {
        t.classList.add('active');
      } else {
        t.classList.remove('active');
      }
    });

    // Content configuration swap based on role selected
    if (role === 'staff') {
      formSubLabel.textContent = '⚙️ INTERNAL TERMINAL';
      formMainTitle.textContent = 'Operations Gateway';
      formDesc.textContent = 'Authorized node portal for sanctuary directors, regional stewards, and internal operations.';
      identityLabel.textContent = 'OPERATOR KEY ID / STAFF EMAIL';
      passcodeLabel.textContent = 'SECURE PASSCODE';
      forgotLink.textContent = 'Request Node Reset';
      submitBtn.textContent = 'Initialize Operator Session →';
      
      // Hide external customer methods for security/cleanliness
      alternativeAuthSection.classList.add('hidden');
      signupPrompt.classList.add('hidden');

      // Update structural alternative box at bottom
      switchBoxTitle.textContent = 'Looking for the Guest Portal?';
      switchBoxDesc.textContent = 'Member access, booking portfolios, and curation portfolios';
      switchBoxBtn.textContent = 'Member Log In →';
    } else {
      formSubLabel.textContent = '🔑 BESPOKE ACCESS';
      formMainTitle.textContent = 'Welcome back to Sanctuary';
      formDesc.textContent = 'Access curated reservations, bespoke member privileges, and direct private concierge communication.';
      identityLabel.textContent = 'ACCOUNT KEY / EMAIL ADDRESS';
      passcodeLabel.textContent = 'PASSCODE / DIGITAL KEY';
      forgotLink.textContent = 'Forgot Sanctuary Key?';
      submitBtn.textContent = 'Sign In to Sanctuary →';
      
      // Unhide external consumer modules
      alternativeAuthSection.classList.remove('hidden');
      signupPrompt.classList.remove('hidden');

      // Update structural alternative box back
      switchBoxTitle.textContent = 'Switching to Operations?';
      switchBoxDesc.textContent = 'Sanctuary Directors & Concierge Staff';
      switchBoxBtn.textContent = 'Staff Key ID →';
    }
  }

  // Handle upper tab clicks
  tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      const selectedRole = e.target.getAttribute('data-target');
      updateRoleUI(selectedRole);
    });
  });

  // Handle alternative route lower block box action click
  switchBoxBtn.addEventListener('click', () => {
    const nextRole = currentRole === 'member' ? 'staff' : 'member';
    updateRoleUI(nextRole);
  });


  // --- 2. Password Visibility Handler ---
  togglePassword.addEventListener('click', () => {
    // Read current property type attribute value
    const currentType = passwordInput.getAttribute('type');
    
    if (currentType === 'password') {
      passwordInput.setAttribute('type', 'text');
      togglePassword.textContent = '🙈'; // Change visibility icon indicator text
    } else {
      passwordInput.setAttribute('type', 'password');
      togglePassword.textContent = '👁️';
    }
  });


  // --- 3. Client Validation & Error Clearing ---
  function clearErrors() {
    identityError.textContent = '';
    identityError.style.display = 'none';
    emailWrapper.classList.remove('invalid-input');

    passwordError.textContent = '';
    passwordError.style.display = 'none';
    passwordWrapper.classList.remove('invalid-input');
  }

  // Clear validation styling when user adjusts values inline
  identityInput.addEventListener('input', () => {
    identityError.style.display = 'none';
    emailWrapper.classList.remove('invalid-input');
  });

  passwordInput.addEventListener('input', () => {
    passwordError.style.display = 'none';
    passwordWrapper.classList.remove('invalid-input');
  });


  // --- 4. Form Interception & Network Simulation ---
  authForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Stop raw standard browser load refreshes
    clearErrors();

    let hasValidationError = false;
    const identityValue = identityInput.value.trim();
    const passwordValue = passwordInput.value;

    // Syntax validation requirements based on active selection role 
    if (currentRole === 'member') {
      // Basic Email Match Regular Expression
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+\$/;
      if (!emailRegex.test(identityValue)) {
        identityError.textContent = 'Please enter a valid Sanctuary email workspace address.';
        identityError.style.display = 'block';
        emailWrapper.classList.add('invalid-input');
        hasValidationError = true;
      }
    } else {
      // Staff validation allows alpha-numeric operator key IDs too
      if (identityValue.length  {
      // Revert loading presentation configurations cleanly
      submitBtn.disabled = false;
      submitBtn.classList.remove('loading');
      submitBtn.textContent = originalBtnText;

      // Mock dynamic result output feedback payload alert
      alert(`Successfully Authenticated as: [${currentRole.toUpperCase()}] ID: ${identityValue}`);
    }, 1800);
  });
});
