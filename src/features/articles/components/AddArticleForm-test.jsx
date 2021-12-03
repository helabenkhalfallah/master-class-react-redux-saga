import React from 'react';
import { mount, } from 'enzyme';
import { expect, } from 'chai';
import AddArticleForm from './AddArticleForm';

describe('Test Suite - ArticlesList', () => {
  it('It should render loading', () => {
    const wrapper = mount(
      <AddArticleForm
        onSubmitForm={jest.fn()}
        onCancelForm={jest.fn()}
      />
    );

    // console.log(wrapper.debug());

    // simulate onchange articleTitle
    expect(wrapper
      .find('Input')
      .at(0)
      .props()
      .value).to.equal('');
    expect(wrapper
      .find('Input')
      .at(0)
      .simulate('change', {
        target: {
          value: "Here's 5 Car-Shaped Whistles ",
        },
      }));
    expect(wrapper
      .find('Input')
      .at(0)
      .props()
      .value).to.equal("Here's 5 Car-Shaped Whistles ");
  });
});
