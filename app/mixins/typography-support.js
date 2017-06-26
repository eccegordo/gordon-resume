import Ember from 'ember';

const { computed, isPresent, get } = Ember;

export default Ember.Mixin.create({

  classNameBindings: ['_typographyClassString'],
  t: 'body',
  l: null,
  c: null,

  _typographyClassString: computed('t', 'l', 'c', function() {
    let prefix  = 'mdl-typography--';
    let type = get(this, 't');
    let level = get(this, 'l');
    let contrast = get(this, 'c');

    let ret = `${prefix}${type}`;

    if (isPresent(level)){
      ret = `${ret}-${level}`; 
    }

    if (isPresent(contrast)){
      ret = `${ret}-${contrast}`; 
    }
    
    return ret;

    // Create material design class strings
    // mdl-typography--body-1
    // mdl-typography--body-1-force-preferred-font
    // mdl-typography--body-2
    // mdl-typography--body-2
    // mdl-typography--body-2-color-contrast
    // mdl-typography--body-2-force-preferred-font
    // mdl-typography--button
    // mdl-typography--caption
    // mdl-typography--caption-color-contrast
    // mdl-typography--display-1
    // mdl-typography--display-1-color-contrast
    // mdl-typography--display-2
    // mdl-typography--display-3
    // mdl-typography--display-4
    // mdl-typography--headline
    // mdl-typography--menu
    // mdl-typography--subhead
    // mdl-typography--subhead-color-contrast
    // mdl-typography--table-striped
    // mdl-typography--text-capitalize
    // mdl-typography--text-center
    // mdl-typography--text-justify
    // mdl-typography--text-left
    // mdl-typography--text-lowercase
    // mdl-typography--text-nowrap
    // mdl-typography--text-right
    // mdl-typography--text-uppercase
    // mdl-typography--title
    // mdl-typography--title-color-contrast
  })
})
