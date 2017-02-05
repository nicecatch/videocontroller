(
    function() {
        var video = document.getElementsByTagName('video');
        if (video.length != 1 ||
            video[0].parentElement.tagName.toLowerCase().localeCompare('body') != 0 ||
            video[0].parentElement.childNodes.length != 1)
            return 0; //no video or too much elements

        video = video[0];

        if(!video.dataset.initialWidth)
        {
            video.dataset.initialWidth = video.offsetWidth;
            video.style.width = video.dataset.initialWidth + 'px';
            video.style.transition = 'width 0.5s ease-in-out';
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