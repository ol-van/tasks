/**
 *
 * Imagine you have some API that returns you an array of user models,
 * where each model has a static id and lazy name.
 *
 * Your goal is to convert array of users to the following shape: Array<{id: 1, name: 'some user name'}>
 **/

function findAllUsers() {
  return Promise.resolve([new User(), new User(), new User(), new User()]);
}

class User {
  id = generateId();

  get name(): Promise<string> {
    return new Promise((res) =>
      setTimeout(() => res('some user name'), 100)
    );
  }
}

function generateId() {
  return 1;
}
