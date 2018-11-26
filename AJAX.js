$.get('Meniu.json', menubar);

function menubar(Meniu) {
    var links = '';
    for (var i = 0; i < Meniu.length; i++) {
        links += '<a href="' + Meniu[i].url + '">' + Meniu[i].title + ' </a>';
    }
    $('nav.top').html(links);
}

