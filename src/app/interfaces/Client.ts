export interface Client{


   clientName: string;
   imageUrl: string;
   clientEmail: string;
   password: string;
   walletBalance: number;
   phoneNumber: string;
   height: number;
   weight: number;
   gender: Gender;
   birthDate: Date;
   language: string;
   address: string;
   city: string;
}

export interface Gender{
  Male : 'MALE',
  Female : 'FEMALE'
}
