import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { pinTask, unPinTask, archive } from "../Store/store";
import { TaskInterface } from "../Interfaces/task.interface";
//components
import AddTask from "./addTask";
import TaskList from "./taskList";

const Main = () => {
  const task = useSelector((state: any) => state);
  const dispatch = useDispatch();
  // console.log(task);

  const onPinTask = (id: string) => {
    dispatch(pinTask({ id: id }));
  };
  const onArchiveTask = (id: string) => {
    dispatch(archive({ id: id }));
  };
  const onUnPinTask = (id: string) => {
    dispatch(unPinTask({ id: id }));
  };
  return (
    <div>
      <AddTask />
      <TaskList
        tasks={task as TaskInterface[]}
        onPinTask={onPinTask}
        onArchiveTask={onArchiveTask}
        onUnPinTask={onUnPinTask}
      />
    </div>
  );
};

export default Main;