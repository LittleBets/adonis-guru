---
title: "Expressive Validators"
description: 'Adonis has some expressive validators.'
image: ''
tags: 'snippet'
author: 'Ashok'
---

```typescript
public async updatePost({ request, auth: { user }, params: { id } }) {
// Use Case: A user can update either both the title and the description
// or only one of the fields. However, the title should remain unique
// **for the user** in either case.
    const postSchema = {
        description: scema.string(),
        title: schema.string({}, {
            rules.unique ({
                table: 'posts',
                column: 'title',
                //  👇 make sure the title is unique among user's posts ...
                where: { author_id: user?.id },
                //  👇 ... but ignore the check for the post being updated
                whereNot: { id },
            }),
        }),
    }
    await request.validate ({ schema: schema.create(postSchema) })
    // ...
}
```
Some information here
