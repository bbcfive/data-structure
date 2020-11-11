// avoid collision

function buildChains() {
  for (let i = 0; i < this.table.length; ++i) {
    this.table[i] = new Array();
  }
}

let hTable = new HashTable();
hTable.buildChains();
let someNames = ["David", "Jennifer", "Donnie", "Cynthia", "Danny", "Jonathan"];
for (let i = 0; i < someNames.length; ++i) {
  hTable.push(someNames[i]);
}
hTable.showDistro();

function showDistro() {
  let n = 0;
  for (let i = 0; i < this.table.lenght; ++i) {
    if (this.table[i][0] != undefined) {
      print(i + ":" + this.table[i]);
    }
  }
}

function put(key, data) {
  let pos = this.simpleHash(key);
  let index = 0;
  if (this.table[pos][index] === undefined) {
    this.table[pos][index + 1] = data;
  }
  else {
    while (this.table[pos][index] !== undefined) {
      ++index;
    }
    this.table[pos][index + 1] = data;
  }
}

function get(key) {
  let index = 0;
  let pos = this.betterHash(key);
  if (this.table[pos][index] === key) {
    return this.table[pos][index + 1];
  } else {
    while (this.table[pos][index] !== key) {
      index += 2;
    }
    return this.table[pos][index + 1];
  }
}