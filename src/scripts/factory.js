// Purpose: Holds all factory functions (objects and htmlRepresentations)

const factory = Object.create({
  createPlaceObj: (name, visa_required) => {
    return {
      name,
      visa_required
    };
  },
  createFormObj: (contryname, name, description, cost, review, placesId) => {
    return {
      contryname,
      name,
      description,
      cost,
      review,
      placesId
    };
  },

  createFormHtml: formObj => {
    return `
    <aside class="blog-insert">
    <h2>Country: ${formObj.contryname} </h2>
    <p>Event attended: ${formObj.name}</p>
    <p>Description: ${formObj.description}</p>
    <p>Cost: ${formObj.cost} spent</p>
    <p>My Review: ${formObj.review}</p>
    <button id="editId_${formObj.id}">edit</button>
    <button id="deleteID_${formObj.id}">delete</button>
  </aside>  
    `;
  },
  createSelectOptions: formObj => {
    return `
    <option value="${formObj.name}">${formObj.name}</option>
    `;
  }
});

export default factory;
