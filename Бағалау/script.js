function calculateScores() {
    const rows = document.querySelectorAll("#scoreTable tbody tr");
    const results = document.getElementById("resultsList");
    results.innerHTML = "";

    rows.forEach((row) => {
        const inputs = row.querySelectorAll(".score");
        let total = 0;
        inputs.forEach(input => {
            let val = parseInt(input.value);
            if (!isNaN(val) && val >= 1 && val <= 3) {
                total += val;
            }
        });
        const li = document.createElement("li");
        li.textContent = `${row.cells[0].textContent}: Жалпы ұпай – ${total}`;
        results.appendChild(li);
    });
}

function showResults() {
    const password = prompt("Құпия сөзді енгізіңіз:");
    if (password === "Irrada") { // Құпия сөз осында
        document.getElementById("resultsSection").style.display = "block";
    } else {
        alert("Құпия сөз дұрыс емес!");
    }
}

document.getElementById("feedbackForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Пікіріңіз қабылданды! Рақмет!");
    this.reset();
});
