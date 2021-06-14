import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

//interfaces are always objects
export interface Post {
  id: string & number
  data: {
    //optional
    title?: string
  }
  content: string
}

// types can optionally be an object
//used hre bc we're combining types
// export type PostList = Array<Post>
//Now Post can be either type
// export type Post = PostReg & PostImg & PostFail

const postsDirectory = path.join(process.cwd(), 'posts')

export function getSortedPostsData(): Array<Post> {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
    return {
      id,
      ...matterResult.data
    }
  })
  // Sort posts by date
  return allPostsData.sort(({ date: a }, { date: b }) => {
    if (a < b) {
      return 1
    } else if (a > b) {
      return -1
    } else {
      return 0
    }
  })
}