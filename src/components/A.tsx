    import React, { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { PeopleInfo } from '../store/people'

function A() {
    const [peopleInfo, setPeopleInfo] = useRecoilState(PeopleInfo);

    useEffect(() =>{
        setPeopleInfo([{name: "John", age: 25}, {name: "Jane", age: 22}])
    },[])

  return (
    <div>{peopleInfo.map(el => <div>{el.name} : {el.age}살</div>)}</div>
  )
}

export default A