export type FormTypes = {
  name: string;
  cardNumber: string;
  month: string;
  year: string;
  cvc: string;
}

export const defaultState: FormTypes = {
  name: "JANE APPLESEED",
  cardNumber: "0000000000000000",
  month: "00",
  year: "00",
  cvc: "000",
}

export type SubmitFormTypes = {
  isSubmit: boolean;
  toggleSubmit?: () => void;
}