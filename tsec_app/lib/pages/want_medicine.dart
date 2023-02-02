// ignore_for_file: prefer_const_constructors

import 'package:flutter/material.dart';
import 'package:liquid_pull_to_refresh/liquid_pull_to_refresh.dart';

class WantPage extends StatefulWidget {
  const WantPage({super.key});

  @override
  State<WantPage> createState() => _WantPageState();
}

class _WantPageState extends State<WantPage> {
  Future<void> _handleRefresh() async {
    return await Future.delayed(Duration(seconds: 2));
  }

  @override
  Widget build(BuildContext context) {
    return SafeArea(
        child: Scaffold(
            backgroundColor: Colors.deepPurple.shade200,
            body: LiquidPullToRefresh(
              onRefresh: _handleRefresh,
              color: Colors.deepPurple,
              height: 300,
              backgroundColor: Colors.deepPurple.shade200,
              animSpeedFactor: 2,
              showChildOpacityTransition: true,
              child: ListView(
                children: [
                  Padding(
                    padding: EdgeInsets.all(25),
                    child: ClipRRect(
                      borderRadius: BorderRadius.circular(15),
                      child: Container(
                        height: 300,
                        color: Colors.deepPurple,
                      ),
                    ),
                  )
                ],
              ),
            )));
  }
}
