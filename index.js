const urlParams = new URLSearchParams(window.location.search);
    const mode = urlParams.get('mode');
    const itemID = urlParams.get('itemid');
    
    let deeplinkURL = "";
    if(itemID)
    {
        deeplinkURL = "spaceardl://tkobro?" + mode + "&" + itemID;
    }
    else
    {
        deeplinkURL = "spaceardl://tkobro?" + mode;
    }
    
    var projtitle = document.getElementById("input-project-title");
    
    document.getElementById("custom-query-button").onclick = function() {
      console.log(deeplinkURL);
      this.href = deeplinkURL;
    };

