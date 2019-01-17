import React, { Component } from 'react';
import {COMMENTS} from '../shared/Comments';
import {LEADERS}from '../shared/Leaders';
import {PROMOTIONS} from '../shared/Promotions';
import {DISHES} from '../shared/dishes';


export const initialState = {
    comments :  COMMENTS,
    leaders :  LEADERS,
    promotions:  PROMOTIONS,
    dishes : DISHES
};

export const Reducer = (prevState = initialState, action ) => {
    return prevState;

};