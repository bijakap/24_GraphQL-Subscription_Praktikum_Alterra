import { gql } from "@apollo/client";

export const GetTodo = gql `
query MyQuery2 {
  todolist(order_by: {id: asc}) {
    id
    is_done
    title
  }
}
`

export const GetTodoSubcription = gql `
  subscription MySubscription {
    todolist(order_by: {id: asc}) {
      id
      is_done
      title
    }
  }
`

export const GetTodobyId = gql `
  query TodoById($id:Int!) {
    todolist(where: {id: {_eq: $id}}) {
      id
      is_done
      title
    }
  }
`

export const InsertTodo = gql `
  mutation MyMutation($object: todolist_insert_input!) {
    insert_todolist_one(object: $object) {
      id
      title
      is_done
    }
  }
`

export const UpdateTodo = gql `
	mutation MyMutation($where: todolist_bool_exp!, $_set: todolist_set_input!) {
		update_todolist(where: $where, _set: $_set) {
			returning {
				id
				is_done
				title
			}
		}
	}
`

export const DeteleTodo = gql `
	mutation MyMutation($where: todolist_bool_exp = {}) {
		delete_todolist(where: $where) {
			returning {
				id
				is_done
				title
			}
		}
	}
`