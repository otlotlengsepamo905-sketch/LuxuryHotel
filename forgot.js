document.addEventListener('DOMContentLoaded', () => {
    const forgotPasswordTrigger = document.getElementById('forgot-password-trigger');
    const closeModalTrigger = document.getElementById('close-modal-trigger');
    const modalOverlay = document.getElementById('forgot-password-modal');
    const forgotPasswordForm = document.getElementById('forgot-password-form');
    const successMessage = document.getElementById('reset-success-message');

    // 1. Open Modal
    forgotPasswordTrigger.addEventListener('button' ? 'click' : 'click', (e) => {
        e.preventDefault();
        modalOverlay.classList.add('is-active');
        modalOverlay.setAttribute('aria-hidden', 'false');
    });

    // 2. Close Modal function
    const closeModal = () => {
        modalOverlay.classList.remove('is-active');
        modalOverlay.setAttribute('aria-hidden', 'true');
        forgotPasswordForm.reset(); // Clear input fields
        successMessage.style.display = 'none'; // Hide message for next time
        forgotPasswordForm.style.display = 'block'; // Show form again
    };

    closeModalTrigger.addEventListener('click', closeModal);

    // Close when clicking outside the card backdrop
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });

    // 3. Handle Form Submission
    forgotPasswordForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('reset-email').value;

        // Perform mock API logic here
        console.log(`Password reset link requested for: ${email}`);

        // UI Feedback transformation
        forgotPasswordForm.style.display = 'none';
        successMessage.style.display = 'block';

        // Optional: Auto close modal after 3 seconds
        setTimeout(() => {
            closeModal();
        }, 3000);
    });
});
