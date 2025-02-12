const firebaseConfig = {
    apiKey: "AIzaSyCVkcwgS7vz9YnPOIqsmOP5xkS-ctOYZpY",
    authDomain: "random-game-b4568.firebaseapp.com",
    projectId: "random-game-b4568",
    storageBucket: "random-game-b4568.firebasestorage.app",
    messagingSenderId: "607077515672",
    appId: "1:607077515672:web:072d0652af1dc54852ebed",
    measurementId: "G-SGEBPN0R09"
};

const app = window.firebase.initializeApp(firebaseConfig);
const db = window.firebase.firestore();

var jsonObj = {
    code: "",
    expires: 0,
    roblox_id: 0
}

function generateRandomString(length) {
    const charset = "ABCDEFGIJKMNOPRSTVWXYZ2345678";
    let result = "";
 
    for (let i = 0; i < length; i++) {
       const randomIndex = Math.floor(Math.random() * charset.length);
       result += charset[randomIndex];
    }
 
    return result;
};

window.addEventListener("DOMContentLoaded", (l) => {
    const GENERATE_BUTTON = document.getElementById('roblox_id_button');
    const ROBLOX_ID_INPUT = document.getElementById('roblox_id');

    GENERATE_BUTTON.onclick = function() {
        var code = generateRandomString(6);
        var expires = (Math.floor(Date.now() / 1000)) + 604800

        console.log(ROBLOX_ID_INPUT.value);
        
        db.collection("data_rbx").add({
            userId: parseInt(ROBLOX_ID_INPUT.value),
            code: code,
            expires: expires
        })
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
    }
});
