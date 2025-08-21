
import { useState } from "react";

export const useHeader = () =>{
     const [StatusMenu, setStatusMenu] = useState<boolean>(false);
    return {
        StatusMenu,
        setStatusMenu
    }
}