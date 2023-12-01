<script type='text/javascript'>
//<![CDATA[
document.addEventListener("DOMContentLoaded", function () {
    var loadingMessages = document.getElementById("loading-messages");
    var countdown = 5;

    function updateLoadingMessage() {
        if (loadingMessages) {
            loadingMessages.innerHTML = `<button class="sec-btn sec-anim disabled">Please Wait ${countdown} Seconds...</button>`;
        }
    }

    function showNextButton() {
        if (loadingMessages) {
            loadingMessages.innerHTML = `<button class="sec-btn sec-anim" onclick="onstartt()">Click - Next</button>`;
        }
    }

    updateLoadingMessage();

    var countdownInterval = setInterval(function () {
        if (countdown > 0) {
            countdown--;
            updateLoadingMessage();
        } else {
            clearInterval(countdownInterval);
            showNextButton();
        }
    }, 1000);
});

const IdHash = sessionStorage.getItem("id");
const decodedString = atob(IdHash);
const finalURL = decodedString;

function onstartt() {
    var finishElement = document.getElementById("finish");
    finishElement.classList.remove("hidden");
    showPleaseWaitButton();
    finishElement.scrollIntoView({ behavior: "smooth" });
    modalButtonShow();
    setTimeout(changeToOpenContinueButton, 5000);
}

function showPleaseWaitButton() {
    var finishElement = document.getElementById("finish");
    if (finishElement) {
        finishElement.innerHTML = `<button class="sec-btn sec-anim disabled">Please Wait...</button>`;
    }
}

function changeToOpenContinueButton() {
    var finishElement = document.getElementById("finish");
    if (finishElement) {
        finishElement.innerHTML = `<a class="sec-btn sec-anim" data-target="#form" data-toggle="modal" type="button">Continue - Next</a>`;
    }
}

function modalButtonShow() {
    var modalButtonElement = document.getElementById("modal-button");
    if (modalButtonElement) {
        modalButtonElement.innerHTML = `<a class="sec-btn sec-anim" href="${finalURL}" onclick="sessionStorage.removeItem('id')">Continue</a>`;
    }
}
//]]>
</script>
