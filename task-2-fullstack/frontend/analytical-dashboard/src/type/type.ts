export type MaritalStatus = "Single" | "Married" | "Divorced";
export interface CustomerData {
  id: string;
  name: string;
  division: string;
  gender: string;
  maritalStatus: MaritalStatus;
  age: number;
  income: number;
}
