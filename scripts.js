$(document).ready(function() {
    $("#linkedInIcon").mouseover(function() {
        this.src = "./Images/HoverLinkedIn.png"
    }).mouseout(function() {
        this.src = "./Images/linkedin.png"
    });

    $("#githubIcon").mouseover(function() {
        this.src = "./Images/HoverGitHub.png"
    }).mouseout(function() {
        this.src = "./Images/github.png"
    });

    $("#instagramIcon").mouseover(function() {
        this.src = "./Images/HoverInstagram.png"
    }).mouseout(function() {
        this.src = "./Images/instagram.png"
    });

    $("#facebookIcon").mouseover(function() {
        this.src = "./Images/HoverFacebook.png"
    }).mouseout(function() {
        this.src = "./Images/facebook.png"
    });
});