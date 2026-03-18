'use client'
import { useState } from 'react'
import FilterButton from '../buttons/filter-button'
import s from './filters.module.scss'

export default function Filters({ options, onFilterChange }) {
  const [selectedFilters, setSelectedFilters] = useState([])

  const toggleFilter = (option) => {
    const isSelected = selectedFilters.includes(option)
    const newFilters = isSelected
      ? selectedFilters.filter((item) => item !== option)
      : [...selectedFilters, option]

    setSelectedFilters(newFilters)
    onFilterChange(newFilters)
  }

  return (
    <div className={s.filters}>
      {options.map((option) => (
        <FilterButton
          key={option}
          label={option}
          onClick={() => toggleFilter(option)}
          isSelected={selectedFilters.includes(option)}
        />
      ))}
    </div>
  )
}
