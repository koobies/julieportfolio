

## Plan: YouTube Thumbnails + Video Detail Pages

### What this does
1. **Auto-generate thumbnails from YouTube URLs** — Instead of local placeholder images, each project card will display the YouTube video's thumbnail image automatically (using `https://img.youtube.com/vi/{VIDEO_ID}/maxresdefault.jpg`).

2. **Project detail pages with embedded video** — Clicking a project card navigates to `/project/{slug}`, which shows the YouTube video embedded in a player along with the project title and details.

### Technical steps

**1. Create a `ProjectDetail.tsx` page**
- New route component at `src/pages/ProjectDetail.tsx`
- Uses the `slug` URL param to find the matching project
- Embeds the YouTube video via an `<iframe>` with `aspect-video` styling
- Shows project title, year, category below/above the video
- Back button to return to the homepage

**2. Add the route in `App.tsx`**
- Add `<Route path="/project/:slug" element={<ProjectDetail />} />`

**3. Extract YouTube thumbnail helper**
- Create a small utility function `getYouTubeThumbnail(url: string)` that extracts the video ID and returns the `maxresdefault.jpg` URL
- Use this in `ProjectCard` as the image source when a `youtubeUrl` is present, falling back to the provided `image` prop otherwise

**4. Update `ProjectCard.tsx`**
- Import the thumbnail helper
- Accept `youtubeUrl` as an optional prop
- When `youtubeUrl` exists, use the YouTube thumbnail instead of the local image

**5. Update `Index.tsx`**
- Pass `youtubeUrl` through to `ProjectCard`
- For "Free Room" and "REalize" (which don't have YouTube URLs yet), the existing local images will still display

### Result
- Projects with YouTube links automatically show the real video thumbnail
- Clicking any project card opens a detail page with the embedded video player
- No need to manually download or replace images

