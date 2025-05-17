export type MaritalStatus = "Single" | "Married" | "Divorced";

export type CustomerData = {
  id: string;
  name: string;
  division: string;
  gender: string;
  maritalStatus: MaritalStatus;
  age: number;
  income: number;
};

export type TFilter = {
  gender: string;
  division: string;
  maritalStatus: string;
};
