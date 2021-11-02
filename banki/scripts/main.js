var path = 'images/',
    imgs = '.png',
    i = String(Math.floor(Math.random()*8));
    console.log();
$('.gallery').append("<img src='"+path+i+imgs+"' alt='my partner got in the shot accidentally'>");
console.log();