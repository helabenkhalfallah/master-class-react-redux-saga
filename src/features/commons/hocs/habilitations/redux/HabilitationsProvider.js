const HabilitationsFragment = (state) => ({
  habilitationsLoading: state?.Habilitations?.habilitationsLoading,
  habilitationsError: state?.Habilitations?.habilitationsError,
  habilitations: state?.Habilitations?.habilitations,
});

const HabilitationsProvider = {
  HabilitationsFragment,
};

export default HabilitationsProvider;
