import { useSelector} from "react-redux";
import { selectPostIds, getPostsStatus, getPostsError } from './postSlice'
import PostsExcerpt from '../posts/PostsExcerpt'



const PostsList = () => {
  
  const orderedPostsIds = useSelector(selectPostIds);
  const postStatus = useSelector(getPostsStatus);
  const error = useSelector(getPostsError);

  let content;
  if (postStatus === "loading") {
    content = <p>Loading...</p>;
  } else if (postStatus === "succeeded") {    
    content = orderedPostsIds.map((postId) => (
      <PostsExcerpt key={postId} post={postId}  postId={postId}/>
    ));
  } else if (postStatus === "failed") {
    content = <p>{error}</p>;
  }

  return <section>{content}</section>;
};
export default PostsList;
