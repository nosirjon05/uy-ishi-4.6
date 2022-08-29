let elDiv = document.querySelector(".list");

movies.forEach(movie => {
  let elItem = document.createElement("li");
  let elYoutube = document.createElement("img", "card-img-top")
  let elNewTitle = document.createElement("fulltitle");
  let elNewlanguage = document.createElement("fulltitle");
  let elNewmovie_year = document.createElement("fulltitle");
  let elNewCategories = document.createElement("fulltitle");
  let elLink = document.querySelector(".link");
  elLink.src = `https://www.youtube.com/embed/${movie.ytid}`,
  elNewTitle.textContent = movie.Title;
  elNewlanguage.textContent = movie.language;
  elNewmovie_year.textContent = movie.movie_year;
  elNewCategories.textContent = movie.Categories;
  // elYoutube.src = `https://www.youtube.com/embed/${movie.ytid}`,
  elYoutube.src = `https://i3.ytimg.com/vi/${movie.ytid}/maxresdefault.jpg`,
  elYoutube.height = "250";
  elYoutube.width = "320";
  elItem.classList.add(`card`, `col-2`, `my-3`, `mx-4`, `item`);

  elItem.append(elYoutube,elNewTitle,elNewlanguage,elNewmovie_year,elNewCategories);
  elDiv.appendChild(elItem);
});



// setInterval(function () {
//   setTimeout(function () {
//     document.body.style.backgroundColor = "green";
//   }, 80)

//   setTimeout(function () {
//     document.body.style.backgroundColor = "red";
//   }, 160)

//   setTimeout(function () {
//     document.body.style.backgroundColor = "blue";
//   }, 240)

//   setTimeout(function () {
//     document.body.style.backgroundColor = "gray";
//   }, 320)

//   setTimeout(function () {
//     document.body.style.backgroundColor = "yellow";
//   }, 400)
// }, 400)