import { useQuery, useMutation, gql } from '@apollo/client';

const GET_ALL_TASKS = gql`
  query {
    allTasks {
      id
      name
      note
      isDone
    }
  }
`;

const UPDATE_TASK = gql`
  mutation UpdateTask($id: String!, $isDone: Boolean!) {
    updateTaskStatus(id: $id, isDone: $isDone) {
      id
      name
      note
      isDone
    }
  }
`;

const REMOVE_TASK = gql`
  mutation RemoveTask($id: String!) {
    deleteTask(id: $id)
  }
`;

const ADD_TASK = gql`
  mutation AddTask($name: String!, $note: String) {
    createTask(name: $name, note: $note, isDone: false) {
      id
      name
      note
      isDone
    }
  }
`;

export const useTask = () => {
  const [createMutation, createResult] = useMutation(ADD_TASK);
  const [updateMutation, updateResult] = useMutation(UPDATE_TASK);
  const [deleteMutation, deleteResult] = useMutation(REMOVE_TASK);

  const createTask = task => {
    createMutation({
      variables: {
        name: task,
        note: '',
      },
      optimisticResponse: {
        __typename: 'Mutation',
        createTask: {
          __typename: 'Task',
          name: task,
          isDone: false,
          note: '',
        },
      },
      update: (proxy, updateData) => {
        const data = proxy.readQuery({ query: GET_ALL_TASKS });

        const newTasks = data
          ? [...data.allTasks, updateData.data.createTask]
          : [updateData.data.createTask];

        proxy.writeQuery({
          query: GET_ALL_TASKS,
          data: {
            ...data,
            allTasks: newTasks,
          },
        });
      },
    });
  };

  const updateTask = (id, isDone) => {
    updateMutation({
      variables: {
        id,
        isDone,
      },
    });
  };

  const deleteTask = id => {
    deleteMutation({
      variables: {
        id,
      },
      optimisticResponse: {
        deleteTask: true,
      },
      update: proxy => {
        const data = proxy.readQuery({ query: GET_ALL_TASKS });

        proxy.writeQuery({
          query: GET_ALL_TASKS,
          data: {
            ...data,
            allTasks: [...data.allTasks.filter(t => t.id !== id)],
          },
        });
      },
    });
  };

  const getTasks = () => {
    const { loading, error, data } = useQuery(GET_ALL_TASKS);

    return { loading, error, data };
  };

  return {
    createTask,
    createResult,
    updateTask,
    updateResult,
    deleteTask,
    deleteResult,
    getTasks,
  };
};
