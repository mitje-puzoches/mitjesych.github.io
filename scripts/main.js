var path = 'images/',
    imgs = '.jpg',
    i = String(Math.floor(Math.random()*7));
    console.log();
$('.gallery').append("<img src='"+path+i+imgs+"'>");
console.log();