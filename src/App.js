import "./App.css";
import { useState } from "react";

const App = () => {
  const [expression, setExpression] = useState("");
  const [mode, setMode] = useState(null);
  const [error, setError] = useState(false);

  //Button Listener Function For Calculator
  const evaluate = (operator, operand) => {
    try {
      if (error) {
        return;
      }

      //Any Operator button is clicked
      if (operator != null) {
        if (operator === "equal") {
          //calculate here and show result in display
          let temp = expression;
          if (temp.includes("÷")) {
            setExpression(eval(temp.replace("÷", "/")) + "");
          } else {
            setExpression(eval(expression) + "");
          }
          setMode(null);
        } else {
          if (expression !== "") {
            setMode(operator);
          }

          switch (operator) {
            case "add":
              if (expression !== "") {
                setExpression(expression + " + ");
              }

              break;

            case "subt":
              if (expression !== "") {
                setExpression(expression + " - ");
              }
              break;

            case "mult":
              if (expression !== "") {
                setExpression(expression + " * ");
              }
              break;

            case "div":
              if (expression !== "") {
                setExpression(expression + " ÷ ");
              }
              break;

            case "negative":
              if (expression !== "") {
                let temp = expression;
                if (temp.includes("÷")) {
                  temp.replace("÷", "/");
                  setExpression(eval(expression) + "");
                } else {
                  setExpression(eval(expression) + "");
                }

                setExpression(` -${expression}`);
                setMode(null);
              }
              break;

            case "percent":
              if (expression !== "") {
                let temp = expression;
                if (temp.includes("÷")) {
                  temp.replace("÷", "/");
                  setExpression(eval(expression) + "");
                } else {
                  setExpression(eval(expression) + "");
                }

                setExpression(eval(expression + " / 100") + "");
                setMode(null);
              }

              break;
          }
        }

        // Any Operand button is clicked
      } else {
        setExpression(expression + operand);
      }
    } catch (err) {
      setExpression("Invalid !! ( press c to clear)");
      setError(true);
    }
  };

  return (
    <div className="container">
      <h2 className="title">Calculator</h2>

      <div className="calculator">
        <textarea
          className="display"
          rows={2}
          cols={30}
          value={expression}
          disabled={true}
        ></textarea>

        <hr></hr>

        <div className="buttons-container">
          <div className="row">
            <button
              className="reset"
              onClick={() => {
                if (error) {
                  setError(false);
                }
                setExpression("");
                setMode(null);
              }}
            >
              C
            </button>
            <button
              className={mode === "negative" ? "active" : "type1"}
              onClick={() => evaluate("negative", null)}
            >
              +/-
            </button>
            <button
              className={mode === "percent" ? "active" : "type1"}
              onClick={() => evaluate("percent", null)}
            >
              %
            </button>
            <button
              className={mode === "div" ? "active" : "type2"}
              onClick={() => evaluate("div", null)}
            >
              ÷
            </button>
          </div>

          <div className="row">
            <button onClick={() => evaluate(null, "7")}>7</button>
            <button onClick={() => evaluate(null, "8")}>8</button>
            <button onClick={() => evaluate(null, "9")}>9</button>
            <button
              className={mode === "mult" ? "active" : "type2"}
              onClick={() => evaluate("mult", null)}
            >
              x
            </button>
          </div>

          <div className="row">
            <button onClick={() => evaluate(null, "4")}>4</button>
            <button onClick={() => evaluate(null, "5")}>5</button>
            <button onClick={() => evaluate(null, "6")}>6</button>
            <button
              className={mode === "subt" ? "active" : "type2"}
              onClick={() => evaluate("subt", null)}
            >
              -
            </button>
          </div>

          <div className="row">
            <button onClick={() => evaluate(null, "1")}>1</button>
            <button onClick={() => evaluate(null, "2")}>2</button>
            <button onClick={() => evaluate(null, "3")}>3</button>
            <button
              className={mode === "add" ? "active" : "type2"}
              onClick={() => evaluate("add", null)}
            >
              +
            </button>
          </div>

          <div className="row">
            <button onClick={() => evaluate(null , "0")}>0</button>
            <button onClick={() => evaluate(null, ".")}>.</button>
            <button className="equal" onClick={() => evaluate("equal", null)}>
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
