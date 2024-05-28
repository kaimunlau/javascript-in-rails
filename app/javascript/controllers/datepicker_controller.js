import { Controller } from "@hotwired/stimulus"
// Import the flatpickr library
import flatpickr from "flatpickr"

// Connects to data-controller="datepicker"
export default class extends Controller {
  connect() {
    // Initialize the datepicker
    flatpickr(this.element)
  }
}
