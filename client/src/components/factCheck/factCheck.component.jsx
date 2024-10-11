import { useDispatch, useSelector } from "react-redux"
import "./factCheck.styles.scss"
import { factCheckSelector } from "../../store/factCheck/factCheck.selector"
import { useEffect, useState } from "react";
import {FactCheckRequest} from "./../../utils/FactCheck"
import { UpdateFactActions } from "../../store/factCheck/factCheck.actions";
import {Oval} from "react-loader-spinner"
import { TbAnalyzeFilled } from "react-icons/tb";
import { BsBoxArrowUpRight } from "react-icons/bs";


export function FactCheck(){
    const data = useSelector(factCheckSelector);
    const dispatch = useDispatch();
    const [factData, setfactData] = useState(data)
    const [fetching, setFetching] = useState(false)
    const [query, setQuery] = useState('')


    useEffect(() => {
        setfactData(data)
    }, [data])

    async function HandleFactCheck(){
            try{
                setFetching(true)
                setfactData({"meta_data": null})
                const response = await FactCheckRequest(query)
                dispatch(UpdateFactActions(response))
                setFetching(false)
            }catch(error){
                console.log(error)
            }
    }

    return (
        <div className="fact-check-container">
            <div className="fact-header">
                <div className="logo">
                    <TbAnalyzeFilled/>
                    <h2>MediaMind</h2></div>
            <p>A tool with the intelligence to distinguish between true and false content.</p>
            </div>
                <div className="input-container">
                    <p>Analyze Content: Determine Truth or Misinformation</p>
                <textarea type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
            <button onClick={HandleFactCheck}>Check the Fact</button>
            </div>
            {factData["meta_data"] &&
            (<div className="Result-container">
                <p>Analysis Complete</p>
                <table className="result">
                    <tbody>
                    <tr>
                        <td>Verdict</td>
                        <td style={{backgroundColor: `${factData["Verdict"] ? "#8bc34a": '#f44336'}`, color:"white"}}>{factData["Verdict"] ? "True" : "False"}</td>
                    </tr>
                    <tr>
                        <td>Reasoning</td>
                        <td>{factData["Reasoning"]}</td>
                    </tr>
                    <tr>
                        <td>Recommendation</td>
                        <td>{factData["Recommendation"]}</td>
                    </tr>
                    </tbody>
                </table> 
                    <div className="source-info">
                        <p>Source</p>
                        {factData["meta_data"].map((data,index) => 
                        <div key={index} className="source">
                            <p className="title">{data["title"]}</p>
                            <p>{data["snippet"]}</p>
                            <a href={data["link"]} target="_blank" >Site Link <BsBoxArrowUpRight/></a>
                            </div>)
                            }
                    </div>
                    </div>)
                }
                     {fetching &&
                     (
                        <div className="loading">
                         <span className="loader"></span>
                         </div>
                         ) 
                     }
        </div>
    )
} 
