class LoginPage  {

    get menuLogin() {
        return $("~Login")
    }

    get inputUsername () {
        return $('~input-email');
    }

    get inputPassword () {
        return $('~input-password')
    }

    get btnLogin() {
        return $(`android=new UiSelector().className("android.view.ViewGroup").instance(16)`)
    }

    get msgLogin() {
        return $('id=android:id/message')
    }



}

export default new LoginPage();
