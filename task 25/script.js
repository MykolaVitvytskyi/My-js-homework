$('.div-category').on('click', function(event){
    var target = event.target;
    $('.div-items').hide();

    if(target.className === 'category category-1'){
        $('.div-items-1').show();
    } else if(target.className === 'category category-2'){
        $('.div-items-2').show();
    } else if (target.className === 'category category-3'){
        $('.div-items-3').show();
    }
    $('form').hide();
    $('.item-info').hide();
  });


$('.div-item').on('click', function(event){
    var target = event.target;
    $('.item-info').hide();

    if(target.className === 'item item-1'){
        $('.item-info-1').show();
    } else if(target.className === 'item item-2'){
        $('.item-info-2').show();
    } else if (target.className === 'item item-3'){
        $('.item-info-3').show();
    } else if (target.className === 'item item-4'){
        $('.item-info-4').show();
    } else if (target.className === 'item item-5'){
        $('.item-info-5').show();
    } else if (target.className === 'item item-6'){
        $('.item-info-6').show();
    } else if (target.className === 'item item-7'){
        $('.item-info-7').show();
    } else if (target.className === 'item item-8'){
        $('.item-info-8').show();
    } else if (target.className === 'item item-9'){
        $('.item-info-9').show();
    }
    $('form').hide();
});


$('.info-btn').click(function(){
    $('form').show();
})


$('#form').submit(event =>{
    let valid = true;

    event.preventDefault();

    $('#form input').each(function(elem, value){
        if($(value).val() === ''){
            $(value).addClass('invalid');
            valid = false;
        }else{
            $(value).removeClass('invalid');
        }
    });
    if( $('.textarea').val() === ''){
        $('.textarea').addClass('invalid');
        valid = false;
    }else{
        $('.textarea').removeClass('invalid');
    }


    if($('#city').val() === ''){
        valid = false;
    }
    if(!$('#rad1').prop('checked') && !$('#rad1').prop('checked')) {
        valid = false;
    }

    if(valid){
        $('#form').unbind('submit').submit();
    }else{
        alert('Заполните все поля формы для заказа!')
    }
})
