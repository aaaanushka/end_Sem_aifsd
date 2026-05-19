import axios from "axios";
import {
    useEffect,
    useState
} from "react";

function ComplaintList() {

    const [complaints, setComplaints] =
        useState([]);

    const fetchComplaints = async () => {

        try {

            const token = localStorage.getItem(
                "token"
            );

            const res = await axios.get(

                "https://smart-complaint-backend-1ubk.onrender.com/api/complaints",

                {
                    headers: {
                        Authorization: token
                    }
                }
            );

            setComplaints(res.data);

        } catch (error) {

            console.log(error);
        }
    };

    useEffect(() => {

        fetchComplaints();

        const interval = setInterval(() => {

            fetchComplaints();

        }, 2000);

        return () => clearInterval(interval);

    }, []);

    return (

        <div className="card">

            <h2>All Complaints</h2>

            {
                complaints.map((c)=>(

                    <div
                        className="complaint-card"
                        key={c._id}
                    >

                        <h3>{c.title}</h3>

                        <p>{c.description}</p>

                        <p>
                            <b>Category:</b>
                            {" "}
                            {c.category}
                        </p>

                        <p>
                            <b>Location:</b>
                            {" "}
                            {c.location}
                        </p>

                        <p className="status">
                            Status: {c.status}
                        </p>

                    </div>

                ))
            }

        </div>
    );
}

export default ComplaintList;