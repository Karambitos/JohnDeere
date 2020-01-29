$('.form__conteiner input').keyup(function() {
    if(!$.trim(this.value).length) {
      $(this).closest('.form__conteiner').find('label, .placeholder').removeClass('is-visible active');
    } else { 
      $(this).closest('.form__conteiner').find('label,  .placeholder').addClass('is-visible active');
    }
});
