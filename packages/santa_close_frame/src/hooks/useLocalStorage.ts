import {useState} from 'react'

const isClient = typeof window !== 'undefined'

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (!isClient) return initialValue

    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.error(error)
      return initialValue
    }
  })

  const setValue = (value: T | ((value: T) => T)) => {
    const valueToStore = value instanceof Function ? value(storedValue) : value
    setStoredValue(valueToStore)

    if (isClient) {
      window.localStorage.setItem(key, JSON.stringify(valueToStore))
    }
  }

  return [storedValue, setValue] as const
}
