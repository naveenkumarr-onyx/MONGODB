
[
  {
    _id: {
      $oid: "647ec2572e56eaf189040bd4",
    },
    address: {
      building: "1007",
      coord: [-73.856077, 40.848447],
      street: "Mall Road Mussorrie",
      zipcode: "10462",
    },
    cuisine: "Bakery",
    grades: [
      {
        date: {
          $date: "2014-03-03T00:00:00.000Z"
        },
        grade: "A",
        score: 2,
      },
      {
        date: {
          $date: "2013-09-11T00:00:00.000Z",
        },
        grade: "A",
        score: 6,
      },
      {
        date: {
          $date: "2013-01-24T00:00:00.000Z",
        },
        grade: "A",
        score: 10,
      },
      {
        date: {
          $date: "2011-11-23T00:00:00.000Z",
        },
        grade: "A",
        score: 9,
      },
      {
        date: {
          $date: "2011-03-10T00:00:00.000Z",
        },
        grade: "B",
        score: 14,
      },
    ],
    name: "Morris Bake Shop",
    restaurant_id: "30075445",
  },
];
// 1) Write a MongoDB query to display the fields restaurant_id, name, and zip code but exclude the field _id for all the documents in the collection restaurant.
db.restaurant.find(
  {},
  { _id: 0, restaurant_id: 1, name: 1, "address.zipcode": 1 }
);

// 2) Write a MongoDB query to arrange the name of the restaurants in ascending order along with all the columns.
db.restaurant.find({}).sort({ name: 1 });

// 3) Write a MongoDB query to display the first 5 restaurant in ascending order of name field.
db.restaurant.find({}).sort({ name: 1 }).limit(5);

// 4) Write a MongoDB query to display the next 5 restaurants after skipping first 5.
db.restaurant.find({}).sort({ name: 1 }).skip(5).limit(5);

// 5) Write a MongoDB query to find the restaurants who achieved a score more than 90.
db.restaurant.find({ "grades.score": { $gt: 90 } });

// 6) Write a MongoDB query to find the restaurants that achieved a score, more than 80 but less than 100.
db.restaurant.find({ "grades.score": { $gt: 80, $lt: 100 } });

// 7) Write a MongoDB query to find the restaurant name, longitude and latitude and cuisine for those restaurants which contain 'Caf' as first three letters of its name.
db.restaurant.find(
  { name: /^Caf/ },
  { name: 1, "address.coord": 1, cuisine: 1 }
);

// 8) Write a MongoDb query to update grade B to A in all documents.
db.restaurant.updateMany(
  {},
  { $set: { "grades.$[elem].grade": "A" } },
  { arrayFilters: [{ "elem.grade": "B" }] }
);
