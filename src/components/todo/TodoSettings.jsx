import { FormControlLabel, Radio, RadioGroup } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import mapDispatchToProps from 'model/mapDispatchToProps';
import { getFilterCount } from 'model/selectors';
import { FILTERS } from 'utils/constants';

const TodoSettings = ({ actions, filterCount, filterOn }) => {
  const onFilterChange = (event, value) => actions.filterOn(value);
  return (
    <div>
      <h1>Settings</h1>
      <RadioGroup
        aria-label="filter"
        value={filterOn}
        onChange={onFilterChange}
      >
        <FormControlLabel
          value={FILTERS.ALL}
          control={<Radio color="primary" />}
          label={`All (${filterCount[FILTERS.ALL]})`}
        />
        <FormControlLabel
          value={FILTERS.COMPLETE}
          control={<Radio color="primary" />}
          label={`Complete (${filterCount[FILTERS.COMPLETE]})`}
        />
        <FormControlLabel
          value={FILTERS.REMAINING}
          control={<Radio color="primary" />}
          label={`Remaining (${filterCount[FILTERS.REMAINING]})`}
        />
      </RadioGroup>
    </div>
  );
};

TodoSettings.propTypes = {
  actions: PropTypes.object.isRequired,
  filterCount: PropTypes.object.isRequired,
  filterOn: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  filterCount: getFilterCount(state),
  filterOn: state.filterOn
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoSettings);
