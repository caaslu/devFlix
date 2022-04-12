var listaFilmes = [
  "https://m.media-amazon.com/images/M/MV5BYTMxMGY1OGQtZmUzNy00NjhmLTlhNzItZDBiNzhlMTgwZjZlXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_FMjpg_UX1000_.jpg",
  "https://m.media-amazon.com/images/M/MV5BOThjODMyM2QtNTNhYi00ZGM4LWIxZTAtMDAyYWNhYzYxMjJiXkEyXkFqcGdeQXVyMTMzNDExODE5._V1_FMjpg_UX1000_.jpg",
  "https://m.media-amazon.com/images/M/MV5BNmVmMmM5ZmItZDg0OC00NTFiLWIxNzctZjNmYTY5OTU3ZWU3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg",
  "https://m.media-amazon.com/images/M/MV5BZGZiMTkzZjktNzk0OC00NzEzLWJjOTMtYjdkMWM1NGU1ZDM4XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_FMjpg_UX1000_.jpg",
  "https://m.media-amazon.com/images/M/MV5BMTkzNjEzMDEzMF5BMl5BanBnXkFtZTgwMDI0MjE4MjE@._V1_FMjpg_UX1000_.jpg"
];

for (var i = 0; i < listaFilmes.length; i++) {
  document.write("<img src =" + listaFilmes[i] + ">");
}

function adicionarFilme() {
  let filmeFavorito = document.getElementById("filme").value;

  if (filmeFavorito.endsWith(".jpg")) {
    listarFilme(filmeFavorito);
  } else {
    console.error("Imagem inválida");
  }
  document.getElementById("filme").value = "";
}

function listarFilme(filme) {
  let elementoFilmeFavorito = "<img src=" + filme + ">";
  let elementoListaFilmes = document.getElementById("listaFilmes");
  elementoListaFilmes.innerHTML =
    elementoListaFilmes.innerHTML + elementoFilmeFavorito;
}

function removerFilme() {
  const removeImage = document.getElementById("listaFilmes");
  removeImage.removeChild(removeImage.childNodes[0]);
}