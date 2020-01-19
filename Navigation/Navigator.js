import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import LoginScreen from '../Screens/Login'
import CategoriesScreen from '../Screens/Category'
import ProductScreen from '../Screens/Product'
import CartScreen from '../Screens/Cart'

const Navigator = createStackNavigator({
    Login : LoginScreen,
    Categories : CategoriesScreen,
    Products : ProductScreen,
    Cart:CartScreen
})

export default createAppContainer(Navigator)