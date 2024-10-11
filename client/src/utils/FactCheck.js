import axios from "axios";

export const FactCheckRequest = async (query) => {
    try{
        const res = await axios.post("http://127.0.0.1:5000/factCheck", {"query": query})
        const markdownString = res.data["response"]
        const jsonString = markdownString.match(/```json\n([\s\S]*?)\n```/)[1];
        const jsonObject = JSON.parse(jsonString);
        jsonObject["meta_data"] = res.data["meta_data"]
        return jsonObject
    }catch(error){
        return error
    }
}