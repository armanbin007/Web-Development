import React, {useEffect} from 'react'

const Navbar = ({color}) => {
    // Case 1: Run on every render
    useEffect(() => {
        alert("I am the case 1")
    })

    // Case 2: Run on first render
    useEffect(() => {
        alert("Hey welcome to the site")
    }, []) // When component is mounted/loaded nothing chnaged

    // It runs twice because currently its on strict mode where code runs twice to check if everything is alright! (main.jsx)


    // Case 3: Run only when certain values change
    useEffect(() => {
        alert("Color was changed")
    }, [color])


    // Example of cleanup function
    useEffect(() => {
        alert("1st render of app.jsx")

        return () => {
            alert("Component unmounted")
        }
    }, [])
    
  return (
    <div>
      I am a navbar of {color} hehe....
    </div>
  )
}

export default Navbar
