import {EXCHANGE_API_URL} from './config';
import axios from "axios";

const getCurrency = async (base: string, convertedTo?:string ) => {
    try {
        const paramStr = convertedTo ? `?base=${base}` : `?base=${base}&symbols=${convertedTo}` ;
        const response = await axios.get(`${EXCHANGE_API_URL}${paramStr}`);
        const data = await response.data;
        return data;
    } catch (error: any) {
        return error.response.data;
    }
};
export {
    getCurrency
}
