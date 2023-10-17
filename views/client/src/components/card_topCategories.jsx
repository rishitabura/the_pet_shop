import "../styles/style.css";
// import "../styles/common.css";


function Card_TopCat(props) {
    return (

        <div className="offer-card has-bg-image img-holder"
        style={{ "backgroundImage": "url("+props.img_url+")", "--width": "540", '--height': "374" }}>

        <p className="card-subtitle"></p>

        <h3 className="h3 card-title">
          {props.subtitle} <span className="span"></span>
        </h3>

        <a href={props.page_url} className="btn"> More</a>

      </div>
    )

}

export default Card_TopCat;


export function Card_TopCat2(props)
{
    return(
        <div className="category-card">

          <figure className="card-banner img-holder" style={{ "--width": "330", "--height": "300" }}>
            <img src={props.img_url} width="330" height="300" loading="lazy" alt="card_topcategories_img"
              className="img-cover" />
          </figure>

          <h3 className="h3">
            <a href={props.page_url} className="card-title">{props.title}</a>
          </h3>

        </div>

    )
}







