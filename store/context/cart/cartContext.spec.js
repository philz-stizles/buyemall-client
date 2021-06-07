// import React from 'react'

// const mockValue = {
//   error: null,
//   isAuthenticated: true,
//   currentUser: 'phony',
//   login: jest.fn(),
//   logout: jest.fn(),
//   getAccessToken: jest.fn()
// }

// const MockAuthContext = () => React.createContext(mockValue)

// jest.mock('../contexts/AuthContext', () => ({
//   __esModule: true,
//   namedExport: jest.fn(),
//   default: React.createContext()
// }))

// beforeAll(() => {
//   AuthContext.mockImplementation(MockAuthContext)
// })

// const customRender = (ui, { ...renderOpts } = {}) => {
//   const ProviderWrapper = ({ children }) => <AuthContext.Provider>{children}</AuthContext.Provider>
//   return render(ui, { wrapper: ProviderWrapper, ...renderOpts })
// }

// // re-export everything
// export * from '@testing-library/react'

// // override render method
// export { customRender as render }

// // <AuthContext.Provider value={mockValue}></AuthContext.Provider>
