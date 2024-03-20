"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

const AddReviewForm = ({ templateId }: { templateId: string }) => {
  const [rating, setRating] = useState("");
  const [review, setReview] = useState("");
  const [loading, setLoading] = useState(false);
  const user = useCurrentUser();
  const userId = user?.id!;

  console.log(userId);

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/templates/reviews`,
        {
          userId,
          templateId,
          review,
          rating: Number(rating),
        }
      );

      toast.success(res.data);
      setRating("");
      setReview("");
    } catch (error: any) {
      console.log(error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-4 border p-2 rounded-lg">
      <h1 className="text-xl font-bold">Add Review</h1>
      <p>How was the template? Any comments</p>
      <div className="mt-4 flex-center-between">
        <h1 className="text-xl font-semibold">Rating</h1>
        <div className="flex-align-center gap-x-3">
          <Input
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            step={0.1}
            type="number"
            max={5}
            placeholder="Rating"
          />
        </div>
      </div>
      <div className="mt-4">
        <Textarea
          rows={4}
          placeholder="Write your detailed review here..."
          value={review}
          onChange={(e) => setReview(e.target.value)}
        ></Textarea>
        <div className="flex-align-center gap-x-4 justify-end">
          <Button className="mt-3" onClick={handleSubmit} disabled={loading}>
            {loading ? "Sending..." : "Submit"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddReviewForm;
