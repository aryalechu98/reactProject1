
export default function Navbar(props){

    return(
        <nav className="nav-flex">
            <div class="flex">
                <div className="left-nav flex">
                    <img src= {props.navContent.imgSrc}/>
                    <h1>ReactFacts</h1>
                    </div>
                <div className="right-nav">
                    <h2>React Course Project1</h2>
                </div>
            </div>
        </nav>
    )
}