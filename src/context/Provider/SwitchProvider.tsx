import { ReactNode, useState } from "react";
import { SwitchContext } from "../useSwitch";

interface SwitchProviderProps {
    children: ReactNode;
}

export const SwitchProvider: React.FC<SwitchProviderProps> = ({ children }) => {
    const [isChecked, setisChecked] = useState(false);

    const toggleSwitch = () => {
        setisChecked(!isChecked);
    };

    return (
        <SwitchContext.Provider value={{ isChecked, toggleSwitch }}>
            {children}
        </SwitchContext.Provider>
    );
};