import Card from './Card';
import './expens.css'
import ExpensDate from './ExpensDate';
function ExpensItem(data){
    
    return(
        <Card className="expens_item">
            <ExpensDate date={data.date} />
            <div className="expens_item__description">
                <h2>{data.nom}</h2>
                <div className="expens_item__price">{data.prix} dinar</div>
            </div>
        </Card>
    )
}

export default ExpensItem;