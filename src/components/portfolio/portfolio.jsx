import { useEffect, useState } from 'react';
import React from 'react'
import PortfolioList from '../portfolioList/PortfolioList';
import './portfolio.scss'
import {maketallPortfolio,
        webPortfolio,
        designPortfolio,mobilePortfolio,contentPortfolio} from "../../portfolio"
import { DnsTwoTone } from '@material-ui/icons';

export default function Portfolio() {
    const [select,setSelect] = useState("maketall") ;
    const [data,setData] = useState([]);

    const list = [
        {
            id:"maketall",
            title:"Architecture",
        },
        {
            id:"web",
            title:"Web(E-commerse)",
        },
        {
            id:"design",
            title:"Design",
        },
        {
            id:"mobile",
            title:"Mobile",
        },
        {
            id:"content",
            title:"Content"

        }

    ];

    useEffect(()=>{
        switch(select){
            case"maketall":
                setData(maketallPortfolio);
                break;
            case"web":
                setData(webPortfolio);
                break; 
            case"design":
                setData(designPortfolio);
                break;
            case"mobile":
                setData(mobilePortfolio);
                break;
            case"content":
                setData(contentPortfolio);
                break;
                default:
                    setData(maketallPortfolio);         
        }

    },[select])

    return (
        <div className='portfolio' id='portfolio'>
            <h1>Design that I`d like to develop in the future </h1>
            <ul>
                {list.map((item)=>(
                    <PortfolioList
                    title={item.title}
                    active={select === item.id} 
                    setSelect={setSelect}
                    id={item.id}
                    />
                ))}
                {/* <li className='active'>Вибране</li>
                <li>Web</li>
                <li>Mobile</li>
                <li>Дизайн</li>
                <li>Бренд</li> */}
            </ul>
            <div className="container">
                {data.map(d=>(

              
                <div className="item">
                    <img 
                    src={d.img} alt="" />
                    <h3>{d.title}</h3>
                </div>
             ))}
            </div>
        
        </div>
    )
}
