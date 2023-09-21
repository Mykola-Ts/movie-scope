import PropTypes from 'prop-types';
import {
  ButtonList,
  ButtonListItem,
  ChangePeriodBtn,
} from './ChangeTimeWindowButtons.styled';

export const ChangeTimeWindowButtons = ({
  timeWindow = '',
  chancheTimeWindow,
}) => {
  return (
    <ButtonList>
      <ButtonListItem>
        <ChangePeriodBtn
          type="button"
          name="day"
          onClick={evt => chancheTimeWindow(evt)}
        >
          Trending today
        </ChangePeriodBtn>
      </ButtonListItem>
      <ButtonListItem>
        <ChangePeriodBtn
          type="button"
          name="week"
          disabled={timeWindow === 'week'}
          onClick={evt => chancheTimeWindow(evt)}
        >
          Trending this week
        </ChangePeriodBtn>
      </ButtonListItem>
    </ButtonList>
  );
};

ChangeTimeWindowButtons.propTypes = {
  timeWindow: PropTypes.string.isRequired,
  chancheTimeWindow: PropTypes.func.isRequired,
};
