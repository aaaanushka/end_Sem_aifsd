import axios from "axios";
import { useState } from "react";

function AIAnalysis() {

    const [description, setDescription] =
        useState("");

    const [result, setResult] =
        useState("");

    const analyzeComplaint = async () => {

        try {

            const res = await axios.post(

                "https://smart-complaint-backend-1ubk.onrender.com/api/ai/analyze",

                { description }
            );

            setResult(
                res.data.content
            );

        } catch (error) {

            alert("AI Analysis Failed");
        }
    };

    return (

        <div className="card">

            <h2>AI Complaint Analysis</h2>

            <textarea
                placeholder="Enter complaint description..."
                onChange={(e)=>
                    setDescription(
                        e.target.value
                    )
                }
            />

            <button onClick={analyzeComplaint}>
                Analyze Complaint
            </button>

            <div className="ai-output">

                {result}

            </div>

        </div>
    );
}

export default AIAnalysis;