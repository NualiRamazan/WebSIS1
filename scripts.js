var a = false;
// функция при нажатие на атрибут с классом heart выполняется функция
$(document).on('click', '.heart', function() {
    // если а = true выполняется это условия
    if (a) {
        // .remove удаляет из списка класс "heartfill"
        this.classList.remove('heartfill');
        a = false;
    } 
    // иначе это
    else {
        // .add добавляет в списк классов "heartfill"
        this.classList.add('heartfill');
        a = true;
    }
});
// при нажатие на .message добавляется колонка для ввода и отправки комментария
$(document).on('click', '.message', function() {
    $("#new-task, .add").remove();
    $(this.parentElement).append('<input id="new-task" type="text" placeholder="Add a comment..."><button class="add">Add</button>');
});

var b = true;
// закладки
$(document).on('click', '.bookmark', function() {
    if (a) {
        this.classList.remove('bookmarkfill');
        a = false;
    } 
    else {
        this.classList.add('bookmarkfill');
        a = true;
    }
});

// при нажатие на кнопку .add добавляется комментарии
$(document).on('click', '.add', function() {
    // .append добавляет в .card-text коммент
    $(this.parentElement).append("<p>" + $("#new-task").val() + "</p>");
    $("#new-task, .add").remove();
});

// добавление картинки
$('img').click(function() {
    // image принимает значение src
    var image = $(this).attr('src');
    // в body добавляем картинку
    $('body').append('<div id="darkbg"></div><div id="imgop"><img src="'+image+'"></div>');
    // задаем стили
    $('#imgop').css({
        left: ($(document).width() - $('#imgop').outerWidth())/2,
        top: ($(window).height() - $('#imgop').outerHeight())/2
    });
    // выводим на экран со скоростью 400 мс
    $('#darkbg, #imgop').fadeIn(400);
});

// удаляем картинку
$('body').on('click', '#darkbg, #imgop', function() {
    // fadeOut скрывает картинку быстро и вызывает функцию
    $('#darkbg, #imgop').fadeOut('fast', function() {
        // .remove удаляет
        $('#imgop, #darkbg').remove();
    });
});