interface ICreateUserDTO {
  name: string;
  email: string;
  password: string;
  avatar_url?: string;
}

export { ICreateUserDTO };