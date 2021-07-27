import React from 'react'

interface Props{
    name:string,
    lastname:string,
    age?:number,
    email?:string,
    myfun : (value:string) => string;
}


export const User : React.FC<Props> =({lastname,name,age, myfun}) =>{
    return(
        
        <div>
          <p>  This is to return {name} {lastname} {age}</p>
          <button onClick={()=>myfun("hii")} >onclick call that fun</button>
        </div>
    )

}