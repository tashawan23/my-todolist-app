# MyToDo

### Scope of project
This todo list aims to allow users to keep track of tasks that need to be completed. Users can categorise these tasks based on different categories in each list or by date. Users will be able to create, edit and delete tasks and lists.

### Features
1. Lists
  a. Create list of tasks
  b. Edit list title
  d. Delete entire list
     
2. Tasks
  a. Create new task
  b. Categorise task based on lists
  c. Categorise tasks based on date to be completed
  d. Edit task name or task date
  e. Delete task

3. Categorising by date:
  a. Users can see tasks that have to be completed ‘today’
  b. Users can see tasks that have to be completed ‘weekly’, categorised by date


### Problems encountered:
1. Categorising tasks based on date to be completed in database
2. Using react hooks and context to update the state of tasks and lists after each edit or deletion 
4. Allow scrolling for overflow in sidebar menu

### Front End:
1. React
1. React Hooks
1. React Context

### Back End:
1. Ruby on rails
1. Database: SQLite

### Task:
| Field         | Type          | Remark                             |
| ------------- |:-------------:| ----------------------------------:|
| Name          | String        | Name of the task                   |
| Completed     | Boolean       | To mark whether a task is completed|
| Date          | Date          | Date to be completed               |
| List          | belongs_to    | List which task belongs to         |

### List:
| Field         | Type          | Remark                             |
| ------------- |:-------------:| ----------------------------------:|
| Title         | String        | Title of list of tasks             |
| Slug          | String        | Parameter to identify list         |



### To be done by next submission:
1. Allow editing of tasks - name and date
2. Create the today page - tasks that need to be completed on that day
3. Create the weekly page - tasks that need to be completed in that week
4. Categorise tasks based on date
5. Create a homepage
