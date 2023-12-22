import React from 'react'
import {Button} from '@mantine/core'
function AmtButton({amt}) {
  return (
    <div>
       <Button style={{backgroundColor: "white" , color : "black",boxShadow : "rgba(30, 20, 53, 0.15) 0px 2px 2px -1px, rgba(0, 0, 0, 0.1) 0px 1px 3px -1px"}}>${amt}</Button>
    </div>
  )
}

export default AmtButton
