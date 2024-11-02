body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #2e2f31;
  margin: 0;
}
.calculator {
  border-radius: 10px;
  width: 400px;
  background-color: #1e1f21;
  padding: 20px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
}
.calculator-screen {
  width: 100%;
  height: 80px;
  border: none;
  background-color: #d1d1d1;
  color: #333;
  font-size: 2.5rem;
  text-align: right;
  padding-right: 20px;
  padding-left: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
}
.calculator-keys button {
  height: 80px;
  width: 80px;
  margin: 5px;
  border: none;
  background-color: #9e005d;
  color: white;
  font-size: 1.5rem;
  border-radius: 10px;
  cursor: pointer;
}
.operator {
  background-color: #72003a;
}
.all-clear {
  background-color: #ff5c5c;
}
button:active {
  opacity: 0.8;
}
