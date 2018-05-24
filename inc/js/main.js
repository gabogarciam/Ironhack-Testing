function main() {
    var skillset = $('.skillset');
    console.log(skillset);
    skillset.hide(1000);
    skillset.fadeIn(1000);
    $('.projects').hide();
    $('.projects-button').on('click', function() {
        $(this).next().slideToggle(600);
        $(this).toggleClass('active');
        $(this).text('Project Viewed');
        console.log(`El factorial de 5 es = ${factorial(5)}`);
        title();
    })
}

function title() {
    var title = $(document.getElementsByTagName('h1')[0]);
    title.hide(3000);
    title.fadeIn(3000);
    //console.log(title);
}

function factorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    }
    //Utilizando la recursividad
    return num * factorial(num-1)
}

$(document).ready(main);
//setInterval(title, 1000);