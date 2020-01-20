import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import LoginScreen from '../Screens/Login'
import CategoriesScreen from '../Screens/Category'
import ProductScreen from '../Screens/Product'
import CartScreen from '../Screens/Cart'
import PaymentScreen from '../Screens/Payment'
import SuccessScreen from '../Screens/SuccessPage'

const Navigator = createStackNavigator({
    Login : LoginScreen,
    Categories : CategoriesScreen,
    Products : ProductScreen,
    Cart: CartScreen,
    "Make Payment":PaymentScreen,
    Success: SuccessScreen
})

export default createAppContainer(Navigator)
