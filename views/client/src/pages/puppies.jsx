// /* eslint-disable react/jsx-pascal-case */
// import React from "react";

// import Navbar from "../components/Navbar";
// import Footer from "../components/footer";
// import Productprops from "../components/productporp";


// import catimg from "../assets/img/gdps.webp";


// function Puppies() {
//     return (
//         <div>

//             <Navbar />
            
//             <div>
//                 <Productprops
//                     img_url={catimg}
//                     nameP="Golden Retriever Puppies"
//                     price="₹ 15,000 - ₹ 20,000"
//                 />
//             </div>



//             <Footer />
//         </div>

//     );

// }
// export default Puppies;

/* eslint-disable react/jsx-pascal-case */
import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import Productprops from "../components/productporp";

import catimg from "../assets/img/gdps.webp";

function Puppies() {
    return (
        <div>
            {/* Navbar Section */}
            <div className="navbar-section">
                <Navbar />
            </div>

            {/* Productprops Section */}
            <div className="productprops-section">
                <Productprops
                    img_url={catimg}
                    nameP="Golden Retriever Puppies"
                    shop="Royal Clain"
                    price="₹ 15,000 - ₹ 20,000"
                    avail="2"
                    size="Medium"
                    weight="30-35kg"
                    height="58-60cm"
                    color="Light Golden"
                />
            </div>

            {/* Footer Section */}
            <div className="footer-section">
                <Footer />
            </div>
        </div>
    );
}

export default Puppies;
