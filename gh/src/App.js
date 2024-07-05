
import './App.css';


import './App.css';

function App() {

  const collors = ["Червоний", "Синій", "Зелений"];

  const b = 30;
  const a = 15;

  const sum = a + b;

  const nameUs = "Андрій";
  const src = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fhtmlbase.ru%2Fhtml%2Fimg&psig=AOvVaw2FLUuw2i0-FhcBwS1a_0P-&ust=1720277303629000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJiy8b6SkIcDFQAAAAAdAAAAABAJ";
  const alt = "HTML CSS";
  const web = {
    name: "Chess.com",
    url: "https://www.chess.com/ru"
  };
  return (
    <>
      <setion>
        {<h1>{nameUs}</h1>}
        <p>Ласкаво просимо до нашого сайту!</p>
        {<img src={src} alt={alt} />}

        {<a href={web.url}>{web.name}</a>}

        {<p>{sum}</p>}


        <ul>
          {collors.map(collor => <li>
            <p>{collor.name}</p>
          </li>)}
        </ul>
      </setion>
    </>
  );
}

export default App;


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
