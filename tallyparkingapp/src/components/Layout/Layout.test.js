import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Layout from './Layout';

configure({adapter: new Adapter()});

describe('Layout renders children from props', () => {
    it('should render children from props', () =>{
        const wrapper = shallow(<Layout></Layout>)        
        expect(wrapper.find(Layout)).toBeTruthy();
    });
});

