var Fruits = document.getElementById('tr1')
var KaraRate = document.getElementById('tr2')
var LahRate = document.getElementById('tr3')
var IslRate = document.getElementById('tr4')


var headings = ['Fruits', 'Apple','Watermelon','banana']
var karachi = ['karachi', 90 , 70 , 100]
var lahore = ['Lahore', 100 , 120 , 150]
var Islamabad = ['Islamabad', 50 , 50 , 40]

var heads = ""
var KRate = ""
var LRate = ""
var IRate = ""

for(var i = 0; i < headings.length; i++ ){
   heads += `<tr><th>${headings[i]}</th></tr>`
}

Fruits.innerHTML = heads

for(var i = 0; i < karachi.length; i++ ){
   KRate += `<tr><td>${karachi[i]}</td></tr>`
}

KaraRate.innerHTML = KRate

for(var i = 0; i < lahore.length; i++ ){
   LRate += `<tr><td>${lahore[i]}</td></tr>`
}

LahRate.innerHTML = LRate

for(var i = 0; i < Islamabad.length; i++ ){
   IRate += `<tr><td>${Islamabad[i]}</td></tr>`
}

IslRate.innerHTML = IRate


