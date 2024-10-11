import axios from "axios";

export const IdeaSuggestion = async (mainTopic) => {
    try{
        const res = await axios.post("http://127.0.0.1:5000/IdeaBank", {"topic": mainTopic})
        const markdownString = res.data["response"]
        const jsonString = markdownString.match(/```json\n([\s\S]*?)\n```/)[1];
        const jsonObject = JSON.parse(jsonString);
        return jsonObject
    }catch(error){
        return error
    }
}