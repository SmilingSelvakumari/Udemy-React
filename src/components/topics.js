//topic&Popular

import C1 from"../assets/images/C1.jpg"
import C2 from"../assets/images/C2.jpg"
import C3 from"../assets/images/C3.jpg"
import C4 from"../assets/images/C4.jpg"
import C5 from"../assets/images/C5.webp"
import C6 from"../assets/images/C6.webp"
import C7 from"../assets/images/C7.avif"
import C8 from"../assets/images/C8.avif"

function Topics()
{
    return( 
    
    
        <div className="topics">
            <h1 className="topics__title">Topics Recommended for you</h1>
            <div className="topics__container">
                <p>Html</p>
                <p>Css</p>
                <p>Javascript</p>
                <p>Node Js</p>
                <p>Mongo DB</p>
                <p>React Js</p>
                <p>Linux</p>
                <p>GitHub</p>
                <p>Redux</p>
            </div>
            
            <div className="popular">
                <h1 className="popular__title">Most Popular</h1>
                <p className="popular__subtitle">Pick the best Fit</p>
                <div className="popular-container">
                    <div className="course-card">
                        <img src={C1}></img>
                        <h3>Python Visualisation Master Class</h3>
                        <p>Colt steele</p>
                        <p>3.8⭐⭐⭐</p>
                        <p>₹499 <del>₹999</del></p>
    
                    </div>
                    <div className="course-card">
                        <img src={C2}></img>
                        <h3>The Web Developer Boot Camp</h3>
                        <p>Angela</p>
                        <p>4.7⭐⭐⭐⭐</p>
                        <p>₹799 <del>₹2999</del></p>
    
                    </div>
                    <div className="course-card">
                        <img src={C3}></img>
                        <h3>2024 UI/UX Designer Course Beginner to Pro</h3>
                        <p>Stephane</p>
                        <p>4.9⭐⭐⭐⭐</p>
                        <p>₹599 <del>₹1999</del></p>
    
                    </div>
                    <div className="course-card">
                        <img src={C4}></img>
                        <h3>2024 Power Start in Project Management</h3>
                        <p>Colt steele</p>
                        <p>4.9⭐⭐⭐⭐</p>
                        <p>₹1499 <del>₹3999</del></p>
    
                    </div>
    
                    <div className="course-card">
                        <img src={C5}></img>
                        <h3>PHP Master Class</h3>
                        <p>Colt steele</p>
                        <p>3.8⭐⭐⭐</p>
                        <p>₹499 <del>₹999</del></p>
    
                    </div>
                    <div className="course-card">
                        <img src={C6}></img>
                        <h3>Back End Developer</h3>
                        <p>Angela</p>
                        <p>4.7⭐⭐⭐⭐</p>
                        <p>₹799 <del>₹2999</del></p>
    
                    </div>
                    <div className="course-card">
                        <img src={C7}></img>
                        <h3>2024 Graphical Designer Course Beginner to Pro</h3>
                        <p>Stephane</p>
                        <p>4.9⭐⭐⭐⭐</p>
                        <p>₹899 <del>₹2999</del></p>
    
                    </div>
                    <div className="course-card">
                        <img src={C8}></img>
                        <h3>2024 GIT & GitHub</h3>
                        <p>Colt steele</p>
                        <p>4.9⭐⭐⭐⭐</p>
                        <p>₹1499 <del>₹3999</del></p>
    
                    </div>
    
    
                </div>
    
            </div>
    
        </div>
    )
}
export default Topics