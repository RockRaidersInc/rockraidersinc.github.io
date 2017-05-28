# sponsors.json

This file contains the data necessary to render the sponsors grid.  The file contains an array of elements of the form:

```
{
    "name": "",
    "url": "",
    "img": ""
}
```

`name` currently specifies the mouseover text for the image in the grid.
`url` specifies the target url for clicks on the sponsor images.
`img` specifies the path to the image file relative to `/reosurces/img/sponsors/`.  Will typically just be the filename.

This data is used by `/pages/sponsors.js`