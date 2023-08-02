
class BlogCard extends React.Component {
    constructor(props) {
        super(props);
        this.course = props["course"];
        this.image = props["image"];
        this.semester = props["semester"];
        this.description = props["description"];
        this.courseName = props["courseName"];
        this.state = { flipped: false };
        this.flip = this.flip.bind(this);
    }

    flip = () => {
        this.setState({ flipped: !this.state.flipped });
    }
    render() {
        return (


            <div onMouseEnter={this.flip} onMouseLeave={this.flip} className={"card-container" + (this.state.flipped ? " flipped" : "")}>

                <Front image={this.image} course={this.course} semester={this.semester} description={this.description} courseName={this.courseName}/>
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
        this.courseName = props["courseName"];
    }
    render() {
        return (
            <div className="front">
                <ImageArea image={this.image} course={this.course}/>
                <MainArea semester={this.semester} description={this.description} courseName={this.courseName}/>
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
        this.courseName = props["courseName"];
    }
    render() {
        return (
            <div className="main-area">
                <div className="blog-post">
                    <p className="date">{this.semester}</p>
                    <p className="blog-content h-auto">
                        {this.courseName}
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
            <div className="page-container py-8">
                <ul>
                    {/**Courses should be listed below while following the syntax from the examples*/}

                    <li><BlogCard course="MATH 53" image={"./images/Math53.gif"} semester={"Fall 2021"} courseName={"Multivariable Calculus"} description={"Parametric equations, polar coordinates, partial derivatives, multiple integrals, vector calculus, Theorems of Green, Stokes, Gauss."} /></li>
                    <li><BlogCard course="ANTHRO 1" image={"./images/Anthro1.jpeg"} semester={"Fall 2021"} courseName={"Introduction to Biological Anthropology"} description={"Introduction to evolutionary biology, origins of early humans, modern human variation, health and adaptation."} /></li>
                    <li><BlogCard course="CHEM 1A" image={"./images/chemistry.png"} semester={"Fall 2021"} courseName={"General Chemistry"} description={"Stoichiometry of chemical reactions, quantum mechanical description of atoms, thermochemistry, chemical kinetics."} /></li>
                    <li><BlogCard course="MATH 54" image={"./images/math54.png"} semester={"Spring 2022"} courseName={"Linear Algebra and Differential Equations"} description={"Linear Algebra, vector spaces, eigenvectors, eigenvalues, orthogonality, second order differential equation, Fourier series"} /></li>
                    <li><BlogCard course="MATH 55" image={"./images/Math55.gif"} semester={"Spring 2022"} courseName={"Discrete Math"} description={"Logic, mathematical induction, sets, relations, graphs, combinatorics, algebraic structures, and discrete probability theory."} /></li>
                    <li><BlogCard course="CS 88" image={"./images/cs88.jpeg"} semester={"Spring 2022"} courseName={"Computational Structures in Data Science"} description={"Types of programming languages, Python, programming structures, SQL"} /></li>
                    <li><BlogCard course="PLANTBI 40" image={"./images/plant.gif"} semester={"Spring 2022"} courseName={"The (Secret) Life of Plants"} description={"How plants grow, reproduce and respond to the environment, basics of genetic engineering and biotechnology, plant disease and diversity."} /></li>
                    <li><BlogCard course="HISTORY 190" image={"./images/soccer.jpeg"} semester={"Spring 2022"} courseName={"Soccer: A Global History"} description={"How and why soccer came to happen, changes in stadiums, fan culture, media coverage and formations in the context of political and socio-cultural changes in society."} /></li>
                    <li><BlogCard course="MATH 110" image={"./images/math110.gif"} semester={"Fall 2022"} courseName={"Linear Algebra"} description={"Matrices, vector spaces, inner products, determinants, eigenvectors, QR factorization, Linear Functionals, Jordan canonical forms."} /></li>
                    <li><BlogCard course="MATH 113" image={"./images/math113.gif"} semester={"Fall 2022"} courseName={"Introduction to Abstract Algebra"} description={"Sets and relations, integers, congruences, groups, factor groups, commutative rings, ideals and quotient fields."} /></li>
                    <li><BlogCard course="CS 61B" image={"./images/cs61b.png"} semester={"Fall 2022"} courseName={"Data structures"} description={"Fundamental dynamic data structures: linear lists, queues, trees, array strings, hashtable, storage management, principles of software engineering, sorting and searching, Java."} /></li>
                    <li><BlogCard course="CS 47a" image={"./images/cs47a.jpeg"} semester={"Fall 2022"} courseName={"Completion of work in CS 61A"} description={"Generic operations, streams and operators, scheme programming language."} /></li>
                    <li><BlogCard course="PHIL 12A" image={"./images/cs88.jpeg"} semester={"Fall 2022"} courseName={"Introduction to Logic"} description={"Syntax, semantics, proof theory of sentential and predicate logic."} /></li>
                    <li><BlogCard course="MATH 104" image={"./images/cs88.jpeg"} semester={"Spring 2023"} courseName={"Introduction to Analysis"} description={"The Real Number System, Sequences, Limits, and continuous functions in R and R, Metric Space, Uniform convergence, interchange of limits, infinite series, mean value theorem, Reimann Integral."} /></li>
                    <li><BlogCard course="MATH 115" image={"./images/cs88.jpeg"} semester={"Spring 2023"} courseName={"Introduction to Number Theory"} description={"Divisibility, congruences, numerical functions, theory of primes, Diophantine analysis, continued fractions, partitions, quadratic fields."} /></li>
                    <li><BlogCard course="CS 61C" image={"./images/cs88.jpeg"} semester={"Spring 2023"} courseName={"Great Ideas of Computer Architecture (Machine Structures)"} description={"Internal organization and Operation of computers, Machine Architecture, Support for High Level Languages and Operating Systems, C Programming Languages, RISC-V assembly language, Computer Logic design."} /></li>
                    <li><BlogCard course="CS 188" image={"./images/cs88.jpeg"} semester={"Spring 2023"} courseName={"Introduction to Artificial Intelligence"} description={"Search, Game playing, Knowledge Representation, Inference, Planning, Reasoning under uncertainty, Machine Learning, Introduction to Neural Networks."} /></li>
                    <li><BlogCard course="HISTORY 137AC" image={"./images/cs88.jpeg"} semester={"Spring 2023"} courseName={"Immigrants and Immigration as U.S. History"} description={"U.S. immigration from colonial period to present - causes and patterns of migration, politics of race, ethnicity, class, religion, and gender over immigration, meaning of citizenship, xenophobia."} /></li>
                    <li><BlogCard course="Art 23AC" image={"./images/cs88.jpeg"} semester={"Fall 2023"} courseName={"Digital Media: Foundations"} description={"Data generation, visualization, and their impact on real persons, environments, and situations, role of privacy, role of sampling, animation, video, interactive design and music in shaping American Culture."} /></li>
                    <li><BlogCard course="MATH 136" image={"./images/cs88.jpeg"} semester={"Fall 2023"} courseName={"Incompleteness and Undecidability"} description={"Functions computable by Algorithm, Turing Machines, Church's Thesis, Halting Problem, Rice's Theorem, Recursively enumerable sets, self-referential programs, Godel's incompleteness theorem."} /></li>
                    <li><BlogCard course="MATH 143" image={"./images/cs88.jpeg"} semester={"Fall 2023"} courseName={"Elementary Algebraic Geometry"} description={"Introduction to basic commutative algebra, algebraic geometry, computational techniques, curves, surfaces, Grassmannian varieties"} /></li>
                    <li><BlogCard course="CS 161" image={"./images/cs88.jpeg"} semester={"Fall 2023"} courseName={"Computer Security"} description={"Introduction to Computer Security, Cryptography (Encryption, Authentication, Hash Function, Cryptographic protocols), OS security, Network security, firewalls, viruses, worms, software security, defensive programming."} /></li>
                    <li><BlogCard course="CS 189" image={"./images/cs88.jpeg"} semester={"Fall 2023"} courseName={"Introduction to Machine Learning"} description={"Supervised methods for regression and classification (linear models, trees, neural networks, ensemble method, instance based methods), generative and discriminative probabilistic models, Bayesian parametric learning"} /></li>
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