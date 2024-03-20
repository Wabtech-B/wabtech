import AddReviewForm from "../../../_components/reviews/add-review-form";

const AddReview = ({ params }: { params: { id: string } }) => {
  return (
    <div>
      <AddReviewForm templateId={params.id} />
    </div>
  );
};

export default AddReview;
