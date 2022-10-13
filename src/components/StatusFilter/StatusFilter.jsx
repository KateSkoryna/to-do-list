import { Button } from 'components/Button/Button';
import css from './StatusFilter.module.css';
import { useSelector } from 'react-redux';
import { statusFilters } from '../../redux/constans';
import { getStatusFilter } from '../../redux/selectors';

// export const StatusFilter = () => {
//   return (
//     <div className={css.wrapper}>
//       <Button>All</Button>
//       <Button>Active</Button>
//       <Button>Completed</Button>
//     </div>
//   );
// };

export const StatusFilter = () => {
  // Получаем значение фильтра из состояния Redux
  const filter = useSelector(getStatusFilter);
  return (
    <div className={css.wrapper}>
      <Button selected={filter === statusFilters.all}>All</Button>
      <Button selected={filter === statusFilters.active}>Active</Button>
      <Button selected={filter === statusFilters.completed}>Completed</Button>
    </div>
  );
};
