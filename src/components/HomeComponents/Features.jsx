import { FaPen, FaUsers, FaComments } from "react-icons/fa";

function Features() {
  return (
    <div className="container px-4 py-5">
      <h2 className="pb-2 border-bottom text-center text-md-start">
        Why Use Social?
      </h2>

      <div className="row g-4 py-4 row-cols-1 row-cols-md-2 row-cols-lg-3">
        {/* Feature 1 */}
        <div className="col">
          <div className="feature h-100 p-3 border rounded shadow-sm text-center text-md-start">
            <div className="mb-3 fs-2 text-primary">
              <FaPen />
            </div>

            <h3 className="fs-4">Create & Share Posts</h3>

            <p>
              Express your thoughts and ideas easily. Write posts, share your
              opinions, and let your voice reach others instantly.
            </p>

            <a href="#" className="text-decoration-none">
              Start Writing →
            </a>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="col">
          <div className="feature h-100 p-3 border rounded shadow-sm text-center text-md-start">
            <div className="mb-3 fs-2 text-primary">
              <FaUsers />
            </div>

            <h3 className="fs-4">Connect with People</h3>

            <p>
              Discover posts from different users, explore ideas, and be part of
              a growing community of creators.
            </p>

            <a href="#" className="text-decoration-none">
              Explore Community →
            </a>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="col">
          <div className="feature h-100 p-3 border rounded shadow-sm text-center text-md-start">
            <div className="mb-3 fs-2 text-primary">
              <FaComments />
            </div>

            <h3 className="fs-4">Engage & Interact</h3>

            <p>
              Interact with posts, share feedback, and join meaningful
              conversations that inspire and inform.
            </p>

            <a href="#" className="text-decoration-none">
              Join Discussion →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
