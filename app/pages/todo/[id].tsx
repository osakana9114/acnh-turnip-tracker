import * as React from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import Link from 'next/link';
import { GetTodoQuery } from '../../src/API';
import { getTodo } from '../../src/graphql/queries';
import config from '../../src/aws-exports';

API.configure(config);

const TodoPage = (props: { todo: GetTodoQuery['getTodo'] }) => {
  return (
    <main className="l-page">
      <h2>Individual Todo {props.todo.id}</h2>
      <pre>{JSON.stringify(props.todo, null, 2)}</pre>
      <Link href="/example_todo">
        <a>return Todos List</a>
      </Link>
    </main>
  );
};

TodoPage.getInitialProps = async context => {
  const { id } = context.query;
  try {
    const todo = (await API.graphql({
      ...graphqlOperation(getTodo),
      variables: { id },
    })) as { data: GetTodoQuery; errors: {}[] };
    if (todo.errors) {
      console.log('Failed to fetch todo. ', todo.errors);
      return { todo: {} };
    }
    return { todo: todo.data.getTodo };
  } catch (err) {
    console.warn(err);
    return { todo: {} };
  }
};

export default TodoPage;
