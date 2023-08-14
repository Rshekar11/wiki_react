import React from 'react'
import { useRef,useState } from 'react'


const Wiki = () => {
    const raj=useRef("")
    const[raj2,setRaj2]=useState([])

    const chng=async(val)=>{const va=raj.current.value 
        const URL=`https://apis.ccbp.in/wiki-search?search=+${va}`
        // console.log(URL)
    
        const data=await fetch(URL)

        const data2=await data.json()
        const {search_results}=data2
        setRaj2(search_results)
        // console.log(search_results) 
    }

  return (
    <div>
        <input ref={raj} type="search" />
        <button onClick={chng}>search</button>
        {raj2.map((e)=>{return(<div>
          <a href={e.link} >
            {e.title}
            </a>
            <br />
            <a href={e.link} >
            {e.link}
            </a>
            
            <h1>{e.description}</h1>
            
        </div>)
        
        }) }
    </div>
  )
}

export default Wiki