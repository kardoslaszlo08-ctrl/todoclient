import { Label } from '@heroui/react'
import { Button } from '@heroui/react'
import { InputGroup } from '@heroui/react'
import { TextField } from '@heroui/react'
import React from 'react'
import { useState } from 'react'

export const Login = ({setIsLoggedIn}) => {
    const [username, setUsername] = useState('')
    const [pw, setPw] = useState('')
    const [msg, setMsg] = useState('')
     //ideiglesen
        const myUsername='Lacy'
        const Mypw=123
    const handleLogin = ()=>{
        console.log(username,pw)
        if(username==myUsername&& pw==Mypw) {setIsLoggedIn(true)
           
        }else setMsg('Helytelen felhasználónév jelszó páros!')
    }
    return (
        <div className='max-w-md m-auto p-4 bg-indigo-400 rounded-2xl'>
            <TextField fullWidth >
            <Label>Felhasználónév</Label>
            <InputGroup fullWidth>
               
                <InputGroup.Input value={username} onChange={(e)=>setUsername(e.target.value)}/>
            </InputGroup>
        </TextField>
            <TextField fullWidth name="password">
                <Label>jelszó</Label>
                <InputGroup fullWidth>
                    <InputGroup.Input placeholder="Enter password" type="password" 
                    value={pw} onChange={(e)=>setPw(e.target.value)}/>
                 
                </InputGroup>
            </TextField>
            <Button className='m-4 bg-indigo-950' onClick={()=>handleLogin()}>Belépés</Button>
            <div>{msg}</div>
            </div>
    )
}

