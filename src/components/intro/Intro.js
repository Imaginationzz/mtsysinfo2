import "./intro.css"

import people from "../../img/people.png"
import people1 from "../../img/people1.png"
import people2 from "../../img/people2.png"
import people3 from "../../img/people3.jpeg"




export default function intro() {
    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Welcome To</h2>
                    <h1 className="i-name">MtSySinfo</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">test1</div>
                            <div className="i-title-item">test2</div>
                            <div className="i-title-item">test3</div>
                            <div className="i-title-item">test4</div>
                            <div className="i-title-item">test5</div>
                        </div>
                    </div>
                    <div className="i-desc">
                        What is Lorem Ipsum?
                        Lorem Ipsum is simply dummy text of sutnte it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </div>
                </div>
            </div>
            <div className="i-right">
                <div className="i-bg"></div>
                <img src={people} alt="" className="i-img" />

            </div>

        </div>
    )
}
