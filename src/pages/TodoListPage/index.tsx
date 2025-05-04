import { useContext } from 'react';
import { TodoListContext } from 'contexts/TodoList';

import { TodoList } from 'components/templates/TodoList';



export const TodoListPage = () => {
    const { todoList, onDelete } = useContext(TodoListContext);

    return <TodoList todoList={todoList} onDelete={onDelete} />;
};
