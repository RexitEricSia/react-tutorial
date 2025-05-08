
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
          throw new Error("An unknown error occurred while fetching campaigns.");
        }
      }
    },
    getCampaignById: async (id: number) => {
      try {
        const response = await axios.get<Campaign>(`/campaign/${id}`);
        return response.data;
      } catch (err) {
        if (err instanceof AxiosError) {
          throw err;
        } else {
          throw new Error(`An unknown error occurred while fetching campaign with id ${id}.`);
        }
      }
    },
    createCampaign: async (newCampaign: Campaign) => {
      try {
        const response = await axios.post<Campaign>('/campaign', newCampaign);
        return response.data;
      } catch (err) {
        if (err instanceof AxiosError) {
          throw err;
        } else {
          throw new Error("An unknown error occurred while creating the campaign.");
        }
      }
    },
    updateCampaign: async (id: number, updatedCampaign: Campaign) => {
      try {
        const response = await axios.put<Campaign>(`/campaign/${id}`, updatedCampaign);
        return response.data;
      } catch (err) {
        if (err instanceof AxiosError) {
          throw err;
        } else {
          throw new Error(`An unknown error occurred while updating campaign with id ${id}.`);
        }
      }
    },
    deleteCampaign: async (id: number) => {
      try {
        const response = await axios.delete<boolean>(`/campaign/${id}`);
        return response.data;
      } catch (err) {
        if (err instanceof AxiosError) {
          throw err;
        } else {
          throw new Error(`An unknown error occurred while deleting campaign with id ${id}.`);
        }
      }
    },
    patchCampaign: async (id: number, patchData: CampaignPatchDTO) => {
      try {
        const response = await axios.patch<Campaign>(`/campaign/${id}`, patchData);
        return response.data;
      } catch (err) {
        if (err instanceof AxiosError) {
          throw err;
        } else {
          throw new Error(`An unknown error occurred while patching campaign with id ${id}.`);
        }
      }
    },
  };
};