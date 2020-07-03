'use strict';

const LinkedList = require('./linked-list-hash');


class Hashmap {
  constructor(size) {
    this.size = size;
    this.map = new Array(size);
  }

  hash(key) {
    return key.split('').reduce((p, n) => {
      return p + n.charCodeAt(0);
    }, 0) * 599 % this.size;
  }

  add(key, value) {
    let hash = this.hash(key);
    if (!this.map[hash]) {
      this.map[hash] = new LinkedList();
    }
    let entry = { [key]: value };
    this.map[hash].add(entry);
    return this;
  }

  get(key) {
    let hash = this.hash(key);
    return this.map[hash] ? this.map[hash].values().find(obj => obj[key])[key] : null;
  }

  contains(key) {
    return !!this.get(key);
  }
}

module.exports = Hashmap;
