import React, { useState } from 'react';
import ImageIcon from '@mui/icons-material/Image';
import GifBoxIcon from '@mui/icons-material/GifBox';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import UserIcon from '../assets/userIcon.png'

const PostForm = ({ addPost }) => {
    const [postText, setPostText] = useState('');

    const handleSubmit = () => {
        if (postText.trim()) {
            addPost(postText);
            setPostText('');
        }
    };

    return (
        <div className='flex flex-col items-start justify-center w-[100%] p-6 pt-[6rem] gap-9'>
            <div className='flex items-start justify-center gap-4 w-[100%]'>
                <img src={UserIcon} width={'40px'} alt="" />
                <input
                    value={postText}
                    onChange={(e) => setPostText(e.target.value)}
                    type="text"
                    placeholder="What is happening?!"
                    className='bg-black text-xl font-light text-white outline-none w-[calc(100%-40px)]'
                />
            </div>

            <div className='w-[calc(100%-65px)] flex flex-col items-start gap-2 ml-[55px]'>
                <div className='bg-[#181818] w-[100%] h-[1px]'></div>

                <div className='flex items-center justify-between w-[100%]'>
                    <div className='flex items-center justify-center' id='postComponents'>
                        <div>
                            <ImageIcon fontSize='medium' />
                        </div>
                        <div>
                            <GifBoxIcon fontSize='medium' />
                        </div>
                        <div>
                            <EmojiEmotionsIcon fontSize='medium' />
                        </div>
                        <div>
                            <LocationOnIcon fontSize='medium' />
                        </div>
                    </div>

                    <button
                        onClick={handleSubmit}
                        className={`bg-blue-500 transition-all hover:bg-blue-600 text-white w-[80px] font-semibold ${postText ? "opacity-100" : "opacity-50"} rounded-full h-[40px]`}
                    >
                        Post
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PostForm;
