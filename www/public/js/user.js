// Función para abrir la vista de perfil
function openProfileView() {
    var profileView = document.getElementById("profileView");
    profileView.style.display = "block";
}

// Función para cerrar la vista de perfil
function closeProfileView() {
    var profileView = document.getElementById("profileView");
    profileView.style.display = "none";
}

// Variable global para almacenar la imagen de perfil seleccionada
var selectedProfileImage = "";

// Función para abrir la vista de ajustes
function openSettingsView() {
    var settingsView = document.getElementById("settingsView");
    settingsView.style.display = "block";
}

// Función para cerrar la vista de ajustes
function closeSettingsView() {
    var settingsView = document.getElementById("settingsView");
    settingsView.style.display = "none";
}

// Función para abrir la vista de selección de foto de perfil
function openProfileSelectionView() {
    var profileSelectionView = document.getElementById("profileSelectionView");
     profileSelectionView.style.display = "block";
}

// Función para cerrar la vista de selección de foto de perfil
function closeProfileSelectionView() {
    var profileSelectionView = document.getElementById("profileSelectionView");
    profileSelectionView.style.display = "none";
}

// Función para seleccionar una foto de perfil
function selectProfileImage(imageSrc) {
    selectedProfileImage = imageSrc;
}

// Función para guardar la imagen de perfil seleccionada y cerrar la vista de selección
function saveSelectedProfile() {
    var profileImage = document.getElementById("profileImage");
    profileImage.src = selectedProfileImage;
    closeProfileSelectionView();
}

// Función para abrir la vista de cambio de nombre de usuario
function openChangeUsernameView() {
    var changeUsernameView = document.getElementById("changeUsernameView");
    changeUsernameView.style.display = "block";
}

// Función para cerrar la vista de cambio de nombre de usuario
function closeChangeUsernameView() {
    var changeUsernameView = document.getElementById("changeUsernameView");
    changeUsernameView.style.display = "none";
}

// Función para cambiar el nombre de usuario
function changeUsername() {
    var newUsername = document.getElementById("newUsername").value;
    var profileUsername = document.getElementById("profileUsername");
    var usernameFooter = document.getElementById("username");
    
    profileUsername.innerText = newUsername;
    usernameFooter.innerText = newUsername;
    
    closeChangeUsernameView();
}
