import "../styles/style.css";
// import "../styles/common.css";


function Card_PetAcc(props) {
  return (

    <div class="product-card">

      <div class="card-banner img-holder" style={{ "--width": "360", "--height": "360" }}>
        <img src={props.img_url} width="360" height="360" loading="lazy"
          alt="petaccesory" class="img-cover default" />

        <button class="card-action-btn" aria-label="add to card" title="Add To Card">
          <ion-icon name="bag-add-outline" aria-hidden="true"></ion-icon>
        </button>
      </div>

      <div class="card-content">


        <h3 class="h3">
          <a href={props.page_url} class="card-title">{props.title}</a>
        </h3>

      </div>

    </div>
  )

}

export default Card_PetAcc;