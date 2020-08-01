

const istate=[{
    userName:"akanksha",
    mailId:"akanksha@gmail.com",
    contect:98765321,
    city:"indore"
},
{
    userName:"nilu",
    mailId:"nilu@gmail.com",
    contect:98765321,
    city:"bhopal"
},
]

export const UserInfo=(state=istate, action)=>{
    switch(action.type){
        case "save":return[
           ...state,
            action.payload
        ]
    }
  return state;
}