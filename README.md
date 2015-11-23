React-HammerJS
==============

ReactJS / HammerJS integration. Support touch events in your React app.

If you're looking for native tap event handling in ReactJS, check out the [React-Tappable](https://atmospherejs.com/praneybehl/react-tappable) package.

This package is a port of [React-Hammerjs](https://github.com/JedWatson/react-hammerjs) by Jed Watson.

### Adding it to your project

~~~
meteor add praneybehl:react-hammerjs
~~~

Usage
=====
React-HammerJS wraps a React component, binding Hammer events to it so it can fire the handlers specified.

## Properties

The following events are supported:

* `onTap`
* `onDoubleTap`
* `onPan`
* `onPanStart`
* `onPanEnd`
* `onSwipe`
* `onPress`
* `onPressUp`
* `onPinch`
* `onPinchIn`
* `onPinchOut`
* `onRotate`

You can also provide an `action` property which is like the `onTap` event handler but will also be fired `onPress`.

If you provide the prop `vertical={true}` the `pan` and `swipe` events will support vertical gestures.

The `options` property can be used to configure the Hammer manager. These properties will be merged with the default ones.

### Example

```

// Default options
<Hammer onTap={handleTap} onSwipe={handleSwipe}><div>Tap Me</div></Hammer>

// Custom options
var options = {
    touchAction:true,
    recognizers: {
        tap: {
            time: 600,
            threshold: 100
        }
    }
};

<Hammer onTap={handleTap} options={options}><div>Tap Me</div></Hammer>
```


# License

MIT Licensed.
