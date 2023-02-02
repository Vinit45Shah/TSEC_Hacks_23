// ignore_for_file: prefer_const_constructors, prefer_const_literals_to_create_immutables

import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:tsec_app/pages/home_page.dart';

class DonatePage extends StatefulWidget {
  const DonatePage({super.key});

  @override
  State<DonatePage> createState() => _DonatePageState();
}

class _DonatePageState extends State<DonatePage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SingleChildScrollView(
        child: Stack(
          children: [
            Padding(
              padding: const EdgeInsets.only(left: 10.0, top: 40),
              child: InkWell(
                child: Icon(Icons.arrow_back_ios_new),
                onTap: () {
                  Get.to(() => HomePage());
                },
              ),
            ),
            Padding(
              padding: const EdgeInsets.only(left: 80.0, top: 60),
              child: Text(
                'Donate Medicines',
                style: TextStyle(
                    fontSize: 26,
                    fontFamily: 'Poppins',
                    fontWeight: FontWeight.w600),
              ),
            ),
            Padding(
              padding: const EdgeInsets.only(top: 110.0),
              child: Container(
                margin: EdgeInsets.all(20),
                height: 650,
                width: 700,
                decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(20),
                    gradient: LinearGradient(
                        colors: [Color(0xff9356fb), Color(0xffb772ea)],
                        begin: Alignment.topCenter,
                        end: Alignment.bottomCenter,
                        stops: [0.3, 0.7])),
                child: Column(
                  children: [
                    SizedBox(
                      height: 10,
                    ),
                    Padding(
                      padding: const EdgeInsets.only(left: 15.0, top: 10),
                      child: Row(
                        mainAxisAlignment: MainAxisAlignment.start,
                        children: [
                          Text('Common Name:',
                              style: TextStyle(
                                  fontSize: 18,
                                  fontFamily: 'Poppins',
                                  color: Colors.white)),
                        ],
                      ),
                    ),
                    Padding(
                      padding: const EdgeInsets.all(10.0),
                      child: TextField(
                        decoration: InputDecoration(
                            hintText: 'Crocin',
                            hintStyle: TextStyle(
                                color: Color.fromARGB(255, 246, 242, 247),
                                fontSize: 14),
                            border: OutlineInputBorder(
                                borderSide:
                                    BorderSide(width: 3, color: Colors.white)),
                            enabledBorder: OutlineInputBorder(
                              borderSide:
                                  BorderSide(width: 3, color: Colors.white),
                            )),
                      ),
                    ),
                    Padding(
                      padding: const EdgeInsets.only(left: 15.0, top: 10),
                      child: Row(
                        mainAxisAlignment: MainAxisAlignment.start,
                        children: [
                          Text('Quantity:',
                              style: TextStyle(
                                  fontSize: 18,
                                  fontFamily: 'Poppins',
                                  color: Colors.white)),
                        ],
                      ),
                    ),
                    Padding(
                      padding: const EdgeInsets.all(10.0),
                      child: TextField(
                        decoration: InputDecoration(
                            hintText: '18 Packets',
                            hintStyle: TextStyle(
                                color: Color.fromARGB(255, 246, 242, 247),
                                fontSize: 14),
                            border: OutlineInputBorder(
                                borderSide:
                                    BorderSide(width: 3, color: Colors.white)),
                            enabledBorder: OutlineInputBorder(
                              borderSide:
                                  BorderSide(width: 3, color: Colors.white),
                            )),
                      ),
                    ),
                    Padding(
                      padding: const EdgeInsets.only(left: 15.0, top: 10),
                      child: Row(
                        mainAxisAlignment: MainAxisAlignment.start,
                        children: [
                          Text('Expiry:',
                              style: TextStyle(
                                  fontSize: 18,
                                  fontFamily: 'Poppins',
                                  color: Colors.white)),
                        ],
                      ),
                    ),
                    Padding(
                      padding: const EdgeInsets.all(10.0),
                      child: TextField(
                        decoration: InputDecoration(
                            hintText: '28-12-2',
                            hintStyle: TextStyle(
                                color: Color.fromARGB(255, 246, 242, 247),
                                fontSize: 14),
                            border: OutlineInputBorder(
                                borderSide:
                                    BorderSide(width: 3, color: Colors.white)),
                            enabledBorder: OutlineInputBorder(
                              borderSide:
                                  BorderSide(width: 3, color: Colors.white),
                            )),
                      ),
                    ),
                    Padding(
                      padding: const EdgeInsets.only(left: 15.0, top: 10),
                      child: Row(
                        mainAxisAlignment: MainAxisAlignment.start,
                        children: [
                          Text('Scientific Name:',
                              style: TextStyle(
                                  fontSize: 18,
                                  fontFamily: 'Poppins',
                                  color: Colors.white)),
                        ],
                      ),
                    ),
                    Padding(
                      padding: const EdgeInsets.all(10.0),
                      child: TextField(
                        decoration: InputDecoration(
                            hintText: 'Paraceotamol',
                            hintStyle: TextStyle(
                                color: Color.fromARGB(255, 246, 242, 247),
                                fontSize: 14),
                            border: OutlineInputBorder(
                                borderSide:
                                    BorderSide(width: 3, color: Colors.white)),
                            enabledBorder: OutlineInputBorder(
                              borderSide:
                                  BorderSide(width: 3, color: Colors.white),
                            )),
                      ),
                    ),
                    Padding(
                      padding: const EdgeInsets.only(left: 15.0, top: 10),
                      child: Row(
                        mainAxisAlignment: MainAxisAlignment.start,
                        children: [
                          Text('Manufacturer:',
                              style: TextStyle(
                                  fontSize: 18,
                                  fontFamily: 'Poppins',
                                  color: Colors.white)),
                        ],
                      ),
                    ),
                    Padding(
                      padding: const EdgeInsets.all(10.0),
                      child: TextField(
                        decoration: InputDecoration(
                            hintText: 'Emcure Pharmaceuticals',
                            hintStyle: TextStyle(
                                color: Color.fromARGB(255, 246, 242, 247),
                                fontSize: 14),
                            border: OutlineInputBorder(
                                borderSide:
                                    BorderSide(width: 3, color: Colors.white)),
                            enabledBorder: OutlineInputBorder(
                              borderSide:
                                  BorderSide(width: 3, color: Colors.white),
                            )),
                      ),
                    ),
                    SizedBox(
                      height: 6,
                    ),
                    TextButton(
                        onPressed: () {},
                        child: Text(
                          'Submit',
                          style:
                              TextStyle(fontSize: 22, color: Color(0xffffffff)),
                        ))
                  ],
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
