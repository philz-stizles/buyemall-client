import React from 'react'

const MainContentTitle = ({image, title, subTitle}) => {
  return (
    <div className="">
      <div className="main__text">
        <h1>{title}</h1>
        <p>{subTitle}</p>
      </div>
    </div>
  )
}

export default MainContentTitle
