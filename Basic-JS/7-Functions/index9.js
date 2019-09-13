// The "this" Keyword

// The object that is executing the current function - Objekt, ktorý vykonáva aktuálnu funkciu
// method => obj
// function => global (window, global)

const video = {
  title: 'a',
  tags: ['a', 'b', 'c'],
  showTags() {
    this.tags.forEach(function(tag) {
      console.log(this.title, tag);
      //a a
      //a b
      //a c
    }, this);
  }
};

video.showTags();
