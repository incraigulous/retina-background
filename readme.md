Tab Index
---------

Generates retina background images using in-page style blocks.

 * data-background: URL to standard sized background image
 * data-background-2x: URL to retina sized background image
 
Usage
-----
####HTML

```
<div data-background="http://placekitten.com/400/600" data-background-2x="http://placekitten.com/800/1200"></div>
```

####Javascript

```
import {RetinaBackground} from './RetinaBackground'

$("*[data-background], *[data-background-2x]").each(function() {
    new RetinaBackground(this)
})
```

Data API
--------
`data-background` URL to standard sized background image
`data-background-2x` URL to retina sized background image

Dependencies
------------

This is an es2016 module that depends on jQuery. Sorry, if you don't like that. I built this for my personal use. I just published it in case anyone else might find it helpful. 