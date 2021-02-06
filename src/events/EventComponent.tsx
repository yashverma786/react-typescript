import { eventNames } from "cluster";

const EventComponent: React.FC = () => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
  };
  const onDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    console.log(event.screenX);
  };
  return (
    <div>
      <input value={name} onChange={onChange} />
      <div draggable onDragStart={onDragStart}>
        Drag me
      </div>
    </div>
  );
};

export default EventComponent;
