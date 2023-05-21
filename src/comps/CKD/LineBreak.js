import imge from "../../assets/797b2828-2676-4be7-9331-2f8a287be392.png" 


const PageBreak =() =>{
    return (
      <div className="break">
        <div className="line"></div>
        <div className="image">
          <img src={imge}></img>
        </div>
        <div className="secondline"></div>
      </div>
    );
}

export default PageBreak