---
title: "Websocket Events"
description: 'Adonis has some websocket events.'
image: ''
tags: 'snippets'
author: 'Ashok'
---

```typescript
function errors(actualErrors) {
    return actualErrors?.messages?.errors?.reduce((acc, e) => {
        const rule = e.rule
        let message = e.message
        if (rule === 'required') {
            message = `${e.field} is required`
        }
        return {
            ...acc,
            [e.field]: message,
        }
    }, {})
}

// Usage:
console.debug(errors(/* pass-error-from-adonis-validation */).title)
```
Quick way to display an error on your form for a particular field.

