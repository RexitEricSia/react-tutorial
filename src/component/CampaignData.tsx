import { useState, useEffect } from "react";
import { Campaign } from "../model/Campaign";

import { AxiosError } from "axios";
import CampaignModal from "../modal/CampaignModal";
import { useCampaignService } from "../service/useCampaignService";

const CampaignData = () => {

    const { getAllCampaigns } = useCampaignService()

    const [campaigns, setCampaigns] = useState<Campaign[]>([])
    const [error, setError] = useState<string | null>(null)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const openModal = () => {
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
    }

    const fetchCampaign = async () => {
        try {
            const res = await getAllCampaigns();
            setCampaigns(res);
            setError(null)
        } catch (err) {
            if (err instanceof AxiosError) {
                if (err.response) {
                    setError(err.response.data);
                }
            }
        }
    }

    useEffect(() => {
        fetchCampaign()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <div className="flex flex-col gap-6 p-6 border border-gray-500 rounded-lg w-full">
                <div className="flex justify-between">
                    <button onClick={openModal} className='bg-stone-700 p-2 rounded-lg font-medium text-white'>Create</button>
                    <button onClick={fetchCampaign} className='bg-stone-700 p-2 rounded-lg font-medium text-white'>Refresh</button>
                </div>
                <div className="flex flex-col gap-1">
                    {error
                        ? <h1>{error}</h1>
                        : campaigns.map((campaign) => (
                            <div key={campaign.id} className="bg-white shadow p-2 rounded-lg">
                                {campaign.name}
                            </div>
                        ))}
                </div>
            </div>
            {isModalOpen && <CampaignModal closeModal={closeModal} />}
        </>
    )
}

export default CampaignData