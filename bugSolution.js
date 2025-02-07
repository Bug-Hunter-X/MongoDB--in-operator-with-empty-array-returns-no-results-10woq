```javascript
function findDocuments(field, array) {
  if (array.length === 0) {
    // Return all documents if the array is empty
    return db.collection.find({});
  } else {
    // Use the $in operator as usual
    return db.collection.find({ field: { $in: array } });
  }
}
```