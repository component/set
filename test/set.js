
var Set = require('set')
  , assert = require('component-assert');

function User(name) {
  this.name = name;
}

User.prototype.equals = function(user){
  return this.name == user.name;
};


describe('Set()', function(){
  it('should return a new set', function(){
    assert(Set() instanceof Set);
  })

  it('should populate from an array', function(){
    var set = new Set(['foo', 'bar', 'baz', 'baz']);
    assert(3 == set.size());

    var set = Set(['foo', 'bar', 'baz', 'baz']);
    assert(3 == set.size());
  })

  it('should support .equals(other)', function(){
    var a = new User('tj');
    var b = new User('tj');
    var c = new User('tobi');

    var set = new Set([a,b,c]);
    assert(2 == set.size());
    assert(a == set.values()[0]);
    assert(c == set.values()[1]);

    set.remove(b);
    assert(1 == set.size());
    assert(c == set.values()[0]);
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

  describe('.size()', function(){
    it('should return the length', function(){
      var set = new Set;
      assert(0 == set.size());
      set.add('foo');
      set.add('bar');
      set.add('baz');
      assert(3 == set.size());
    })
  })

  describe('.clear()', function(){
    it('should empty the set', function(){
      var set = new Set;
      set.add('foo');
      set.add('bar');
      set.clear();
      assert(0 == set.size());
    })

    it('should return the old values', function(){
      var set = new Set;
      set.add('foo');
      set.add('bar');
      var old = set.clear();
      assert('foo' == old[0]);
      assert('bar' == old[1]);
    })
  })

  describe('.union(set)', function(){
    it('should perform a union of the given set', function(){
      var a = new Set;
      a.add('foo');
      a.add('bar');

      var b = new Set;
      b.add('bar');
      b.add('baz');

      var set = a.union(b);
      assert(3 == set.size());
      var vals = set.values();
      assert('foo' == vals[0]);
      assert('bar' == vals[1]);
      assert('baz' == vals[2]);
    })
  })

  describe('.intersect(set)', function(){
    it('should perform an intersection', function(){
      var a = new Set;
      a.add('one');
      a.add('two');
      a.add('three');

      var b = new Set;
      b.add('two');
      b.add('one');
      b.add('four');
      b.add('five');

      var set = a.intersect(b);
      var vals = set.values();
      assert('one' == vals[0]);
      assert('two' == vals[1]);
      assert(2 == vals.length);
    })
  })

  describe('.toJSON()', function(){
    it('should return the array', function(){
      var set = new Set;
      set.add('foo');
      set.add('bar');
      var arr = set.toJSON();
      assert('foo' == arr[0]);
      assert('bar' == arr[1]);
    })
  })

  describe('.isEmpty()', function(){
    describe('when empty', function(){
      it('should return true', function(){
        var set = new Set;
        assert(true === set.isEmpty());
      })
    })

    describe('when not empty', function(){
      it('should return false', function(){
        var set = new Set;
        set.add('foo');
        assert(false === set.isEmpty());
      })
    })
  })
})