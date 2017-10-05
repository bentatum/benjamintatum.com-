
import Link from 'next/link'

export default ({ posts }) =>
  <div>
    {posts.map((post, key) =>
      <div key={key}>
        <Link href={`/blog?post=${post.slug}`} as={`/blog/${post.slug}`}>
          <a>
            {post.title}
          </a>
        </Link>
      </div>
    )}
  </div>
