var index = 0;

function changeColour() {
  var colours = [
    "red",
    "green",
    "blue",
    "yellow",
    "orange",
    "purple",
    "brown",
    "black",
    "white",
    "grey",
  ];
  document.getElementsByTagName("body")[0].style.backgroundColor =
    colours[index++];
  if (index > colours.length - 1) index = 0;
}
