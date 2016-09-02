Installation
============

`$ docker run -d -p {port}:80 antoinelelaisant/markup-parser-api`

Usage
=====

There is only one end point to this api matching on `POST /`

Two parameters are expected:

- `content`: which is the content you want to parse
- `format`: which is the format of your content (i.e: `md`, `rst`, `rdoc` ...)

Exemple
=======

Given the api is listening on port 8080:

```http
POST http://localhost:8080/
{
    "format": "md",
    "content": "# This is a test\n And it works well!"
}
```
Should return:

```html
<h1>This is a test</h1>
<p>And it works well!</p>
```
