import React from 'react'
import { FaCheck } from 'react-icons/fa'

export const Tasks = ({ title, handleChangeClick, buttonCheck, id, handleDragStart, handleDragEnter, handleDragEnd, index }) => {
  return (
    <>
      <section
        draggable
        onDragStart={(e) => handleDragStart(e, index)}
        onDragEnter={(e) => handleDragEnter(e, index)}
        onDragEnd={handleDragEnd}
        className="flex items-center gap-4 rounded-sm bg-white dark:bg-VeryDarkDesaturatedBlue border-b-[1px] dark:border-gray-600 py-4 px-6"
      >
        <section
          data-id={id}
          className="flex justify-center items-center h-[25px] w-[25px] hover:cursor-pointer border-gray-400 dark:border-gray-600 border-[0.2px] rounded-full"
          onClick={handleChangeClick}
        >
          {buttonCheck.includes(id) && (
            <FaCheck className="dark:text-white w-[10px]" />
          )}
        </section>
        <section className="text-VeryDarkGrayishBlue dark:text-white">
          {buttonCheck.includes(id) ? (<p className='line-through text-VeryDarkGrayishBlue'>{title}</p>) : (<p>{title}</p>) }
        </section>
      </section>
    </>
  )
}
