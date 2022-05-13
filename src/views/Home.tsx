import { useReducer } from "react";

type ACTIONS = 
  | { type: 'reset', initial: number }
  | { type: 'inc', payload: number }
  | { type: 'dec', payload: number };

export default function Home() {

    const [count, dispatch] = useReducer((state: number, action: ACTIONS): number => {
        switch (action.type) {
            case 'inc': return state + action.payload;
            case 'dec': return state - action.payload;
            case 'reset': return action.initial;
        }
    }, 0)

    return <div> 
        <h2 className="text-2xl font-semibold">Home</h2>
        Zähler: {count}
        <button onClick={() => dispatch({ type: 'reset',initial:17})}>Inc</button>
    </div>;
}