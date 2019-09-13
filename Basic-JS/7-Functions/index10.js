// Changing the Value of "this"

const video = {
  title: 'a',
  tags: ['a', 'b', 'c'],
  showTags() {
    const self = this;
    this.tags.forEach(
      function(tag) {
        console.log(self.title, tag);
      }.bind(this)
    );
  }
};

// pomocou arrow
const video = {
  title: 'a',
  tags: ['a', 'b', 'c'],
  showTags() {
    this.tags.forEach(tag => {
      console.log(this.title, tag);
      //a a
      //a b
      //a c
    });
  }
};

video.showTags();

//-------------------------------------------------

// function playVideo() {
//   console.log(this);
// }

// playVideo.call({ name: 'Vivien' }, 1, 2);
// playVideo.apply({ name: 'Vivien' }, [1, 2]);
// playVideo.bind({ name: 'Vivien' })();

// playVideo();
