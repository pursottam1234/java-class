// $('#btnhide').click(function(){
// $('#mypara').hide();
// });

// $('#btnshow').click(function(){
//     $('#mypara').show();
//     });
    
//     $('#btn').click(function(){
//        $('#mypara').toggle();
//     });

// function changeMyColor(color){
// var myp=document.getElementById('mypara');
// myp.style.backgroundColor=color;
// }
// function onoff(btn){
//     var bulb= document.getElementById('bulb');
//     var status= bulb.getAttribute('src');
//     if(status== 'images/off.png'){
//         bulb.setAttribute('src','images/on.png');
//         btn.innerText= "off";
//     } else{
//         bulb.setAttribute('src','images/off.png');
//         btn.innerText= "on";
//     }
// }

// $('#btn1').click(function(){
//     $('#myimg').fadeIn(3000);
// });
// $('#btn2').click(function(){
//     $('#myimg').fadeOut(3000);
// });
// $('#source').click (function(){
//     $('#xyz').slideToggle();
// });

// $('#anim').click(function(){
//     $('#mybox').animate({
//         'left': '500px',
//         'height': '+=150px',
//         'width': '+=150px',
//         'opacity': '0.5',
//     }, 200);
// });

// $('#switch').click(function(){
//     var status= $('#mybulb').attr('src');
//     if(status=='images/on.png'){
//         $('#mybulb').attr('src','images/off.png');
//     }else{
//         $('#mybulb').attr('src','images/on.png');
//         $(this).text("off");
//     }
// });

// $('#circle').click(function(){
//     $('#mydiv').css({
//         'border-radius': '100px',
//         'border': '1px solid black',
//     });
// });

// $(window).resize(function(){
//     var w=$(window).width();
//     $('#mypara').text("width=" +w);
// });
// $('#myinputbox').keyup(function(){
//     var x= $('#myinputbox').val();
//     $('#mytext').text(x);
// });

// $('#mydiv').mouseenter(function () {
//     $(this).css('background-color', 'red');
//     $(this).css('border-radius', '20px');
// });
// $('#mydiv').mouseleave(function () {
//     $(this).css('background-color', 'peru');
//     $(this).css('border-radius', '0px');
// });
// $('#mydiv').dblclick(function () {
//     $(this).css('background-color', 'green');
//     $(this).css('color','black');
// });
// $('#mydiv').contextmenu(function () {
//     $(this).css('background-color', 'yellow');
// });
// // $('body').keydown(function () {
// //     $(this).css('background-color', 'black');
// // });
// // $('body').keyup(function () {
// //     $(this).css('background-color', 'blue');
// });
// $('#fname').focus(function () {
//         $(this).css({
//         'border': '2px solid red',
//         'width': '500px',
//         'height':'30px',
//     });
// });
// $('#fname').blur(function () {
//     $(this).css({
//         'border': '2px solid green',
//         'border-radius':'10px',
//         'width': '500px',
//         'height': '30px',
//     });
// });
// $('#country').change(function () {
//     $(this).css('background-color', 'yellow');
// });
// $('#fname').select(function () {
//     $(this).css('background-color','red');
// });
// $('#myform').submit(function () {
//     console.log("my form is submited");
// });

$('#mydiv').mouseenter(function () {
    $(this).css('background-color', 'red');
    $(this).css('border-radius', '20px');
});

$('#mydiv').mouseleave(function () {
    $(this).css('background-color', 'peru');
    $(this).css('border-radius', '0px');
});

$('#mydiv').dblclick(function () {
    $(this).css('background-color', 'green');
    $(this).css('color','black');
});

$('#mydiv').contextmenu(function () {
    $(this).css('background-color', 'yellow');
   
});

// $('body').keydown(function () {
//     $(this).css('background-color', 'black');
// });


// $('body').keyup(function () {
//     $(this).css('background-color', 'blue');
// });

// $('#fname').focus(function () {
//     $(this).css({
//         'border': '2px solid red',
//         'width': '500px',
//         'height':'30px',
//     });
// });
// $('#fname').blur(function () {

//     $(this).css({
//         'border': '2px solid green',
//         'border-radius':'10px',
//         'width': '500px',
//         'height': '30px',
//     });
// });
// $('#country').change(function () {
//     $(this).css('background-color', 'yellow');
// });
// $('#fname').select(function () {
//     $(this).css('background-color','red');
// });
// $('#myform').submit(function () {
//    //console.log("my form is submitted");
//     var myname = $('#fname').val();
//     console.log(myname);
// });
// $('#mybtn').click(function () {
//     var a = $('#mydiv').html();
//     var b = $('#mydiv').text();
//     var c = $('#mydiv').attr('class');
//     console.log(a);
//     console.log("-----------------");
//     console.log(b);
//     console.log("-----------------");
//     console.log(c);
// });


$('#addClass').on({
    "click": function () {
        $('#testbox').addClass("green");
    },
    "mouseenter": function () {
        $(this).css({
            'background-color': 'yellow',
            'color': 'black',
        });
    },
});
$('#removeClass').click(function () {
    $('#testbox').removeClass('green');
});
$('#toggleClass').click(function () {
    $('#testbox').toggleClass('green');
});
$('#append').on("click", function () {
    $('#testbox').append("<h1>hello nepal</h1>");
});
$('#prepend').on("click", function () {
    $('#testbox').prepend("<h1>hello nepal</h1>");
});
$('#after').on("click", function () {
    $('#testbox').after("<h1>hello nepal</h1>");
});
$('#before').on("click", function () {
    $('#testbox').before("<h1>hello nepal</h1>");
});