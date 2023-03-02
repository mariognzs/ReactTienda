function Perfil() {
  return (
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col col-lg-6 mb-4 mb-lg-0">
          <div className="card mb-3" style={{ borderRadius: ".5rem"}}>
            <div className="row g-0">
              <div className="col-md-4 text-center text-white"
                style={{ borderRadius: ".5rem; border-bottom-left-radius: .5rem", background: "#f6d365" }}>
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp"
                  alt="Avatar" className="img-fluid my-5" style={{ width: "80px"}} />
                <h5>Mario Gonzalez</h5>
                <p>Web Designer</p>
                <i className="far fa-edit mb-5"></i>
              </div>
              <div className="col-md-8">
                <div className="card-body p-4">
                  <h6>Información</h6>
                  <hr className="mt-0 mb-4"/>
                  <div className="row pt-1">
                    <div className="col-6 mb-3">
                      <h6>Correo</h6>
                      <p className="text-muted">info@example.com</p>
                    </div>
                    <div className="col-6 mb-3">
                      <h6>Telefono</h6>
                      <p className="text-muted">123 456 789</p>
                    </div>
                  </div>
                  <h6>Proyectos</h6>
                  <hr className="mt-0 mb-4"/>
                  <div className="row pt-1">
                    <div className="col-6 mb-3">
                      <h6>Recientes</h6>
                      <p className="text-muted">Video Juego</p>
                    </div>
                    <div className="col-6 mb-3">
                      <h6>Mas valorado</h6>
                      <p className="text-muted">TFG</p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-start">
                    <a href="#!"><i className="fab fa-facebook-f fa-lg me-3"></i></a>
                    <a href="#!"><i className="fab fa-twitter fa-lg me-3"></i></a>
                    <a href="#!"><i className="fab fa-instagram fa-lg"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Perfil;
