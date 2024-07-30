/* eslint-disable @typescript-eslint/no-explicit-any */
import { atom } from "recoil";

interface People {
    name : string
    age : number
}

export const PeopleInfo = atom<People[]>({
    key : "PeopleInfo",
    default : [],
    effects : [
        ({onSet}) => {
            onSet(newPeople => {
                console.log(newPeople[newPeople.length - 1])
            })
        }
    ]
})