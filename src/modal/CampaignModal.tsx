import { motion } from "framer-motion";
import { useState } from "react";
import { useCampaignService } from "../service/useCampaignService";
import { Campaign, defaultCampaign } from "../model/Campaign";
import Swal from "sweetalert2";
import { AxiosError } from "axios";

interface CampaignModalProps {
    closeModal: () => void
}

type Errors = Partial<Record<keyof Campaign, string>>;

const CampaignModal: React.FC<CampaignModalProps> = ({ closeModal }) => {

    const { createCampaign } = useCampaignService()

    const [newCampaign, setNewCampaign] = useState<Campaign>(defaultCampaign);
    const [errors, setErrors] = useState<Errors>({});

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setNewCampaign(prev => ({
            ...prev,
            [name]: name === 'age' || name === 'discountPercentage' ? Number(value) || '' : value,
        }));
    };

    const validate = (): Errors => {
        const errs: Errors = {};

        if (!/^[A-Za-z0-9]+$/.test(newCampaign.campaignCode)) {
            errs.campaignCode = 'Only alphanumeric characters are allowed';
        }

        if (!newCampaign.name || newCampaign.name.trim().length < 3 || newCampaign.name.length > 100) {
            errs.name = 'Name must be between 3 and 100 characters';
        }

        if (!newCampaign.description || newCampaign.description.trim().length < 10) {
            errs.description = 'Description must be between 10 and 500 characters';
        }

        if (newCampaign.organiserEmail && !/^\S+@\S+\.\S+$/.test(newCampaign.organiserEmail)) {
            errs.organiserEmail = 'Invalid email newCampaignat';
        }

        if (newCampaign.age < 18) {
            errs.age = 'Must be 18 years or older';
        }

        if (newCampaign.discountPercentage > 100) {
            errs.discountPercentage = 'Discount cannot exceed 100';
        }

        if (newCampaign.startDate && new Date(newCampaign.startDate) < new Date()) {
            errs.startDate = 'Start date must be today or future';
        }

        if (newCampaign.endDate && new Date(newCampaign.endDate) <= new Date()) {
            errs.endDate = 'End date must be in the future';
        }

        if (newCampaign.hallRentalPrice && !/^\d{1,5}(\.\d{1,2})?$/.test(newCampaign.hallRentalPrice.toString())) {
            errs.hallRentalPrice = 'Max 5 digits, 2 decimals allowed';
        }

        return errs;
    };

    const handleSubmit = async () => {
        const validationErrors = validate();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length !== 0) {
            return
        }

        try {
            await createCampaign(newCampaign);
            closeModal(); 
            Swal.fire({
                icon: 'success',
                title: 'Campaign Created',
                text: 'Your campaign was created successfully!',
            });
        } catch (err) {
            if (err instanceof AxiosError) {
                if (err.response) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: err.response.data.status === 403 ? "Your access are not allowed to create Campaign" : err.response.data,
                    });
                }
            }
        }
    };

    return (
        <div className="z-50 fixed inset-0 flex justify-center items-center w-screen h-screen">
            <div
                className="absolute inset-0 bg-black opacity-35"
                onClick={closeModal}
            />
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.1, ease: "easeOut" }}
                className="z-10 relative bg-white shadow-lg p-6 rounded-lg w-1/2 h-[90%] overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={closeModal}
                    className="top-2 right-2 absolute text-gray-500 hover:text-black text-xl"
                >
                </button>
                <div className="flex flex-col gap-4">

                    <h2 className="font-semibold text-xl">Create Campaign</h2>

                    <div className="flex flex-col gap-2">

                        <div className="flex gap-2">

                            <div className="w-1/3">
                                <label className="block font-medium text-sm">Code</label>
                                <input
                                    type="text"
                                    name="campaignCode"
                                    value={newCampaign.campaignCode}
                                    onChange={handleChange}
                                    className="p-2 border rounded w-full"
                                />
                                {errors.campaignCode && <p className="text-red-500 text-sm">{errors.campaignCode}</p>}
                            </div>

                            <div className="w-2/3">
                                <label className="block font-medium text-sm">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={newCampaign.name}
                                    onChange={handleChange}
                                    className="p-2 border rounded w-full"
                                />
                                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                            </div>
                        </div>

                        <div className="">
                            <label className="block font-medium text-sm">Description</label>
                            <textarea
                                name="description"
                                value={newCampaign.description}
                                onChange={handleChange}
                                className="p-2 border rounded w-full"
                            />
                            {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
                        </div>

                        <div className="">
                            <label className="block font-medium text-sm">Organiser Email</label>
                            <input
                                type="email"
                                name="organiserEmail"
                                value={newCampaign.organiserEmail}
                                onChange={handleChange}
                                className="p-2 border rounded w-full"
                            />
                            {errors.organiserEmail && <p className="text-red-500 text-sm">{errors.organiserEmail}</p>}
                        </div>

                        <div className="flex gap-2">
                            <div className="w-1/2">
                                <label className="block font-medium text-sm">Age</label>
                                <input
                                    type="text"
                                    name="age"
                                    value={newCampaign.age}
                                    onChange={handleChange}
                                    className="p-2 border rounded w-full"
                                />
                                {errors.age && <p className="text-red-500 text-sm">{errors.age}</p>}
                            </div>

                            <div className="w-1/2">
                                <label className="block font-medium text-sm">Discount Percentage</label>
                                <input
                                    type="text"
                                    name="discountPercentage"
                                    value={newCampaign.discountPercentage}
                                    onChange={handleChange}
                                    className="p-2 border rounded w-full"
                                />
                                {errors.discountPercentage && <p className="text-red-500 text-sm">{errors.discountPercentage}</p>}
                            </div>
                        </div>

                        <div className="">
                            <label className="block font-medium text-sm">Start Date</label>
                            <input
                                type="date"
                                name="startDate"
                                value={newCampaign.startDate}
                                onChange={handleChange}
                                className="p-2 border rounded w-full"
                            />
                            {errors.startDate && <p className="text-red-500 text-sm">{errors.startDate}</p>}
                        </div>

                        <div className="">
                            <label className="block font-medium text-sm">End Date</label>
                            <input
                                type="date"
                                name="endDate"
                                value={newCampaign.endDate}
                                onChange={handleChange}
                                className="p-2 border rounded w-full"
                            />
                            {errors.endDate && <p className="text-red-500 text-sm">{errors.endDate}</p>}
                        </div>

                        <div className="">
                            <label className="block font-medium text-sm">Hall Rental Price</label>
                            <input
                                type="text"
                                name="hallRentalPrice"
                                value={newCampaign.hallRentalPrice}
                                onChange={handleChange}
                                className="p-2 border rounded w-full"
                            />
                            {errors.hallRentalPrice && <p className="text-red-500 text-sm">{errors.hallRentalPrice}</p>}
                        </div>
                    </div>

                    <button
                        onClick={handleSubmit}
                        className="bg-stone-700 p-2 rounded-lg font-medium text-white"
                    >
                        Submit
                    </button>
                </div>
            </motion.div>
        </div >

    )
}

export default CampaignModal