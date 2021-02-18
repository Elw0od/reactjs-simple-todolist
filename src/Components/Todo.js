function Todo({todo, index, removeTodo}) {
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
    return (
        <div className="todo">
            <li
                className="group relative bg-white rounded-lg shadow-sm cursor-pointer focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-indigo-500">
                <div
                    className="rounded-lg border border-gray-300 bg-white px-6 py-4 hover:border-gray-400 sm:flex sm:justify-between">
                    <div className="flex items-center">
                        <div className="text-sm">
                            <p className="font-medium text-gray-900">
                                {todo.text}
                            </p>
                            <div className="text-gray-500">
                                <p className="sm:inline">{date}</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-2 flex text-sm sm:mt-0 sm:block sm:ml-4 sm:text-right">
                        <button
                            onClick={() => removeTodo(index)}
                            className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                            Supprimer
                        </button>
                    </div>
                </div>
            </li>
        </div>
    );
}

export default Todo;
