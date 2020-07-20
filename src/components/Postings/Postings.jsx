import React from 'react'
import PropTypes from 'prop-types'
import Post from '../Post/Post'
import { Box } from '@material-ui/core'

const Postings = props => {
    let postings = 'No se encontraron propiedades';
    if(props.postingsList.length > 0) {
        postings = props.postingsList.map(post => {
            return <Post key={post.id} {...post} />
        });
    }
    
    return (
        <Box>
            {postings}
        </Box>
    )
}

Postings.propTypes = {

}

export default Postings
