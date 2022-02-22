interface ICreateUserDTO {
  name: string;
  email: string;
  password: string;
  avatar_url?: string;
  id?: string;
}

export { ICreateUserDTO };
