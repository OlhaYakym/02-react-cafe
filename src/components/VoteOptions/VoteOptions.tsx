import type { VoteType } from '../../types/votes'; // импортируем типы голосов
import css from './VoteOptions.module.css'; // импортируем стили
interface VoteOptionsProps {
  //типизируем пропсы
  onVote: (type: VoteType) => void; //нажатие на кнопку голосования это функция принимает тип голоса ничего не возвращает
  onReset: () => void; // нажатие на кнопку сброса это функция которая ничего не принимает и ничего не возвращает
  canReset: boolean; // пропс с булевым значением
}
export default function VoteOptions({
  //создается и экспортируется компонент
  onVote, //принимает пропсы которые типизированы
  onReset,
  canReset = true,
}: VoteOptionsProps) {
  return (
    //возвращат разметку
    <div className={css.container}>
      {/* Кнопка для голосования "Good", вызывает onVote с аргументом 'good' */}
      <button className={css.button} onClick={() => onVote('good')}>
        Good
      </button>
      {/* Кнопка для голосования "Neutral", вызывает onVote с аргументом 'neutral' */}
      <button className={css.button} onClick={() => onVote('neutral')}>
        Neutral
      </button>
      {/* Кнопка для голосования "Bad", вызывает onVote с аргументом 'bad' */}
      <button className={css.button} onClick={() => onVote('bad')}>
        Bad
      </button>
      {/* Если canReset true отобразится кнопка, если false , то нет */}
      {canReset && (
        <button className={`${css.button} ${css.reset}`} onClick={onReset}>
          Reset
        </button>
      )}
    </div>
  );
}
