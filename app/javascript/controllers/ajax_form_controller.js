import { Controller } from "stimulus";

export default class extends Controller {
  renderPartial(event) {
    const xhr = event.detail[2];
    this.element.outerHTML = xhr.response;
  }
}
