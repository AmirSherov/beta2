import "./style.scss";
import BlackShade from "../../../assets/images/BlackShade.png"
import BlurImg from '../../../assets/images/blur.png';
import Appview from "../../../assets/images/Appview.png"
import Violetfon from '../../../assets/images/violetfon.png'
function AIpart(props) {
    return (
        <>
            <div className="AIpart-container">
                <div className="AIpart-main-info">
                    <div className="AIpart-first-img">
                        <img src={BlurImg} alt="" />
                    </div>
                    <div className="AIpart-new-info">
                        <span>New</span> <span>Latest integration just arrived</span>
                    </div>
                    <div className="AIpart-text1">
                        Boost your
                        rankings with AI
                    </div>
                    <div className="AIpart-text2">
                        Elevate your site’s visibility effortlessly with AI, where smart technology meets user-friendly SEO tools.
                    </div>
                    <div className="AIpart-button">
                        <button>Start for Free</button>
                    </div>
                </div>
                <div className="AIpart2">
                        <div className="AIpart2-img1">
                            <img src={Appview} alt="" />
                        </div>
                        <div className="AIpart2-img2">
                            <img src={BlackShade} alt="" />
                        </div>
                    </div>
            </div>
        </>
    )
}
export default AIpart;