// ignore_for_file: use_key_in_widget_constructors, library_private_types_in_public_api, import_of_legacy_library_into_null_safe, prefer_const_literals_to_create_immutables, prefer_const_constructors, avoid_print, unused_import

import 'package:flutter/material.dart';
import 'package:get/get.dart';

import 'package:tsec_app/colors.dart' as color;
import 'package:flutter_swiper/flutter_swiper.dart';
import 'package:tsec_app/pages/donate_page.dart';
import 'package:tsec_app/pages/profile.dart';
import 'package:tsec_app/pages/want_medicine.dart';

import '../data.dart';
import 'description_medicine.dart';
import 'detail_page.dart';
import 'doctor_user.dart';

class HomePage extends StatefulWidget {
  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: color.AppColor.gradientEndColor,
      body: Container(
        decoration: BoxDecoration(
            gradient: LinearGradient(
                colors: [
                  color.AppColor.gradientStartColor,
                  color.AppColor.gradientEndColor
                ],
                begin: Alignment.topCenter,
                end: Alignment.bottomCenter,
                stops: [0.3, 0.7])),
        child: SafeArea(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: <Widget>[
              Padding(
                padding: const EdgeInsets.all(32.0),
                child: Column(
                  children: <Widget>[
                    Text(
                      'Explore',
                      style: TextStyle(
                        fontFamily: 'Avenir',
                        fontSize: 44,
                        color: const Color(0xffffffff),
                        fontWeight: FontWeight.w900,
                      ),
                      textAlign: TextAlign.left,
                    ),
                    DropdownButton(
                      items: [
                        DropdownMenuItem(
                          child: Text(
                            'Hello Vinit,',
                            style: TextStyle(
                              fontFamily: 'Avenir',
                              fontSize: 24,
                              color: const Color(0x7cdbf1ff),
                              fontWeight: FontWeight.w500,
                            ),
                            textAlign: TextAlign.left,
                          ),
                        ),
                      ],
                      onChanged: (value) {},
                      icon: Padding(
                        padding: const EdgeInsets.only(left: 16.0),
                        child: Image.asset('lib/images/drop_down_icon.png'),
                      ),
                      underline: SizedBox(),
                    ),
                  ],
                ),
              ),
              Container(
                height: 500,
                padding: const EdgeInsets.only(left: 32),
                child: Swiper(
                  itemCount: planets.length,
                  itemWidth: MediaQuery.of(context).size.width - 2 * 64,
                  layout: SwiperLayout.STACK,
                  pagination: SwiperPagination(
                    builder:
                        DotSwiperPaginationBuilder(activeSize: 20, space: 8),
                  ),
                  itemBuilder: (context, index) {
                    return InkWell(
                      onTap: () {
                        if (index == 1) {
                          Get.to(() => DoctorUser());
                        } else if (index == 2) {
                          Get.to(() => DescriptionMedicine());
                        } else if (index == 3) {
                          Get.to(() => WantPage());
                        } else {
                          Get.to(() => DonatePage());
                        }
                        // Navigator.push(
                        //   context,
                        //   PageRouteBuilder(
                        //     pageBuilder: (context, a, b) => DetailPage(
                        //       planetInfo: planets[index],
                        //       key: null,
                        //     ),
                        //   ),
                        // );
                      },
                      child: Stack(
                        children: <Widget>[
                          Column(
                            children: <Widget>[
                              SizedBox(height: 100),
                              Card(
                                elevation: 8,
                                shape: RoundedRectangleBorder(
                                  borderRadius: BorderRadius.circular(32),
                                ),
                                color: Colors.white,
                                child: Padding(
                                  padding: const EdgeInsets.all(32.0),
                                  child: Column(
                                    crossAxisAlignment:
                                        CrossAxisAlignment.start,
                                    children: <Widget>[
                                      SizedBox(height: 100),
                                      Text(
                                        planets[index].name,
                                        style: TextStyle(
                                          fontFamily: 'Avenir',
                                          fontSize: 44,
                                          color: const Color(0xff47455f),
                                          fontWeight: FontWeight.w900,
                                        ),
                                        textAlign: TextAlign.left,
                                      ),
                                      Text(
                                        planets[index].text,
                                        style: TextStyle(
                                          fontFamily: 'Avenir',
                                          fontSize: 23,
                                          color:
                                              color.AppColor.primaryTextColor,
                                          fontWeight: FontWeight.w500,
                                        ),
                                        textAlign: TextAlign.left,
                                      ),
                                      SizedBox(height: 32),
                                      Row(
                                        children: <Widget>[
                                          Text(
                                            'Know more',
                                            style: TextStyle(
                                              fontFamily: 'Avenir',
                                              fontSize: 18,
                                              color: color
                                                  .AppColor.secondaryTextColor,
                                              fontWeight: FontWeight.w500,
                                            ),
                                            textAlign: TextAlign.left,
                                          ),
                                          Icon(
                                            Icons.arrow_forward,
                                            color: color
                                                .AppColor.secondaryTextColor,
                                          ),
                                        ],
                                      ),
                                    ],
                                  ),
                                ),
                              ),
                            ],
                          ),
                          Hero(
                            tag: planets[index].position,
                            child: Image.asset(planets[index].iconImage),
                          ),
                          Positioned(
                            right: 24,
                            bottom: 60,
                            child: Text(
                              planets[index].position.toString(),
                              style: TextStyle(
                                fontFamily: 'Avenir',
                                fontSize: 200,
                                color: color.AppColor.primaryTextColor
                                    .withOpacity(0.08),
                                fontWeight: FontWeight.w900,
                              ),
                              textAlign: TextAlign.left,
                            ),
                          ),
                        ],
                      ),
                    );
                  },
                ),
              ),
            ],
          ),
        ),
      ),
      bottomNavigationBar: Container(
        decoration: BoxDecoration(
          borderRadius: BorderRadius.vertical(
            top: Radius.circular(36.0),
          ),
          color: color.AppColor.navigationColor,
        ),
        padding: const EdgeInsets.all(24),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
          children: <Widget>[
            IconButton(
              icon: Image.asset(
                'lib/images/menu_icon.png',
              ),
              onPressed: () {},
            ),
            IconButton(
              icon: Image.asset(
                'lib/images/search_icon.png',
                color: Colors.white,
              ),
              onPressed: () {},
            ),
            IconButton(
              icon: Image.asset(
                'lib/images/profile_icon.png',
                color: Colors.white,
              ),
              onPressed: () {
                Get.to(() => Profile());
              },
            ),
          ],
        ),
      ),
    );
  }
}
