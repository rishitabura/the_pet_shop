
import "../styles/home.css";
import "../styles/common.css";
import bg from "../assets/img/bg2.jpeg";
import Navbar from "../components/Navbar";


function Home() {
  return (
<html>

<head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>The Pet Shop</title>
    {/* <link rel="stylesheet" href="css/style.css"/>
    <link rel="stylesheet" href="css/common.css"/>
    <link rel="stylesheet" href="css/home.css"/> */}
    <link href="https://use.fontawesome.com/releases/v5.11.2/css/all.css" rel="stylesheet" />
    <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap"
        rel="stylesheet" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
</head>

<body>
    
    <header>
       <Navbar/>
        
    </header>
    
     <div class="container">
        <h1 style={{color: 'black','padding-top': '100px'}}>
            Add images and content here
        </h1>
    </div> 
    <div class="image-background">
        <div class="image-container">
            <img src={bg} alt="Image" style={{width: '100%'}}/>
        </div>
    </div>



   


</body>

</html>
  );
}

export default Home;
