"use client"

import { ThemeContext } from "@/context/ThemeContext";
import React from "react";
import Stepper from "./Stepper";

const steps = [
    {
        title: "Diversity & Fairness",
        desc: "When training our AI models, we consider ethical and social implications of algorithm-based decision making. Our solutions use high-quality and fairly-represented data sets to eliminate human cognitive biases.",
    },
    {
        title: "Regulatory Compliance",
        desc: "Working with clients globally, LENS acknowledges applicable data privacy regulations, such as the GDPR, HIPAA and others, in all our solutions handling sensitive data. We also ensure our algorithms allow for the required level of decision-making transparency and explainability."
    },
    {
        title: "Code of Ethics",
        desc: "LENS believes in a just, non-violent world of equality and fairness. We prize democratic values, civil liberties and open and informed debate. When used to further these values, algorithm-based decision-making models can continue to make the world a safer, better place for everyone."
    }
]

export default function Vision() {
    const {isDark, changeTheme} = React.useContext(ThemeContext)

  return (
      <div className="w-[100%]"
      style={{ backgroundColor: isDark ? 'black' : '#fcfbf7', color: isDark ? 'white' : 'black' }}
      >
          <div
              className="mt-20 py-10 px-5 w-[100%] sm:w-[60%] lg:w-[55%] m-auto text-center"
          >
              <div className='text-2xl flex flex-col items-center'>
                  <div>OUR VISION</div>
                  <div style={{
                      width: '85px',
                      height: '5px',
                      borderRadius: '1000px',
                      background: 'var(--gr-4, linear-gradient(54deg, #0091ff 0%, #9cfeff 100%))'
                  }}>
                  </div>
              </div>

              <div className="mt-5 text-4xl lg:text-5xl">AI for Social Good</div>
              <div className="mt-5 text-gray-500 lg:text-lg">
                  Explainable AI (XAI) is an emerging subject of machine learning research that refers to strategies that try to provide transparency to typically opaque AI models and their predictions.
              </div>

              <Stepper steps={steps} />

          </div>
      </div>
    
  );
}
