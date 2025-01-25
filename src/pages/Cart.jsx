import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";

import { Button } from "../components/ui/button";
import { images } from "../data/Images";
import { MdDelete } from "react-icons/md";

import { useDispatch } from "react-redux";
import { RemoveItem } from "@/slices/CartSlices";


export default function Cart() {
  const [arr, setarr] = useState([]);
  const [TotalPrice, SetTotalPrice] = useState(0);



  const FetchLocalStorage = () => {
    let data = JSON.parse(localStorage.getItem("Cart")) || [];
    let TempTotalPrice = 0;
    
    let FilterProduct = data.map((index) => images[index]);
    data.map((index) => (TempTotalPrice += images[index].price));
    setarr(FilterProduct);
    SetTotalPrice(TempTotalPrice);
  };

  useEffect(()=>{
    FetchLocalStorage();
  },[])

  const Dispatch = useDispatch()

 const HandleOnDelete = (index)=>{
    Dispatch(RemoveItem(index));
   setTimeout(FetchLocalStorage(index),0);
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h3 className="text-4xl font-bold py-7">Shoping Bag</h3>
      <p className="text-xl p-3">
        <span className="text-green-600 font-bold">{arr.length}</span> item in
        your bag
      </p>
      <div className=" flex md:flex-row flex-col ">
        <Table className="w-full md:w-[100vh] ">
          <TableHeader>
            <TableRow>
              <TableHead>Product</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead>Remove</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {arr.length === 0
              ? <p className="text-red-600 text-2xl overflow-hidden " >Your Cart Is Empty</p>
              : arr.map((element, index) => {
                  return (
                    <TableRow>
                      <TableCell>
                        <img
                          className="w-40"
                          src={element.imagePath}
                          alt="img"
                        />
                      </TableCell>
                      <TableCell>{element.price}</TableCell>
                      <TableCell>1</TableCell>
                      <TableCell>
                        <MdDelete
                          onClick={() => HandleOnDelete(index)}
                          className="text-red-600 cursor-pointer text-xl active:text-red-400"
                        />
                      </TableCell>
                    </TableRow>
                  );
                })}
          </TableBody>
        </Table>
        <div className=" py-10 md:p-0">
          <Card className="w-[350px] p-6">
            <CardHeader>
              <CardTitle>Cart Total</CardTitle>
            </CardHeader>
            <CardContent>
              <form>
                <div className="grid w-full items-center gap-5">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="name">Total items</Label>
                    <i>{arr.length}</i>
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="framework">Total price</Label>
                    <i>₹ {TotalPrice}</i>
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter className="w-full">
              <Button className="w-full">Payment</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
