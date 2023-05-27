import {useEffect, useState} from 'react'
import './App.css'

function App() {
    const [seconds, setSeconds] = useState(10);

    useEffect(() => {
        const interval = setInterval(() => {
            if (seconds > 0){
                setSeconds(seconds => seconds - 1);
            }
        }, 1000);
        return () => clearInterval(interval)
    }, []);





  return (
    <>


        {
            seconds > 0 && <>
                <h1>{seconds}</h1>
            </>
        }

        {
            seconds <= 0 &&<>

                <h2>Times up</h2>
            </>
        }
    </>
  )
}

export default App
