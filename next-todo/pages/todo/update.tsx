import React from 'react';
import { NextPage } from 'next';
import UpdateTodo from '../../components/UpdateTodo';
import { TodoType } from '../../types/todo';
import { useRouter } from 'next/router';

const updateTodo: NextPage = () => {
  const router = useRouter();
  const todo = router.query as unknown as TodoType;
  return <UpdateTodo todo={todo} />;
};

export default updateTodo;
