import React,{FC} from "react";
import { Cell } from "../../models/cell";

interface cellProps{
    cell:Cell;
    selected:boolean;
    click: (cell:Cell) => void
}

const CellComponent:FC<cellProps> = ({cell,selected,click}) => {
    return (
        <div 
            className={["cell",cell.color ,selected ? 'selected' : '',
                                            cell.available && cell.figure ? 'green' : ''].join(' ')}
            onClick={() => click(cell)}
        >
            {cell.available && !cell.figure &&  <div className="available"/>}
            <>
                {cell.figure?.logo && <img src={cell.figure.logo}/>}
            </>
        </div>
    )
}
export default CellComponent