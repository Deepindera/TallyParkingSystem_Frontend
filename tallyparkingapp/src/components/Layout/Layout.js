import React from 'react';
import Aux from '../../hoc/Aux';
import TopSection from '../Layout/TopSection/TopSection';
const layout = (props) => (
    <Aux>
        <TopSection></TopSection>
        <main>
        {props.children}
        </main>
    </Aux>
);

export default layout;