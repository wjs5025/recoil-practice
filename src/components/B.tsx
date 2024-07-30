import React from 'react'
import { PeopleInfo } from '../store/people';
import { useRecoilState } from 'recoil';

function B() {
    const peopleInfo =  useRecoilState(PeopleInfo);

  return (
    <div>
        <hr></hr>
        {peopleInfo[0].map(el => <div>{el.name} : {el.age}살</div>)}
    
    <button onClick={() =>{peopleInfo[1](prev => [...prev,{name:"Jeon", age:25}])}}>추가</button></div>
  )
}

export default B