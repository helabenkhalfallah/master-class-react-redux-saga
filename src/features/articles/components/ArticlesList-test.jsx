import React from 'react';
import { mount, } from 'enzyme';
import { expect, } from 'chai';
import ArticlesList from './ArticlesList';

const mockArticles = [
  {
    source: {
      id: null,
      name: 'Jalopnik',
    },
    author: 'Jason Torchinsky',
    title: "Here's 5 Car-Shaped Whistles Cooler Than That Tesla Cyberwhistle",
    description: 'Yesterday, Tesla did one of those things were they turn some stupid joke made by their reclusive CEO Elon Musk into A Thing that Teslaterians can be convinced to buy, like those absurdly overpriced satin shorts or that absurdly overpriced tequila. This time t…',
    url: 'https://jalopnik.com/heres-5-car-shaped-whistles-cooler-than-that-tesla-cybe-1848156233',
    urlToImage: 'https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/226c6b37434098c04ac7920e55ccb5b1.png',
    publishedAt: '2021-12-03T16:10:00Z',
    content: 'Yesterday, Tesla did one of those things were they turn some stupid joke made by their reclusive CEO Elon Musk into A Thing that Teslaterians can be convinced to buy, like those absurdly overpriced s… [+3269 chars]',
  },
  {
    source: {
      id: 'reuters',
      name: 'Reuters',
    },
    author: null,
    title: "Tesla seeks court approval of win in engineer's defamation case - Reuters",
    description: 'Tesla Inc <a href="https://www.reuters.com/companies/TSLA.O" target="_blank">(TSLA.O)</a> has asked a U.S. court to affirm its recent victory in an arbitration with a former engineer who claimed the automaker fired and defamed her for raising concerns about d…',
    url: 'https://www.reuters.com/business/autos-transportation/tesla-seeks-court-approval-win-engineers-defamation-case-2021-12-03/',
    urlToImage: 'https://www.reuters.com/resizer/mvVJy-LTxbyZM1QZwnzaWdb2n8U=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/DMUJ2Z7OEVMVRPOAJPA3FJT4YM.jpg',
    publishedAt: '2021-12-03T16:08:00Z',
    content: 'Dec 3 (Reuters) - Tesla Inc (TSLA.O) has asked a U.S. court to affirm its recent victory in an arbitration with a former engineer who claimed the automaker fired and defamed her for raising concerns … [+1576 chars]',
  },
  {
    source: {
      id: null,
      name: 'Yahoo Entertainment',
    },
    author: 'Daniel Wiessner',
    title: "Tesla seeks court approval of win in engineer's defamation case",
    description: 'Tesla Inc has asked a U.S. court to affirm its recent victory in an arbitration with a former engineer who claimed the automaker fired and defamed her for...',
    url: 'https://finance.yahoo.com/news/tesla-seeks-court-approval-win-160718543.html',
    urlToImage: 'https://s.yimg.com/uu/api/res/1.2/v1JGt4T92MSpxoyQx2uYVA--~B/aD01MzM7dz04MDA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/reuters-finance.com/8122aac24314e2b5cfb8cc8298815131',
    publishedAt: '2021-12-03T16:07:18Z',
    content: 'By Daniel Wiessner\r\n(Reuters) - Tesla Inc has asked a U.S. court to affirm its recent victory in an arbitration with a former engineer who claimed the automaker fired and defamed her for raising conc… [+1419 chars]',
  },
];

describe('Test Suite - ArticlesList', () => {
  it('It should render loading', () => {
    const wrapper = mount(
      <ArticlesList
        articlesLoading
        articles={null}
        articlesError={null}
      />
    );

    // console.log(wrapper.debug());

    // global structure
    expect(wrapper.find('List')).to.have.length(0);
    expect(wrapper.find('Alert')).to.have.length(0);
    expect(wrapper.find('Spin')).to.have.length(1);
  });

  it('It should render error', () => {
    const error = 'Une erreur technique c\'est produite, veuillez réessayez plus tard.';
    const wrapper = mount(
      <ArticlesList
        articlesLoading={false}
        articles={null}
        articlesError={error}
      />
    );
    expect(wrapper.find('List')).to.have.length(0);
    expect(wrapper.find('Alert')).to.have.length(1);
    expect(wrapper.find('Spin')).to.have.length(0);

    // check error message
    expect(wrapper
      .find('Alert')
      .props()
      .description).to.equal(error);
    expect(wrapper
      .find('Alert')
      .props()
      .message).to.equal('Chargement des articles');
    expect(wrapper
      .find('Alert')
      .props()
      .type).to.equal('error');
  });

  it('It should render an empty view', () => {
    const wrapper = mount(
      <ArticlesList
        articlesLoading={false}
        articles={null}
        articlesError={null}
      />
    );
    expect(wrapper.find('List')).to.have.length(0);
    expect(wrapper.find('Alert')).to.have.length(1);
    expect(wrapper.find('Spin')).to.have.length(0);

    // check error message
    expect(wrapper
      .find('Alert')
      .props()
      .description).to.equal('Aucun article à afficher');
    expect(wrapper
      .find('Alert')
      .props()
      .message).to.equal('Chargement des articles');
    expect(wrapper
      .find('Alert')
      .props()
      .type).to.equal('info');
  });

  it('It shoudld render Articles List', () => {
    const wrapper = mount(
      <ArticlesList
        articlesLoading={false}
        articles={mockArticles}
        articlesError={null}
      />
    );

    // console.log(wrapper.debug());

    // global structure
    expect(wrapper.find('List')).to.have.length(1);

    // list
    expect(wrapper
      .find('List')
      .props()
      .dataSource).to.deep.equal(mockArticles);

    // items
    expect(wrapper.find('Meta')).to.have.length(3);

    // first item
    expect(wrapper
      .find('List')
      .children()
      .find('Avatar')
      .at(0)
      .props()
      .src).to.equal(mockArticles[0].urlToImage);
    expect(wrapper
      .find('List')
      .children()
      .find('h4')
      .at(0)
      .text()).to.equal(mockArticles[0].title);

    // second item
    expect(wrapper
      .find('List')
      .children()
      .find('Avatar')
      .at(1)
      .props()
      .src).to.equal(mockArticles[1].urlToImage);
    expect(wrapper
      .find('List')
      .children()
      .find('h4')
      .at(1)
      .text()).to.equal(mockArticles[1].title);

    // third item
    expect(wrapper
      .find('List')
      .children()
      .find('Avatar')
      .at(2)
      .props()
      .src).to.equal(mockArticles[2].urlToImage);
    expect(wrapper
      .find('List')
      .children()
      .find('h4')
      .at(2)
      .text()).to.equal(mockArticles[2].title);
  });
});
