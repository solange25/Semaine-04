/* C'est ici qu'il faut rédiger ton code pour utiliser l'API */
let randomNumber = Math.floor(Math.random() * Math.floor(20));
fetch('https://type.fit/api/quotes')
  .then(Response => {
    return Response.json();
  })
  .then(Response => {
    console.log(Response);
  });
let data = response[randomNumber];
document.getElementById('quote').textContent = data.text;
document.getElementById('author').textContent = data.author;
