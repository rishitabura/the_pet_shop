import "../styles/style.css";
// import "../styles/common.css";


function Card_TopCat(props) {
    return (

        <div class="offer-card has-bg-image img-holder"
        style={{ "background-image": "url("+props.img_url+")", "--width": "540", '--height': "374" }}>

        <p class="card-subtitle"></p>

        <h3 class="h3 card-title">
          {props.subtitle} <span class="span"></span>
        </h3>

        <a href={props.page_url} class="btn"> More</a>

      </div>
    )

}

export default Card_TopCat;


export function Card_TopCat2(props)
{
    return(
        <div class="category-card">

          <figure class="card-banner img-holder" style={{ "--width": "330", "--height": "300" }}>
            <img src={props.img_url} width="330" height="300" loading="lazy" alt="card_topcategories_img"
              class="img-cover" />
          </figure>

          <h3 class="h3">
            <a href={props.page_url} class="card-title">{props.title}</a>
          </h3>

        </div>

    )
}
