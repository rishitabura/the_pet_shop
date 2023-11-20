import "../styles/style.css";
// import "../styles/common.css";


function Card_PetAcc(props) {
  return (

    <div className="product-card">
      <a href= {props.page_url}>
      <div className="card-banner img-holder" style={{ "--width": "360", "--height": "360" }}>
        <img src={props.img_url} width="360" height="360" loading="lazy"
          alt="petaccesory" className="img-cover default" />

        {/* <button className="card-action-btn" aria-label="add to card" title="Add To Card">
          <ion-icon name="bag-add-outline" aria-hidden="true"></ion-icon>
        </button> */}
      </div>
      </a>
      

      <div className="card-content">


        <h3 className="h3">
          <a href={props.page_url} className="card-title">{props.title}</a>
        </h3>

      </div>

    </div>
  )

}

export default Card_PetAcc;