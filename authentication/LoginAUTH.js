import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getDatabase, ref, get } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCJmgsAtnZe74k6rNFn_jr2GLPMA3WCNdk",
          authDomain: "quickie-1dddc.firebaseapp.com",
          projectId: "quickie-1dddc",
          storageBucket: "quickie-1dddc.appspot.com",
          messagingSenderId: "607731414177",
          appId: "1:607731414177:web:d43b1d2194c349b4aface0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a reference to the Firebase database service
const db = getDatabase();

// Function to handle form submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Retrieve form field values
    const username = document.getElementById('User-login').value;
    const password = document.getElementById('Userpass-login').value;
    const email = document.getElementById('Email-login').value;
    const UserPIN = document.querySelector(' [data-value="User18PIN" ] ').value;
    const UserPHONE = document.getElementById('PhoneNumber').value;
    const ALL = {username, password, email, UserPHONE, UserPIN};
 

    // Check if any field is empty
    if (username.trim() === '' || password.trim() === '' ||  UserPIN.trim() === '' || email.trim() === '') {
        const ALLERRORS = document.querySelectorAll('[data-ALL="inps"]');
        ALLERRORS.forEach(inps => {
              inps.style.border = '1px solid red';
        })
        return;
    } else {
        const ALLERRORS = document.querySelectorAll('[data-ALL="inps"]');
        ALLERRORS.forEach(inps => {
            inps.style.border = '1px solid rgba(0, 0, 0, 0.113)';
        })
    }

    // Check if username exists in the database
    const userRef = ref(db, 'users/' + username);
    get(userRef).then((snapshot) => {
        if (snapshot.exists()) {
            const userData = snapshot.val();
            if (userData.password === password && userData.UserPIN === UserPIN) {
                // Password matches, login successful
                alert('Login successful!');
                // Redirect to home page or perform any other actions you need
                window.location.href = '/home/home.html';
            } else {
                // Password does not match
                alert('Incorrect password or PIN. Please try again.');
            }
        } else {
            // Username does not exist
            alert('Username does not exist. Please sign up.');
        }
    }).catch((error) => {
        console.error("Error getting document:", error);
        alert('An error occurred. Please try again later.');
    });
});
