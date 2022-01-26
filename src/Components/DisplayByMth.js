import {testData} from './Data/testData';
import './styles.css'

const DisplayByMth = ({currMth, currMthNum}) => {
  const data = testData;

   

        return (

         <div className="mthlycontainer">
           {data.map((item, idx) => {
              let calendar = item.calendar;
           
              return (
                <div key={idx} className="eventsbymth">
                     <div className="mthlyevent">{item.event}</div>  
                  {calendar.map((mth) => {
                    if (mth.mth === currMthNum) {
                      return (
                      <>
                        <div key={mth.id} className="mthlyitems">
                          {/* {item.event} */}
                          {mth.day}&nbsp;&nbsp;
                          {mth.weekday}
                        </div>
                      </>   
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