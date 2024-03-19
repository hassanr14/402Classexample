import axios from "axios";

export default axios.create({

    baseURL: 'https://qfpbv8udd3.execute-api.us-east-1.amazonaws.com',
    headers:{
        "content-type":"application/json"
    }
})

export {};