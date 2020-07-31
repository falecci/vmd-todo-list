import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Button from '../../components/Button';
import { useTask } from './useTask';

const ToDoListItem = ({ id, isDone, name, note }) => {
  const { deleteResult, deleteTask, updateResult, updateTask } = useTask();

  const handleOnRemoveClick = taskId => deleteTask(taskId);
  const handleOnUpdateClick = (taskId, newIsDone) => updateTask(taskId, newIsDone);

  return (
    <li className="flex mb-4 items-center">
      <div className="flex flex-col w-full">
        <p
          className={cn('w-full text-lg', {
            'text-gray-700': !isDone,
            'line-through text-green-500': isDone,
          })}
        >
          {name}
        </p>
        <span className="text-sm text-gray-500">{note}</span>
      </div>
      <Button
        className={cn({
          'text-gray-500 border-gray-500 hover:bg-gray-500 w-32': !isDone,
          'text-green-500 border-green-500 hover:bg-green-500 w-24': isDone,
        })}
        loading={updateResult.loading}
        onClick={() => handleOnUpdateClick(id, !isDone)}
        text={isDone ? 'Done' : 'Not Done'}
      />
      <Button
        className="text-red-500 border-red-500 hover:bg-red-500"
        loading={deleteResult.loading}
        onClick={() => handleOnRemoveClick(id)}
        text="Remove"
      />
    </li>
  );
};

ToDoListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isDone: PropTypes.bool.isRequired,
  note: PropTypes.string,
};

ToDoListItem.defaultProps = {
  note: '',
};

export default ToDoListItem;
