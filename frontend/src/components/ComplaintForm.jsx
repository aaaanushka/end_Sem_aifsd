import axios from "axios";
import { useState } from "react";

function ComplaintForm() {

    const [form, setForm] = useState({

        name: "",
        email: "",
        title: "",
        description: "",
        category: "",
        location: ""

    });

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const token = localStorage.getItem(
                "token"
            );

            await axios.post(

                "https://smart-complaint-backend-1ubk.onrender.com/api/complaints",

                form,

                {
                    headers: {
                        Authorization: token
                    }
                }
            );

            alert("Complaint Submitted");

        } catch (error) {

            alert("Submission Failed");
        }
    };

    return (

        <div className="card">

            <h2>Complaint Registration</h2>

            <form onSubmit={handleSubmit}>

                <input
                    placeholder="Name"
                    onChange={(e)=>
                        setForm({
                            ...form,
                            name:e.target.value
                        })
                    }
                />

                <input
                    placeholder="Email"
                    onChange={(e)=>
                        setForm({
                            ...form,
                            email:e.target.value
                        })
                    }
                />

                <input
                    placeholder="Complaint Title"
                    onChange={(e)=>
                        setForm({
                            ...form,
                            title:e.target.value
                        })
                    }
                />

                <textarea
                    placeholder="Complaint Description"
                    onChange={(e)=>
                        setForm({
                            ...form,
                            description:e.target.value
                        })
                    }
                />

                <input
                    placeholder="Category"
                    onChange={(e)=>
                        setForm({
                            ...form,
                            category:e.target.value
                        })
                    }
                />

                <input
                    placeholder="Location"
                    onChange={(e)=>
                        setForm({
                            ...form,
                            location:e.target.value
                        })
                    }
                />

                <button type="submit">
                    Submit Complaint
                </button>

            </form>

        </div>
    );
}

export default ComplaintForm;