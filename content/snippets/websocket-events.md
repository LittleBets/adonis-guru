---
title: "Websocket Events"
description: 'Adonis has some websocket events.'
image: ''
tags: 'snippet'
author: 'Ashok'
---

```typescript
// start/channels.ts
Broadcast.channel('post-updates.:uuid', async ({ auth, id }) => {
    const post = await Post.find(id)
})

// app/Listeners/PostListener.ts
export default class PostListener {
    public async handleStatusUpdate({ postId: number }) {
        const post = await  Post.find(postId)
        const payload = post.serialize()
        await Broadcaster.broadcast('status-update', payload, 'post-updates.${postId}')
    }
}

// app.js
Echo.private('post-updates.${this.post.id}')
    .listen('.status-update', (e) => console.log(e))
```
It uses Laravel Echo on the frontend but the integration is seamless.

