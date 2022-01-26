import React, {useState, useRef} from 'react';
import DisplayByMth from './DisplayByMth';
import './styles.css';
import { BsFillArrowDownCircleFill as FillAD} from "react-icons/bs";
//import DisplayByMth from './Components/DisplayByMth';

const Accordion = () => {
    const[isOpenPanel1, setIsOpenPanel1] = useState(false);
    const[isOpenPanel2, setIsOpenPanel2] = useState(false);
    const[isOpenPanel3, setIsOpenPanel3] = useState(true);
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    let currMth = month[new Date().getMonth()];
    let currMthNum = new Date().getMonth()+1;


    const panel1 = useRef();
    const panel2 = useRef();
    const panel3 = useRef();


    const toggle = (panelid) => {

           if(panelid === panel1){
              setIsOpenPanel1(!isOpenPanel1)
           }else if(panelid === panel2){
               setIsOpenPanel2(!isOpenPanel2)
           }else
           setIsOpenPanel3(!isOpenPanel3);
    }

  return (
    <>
      <div className="accordion" id="stayOpen">
        <div className="accordion-panel" id="panel1" ref={panel1}>
          <div className="accordion-header" onClick={() => toggle(panel1)}>
            <p> Prayer and Poojai times</p>
            <span><FillAD className={isOpenPanel1 ? "icon open" : "icon"} /></span>
          </div>
          <div id="collapse1" className={isOpenPanel1 ? "accordion-collapse show" : "accordion-collapse" }>
            <div className="accordion-body">
              Regular Guru Raghavendra Swamy poojas are conducted on a weekly basis at our Ashram on Saturdays starting at 6:00pm.
Please take note that no prayers will be conducted on Ekadasi Saturdays.
            </div>
          </div>
        </div>
        <div className="accordion-panel" id="panel2" ref={panel2}>
          <div className="accordion-header" onClick={() => toggle(panel2)}>
            <p> Our Location</p>
             <span><FillAD className={isOpenPanel2 ? "icon open" : "icon"} /></span>
          </div>
          <div id="collapse1" className={isOpenPanel2 ? "accordion-collapse show" : "accordion-collapse"}>
            <div className="accordion-body">
              <strong>This is the first item's accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classNamees that we use to style each element. These classNamees control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-panel" id="panel3" ref={panel3}>
          <div className="accordion-header" onClick={() => toggle(panel3)}>
            <p> Important Dates for {currMth} 2022</p>
             <span><FillAD className={isOpenPanel3 ? "icon open" : "icon"} /></span>
          </div>
          <div id="collapse3" className={isOpenPanel3 ? "accordion-collapse show" : "accordion-collapse"}>
            <div className="accordion-body">
               <DisplayByMth currMth={currMth} currMthNum={currMthNum}/>
               <p>Dates for the full year is available in the Menu</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Accordion;
