import React, {useEffect, useContext, useState} from 'react';
import AuthContext from '../context/auth-context';
export default function App(){

  const {token} = useContext(AuthContext);

  const [friends, setFriends] = useState([])
  useEffect(async ()=>{
    const result = await fetch('/api/friends', {
      method: 'GET',
      headers: {
          'Authorization': `Bearer ${token}`
      }
    });
    if(result.status !== 200 && result.status !== 201){
      throw new Error('Failed!')
    }
    const resultJSON = await result.json();
    setFriends(resultJSON.friends)
  }, [])
  return (
    <>
    <h1>Home</h1>
    <ul>{friends.map((friend)=><li>{friend.name}</li>)}</ul>
    </>
  );
}
