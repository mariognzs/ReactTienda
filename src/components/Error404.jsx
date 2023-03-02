function Error404(){
return(
    <div class="d-flex align-items-center justify-content-center vh-100">
    <div class="text-center">
        <h1 class="display-1 fw-bold">404</h1>
        <p class="fs-3"> <span class="text-danger">Opps!</span> Pagina no encontrada.</p>
        <p class="lead">
            La pagina a la que estas intentando acceder no existe.
          </p>
        <a href="/" class="btn btn-primary">Go Home</a>
    </div>
</div>
)
}

export default Error404;
