import axios from "axios";
import { useState } from "react";

import { Link } from "react-router-dom";

function Signup() {

    const [form, setForm] = useState({

        name: "",
        email: "",
        password: ""

    });

    const handleSignup = async (e) => {

        e.preventDefault();

        try {

            await axios.post(

                "http://localhost:5000/api/auth/signup",

                form
            );

            alert("Signup Successful");

        } catch (error) {

            alert("Signup Failed");
        }
    };

    return (

        <div className="auth-container">

            <div className="card auth-card">

                <h2>Signup</h2>

                <form onSubmit={handleSignup}>

                    <input
                        placeholder="Name"
                        onChange={(e) =>
                            setForm({
                                ...form,
                                name:e.target.value
                            })
                        }
                    />

                    <input
                        type="email"
                        placeholder="Email"
                        onChange={(e) =>
                            setForm({
                                ...form,
                                email:e.target.value
                            })
                        }
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        onChange={(e) =>
                            setForm({
                                ...form,
                                password:e.target.value
                            })
                        }
                    />

                    <button type="submit">
                        Signup
                    </button>

                </form>

                <p className="link-text">

                    Already have account?

                    <Link to="/login">
                        {" "}Login
                    </Link>

                </p>

            </div>

        </div>
    );
}

export default Signup;