import React from 'react'
import { Figure, FIguresNames } from './figure';
import { Cell } from '../cell';
import { Colors } from '../Colors';

const blacklogo = require('../../../assets/black-rook.png')
const whitelogo = require('../../../assets/white-rook.png')

export class Rook extends Figure{
    constructor(color:Colors,cell:Cell){
        super(color,cell);
        this.logo = color === Colors.BLACK ? blacklogo : whitelogo;
        this.name = FIguresNames.ROOK;
    }
    canMove(target: Cell): boolean {
        if(!super.canMove(target))
            return false;
            if(this.cell.isEmptyHorizontal(target))
                return true
            if(this.cell.isEmptyVertical(target))
                return true
        return false
    }
}