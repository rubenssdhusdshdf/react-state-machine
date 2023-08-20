import React from 'react';
import { useMachine } from '@xstate/react';
import bookingMachine from '../Machines/bookingMachine';

export const BaseLayout = ()=> {
    const [state,send] = useMachine(bookingMachine)

    console.log('state machine', state)
    console.log('matches(initial): ', state.matches('initial')) // true 
    console.log('matches(tickets): ', state.matches('tickets')) // false 
    console.log('can(START): ', state.can('START')) // true 
    console.log('can(FINISH): ', state.can('FINISH')) // false 

    return (
        <div>State Machine</div>
    )
}

