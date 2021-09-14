import  { useEffect,useRef } from 'react'
import './hero.scss'
import { init } from 'ityped'

export default function Hero() {

    const textRef = useRef();

    useEffect(() => {
        init(textRef.current , { showCursor: false,
        backDelay:1500,
        showCursor:true,
        strings: ['Future Front End', 'Developer' ] })
    }, []);
    return (
        <div className='hero' id='hero'>
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/man.png" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi </h2>
                    <h1>Я Дмитро Мельник</h1>
                    <h3> I`m <span ref={textRef}></span></h3>

                </div>
                <a href="#portfolio">
                    <img src="assets/down.png" alt="" />
                </a>
            </div>
        </div>
    )
}
