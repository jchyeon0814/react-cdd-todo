import { useNavigate } from 'react-router-dom';

import styled from '@emotion/styled';
import { PageTitle } from 'components/atoms/PageTitle';
import { TodoItem } from 'components/organisms/TodoItem';
import { Button } from 'components/atoms/Button';

const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #eeeeee;
`;

const Contents = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
    padding: 32px;
    border-radius: 8px;
`;

const TodoListContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const ButtonContainer = styled.div`
    position: absolute;
    right: 40px;
    bottom: 40px;
    z-index: 1;
`;

interface Props {
    readonly todoList: ReadonlyArray<string>;
    readonly onDelete?: (todo: string) => void;
}

export const TodoList = ({ todoList, onDelete }: Props) => {
    const navigate = useNavigate();

    return (
        <Container>
            <Contents>
                <PageTitle title="할 일 목록" />
                <TodoListContainer>
                    {todoList.map((todo) => (
                        <TodoItem
                            key={todo}
                            label={todo}
                            onDelete={() => {
                                if (typeof onDelete === 'function') onDelete(todo);
                            }}
                        />    
                    ))}
                </TodoListContainer>
            </Contents>
            <ButtonContainer>
                <Button label="할 일 추가" color="#304FFE" onClick={() => { navigate('/add') }}/>
            </ButtonContainer>
        </Container>
    );
}