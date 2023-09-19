import { useState } from "react";
import axios from "axios";
import { v4 as uuid } from "uuid";


function useFlip(initialState) {
    const [isFacingUp, setFlip] = useState(initialState);
    const flipCard = () => {
        setFlip(isUp => !isUp);
    }

    return [isFacingUp, flipCard]
}

function useAxios(baseUrl) {
    const [url, setUrl] = useState(baseUrl);
    const [data, setData] = useState([]);

    async function reqAxios(page = false) {

        const res = await axios.get(page ? (url + page + '/') : url)
        setData(data => [...data, { ...res.data, id: uuid() }])
    }

    return [data, reqAxios]
}


export { useFlip, useAxios };