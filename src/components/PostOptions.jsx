import React, { useState } from 'react';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import CachedIcon from '@mui/icons-material/Cached';
import FavoriteIcon from '@mui/icons-material/Favorite';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import IosShareIcon from '@mui/icons-material/IosShare';

const PostOptions = () => {
    const [likeCount, setLikeCount] = useState(0);
    const [repostCount, setRepostCount] = useState(0);
    const [commentCount, setCommentCount] = useState(0);
    const [bookmark, setBookmark] = useState(false);

    return (
        <div className='flex justify-between w-[107%] pt-6 ml-[-10px]' id='postOptions'>
            <div onClick={() => setCommentCount(commentCount + 1)}>
                <ModeCommentIcon className={`${commentCount ? "text-[#1a89d4]" : "text-[#808080]"}`} fontSize='small' />
                <span className={`${commentCount ? "text-white" : "text-[#808080]"}`}>{commentCount}</span>
            </div>
            <div onClick={() => setRepostCount(repostCount + 1)}>
                <CachedIcon className={`${repostCount ? "text-[#00b478]" : "text-[#808080]"}`} fontSize='small' />
                <span className={`${repostCount ? "text-white" : "text-[#808080]"}`}>{repostCount}</span>
            </div>
            <div onClick={() => setLikeCount(likeCount + 1)}>
                <FavoriteIcon className={`${likeCount ? "text-[#d91670]" : "text-[#808080]"}`}  fontSize='small' />
                <span className={`${likeCount ? "text-white" : "text-[#808080]"}`}>{likeCount}</span>
            </div>
            <div>
                <EqualizerIcon fontSize='small' />
                <span >100</span>
            </div>

            <div id='bookmarkDiv'>
                <div className='p-2' onClick={() => setBookmark(!bookmark)}>
                    {bookmark ? <BookmarkIcon className={`${bookmark ? "text-white" : "text-[#808080]"}`} fontSize='small' /> : <BookmarkBorderIcon fontSize='small' />}
                </div>
                <div className='p-2'>
                    <IosShareIcon fontSize='small' />
                </div>
            </div>
        </div>
    );
};

export default PostOptions;
