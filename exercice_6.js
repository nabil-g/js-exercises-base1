// JS

function division(){
  var premier = document.getElementById('premier_nombre').value;
  var deuxieme = document.getElementById('deuxieme_nombre').value;

  var resultat = premier % deuxieme;
  alert("Le résultat de la division de " + premier + " par " + deuxieme + " est : " + resultat);
}
