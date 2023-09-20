const { useState } = require("react")

const useTrashMap = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsloading] = useState(null);

    const postMapDetails = async (fomrData) => {
        setError(null);
        setIsloading(true);


        const response = await fetch('/api/trash', {
            method: "POST",
            body: fomrData
        })
        const json = await response.json();

        if(!response.ok){
            setError(json.error);
            setIsloading(false);
        }
        if(response.ok){           
            setIsloading(false);
        }
    }

    return {postMapDetails, error, isLoading};
}
export default useTrashMap;