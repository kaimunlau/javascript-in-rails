import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="insert-in-list"
export default class extends Controller {
  static targets = ["items", "form"]

  connect() {
    console.log(this.element);
    console.log(this.itemsTarget);
    console.log(this.formTarget);
  }

  send(event) {
    // Prevent the form from being submitted
    event.preventDefault();

    // Send the form data to the server
    fetch(this.formTarget.action, {
      method: "POST",
      headers: { "Accept": "application/json" },
      body: new FormData(this.formTarget)
    })
      .then(response => response.json())
      .then((data) => {
        if (data.inserted_item) { // => same as if (data.inserted_item !== undefined)
          // Insert the new item into the list
          this.itemsTarget.insertAdjacentHTML("beforeend", data.inserted_item)
        }
        // Replace the form with a new form
        this.formTarget.outerHTML = data.form
      })
  }
}
