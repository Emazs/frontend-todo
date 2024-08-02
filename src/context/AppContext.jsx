import { createContext, useState, useEffect } from 'react'

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const initialTasks = JSON.parse(localStorage.getItem('userData')) || []

  const [inputValue, setInputValue] = useState('')
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [buttonCheck, setButtonCheck] = useState([])
  const [filter, setFilter] = useState('all')
  const [tasks, setTasks] = useState(initialTasks)

  const handleChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleChangeClick = (e) => {
    const id = parseInt(e.currentTarget.getAttribute('data-id'))
    setButtonCheck((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((circleId) => circleId !== id)
        : [...prevSelected, id]
    )

    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    )
  }

  const createTask = (e) => {
    e.preventDefault()
    if (inputValue.length === 0) return

    const newTask = {
      id: tasks.length + 1,
      title: inputValue,
      completed: false,
    }

    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks, newTask]
      localStorage.setItem('userData', JSON.stringify(updatedTasks))
      return updatedTasks
    })

    setInputValue('')
  }

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'all') return true
    if (filter === 'active') return !task.completed
    if (filter === 'completed') return task.completed
    return true
  })

  const deleteItems = () => {
    setTasks([])
    setInputValue('')
    setButtonCheck([])
    setFilter('all')
    localStorage.removeItem('userData')
  }

  const changeTheme = () => {
    document.documentElement.classList.toggle('dark')
    setIsDarkMode(document.documentElement.classList.contains('dark'))
  }

  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark')
    setIsDarkMode(isDark)
  }, [])

  return (
    <AppContext.Provider
      value={{
        tasks,
        setTasks,
        filteredTasks,
        createTask,
        inputValue,
        setInputValue,
        handleChange,
        handleChangeClick,
        buttonCheck,
        setButtonCheck,
        filter,
        setFilter,
        deleteItems,
        changeTheme,
        isDarkMode,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
