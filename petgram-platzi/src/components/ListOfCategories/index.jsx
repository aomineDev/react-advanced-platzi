import React, { useState, useEffect } from 'react'

import { Category } from '../Category'

import { List, Item } from './styles'

export const ListOfCategoriesComponent = ({ categories }) => {
  const [showCategories, setShowCategories] = useState(false)

  useEffect(() => {
    const onScroll = e => {
      const newShowCategories = window.scrollY > 200
      showCategories !== newShowCategories && setShowCategories(newShowCategories)
    }

    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  }, [showCategories])

  const renderList = (fixed, fadeIn) => (
    <List fixed={fixed} fadeIn={fadeIn}>
      {categories.map(category => (
        <Item key={category.id}>
          <Category {...category} path={`/pet/${category.id}`} />
        </Item>
      ))}
    </List>
  )

  return (
    <>
      {renderList()}
      {renderList(true, showCategories)}
    </>
  )
}
