const BC = '';
console.log(window.localStorage.getItem(BC));
export default {
  fetch () {
    return JSON.parse(window.localStorage.getItem(BC) || '[]');
  },
  save (items) {
    window.localStorage.setItem(BC, JSON.stringify(items));
  }
}
