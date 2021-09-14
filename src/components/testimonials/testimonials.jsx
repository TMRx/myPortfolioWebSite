import React from 'react'
import './testimonials.scss'

export default function Testimonials() {
    const data = [
        {
          id: 1,
          name: "Bill Gates:",
          title: "Microsoft",
          img:
            "https://drive.google.com/uc?export=view&id=1HbkIWEe3nBizU3yKqk-e4ayW4vLfpsvb",
          icon: "assets/computer.png",
          desc:
            "Don't compare yourself with anyone in this world… if you do so, you are insulting yourself... ",
        },
        {
          id: 2,
          name: "Steve Jobs:",
          title: "Apple",
          img:
          "https://drive.google.com/uc?export=view&id=1bkJZjIPkiMZyULRWzr54a2DU-tQ1uRFf",
          icon: "assets/mac.png",
          desc:
            "Quality is more important than quantity. One home run is much better than two doubles. ",
          featured: true,
        },
        {
          id: 3,
          name: "Mark Zuckerberg:",
          title: "Facebook",
          img:
          "https://drive.google.com/uc?export=view&id=1pCv099Zud7DuFAktLJWXXj_wroAE7-Hl",
          icon: "assets/facebook.png",
          desc:
            "The question I ask myself like almost every day is, 'Am I doing the most important thing I could be doing?' ... ",
        },
      ];
    return (
        <div className='testimonials' id ='testimonials'>
            <h1>Motivation</h1>
            <div className="container">
                {data.map((d)=>(
                    
               
                <div className={d.featured ? "card featured" : "card"}>
                    <div className="top">
                    <img src="assets/right-arrow.png" className='left' alt="" />
                    <img  className='user'src={d.img} alt="" />
                    <img className='right'src={d.icon} alt="" />
                    </div>
                    <div className="center">
                        {d.desc}
                    </div>
                    <div className="bottom">
                        <h3>{d.name}</h3>
                        <h4>{d.title}</h4>
                    </div>
                </div> ))}
            </div>
            
        </div>
    )
}
