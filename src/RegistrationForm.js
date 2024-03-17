import "./reg.css";
import { useState } from "react";

const PasswordErrorMessage = () => {
    return (
        <p className="FieldError">Password should have at least 8 characters</p>
    );
};

function RegistrationForm() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState({
        value: "",
        isTouched: false,
    });
    const [role, setRole] = useState("role");

    const getIsFormValid = () => {
        return (
            firstName &&
            password.value.length >= 8 &&
            role !== "role"
        );
    };

    const clearForm = () => {
        // Implement this function
        setFirstName("");
        setLastName("");
        setPassword({ value: "", isTouched: false });
        setEmail("");
        setRole("Role");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Account created!");
        clearForm();
    };

    return (
        <div className="App">
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <h2>Sign Up</h2>
                    <div className="Field">
                        <label htmlFor="firstName">
                            First name <sup>*</sup>
                        </label>
                        <input placeholder="First name" value={firstName} name="firstname" onChange={(e) => setFirstName(e.target.value)} />
                    </div>
                    <div className="Field">
                        <label htmlFor="lastname">Last name</label>
                        <input name="lastname" value={lastName} placeholder="Last name" onChange={(e) => setLastName(e.target.value)} />
                    </div>
                    <div className="Field">
                        <label htmlFor="email">
                            Email address <sup>*</sup>
                        </label>
                        <input name="email" value={email} placeholder="Email address" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="Field">
                        <label htmlFor="password">
                            Password <sup>*</sup>
                        </label>
                        <input value={password.value}
                            type="password"
                            onChange={(e) => {
                                setPassword({ ...password, value: e.target.value });
                            }}
                            onBlur={() => {
                                setPassword({ ...password, isTouched: true });
                            }} />
                    </div>
                    <div className="Field">
                        <label htmlFor="role">
                            Role <sup>*</sup>
                        </label>
                        <select name="role" value={role} onChange={(e) => setRole(e.target.value)}>
                            <option value="role">Role</option>
                            <option value="individual">Individual</option>
                            <option value="business">Business</option>
                        </select>
                    </div>
                    <button type="submit" disabled={!getIsFormValid()}>
                        Create account
                    </button>
                </fieldset>
            </form>
        </div>
    );
}


export default RegistrationForm;