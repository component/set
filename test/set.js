
var Set = require('set')
  , assert = require('component-assert');

describe('Set()', function(){
  it('should return a new set', function(){
    assert(Set() instanceof Set);
  })

  describe('.add(val)', function(){
    it('should add the value only once', function(){
      var set = new Set;
      set.add('hello');
      set.add('hello');
      set.add('there');

      assert('hello' == set.values()[0]);
      assert('there' == set.values()[1]);
    })
  })

  describe('.has(val)', function(){
    it('should true when present', function(){
      var set = new Set;
      set.add('foo');
      set.add('bar');
      assert(true === set.has('foo'));
      assert(true === set.has('bar'));
    })

    it('should false otherwise', function(){
      var set = new Set;
      assert(false === set.has('foo'));
    })
  })

  describe('.remove(val)', function(){
    it('should remove the value', function(){
      var set = new Set;
      set.add('foo');
      set.add('bar');
      set.add('baz');
      set.remove('bar');
      set.remove('baz');
      set.remove('foo');
      assert(0 == set.values().length);
    })

    it('should return true when removed', function(){
      var set = new Set;
      set.add('foo');
      assert(true === set.remove('foo'));
    })

    it('should return false otherwise', function(){
      var set = new Set;
      assert(false === set.remove('foo'));
    })
  })

  describe('.length()', function(){
    it('should return the length', function(){
      var set = new Set;
      assert(0 == set.length());
      set.add('foo');
      set.add('bar');
      set.add('baz');
      assert(3 == set.length());
    })
  })
})