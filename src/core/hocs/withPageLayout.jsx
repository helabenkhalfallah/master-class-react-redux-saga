import React from 'react';
import {
  Layout,
  Typography,
} from 'antd';

const {
  Header,
  Sider,
  Footer,
  Content,
} = Layout;

const {
  Title,
} = Typography;

const withPageLayout = () => (WrappedComponent) => {
  class PageLayoutComponent extends React.Component {
    componentDidMount() {
      // appel http récupération utilisateur par exemple
    }

    render() {
      return (
        <>
          <Header
            style={{
              background: '#78E1F3',
              width: '100%',
              height: '10vh',
            }}
          >
            <Title>
              Gestion des articles
            </Title>
          </Header>
          <Layout
            style={{
              background: '#ADCFF3',
              height: '80vh',
            }}
          >
            <Sider theme="light">
              Menu
            </Sider>
            <Content>
              <WrappedComponent />
            </Content>
          </Layout>
          <Footer>
            React - Redux - Saga ©
          </Footer>
        </>
      );
    }
  }
  return PageLayoutComponent;
};

export default withPageLayout;
