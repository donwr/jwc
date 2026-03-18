'use client'

import { Dropdown } from 'components/dropdown'
import { AddToCart } from 'libs/shopify/cart/add-to-cart'
import { useState } from 'react'
import s from './size-and-buy.module.scss'

export const SizeAndBuy = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState(null)
  const [selectedColor, setSelectedColor] = useState(null)
  const [selectedVariant, setSelectedVariant] = useState(null)

  // Check if the product has Size and Color options
  const sizeOption = product.options.find((option) => option.name === 'Size')
  const colorOption = product.options.find((option) => option.name === 'Color')
  const handleOptionSelection = (name, value) => {
    // Update selectedSize or selectedColor based on the name
    if (name === 'Size') {
      setSelectedSize(value)
    } else if (name === 'Color') {
      setSelectedColor(value)
    }

    // Logic to set the variant based on selected options
    const size = name === 'Size' ? value : selectedSize
    const color = name === 'Color' ? value : selectedColor

    // If both size and color are required (i.e. both options exist)
    if (sizeOption && colorOption) {
      if (size && color) {
        // Find the matching variant
        const variant = product?.variants.find((variant) =>
          variant.selectedOptions.every(
            (option) =>
              (option.name === 'Size' && option.value === size) ||
              (option.name === 'Color' && option.value === color),
          ),
        )
        setSelectedVariant(variant)
      }
    } else if (sizeOption) {
      // If only size option exists, set the variant based on size
      const variant = product?.variants.find((variant) =>
        variant.selectedOptions.some(
          (option) => option.name === 'Size' && option.value === size,
        ),
      )
      setSelectedVariant(variant)
    } else if (colorOption) {
      // If only color option exists, set the variant based on color
      const variant = product?.variants.find((variant) =>
        variant.selectedOptions.some(
          (option) => option.name === 'Color' && option.value === color,
        ),
      )
      setSelectedVariant(variant)
    }
  }

  return (
    <>
      {sizeOption && (
        <Dropdown
          className={s.size}
          placeholder="Select Size"
          options={sizeOption.values}
          onClick={(value) => handleOptionSelection('Size', value)}
        />
      )}
      {colorOption && (
        <Dropdown
          className={s.color}
          placeholder="Select Color"
          options={colorOption.values}
          onClick={(value) => handleOptionSelection('Color', value)}
        />
      )}
      <AddToCart variant={selectedVariant} className={s.add} />
    </>
  )
}
