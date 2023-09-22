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
          className={timeWindow === 'day' ? 'active' : ''}
          onClick={evt => chancheTimeWindow(evt.target.name)}
        >
          Trending today
        </ChangePeriodBtn>
      </ButtonListItem>
      <ButtonListItem>
        <ChangePeriodBtn
          type="button"
          name="week"
          className={timeWindow === 'week' ? 'active' : ''}
          onClick={evt => chancheTimeWindow(evt.target.name)}
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
