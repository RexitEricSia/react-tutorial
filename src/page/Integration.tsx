import CampaignData from "../component/CampaignData"
import LoginForm from "../component/LoginForm"

const Integration = () => {

    return (
        <div className="flex gap-4 px-12 w-screen">
            <div className="flex justify-center items-center w-1/2">
                <LoginForm />
            </div>
            <div className="flex justify-center w-1/2">
                <CampaignData />
            </div>
        </div>
    )
}

export default Integration