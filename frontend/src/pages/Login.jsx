import axios from "axios";
import { useState } from "react";

import {
    Link,
    useNavigate
} from "react-router-dom";

function Login() {

    const navigate = useNavigate();

    const [form, setForm] = useState({

        email: "",
        password: ""

    });

    const handleLogin = async (e) => {

        e.preventDefault();

        try {

            const res = await axios.post(

                "http://localhost:5000/api/auth/login",

                form
            );

            localStorage.setItem(
                "token",
                res.data.token
            );

            alert("Login Successful");

            navigate("/dashboard");

        } catch (error) {

            alert("Invalid Credentials");
        }
    };

    return (

        <div className="auth-container">

            <div className="card auth-card">

                <h2>Login</h2>

                <form onSubmit={handleLogin}>

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
                        Login
                    </button>

                </form>

                <p className="link-text">

                    New user?

                    <Link to="/signup">
                        {" "}Signup
                    </Link>

                </p>

            </div>

        </div>
    );
}

export default Login;