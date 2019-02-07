$(window).bind("load", function () {
    // Get logout element
    const btnLogout = document.getElementById("btnLogout");

    // Click logout event listener
    btnLogout.addEventListener('click', e=> {
        // Signs the user out
        firebase.auth().signOut();

        // Auth listener
        firebase.auth().onAuthStateChanged(firebaseUser => {
            // If the user is logged out, then redirect them to the login page
            if(firebaseUser == null){
                // Redirect the user to the Login page
                window.location.pathname = '/login.html'
            }
        });
    });
});