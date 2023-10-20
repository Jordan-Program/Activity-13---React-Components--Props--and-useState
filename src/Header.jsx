import { useEffect } from 'react'

function Header({title,count}) 
{

  const background = count % 5 === 0 ? 'black' : 'white'
  useEffect(() => 
  {
    document.body.style.backgroundColor = background
  }, [background]);

    return (
      <>
        <header style={{paddingBottom:250}}>
            <h1 className='container-fluid display-4 bg-black text-white text-center'>
                {title}
            </h1>
        </header>
      </>
    );
  }
  
  export default Header