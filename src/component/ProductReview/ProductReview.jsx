import { useState } from 'react';
import Rating from '@mui/material/Rating';
import TextField from '@mui/material/TextField';

const ProductReview = () => {
    const [reviews, setReviews] = useState([
        {
            id: 1,
            name: "Ganesh",
            date: "30 Jul 2025",
            rating: 4.5,
            message: "Great product! Fast delivery and excellent quality.",
            img: "https://randomuser.me/api/portraits/men/32.jpg"
        },
        {
            id: 2,
            name: "Anjali",
            date: "30 Jul 2025",
            rating: 5,
            message: "Highly recommended. Super value for money!",
            img: "https://randomuser.me/api/portraits/women/44.jpg"
        }
    ]);

    const [newReview, setNewReview] = useState({
        name: '',
        rating: 0,
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!newReview.name || !newReview.message || newReview.rating === 0) return;

        const today = new Date().toLocaleDateString('en-IN', {
            day: '2-digit',
            month: 'short',
            year: 'numeric'
        });

        setReviews([
            ...reviews,
            {
                id: reviews.length + 1,
                name: newReview.name,
                date: today,
                rating: newReview.rating,
                message: newReview.message,
                img: "https://randomuser.me/api/portraits/lego/1.jpg"
            }
        ]);
        setNewReview({ name: '', rating: 0, message: '' });
    };

    return (
        <div className='shadow-[0_35px_35px_rgba(0,0,0,0.1)] w-full p-5 rounded-md bg-white'>
            <h1 className='font-[500] text-2xl text-[#3E3E3E] mb-6'>Customer questions & answers</h1>

            {/* Scrollable Review List */}
            <div className='w-full max-h-[300px] sm:max-h-[400px] overflow-y-auto bg-gray-50 rounded-lg p-4 mb-6'>
                {reviews.map((review) => (
                    <div className='review w-full mb-4' key={review.id}>
                        <div className='info flex gap-4'>
                            <div className='img w-[60px] h-[60px] overflow-hidden rounded-full'>
                                <img src={review.img} alt={review.name} className='w-full h-full object-cover' />
                            </div>
                            <div className='text-[16px]'>
                                <h2 className='font-semibold'>{review.name}</h2>
                                <p className='text-sm text-gray-500 mb-1'>{review.date}</p>
                                <Rating name="read-only" value={review.rating} precision={0.5} readOnly />
                                <p className='mt-2 text-[#3E3E3E]'>{review.message}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Add Review Form */}
            <form onSubmit={handleSubmit} className='bg-white p-4 rounded-lg shadow-sm border border-gray-200'>
                <h2 className='text-xl font-semibold mb-3'>Add a review</h2>
                <input
                    type="text"
                    placeholder="Your Name"
                    value={newReview.name}
                    onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                    className='w-full border border-gray-300 rounded px-3 py-2 mb-3 outline-none focus:ring-2 focus:ring-[#FF5252]'
                />
                <TextField
                    id="outlined-multiline-flexible"
                    label="Multiline"
                    multiline
                    maxRows={4}
                    placeholder="Write your review..."
                    value={newReview.message}
                    onChange={(e) => setNewReview({ ...newReview, message: e.target.value })}
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: 'gray', // default
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: '#FF5252',
                            },
                        },
                        '& label.Mui-focused': {
                            color: '#FF5252',
                        },
                    }}
                    className='w-full  '

                />
                <div className=' mt-3 mb-4'>
                    <span className='block mb-1 font-medium'>Your Rating:</span>
                    <Rating
                        name="user-rating"
                        value={newReview.rating}
                        precision={0.5}
                        onChange={(e, newValue) => setNewReview({ ...newReview, rating: newValue })}
                    />
                </div>
                <button
                    type="submit"
                    className='bg-[#FF5252] text-white px-6 py-2 rounded hover:bg-[#e04848] transition'
                >
                    Submit Review
                </button>
            </form>
        </div>
    );
};

export default ProductReview;
