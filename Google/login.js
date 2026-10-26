import { initializeApp } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-app.js";
import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup
} from "https://www.gstatic.com/firebasejs/13.1.0/firebase-auth.js";

// Configuración de tu proyecto Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAvr6UmxKKsVVHotuaQ-7XSikfXSnW_Mw",
    authDomain: "onlyjobs-96cca.firebaseapp.com",
    projectId: "onlyjobs-96cca",
    storageBucket: "onlyjobs-96cca.firebasestorage.app",
    messagingSenderId: "789253923419",
    appId: "1:789253923419:web:99ef1f697825b49425557e"
};

// Inicializar Firebase y autenticación
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

// Elementos de la página
const googleSignInBtn = document.getElementById("googleSignInBtn");
const loadingContainer = document.getElementById("loadingContainer");
const accountsList = document.querySelector(".accounts-list");
const authFooter = document.querySelector(".google-auth-footer");
const errorMessage = document.getElementById("errorMessage");

googleSignInBtn.addEventListener("click", async () => {
    loadingContainer.style.display = "flex";
    errorMessage.style.display = "none";
    googleSignInBtn.disabled = true;

    accountsList.style.opacity = "0.5";
    authFooter.style.opacity = "0.5";

    try {
        const result = await signInWithPopup(auth, provider);
        const firebaseUser = result.user;

        // Datos reales de la cuenta de Google
        const user = {
            displayName: firebaseUser.displayName || "",
            email: firebaseUser.email || "",
            photoURL: firebaseUser.photoURL || "",
            uid: firebaseUser.uid
        };

        sessionStorage.setItem("googleUser", JSON.stringify(user));

        // Ir a la página principal desde la carpeta Google
        window.location.href = "../Pagina principal/main.html";

    } catch (error) {
        console.error("Error al iniciar sesión con Google:", error);

        let message = "No se pudo iniciar sesión. Inténtalo nuevamente.";

        if (error.code === "auth/popup-closed-by-user") {
            message = "Cerraste la ventana de Google antes de completar el inicio de sesión.";
        } else if (error.code === "auth/popup-blocked") {
            message = "Tu navegador bloqueó la ventana emergente. Permite las ventanas emergentes e inténtalo otra vez.";
        } else if (error.code === "auth/unauthorized-domain") {
            message = "Este dominio no está autorizado en Firebase. Revisa los dominios autorizados.";
        } else if (error.code === "auth/operation-not-allowed") {
            message = "El inicio de sesión con Google no está habilitado en Firebase.";
        }

        errorMessage.textContent = message;
        errorMessage.style.display = "block";

    } finally {
        loadingContainer.style.display = "none";
        googleSignInBtn.disabled = false;
        accountsList.style.opacity = "1";
        authFooter.style.opacity = "1";
    }
});

document.querySelector(".footer-link").addEventListener("click", (event) => {
    event.preventDefault();
});
