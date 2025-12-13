import React from 'react'

const columnFiled = ({id,name,type,filterable,sortable}) => {
  return (
               {
                id: id,
                name: name,
                type: type,
                display: "basic",
                filterable: filterable,
                sortable: sortable,
                }
  )
}

export default columnFiled