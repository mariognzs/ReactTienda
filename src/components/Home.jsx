import img1 from '../assets/img/carrousel/imgC1.jpg';
import img2 from '../assets/img/carrousel/imgC2.jpg';
import img3 from '../assets/img/carrousel/imgC3.jpg';
function Home() {
  return (
    <div className="container-fluid">
      <div id="carrouselRelentless" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carrouselRelentless"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carrouselRelentless"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carrouselRelentless"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={img1}
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Madrid Rio Skate Park</h5>
              <p>
                Foto en el skate park de Madrid rio, con la camiseta Unstopable Tee.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={img2}
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Cuatro torres</h5>
              <p>
                Foto con las cuatro torre, con la camiseta Be Relentless Tee.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={img3}
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Azca</h5>
              <p>
                Foto en azca, con la camiseta Be Relentless Tee y Priceless Tee.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carrouselRelentless"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carrouselRelentless"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Home;
