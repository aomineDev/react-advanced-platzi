import React, { useState, useEffect } from 'react'

import { Category } from '../Category'
import { LoadingDots } from '../shared/LoadingDots'

import { List, Item, LoaderWrapper } from './styles'

function useCategoriesData () {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    window.fetch('https://aomine-petgram-api.now.sh/categories')
      .then(res => res.json())
      .then(data => {
        setCategories(data)
        setLoading(false)
      })
  }, [])

  return { categories, loading }
}

export const ListOfCategories = () => {
  const { categories, loading } = useCategoriesData()
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
      {
        loading
          ? (
            <LoaderWrapper>
              <Category />
              <LoadingDots />
            </LoaderWrapper>
          )
          : categories.map(category => <Item key={category.id}><Category {...category} /></Item>)
      }
    </List>
  )

  return (
    <>
      {renderList()}
      {renderList(true, showCategories)}
    </>
  )
}
