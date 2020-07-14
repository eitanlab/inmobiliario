import React from 'react'
import PropTypes from 'prop-types'
import Post from '../Post/Post'
import { Box } from '@material-ui/core'

const Postings = props => {
    let postings = 'No se encontraron propiedades';
    if(props.postingsList.length > 0) {
        //console.log('Los postings: ', props.postingsList)
        postings = props.postingsList.map(post => {
            return <Post key={post.posting_id} {...post} />
        });
        //console.log('Los postings: ', postings)
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
