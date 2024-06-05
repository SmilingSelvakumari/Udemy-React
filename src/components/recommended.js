
import C1 from"../assets/images/C1.jpg"
import C2 from"../assets/images/C2.jpg"
import C3 from"../assets/images/C3.jpg"
import C4 from"../assets/images/C4.jpg"



function Recommended()
{
return(
    <div class="recommended">
        <h1 class="recommended__title">Recommended For You</h1>
        <p>Pick the best Fit</p>
        <div class="recommended__container">
            <div class="course-card">
                <img src={C1}></img>
                <h3>Python Visualisation Master Class</h3>
                <p>Colt steele</p>
                <p>3.8⭐⭐⭐</p>
                <p>₹499 <del>₹999</del></p>

            </div>
            <div class="course-card">
                <img src={C2}></img>
                <h3>The Web Developer Boot Camp</h3>
                <p>Angela</p>
                <p>4.7⭐⭐⭐⭐</p>
                <p>₹799 <del>₹2999</del></p>

            </div>
            <div class="course-card">
                <img src={C3}></img>
                <h3>2024 UI/UX Designer Course Beginner to Pro</h3>
                <p>Stephane</p>
                <p>4.9⭐⭐⭐⭐</p>
                <p>₹599 <del>₹1999</del></p>

            </div>
            <div class="course-card">
                <img src={C4}></img>
                <h3>2024 Power Start in Project Management</h3>
                <p>Colt steele</p>
                <p>4.9⭐⭐⭐⭐</p>
                <p>₹1499 <del>₹3999</del></p>

            </div>

        </div>

    </div>
)
}
export default Recommended
    
