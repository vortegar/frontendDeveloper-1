import React from 'react'

export const CardInfo = ({ title, time, date, classColor, icon }) => {
  return (
    <div className='container'>
        <div id='container-color'className={classColor}>
          <img src={icon} alt="" />
        </div>
        <div className='container-info'>
          <div className='activity'>

            <div className='info-title-time'>
              <h4 className='info-tittle'>{title}</h4>
              <img src="/img/icon-ellipsis.svg" alt="" className='info-spread'/>
            </div>
            <div className='info-time-elapse'>
              <p className='info-time'>{time}</p>  
              <p className='info-date'>{date}</p>
            </div>

          </div>
        </div>
    </div>
  )
}
