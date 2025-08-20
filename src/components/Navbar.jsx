import { Link, NavLink } from 'react-router-dom'

export default function Navbar({ routes = [] }) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top shadow-sm">
      <div className="container">
        <Link className="navbar-brand fw-semibold" to="/">MySite</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample" aria-controls="navbarsExample" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarsExample">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {routes.map(r => (
              <li className="nav-item" key={r.path}>
                <NavLink className={({isActive}) => "nav-link" + (isActive ? " active fw-semibold" : "")} to={r.path}>{r.label}</NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}
