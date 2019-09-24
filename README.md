## ReactNative页面之前的跳转
# 业务设计
> 该Demo的业务如下图
> ![Alt](https://github.com/LuffyHope/ReactDemo3/blob/master/demo3.png)

# 效果图
![Alt](https://github.com/LuffyHope/ReactDemo3/blob/master/page_go.gif)

# 一·理解
> 在Android中每个独立的页面对应着一个Activity，每个Activity都会在清单文件中注册，并且启动页的Activity需要独立配置配置为lunch。</br>
> 那么在React中的页面也是如此，在这里不叫清单文件而是叫做**路由**。

# 二.如何配置路由（这里可以理解为react的清单文件）
```
import a_page from './A_page';//这里每个独立的页面都需要
import b_page from './B_page';//导包进入才能
import c_page from './C_page';//才能被下面引用注册。
import {
    createStackNavigator,
} from 'react-navigation-stack';

import {
    createAppContainer,
} from 'react-navigation';

const AppNavigator = createStackNavigator({
    //这里注册了每个独立的页面。
    pa: {screen: a_page},
    pb: {screen: b_page},
    pc: {screen: c_page},
}, {
    //这里的'pa'对应着上面注册的pa，里可以理解为a_page的一个索引
    //这里的initialRouteName: 'pa',你可以想象成Android的启动页的lunch。如果你想
    //把pb换成启动项那么你可以写成 initialRouteName: 'pb',
    initialRouteName: 'pa',
});

const App = createAppContainer(AppNavigator);

AppRegistry.registerComponent(appName, () => App);
```
> 以上代码没有做说明的照抄就行，这个是路由的固定格式的一种。</br>
> 需要注意的是 pa pb pc （可以理解为没有页面的索引位置）到时候需要去那个页面就需要用到对应的。

# 三.页面之前如何跳转。
> 在ReactNative中有全局属性navigation他可以去指定我需要跳转的页面。</br>
> 比如我想去pb页面 只需要这样调用即可``` this.props.navigation.navigate('pb'); ```

