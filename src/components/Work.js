import "./Workcardstyle.css"

import React from 'react'
import Workcard from "./Workcard"
import Workcarddata from "./Workcarddata"

const Work = () => {
  return (
    <div className="work-c">
      <h1 className="project-h">Projects</h1>
      <div className="project-c">
        {Workcarddata.map((val, ind) => {
            return(
                <Workcard key ={ind}
                imgsrc={val.imgsrc}
                title={val.title}
                text={val.text}

                ></Workcard>
            )
        })}
      </div>
    </div>
  )
}

export default Work
