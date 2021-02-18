import React, {useState} from 'react';

function FormTodo({addTodo}) {
    const [value,
        setValue] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (!value)
            return;
        addTodo(value);
        setValue("");
    };

    return (
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-6">
            <div>
                <input
                    type="text"
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    required
                    className="block border w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-green-500 focus:border-green-500 border-gray-300 rounded-md"
                    placeholder="Ajouter une nouvelle tâche"/>
            </div>
            <div>
                <button
                    type="submit"
                    className="inline-flex left justify-center mt-3 py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                        Envoyer
                </button>
            </div>
        </form>
    );
}

export default FormTodo;