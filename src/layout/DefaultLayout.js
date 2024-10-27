import React from 'react'
import { AppContent, AppSidebar, AppFooter, AppHeader } from '../components/index'
import { Link } from 'react-router-dom'; 
const DefaultLayout = () => {
  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100">
        <AppHeader />
     {/* Aquí agrego el botón de la pagina nueva*/}
        <div style={{ padding: '24px' }}>
            <Link to="/PaginaNueva">
              <button className="btn btn-primary">Nueva Página</button>
            </Link>
        </div>
        
        <div className="body flex-grow-1">
          <AppContent />
        </div>
        <AppFooter />
      </div>
    </div>
  )
}

export default DefaultLayout;
