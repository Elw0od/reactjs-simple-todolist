import React, {useState} from 'react';
import Todo from '../Components/Todo'
import FormTodo from '../Components/FormTodo'

function App() {
    const [todos,
        setTodos] = useState([]);

    // Add todo
    const addTodo = text => {
        const newTodos = [
            ...todos, {
                text
            }
        ];
        setTodos(newTodos);
    };

    // Delete Todo
    const removeTodo = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    return (
        <div className="relative bg-white h-screen w-screen">
            <div className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
                <div
                    className="bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
                    <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                      Ajouter une ville
                    </h2>
                    <p className="mt-3 text-lg leading-6 text-gray-500">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores neque illo sequi voluptate eum error ex, animi possimus dignissimos nostrum explicabo.
                    </p>
                    <div className="max-w-lg mx-auto mt-10 lg:max-w-none">
                        <FormTodo addTodo={addTodo}/>
                    </div>
                </div>
                <div
                    className="bg-gray-200 h-screen py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
                    <div className="max-w-lg mx-auto">
                        <h2
                            className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                            TodoList
                        </h2>
                        <dl className="mt-8 text-base text-gray-500">
                            <ul className="space-y-4">
                                {todos.map((todo, index) => (
                                  <Todo index={index}  key={index} todo={todo} removeTodo={removeTodo}/>
                                ))}
                            </ul>
                        </dl>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default App;