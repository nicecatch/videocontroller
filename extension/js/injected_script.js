(
    function() {
        var body = document.getElementsByTagName('body'), video = document.getElementsByTagName('video');
        if (body.length != 1 || video.length != 1 || body[0].childNodes.length != 1)
            return 0; //no body, no video or too much elements

        video = video[0];
        video.style.transition = 'width 0.5s ease-in-out';

        if(!video.dataset.initialWidth)
        {
            video.dataset.initialWidth = video.offsetWidth;
            video.style.width = video.dataset.initialWidth + 'px';
        }

        if(video.dataset.initialWidth == video.offsetWidth)
        {
            video.style.width = '100%';
        }
        else
        {
            video.style.width = video.dataset.initialWidth + 'px';
        }
    }
)();