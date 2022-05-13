import { useEffect, useState } from "react";
import Todo from "../model/todo";

export default function Todos() {

    const [todos, setTodos] = useState<Todo[]>([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        // HTTP-Request (AJAX)
        // Backend-Techniken: WebService, JSON-Api, RESTFull, GraphQl
        // Client-Implementierungen im Browser: XMLHttpRequest, fetch-API
        const promise = fetch('https://jsonplaceholder.typicode.com/todos');
        promise
            .then((response) => response.json())
            .then( (data: Todo[]) => { setTodos(data)})
            .catch(error => {})
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return <div>
        <h2 className="text-2xl font-semibold">Todos</h2>

        { isLoading ? 
            <p>... is loading ... </p>
            :    
        <table>
            <thead>
                <tr>
                    <th>User</th>
                    <th>Title</th>
                    <th>Completed</th>
                </tr>
            </thead>
            <tbody>
                { todos.map(t =>  
                <tr key={t.id}>
                    <td>{t.userId}</td>
                    <td>{t.title}</td>
                    <td><input type="checkbox" readOnly checked={t.completed} /> </td>
                </tr>
                )}
            </tbody>
        </table>
    }
    </div>;
}