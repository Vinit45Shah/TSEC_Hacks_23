// ignore_for_file: avoid_print

import 'package:firebase_auth/firebase_auth.dart';

class AuthService {
  final FirebaseAuth _auth = FirebaseAuth.instance;

  Stream<User?> get user {
    return _auth.authStateChanges();
  }

  void handleSignOut() async {
    _auth.signOut();
  }

  Future<User?> signUpEmailPassword(String email, String pass) async {
    print(email);
    print(pass);
    try {
      User? user = (await _auth.createUserWithEmailAndPassword(
              email: email, password: pass))
          .user;
      return user;
    } catch (e) {
      print(e.toString());
      return null;
    }
  }

  // ignore: body_might_complete_normally_nullable
  Future<User?> signInWithEmailPassword(String email, String pass) async {
    try {
      User? user =
          (await _auth.signInWithEmailAndPassword(email: email, password: pass))
              .user;
      return user;
    } catch (e) {
      print(e);
    }
  }
}
