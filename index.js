function validateForm(form) {
    // Simple form validation: check if required fields are filled
    const email = form.email.value;
    const teamName = form.teamName.value;
    const players = [form.player1.value, form.player2.value, form.player3.value];

    if (!email || !teamName || players.some(player => player === "")) {
        alert("Please fill in all fields.");
        return false;
    }

    alert("Registration submitted successfully!");
    return true;
}

//show that you can't take more than 3 players

const form = document.getElementById('player-form');
const select = document.getElementById('football-player');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', function(event) {
    // Check if exactly 3 options are selected
    const selectedOptions = Array.from(select.selectedOptions);
    if (selectedOptions.length !== 3) {
        event.preventDefault(); // Prevent form submission
        errorMessage.textContent = 'Please select exactly 3 players.';
    } else {
        errorMessage.textContent = ''; // Clear error message if valid
    }
});