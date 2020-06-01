/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateTodoInput = {
  id?: string | null,
  name: string,
  createdAt: string,
  completed: boolean,
  userId: string,
  todoTodoListId: string,
};

export type ModelTodoConditionInput = {
  name?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  completed?: ModelBooleanInput | null,
  userId?: ModelStringInput | null,
  and?: Array< ModelTodoConditionInput | null > | null,
  or?: Array< ModelTodoConditionInput | null > | null,
  not?: ModelTodoConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateTodoInput = {
  id: string,
  name?: string | null,
  createdAt?: string | null,
  completed?: boolean | null,
  userId?: string | null,
  todoTodoListId?: string | null,
};

export type DeleteTodoInput = {
  id?: string | null,
};

export type CreateTodoListInput = {
  id?: string | null,
  createdAt: string,
};

export type ModelTodoListConditionInput = {
  createdAt?: ModelStringInput | null,
  and?: Array< ModelTodoListConditionInput | null > | null,
  or?: Array< ModelTodoListConditionInput | null > | null,
  not?: ModelTodoListConditionInput | null,
};

export type UpdateTodoListInput = {
  id: string,
  createdAt?: string | null,
};

export type DeleteTodoListInput = {
  id?: string | null,
};

export type CreateTodoMutationVariables = {
  input: CreateTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type CreateTodoMutation = {
  createTodo:  {
    __typename: "Todo",
    id: string,
    name: string,
    createdAt: string,
    completed: boolean,
    todoList:  {
      __typename: "TodoList",
      id: string,
      createdAt: string,
      todos:  {
        __typename: "ModelTodoConnection",
        nextToken: string | null,
      } | null,
    },
    userId: string,
  } | null,
};

export type UpdateTodoMutationVariables = {
  input: UpdateTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type UpdateTodoMutation = {
  updateTodo:  {
    __typename: "Todo",
    id: string,
    name: string,
    createdAt: string,
    completed: boolean,
    todoList:  {
      __typename: "TodoList",
      id: string,
      createdAt: string,
      todos:  {
        __typename: "ModelTodoConnection",
        nextToken: string | null,
      } | null,
    },
    userId: string,
  } | null,
};

export type DeleteTodoMutationVariables = {
  input: DeleteTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type DeleteTodoMutation = {
  deleteTodo:  {
    __typename: "Todo",
    id: string,
    name: string,
    createdAt: string,
    completed: boolean,
    todoList:  {
      __typename: "TodoList",
      id: string,
      createdAt: string,
      todos:  {
        __typename: "ModelTodoConnection",
        nextToken: string | null,
      } | null,
    },
    userId: string,
  } | null,
};

export type CreateTodoListMutationVariables = {
  input: CreateTodoListInput,
  condition?: ModelTodoListConditionInput | null,
};

export type CreateTodoListMutation = {
  createTodoList:  {
    __typename: "TodoList",
    id: string,
    createdAt: string,
    todos:  {
      __typename: "ModelTodoConnection",
      items:  Array< {
        __typename: "Todo",
        id: string,
        name: string,
        createdAt: string,
        completed: boolean,
        userId: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type UpdateTodoListMutationVariables = {
  input: UpdateTodoListInput,
  condition?: ModelTodoListConditionInput | null,
};

export type UpdateTodoListMutation = {
  updateTodoList:  {
    __typename: "TodoList",
    id: string,
    createdAt: string,
    todos:  {
      __typename: "ModelTodoConnection",
      items:  Array< {
        __typename: "Todo",
        id: string,
        name: string,
        createdAt: string,
        completed: boolean,
        userId: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type DeleteTodoListMutationVariables = {
  input: DeleteTodoListInput,
  condition?: ModelTodoListConditionInput | null,
};

export type DeleteTodoListMutation = {
  deleteTodoList:  {
    __typename: "TodoList",
    id: string,
    createdAt: string,
    todos:  {
      __typename: "ModelTodoConnection",
      items:  Array< {
        __typename: "Todo",
        id: string,
        name: string,
        createdAt: string,
        completed: boolean,
        userId: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};
