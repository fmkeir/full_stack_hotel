use hotel;
db.dropDatabase();

db.bookings.insertMany([
  {
    name: "Nil Nilson",
    emailAddress: "nil@ymail.com",
    checkedIn: true
  },
  {
    name: "Graham Grahamson",
    emailAddress: "GG@gmail.com",
    checkedIn: true
  },
  {
    name: "Amy Amiesdottir",
    emailAddress: "AA@mail.com",
    checkedIn: false
  },
  {
    name: "Fred Johnson",
    emailAddress: "fred@johnson.com",
    checkedIn: true
  },
  {
    name: "Bruno Mars",
    emailAddress: "Mars@solar-system.org",
    checkedIn: true
  }
]);
