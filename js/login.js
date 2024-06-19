function validateform(){ 
    var tel=document.getElementById("phonenum").value;  

    if(tel.length<10){  
        alert("Phone number must be of atleast 10 digits!");  
        return false;  
    }
    return true;
}  



$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if(scroll < 100){
        $('.fixed-top').css('background', 'transparent');
    } else{
        $('.fixed-top').css('background', '#FFFFFF');
    }
});

