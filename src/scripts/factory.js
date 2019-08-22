// Purpose: Holds all factory functions (objects and htmlRepresentations)

const factory = Object.create({
  createFormObj: (placeId, name, description, cost, review) => {
    return {
      placeId,
      name,
      description,
      cost,
      review
    };
  },

  createFormHtml: formObj => {
    return `
    <aside class="blog-insert">
    <h2>Country: ${formObj.placeId.name} </h2>
    <p>Event attended: ${formObj.name}</p>
    <p>Description: ${formObj.description}</p>
    <p>Cost: ${formObj.cost} spent</p>
    <p>My Review: ${formObj.review}</p>
    <button id="editId_">edit</button>
    <button id="deleteID_">delete</button>
  </aside>  
    `;
  }
});

export default factory;
