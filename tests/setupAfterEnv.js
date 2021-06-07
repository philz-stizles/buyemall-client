const Enzyme = require('enzyme')
// const EnzymeAdapter = require('enzyme-adapter-react-16')
const EnzymeAdapter = require('@wojtekmaj/enzyme-adapter-react-17')

Enzyme.configure({
  adapter: new EnzymeAdapter()
})
