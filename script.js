const toggleSwitch = document.querySelector('input[type="checkbox"]');

function select(cls, id) {
  // hide all the elements in the class
  let x = document.getElementsByClassName(cls);
  for (var i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  // show the element identified
  var panel = document.getElementById(id);
  panel.style.display = "block";
}
// const links = document.querySelectorAll("nav a");
// links.forEach((link) => {
//   if (link.href === window.location.href) {
//     link.classList.add("border-b-2", "border-green-500", "pb-1");
//   }
// });

mode = function (e) {
  if (e.target.checked) {
    console.log("checked");
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
};

// implementation of dark mode
toggleSwitch.addEventListener("change", mode);
