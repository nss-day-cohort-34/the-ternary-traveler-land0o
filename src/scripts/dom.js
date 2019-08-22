// Purpose: Holds object of functions that render information to DOM

const dom = Object.create({
  renderToDom: (location, htmlRep) => {
    location.innerHTML += htmlRep;
  },
  placeToPutBlog: document.querySelector(".blog-content"),
  renderToDom: (location, htmlRep) => {
    location.innerHTML += htmlRep;
  }
});
export default dom;
