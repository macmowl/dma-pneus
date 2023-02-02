export interface IFormTyre {
    lastName: string;
    email: string;
    phone: string;
    carBrand: string;
    carModel: string;
    electric: boolean;
    subject: string;
    tyreWidth: number;
    tyreHeight: number;
    diameter: number;
    chargeIndicator: number;
    speedIndicator: string;
    quantity: number;
  }

  export interface IFormMaintenance {
    lastName: string;
    email: string;
    phone: string;
    carBrand: string;
    carModel: string;
    electric: boolean;
    subject: string;
  }

export interface IContactForm {
  name: string;
  email: string;
  message: string;
}