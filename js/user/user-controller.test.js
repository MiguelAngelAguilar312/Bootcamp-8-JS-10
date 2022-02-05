const UserController = require("./user-controller");
const User = require("./user");

const userController = new UserController();

test('add user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    expect(userController.getUsers()).toContain(user);
  });

test('remove user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    userController.remove(user);
    expect(userController.users).not.toContain(user);
  });

  test('findByEmail function works', () => {
    let email = "mau@correo.com";
    let user = new User(1234, "MiguelAguilar", email);
    userController.add(user);
    expect(userController.findByEmail(email)).toEqual(user);
  });
  
  test('findById function works', () => {
    let id = 5678;
    let user = new User(5678, "MiguelAngel", "mike@correo.com");
    userController.add(user);
    expect(userController.findById(id)).toEqual(user);
  });
