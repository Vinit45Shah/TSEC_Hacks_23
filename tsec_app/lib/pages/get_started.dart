// ignore_for_file: prefer_const_constructors, sized_box_for_whitespace, sort_child_properties_last

import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:tsec_app/colors.dart' as color;
import 'package:tsec_app/pages/login_page.dart';

class GetStarted extends StatefulWidget {
  const GetStarted({Key? key}) : super(key: key);

  @override
  State<GetStarted> createState() => _GetStartedState();
}

class _GetStartedState extends State<GetStarted> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        body: Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        SafeArea(
          child: Padding(
            padding: EdgeInsets.only(left: 20, top: 20),
            child: Container(
              height: 150,
              width: 230,
              child: Text(
                'We care for you...',
                style: TextStyle(
                    fontSize: 48,
                    color: Color(0xFF424242),
                    fontFamily: 'Poppins',
                    fontWeight: FontWeight.w800,
                    shadows: [
                      Shadow(
                          color: Color(0xFF424242).withOpacity(.3),
                          offset: Offset(1, 5),
                          blurRadius: 5)
                    ]),
              ),
            ),
          ),
        ),
        Row(
          crossAxisAlignment: CrossAxisAlignment.end,
          children: [
            Center(
              child: Container(
                  padding: EdgeInsets.only(left: 10),
                  height: 380,
                  width: 360,
                  decoration: BoxDecoration(
                      // color: Colors.cyan,
                      image: DecorationImage(
                          image: AssetImage(
                            'lib/images/Get Started Main.png',
                          ),
                          fit: BoxFit.fitHeight))),
            ),
          ],
        ),
        SizedBox(
          height: 20,
        ),
        Center(
          child: Container(
            height: 60,
            width: 320,
            child: Center(
              child: TextButton(
                  onPressed: () {
                    Get.to(() => LoginPage());
                  },
                  child: Text(
                    'Get Started',
                    style: TextStyle(
                      fontSize: 22,
                      color: Colors.white,
                      fontFamily: 'Poppins',
                      fontWeight: FontWeight.w600,
                    ),
                  )),
            ),
            decoration: BoxDecoration(
              gradient: LinearGradient(colors: [
                color.AppColor.gradientFirst.withOpacity(.9),
                color.AppColor.gradientSecond.withOpacity(1),
              ], begin: Alignment.bottomLeft, end: Alignment.bottomRight),
              borderRadius: BorderRadius.circular(10),
              boxShadow: [
                BoxShadow(
                  offset: Offset(10, 10),
                  blurRadius: 12,
                  color: color.AppColor.gradientSecond.withOpacity(.1),
                ),
              ],
            ),
          ),
        ),
        SizedBox(
          height: 0,
        ),
        Expanded(
          child: Container(
            margin: EdgeInsets.only(top: 50),
            decoration: BoxDecoration(
                image: DecorationImage(
                    image: AssetImage(
                      'lib/images/Login Bg Bottom (1).png',
                    ),
                    fit: BoxFit.cover)),
          ),
        ),
      ],
    ));
  }
}
