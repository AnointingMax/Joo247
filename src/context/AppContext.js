import { createContext, useContext, useState } from "react";

const Context = createContext(null);

const AppContext = ({ children }) => {
    const [user, setUser] = useState({
        firstName: "Ade",
        lastName: "Robinson",
        image:
            "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2021/09/featured-image-interior-designer.jpeg.jpg",
        job: "Graphics Designer",
    });

    return (
        <Context.Provider value={{ user, setUser }}>{children}</Context.Provider>
    );
};

export const useAppContext = () => {
    return useContext(Context);
};

export default AppContext;