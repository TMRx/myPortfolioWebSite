import  { useState } from 'react'
import './works.scss'

export default function Works() {
    const [currentSlider, setCurrentSlider] = useState(0);
    const data=[
        {
        id: 1,
        title: "Main Page(My example)",
        icon: "./assets/mobile.png",
        img:
         'https://drive.google.com/uc?export=view&id=1lvnZFZe-Zh1-L5fwalNoTtkudrpmru-r',
         desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      },
      {
        id: 2,
        title: "Gallery",
        icon: "./assets/writing.png",
        img:
        'https://drive.google.com/uc?export=view&id=1JifcgEG9zmW5wICMEG6Kl985iKNm_ect',
        desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      },
      {
        id: 3,
        title: "Map and another ",
        icon: "./assets/globe.png",
        img:
        'https://drive.google.com/uc?export=view&id=1rd437UkNSEbYoo3aSgjefb0Vye3NqpDX',
        desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      },
      {
        id: 4,
        title: "Messenger Form",
        icon: "./assets/writing.png",
        img:
        'https://drive.google.com/uc?export=view&id=1ENBvBCBjkScZgfDRPYDUwJMXkhsZhFij',
      },
    ];

    const handleClick = (way)=>{
        way === "left " ? setCurrentSlider(currentSlider > 0  ? currentSlider-1 : 2) :
        setCurrentSlider(currentSlider<data.length -1 ?currentSlider+1 :  0 );
    };


    return (
        <div className='works' id='works'>
            
            <div 
            className="slider"
            style={{ transform: `translateX(-${currentSlider * 100}vw)` }}
            >
                {data.map(d=>(
                <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContaner">
                                <div className="imgContainer">
                                    <img src={d.icon} alt="" />
                                </div>
                                <h2>{d.title}</h2>
                                <p>
                                    {d.desc}
                                </p>
                                <span>Projects</span>
                            </div>
                        </div>
                        <div className="right">  
                            {/* <img 
                            src="https://drive.google.com/uc?export=view&id=1lvnZFZe-Zh1-L5fwalNoTtkudrpmru-r
                            " alt="" /> */}
                            <img  src={d.img}/>
                            
                        </div>
                    </div>
                </div>
                ))}
            </div>
            <img src="assets/arrow.png" className='arrow left' alt=" "  onClick={()=>handleClick("left")}/>
            <img src="assets/arrow.png" className='arrow right' alt=" " onClick={()=>handleClick()}/>

        </div>
    );
}
