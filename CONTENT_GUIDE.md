# Content Update Guide

This guide explains how to manage content for your portfolio.

## 📝 Blog Posts

Your blog is powered by **Astro Content Collections**. To add a new post, you simply create a Markdown file.

1.  **Create a File**: Create a new file in `src/content/blog/`. The filename will be the URL slug (e.g., `my-new-post.md` becomes `/blog/my-new-post`).
2.  **Add Frontmatter**: At the top of the file, add the required metadata:

```markdown
---
title: 'My New Post'
description: 'A short summary of the post...'
pubDate: 'Jan 1 2025'
---

Write your content here using standard Markdown!
```

3.  **Save**: The site will update automatically.

## 🎨 Projects

Currently, the Projects page is built using standard Astro components.

1.  **Edit the File**: Open `src/pages/projects.astro`.
2.  **Locate the Cards**: Find the `<div class="card-grid">` section.
3.  **Add a Project**: Copy an existing `<article>` block and update the content:

```html
<article class="card">
    <h3>Project Title</h3>
    <p>Project description goes here.</p>
    <a href="#">Link to project</a>
</article>
```

4.  **Save**: The changes will appear immediately.
