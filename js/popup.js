const saveButton = document.getElementById("save");
const status = document.getElementById("status");
const uwuify = document.getElementById("uwuify");

const storage = (navigator.userAgent.includes("Firefox") ? browser : chrome).storage.sync;

storage.get({
    uwuify: false
}).then(({ uwuify: uwuifyValue }) => {
    uwuify.checked = uwuifyValue;
});

saveButton.addEventListener("click", () => {
    storage.set({
        uwuify: uwuify.checked
    }, () => {
        status.innerText = "Saved settings.";
        setTimeout(() => status.innerText = "", 2000);
    });
});
