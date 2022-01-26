import {testData} from '../Data/testData';
import './styles.css'

const DisplayByMth = ({currMth, currMthNum}) => {
  const data = testData;

   

        return (

         <div className="mthlycontainer">
            {data.map((item, idx) => {
              let calendar = item.calendar;
           
              return (
                <div className="eventsbymth">
                     <div className="mthlyevent" key={idx} >{item.event}</div>  
                  {calendar.map((mth) => {
                    if (mth.mth === currMthNum) {
                      return (
                      <div className="mthly-items-container">
                        <div key={mth.id} className="mthlyitems">
                          {/* {item.event} */}
                          {mth.day}&nbsp;&nbsp;
                          {mth.weekday}
                        </div>
                      </div>   
                    );
                    }
                  })}
                </div>
              );
            })}
         </div>
                   
        );
};

export default DisplayByMth;