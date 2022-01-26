import {testData} from './Components/Data/testData';

const DisplayByMth = () => {
  const data = testData;
  const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  let currMth = month[new Date().getMonth()];
  let currMthNum = new Date().getMonth();
   

        return (
          <>
            <div>Return all the dates for {currMth}</div>
            {data.map((item, idx) => {
              let calendar = item.calendar;
              <p> {item.event}</p>
              return (
                <div key={idx}>
                  {calendar.map((mth) => {
                    if (mth.mth === currMthNum) {
                      return (
                      <>
                        <div key={mth.id}>
                          {item.event}
                          {mth.day}
                          {mth.weekday}
                        </div>
                      </>   
                    );
                    }
                  })}
                </div>
              );
            })}
          </>
        );
};

export default DisplayByMth;