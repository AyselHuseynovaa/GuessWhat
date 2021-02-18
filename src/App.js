import React  from 'react';
import Calculate from "./components/Calculate";
import {CalculateContextProvider} from "./context/CalculateContext"
 const App = () => {


  return (
    <div>
    <CalculateContextProvider>
    <Calculate/>
    </CalculateContextProvider>
   
    </div>
  )
}
export default App;