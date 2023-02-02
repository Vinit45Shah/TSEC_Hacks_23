// ignore_for_file: use_key_in_widget_constructors, prefer_const_constructors, unused_import, duplicate_ignore

import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:provider/provider.dart';
import 'package:tsec_app/pages/home_page.dart';

// ignore: unused_import

// ignore: unused_import

import 'pages/description_medicine.dart';
import 'pages/donate_page.dart';
import 'pages/get_started.dart';
// ignore: unused_import

import 'package:firebase_core/firebase_core.dart';
import 'package:firebase_auth/firebase_auth.dart';

import 'auth/auth.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await Firebase.initializeApp();
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return (StreamProvider<User?>.value(
        value: AuthService().user,
        initialData: FirebaseAuth.instance.currentUser,
        child: GetMaterialApp(
            debugShowCheckedModeBanner: false,
            title: 'Flutter Demo',
            theme: ThemeData(
              primarySwatch: Colors.blue,
              visualDensity: VisualDensity.adaptivePlatformDensity,
            ),
            home: DonatePage())));
  }
}
