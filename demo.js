import {RetinaBackground} from './RetinaBackground'

$("*[data-background], *[data-background-2x]").each(function() {
    new RetinaBackground(this)
})