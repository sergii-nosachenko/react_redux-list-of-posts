import { useAppSelector } from '../../redux/hooks';

import { Post } from '../Post/Post';

export const PostsList: React.FC = () => {
  const { posts } = useAppSelector(state => state.posts);

  return (
    <div data-cy="PostsList">
      <p className="title">Posts:</p>

      <table className="table is-fullwidth is-striped is-hoverable is-narrow">
        <thead>
          <tr className="has-background-link-light">
            <th>#</th>
            <th>Title</th>
            <th> </th>
          </tr>
        </thead>

        <tbody>
          {posts.map(post => (
            <Post post={post} key={post.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
};