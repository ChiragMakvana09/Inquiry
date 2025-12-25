window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;

window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;

window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;

if(!window.indexedDB){
    alert("your browser do not support indexDB");
}

var db;
var request = window.indexedDB.open("loginInfo",1);

request.onerror = function(event){
}

request.onsuccess = function(event) {
    db = request.result;
}

request.onupgradeneeded = function(event){
    var db = event.target.result;
    var objectStore = db.createObjectStore("loginInfoDB")    
}