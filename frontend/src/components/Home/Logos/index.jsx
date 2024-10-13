import "./style.scss";
import Logo1 from "../../../assets/images/logo1.png";
import Logo2 from "../../../assets/images/logo2.png";
import Logo3 from "../../../assets/images/logo3.png";
import Logo4 from "../../../assets/images/logo4.png";
import Logo5 from "../../../assets/images/logo5.png";
import Logo6 from "../../../assets/images/logo6.png";
import Logo7 from "../../../assets/images/logo7.png";
import Logo8 from "../../../assets/images/logo8.png";
function Logos(props) {
    return (
      <div className="Logos-container">
        <div><img src={Logo1} alt="" /></div>
        <div><img src={Logo2} alt="" /></div>
        <div><img src={Logo3} alt="" /></div>
        <div><img src={Logo4} alt="" /></div>
        <div><img src={Logo5} alt="" /></div>
        <div><img src={Logo6} alt="" /></div>   
        <div><img src={Logo7} alt="" /></div>
        <div><img src={Logo8} alt="" /></div>
      </div>
    )
}
export default Logos;