function main() {
    var skillset = $('.skillset');
    console.log(skillset);
    skillset.hide(1000);
    skillset.fadeIn(1000);
    $('.projects').hide();
    $('.projects-button').on('click', function() {
        //$('.projects').show();
        //$('.projects').toggle();
        //$(this).next().toggle();
        $(this).next().slideToggle(600);
        $(this).toggleClass('active');
        $(this).text('Project Viewed');
    })
}

function title() {
    var title = $(document.getElementsByTagName('h1')[0]);
    title.hide(3000);
    title.fadeIn(3000);
    //console.log(title);
}

function factorial(num) {
    // var fac=1;
    // if (num === 0 || num === 1) {
    //     return 1;
    // } else {
    //     for (var i = 1; i <= num; i++) {
    //         fac *= i;
    //     }
    //     return fac;
    // }

    // if (num === 0 || num === 1) {
    //     return 1;
    // } else {
    //     var cont = 1;
    //     do {
    //         fac *= cont;
    //         cont++;
    //     } while (cont<=num);
    //     return fac;
    // }

    if (num === 0 || num === 1) {
        return 1;
    }
    //Utilizando la recursividad
    return num * factorial(num-1)
}

console.log(`El factorial de 5 es = ${factorial(5)}`);

$(document).ready(main);
//setInterval(title, 1000)    
