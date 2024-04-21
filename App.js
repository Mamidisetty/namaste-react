/* const heading= React.createElement
("h1",
{id:"heading",xyz:"abc"},
"Hello World in React!"); */
{/* <div id="parent">
    <div id="child">
        <h1>My Name is MSY Suressh Kumar</h1>
    </div>
</div> */}


const parent=React.createElement("div",{id:"parent"},
[ React.createElement("div",{id:"child"},
[React.createElement("h1",{},"My Name is MSY Suressh Kumar"),
React.createElement("h2",{},"I am h2 tag")]
) , React.createElement("div",{id:"child2"},
[React.createElement("h1",{},"My Name is MSY Suressh Kumar"),
React.createElement("h2",{},"I am h2 tag")]
) ]
);

console.log(parent);
const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);