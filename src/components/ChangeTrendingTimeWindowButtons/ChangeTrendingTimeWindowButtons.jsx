import PropTypes from 'prop-types';
import {
  ButtonList,
  ButtonListItem,
  ChangePeriodBtn,
} from './ChangeTrendingTimeWindowButtons.styled';

export const trendingTimeWindow = {
  day: {
    value: 'day',
    title: 'Trending today',
  },
  week: {
    value: 'week',
    title: 'Trending this week',
  },
};

export const ChangeTrendingTimeWindowButtons = ({
  timeWindow = trendingTimeWindow.day.value,
  changeTimeWindow: changeTrendingTimeWindow,
}) => {
  return (
    <ButtonList>
      <ButtonListItem>
        <ChangePeriodBtn
          type="button"
          name={trendingTimeWindow.day.value}
          className={
            timeWindow === trendingTimeWindow.day.value ? 'active' : ''
          }
          onClick={evt => changeTrendingTimeWindow(evt.target.name)}
        >
          {trendingTimeWindow.day.title}
        </ChangePeriodBtn>
      </ButtonListItem>

      <ButtonListItem>
        <ChangePeriodBtn
          type="button"
          name={trendingTimeWindow.week.value}
          className={
            timeWindow === trendingTimeWindow.week.value ? 'active' : ''
          }
          onClick={evt => changeTrendingTimeWindow(evt.target.name)}
        >
          {trendingTimeWindow.week.title}
        </ChangePeriodBtn>
      </ButtonListItem>
    </ButtonList>
  );
};

ChangeTrendingTimeWindowButtons.propTypes = {
  timeWindow: PropTypes.string.isRequired,
  changeTimeWindow: PropTypes.func.isRequired,
};
