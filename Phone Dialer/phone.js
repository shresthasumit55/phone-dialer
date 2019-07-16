currentTab=0;

$("document").ready(function () {
    $("#dialer").show();
    $("#contact-list").hide();
    $("#contact-form").hide();
    $("#test-gesture").hide();
})

$("#btn-dial").click(function () {
    $("#dialer").show();
    $("#contact-list").hide();
    $("#contact-form").hide();
    $("#test-gesture").hide();
    currentTab=0;
})

$("#btn-contact-list").click(function () {
    $("#dialer").hide();
    $("#contact-list").show();
    $("#contact-form").hide();
    $("#test-gesture").hide();
    currentTab=1;
})

$("#btn-contact-form").click(function () {
    $("#dialer").hide();
    $("#contact-list").hide();
    $("#contact-form").show();
    $("#test-gesture").hide();
    currentTab=2;
})

$("#btn-test-gesture").click(function () {
    $("#dialer").hide();
    $("#contact-list").hide();
    $("#contact-form").hide();
    $("#test-gesture").show();
    currentTab=3;
})


tabList = ["dialer","contact-list","contact-form","test-gesture"]

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
    currentTab=1;
    $("#contact-form").hide();
    $('#contact-detail-form').trigger("reset");
})



$(".phone-button").click(function () {
    var textareaString = $("#dialer-textbox").val() + this.innerText;
    $("#dialer-textbox").val(textareaString);

})
//Mouse events

var mouseX=0;
var mouseY=0;

$("#gesture-area").mousedown(function(event){
    $("#gesture-output").val("mouse down");
    mouseX = event.pageX;
    mouseY = event.pageY;

    

})

$("#gesture-area").mouseup(function(){
    

    newX= event.pageX;
    newY= event.pageY;

    if (newX>mouseX ){
        if (newY>mouseY || newY<mouseY)
            $("#gesture-output").val("swipe diagonal");
        else
            $("#gesture-output").val("swipe right");
        
    }
    else if (newX<mouseX){
        if (newY>mouseY || newY<mouseY)
            $("#gesture-output").val("swipe diagonal");
        else
            $("#gesture-output").val("swipe left");
    }

    else if (newX==mouseX){
        if (newY>mouseY)
            $("#gesture-output").val("swipe down");
        else if (newY<mouseY)
            $("#gesture-output").val("swipe up");
        else 
            $("#gesture-output").val("mouse up");
    }

})

$("#swipe-area").mousedown(function(event){
    mouseX = event.pageX;
    mouseY = event.pageY;   
})

$("#swipe-area").mouseup(function(event){
    newX = event.pageX;
    newY = event.pageY;   
    if (newX>mouseX ){
        currentTab = currentTab + 1;
        if (currentTab==tabList.length){
            currentTab=0;
        }
        changeTab(tabList[currentTab]);

    }
    if (newX<mouseX){
        currentTab = currentTab - 1;
        if (currentTab<0){
            currentTab=tabList.length-1;
        }
        changeTab(tabList[currentTab]);
    }
    if (newX==mouseX){
        $("#gesture-output").val("mouse up");
    }
})

function changeTab(tab_id){
    tabList.forEach(element => {
        if (element==tab_id){
            $("#"+element).show();
        }
        else{
            $("#"+element).hide();
        }
    });
}

