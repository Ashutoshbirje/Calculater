const inputs = document.querySelectorAll(".btn");
const scr = document.querySelector(".display1");

let text="";

function calculateExpression(expression) {
    try {
      // Validate the expression to only allow valid characters
      if (/^[\d+\-*/().= ]+$/.test(expression)) {
        // Evaluate the expression
        const result = new Function(`return ${expression.replace("=", "")}`)();
        return result;
      } else {
        throw new Error("Invalid characters in the expression.");
      }
    } catch (error) {
      return `Error`;
    }
}

inputs.forEach((input) => {
  input.addEventListener("click", () => {
    let data=input.innerHTML;
    console.log(data);

    if(data=='='){
        console.log("this is " + text);
        // calculate result
        let ans=calculateExpression(text)
        scr.textContent=ans;
        text="";
    } else if(data=='C'){
        text="";
        scr.textContent="0";
    } else {
        text+=data;
        scr.textContent=text;
    }
  });
});


