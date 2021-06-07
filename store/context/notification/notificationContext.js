import { createContext } from 'react'

const NotificationContext = createContext({
  notification: null,
  showNotification: () => {},
  removeNotification: () => {}
})

export default NotificationContext
