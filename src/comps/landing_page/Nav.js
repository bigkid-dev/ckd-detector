import { Link } from "react-router-dom";

const Nav =() =>{

    return (
      <div className="nav">
        <div>
          <h1>CKD</h1>
          <div>
            <div>
              <Link to="ckd">ckd</Link>
            </div>
            <div>
              <Link to="/ckd">News</Link>
            </div>
            <div>
              <Link to="/doc">Doc</Link>
            </div>
          </div>
        </div>
      </div>
    );
    
}
export default Nav