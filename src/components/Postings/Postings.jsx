import React from 'react'
import PropTypes from 'prop-types'
import Post from '../Post/Post'
import { Box } from '@material-ui/core'

const Properties = props => {
    return (
        <Box>
            <Post />
            <Post />
            <Post />
        </Box>
    )
}

Properties.propTypes = {

}

export default Properties
