// import { CardId } from './card/CardId';
import { useState } from 'react';
import { CardInfo } from './card/CardInfo';
import { tags } from './data/data';

export const App = () => {
  
    const [ work, play, study, execise, social, selfCare ] = tags

    return (
    
    <>
      <div className="cards">

        <div className="cards-head">
          <div className='container-person'>
              <div id='container-info-person'>
                  <div className="container-info-person-intro">
                      <div className="container-info-person-show">
                          <img className="person-img" src="/img/image-jeremy.png" alt="" />
                          <div className="container-info-person-text">
                              <p>Repor for</p>
                              <div className="container-name">
                                  <h2>Jeremy</h2>
                                  <h2>Robson</h2>
                              </div>
                          </div>    
                      </div>
                  </div>
              </div>
              <div className='container-date'>
                  <div className="container-date-info">
                      <p onClick={ showDaily }>Daily</p>
                      <p onClick={ showWeekly }>Weekly</p>
                      <p onClick={ showMonthly }>Monthly</p>    
                  </div> 
              </div>
          </div> 
        </div>

        <div className="cards-info">
          <CardInfo 
            title={tittleWork} 
            time={timeWork}
            date="Last Week - 36hrs" 
            classColor="Light-red" 
            icon="/img/icon-work.svg"
          />
          <CardInfo 
            title={play.title} 
            time="10hrs" 
            date="Last Week - 8hrs" 
            classColor="Soft-blue"
            icon="/img/icon-play.svg"
          />
          <CardInfo 
            title={study.title} 
            time="4hrs" 
            date="Last Week - 7hrs" 
            classColor="Light-red-study"
            icon="/img/icon-study.svg"
          />
          <CardInfo 
            title={execise.title} 
            time="4hrs" 
            date="Last Week - 5hrs" 
            classColor="Lime-green"
            icon="/img/icon-exercise.svg"
          />
          <CardInfo 
            title={social.title} 
            time="5hrs" 
            date="Last Week - 10hrs" 
            classColor="Violet"
            icon="/img/icon-social.svg"
          />
          <CardInfo 
            title={selfCare.title}
            time="2hrs" 
            date="Last Week - 2hrs" 
            classColor="Soft-orange"
            icon="/img/icon-self-care.svg"
          />
          
        </div>
      </div>
    </>
    
  )
}
