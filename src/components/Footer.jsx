import React, {useState, useEffect} from 'react'

const Footer = () => {
    const [date, setDate] = useState();
    const getYear = () => setDate(new Date().getFullYear())

    useEffect(() =>{
        getYear();
    }, [])

    return (
        <div className="text-center p-10 mt-10 border-t dark:border-gray-700 border-gray-200">
           <h1>&copy; {date} Googool Inc.</h1>
           <p>Carlston G.</p>
        </div>
    )
}

export default Footer
