
class BlogCard extends React.Component {
    constructor(props) {
        super(props);
        this.course = props["course"];
        this.image = props["image"];
        this.semester = props["semester"];
        this.description = props["description"];
        this.state = { flipped: false };
        this.flip = this.flip.bind(this);
    }

    flip = () => {
        this.setState({ flipped: !this.state.flipped });
    }
    render() {
        return (


            <div onMouseEnter={this.flip} onMouseLeave={this.flip} className={"card-container" + (this.state.flipped ? " flipped" : "")}>

                <Front image={this.image} course={this.course} semester={this.semester} description={this.description}/>
                <Back description={this.description}/>
            </div>

        )
    }
}

class Front extends React.Component {
    constructor(props) {
        super(props)
        this.image = props["image"];
        this.course = props["course"];
        this.semester = props["semester"];
        this.description = props["description"];
    }
    render() {
        return (
            <div className="front">
                <ImageArea image={this.image} course={this.course}/>
                <MainArea semester={this.semester} description={this.description}/>
            </div>
        )
    }
}

class Back extends React.Component {
    constructor(props) {
        super(props);
        this.description = props["description"];
    }
    render() {
        return (
            <div className="back">
                {this.description}
            </div>
        )
    }
}

class ImageArea extends React.Component {
    constructor(props) {
        super(props);
        this.image = props["image"];
        this.course = props["course"];
    }
    render() {
        return (
            <div className="image-container">

                <img className="card-image" src={this.image}></img>
                <h1 className="title"> {this.course}</h1>
            </div>
        )
    }

}

class MainArea extends React.Component {
    constructor(props) {
        super(props);
        this.semester = props["semester"];
        this.description = props["description"];
    }
    render() {
        return (
            <div className="main-area">
                <div className="blog-post">
                    <p className="date">{this.semester}</p>
                    <p className="blog-content">
                        {this.description}
                    </p>
                    <p className="read-more">Hover to read more...</p>

                </div>

            </div>
        )
    }
}


class App extends React.Component {

    render() {
        return (
            <div className="page-container">
                <ul>
                    {/**Courses should be listed below while following the syntax from the examples*/}

                    <li><BlogCard course="MATH 53" image={"./Math53.gif"} semester={"Fall 2021"} description={"Some sample text to demonstrate how these cards will work, including how they truncate long sentences. This section displays the full-length blog post."} /></li>
                    <li><BlogCard course="ANTHRO 1" image={"./cs88.jpeg"} semester={"Fall 2021"} description={"Some sample text to demonstrate how these cards will work, including how they truncate long sentences. This section displays the full-length blog post."} /></li>
                    <li><BlogCard course="CHEM 1A" image={"./cs88.jpeg"} semester={"Fall 2021"} description={"Some sample text to demonstrate how these cards will work, including how they truncate long sentences. This section displays the full-length blog post."} /></li>
                    <li><BlogCard course="MATH 54" image={"./cs88.jpeg"} semester={"Spring 2022"} description={"Some sample text to demonstrate how these cards will work, including how they truncate long sentences. This section displays the full-length blog post."} /></li>
                    <li><BlogCard course="MATH 55" image={"./Math55.gif"} semester={"Spring 2022"} description={"Some sample text to demonstrate how these cards will work, including how they truncate long sentences. This section displays the full-length blog post."} /></li>
                    <li><BlogCard course="CS 88" image={"./cs88.jpeg"} semester={"Spring 2022"} description={"Some sample text to demonstrate how these cards will work, including how they truncate long sentences. This section displays the full-length blog post."} /></li>
                    <li><BlogCard course="PLANTBI 40" image={"./PlantBio40.gif"} semester={"Spring 2022"} description={"Some sample text to demonstrate how these cards will work, including how they truncate long sentences. This section displays the full-length blog post."} /></li>
                    <li><BlogCard course="HISTORY 190" image={"./cs88.jpeg"} semester={"Spring 2022"} description={"Some sample text to demonstrate how these cards will work, including how they truncate long sentences. This section displays the full-length blog post."} /></li>
                    <li><BlogCard course="MATH 110" image={"./cs88.jpeg"} semester={"Fall 2022"} description={"Some sample text to demonstrate how these cards will work, including how they truncate long sentences. This section displays the full-length blog post."} /></li>
                    <li><BlogCard course="MATH 113" image={"./cs88.jpeg"} semester={"Fall 2022"} description={"Some sample text to demonstrate how these cards will work, including how they truncate long sentences. This section displays the full-length blog post."} /></li>
                    <li><BlogCard course="CS 61B" image={"./cs88.jpeg"} semester={"Fall 2022"} description={"Some sample text to demonstrate how these cards will work, including how they truncate long sentences. This section displays the full-length blog post."} /></li>
                    <li><BlogCard course="CS 47a" image={"./cs88.jpeg"} semester={"Fall 2022"} description={"Some sample text to demonstrate how these cards will work, including how they truncate long sentences. This section displays the full-length blog post."} /></li>
                    <li><BlogCard course="PHIL 12A" image={"./cs88.jpeg"} semester={"Fall 2022"} description={"Some sample text to demonstrate how these cards will work, including how they truncate long sentences. This section displays the full-length blog post."} /></li>
                    <li><BlogCard course="MATH 104" image={"./cs88.jpeg"} semester={"Spring 2023"} description={"Some sample text to demonstrate how these cards will work, including how they truncate long sentences. This section displays the full-length blog post."} /></li>
                    <li><BlogCard course="MATH 115" image={"./cs88.jpeg"} semester={"Spring 2023"} description={"Some sample text to demonstrate how these cards will work, including how they truncate long sentences. This section displays the full-length blog post."} /></li>
                    <li><BlogCard course="CS 61C" image={"./cs88.jpeg"} semester={"Spring 2023"} description={"Some sample text to demonstrate how these cards will work, including how they truncate long sentences. This section displays the full-length blog post."} /></li>
                    <li><BlogCard course="CS 188" image={"./cs88.jpeg"} semester={"Spring 2023"} description={"Some sample text to demonstrate how these cards will work, including how they truncate long sentences. This section displays the full-length blog post."} /></li>
                    <li><BlogCard course="HISTORY 137AC" image={"./cs88.jpeg"} semester={"Spring 2023"} description={"Some sample text to demonstrate how these cards will work, including how they truncate long sentences. This section displays the full-length blog post."} /></li>
                    <li><BlogCard course="MATH 136" image={"./cs88.jpeg"} semester={"Fall 2023"} description={"Some sample text to demonstrate how these cards will work, including how they truncate long sentences. This section displays the full-length blog post."} /></li>
                    <li><BlogCard course="CS 189" image={"./cs88.jpeg"} semester={"Fall 2023"} description={"Some sample text to demonstrate how these cards will work, including how they truncate long sentences. This section displays the full-length blog post."} /></li>
                    <li><BlogCard course="CS 161" image={"./cs88.jpeg"} semester={"Fall 2023"} description={"Some sample text to demonstrate how these cards will work, including how they truncate long sentences. This section displays the full-length blog post."} /></li>
                </ul>
            </div>
        )
    }
}

// IDEAS:
// SORT:
//    Fav
//    Least Fav
//    Easiest
//    Hardest
//    Most Interesting
//    Least Interesting
//    By Semester
//    By Major
// FILTER:
//    By Major
//    By Year
//    By Department
// Depict each semester with a highlight feature
ReactDOM.render(<App />, document.getElementById('body'));

// Cool Image:  "https://78.media.tumblr.com/d98fb931adb117c70f0dbced9e947520/tumblr_pe582mbWip1tlgv32o1_1280.png"