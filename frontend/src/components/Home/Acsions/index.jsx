import "./style.scss";
import img2 from "../../../assets/images/Visual.png";
import img1 from "../../../assets/images/Visual(1).png";
import img3 from "../../../assets/images/Visual(2).png";
function Actions(props) {
    return (
        <>
            <div className="Acsions-Container">
                <div className="part1">
                    <div className="leftSide">
                        <img src={img1} alt="" />
                        <div className="text1">
                            SEO goal setting
                        </div>
                        <div className="text2">
                            Helps you set and achieve SEO goals with guided assistance.
                        </div>
                    </div>
                    <div className="rightSide">
                        <img src={img2} alt="" />
                        <div className="text1">
                            User-friendly dashboard
                        </div>
                        <div className="text2">
                            Perform complex SEO audits and optimizations with a single click.                        </div>
                    </div>
                </div>
                <div className="part2">
                    <div className="leftSide">
                        <img src={img2} alt="" />
                        <div className="text1">
                            Visual reports
                        </div>
                        <div className="text2">
                            Visual insights into your site’s performance.
                        </div>
                    </div>
                    <div className="rightSide">
                        <img src={img3} alt="" />
                        <div className="text1">
                            Smart Keyword Generator
                        </div>
                        <div className="text2">
                            Automatic suggestions and the best keywords to target.                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Actions