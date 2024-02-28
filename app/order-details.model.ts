import { OrderQuantity } from "./order quantity.model";

export class OrderDetails{
  fullName:String | undefined ;
	 fullAddress:String | undefined ;
 contactNumber:String | undefined ;
	 alternateContactNumber:String | undefined ;
     orderProductQuantityList: OrderQuantity[] | undefined;
}