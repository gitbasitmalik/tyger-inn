import { useState } from "react";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

const ReviewSection = () => {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({ name: "", rating: 5, comment: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newReview.name && newReview.comment) {
      setReviews([newReview, ...reviews]);
      setNewReview({ name: "", rating: 5, comment: "" });
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6  shadow-md rounded-lg mt-8">
      <h2 className="text-xl font-semibold text-purple-500 mb-4">Customer Reviews</h2>
      <form onSubmit={handleSubmit} className="mb-6">
        <Input 
          type="text" 
          placeholder="Your Name" 
          value={newReview.name} 
          onChange={(e) => setNewReview({ ...newReview, name: e.target.value })} 
          required 
          className="border-purple-500 focus:ring-purple-500"
        />
        <div className="flex items-center my-3">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className={`h-6 w-6 cursor-pointer ${newReview.rating >= star ? "text-purple-500" : "text-gray-300"}`}
              onClick={() => setNewReview({ ...newReview, rating: star })}
            />
          ))}
        </div>
        <Textarea 
          placeholder="Write your review..." 
          value={newReview.comment} 
          onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })} 
          required 
          className="border-purple-500 focus:ring-purple-500"
        />
        <Button type="submit" className="mt-4 w-full bg-purple-600 hover:bg-purple-700 text-white">Submit Review</Button>
      </form>
      <div className="space-y-4">
        {reviews.map((review, index) => (
          <div key={index} className="border border-purple-300 p-4 rounded-md shadow-sm bg-white">
            <h3 className="font-semibold text-purple-700">{review.name}</h3>
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className={`h-5 w-5 ${review.rating >= star ? "text-purple-500" : "text-gray-300"}`} />
              ))}
            </div>
            <p className="text-gray-700 mt-2">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;
