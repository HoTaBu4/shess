import React from 'react'
import { Figure, FIguresNames } from './figure';
import { Colors } from '../Colors';
import { Cell } from '../cell';

const blacklogo = require('../../../assets/black-king.png')
const whitelogo = require('../../../assets/white-king.png')

export class King extends Figure{
    constructor(color:Colors,cell:Cell){
        super(color,cell);
        this.logo = color === Colors.BLACK ? blacklogo : whitelogo;
        this.name = FIguresNames.KING;
    }
    canMove(target: Cell): boolean {
        if(!super.canMove(target))
            return false;
        return true
    }
}