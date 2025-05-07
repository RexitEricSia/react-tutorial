export type Campaign = {
    id?: number;
    campaignCode: string;
    name: string;
    description: string;
    organiserEmail: string;
    age: number;
    discountPercentage: number;
    startDate: string; // LocalDate -> string in 'YYYY-MM-DD' format
    endDate: string;   // LocalDate -> string in 'YYYY-MM-DD' format
    hallRentalPrice: number;
  }
  