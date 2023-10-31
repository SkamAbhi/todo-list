import { ITask } from "./todo";
import { Input } from "baseui/input";
import { useStyletron } from "styletron-react";
import { Button, SHAPE } from "baseui/button";

interface Props {
  task: ITask;
  completeTask(taskNameToDelete: string): void;
}
const NewTask = ({ task, completeTask }: Props) => {
  const [css] = useStyletron();

  return (
    <div
      className={css({
        display: "flex",
        gap: "10px",
        marginBottom: "8px",
      })}
    >
      <Input value={task.taskname} />

      <Button
        shape={SHAPE.square}
        size="large"
        onClick={() => {
          completeTask(task.taskname);
        }}
      >
        X
      </Button>
    </div>
  );
};

export default NewTask;
