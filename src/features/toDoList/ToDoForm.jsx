import React, { useState } from 'react';

import Button from '../../components/Button';
import TextField from '../../components/TextField';
import ErrorMessage from '../../components/ErrorMessage';
import { useTask } from './useTask';

const ToDoForm = () => {
  const [task, setTask] = useState('');
  const [localError, setLocalError] = useState();
  const { createResult, createTask } = useTask();

  const handleOnAddClick = () => {
    setLocalError('');

    if (!task) {
      setLocalError('You must enter a task name.');
      return;
    }

    createTask(task);
    setTask('');
  };

  return (
    <div className="flex flex-col mt-4">
      <div className="flex">
        <TextField
          label="Task"
          name="task"
          value={task}
          error={localError}
          onChange={setTask}
          placeholder="Add Task"
        />
        <Button
          className="text-teal-500 border-teal-500 hover:bg-teal-500"
          onClick={handleOnAddClick}
          loading={createResult.loading}
          text="Add"
        />
      </div>
      <ErrorMessage
        text="There has been an error creating a task. Please try later"
        visible={!!createResult.error}
      />
    </div>
  );
};

export default ToDoForm;
