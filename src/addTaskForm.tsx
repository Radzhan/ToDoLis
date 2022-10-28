import React from 'react';

interface AddTaskFormProps extends React.PropsWithChildren{
  task:string;
  dealite: React.MouseEventHandler;
}

const AddTaskForm: React.FC<AddTaskFormProps> = (props) => {
  return (
    <div className='taskForm'>
      <span>{props.task}</span>
      <button className='addBtn' onClick={props.dealite}>dealite</button>
    </div>
  );
};

export default AddTaskForm;