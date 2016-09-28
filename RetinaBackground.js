/**
 * Generates retina background images using in-page style blocks.
 * Background images are supplied using the following attributes:
 *
 * data-background: URL to standard sized background image
 * data-background-2x: URL to retina sized background image
 */

class RetinaBackground {

    constructor(image) {
        this.image = image;
        this.standardImageUrl = $(image).attr('data-background');
        this.retinaImageUrl = $(image).attr('data-background-2x');
        this.addBackgroundImages();
    }

    /**
     * Get the ID of the image element. Set a new one if it doesn't exist.
     */
    get id () {
        if (!$(this.image).attr('id')) this.id = $(this.image).attr('id');
        return $(this.image).attr('id');
    }

    /**
     * Set the id of the image element. If trying to set a falsy iD, generate a random ID instead.
     * @param id
     */
    set id (id) {
        if (!id) id = this.generateId();
        $(this.image).attr('id', id);
    }

    /**
     * Generate a random ID that doesn't exist on the page
     * @returns {*}
     */
    generateId() {
        var id = 'retina-background-' + Math.random().toString(36).substring(7);
        if ($('#' + id).length) {
            return this.generateId();
        }
        return id;
    }

    /**
     * Add the background images via style blocks.
     */
    addBackgroundImages() {
        var style = $("<style>").prop("type", "text/css");
        if (this.standardImageUrl) style.append('#' + this.id + "{background-image: url(" + this.standardImageUrl + ")}");
        if (this.retinaImageUrl) style.append('@media(-webkit-min-device-pixel-ratio: 1.25),(min-resolution: 120dpi){#' + this.id + "{background-image: url(" + this.retinaImageUrl + ")}}");
        if ($(style).html().length > 0) style.appendTo("head");
    }
}

export {RetinaBackground}
