import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products = [
    {
      id: '1',
      brand: 'PUMA',
      image:
        'https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/h/d/g/3xl-78004501-puma-original-imagy5wnnanhgrsy.jpeg?q=70',
      currentPrice: '6649',
      standardPrice: '7999',
      discount: '16',
      name: 'Men Printed, Typography V Neck Polyester Blue T-Shirt',
    },
    {
      id: '2',
      brand: 'Louis Philippe',
      image:
        'https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/h/q/w/3xl-lxkpargfm00595-louis-philippe-original-imagg5a8rztyymbt.jpeg?q=70',
      currentPrice: '4849',
      standardPrice: '4999',
      discount: '3',
      name: 'Men Solid Polo Neck Pure Cotton Purple T-Shirt',
    },
    {
      id: '3',
      brand: 'Tommy Hilfiger',
      image:
        'https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/m/v/4/-original-imagyjazxhzm46uv.jpeg?q=70',
      currentPrice: '3499',
      standardPrice: '4999',
      discount: '30',
      name: 'Men Solid Polo Neck Cotton Blend Orange T-Shirt',
    },
    {
      id: '4',
      brand: 'Adidas',
      image:
        'https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/x/9/d/-original-imaguy6jbhhracde.jpeg?q=70',
      currentPrice: '4133',
      standardPrice: '5299',
      discount: '22',
      name: 'Men Printed V Neck Polyester Green T-Shirt',
    },
    {
      id: '5',
      brand: 'U.S. Polo Assn',
      image:
        'https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/w/u/o/s-ustshp0208-u-s-polo-assn-original-imagvbtvjhredvhs.jpeg?q=70',
      currentPrice: '3349',
      standardPrice: '3499',
      discount: '4',
      name: 'Men Solid Polo Neck Pure Cotton Green T-Shirt',
    },
    {
      id: '6',
      brand: 'Louis Philippe',
      image:
        'https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/j/x/7/xs-lxkpargfw71880-louis-philippe-original-imagg5a8g3dgj3y6.jpeg?q=70',
      currentPrice: '3449',
      standardPrice: '4999',
      discount: '31',
      name: 'Men Solid Polo Neck Pure Cotton White T-Shirt',
    },
    {
      id: '7',
      brand: 'Adidas',
      image:
        'https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/1/f/b/m-he2981-adidas-original-imagg39akzkpjzpr.jpeg?q=70',
      currentPrice: '3199',
      standardPrice: '4999',
      discount: '36',
      name: 'MUFC Men Printed Round Neck Polyester Green T-Shirt',
    },
  ];


  constructor() { }
}
