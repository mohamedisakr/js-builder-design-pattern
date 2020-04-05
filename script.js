class Address {
  constructor(zip, street) {
    this.zip = zip;
    this.street = street;
  }
}

class User {
  constructor(name, { age = 20, phone = "123-456-7890", address } = {}) {
    this.name = name;
    this.age = age;
    this.phone = phone;
    this.address = address;
  }
}

const address = new Address("12345", "Main St.");
const user = new User("Tamil", { address });
console.log(user);
