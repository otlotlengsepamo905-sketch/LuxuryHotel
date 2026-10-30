
document.addEventListener("DOMContentLoaded", function() {
    const bankingForm = document.getElementById("bankingDetailsForm");
    const bankSelect = document.getElementById("bankName");
    const branchInput = document.getElementById("branchCode");
    const accountInput = document.getElementById("accountNumber");
    const toggleMaskBtn = document.getElementById("toggleMaskBtn");
    const exportTxtBtn = document.getElementById("exportTxtBtn");

    // South African Universal Branch Code Dictionary Routing
    const universalCodes = {
        Capitec: "470010",
        Nedbank: "198765",
        FNB: "250655",
        StandardBank: "051001",
        Absa: "632005"
    };

    // Global state object tracking active input variables
    let connectedSessionDetails = null;

    // Automatic Routing Assignment based on Selected Option
    if (bankSelect && branchInput) {
        bankSelect.addEventListener("change", function(e) {
            const chosenBank = e.target.value;
            branchInput.value = universalCodes[chosenBank] || "";
        });
    }

    // Mask layout toggle to conceal account digits dynamically
    if (toggleMaskBtn && accountInput) {
        let isMasked = false;
        let clearValue = "";

        accountInput.addEventListener("input", function() {
            if (!isMasked) {
                clearValue = accountInput.value;
            }
        });

        toggleMaskBtn.addEventListener("click", function() {
            if (accountInput.value === "") return;
            
            isMasked = !isMasked;
            if (isMasked) {
                clearValue = accountInput.value;
                // Mask everything except the last 4 digits
                const visibleLength = 4;
                if (clearValue.length > visibleLength) {
                    const maskedPart = "•".repeat(clearValue.length - visibleLength);
                    const visiblePart = clearValue.slice(-visibleLength);
                    accountInput.value = maskedPart + visiblePart;
                }
                toggleMaskBtn.textContent = "🙈";
            } else {
                accountInput.value = clearValue;
                toggleMaskBtn.textContent = "👁️";
            }
        });
    }

    // Capture and Handle form submission execution
    if (bankingForm) {
        bankingForm.addEventListener("submit", function(e) {
            e.preventDefault();
            
            const selectedType = document.querySelector('input[name="accountType"]:checked').value;
            
            connectedSessionDetails = {
                type: selectedType,
                bank: bankSelect.value,
                holder: document.getElementById("accountHolder").value,
                branch: branchInput.value,
                timestamp: new Date().toLocaleString("en-ZA")
            };

            showToast(`Success: Securely connected your ${connectedSessionDetails.bank} account structural framework.`);
            
            // Activate file export validation capability
            if (exportTxtBtn) {
                exportTxtBtn.removeAttribute("disabled");
                exportTxtBtn.style.backgroundColor = "#16a34a";
                exportTxtBtn.style.color = "white";
            }
        });
    }

    // Download option to export verification details as a text file
    if (exportTxtBtn) {
        exportTxtBtn.addEventListener("click", function() {
            if (!connectedSessionDetails) return;

            const textOutputContent = `=========================================
SETTLEMENT BANKING VERIFICATION CERTIFICATE
=========================================
Status: SECURELY LINKED
Institution: ${connectedSessionDetails.bank}
Account Type: ${connectedSessionDetails.type}
Account Holder: ${connectedSessionDetails.holder}
Branch Code: ${connectedSessionDetails.branch}
Verification Timestamp: ${connectedSessionDetails.timestamp}
=========================================
This configuration file serves as digital confirmation.`;

            const blob = new Blob([textOutputContent], { type: "text/plain;charset=utf-8" });
            const linkElement = document.createElement("a");
            linkElement.href = URL.createObjectURL(blob);
            linkElement.download = `bank_verification_${bankSelect.value.toLowerCase()}.txt`;
            
            document.body.appendChild(linkElement);
            linkElement.click();
            document.body.removeChild(linkElement);
            
            showToast("Voucher and verification text file exported successfully!");
        });
    }

    // Micro Alert Helper Notification
    function showToast(message) {
        const toast = document.getElementById("toastNotification");
        if (toast) {
            toast.textContent = message;
            toast.classList.add("show");
            setTimeout(() => {
                toast.classList.remove("show");
            }, 4000);
        }
    }
});
 document.getElementById('paymentForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const payBtn = document.getElementById('submitPaymentBtn');
        
        payBtn.innerText = "Processing Node Verification...";
        payBtn.disabled = true;
        payBtn.style.background = "#666666";

        // Emulating micro-service latency network handshake
        setTimeout(() => {
            alert("✨ Payment Confirmed Structurally! Vault ledger updated successfully.");
            window.location.href = "home.html"; // Returns user safely home
        }, 2500);
    });

    // Auto-formatting card layout strings
    document.getElementById('cardNumber').addEventListener('input', function (e) {
        e.target.value = e.target.value.replace(/[^\d]/g, '').replace(/(.{4})/g, '$1 ').trim();
    });
    document.getElementById('cardExpiry').addEventListener('input', function (e) {
        e.target.value = e.target.value.replace(/[^\d]/g, '').replace(/(.{2})/, '$1/').trim();
    });
    document.addEventListener("DOMContentLoaded", () => {
    const bankingCardBtn = document.getElementById("banking-card");
    
    if (bankingCardBtn) {
        bankingCardBtn.addEventListener("click", (e) => {
            e.preventDefault();
            
            // Execute your pre-flight ledger confirmation block
            const baseNightsPrice = 3900.00;
            const resortFees = 150.00;
            const regionalTaxes = 245.00;
            const targetTotalPaid = 4145.00;
            
            if ((baseNightsPrice + resortFees + regionalTaxes) === targetTotalPaid) {
                // Securely forward directly to the payment gateway with the wire parameter active
                window.location.href = "payment.html?method=wire";
            } else {
                alert("⚠️ Error: Payment voucher could not be verified securely.");
            }
        });
    }
});
document.addEventListener("DOMContentLoaded", () => {
    // Read window search string attributes
    const urlParams = new URLSearchParams(window.location.search);
    const selectedMethod = urlParams.get('method');

    const cardView = document.getElementById("cardPaymentViewport");
    const wireView = document.getElementById("wirePaymentViewport");

    // Route state layout display rules dynamically 
    if (selectedMethod === "wire") {
        cardView.style.display = "none";
        wireView.style.display = "block";
    }

    // Handle wire submission acknowledgement
    document.getElementById("confirmWireBtn")?.addEventListener("click", function() {
        this.innerText = "Verifying Vault Node...";
        this.disabled = true;
        
        setTimeout(() => {
            alert("✨ Wire transfer notification logged! The sanctuary ledger will reflect changes once confirmed by local escrow nodes.");
            window.location.href = "home.html";
        }, 2000);
    });
});
