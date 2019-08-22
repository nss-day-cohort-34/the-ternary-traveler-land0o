// Purpose: Import components and invoke necessary functions for site functionality

// ==================== Import modules ====================
import ApiData from "./data.js";
import factory from "./factory.js";
import dom from "./dom.js";
// ==================== dom selectors ====================
const blogContainer = document.querySelector(".blog-content");
const hiddenDomEdit = document.querySelector("#hiddenEditFieldId");
const eventInput = document.getElementById("eventId");
const descriptionInput = document.getElementById("descriptionId");
const costInput = document.getElementById("costId");
const reviewInput = document.getElementById("reviewId");
const countryInput = document.getElementById("countryId");
const visaRequiredInput = document.getElementById("visa_requiredId");
const countryBtn = document.getElementById("countryformSubmitBtnId");
const formBtn = document.getElementById("formSubmitBtnId");
const selectDropdown = document.getElementById("countryVistedId");

// render country select dropdown
ApiData.getFormInput("places").then(placesArray => {
  blogContainer.innerHTML = "";
  console.log(placesArray);
  placesArray.forEach(place => {
    console.log(place);
    const newCountryOptions = factory.createSelectOptions(place);
    dom.renderToDom(selectDropdown, newCountryOptions);
  });
});

// render blog to the dom
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

// submit buttons

// for country btn

countryBtn.addEventListener("click", () => {
  const countryValue = countryInput.value;
  const visaRequiredValue = visaRequiredInput.value;

  const newCountryObj = factory.createPlaceObj(
    countryValue,
    JSON.parse(visaRequiredValue)
  );
  ApiData.postData("places", newCountryObj).then(() => {
    //clears the input fields
    countryInput.value = "";
    visaRequiredInput.value = "";
    alert("Country Info has been submitted!");
  });
  console.log(newCountryObj);
});

// for post button
formBtn.addEventListener("click", () => {
  const dropdownValue = selectDropdown.value;
  const eventValue = eventInput.value;
  const descriptionValue = descriptionInput.value;
  const costValue = costInput.value;
  const reviewValue = reviewInput.value;
  const placesId = 1;

  const newPostObj = factory.createFormObj(
    dropdownValue,
    eventValue,
    descriptionValue,
    costValue,
    reviewValue,
    placesId
  );
  if (hiddenDomEdit.value !== "") {
    ApiData.editData("interests", hiddenDomEdit.value, newPostObj)
      .then(interests => {
        console.log("hi", interests);
        interests.forEach(interest => {
          const newBlogHTML = factory.createFormHtml(interest);
          dom.renderToDom(dom.placeToPutBlog, newBlogHTML);
        });
      })
      .then(getBlog());
  } else ApiData.postData("interests", newPostObj).then(getBlog());
  console.log(newPostObj);
});

// edit and delete button
blogContainer.addEventListener("click", event => {
  if (event.target.id.startsWith("edit")) {
    console.log("hi inside");
    const editID = event.target.id.split("_")[1];
    console.log("editId: ", editID);
    ApiData.getFormInput(`interests/${editID}`).then(intrest => {
      hiddenDomEdit.value = intrest.id;
      selectDropdown.value = intrest.contryname;
      eventInput.value = intrest.name;
      descriptionInput.value = intrest.description;
      costInput.value = intrest.cost;
      reviewInput.value = intrest.review;
    });
  }
});
