import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Details } from '../details/details';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
/*
list =['Sohan Choudhary','Anurag Singh','Kapil Sharma','Salman Khan','Tarun','Amir Khan',
        'Parag Choudhary','Navjot Singh','Anushka Sharma','Sharukh Khan','Varun Goel','Shahid Khan',
          'Vinay Garud','Pooja Dadhich','Preeti Rathi','Shahid Khan'] */

    list =      [{
              		"name": "Sohan Choudhary",
              		"emailAddress": "sohanbir@gmail.com",
                  "address" : "Newyork , USA",
                  "long": 40.7128 ,
                  "lati" : -74.0059
              	},
              	{
              		"name": "Venkat",
              		"emailAddress": "venkat.obireddy@gmail.com",
                  "address" : "Kavali, Andhra Pradesh, India",
                  "long": 79.992981 ,
                  "lati" : 14.913181
              	},
                {
                  "name": "Manuj Chauhan",
              		"emailAddress": "manujchauhan@gmail.com",
                  "address" : "Dhanpuri, Madhya Pradesh,India",
                  "long": 81.565125 ,
                  "lati" : 23.173939
                },
                {
                "name": "Neha Dogra",
                "emailAddress": "nehadogra@gmail.com",
                "address" : "Markapur, Andhra Pradesh, India",
                "long": 79.259491,
                "lati" : 15.764501
                },
                {
                                      		"name": "Preeti Choudhary",
                                       		"emailAddress": "preeti@gmail.com",
                                          "address" : "Ausa, Maharashtra, India",
                                          "long": 76.505356,
                                          "lati" : 18.245655
                                      	},
                                      	{
                                      		"name": "Nitin Kaushal",
                                      		"emailAddress": "nitinkaushal@gmail.com",
                                          "address" : "Gurdaspur, Punjab, India",
                                          "long": 75.405334,
                                          "lati" : 32.041943
                                      	},
                                        {
                                                  		"name": "Anuradha Bapat",
                                                  		"emailAddress": "anuradhabapat@gmail.com",
                                                      "address" : "Barjora, West Bengal, India",
                                                      "long": 87.287018,
                                                      "lati" : 23.427221
                                                  	},
                                                  	{
                                                  		"name": "Mehul Mathur",
                                                  		"emailAddress": "mehul.mathur@gmail.com",
                                                      "address" : "Sinnar, Maharashtra, India",
                                                      "long": 74.000633,
                                                      "lati" : 19.853060
                                                  	},{
                                                              		"name": "Krishna",
                                                              		"emailAddress": "krishna@gmail.com",
                                                                  "address" : "Hoshangabad, Madhya Pradesh, India",
                                                                  "long": 77.736969,
                                                                  "lati" : 22.744108
                                                              	},
                                                              	{
                                                              		"name": "Saket Sharma",
                                                              		"emailAddress": "saket.sharma@gmail.com",
                                                                  "address" : "Proddatur, Andhra Pradesh, India",
                                                                  "long": 78.552757,
                                                                  "lati" : 14.752805
                                                              	},{
                                                                          		"name": "Rajendra Singh",
                                                                          		"emailAddress": "rajendra.singh@gmail.com",
                                                                              "address" : "Pali, Rajasthan, India",
                                                                              "long": 73.323685,
                                                                              "lati" : 25.771315
                                                                          	},
                                                                          	{
                                                                          		"name": "Chandrakant Dubey",
                                                                          		"emailAddress": "chandrakant.dubey@gmail.com",
                                                                              "address" : "Munger, Bihar, India",
                                                                              "long": 86.474373,
                                                                              "lati" : 25.375710
                                                                          	},
                                                                            {
                                                                                      		"name": "Prerna Gupta",
                                                                                      		"emailAddress": "prerna.gupta@gmail.com",
                                                                                          "address" : "Ranchi, Jharkhand, India",
                                                                                          "long": 85.309563,
                                                                                          "lati" : 23.344101
                                                                                      	},
                                                                                      	{
                                                                                      		"name": "Parul Singh",
                                                                                      		"emailAddress": "parul.singh@gmail.com",
                                                                                          "address" : "Tirumangalam, Tamil Nadu, India",
                                                                                          "long": 77.986565,
                                                                                          "lati" : 9.823619
                                                                                      	},
                                                                                        {
                                                                                      		"name": "Venkat",
                                                                                      		"emailAddress": "venkat.obireddy@gmail.com",
                                                                                          "address" : "Kavali, Andhra Pradesh, India",
                                                                                          "long": 79.992981 ,
                                                                                          "lati" : 14.913181
                                                                                      	}
              ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

    nav(item){
      this.navCtrl.push (Details,{
        'value':item
      })
    };
}
