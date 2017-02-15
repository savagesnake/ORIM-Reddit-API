require('babel-register')({
        "presets": ["es2015"]
});
import 'jsdom-global/register';
import React from 'react';
import sinon from 'sinon';
import expect from 'expect';
import {mount, shallow} from 'enzyme';
import Header from '../components/Header'

describe("Component: Header",()=>{

  it('calls componentDidMount', () => {
      sinon.spy(Header.prototype, 'componentDidMount');
      const wrapper = mount(<Header />);
      expect(Header.prototype.componentDidMount.calledOnce).to.equal(true);
    });

})
