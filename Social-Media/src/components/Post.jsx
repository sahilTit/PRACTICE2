import { MdDelete } from "react-icons/md";
const Post = ({ post }) => {
  return <div className="card  post-card" style={{ width: "30rem" }}>
    <div className="card-body">
      <h5 className="card-title ">{post.title}
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          <MdDelete />
          <span className="visually-hidden">unread messages</span>
        </span>

      </h5>
      <p className="card-text">{post.body}</p>
      {post.tags.map((tag) => (
        <span className="badge text-bg-primary hashtag">#{tag}</span>
      ))}
      <div className="alert alert-success" role="alert">
        A simple success alert—check it out!
      </div>
    </div>
  </div>
}
export default Post;