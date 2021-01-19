# MyToDo 

Tasha Marion Wan A0204986U

### Scope of project
This todo list aims to allow users to keep track of tasks that need to be completed. Users can categorise these tasks based on different categories in each list or by date. Users will be able to create, edit and delete tasks and lists.

### Features
1. Create List of tasks
* Create a list to hold tasks for a specified event or category in the sidebar menu
* List title can be edited and lists can be deleted from the icon next to each list

2. Create tasks
* Quick add tasks under each lists 
* Set task date for each task to mark date to be completed
* Create tasks through icon in navbar by selecting task list and task date
* Task name and date can be edited from the icon next to each task

3. Complete tasks
* Mark task as completed by checking checkbox next to each task
* Tasks that have yet to be completed will be shown in the task inbox

4. Task date
* Set task date for each task to mark date to be completed
* Tasks which need to be completed on a certain day will be shown in the today tasks inbox
* Task in the task inbox are sorted according to their date to be completed 
* Tasks in the task inbox which are overdue are marked with their dates in red

5. Task reminder
* Bell in navbar reminds users of starred tasks and their date to be completed for easy access 
* Tasks can be starred by colouring star next to each task 


### Front End:
1. React
1. React Hooks
1. React Context

### Back End:
1. Ruby on rails
1. Database: PostgreSQL

### Task:
| Field         | Type          | Remark                             |
| ------------- |:-------------:| ----------------------------------:|
| Name          | String        | Name of the task                   |
| Completed     | Boolean       | To mark whether a task is completed|
| Date          | Date          | Date to be completed               |
| List          | belongs_to    | List which task belongs to         |
| Star          | boolean       | To mark an important task          |

### List:
| Field         | Type          | Remark                             |
| ------------- |:-------------:| ----------------------------------:|
| Title         | String        | Title of list of tasks             |
| Slug          | String        | Parameter to identify list         |

Deployed on Heroku:  https://my-special-todolist.herokuapp.com/



