import { useContext, useState } from 'react'
import { MdOutlineWbSunny } from 'react-icons/md'
import { IoMoonOutline } from 'react-icons/io5'
import { Tasks } from './components/Tasks.jsx'
import { OptionFilter } from './components/OptionFilter.jsx'
import { AppContext } from './context/AppContext.jsx'
import { useDragDrop } from './hooks/useDragDrop.jsx'

function App() {
  const {
    filteredTasks,
    createTask,
    inputValue,
    handleChange,
    handleChangeClick,
    buttonCheck,
    filter,
    setFilter,
    deleteItems,
    changeTheme,
    isDarkMode,
  } = useContext(AppContext)

  const { handleDragStart, handleDragEnter, handleDragEnd } = useDragDrop()

  

  return (
    <>
      <main className="min-h-screen flex justify-center bg-lightBgColor bg-lightBg desktop:bg-contain dark:bg-darkBgColor dark:bg-darkBg bg-no-repeat">
        <section className="w-[55%] mobileWidth:w-[85%]">
          <section className="flex justify-between items-center mt-20 mb-8">
            <h1 className="text-[40px] font-bold text-VeryLightGray tracking-[.25em]">
              TODO
            </h1>
            {isDarkMode ? (
              <MdOutlineWbSunny
                className="text-white w-[40px] h-[40px] cursor-pointer"
                onClick={changeTheme}
              />
            ) : (
              <IoMoonOutline
                className="text-white w-[40px] h-[40px] cursor-pointer"
                onClick={changeTheme}
              />
            )}
          </section>

          <section>
            <form onSubmit={createTask}>
              <input
                type="text"
                value={inputValue}
                onChange={handleChange}
                placeholder="Create a new data..."
                className="w-full pl-14 py-4 rounded-md dark:bg-VeryDarkDesaturatedBlue dark:text-DarkGrayshBlue outline-none"
              />
            </form>
          </section>

          <section className="mt-8">
            {filteredTasks.map((task, index) => (
              <Tasks
                key={task.id}
                title={task.title}
                handleChangeClick={handleChangeClick}
                buttonCheck={buttonCheck}
                id={task.id}
                handleDragStart={handleDragStart}
                handleDragEnter={handleDragEnter}
                handleDragEnd={handleDragEnd}
                index={index}
              />
            ))}
          </section>

          <section className="flex justify-between shadow-2xl items-center gap-4 rounded-bl-md rounded-br-md bg-white text-DarkGrayshBlue dark:bg-VeryDarkDesaturatedBlue py-3 px-6">
            <section>
              <p>{filteredTasks.length} items left</p>
            </section>

            <section className="flex gap-2 tablet:hidden">
              <OptionFilter
                option="all"
                name="All"
                filter={filter}
                setFilter={setFilter}
              />
              <OptionFilter
                option="active"
                name="Activate"
                filter={filter}
                setFilter={setFilter}
              />
              <OptionFilter
                option="completed"
                name="Completed"
                filter={filter}
                setFilter={setFilter}
              />
            </section>

            <section>
              <button onClick={deleteItems}>Clear completed</button>
            </section>
          </section>

          <section className="w-full flex justify-center gap-4 py-4 px-6 mt-3 shadow-2xl rounded-md text-DarkGrayshBlue bg-white dark:bg-VeryDarkDesaturatedBlue mobile:hidden">
            <OptionFilter
              option="all"
              name="All"
              filter={filter}
              setFilter={setFilter}
            />
            <OptionFilter
              option="active"
              name="Activate"
              filter={filter}
              setFilter={setFilter}
            />
            <OptionFilter
              option="completed"
              name="Completed"
              filter={filter}
              setFilter={setFilter}
            />
          </section>
        </section>
      </main>
    </>
  )
}

export default App
