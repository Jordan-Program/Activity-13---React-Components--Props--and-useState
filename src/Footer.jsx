function Footer({copyright}) {

    return (
      <>
        <footer className="text-center text-white bg-black mt-auto"> 
            <div className="p-3 text-center">
              <i>{copyright}</i>
            </div>
        </footer>
           
      </>
    )
  }
  
  export default Footer