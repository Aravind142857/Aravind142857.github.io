
// import {createRoot} from 'react-dom/client';
class Card extends React.Component {
    constructor(props) {
        super(props);
        this.image = props["image"];
        this.courseTitle = props["courseTitle"];
        this.semester = props["semester"];
        this.courseName = props["courseName"];
        this.courseDescription = props["courseDescription"];
    }
    render() {
        return (
            <div className="flex h-fit w-fit items-center justify-center bg-slate-100">
                <div className="group h-96 w-80 [perspective:1000px]">
                    <div
                        className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                        <div className="absolute inset-0">
                            <img className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
                                 src={`../images/${this.image}`} alt=""/>
                        </div>
                        <div
                            className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                            <div className="flex min-h-full flex-col items-center justify-center">
                                <h1 className="text-3xl font-bold font-bodoni_moda text-yellow-500">{this.courseTitle}</h1>
                                <p className="text-lg font-bold text-yellow-500">{this.semester}</p>
                                <p className="text-base underline text-yellow-500">{this.courseName}</p>
                                <label className="swap swap-flip justify-center px-auto items-center ">
                                    <input type="checkbox" className="opacity-0 w-full h-full"/>
                                    <div
                                        className="swap-off w-full h-full px-2 flex flex-col justify-center items-center group">
                                        <div
                                            className="w-fit mt-2 rounded-md btn btn-nav py-1 brightness-125 bg-[#003f88] px-auto text-sm hover:bg-[transparent] hover:text-[#fdc500] cursor-pointer">Show
                                            more
                                        </div>
                                    </div>
                                    <div
                                        className="swap-on w-full h-full px-2 flex flex-col justify-center items-center">
                                        <p className="my-4">{this.courseDescription}</p>
                                        <div
                                            className="w-fit rounded-md btn btn-nav py-1 brightness-125 bg-[#003f88] px-auto text-sm hover:bg-[transparent] hover:text-[#fdc500] cursor-pointer">Hide
                                        </div>
                                    </div>
                                </label>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
class App extends React.Component {

    render() {
        return (
            <div className="page-container py-8">
                <ul>
                    {/**Courses should be listed below while following the syntax from the examples*/}

                    <li><Card courseTitle="MATH 53" image={"Math53.gif"} semester={"Fall 2021"} courseName={"Multivariable Calculus"} courseDescription={"Parametric equations, polar coordinates, partial derivatives, multiple integrals, vector calculus, Theorems of Green, Stokes, Gauss."} /></li>
                    <li><Card courseTitle="ANTHRO 1" image={"Anthro1.jpeg"} semester={"Fall 2021"} courseName={"Introduction to Biological Anthropology"} courseDescription={"Introduction to evolutionary biology, origins of early humans, modern human variation, health and adaptation."} /></li>
                    <li><Card courseTitle="CHEM 1A" image={"chemistry.png"} semester={"Fall 2021"} courseName={"General Chemistry"} courseDescription={"Stoichiometry of chemical reactions, quantum mechanical description of atoms, thermochemistry, chemical kinetics."} /></li>
                    <li><Card courseTitle="MATH 54" image={"math54.png"} semester={"Spring 2022"} courseName={"Linear Algebra and Differential Equations"} courseDescription={"Linear Algebra, vector spaces, eigenvectors, eigenvalues, orthogonality, second order differential equation, Fourier series"} /></li>
                    <li><Card courseTitle="MATH 55" image={"Math55.gif"} semester={"Spring 2022"} courseName={"Discrete Math"} courseDescription={"Logic, mathematical induction, sets, relations, graphs, combinatorics, algebraic structures, and discrete probability theory."} /></li>
                    <li><Card courseTitle="CS 88" image={"cs88.jpeg"} semester={"Spring 2022"} courseName={"Computational Structures in Data Science"} courseDescription={"Types of programming languages, Python, programming structures, SQL"} /></li>
                    <li><Card courseTitle="PLANTBI 40" image={"plant.gif"} semester={"Spring 2022"} courseName={"The (Secret) Life of Plants"} courseDescription={"How plants grow, reproduce and respond to the environment, basics of genetic engineering and biotechnology, plant disease and diversity."} /></li>
                    <li><Card courseTitle="HISTORY 190" image={"soccer.jpeg"} semester={"Spring 2022"} courseName={"Soccer: A Global History"} courseDescription={"How and why soccer came to happen, changes in stadiums, fan culture, media coverage and formations in the context of political and socio-cultural changes in society."} /></li>
                    <li><Card courseTitle="MATH 110" image={"math110.gif"} semester={"Fall 2022"} courseName={"Linear Algebra"} courseDescription={"Matrices, vector spaces, inner products, determinants, eigenvectors, QR factorization, Linear Functionals, Jordan canonical forms."} /></li>
                    <li><Card courseTitle="MATH 113" image={"math113.gif"} semester={"Fall 2022"} courseName={"Introduction to Abstract Algebra"} courseDescription={"Sets and relations, integers, congruences, groups, factor groups, commutative rings, ideals and quotient fields."} /></li>
                    <li><Card courseTitle="CS 61B" image={"CS61B.png"} semester={"Fall 2022"} courseName={"Data structures"} courseDescription={"Fundamental dynamic data structures: linear lists, queues, trees, array strings, hashtable, storage management, principles of software engineering, sorting and searching, Java."} /></li>
                    <li><Card courseTitle="CS 47a" image={"scheme.png"} semester={"Fall 2022"} courseName={"Completion of work in CS 61A"} courseDescription={"Generic operations, streams and operators, scheme programming language."} /></li>
                    <li><Card courseTitle="PHIL 12A" image={"logic.jpg"} semester={"Fall 2022"} courseName={"Introduction to Logic"} courseDescription={"Syntax, semantics, proof theory of sentential and predicate logic."} /></li>
                    <li><Card courseTitle="MATH 104" image={"Real-Analysis.png"} semester={"Spring 2023"} courseName={"Introduction to Analysis"} courseDescription={"The Real Number System, Sequences, Limits, and continuous functions in R and R, Metric Space, Uniform convergence, interchange of limits, infinite series, mean value theorem, Reimann Integral."} /></li>
                    <li><Card courseTitle="MATH 115" image={"number-theory.png"} semester={"Spring 2023"} courseName={"Introduction to Number Theory"} courseDescription={"Divisibility, congruences, numerical functions, theory of primes, Diophantine analysis, continued fractions, partitions, quadratic fields."} /></li>
                    <li><Card courseTitle="CS 61C" image={"61c.jpg"} semester={"Spring 2023"} courseName={"Great Ideas of Computer Architecture (Machine Structures)"} courseDescription={"Internal organization and Operation of computers, Machine Architecture, C Programming Languages, RISC-V assembly language, Computer Logic design."} /></li>
                    <li><Card courseTitle="CS 188" image={"ai.jpeg"} semester={"Spring 2023"} courseName={"Introduction to Artificial Intelligence"} courseDescription={"Search, Game playing, Knowledge Representation, Inference, Planning, Reasoning under uncertainty, Machine Learning, Introduction to Neural Networks."} /></li>
                    <li><Card courseTitle="HISTORY 137AC" image={"immigration.jpg"} semester={"Spring 2023"} courseName={"Immigrants and Immigration as U.S. History"} courseDescription={"U.S. immigration from colonial period to present - causes and patterns of migration, meaning of citizenship, xenophobia."} /></li>
                    <li><Card courseTitle="Art 23AC" image={"art23ac.png"} semester={"Fall 2023"} courseName={"Digital Media: Foundations"} courseDescription={"Data generation, visualization, and their impact on real persons, environments, and situations, animation, video, and interactive design in shaping American Culture."} /></li>
                    <li><Card courseTitle="MATH 136" image={"incompleteness.jpg"} semester={"Fall 2023"} courseName={"Incompleteness and Undecidability"} courseDescription={"Turing Machines, Church's Thesis, Halting Problem, Rice's Theorem, Recursively enumerable sets, self-referential programs, Godel's incompleteness theorem."} /></li>
                    <li><Card courseTitle="MATH 143" image={"math-143.jpg"} semester={"Fall 2023"} courseName={"Elementary Algebraic Geometry"} courseDescription={"Introduction to basic commutative algebra, algebraic geometry, computational techniques, curves, surfaces, Grassmannian varieties"} /></li>
                    <li><Card courseTitle="CS 161" image={"cs161.jpg"} semester={"Fall 2023"} courseName={"Computer Security"} courseDescription={"Introduction to Computer Security, Cryptography (Encryption, Authentication, Hash Function), OS security, Network security, firewalls, viruses, software security, defensive programming."} /></li>
                    <li><Card courseTitle="CS 189" image={"cs-189.jpg"} semester={"Fall 2023"} courseName={"Introduction to Machine Learning"} courseDescription={"Supervised methods for regression and classification (linear models, ensemble method, instance based methods), probabilistic models"} /></li>
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
// const container = document.getElementById('body');
// const root = createRoot(container);
// root.render(<App />);
ReactDOM.render(<App />, document.getElementById('body'));

// Cool Image:  "https://78.media.tumblr.com/d98fb931adb117c70f0dbced9e947520/tumblr_pe582mbWip1tlgv32o1_1280.png"