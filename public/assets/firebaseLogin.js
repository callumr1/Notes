$(window).bind("load", function () {
    // Get login elements
    const btnLoginAnon = document.getElementById("btnLoginAnon");

    // Click login anon event listener
    btnLoginAnon.addEventListener('click', e=> {
        // Signs the user in as an anonymous user, allows them to save notes like a normal user
        firebase.auth().signInAnonymously();

        // Auth listener
        firebase.auth().onAuthStateChanged(firebaseUser => {
            // If the user is logged in, then redirect them to the index page
            if(firebaseUser != null){
                // Redirect the user to the index page
                window.location.pathname = '/index.html'
            }
        });
    });
});