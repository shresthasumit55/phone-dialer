
mode=1 //normal mode, mode=0 is high contrast mode
$("document").ready(function () {
    $("#dialer").show();
    $("#contact-list").hide();
    $("#contact-form").hide();
    $("#about-project").hide();
    currentTab=0;
    changeColor(btnList[currentTab]);
})

$("#btn-dial").click(function () {
    $("#dialer").show();
    $("#contact-list").hide();
    $("#contact-form").hide();
    $("#about-project").hide();
    currentTab=0;
    if(mode==1)
        changeColor(btnList[currentTab]);
})

$("#btn-contact-list").click(function () {
    $("#dialer").hide();
    $("#contact-list").show();
    $("#contact-form").hide();
    $("#about-project").hide();
    currentTab=1;
    if(mode==1)
        changeColor(btnList[currentTab]);
})

$("#btn-contact-form").click(function () {
    $("#dialer").hide();
    $("#contact-list").hide();
    $("#contact-form").show();
    $("#about-project").hide();
    currentTab=2;
    if(mode==1)
        changeColor(btnList[currentTab]);
})

$("#btn-about").click(function () {
    $("#dialer").hide();
    $("#contact-list").hide();
    $("#contact-form").hide();
    $("#about-project").show();
    currentTab=3;
    if(mode==1)
        changeColor(btnList[currentTab]);
})

btnList = ["btn-dial","btn-contact-list","btn-contact-form","btn-about"]
tabList = ["dialer","contact-list","contact-form","about-project"]

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
            $("#gesture-output").val("swipe right"); //needs to be changed to swipe up-right, down-right, diagonal or sth
        else
            $("#gesture-output").val("swipe right");
        
    }
    else if (newX<mouseX){
        if (newY>mouseY || newY<mouseY)
            $("#gesture-output").val("swipe left");
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
    /*if (newX==mouseX){
        $("#gesture-output").val("mouse up");
    }*/
})

function changeTab(tab_id){
    tabList.forEach((element,index) => {
        if (element==tab_id){
            $("#"+element).show();
            if (mode==1)
                changeColor(btnList[index]);
        }
        else{
            $("#"+element).hide();
        }
    });
}

function changeColor(btn_id){
    btnList.forEach(element => {
        if (element==btn_id){
            $("#"+element).css("background-color","brown");
        }
        else{
            $("#"+element).css("background-color","grey");
        }
    });
}

$(document).keydown(function(event){
    if (event.key=='ArrowLeft'){
        currentTab = currentTab - 1;
        if (currentTab<0){
            currentTab=tabList.length-1;
        }
        changeTab(tabList[currentTab]);
    }
    else if(event.key=='ArrowRight'){
        currentTab = currentTab + 1;
        if (currentTab==tabList.length){
            currentTab=0;
        }
        changeTab(tabList[currentTab]);
    }
})

$("#btn-style-change").click(function(){
    mode=(mode-1)**2
    if ($("body").hasClass("highContrast")){
        $( "body" ).removeClass( "highContrast" );
        $( "button" ).removeClass( "highContrast" );
        $( ".buttonContact" ).css( "background-color","#e7e7e7");
        $( ".buttonContact" ).css( "color","black");
        $( ".buttonContact" ).css( "border", "2px solid black");
        $( ".tabBtn" ).css( "background-color","");
        $( ".tabBtn" ).css( "color","");
        $( ".tabBtn" ).css( "border", "");
        $(".contactBox").css("color","black");
        $(".contactBox").css("background-color","white");
        $("#dialer-textbox").css("color","black");
        $("#dialer-textbox").css("background-color","white");
        $("#swipe-area").css("color","");
        $("#swipe-area").css("background-color","gray");
    }
    else{
        $( "body" ).addClass( "highContrast" );
        $( "button" ).addClass( "highContrast" );
        $( ".buttonContact" ).css( "background-color","black");
        $( ".buttonContact" ).css( "color","white");
        $( ".buttonContact" ).css( "border", "1px solid orange");
        $( ".tabBtn" ).css( "background-color","black");
        $( ".tabBtn" ).css( "color","white");
        $( ".tabBtn" ).css( "border", "1px solid orange");
        $(".contactBox").css("color","white");
        $(".contactBox").css("background-color","black");
        $("#dialer-textbox").css("color","white");
        $("#dialer-textbox").css("background-color","black");
        $("#swipe-area").css("color","white");
        $("#swipe-area").css("background-color","black");
    
    }
})

$("#btn-font-up").click(function(){
    var size = $( "body" ).css( "font-size");
    size=Number(size.substring(0, size.length - 2));

    var swipeLocation = $("#swipe-div").css("top");
    swipeLocation=Number(swipeLocation.substring(0, swipeLocation.length - 2));

    var swipeWidth = $("#swipe-div").css("width");
    swipeWidth=Number(swipeWidth.substring(0, swipeWidth.length - 2));
    
    
    if (size<30){
        $( "body" ).css( "font-size", size+2+"px" )
        $("#swipe-div").css("top",swipeLocation+95+"px");
        $("#swipe-area").css("width",swipeWidth+20+"px");
    }

   
})
$("#btn-font-down").click(function(){
    var size = $( "body" ).css( "font-size");
    size=Number(size.substring(0, size.length - 2));
    var swipeLocation = $("#swipe-div").css("top");
    swipeLocation=Number(swipeLocation.substring(0, swipeLocation.length - 2));
    var swipeWidth = $("#swipe-div").css("width");
    swipeWidth=Number(swipeWidth.substring(0, swipeWidth.length - 2));

    if (size>14){
        $( "body" ).css( "font-size", size-2+"px" );
        $("#swipe-div").css("top",swipeLocation-95+"px");
        $("#swipe-area").css("width",swipeWidth-20+"px");
    }
   
})