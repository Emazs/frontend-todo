import { useContext, useRef } from 'react'
import { AppContext } from '../context/AppContext.jsx'

export const useDragDrop = () => {
  const { tasks, setTasks } = useContext(AppContext);
  const dragItem = useRef();
  const dragOverItem = useRef();

  const handleDragStart = (e, position) => {
    dragItem.current = position;
  };

  const handleDragEnter = (e, position) => {
    e.preventDefault();
    dragOverItem.current = position;
  };

  const handleDragEnd = (e) => {
    e.preventDefault();
    const copyTasks = [...tasks];
    const dragItemContent = copyTasks[dragItem.current];
    copyTasks.splice(dragItem.current, 1);
    copyTasks.splice(dragOverItem.current, 0, dragItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    setTasks(copyTasks);
  };

  return { handleDragStart, handleDragEnter, handleDragEnd };
};
