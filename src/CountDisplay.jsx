import './main.css'

function CountDisplay({count}) 
{
    return (
      <>
        <h3 className="current_count">Current count</h3>

        <h2 className="number_count">
        {count}
        </h2>
        
      </>
    )
  }
  
  export default CountDisplay