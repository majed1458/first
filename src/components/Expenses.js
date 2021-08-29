import Card from './Card';
import './expens.css'
import ExpensItem from './ExpensItem';
function Expeneses(data){
    
    return(
        <Card className="expenses">
            {data.data.map((element) =>{
      return <ExpensItem {...element}/>
    })}
        </Card>
    )
}

export default Expeneses ;