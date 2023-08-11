"use strict";

function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}
// import {createRoot} from 'react-dom/client';
var Card = /*#__PURE__*/function (_React$Component) {
  _inherits(Card, _React$Component);
  var _super = _createSuper(Card);
  function Card(props) {
    var _this;
    _classCallCheck(this, Card);
    _this = _super.call(this, props);
    _this.image = props["image"];
    _this.courseTitle = props["courseTitle"];
    _this.semester = props["semester"];
    _this.courseName = props["courseName"];
    _this.courseDescription = props["courseDescription"];
    return _this;
  }
  _createClass(Card, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", {
        className: "flex h-fit w-fit items-center justify-center bg-slate-100"
      }, /*#__PURE__*/React.createElement("div", {
        className: "group h-96 w-80 [perspective:1000px]"
      }, /*#__PURE__*/React.createElement("div", {
        className: "relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]"
      }, /*#__PURE__*/React.createElement("div", {
        className: "absolute inset-0"
      }, /*#__PURE__*/React.createElement("img", {
        className: "h-full w-full rounded-xl object-cover shadow-xl shadow-black/40",
        src: "./images/".concat(this.image),
        alt: ""
      })), /*#__PURE__*/React.createElement("div", {
        className: "absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex min-h-full flex-col items-center justify-center"
      }, /*#__PURE__*/React.createElement("h1", {
        className: "text-3xl font-bold font-bodoni_moda text-yellow-500"
      }, this.courseTitle), /*#__PURE__*/React.createElement("p", {
        className: "text-lg font-bold text-yellow-500"
      }, this.semester), /*#__PURE__*/React.createElement("p", {
        className: "text-base underline text-yellow-500"
      }, this.courseName), /*#__PURE__*/React.createElement("label", {
        className: "swap swap-flip justify-center px-auto items-center "
      }, /*#__PURE__*/React.createElement("input", {
        type: "checkbox",
        className: "opacity-0 w-full h-full"
      }), /*#__PURE__*/React.createElement("div", {
        className: "swap-off w-full h-full px-2 flex flex-col justify-center items-center group"
      }, /*#__PURE__*/React.createElement("div", {
        className: "w-fit mt-2 rounded-md btn btn-nav py-1 brightness-125 bg-[#003f88] px-auto text-sm hover:bg-[transparent] hover:text-[#fdc500] cursor-pointer"
      }, "Show more")), /*#__PURE__*/React.createElement("div", {
        className: "swap-on w-full h-full px-2 flex flex-col justify-center items-center"
      }, /*#__PURE__*/React.createElement("p", {
        className: "my-4"
      }, this.courseDescription), /*#__PURE__*/React.createElement("div", {
        className: "w-fit rounded-md btn btn-nav py-1 brightness-125 bg-[#003f88] px-auto text-sm hover:bg-[transparent] hover:text-[#fdc500] cursor-pointer"
      }, "Hide"))))))));
    }
  }]);
  return Card;
}(React.Component);
var App = /*#__PURE__*/function (_React$Component2) {
  _inherits(App, _React$Component2);
  var _super2 = _createSuper(App);
  function App() {
    _classCallCheck(this, App);
    return _super2.apply(this, arguments);
  }
  _createClass(App, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", {
        className: "page-container py-8"
      }, /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Card, {
        courseTitle: "MATH 53",
        image: "Math53.gif",
        semester: "Fall 2021",
        courseName: "Multivariable Calculus",
        courseDescription: "Parametric equations, polar coordinates, partial derivatives, multiple integrals, vector calculus, Theorems of Green, Stokes, Gauss."
      })), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Card, {
        courseTitle: "ANTHRO 1",
        image: "Anthro1.jpeg",
        semester: "Fall 2021",
        courseName: "Introduction to Biological Anthropology",
        courseDescription: "Introduction to evolutionary biology, origins of early humans, modern human variation, health and adaptation."
      })), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Card, {
        courseTitle: "CHEM 1A",
        image: "chemistry.png",
        semester: "Fall 2021",
        courseName: "General Chemistry",
        courseDescription: "Stoichiometry of chemical reactions, quantum mechanical description of atoms, thermochemistry, chemical kinetics."
      })), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Card, {
        courseTitle: "MATH 54",
        image: "math54.png",
        semester: "Spring 2022",
        courseName: "Linear Algebra and Differential Equations",
        courseDescription: "Linear Algebra, vector spaces, eigenvectors, eigenvalues, orthogonality, second order differential equation, Fourier series"
      })), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Card, {
        courseTitle: "MATH 55",
        image: "Math55.gif",
        semester: "Spring 2022",
        courseName: "Discrete Math",
        courseDescription: "Logic, mathematical induction, sets, relations, graphs, combinatorics, algebraic structures, and discrete probability theory."
      })), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Card, {
        courseTitle: "CS 88",
        image: "cs88.jpeg",
        semester: "Spring 2022",
        courseName: "Computational Structures in Data Science",
        courseDescription: "Types of programming languages, Python, programming structures, SQL"
      })), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Card, {
        courseTitle: "PLANTBI 40",
        image: "plant.gif",
        semester: "Spring 2022",
        courseName: "The (Secret) Life of Plants",
        courseDescription: "How plants grow, reproduce and respond to the environment, basics of genetic engineering and biotechnology, plant disease and diversity."
      })), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Card, {
        courseTitle: "HISTORY 190",
        image: "soccer.jpeg",
        semester: "Spring 2022",
        courseName: "Soccer: A Global History",
        courseDescription: "How and why soccer came to happen, changes in stadiums, fan culture, media coverage and formations in the context of political and socio-cultural changes in society."
      })), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Card, {
        courseTitle: "MATH 110",
        image: "math110.gif",
        semester: "Fall 2022",
        courseName: "Linear Algebra",
        courseDescription: "Matrices, vector spaces, inner products, determinants, eigenvectors, QR factorization, Linear Functionals, Jordan canonical forms."
      })), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Card, {
        courseTitle: "MATH 113",
        image: "math113.gif",
        semester: "Fall 2022",
        courseName: "Introduction to Abstract Algebra",
        courseDescription: "Sets and relations, integers, congruences, groups, factor groups, commutative rings, ideals and quotient fields."
      })), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Card, {
        courseTitle: "CS 61B",
        image: "CS61B.png",
        semester: "Fall 2022",
        courseName: "Data structures",
        courseDescription: "Fundamental dynamic data structures: linear lists, queues, trees, array strings, hashtable, storage management, principles of software engineering, sorting and searching, Java."
      })), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Card, {
        courseTitle: "CS 47a",
        image: "scheme.png",
        semester: "Fall 2022",
        courseName: "Completion of work in CS 61A",
        courseDescription: "Generic operations, streams and operators, scheme programming language."
      })), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Card, {
        courseTitle: "PHIL 12A",
        image: "logic.jpg",
        semester: "Fall 2022",
        courseName: "Introduction to Logic",
        courseDescription: "Syntax, semantics, proof theory of sentential and predicate logic."
      })), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Card, {
        courseTitle: "MATH 104",
        image: "Real-Analysis.png",
        semester: "Spring 2023",
        courseName: "Introduction to Analysis",
        courseDescription: "The Real Number System, Sequences, Limits, and continuous functions in R and R, Metric Space, Uniform convergence, interchange of limits, infinite series, mean value theorem, Reimann Integral."
      })), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Card, {
        courseTitle: "MATH 115",
        image: "number-theory.png",
        semester: "Spring 2023",
        courseName: "Introduction to Number Theory",
        courseDescription: "Divisibility, congruences, numerical functions, theory of primes, Diophantine analysis, continued fractions, partitions, quadratic fields."
      })), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Card, {
        courseTitle: "CS 61C",
        image: "61c.jpg",
        semester: "Spring 2023",
        courseName: "Great Ideas of Computer Architecture (Machine Structures)",
        courseDescription: "Internal organization and Operation of computers, Machine Architecture, C Programming Languages, RISC-V assembly language, Computer Logic design."
      })), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Card, {
        courseTitle: "CS 188",
        image: "ai.jpeg",
        semester: "Spring 2023",
        courseName: "Introduction to Artificial Intelligence",
        courseDescription: "Search, Game playing, Knowledge Representation, Inference, Planning, Reasoning under uncertainty, Machine Learning, Introduction to Neural Networks."
      })), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Card, {
        courseTitle: "HISTORY 137AC",
        image: "immigration.jpg",
        semester: "Spring 2023",
        courseName: "Immigrants and Immigration as U.S. History",
        courseDescription: "U.S. immigration from colonial period to present - causes and patterns of migration, meaning of citizenship, xenophobia."
      })), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Card, {
        courseTitle: "Art 23AC",
        image: "art23ac.png",
        semester: "Fall 2023",
        courseName: "Digital Media: Foundations",
        courseDescription: "Data generation, visualization, and their impact on real persons, environments, and situations, animation, video, and interactive design in shaping American Culture."
      })), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Card, {
        courseTitle: "MATH 136",
        image: "incompleteness.jpg",
        semester: "Fall 2023",
        courseName: "Incompleteness and Undecidability",
        courseDescription: "Turing Machines, Church's Thesis, Halting Problem, Rice's Theorem, Recursively enumerable sets, self-referential programs, Godel's incompleteness theorem."
      })), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Card, {
        courseTitle: "MATH 143",
        image: "math-143.jpg",
        semester: "Fall 2023",
        courseName: "Elementary Algebraic Geometry",
        courseDescription: "Introduction to basic commutative algebra, algebraic geometry, computational techniques, curves, surfaces, Grassmannian varieties"
      })), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Card, {
        courseTitle: "CS 161",
        image: "cs161.jpg",
        semester: "Fall 2023",
        courseName: "Computer Security",
        courseDescription: "Introduction to Computer Security, Cryptography (Encryption, Authentication, Hash Function), OS security, Network security, firewalls, viruses, software security, defensive programming."
      })), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Card, {
        courseTitle: "CS 189",
        image: "cs-189.jpg",
        semester: "Fall 2023",
        courseName: "Introduction to Machine Learning",
        courseDescription: "Supervised methods for regression and classification (linear models, ensemble method, instance based methods), probabilistic models"
      }))));
    }
  }]);
  return App;
}(React.Component); // IDEAS:
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
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('body'));

// Cool Image:  "https://78.media.tumblr.com/d98fb931adb117c70f0dbced9e947520/tumblr_pe582mbWip1tlgv32o1_1280.png"
//# sourceMappingURL=courses.js.map