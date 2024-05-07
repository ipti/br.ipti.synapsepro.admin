import { useEffect, useState } from "react";
import { Tsone } from "./type";
import { useFetchRequestTsLists } from "../../../Services/Project/query";
import { useParams } from "react-router-dom";

export const TsOneState = () => {


    const {id} = useParams()
    const [tsOne, setTsOne] = useState<Tsone | undefined>();
    const { data: tsOneRequest } = useFetchRequestTsLists(parseInt(id!))

    useEffect(() => {
        if (tsOneRequest) {
            setTsOne(tsOneRequest)
        }
    }, [tsOneRequest])

    return {
        tsOne
    }
}