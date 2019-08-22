// Purpose: Holds an object that contains fetch calls to post, delete, get, & edit
const ApiData = {
  getFormInput: resource => {
    return fetch(`http://localhost:8088/${resource}`).then(response =>
      response.json()
    );
  },
  getFormLocationInput: resource => {
    return fetch(`http://localhost:8088/${resource}?expand=places`).then(
      response => response.json()
    );
  },
  postData: (resource, object) => {
    return fetch(`http://localhost:8088/${resource}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(object)
    }).then(response => response.json());
  },
  deleteData: (resource, resourceId) => {
    return fetch(`http://localhost:8088/${resource}/${resourceId}`, {
      method: "DELETE"
    }).then(response => response.json());
  },

  editData: (resource, resourceId, object) => {
    return fetch(`http://localhost:8088/${resource}/${resourceId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(object)
    }).then(response => response.json());
  }
};
export default ApiData;
