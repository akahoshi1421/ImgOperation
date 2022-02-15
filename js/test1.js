var a = 1;
var cnt = 0;

$(function(){
    $("#aaa").draggable();
});

var which = "";

$(document).on("click", "#plus", function(){
    if($(".fa-magnifying-glass-plus").css("color") == "rgb(208, 208, 208)"){
        which = "";
        $(".fa-magnifying-glass-plus").css({
            "color": "#000000"
        });
    }
    else{
        $(".fa-magnifying-glass-plus").css({
            "color": "#d0d0d0"
        });
        $(".fa-magnifying-glass-minus").css({
            "color": "#000000"
        });
        which = "plus";
    }
});

$(document).on("click", "#minus", function(){
    if($(".fa-magnifying-glass-minus").css("color") == "rgb(208, 208, 208)"){
        which = "";
        $(".fa-magnifying-glass-minus").css({
            "color": "#000000"
        });
    }
    else{
        $(".fa-magnifying-glass-minus").css({
            "color": "#d0d0d0"
        });
        $(".fa-magnifying-glass-plus").css({
            "color": "#000000"
        });
        which = "minus";
    }
});


$(document).on("click", "#bbb", function(){
    if(cnt < 5){
        if(which != ""){
            if(which == "plus")  a += 0.1;
            else if(which == "minus") a -= 0.1;
            $(this).find("#aaa").css({
                "transform": "scale(" + a + ", " + a + ")"
            });
        }
    }
    cnt = 0;
});

var mousedowncheck = false;

$(document).on("mousedown", "#bbb", function(){
    mousedowncheck = true;
});

$(document).on("mouseup", function(){
     mousedowncheck = false;
});



$(document).on("mousemove", "#bbb", function(e){
    if(mousedowncheck){
        cnt++;
    }
});