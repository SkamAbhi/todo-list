import React, { useState } from "react";
import { useStyletron } from "baseui";
import { Button } from "baseui/button";
import { Input } from "baseui/input";
import NewTask from "./NewTask";

export interface ITask {
  taskname: string;
}

const ToDoList = () => {
  const [task, setTask] = useState<string>("");
  const [todoList, setTodoList] = useState<ITask[]>([]);
  const [editTask, setEditTask] = useState<ITask | null>(null);

  const addTask = (): void => {
    if (editTask) {
      setTodoList(
        todoList.map((task) => {
          if (task === editTask) {
            return { ...task, taskname: task.taskname };
          }
          return task;
        })
      );
      setEditTask(null);
    } else {
      const newTask = { taskname: task };
      setTodoList([...todoList, newTask]);
    }
    setTask("");
  };
  const completeTask = (taskNameToDelete: string): void => {
    setTodoList(
      todoList.filter((task) => {
        if (task.taskname === taskNameToDelete) {
          setEditTask(null);
          return false;
        }
        return true;
      })
    );
  };
  const [css] = useStyletron();

  return (
    <div>
      <div
        className={css({
          display: "flex",
          flexDirection: "column",
          height: "100%",
          width: "100%",
          justifyContent: "center",
          paddingTop: "10px",
          alignItems: "center",
        })}
      >
        <h1>Enter Tasks </h1>

        <div
          className={css({
            display: "flex",
            justifyContent: "center",
            width: "60%",
          })}
        >
          <Input
            value={task}
            onChange={(event) => setTask(event.currentTarget.value)}
            placeholder="Enter Tasks"
          />
          <Button size="large" onClick={addTask}>
            +
          </Button>
        </div>
      </div>

      <div
        className={css({
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "3rem",
        })}
      >
        {todoList.map((task: ITask, key: number) => {
          return <NewTask key={key} task={task} completeTask={completeTask} />;
        })}
      </div>
    </div>
  );
};

export default ToDoList;
