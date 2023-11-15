document.addEventListener("DOMContentLoaded", function() {
    const messageContainer = document.getElementById("messageContainer");
    const button = document.getElementById("generator");

    button.onclick = function() {
        const randomSentence = buildABear();
        messageContainer.innerHTML = randomSentence;
    };
});
