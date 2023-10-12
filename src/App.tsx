import React ,{useState,useEffect} from 'react';
import './App.css';
import BoardComponent from './components/ui/board/BoardComponent';
import { Board } from './components/models/board';

function App() {
  const [board,setBoard] = useState(new Board())
  
  useEffect( () =>{
    restart()
  },[])

  function restart(){
    const newBoard = new Board()
    newBoard.initCells()
    newBoard.addFigures()
    setBoard(newBoard)
  }

  return (
    <div className="App">
      <BoardComponent
        board={board}
        setBoard={setBoard}
      />
    </div>
  );
}

export default App;
