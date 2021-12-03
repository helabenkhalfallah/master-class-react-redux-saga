import React from 'react';
import Proptypes from 'prop-types';
import ReduxConnect from '../../../../core/redux/ReduxConnect';
import HabilitationsDispatcher from './redux/HabilitationsDispatcher';
import HabilitationsProvider from './redux/HabilitationsProvider';

const {
  HabilitationsFragment,
} = HabilitationsProvider;

const withHabilitations = () => (WrappedComponent) => {
    @ReduxConnect((state) => ({
      ...HabilitationsFragment(state),
    }), {
      ...HabilitationsDispatcher,
    })
  class HabilitationsComponent extends React.Component {
      static propTypes = {
        habilitations: Proptypes.bool,
        habilitationsLoading: Proptypes.bool,
        habilitationsError: Proptypes.string,
        requestHabilitations: Proptypes.func,
      };

      static defaultProps = {
        habilitations: false,
        habilitationsLoading: false,
        habilitationsError: null,
        requestHabilitations: null,
      };

      componentDidMount() {
        const {
          requestHabilitations,
        } = this.props;
        requestHabilitations();
      }

      render() {
        const {
          habilitationsLoading,
          habilitationsError,
          habilitations,
        } = this.props;
        const hasHabilitations = (!habilitationsError && habilitations === true);
        return (
          <>
            {habilitationsLoading
              ? (<div>Loading</div>) : (
                <>
                  {hasHabilitations ? (
                    <WrappedComponent
                      {...this.props}
                      habilitations={habilitations}
                    />
                  ) : <div>Vous n etes pas habilités</div>}
                </>
              )}
          </>
        );
      }
    }

    return HabilitationsComponent;
};

export default withHabilitations;
