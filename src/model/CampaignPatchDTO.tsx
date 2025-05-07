export type CampaignPatchDTO = {
    campaignCode?: string;
    name?: string;
    description?: string;
    organiserEmail?: string;
    age?: number;
    discountPercentage?: number;
    startDate?: string;
    endDate?: string;
    hallRentalPrice?: number;
};