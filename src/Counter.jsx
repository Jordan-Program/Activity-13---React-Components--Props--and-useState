import CountDisplay from "./CountDisplay";
import ReactiveButton from 'reactive-button';

function Counter({count,countStatus}) 
{
  
 
    return (
      <>
        <section className=" card container-fluid text-center" >
            <div className=" container-fluid pt-sm-3 ">
                <ReactiveButton
                    rounded 
                    className=' me-2 '
                    idleText={'Increment'}
                    size="large"
                    color="dark" 
                    onClick={() => {countStatus(count + 1)}} 
                />

                <ReactiveButton 
                    rounded 
                    className=' ms-2 '
                    idleText={'Decrement'}
                    size="large"
                    color="light" 
                    onClick={() => {countStatus(count - 1)}} 
                    disabled={count <= 0}
                />

                <CountDisplay count={count} />
            </div>
        </section>
        
      </>
    )
  }
  
  export default Counter