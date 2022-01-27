var path = 'images/',
    imgs = '.png',
    i = String(Math.floor(Math.random()*7));
    j = String(Math.floor(Math.random()*7));
    k = String(Math.floor(Math.random()*7));
    l = String(Math.floor(Math.random()*7));
    console.log();
$('.gallery1').append("<img src='"+path+i+imgs+"' alt='my partner got in the shot accidentally'>");
console.log();
$('.gallery2').append("<img src='"+path+j+imgs+"' alt='my partner got in the shot accidentally'>");
console.log();
$('.gallery3').append("<img src='"+path+k+imgs+"' alt='my partner got in the shot accidentally'>");
console.log();
$('.gallery4').append("<img src='"+path+l+imgs+"' alt='my partner got in the shot accidentally'>");
console.log();