import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";


const Header = () => {
  const Navigate=useNavigate()
  const logout=()=>{
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken')
    Navigate('/')
  }
  return (
    <>

        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
            <div className="container-fluid px-5">
                <a className="navbar-brand fw-bold" href="/todo">ToDo</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <Link class="nav-link" aria-current="page" to="/todo">Home</Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" aria-current="page" to="/category">Category</Link>
                  </li>
                </ul>
                <div className="btn btn-danger btn-sm" onClick={()=>logout()}>Logout</div>
                </div>
            </div>
            </nav>
    </>
  )
}

export default Header