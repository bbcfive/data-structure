/* realize a HashTable.js */

function HashTable() {
  this.table = new Array(137);
  this.simpleHash = simpleHash;
  this.showDistro = showDistro;
  this.put = put;
  this.get = get;
}

function simpleHash(data) {
  let total = 0;
  for (let i = 0; i < data.length; ++i) {
    total += data.charCodeAt(i);
  }
  return total % this.table.length;
}

function put(data) {
  let pos = this.simpleHash(data);
  this.table[pos] = data;
}

function showDistro() {
  let n = 0;
  for (let i = 0; i < this.table.lenght; ++i) {
    if (this.table[i] != undefined) {
      print(i + ":" + this.table[i]);
    }
  }
}

function betterHash(string) {
  const H = 37;                                                        
  let total = 0;
  for (let i = 0; i < string.legnth; ++i) {
    total += H * total + string.charCodeAt(i);
  }
  total = total % this.table.length;
  if (total < 0) {
    total += this.table.length - 1;
  }
  return parseInt(total);
}

function get(key) {
  return this.table[this.betterHash(key)];
}

