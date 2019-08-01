$('.category-1').click(function(){
    $('.div-items').hide();
    $('.div-items-1').show();
    $('.item-info').hide();
});
$('.category-2').click(function(){
    $('.div-items').hide();
    $('.div-items-2').show();
    $('.item-info').hide();
});
$('.category-3').click(function(){
    $('.div-items').hide();
    $('.div-items-3').show();
    $('.item-info').hide();
});


$('.item-1').click(function(){
    $('.item-info').hide();
    $('.item-info-1').show();
})
$('.item-2').click(function(){
    $('.item-info').hide();
    $('.item-info-2').show();
})
$('.item-3').click(function(){
    $('.item-info').hide();
    $('.item-info-3').show();
})
$('.item-4').click(function(){
    $('.item-info').hide();
    $('.item-info-4').show();
})
$('.item-5').click(function(){
    $('.item-info').hide();
    $('.item-info-5').show();
})
$('.item-6').click(function(){
    $('.item-info').hide();
    $('.item-info-6').show();
})
$('.item-7').click(function(){
    $('.item-info').hide();
    $('.item-info-7').show();
})
$('.item-8').click(function(){
    $('.item-info').hide();
    $('.item-info-8').show();
})
$('.item-9').click(function(){
    $('.item-info').hide();
    $('.item-info-9').show();
})


$('.category').click(function(){
    $('form').hide();
})
$('.div-items').click(function(){
    $('form').hide();
})
$('.info-btn').click(function(){
    $('form').show();
})


$('.form-btn').click(function(){
    if(
        $('form').find("input[name=your-name]").val() && $('form').find("input[name=number-np]").val()
    ){
        $('form').hide();
        alert('Заказ успешно принят!');
    }else {
        alert('Заполните форму правильно!')
    }
})
