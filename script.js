<!-- Firestore SDK қажет -->
<script src="https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js"></script>

<script>
  const firebaseConfig = {
    apiKey: "AIzaSyCuCW1G6bqxb8EI_YZZ2dpqnyDC1FXaRrw",
    authDomain: "bagalausaity.firebaseapp.com",
    databaseURL: "https://bagalausaity-default-rtdb.firebaseio.com",
    projectId: "bagalausaity",
    storageBucket: "bagalausaity.appspot.com",
    messagingSenderId: "159427702781",
    appId: "1:159427702781:web:d56f44c70ec7ccbaeaf394",
    measurementId: "G-KV7WSEHL3W"
  };

  // Firebase-ті инициализациялау
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();

  // Форманы жіберу
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
</script>
