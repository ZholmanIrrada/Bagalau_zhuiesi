// Firebase конфигурациясы
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Firebase-ті инициализациялау
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Бағалау формасына оқиға тіркеу
document.getElementById("feedbackForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const formData = {};

    // Барлық input (type="number") элементтерін оқу
    document.querySelectorAll("input[type='number']").forEach(input => {
        formData[input.name] = parseInt(input.value) || 0;
    });

    // Барлық textarea (пікір) элементтерін оқу
    document.querySelectorAll("textarea").forEach(textarea => {
        formData[textarea.name] = textarea.value.trim();
    });

    // Firestore-ға сақтау
    db.collection("feedbacks").add(formData)
        .then(() => {
            alert("Пікіріңіз сәтті сақталды! Рақмет!");
            document.getElementById("feedbackForm").reset();
        })
        .catch((error) => {
            console.error("Сақтау кезінде қате шықты: ", error);
            alert("Қате орын алды. Қайта көріңіз.");
        });
});
