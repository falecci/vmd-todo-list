import React from 'react';

import ToDoListItem from './ToDoListItem';
import Spinner from '../../components/Spinner';
import ErrorMessage from '../../components/ErrorMessage';
import ToDoForm from './ToDoForm';
import { useTask } from './useTask';

const ToDoList = () => {
  const { getTasks } = useTask();
  const { loading, error, data } = getTasks();

  if (error) {
    return <ErrorMessage visible text="Oops, something went wrong." />;
  }

  return (
    <div>
      <div className="mb-4">
        <h1 className="text-gray-900 text-2xl">Todo List</h1>
        {loading ? <Spinner /> : <ToDoForm />}
      </div>
      <ul>
        {!loading &&
          !!data.allTasks.length &&
          data.allTasks.map(({ id, name, note, isDone }) => (
            <ToDoListItem key={id} id={id} note={note} isDone={isDone} name={name} />
          ))}
      </ul>
    </div>
  );
};

export default ToDoList;
