import './portfolioList.scss'

export default function PortfolioList({id,title,active,setSelect}) {
    return (
        <li 
         className={active ? "portfolioList active" : "portfolioList" }
        onClick={() =>setSelect(id)}
        >
            {title}
        </li>
    )
}
