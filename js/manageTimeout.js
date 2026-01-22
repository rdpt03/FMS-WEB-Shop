import { emptyCart } from "./localStorage/manageCart.js";
import { goHome } from "./router.js";

let idleTimer;

function resetIdleTimer() {
    console.log('start')
    clearTimeout(idleTimer);

    idleTimer = setTimeout(() => {
        goHome();

        emptyCart();

        // Restart timer to keep checking inactivity continuously
        resetIdleTimer();
    }, 2*60*1000);
}

// Event listeners
["mousemove", "keydown", "mousedown", "touchstart", "scroll"].forEach(event =>
    window.addEventListener(event, resetIdleTimer)
);

// Start timer on page load
resetIdleTimer();
