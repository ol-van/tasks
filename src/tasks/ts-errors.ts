/**
 *
 * 1. Make use of typescript, explain your changes
 * 2. Handle errors
 **/
interface User {
  id: number;
  email: string;
  isSelected: boolean;
}

interface UserDto {
  id: number;
  email: string;
}

function findOneUser() {
  try {
    const dto = userApi.findOne({id: 1});
    return mapToUser(dto);
  } catch (e) {
  }
}

const userApi = {
  findOne: req => {
    // should return user, but in our case throw error
    throw new ClientError(500, 'server is down');
  },
};

function mapToUser(dto) {
  // should map to user, but in our case throw error
  throw new Error('map to user is failed');
}

class ClientError extends Error {
  response: { status: number; error: string };

  constructor(status: number, error: string) {
    super();
    this.response = {status, error};
  }
}
