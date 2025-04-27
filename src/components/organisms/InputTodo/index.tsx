import { useState } from 'react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

import { Input } from 'components/atoms/Input';
import { Button } from 'components/atoms/Button';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const InputTodo = () => {
    const [todo, setTodo] = useState('');
    const navigate = useNavigate();

    const onAdd = () => {
        setTodo('');
        navigate('/');
    };

    return (
        <Container>
            <Input value={todo} onChange={setTodo} />
            <Button label="추가" color="#304FFE" onClick={onAdd} />
        </Container>
    );
};

