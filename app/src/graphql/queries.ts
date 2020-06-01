/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      name
      createdAt
      completed
      todoList {
        id
        createdAt
        todos {
          nextToken
        }
      }
      userId
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        completed
        todoList {
          id
          createdAt
        }
        userId
      }
      nextToken
    }
  }
`;
export const getTodoList = /* GraphQL */ `
  query GetTodoList($id: ID!) {
    getTodoList(id: $id) {
      id
      createdAt
      todos {
        items {
          id
          name
          createdAt
          completed
          userId
        }
        nextToken
      }
    }
  }
`;
export const listTodoLists = /* GraphQL */ `
  query ListTodoLists(
    $filter: ModelTodoListFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodoLists(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        todos {
          nextToken
        }
      }
      nextToken
    }
  }
`;
