import { Step1, Step2 } from "./Step";
import { HiMiniUserGroup } from "react-icons/hi2";
import { SiLoop } from "react-icons/si";
import { FaBalanceScale } from "react-icons/fa";

const images = [<HiMiniUserGroup size={25}/>, <SiLoop size={25}/>, <FaBalanceScale size={25}/>]
const Stepper = ({ steps }) => {
    return (
        <div className="flex flex-col lg:w-[70%] m-auto">
      {steps.map((step, index) => (
        <div
          key={index}
          className={`flex`}
        >
          {index % 2 === 1 ? (
            <>
              <Step1 step={step.desc} title={step.title} index={index} image={images[index]}/>
              
            </>
          ) : (
            <>
              <Step2 step={step.desc} title={step.title} index={index} image={images[index]}/>
            </>
          )}
        </div>
      ))}
    </div>
    );
  };
  
  export default Stepper;
  