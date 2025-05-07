
import { AxiosError } from 'axios';
import { useAuthAxios } from '../axiosService/useAuthAxios';
import { Campaign } from '../model/Campaign';
import { CampaignPatchDTO } from '../model/CampaignPatchDTO';

export const useCampaignService = () => {

  const axios = useAuthAxios();

  return {
    getAllCampaigns: async () => {
      try {
        const response = await axios.get<Promise<Campaign[]>>('/campaign');
        return response.data;
      } catch (err) {
        if (err instanceof AxiosError) {
          throw err;
        } else {
          throw new Error("An unknown error occurred during login.");
        }
      }
    },
    getCampaignById: (id: number) => axios.get<Campaign>(`/campaign/${id}`),
    createCampaign: (newCampaign: Campaign) => axios.post<Campaign>('/campaign', newCampaign),
    updateCampaign: (id: number, updatedCampaign: Campaign) =>
      axios.put<Campaign>(`/campaign/${id}`, updatedCampaign),
    deleteCampaign: (id: number) => axios.delete<boolean>(`/campaign/${id}`),
    patchCampaign: (id: number, patchData: CampaignPatchDTO) =>
      axios.patch<Campaign>(`/campaign/${id}`, patchData),
  };
};