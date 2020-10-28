/* realize a Dictionary */

function Dictionary() {
  this.dataStore = new Array();
  this.add = add;
  this.find = find;
  this.remove = remove;
  this.showAll = showAll;
  this.count = count;
}

function add(key, value) {
  this.dataStore[key] = value;
}

function find(key) {
  return this.dataStore[key];
}

function remove(key) {
  delete this.dataStore[key];
}

function showAll() {
  Object.keys(this.dataStore).forEach(key => 
    print(key + " : " + this.dataStore[key])
  , this);
}

function count() {
  return Object.keys(this.dataStore).length;
}

function clear() {
  Object.keys(thsi.dataStore).forEach(key =>
    delete this.dataStore[key]  
  , this);
}