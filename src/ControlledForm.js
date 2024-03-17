import { useState } from "react";

function ControlledForm() {
    const [name, setName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setName("");
    }
    return (
        <div>
            <h1>{name}</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name: </label>
                <input name="name" placeholder="name" value={name} onChange={(e) => setName(e.target.value)} />
                <button disabled={!name}>Submit</button>
            </form>
        </div>
    )
}

export default ControlledForm;