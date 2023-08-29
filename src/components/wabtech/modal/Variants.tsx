import Modal from "./Modal";

const Variants = () => {
  return (
    <>
      <div className="flex items-center gap-3 flex-wrap">
        <Modal
          title="Modal Title"
          variant="small"
          openTrigger={
            <button className="px-6 py-2 rounded-md bg-[#0bab7c] text-white hover:bg-[#0bab7c]/80 mt-3">
              Small
            </button>
          }
        >
          <h2 className="text-2xl">Modal Content</h2>
          <p>This is the content of the modal.</p>
        </Modal>
        <Modal
          title="Modal Title"
          openTrigger={
            <button className="px-6 py-2 rounded-md bg-[#0bab7c] text-white hover:bg-[#0bab7c]/80 mt-3">
              Medium
            </button>
          }
        >
          <h2 className="text-2xl">Modal Content</h2>
          <p>This is the content of the modal.</p>
        </Modal>
        <Modal
          title="Modal Title"
          variant="large"
          openTrigger={
            <button className="px-6 py-2 rounded-md bg-[#0bab7c] text-white hover:bg-[#0bab7c]/80 mt-3">
              Large
            </button>
          }
        >
          <h2 className="text-2xl">Modal Content</h2>
          <p>This is the content of the modal.</p>
        </Modal>
        <Modal
          title="Modal Title"
          variant="full"
          openTrigger={
            <button className="px-6 py-2 rounded-md bg-[#0bab7c] text-white hover:bg-[#0bab7c]/80 mt-3">
              Full
            </button>
          }
        >
          <h2 className="text-2xl">Modal Content</h2>
          <p>This is the content of the modal.</p>
        </Modal>
        <Modal
          title="Modal Title"
          variant="scrollable"
          openTrigger={
            <button className="px-6 py-2 rounded-md bg-[#0bab7c] text-white hover:bg-[#0bab7c]/80 mt-3">
              Scrollable
            </button>
          }
        >
          <h2 className="text-2xl">Modal Content</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam odit
            nihil repudiandae qui, dolores ad consequuntur! Tenetur ea
            consectetur magnam possimus, id quam. Minus incidunt rem quis non!
            Deserunt commodi nam, voluptatibus, earum vero aliquid similique
            voluptatum, totam ipsum perspiciatis inventore incidunt? Quisquam ab
            suscipit magni eos deleniti placeat quia voluptates eum odit, ea,
            dolor omnis dicta explicabo numquam! Minima eum itaque vero hic
            nostrum, eos dolore id debitis neque repudiandae animi suscipit
            aliquam quia nulla error ut, nisi in, saepe sed minus nihil! Minima
            error, a quaerat necessitatibus labore optio quos! Reiciendis velit
            maiores repudiandae rerum dolorem fugit, asperiores laborum sapiente
            suscipit aperiam nemo earum in sequi quo error ullam officia nisi
            accusamus ut cum! Nihil reiciendis, velit amet facilis nulla, beatae
            dolores voluptatum, illum magni animi ad quidem quisquam incidunt
            rem obcaecati expedita numquam excepturi aliquid ducimus voluptas!
            At eius sequi aspernatur suscipit quod, voluptas laboriosam
            reprehenderit natus quibusdam nesciunt voluptatem sed cupiditate,
            recusandae quam cumque optio eveniet placeat numquam. Sint possimus
            maxime praesentium iure nobis laborum ipsum voluptas fuga animi
            harum voluptatem repudiandae labore temporibus distinctio minima
            iusto, doloribus corrupti aliquid dolores totam dolore hic
            asperiores. Sequi delectus officia qui odio nesciunt minus quidem
            nisi laboriosam cupiditate..
          </p>
        </Modal>
      </div>
    </>
  );
};

export default Variants;
