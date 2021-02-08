const DOM = {

    sectionContainer : document.querySelector('section'),

    replicateSpan()
    {
        for (var i = 1; i < 1200; i++)
        {
            mySpan = document.createElement('span');
            DOM.sectionContainer.appendChild(mySpan);
        }
    }
}

DOM.replicateSpan();