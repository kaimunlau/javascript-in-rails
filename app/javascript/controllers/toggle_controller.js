import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="toggle"
export default class extends Controller {
  static targets = ["togglableElement"];

  fire() {
    // Toggle the visibility of the element
    this.togglableElementTarget.classList.toggle("d-none");
  }
}
