// debouncing
const searchBar = document.getElementById("searchHandle");

let Last_timer;
searchBar.addEventListener("input", function(event) {
  clearTimeout(Last_timer);
  function timer() {
    Last_timer = setTimeout(() => {
      console.log(event.target.value);
    }, 500)
  }
  timer();
});