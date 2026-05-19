import Navbar from "../components/Navbar";
import ComplaintForm from "../components/ComplaintForm";
import ComplaintList from "../components/ComplaintList";
import AIAnalysis from "../components/AIAnalysis";

function Dashboard() {

    return (

        <div>

            <Navbar />

            <div className="container">

                <ComplaintForm />

                <ComplaintList />

                <AIAnalysis />

            </div>

        </div>
    );
}

export default Dashboard;