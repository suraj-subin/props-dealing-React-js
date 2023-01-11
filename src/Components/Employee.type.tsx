

export interface IEmployee {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
  }

  export const dommyEmployeeList :IEmployee[] = [
    {
        id:new Date().toJSON().toString(),
        firstName:'suraj' ,
        lastName: 'singh',
        email:'surajsubin5@gmail.com' ,
    }
  ]
  
