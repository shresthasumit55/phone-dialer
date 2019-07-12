$("document").ready(function(){
    debugger
    $("#dialer").show();
    $("#contact-list").hide();
    $("#contact-form").hide();
})

$("#btn-dial").click(function(){
    $("#dialer").show();
    $("#contact-list").hide();
    $("#contact-form").hide();
})

$("#btn-contact-list").click(function(){
    $("#dialer").hide();
    $("#contact-list").show();
    $("#contact-form").hide();
})

$("#btn-contact-form").click(function(){
    $("#dialer").hide();
    $("#contact-list").hide();
    $("#contact-form").show();
})

var contactList=["Michael Scott", "Dwight Shrute"]


$("#contact-detail-form").submit(function(){
    var name=$("#name").val();
    var email=$("#email").val();
    var phone=$("#phone").val();
    this.contactList.add(name)
    debugger
})