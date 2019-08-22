// Purpose: Import components and invoke necessary functions for site functionality

// ==================== Import modules ====================
import ApiData from "./data.js";
import factory from "./factory.js";
import dom from "./dom.js";
// ==================== dom selectors ====================
const blogContainer = document.querySelector(".blog-content");
const eventInput = document.getElementById("eventId");
const descriptionInput = document.getElementById("descriptionId");
const costInput = document.getElementById("costId");
const reviewInput = document.getElementById("reviewId");
const countryInput = document.getElementById("countryId");
const visaRequiredInput = document.getElementById("visa_requiredId");

const getBlog = () => {
  ApiData.getFormLocationInput("interests").then(intrestarray => {
    console.log(intrestarray);
    dom.placeToPutBlog.innerHTML = "";
    intrestarray.forEach(intrest => {
      const newBlogHTML = factory.createFormHtml(intrest);
      dom.renderToDom(dom.placeToPutBlog, newBlogHTML);
    });
  });
};
getBlog();
