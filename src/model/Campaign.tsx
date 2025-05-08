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

export const defaultCampaign: Campaign = {
  campaignCode: "",
  name: "",
  description: "",
  organiserEmail: "",
  age: 18,
  discountPercentage: 0,
  startDate: "2025-01-01",
  endDate: "2025-12-31",
  hallRentalPrice: 0,
};