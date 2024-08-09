import example1 from "../../assets/images/example-1.svg";
import example2 from "../../assets/images/example-2.svg";
import example3 from "../../assets/images/example-3.svg";
import "./Learn.scss";


function Learn () {
    return (
        <>
            <h1 className="employees-title">Employees</h1>
            <div className="learn">
                <p className="learn__action">Learn </p>
                <div className="learn__container">
                    <p className="learn__textbox"><b>Generative artificial intelligence (AI)</b>, e.g. <b>Copilot</b>, <b>chatGPT</b>, is a type of AI that is trained on data and can generate novel content, such as text, images, music, and code. It continuously learns and refines its outputs based on user interactions</p>
                    <div className="learn__text--sub">
                        <p className="learn__text--sub-textbox"><b>A prompt</b> is text that requests the <b>generative AI</b> to perform a specific task.</p>
                        <p className="learn__text--sub-textbox">Simply, <b>enter a prompt.</b> And <b>get a response.</b></p>
                    </div>
                    <p className="learn__text">Examples</p>
                    <div className="learn__images">
                        <img src={example1} alt="example 1" />
                        <img src={example2} alt="example 2" />
                        <img src={example3} alt="example 3" />
                    </div>
                </div>
                <p className="learn__action">Play</p>
            </div>
            
        </>
        
        

    )
}

export default Learn;