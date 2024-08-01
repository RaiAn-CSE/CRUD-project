import { useEffect } from "react";

const useTittle = (title) => {
    useEffect(() => {
        document.title = `${title}-RaiAn`
    }, [title])
};

export default useTittle;