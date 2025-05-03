import { TodoList } from 'components/templates/TodoList';

export const TodoListPage = () => {
    const todoList = ['리액트 공부하기', 'CDD 공부하기', '할 일 목록 앱 개발기'];

    return <TodoList todoList={todoList} />;
};
