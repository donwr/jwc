import s from './filter-button.module.scss'

export default function FilterButton({ label, onClick, isSelected }) {
  return (
    <button
      className={`${s.filterButton} ${isSelected ? s.selected : ''}`}
      onClick={onClick}
    >
      {label}
    </button>
  )
}
