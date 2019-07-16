$("document").ready(function () {
    $("#dialer").show();
    $("#contact-list").hide();
    $("#contact-form").hide();
})

$("#btn-dial").click(function () {
    $("#dialer").show();
    $("#contact-list").hide();
    $("#contact-form").hide();
})

$("#btn-contact-list").click(function () {
    $("#dialer").hide();
    $("#contact-list").show();
    $("#contact-form").hide();
})

$("#btn-contact-form").click(function () {
    $("#dialer").hide();
    $("#contact-list").hide();
    $("#contact-form").show();
})

var contactList = ["Michael Scott", "Dwight Shrute"];
var items = document.querySelector("ul");
for (let contact of contactList) {
    contactValue = document.createElement("li");
    buttonContact = document.createElement("button");
    buttonContact.textContent = contact;
    buttonContact.className = 'listbutton';
    buttonContact.disabled = true;
    contactValue.appendChild(buttonContact);
    items.appendChild(contactValue);
}


$("#submit-contact").click(function () {
    var name = $("#name").val();
    var email = $("#email").val();
    var phone = $("#phone").val();
    var items = document.querySelector("ul");
    contactValue = document.createElement("li");
    buttonContact = document.createElement("button");
    buttonContact.textContent = name;
    buttonContact.className = 'listbutton';
    buttonContact.disabled = true;
    contactValue.appendChild(buttonContact);
    items.appendChild(contactValue);
    $("#dialer").hide();
    $("#contact-list").show();
    $("#contact-form").hide();
    $('#contact-detail-form').trigger("reset");
})



$(".phone-button").click(function () {
    var textareaString = $("#dialer-textbox").val() + this.innerText;
    $("#dialer-textbox").val(textareaString);

})