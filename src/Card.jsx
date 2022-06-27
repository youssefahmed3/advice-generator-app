import { useState } from 'react'
import './styles/style.scss'


function Card() {

    const [advice, setAdvice] = useState(
        {"slip": { "id": 86, "advice": "Never write in an email to someone, something which you wouldn't say to that person's face."}}
    );

    function HandleApi () {
        fetch('https://api.adviceslip.com/advice')
        .then((response) => response.json())
        .then((json) => {
            console.log(json)
            setAdvice(json)
        }    
        )
    }


    return (
        <div className='card'>
            <div className='advice-number'>ADVICE #{advice.slip.id}</div>
            <div className='advice'>&#8220;{advice.slip.advice}&#8221;</div>
            <div className='divider'>
                {/* <img src={process.env.PUBLIC_URL+"images/pattern-divider-desktop.svg"} alt="" /> */}
            </div>


            <div className='button' onClick={HandleApi}>
                <img src={process.env.PUBLIC_URL+"images/icon-dice.svg"} alt="" />
            </div>
            
        </div>
    )   

}



export default Card;