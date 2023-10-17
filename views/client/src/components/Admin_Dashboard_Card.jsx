import "../styles/style.css";
import "../styles/admin.css";
// import "../styles/common.css";


function Admin_Dashboard_Card(props) {
    return (

        <div class="admin-dashcard">
        <h3 class="admin-dashcard-title">
          {props.title} <span class="span"></span>
        </h3>

        <h3 class="admin-dashcard-subtitle">
          {props.subtitle} <span class="span"></span>
        </h3>

      </div>
    )

}

export default Admin_Dashboard_Card;







