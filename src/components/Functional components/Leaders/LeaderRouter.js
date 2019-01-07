import React , {Component} from 'react'
import LeaderComponent from './LeaderComponent'


export const LeaderRouter= ({leaders}) => {
    return leaders.map((leader) => <LeaderComponent leader ={leader}/>);
}


