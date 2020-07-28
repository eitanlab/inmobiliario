import React from 'react'
import Post from '../Post/Post'
import { Box } from '@material-ui/core'

const Postings = React.memo(props => {
    let postings = 'No se encontraron propiedades';
    console.log('render: ',props.onWishlist);
    if(props.postingList.length > 0) {
        postings = props.postingList.map(post => {
            return <Post 
                    key={post.id} 
                    onFavoriteClick={props.favoriteClicked}
                    onWishlist={props.onWishlist.includes(post.id)} 
                    {...post} />
        });
    }
    
    return (
        <Box>
            {postings}
        </Box>
    )
});

export default Postings;
