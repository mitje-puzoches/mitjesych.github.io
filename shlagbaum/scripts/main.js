var path = 'images/',
    imgs = '.jpg',
    i = String(Math.floor(Math.random()*7));
    j = String(Math.floor(Math.random()*7));
    k = String(Math.floor(Math.random()*7));
    l = String(Math.floor(Math.random()*7));
    console.log();
$('.gallery1').append("<img src='"+path+i+imgs+"' >");
console.log();
$('.gallery2').append("<img src='"+path+j+imgs+"' >");
console.log();
$('.gallery3').append("<img src='"+path+k+imgs+"' >");
console.log();
$('.gallery4').append("<img src='"+path+l+imgs+"' >");
console.log();