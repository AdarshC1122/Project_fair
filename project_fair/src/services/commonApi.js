import axios from "axios";

export const commonApi = async (httpRequestMethod, url, reqBody, reqHeader) => {
    const reqConfiq = {
        method: httpRequestMethod,
        url,
        data: reqBody,
        headers: reqHeader ? reqHeader : { "Content-Type": "application/json" }
    }
    
    return await axios(reqConfiq).then((res) => { return res }).catch((err) => { return err })

}