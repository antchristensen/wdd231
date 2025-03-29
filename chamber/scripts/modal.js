function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "block";

    
    const focusableElements = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    if (focusableElements.length > 0) {
        focusableElements[0].focus(); // Focus first focusable element
    }

    
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeModal(modalId);
        }
    });

  
    modal.addEventListener('keydown', (event) => {
        const focusableElementsArray = Array.from(focusableElements);
        const firstElement = focusableElementsArray[0];
        const lastElement = focusableElementsArray[focusableElementsArray.length - 1];

        if (event.key === 'Tab') {
            if (event.shiftKey) {
                if (document.activeElement === firstElement) {
                    lastElement.focus();
                    event.preventDefault();
                }
            } else {
                if (document.activeElement === lastElement) {
                    firstElement.focus();
                    event.preventDefault();
                }
            }
        }
    });
}


function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "none";

    
    const triggerButton = document.querySelector(`[onclick="openModal('${modalId}')"]`);
    if (triggerButton) {
        triggerButton.focus();
    }
}

window.onclick = function (event) {
    const modals = document.querySelectorAll(".modal");
    modals.forEach((modal) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
};
