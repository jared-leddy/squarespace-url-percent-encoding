// Site Code Injection

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script>
	$(document).ready(function() {
      if(typeof(pageCode)=='function'){
       	pageCode();
      }
    });
</script>

//  Blog Page Code Injection

<script>

  	function htmlEntities(text) {
    	return text
      		.replace(/%/g,'%25')
      		.replace(/\+/g,'%2B')
      		.replace(/\s/g,'+')
      		.replace(/!/g,'%21')
      		.replace(/#/g,'%23')
      		.replace(/\$/g,'%24')
      		.replace(/&/g,'%26')
      		.replace(/'/g,'%27')
      		.replace(/\(/g,'%28')
      		.replace(/\)/g,'%29')
      		.replace(/\*/g,'%2A')
      		.replace(/,/g,'%2C')
      		.replace(/\//g,'%2F')
      		.replace(/:/g,'%3A')
      		.replace(/;/g,'%3B')
      		.replace(/=/g,'%3D')
      		.replace(/\?/g,'%3F')
      		.replace(/@/g,'%40')
      		.replace(/\[/g,'%5B')
      		.replace(/\]/g,'%5D')
      		.replace(/\./g,'%2E')
      		.replace(/</g,'%3C')
      		.replace(/>/g,'%3E')
      		.replace(/\\/g,'%5C')
      		.replace(/\^/g,'%5E')
      		.replace(/_/g,'%5F')
      		.replace(/`/g,'%60')
      		.replace(/{/g,'%7B')
      		.replace(/}/g,'%7D')
      		.replace(/\|/g,'%7C')
      		.replace(/~/g,'%7E');
	}

  function pageCode() {
   	$.ajax({
      url: "/blog?format=json"
    }).done(function(response) {
      console.log(response.collection.categories);
      var cats=response.collection.categories;
      var wrapper='<div id="mqfilterwrapper"></div>';
      $('section.Main-content').prepend(wrapper);
      $.each(cats,function(k,v){
        var item = '<a href="/blog?category='+htmlEntities(v)+'" class="mqfilteritem">'+ v +'</a>';
        $('#mqfilterwrapper').append(item);
      });

  	});
  }
</script>
