import React from 'react'
import { Cell } from '../cell';
import { Colors } from '../Colors';
import { Figure, FIguresNames } from './figure';

const blacklogo = require('../../../assets/black-bishop.png')
const whitelogo = require('../../../assets/white-bishop.png')

export class Bishop extends Figure{
    constructor(color:Colors,cell:Cell){
        super(color,cell);
        this.logo = color === Colors.BLACK ? blacklogo : whitelogo;
        this.name = FIguresNames.BISHOP;
    }
    canMove(target: Cell): boolean {
        if(!super.canMove(target))
            return false;
        if(this.cell.isEmptyDiagonal(target))
            return true
        return true
    }
}