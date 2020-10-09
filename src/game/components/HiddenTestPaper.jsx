import React from 'react'
import { Box } from '@material-ui/core'

const HiddenTestPaper = () => {
  return (
    <Box
      className={'test-paper'}
      padding={2}
      // maxWidth={300}
      style={{
        // backgroundColor: '#ddd'
      }}
    >
      {'點擊Start 或 從頭開始出題'}
    </Box>
  )
}

export default HiddenTestPaper