
$(document).ready(function() {
    // process bar
    setTimeout(function() {
        // firstQuestion();
        $('.spinner').fadeOut();
        $('#preloader').delay(350).fadeOut('slow');
        $('body').delay(350).css({
            'overflow': 'visible'
        });
    }, 600);
});

function firstQuestion(){
    
    $('.content').hide();
    Swal.fire({
        title: 'Hiii chào em!',
        text: 'Anh có điều này muốn hỏi em nhớ phải trả lời thật lòng nhaaa.',
        imageUrl: 'img/tho.jpg',
        imageWidth: 300,
        imageHeight: 300,
        background: '#fff url("img/iput-bg.jpg")',
        imageAlt: 'Custom image',
      }).then(function(){
        $('.content').show(200);
      })
}
