import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'
import { startOfISOWeek } from 'date-fns'
const { wikiLinkPlugin } = require('remark-wiki-link');
const gitDateExtractor = require('git-date-extractor');
//options.hrefTemplate((permalink) => `#/post/${permalink}`)

const postsDirectory = path.join(process.cwd(), 'posts')

export async function getSortedPostsData() {
  const stamps = await gitDateExtractor.getStamps({
    projectRootPath: postsDirectory
  });
  console.log(stamps["Torque.md"]["modified"])
  
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map(fileName => {
    // read md file
    const id = fileName.replace(/\.md$/, '')
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    //front-matter
    const matterResult = matter(fileContents)
    const lastModifiedDate = stamps[fileName]["modified"]*1000
    const stats = fs.statSync(fullPath)
    const date = lastModifiedDate
    let thisDate = new Date(lastModifiedDate)
    let dateString = JSON.stringify(thisDate)

    let size;
    size = "scrap"
    if (stats.size > 350){
      size = "short"
    }
    if (stats.size > 800){
      size = "medium"
    }
    if (stats.size > 8000){
      size = "long"
    }

    return {
      id,
      date,
      dateString,
      size,
      ...matterResult.data
    }
  })
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}
export function getAllPostIds() {
    const fileNames = fs.readdirSync(postsDirectory)

    // Returns an array that looks like this:
    // [
    //   {
    //     params: {
    //       id: 'ssg-ssr'
    //     }
    //   },
    //   {
    //     params: {
    //       id: 'pre-rendering'
    //     }
    //   }
    // ]
    //maps the actual file names to params.id
    return fileNames.map(fileName => {
    return {
        params: {
        id: fileName.replace(/\.md$/, '')
        }
    }
    })
}

//await in async
export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  const processedContent = await remark()
  .use(html)
  .use(wikiLinkPlugin)
  .process(matterResult.content)
  //our product (by applying remark)
  const contentHtml = processedContent.toString()

  // Combine the data with the id
  return {
    id,
    contentHtml,
    ...matterResult.data
  }
}