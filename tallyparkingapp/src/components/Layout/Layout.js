import React from 'react';
import Wrapper from '../../hoc/Wrapper';
import TopSection from '../Layout/TopSection/TopSection';
const layout = (props) => (
    <Wrapper>
        <TopSection></TopSection>
        <main>
        {props.children}
        </main>
    </Wrapper>
);

export default layout;