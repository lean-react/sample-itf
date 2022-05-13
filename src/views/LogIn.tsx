import { useContext } from "react";
import { AuthContext } from "../auth/context";

export default function LogIn() {

    const {dispatch} = useContext(AuthContext);

    return (
        <div>
            <h2 className="text-2xl font-semibold">Log In</h2>
            <button onClick={() => dispatch({type: 'login', name: 'Micha'})}>Log In</button>
        </div>
    );
}