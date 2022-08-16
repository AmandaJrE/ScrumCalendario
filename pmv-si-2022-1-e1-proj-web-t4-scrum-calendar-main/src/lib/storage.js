export default class Storage {
  static saveItem(key, item) {
    let convertObject = JSON.stringify(item);
    let savedObject = localStorage.setItem(key, convertObject);
    return savedObject;
  }

  static getItem(key) {
    let convertObject = localStorage.getItem(key);
    let uncovertObject = convertObject !== null && JSON.parse(convertObject);
    return uncovertObject;
  }

  static removeItem(key) {
    localStorage.removeItem(key);
  }

  static resetAll() {
    localStorage.clear();
  }
}
