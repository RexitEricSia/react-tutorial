interface CampaignModalProps {
    closeModal: () => void
}

const CampaignModal: React.FC<CampaignModalProps> = ({ closeModal }) => {
    return (
        <div className="z-50 fixed inset-0 flex justify-center items-center w-screen h-screen">
            <div
                className="absolute inset-0 bg-black opacity-35"
                onClick={closeModal}
            />
            <div
                className="z-10 relative bg-white shadow-lg p-8 rounded-lg"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={closeModal}
                    className="top-2 right-2 absolute text-gray-500 hover:text-black text-xl"
                >
                    &times;
                </button>
                Modal Content
            </div>
        </div>

    )
}

export default CampaignModal