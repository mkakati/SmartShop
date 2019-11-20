(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!isLoginUrl\">\r\n        <app-global-header *ngIf=\"!islogin\"></app-global-header>\r\n        <app-sidebar *ngIf=\"islogin\"></app-sidebar>\r\n        <app-header *ngIf=\"islogin\" ></app-header>\r\n</div>\r\n\r\n<router-outlet></router-outlet>\r\n<div *ngIf=\"!isLoginUrl\">\r\n        <app-footer *ngIf=\"islogin\"></app-footer>\r\n        <app-global-footer *ngIf=\"!islogin\"></app-global-footer>\r\n</div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/areas/auth/emailverification/emailverification.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/areas/auth/emailverification/emailverification.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"id1\" *ngIf=\"modal1\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <form [formGroup]=\"emailform\" (ngSubmit)=\"Continue()\">\r\n                    <div class=\"form-group\">\r\n                        <label>Email</label>\r\n                        <input type=\"text\" formControlName=\"email\" class=\"form-control\" \r\n                            [ngClass]=\"{ 'is-invalid': submitted && emailf.email.errors }\" />\r\n                        <div *ngIf=\"submitted && emailf.email.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"emailf.email.errors.required\">*Email is required</div>\r\n                            <div *ngIf=\"emailf.email.errors.email\">*Email must be a valid email address</div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group col-md-12\">\r\n                        <button class=\"btn btn-default\"  (Click)=\"Continue()\">Continue</button>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n<div  class=\"id1\" *ngIf=\"modal2\">\r\n<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <form [formGroup]=\"verificationform\" (ngSubmit)=\"checkotp()\">\r\n                    <legend id=\"legend\"><b></b></legend><br>\r\n\r\n                    <div class=\"form-group\">\r\n                      \r\n                        <input type=\"text\" minlength=\"4\" placeholder=\"enter OTP\" maxlength=\"4\" formControlName=\"otp\"  OnlyNumber=\"true\"  class=\"form-control\" [ngClass]=\"{ 'is-invalid': issubmitted && f.otp.errors }\" />\r\n                        <div *ngIf=\"issubmitted && f.otp.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f.otp.errors.required\">*OTP is required</div>\r\n                            <div *ngIf=\"f.otp.errors.minlength\">*OTP must be of least 4 digit</div>\r\n                        </div>\r\n                    </div>\r\n                    \r\n               <div class=\"row\">\r\n                    <div class=\"form-group col-md-6\">\r\n                        <button class=\"btn btn-default\" >Verify OTP</button>\r\n                    </div>\r\n                    <div class=\"form-group col-md-6\">\r\n                        <button class=\"btn btn-default\" (click)=\"resend()\">Resend otp</button>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/areas/auth/forgotpassword/forgotpassword.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/areas/auth/forgotpassword/forgotpassword.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div class=\"id1\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <form [formGroup]=\"emailverificationform\" (ngSubmit)=\"showdata()\">\r\n                       \r\n\r\n                        <div class=\"form-group\">\r\n                                <label>Email</label>\r\n                                <input type=\"text\" formControlName=\"email\" class=\"form-control\" required [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\" />\r\n                                <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"f.email.errors.required\">*Email is required</div>\r\n                                    <div *ngIf=\"f.email.errors.email\">*Email must be a valid email address</div>\r\n                                </div>\r\n                            </div>\r\n                        <div class=\"form-group col-md-12\">\r\n                            <button class=\"btn btn-default\">Continue</button>\r\n                        </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div id=\"modalTarget\" *ngIf=\"!istrue\">\r\n        <ejs-dialog id=\"modalDialog\" #modalDialog (overlayClick)=\"overlayClick()\"   [isModal]='isModal' [header]='header' [target]='target' [width]='width' [buttons]='buttons' [animationSettings]='animationSettings' [content]='content'   (open)=\"modalDlgOpen()\"      (close)=\"modalDlgClose()\" >\r\n    </ejs-dialog>\r\n    <div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/areas/auth/login/login.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/areas/auth/login/login.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div  class=\"id1\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <form [formGroup]=\"loginform\" (ngSubmit)=\"login()\">\r\n                    <div class=\"login\">\r\n                            <legend id=\"legend\"><b>login</b></legend><br>\r\n                    </div>\r\n                        \r\n\r\n                        <div class=\"form-group\">\r\n                            <label>Email</label>\r\n                            <input type=\"text\" formControlName=\"email\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\" />\r\n                            <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"f.email.errors.required\">*Email is required</div>\r\n                                <div *ngIf=\"f.email.errors.email\">*Email must be a valid email address</div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"form-group\">\r\n                            <label>PIN</label>\r\n                            <input type=\"password\" maxlength=\"4\" formControlName=\"pin\" required OnlyNumber=\"true\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.pin.errors }\" />\r\n                            <div *ngIf=\"submitted && f.pin.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"f.pin.errors.required\">*PIN is required</div>\r\n                                <div *ngIf=\"f.pin.errors.minlength\">*PIN must be of 4 digit</div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                                <div class=\"col-md-6\">\r\n                                        <p id=\"\"> <input type=\"checkbox\"> remember me?</p>\r\n                                     </div>\r\n                                     \r\n                                        <div class=\"text-right col-md-6\">\r\n                                    <a [routerLink]=\"['/forgotpass']\">forgot password?</a>\r\n                                </div>\r\n                        </div>\r\n                        \r\n                   <div class=\"row\">\r\n                        <div class=\"form-group col-md-12\">\r\n                            <button class=\"btn btn-default\">Login</button>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"link\">\r\n                        <a [routerLink]=\"['/register']\">New to this site? Create Account</a>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/areas/auth/register/register.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/areas/auth/register/register.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div  class=\"id1\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <form [formGroup]=\"registerForm\" (ngSubmit)=\"showdata()\">\r\n                        <legend id=\"legend\"><b>Sign-up</b></legend><br>\r\n\r\n                        <div class=\"row\">\r\n                            <div class=\"form-group col-md-6\">\r\n                                <label>First Name</label>\r\n                                <input type=\"text\" formControlName=\"firstName\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.firstName.errors }\"/>\r\n                                <div *ngIf=\"submitted && f.firstName.errors\" class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"f.firstName.errors.required\" class=\"text-danger\">*First Name is required</div>\r\n                                    <div *ngIf=\"f.firstName.errors.minlength\"> Name must be at least 4 characters long.</div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group col-md-6\">\r\n                                <label>Last Name</label>\r\n                                <input type=\"text\" formControlName=\"lastName\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.lastName.errors }\" />\r\n                                <div *ngIf=\"submitted && f.lastName.errors\" class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"f.lastName.errors.required\">*Last Name is required</div>\r\n                                    <div *ngIf=\"f.lastName.errors.minlength\"> Name must be at least 4 characters long.</div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    \r\n                        <!-- <div class=\"form-group\">\r\n                                <label>Mobile number</label>\r\n                                <input type=\"text\" formControlName=\"mobile\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\" [textMask]=\"{ mask: phoneMask }\"/>\r\n                                <div *ngIf=\"submitted && f.mobile.errors\" class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"f.mobile.errors.required\">*Mobile number is required</div>\r\n                                </div>\r\n                            </div> -->\r\n                        <div class=\"form-group\">\r\n                            <label>Email</label>\r\n                            <input type=\"text\" formControlName=\"email\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\" />\r\n                            <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"f.email.errors.required\">*Email is required</div>\r\n                                <div *ngIf=\"f.email.errors.email\">*Email must be a valid email address</div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"form-group\">\r\n                            <label>PIN</label>\r\n                            <input type=\"password\" minlength=\"4\" maxlength=\"4\" formControlName=\"pin\" \r\n                             OnlyNumber=\"true\"  class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.pin.errors }\" />\r\n                            <div *ngIf=\"submitted && f.pin.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"f.pin.errors.required\">*PIN is required</div>\r\n                                <div *ngIf=\"f.pin.errors.minlength\">*PIN must be of least 4 digit</div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label>Confirm PIN</label>\r\n                            <input type=\"password\" formControlName=\"cpin\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.cpin.errors }\" />\r\n                            <div *ngIf=\"submitted && f.cpin.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"f.cpin.errors.required\">*Confirm PIN is required</div>\r\n                                <div *ngIf=\"f.cpin.errors.mustMatch\">*PIN must match</div>\r\n                            </div>\r\n                        </div>\r\n                   <div class=\"row\">\r\n                        <div class=\"form-group col-md-6\">\r\n                            <button class=\"btn btn-default\" >Register</button>\r\n                        </div>\r\n                        <div class=\"form-group col-md-6\">\r\n                            <button class=\"btn btn-default\" (click)=\"Cancel()\">Cancel</button>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/areas/auth/resetpassword/resetpassword.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/areas/auth/resetpassword/resetpassword.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"id1\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <form [formGroup]=\"resetpasswordform\" (ngSubmit)=\"resetpassword()\">\r\n    \r\n                            <div class=\"form-group\">\r\n                                    <label>PIN</label>\r\n                                    <input type=\"password\" placeholder=\"enter new password\" formControlName=\"pin\" minlength =\"4\"   OnlyNumber=\"true\"  class=\"form-control\" \r\n                                     [ngClass]=\"{ 'is-invalid': submitted && f.pin.errors }\" />\r\n                                    <div *ngIf=\"submitted && f.pin.errors\" class=\"invalid-feedback\">\r\n                                        <div *ngIf=\"f.pin.errors.required\">*PIN is required</div>\r\n                                        <div *ngIf=\"f.pin.errors.minlength\">*PIN must be of least 4 digit</div>\r\n                                    </div> \r\n                                </div>\r\n    \r\n                        <div class=\"form-group\">\r\n                            <label>Confirm PIN</label>\r\n                            <input type=\"password\" placeholder=\"Confirm PIN\" formControlName=\"cpin\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.cpin.errors }\" />\r\n                            <div *ngIf=\"submitted && f.cpin.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"f.cpin.errors.required\">*Confirm PIN is required</div>\r\n                                <div *ngIf=\"f.cpin.errors.mustMatch\">*PIN must match</div>\r\n                            </div>\r\n                        </div>\r\n                            <div class=\"form-group col-md-12\">\r\n                                <button class=\"btn btn-default\">Continue</button>\r\n                            </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/areas/banking/add-money/add-money.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/areas/banking/add-money/add-money.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"id1\" >\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <form [formGroup]=\"addbalanceform\" (ngSubmit)=\"Continue()\">\r\n                                    <div class=\"col-md-12\">\r\n                                        <p>Name:  {{formdata1[0].Name}}</p>\r\n                                    </div>\r\n                                    <div class=\"col-md-12\">\r\n                                            <p>Account Number.  {{formdata1[0].AccountNo}}</p>\r\n                                    </div>\r\n                           \r\n                            <div class=\"col-md-12\" >\r\n                                    <p>Balance {{formdata1[0].Balance}}</p>\r\n                            </div>\r\n                              \r\n                            <div class=\"form-group\">\r\n                                    <label>Add Balance</label>\r\n                                    <input type=\"text\" formControlName=\"addbalance\" minlength=\"2\" OnlyNumber=\"true\"  class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.addbalance.errors }\" />\r\n                                    <div *ngIf=\"submitted && f.addbalance.errors\" class=\"invalid-feedback\">\r\n                                        <div *ngIf=\"f.addbalance.errors.required\">*Please enter amount first</div>\r\n                                       \r\n                                    </div>\r\n                                </div>\r\n                                \r\n                            <div class=\"form-group\">\r\n                                            <label>PIN</label>\r\n                                            <input type=\"password\" minlength=\"4\" maxlength=\"4\" formControlName=\"pin\"  OnlyNumber=\"true\"  class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.pin.errors }\" />\r\n                                            <div *ngIf=\"submitted && f.pin.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"f.pin.errors.required\">*PIN is required</div>\r\n                                                <div *ngIf=\"f.pin.errors.minlength\">*PIN must be of least 4 digit</div>\r\n                                            </div>\r\n                                        </div>\r\n            \r\n                                   \r\n                        <div class=\"form-group col-md-12\">\r\n                            <button class=\"btn btn-default\" >Add Money</button>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    \r\n  \r\n    \r\n    "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/areas/banking/change-password/change-password.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/areas/banking/change-password/change-password.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"id1\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <form [formGroup]=\"changepasswordform\" (ngSubmit)=\"resetpassword()\">\r\n\r\n                    \r\n\r\n                            <div class=\"form-group\">\r\n                                <label>Current PIN</label>\r\n                                <input type=\"password\" placeholder=\"enter new PIN\" formControlName=\"pin\" minlength =\"4\" maxlength=\"4\"  OnlyNumber=\"true\"  class=\"form-control\" \r\n                                 [ngClass]=\"{ 'is-invalid': submitted && f.pin.errors }\" />\r\n                                <div *ngIf=\"submitted && f.pin.errors\" class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"f.pin.errors.required\">*PIN is required</div>\r\n                                    <div *ngIf=\"f.pin.errors.minlength\">*PIN must be of least 4 digit</div>\r\n                                </div> \r\n                            </div>\r\n\r\n                            <div class=\"form-group\">\r\n                                <label>New PIN</label>\r\n                                <input type=\"password\" placeholder=\"enter Current PIN\" formControlName=\"newpin\" minlength =\"4\" maxlength=\"4\"  OnlyNumber=\"true\"  class=\"form-control\" \r\n                                 [ngClass]=\"{ 'is-invalid': submitted && f.newpin.errors }\" />\r\n                                <div *ngIf=\"submitted && f.newpin.errors\" class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"f.newpin.errors.required\">*PIN is required</div>\r\n                                    <div *ngIf=\"f.newpin.errors.minlength\">*PIN must be of least 4 digit</div>\r\n                                </div> \r\n                            </div>\r\n\r\n                    <div class=\"form-group\">\r\n                        <label>Confirm PIN</label>\r\n                        <input type=\"password\" placeholder=\"Confirm PIN\" formControlName=\"cpin\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.cpin.errors }\" />\r\n                        <div *ngIf=\"submitted && f.cpin.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f.cpin.errors.required\">*Confirm PIN is required</div>\r\n                            <div *ngIf=\"f.cpin.errors.mustMatch\">*PIN must match with new PIN</div>\r\n                        </div>\r\n                    </div>\r\n                        <div class=\"form-group col-md-12\">\r\n                            <button class=\"btn btn-default\">Continue</button>\r\n                        </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/areas/banking/check-balance/check-balance.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/areas/banking/check-balance/check-balance.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div  class=\"id1\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <p>Account no.: {{formdata.AccountNo}}</p>\r\n                </div>\r\n                <div class=\"col-md-12\">\r\n                       <p>Account Balance:{{formdata.Balance}}</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/areas/banking/dashboard/dashboard/dashboard.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/areas/banking/dashboard/dashboard/dashboard.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<!-- <app-sidebar></app-sidebar>\r\n\r\n<app-header></app-header> -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/areas/banking/link-account/link-account.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/areas/banking/link-account/link-account.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"id1\" >\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <form [formGroup]=\"linkaccountform\" (ngSubmit)=\"Continue()\">\r\n                            <div class=\"form-group\">\r\n                                    <label>Account Number</label>\r\n                                    <input type=\"text\" placeholder=\"enter your account number\" required minlength=\"7\" maxlength=\"7\" formControlName=\"accountno\"  OnlyNumber=\"true\"  class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.accountno.errors }\" />\r\n                                    <div *ngIf=\"submitted && f.accountno.errors\" class=\"invalid-feedback\">\r\n                                        <div *ngIf=\"f.accountno.errors.required\">*AccountNo is required</div>\r\n                                        <div *ngIf=\"f.accountno.errors.minlength\">*AccountNo must be of 7 digit</div>\r\n                                    </div>\r\n                            </div>\r\n                                  \r\n                            <div class=\"form-group\">\r\n                                            <label>PIN</label>\r\n                                            <input type=\"password\" placeholder=\"enter PIN\" required minlength=\"4\" maxlength=\"4\" formControlName=\"pin\"  OnlyNumber=\"true\"  class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.pin.errors }\" />\r\n                                            <div *ngIf=\"submitted && f.pin.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"f.pin.errors.required\">*PIN is required</div>\r\n                                                <div *ngIf=\"f.pin.errors.minlength\">*PIN must be of least 4 digit</div>\r\n                                            </div>\r\n                                        </div>\r\n            \r\n                                   \r\n                        <div class=\"form-group col-md-12\">\r\n                            <button class=\"btn btn-default\"  >Link your account</button>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    \r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/areas/banking/personal-details/personal-details.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/areas/banking/personal-details/personal-details.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div  class=\"id1\">\r\n        <div class=\"container\">\r\n            <div class=\"row\" *ngIf=\"formdata.length>0\" >\r\n                <div class=\"col-md-12\">\r\n                    \r\n                    <p>Account no. : {{formdata[0].AccountNo}}</p>\r\n                </div>\r\n                <div class=\"col-md-12\">\r\n                       <p>Name:     {{formdata[0].Name}}</p>\r\n                </div>\r\n                <div class=\"col-md-12\">\r\n                     <p>Email ID: {{formdata[0].Email}}</p> \r\n                </div>\r\n                <div class=\"col-md-12\">\r\n                    <p>Created Date: {{formdata[0].CreatedDate}}</p>  \r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/areas/banking/send-money/send-money.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/areas/banking/send-money/send-money.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"id1\" >\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <form [formGroup]=\"sendmoneyform\" (ngSubmit)=\"Continue()\">\r\n                        <div class=\"form-group\">\r\n                                <label>AccountNo.</label>\r\n                                <input type=\"text\" required minlength=\"7\" maxlength=\"7\" formControlName=\"accountno\" (blur)=\"verifyAccount($event.target.value)\"  OnlyNumber=\"true\"  class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.accountno.errors }\" />\r\n                                <div *ngIf=\"submitted && f.accountno.errors\" class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"f.accountno.errors.required\">*AccountNo is required</div>\r\n                                    <div *ngIf=\"f.accountno.errors.minlength\">*AccountNo must be of 7 digit</div>\r\n                                </div>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                                <label>Add Balance</label>\r\n                                <!-- <input type=\"text\" minlength=\"4\" formControlName=\"balance1\"  (blur)=\"verifyBalance($event.target.value)\"  OnlyNumber=\"true\"  class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.balance1.errors }\"/>\r\n                                 <input type=\"text\" minlength=\"7\" maxlength=\"7\" formControlName=\"balance\" (blur)=\"verifyBalance($event.target.value)\"  OnlyNumber=\"true\"  class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.balance.errors }\" /> \r\n                                <div *ngIf=\"submitted && f.balance1.errors\" class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"f.balance1.errors.required\">*Balance is required</div>\r\n                                    <div *ngIf=\"f.balance1.errors.minlength\">*Please enter some amount </div>\r\n                                </div> -->\r\n\r\n                                <input type=\"text\" required minlength=\"2\" formControlName=\"balance1\" (blur)=\"verifyBalance($event.target.value)\"  OnlyNumber=\"true\"  class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.balance1.errors }\" />\r\n                                <div *ngIf=\"submitted && f.balance1.errors\" class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"f.balance1.errors.required\">*Balance is required</div>\r\n                                    <div *ngIf=\"f.balance1.errors.minlength\">*Please enter some amount</div>\r\n                                </div>\r\n\r\n                        </div>\r\n                              \r\n                        <div class=\"form-group\">\r\n                                        <label>PIN</label>\r\n                                        <input type=\"password\" required minlength=\"4\" maxlength=\"4\" formControlName=\"pin\"  OnlyNumber=\"true\"  class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.pin.errors }\" />\r\n                                        <div *ngIf=\"submitted && f.pin.errors\" class=\"invalid-feedback\">\r\n                                            <div *ngIf=\"f.pin.errors.required\">*PIN is required</div>\r\n                                            <div *ngIf=\"f.pin.errors.minlength\">*PIN must be of least 4 digit</div>\r\n                                        </div>\r\n                                    </div>\r\n        \r\n                               \r\n                    <div class=\"form-group col-md-12\">\r\n                        <button class=\"btn btn-default\"  >Send Money</button>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/areas/banking/transaction-history/transaction-history.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/areas/banking/transaction-history/transaction-history.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-block\">\r\n    <div class=\"page-title\">\r\n        <h3>Trasaction List</h3>\r\n    </div>\r\n    <div  class=\"id1\">\r\n        <div class=\"container\">\r\n            <div class=\"row\" >\r\n                <div class=\"table-responsive\">\r\n                    <table class=\"table\">\r\n                        <tr>\r\n                            <th>Date</th>\r\n                            <th>Credit</th>\r\n                            <th>Debit</th>\r\n                            <th>Balance</th>\r\n                            <th>Status</th>\r\n                            <th>Comments</th>\r\n                            <th>FromAccount</th>\r\n                            <th>ToAccount</th>\r\n                        </tr>\r\n                        <tr *ngFor=\"let data of formdata[0]\">\r\n                            \r\n                            <td> {{data.Date}}</td>\r\n                            <td> {{data.Credit}}</td>\r\n                            <td> {{data.Debit}}</td>\r\n                            <td> {{data.Balance}}</td>\r\n                            <td> {{data.Status}}</td>\r\n                            <td> {{data.Comments}} </td>\r\n                            <td>{{data.FromAccount}}</td>\r\n                            <td>{{data.ToAccount}}</td>\r\n                        </tr>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/areas/banking/user-order/userorder/userorder.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/areas/banking/user-order/userorder/userorder.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"id1\" >\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <form [formGroup]=\"userorderform\" (ngSubmit)=\"continue()\">\r\n                                <div class=\"col-md-12\">\r\n                                    <p>Amount: {{formdata.Amount}}  </p>\r\n                                </div>\r\n                                <div class=\"col-md-12\">\r\n                                        <p>OrderId: {{formdata.OrderId}} </p>\r\n                                </div>\r\n                          \r\n                        <div class=\"form-group\">\r\n                            <label>Account Number</label>\r\n                            <input type=\"text\" required minlength=\"7\" maxlength=\"7\" formControlName=\"accountno\" (blur)=\"verifyAccount($event.target.value)\"  OnlyNumber=\"true\"  class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.accountno.errors }\" />\r\n                            <div *ngIf=\"submitted && f.accountno.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"f.accountno.errors.required\">*Account Number is required</div>\r\n                                <div *ngIf=\"f.accountno.errors.minlength\">*Account Number must be of 7 digit</div>\r\n                            </div>\r\n                    </div>\r\n                            \r\n                    <div class=\"form-group\">\r\n                      \r\n                        <input type=\"text\" placeholder=\"enter OTP\" minlength=\"4\" maxlength=\"4\" formControlName=\"otp\"  OnlyNumber=\"true\"  class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.otp.errors }\" />\r\n                        <div *ngIf=\"submitted && f.otp.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f.otp.errors.required\">*OTP is required</div>\r\n                            <div *ngIf=\"f.otp.errors.minlength\">*OTP must be of least 4 digit</div>\r\n                        </div>\r\n                    </div>\r\n        \r\n                               \r\n                    <div class=\"form-group col-md-12\">\r\n                        <button class=\"btn btn-default\" > pay</button>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/areas/banking/user-order/userorderframe/userorderframe.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/areas/banking/user-order/userorderframe/userorderframe.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<iframe src=\"http://localhost:4200/userorder\" width=\"500px\" height=\"700px\" class=\"iframe\"></iframe>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/areas/globalpages/global-footer/global-footer.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/areas/globalpages/global-footer/global-footer.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer-area footer--light\">\r\n    <div class=\"footer-big\">\r\n      <!-- start .container -->\r\n      <div class=\"container\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-3 col-sm-12\">\r\n            <div class=\"footer-widget\">\r\n              <div class=\"widget-about\">\r\n                    <a class=\"navbar-brand\" href=\"#\">\r\n                        <img src=\"assets/images/egre.png\" width=\"40\" height=\"40\" class=\"d-inline-block align-top\" alt=\"\">\r\n                        MiniBank\r\n                   </a>\r\n                <p>\"Everyday is a bank account, and time is our currency\"</p>\r\n                <ul class=\"contact-details\">\r\n                  <li>\r\n                    <span class=\"icon-earphones\"></span> Call Us:\r\n                    <a href=\"tel:344-755-111\">344-755-111</a>\r\n                  </li>\r\n                  <li>\r\n                    <span class=\"icon-envelope-open\"></span>\r\n                    <a href=\"mailto:support@aazztech.com\">support@aazztech.com</a>\r\n                  </li>\r\n                </ul>\r\n              </div>\r\n            </div>\r\n            <!-- Ends: .footer-widget -->\r\n          </div>\r\n          <!-- end /.col-md-4 -->\r\n          <div class=\"col-md-3 col-sm-4\">\r\n            <div class=\"footer-widget\">\r\n              <div class=\"footer-menu footer-menu--1\">\r\n                <h4 class=\"footer-widget-title\">Popular Category</h4>\r\n                <ul>\r\n                  <li>\r\n                    <a href=\"#\">Wordpress</a>\r\n                  </li>\r\n                  <li>\r\n                    <a href=\"#\">Plugins</a>\r\n                  </li>\r\n                  <li>\r\n                    <a href=\"#\">Joomla Template</a>\r\n                  </li>\r\n                  <li>\r\n                    <a href=\"#\">Admin Template</a>\r\n                  </li>\r\n                  <li>\r\n                    <a href=\"#\">HTML Template</a>\r\n                  </li>\r\n                </ul>\r\n              </div>\r\n              <!-- end /.footer-menu -->\r\n            </div>\r\n            <!-- Ends: .footer-widget -->\r\n          </div>\r\n          <!-- end /.col-md-3 -->\r\n  \r\n          <div class=\"col-md-3 col-sm-4\">\r\n            <div class=\"footer-widget\">\r\n              <div class=\"footer-menu\">\r\n                <h4 class=\"footer-widget-title\">Our Company</h4>\r\n                <ul>\r\n                  <li>\r\n                    <a href=\"#\">About Us</a>\r\n                  </li>\r\n                  <li>\r\n                    <a href=\"#\">How It Works</a>\r\n                  </li>\r\n                  <li>\r\n                    <a href=\"#\">Affiliates</a>\r\n                  </li>\r\n                  <li>\r\n                    <a href=\"#\">Testimonials</a>\r\n                  </li>\r\n                  <li>\r\n                    <a href=\"#\">Contact Us</a>\r\n                  </li>\r\n                  <li>\r\n                    <a href=\"#\">Plan &amp; Pricing</a>\r\n                  </li>\r\n                  <li>\r\n                    <a href=\"#\">Blog</a>\r\n                  </li>\r\n                </ul>\r\n              </div>\r\n              <!-- end /.footer-menu -->\r\n            </div>\r\n            <!-- Ends: .footer-widget -->\r\n          </div>\r\n          <!-- end /.col-lg-3 -->\r\n  \r\n          <div class=\"col-md-3 col-sm-4\">\r\n            <div class=\"footer-widget\">\r\n              <div class=\"footer-menu no-padding\">\r\n                <h4 class=\"footer-widget-title\">Help Support</h4>\r\n                <ul>\r\n                  <li>\r\n                    <a href=\"#\">Support Forum</a>\r\n                  </li>\r\n                  <li>\r\n                    <a href=\"#\">Terms &amp; Conditions</a>\r\n                  </li>\r\n                  <li>\r\n                    <a href=\"#\">Support Policy</a>\r\n                  </li>\r\n                  <li>\r\n                    <a href=\"#\">Refund Policy</a>\r\n                  </li>\r\n                  <li>\r\n                    <a href=\"#\">FAQs</a>\r\n                  </li>\r\n                  <li>\r\n                    <a href=\"#\">Buyers Faq</a>\r\n                  </li>\r\n                  <li>\r\n                    <a href=\"#\">Sellers Faq</a>\r\n                  </li>\r\n                </ul>\r\n              </div>\r\n              <!-- end /.footer-menu -->\r\n            </div>\r\n            <!-- Ends: .footer-widget -->\r\n          </div>\r\n          <!-- Ends: .col-lg-3 -->\r\n  \r\n        </div>\r\n        <!-- end /.row -->\r\n      </div>\r\n      <!-- end /.container -->\r\n    </div>\r\n    <!-- end /.footer-big -->\r\n  \r\n    <div class=\"mini-footer\">\r\n      <div class=\"container\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12\">\r\n            <div class=\"copyright-text\">\r\n              <p>© 2019\r\n                <a href=\"#\">fdhhj</a>. All rights reserved. Created by\r\n                <a href=\"#\">minibank</a>\r\n              </p>\r\n            </div>\r\n  \r\n          \r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </footer>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/areas/globalpages/global-header/global-header.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/areas/globalpages/global-header/global-header.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<header class=\"header-dark\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-6\">\r\n                <ul class=\"nav social-links\">\r\n                    <li><a href=\"https://www.facebook.com\"><i class=\"fa fa-facebook\"></i><img src=\"assets/images/facebook.jfif\" width=\"30\" height=\"30\" class=\"d-inline-block align-top\" alt=\"\"></a></li>\r\n                    <li><a href=\"https://www.twitter.com\"><i class=\"fa fa-twitter\"></i><img src=\"assets/images/twitter.png\" width=\"30\" height=\"30\" class=\"d-inline-block align-top\" alt=\"\"></a></li>\r\n                    <li><a href=\"https://www.google.com\"><i class=\"fa fa-google-plus\"></i><img src=\"assets/images/google.png\" width=\"30\" height=\"30\" class=\"d-inline-block align-top\" alt=\"\"></a></li>\r\n                </ul>\r\n            </div>\r\n            <div class=\"col-sm-6 text-right top-sub-links\">\r\n                <span class=\"text-space\">\r\n                        <a class=\"text-right\" [routerLink]=\"['/login']\" >LOGIN</a>\r\n                </span>\r\n                <span class=\"text-space\">\r\n                        <a class=\"text-right\" [routerLink]=\"['/register']\" >REGISTER</a>\r\n                </span>\r\n            </div>\r\n        </div>\r\n    </div>    \r\n</header>\r\n\r\n<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n    <div class=\"container-fluid\">\r\n        <a class=\"navbar-brand\" href=\"#\">\r\n          <img src=\"assets/images/egre.png\" width=\"40\" height=\"40\" class=\"d-inline-block align-top\" alt=\"\">\r\n          MiniBank\r\n        </a>\r\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n         </button>\r\n              \r\n                <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n                  <ul class=\"navbar-nav ml-auto\">\r\n                    <ul class=\"nav navbar-nav navbar-right top-links\">\r\n                            <li><a href=\"index.html\" class=\"active scroll\">Home</a></li>\r\n                            <li><a href=\"#about\" class=\"scroll\">About</a></li>\r\n                            <li><a href=\"#services\" class=\"scroll\">Services</a></li>\r\n                            <li><a href=\"#contact\" class=\"scroll\">Contact</a></li>\r\n                        </ul>\r\n                        </ul>\r\n                  <form class=\"form-inline my-2 my-lg-0\">\r\n                    <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\r\n                    <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\r\n                  </form>\r\n                </div>\r\n            </div>\r\n              </nav> \r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/areas/globalpages/home/home.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/areas/globalpages/home/home.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<!-- <app-navbar></app-navbar> -->\r\n<div class=\"banner masthead\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-xl-12 mx-auto\">\r\n            <h1>Build a landing page for your busines  </h1>\r\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>\r\n            <button type=\"submit\" class=\"btn btn-lg btn-primary\">Sign up!</button>\r\n            </div>\r\n            \r\n                            \r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<!-- Icons Grid -->\r\n<section class=\"features-icons bg-light text-center\">\r\n        <div class=\"container\">\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-4\">\r\n              <div class=\"features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3\">\r\n                <div class=\"features-icons-icon d-flex\">\r\n                  <i class=\"icon-screen-desktop m-auto text-primary\"></i>\r\n                </div>\r\n                <h3>Fully Responsive</h3>\r\n                <p class=\"lead mb-0\">This theme will look great on any device, no matter the size!</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-4\">\r\n              <div class=\"features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3\">\r\n                <div class=\"features-icons-icon d-flex\">\r\n                  <i class=\"icon-layers m-auto text-primary\"></i>\r\n                </div>\r\n                <h3>Bootstrap 4 Ready</h3>\r\n                <p class=\"lead mb-0\">Featuring the latest build of the new Bootstrap 4 framework!</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-4\">\r\n              <div class=\"features-icons-item mx-auto mb-0 mb-lg-3\">\r\n                <div class=\"features-icons-icon d-flex\">\r\n                  <i class=\"icon-check m-auto text-primary\"></i>\r\n                </div>\r\n                <h3>Easy to Use</h3>\r\n                <p class=\"lead mb-0\">Ready to use with your own content, or customize the source files!</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </section>\r\n    \r\n      <!-- Image Showcases -->\r\n      <section class=\"showcase\">\r\n        <div class=\"container-fluid p-0\">\r\n          <div class=\"row no-gutters\">\r\n    \r\n            <div class=\"col-lg-6 order-lg-2 text-white showcase-img\" style=\"background-image: url('assets/images/bank1.jpg');\"></div>\r\n            <div class=\"col-lg-6 order-lg-1 my-auto showcase-text\">\r\n              <h2>Fully Responsive Design</h2>\r\n              <p class=\"lead mb-0\">When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!</p>\r\n            </div>\r\n          </div>\r\n          <div class=\"row no-gutters\">\r\n            <div class=\"col-lg-6 text-white showcase-img\" style=\"background-image: url('assets/images/bank2.jpg');\"></div>\r\n            <div class=\"col-lg-6 my-auto showcase-text\">\r\n              <h2>Updated For Bootstrap 4</h2>\r\n              <p class=\"lead mb-0\">Newly improved, and full of great utility classes, Bootstrap 4 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 4!</p>\r\n            </div>\r\n          </div>\r\n          <div class=\"row no-gutters\">\r\n            <div class=\"col-lg-6 order-lg-2 text-white showcase-img\" style=\"background-image: url('assets/images/bank3.jpg');\"></div>\r\n            <div class=\"col-lg-6 order-lg-1 my-auto showcase-text\">\r\n              <h2>Easy to Use &amp; Customize</h2>\r\n              <p class=\"lead mb-0\">Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </section>\r\n    \r\n      <!-- Testimonials -->\r\n      <section class=\"testimonials text-center bg-light\">\r\n        <div class=\"container\">\r\n          <h2 class=\"mb-5\">What people are saying...</h2>\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-4\">\r\n              <div class=\"testimonial-item mx-auto mb-5 mb-lg-0\">\r\n                <img class=\"img-fluid rounded-circle mb-3\" src=\"assets/images/testimonials-1.jpg\" alt=\"\">\r\n                <h5>Margaret E.</h5>\r\n                <p class=\"font-weight-light mb-0\">\"This is fantastic! Thanks so much guys!\"</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-4\">\r\n              <div class=\"testimonial-item mx-auto mb-5 mb-lg-0\">\r\n                <img class=\"img-fluid rounded-circle mb-3\" src=\"assets/images/testimonials-2.jpg\" alt=\"\">\r\n                <h5>Fred S.</h5>\r\n                <p class=\"font-weight-light mb-0\">\"Bootstrap is amazing. I've been using it to create lots of super nice landing pages.\"</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-4\">\r\n              <div class=\"testimonial-item mx-auto mb-5 mb-lg-0\">\r\n                <img class=\"img-fluid rounded-circle mb-3\" src=\"assets/images/testimonials-3.jpg\" alt=\"\">\r\n                <h5>Sarah W.</h5>\r\n                <p class=\"font-weight-light mb-0\">\"Thanks so much for making these free resources available to us!\"</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </section>\r\n    \r\n      <!-- Call to Action -->\r\n      <section class=\"call-to-action text-white text-center\">\r\n        <div class=\"overlay\"></div>\r\n        <div class=\"container\">\r\n          <div class=\"row\">\r\n            <div class=\"col-xl-9 mx-auto\">\r\n              <h2 class=\"mb-4\">Ready to get started? Sign up now!</h2>\r\n            </div>\r\n            <div class=\"col-md-10 col-lg-8 col-xl-7 mx-auto\">\r\n              <form>\r\n                <div class=\"form-row\">\r\n                  <div class=\"col-12 col-md-9 mb-2 mb-md-0\">\r\n                    <input type=\"email\" class=\"form-control form-control-lg\" placeholder=\"Enter your email...\">\r\n                  </div>\r\n                  <div class=\"col-12 col-md-3\">\r\n                    <button type=\"submit\" class=\"btn btn-block btn-lg btn-primary\">Sign up!</button>\r\n                  </div>\r\n                </div>\r\n              </form>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </section>\r\n      \r\n    \r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layout/footer/footer/footer.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layout/footer/footer/footer.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n        <footer class=\"footer-area footer--light\"> \r\n                <div class=\"mini-footer\">\r\n                  <div class=\"container\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-md-12\">\r\n                        <div class=\"copyright-text\">\r\n                          <p>© 2019\r\n                            <a href=\"#\">fdhhj</a>. All rights reserved. Created by\r\n                            <a href=\"#\">minibank</a>\r\n                          </p>\r\n                        </div> \r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layout/header/header/header.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layout/header/header/header.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"header-dark\">\r\n<nav class=\"navbar navbar-expand-lg \">\r\n    <div class=\"container-fluid\">\r\n        <a class=\"navbar-brand\" href=\"#\">\r\n                <img src=\"assets/images/egre.png\" width=\"40\" height=\"40\" class=\"d-inline-block align-top\" alt=\"\">\r\n            MiniBank\r\n        </a>\r\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n            </button>\r\n                \r\n                <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n                    <ul class=\"nav navbar-nav ml-auto navbar-right nv-lnk\">\r\n                            <li><a href=\"index.html\" class=\"active scroll\">Dashboard</a></li>\r\n                            <li><a href=\"#about\" class=\"scroll\">Accounts</a></li>\r\n                            <li><a href=\"#services\" class=\"scroll\">Services</a></li>\r\n                            <li><a href=\"#contact\" class=\"scroll\">Contact</a></li>\r\n                            <li></li>\r\n                            <li><a [routerLink]=\"['/dashboard']\"><img src=\"assets/images/user.png\" [matMenuTriggerFor]=\"menu\" width=\"40\" height=\"40\" alt=\"user\"></a>\r\n                                <mat-menu #menu=\"matMenu\">\r\n                                  <button mat-menu-item (click)=\"logout()\">Logout</button>\r\n                                  <button mat-menu-item (click)=\"changepass()\">Change Password</button>\r\n                                </mat-menu>\r\n                            </li>\r\n                        </ul>\r\n                        \r\n                </div>\r\n            </div>\r\n     </nav> \r\n</header>\r\n\r\n\r\n\r\n\r\n\r\n   "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layout/sidebar/sidebar/sidebar.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layout/sidebar/sidebar/sidebar.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-sidebar class=\"sidebar\">\r\n   <div class=\"sd-nav-wrp\">   \r\n   <form class=\"search-container\">\r\n            <input type=\"text\" id=\"search-bar\" placeholder=\"search\">\r\n            <a href=\"#\" class=\"search-icon\">\r\n                <i class=\"fa fa-search\"></i>\r\n            </a>\r\n          </form>\r\n  \r\n            <!-- <div class=\"layout-menu-search ui-fluid\">\r\n               <p-autocomplete  class=\"ng-tns-c0-0 ng-tns-c1-1 ng-valid ng-dirty ng-touched\" placeholder=\"Search\">\r\n                  <span class=\"ng-tns-c1-1 ui-autocomplete ui-widget\">\r\n                     <input aria-autocomplete=\"list\" aria-haspopup=\"true\" autocomplete=\"off\" role=\"combobox\" class=\"ng-tns-c1-1 ui-inputtext ui-widget ui-state-default ui-corner-all ui-autocomplete-input ng-star-inserted\" type=\"text\" aria-expanded=\"false\" aria-activedescendant=\"p-highlighted-option\" placeholder=\"Search\">\r\n                     </span></p-autocomplete>\r\n                     <i class=\"pi pi-search\"></i></div> -->\r\n \r\n      <div >\r\n      <ul class=\"nav navbar-nav ml-auto navbar-right nv-lnk\">\r\n            <li><a [routerLink]=\"['/person-detail']\" class=\"active scroll\">Personal Details </a></li>\r\n            <li><a [routerLink]=\"['/check-balance']\" class=\"scroll\">Check Balance</a></li>\r\n            <li><a [routerLink]=\"['/tansaction']\" class=\"scroll\">Transaction History</a></li>\r\n            <li> <a [routerLink]=\"['/send-money']\" class=\"scroll\">Send Money</a></li>\r\n            <li><a [routerLink]=\"['/add-money']\" class=\"scroll\">Add Money</a></li>\r\n        </ul>\r\n     </div>\r\n     </div>\r\n    </p-sidebar>\r\n    \r\n    \r\n    "

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _areas_auth_register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./areas/auth/register/register.component */ "./src/app/areas/auth/register/register.component.ts");
/* harmony import */ var _areas_auth_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./areas/auth/login/login.component */ "./src/app/areas/auth/login/login.component.ts");
/* harmony import */ var _guards_authguard_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./guards/authguard.guard */ "./src/app/guards/authguard.guard.ts");
/* harmony import */ var _areas_auth_emailverification_emailverification_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./areas/auth/emailverification/emailverification.component */ "./src/app/areas/auth/emailverification/emailverification.component.ts");
/* harmony import */ var _areas_auth_forgotpassword_forgotpassword_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./areas/auth/forgotpassword/forgotpassword.component */ "./src/app/areas/auth/forgotpassword/forgotpassword.component.ts");
/* harmony import */ var _areas_globalpages_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./areas/globalpages/home/home.component */ "./src/app/areas/globalpages/home/home.component.ts");
/* harmony import */ var _areas_banking_dashboard_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./areas/banking/dashboard/dashboard/dashboard.component */ "./src/app/areas/banking/dashboard/dashboard/dashboard.component.ts");
/* harmony import */ var _areas_banking_personal_details_personal_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./areas/banking/personal-details/personal-details.component */ "./src/app/areas/banking/personal-details/personal-details.component.ts");
/* harmony import */ var _areas_banking_add_money_add_money_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./areas/banking/add-money/add-money.component */ "./src/app/areas/banking/add-money/add-money.component.ts");
/* harmony import */ var _areas_banking_send_money_send_money_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./areas/banking/send-money/send-money.component */ "./src/app/areas/banking/send-money/send-money.component.ts");
/* harmony import */ var _areas_banking_check_balance_check_balance_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./areas/banking/check-balance/check-balance.component */ "./src/app/areas/banking/check-balance/check-balance.component.ts");
/* harmony import */ var _areas_auth_resetpassword_resetpassword_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./areas/auth/resetpassword/resetpassword.component */ "./src/app/areas/auth/resetpassword/resetpassword.component.ts");
/* harmony import */ var _guards_anonymous_guard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./guards/anonymous.guard */ "./src/app/guards/anonymous.guard.ts");
/* harmony import */ var _areas_banking_user_order_userorder_userorder_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./areas/banking/user-order/userorder/userorder.component */ "./src/app/areas/banking/user-order/userorder/userorder.component.ts");
/* harmony import */ var _areas_banking_user_order_userorderframe_userorderframe_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./areas/banking/user-order/userorderframe/userorderframe.component */ "./src/app/areas/banking/user-order/userorderframe/userorderframe.component.ts");
/* harmony import */ var _areas_banking_transaction_history_transaction_history_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./areas/banking/transaction-history/transaction-history.component */ "./src/app/areas/banking/transaction-history/transaction-history.component.ts");
/* harmony import */ var _areas_banking_link_account_link_account_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./areas/banking/link-account/link-account.component */ "./src/app/areas/banking/link-account/link-account.component.ts");
/* harmony import */ var _areas_banking_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./areas/banking/change-password/change-password.component */ "./src/app/areas/banking/change-password/change-password.component.ts");





















const routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'home', component: _areas_globalpages_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"], canActivate: [_guards_anonymous_guard__WEBPACK_IMPORTED_MODULE_15__["AnonymousGuard"]] },
    { path: 'register', component: _areas_auth_register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"], canActivate: [_guards_anonymous_guard__WEBPACK_IMPORTED_MODULE_15__["AnonymousGuard"]] },
    { path: 'login', component: _areas_auth_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"], canActivate: [_guards_anonymous_guard__WEBPACK_IMPORTED_MODULE_15__["AnonymousGuard"]] },
    { path: 'resetpass', component: _areas_auth_resetpassword_resetpassword_component__WEBPACK_IMPORTED_MODULE_14__["ResetpasswordComponent"] },
    { path: 'verify', component: _areas_auth_emailverification_emailverification_component__WEBPACK_IMPORTED_MODULE_6__["EmailverificationComponent"] },
    { path: 'forgotpass', component: _areas_auth_forgotpassword_forgotpassword_component__WEBPACK_IMPORTED_MODULE_7__["ForgotpasswordComponent"] },
    { path: 'dashboard', component: _areas_banking_dashboard_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"], canActivate: [_guards_authguard_guard__WEBPACK_IMPORTED_MODULE_5__["AuthguardGuard"]] },
    { path: 'person-detail', component: _areas_banking_personal_details_personal_details_component__WEBPACK_IMPORTED_MODULE_10__["PersonalDetailsComponent"], canActivate: [_guards_authguard_guard__WEBPACK_IMPORTED_MODULE_5__["AuthguardGuard"]] },
    { path: 'add-money', component: _areas_banking_add_money_add_money_component__WEBPACK_IMPORTED_MODULE_11__["AddMoneyComponent"], canActivate: [_guards_authguard_guard__WEBPACK_IMPORTED_MODULE_5__["AuthguardGuard"]] },
    { path: 'send-money', component: _areas_banking_send_money_send_money_component__WEBPACK_IMPORTED_MODULE_12__["SendMoneyComponent"], canActivate: [_guards_authguard_guard__WEBPACK_IMPORTED_MODULE_5__["AuthguardGuard"]] },
    { path: 'check-balance', component: _areas_banking_check_balance_check_balance_component__WEBPACK_IMPORTED_MODULE_13__["CheckBalanceComponent"], canActivate: [_guards_authguard_guard__WEBPACK_IMPORTED_MODULE_5__["AuthguardGuard"]] },
    { path: 'tansaction', component: _areas_banking_transaction_history_transaction_history_component__WEBPACK_IMPORTED_MODULE_18__["TransactionHistoryComponent"], canActivate: [_guards_authguard_guard__WEBPACK_IMPORTED_MODULE_5__["AuthguardGuard"]] },
    { path: 'userorder', component: _areas_banking_user_order_userorder_userorder_component__WEBPACK_IMPORTED_MODULE_16__["UserorderComponent"] },
    { path: 'userframe', component: _areas_banking_user_order_userorderframe_userorderframe_component__WEBPACK_IMPORTED_MODULE_17__["UserorderframeComponent"] },
    { path: 'linkaccount', component: _areas_banking_link_account_link_account_component__WEBPACK_IMPORTED_MODULE_19__["LinkAccountComponent"] },
    { path: 'changepass', component: _areas_banking_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_20__["ChangePasswordComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let AppComponent = class AppComponent {
    constructor(route) {
        this.route = route;
        this.title = 'bankfrontend';
        this.islogin = true;
        this.isLoginUrl = false;
        this.route.events.subscribe(res => {
            if (res instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                if (res.url === '/login' || res.url === '/register' || res.url === '/verify' || res.url === '/forgotpass' || res.url === '/resetpass' || res.url === '/userorder' || res.url === '/userframe' || res.url === '/linkaccount') {
                    this.isLoginUrl = true;
                }
                if (res.url === '/dashboard') {
                    if (localStorage.getItem('authenticationToken') == null || localStorage.getItem('authenticationToken') == '') {
                        this.islogin = false;
                    }
                    else {
                        this.islogin = true;
                    }
                }
            }
        });
    }
    ;
    ngOnInit() {
        //console.log(this.route.url)
        if (localStorage.getItem('authenticationToken') == null || localStorage.getItem('authenticationToken') == '') {
            this.islogin = false;
        }
        else {
            this.islogin = true;
        }
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _syncfusion_ej2_angular_popups__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-angular-popups */ "./node_modules/@syncfusion/ej2-angular-popups/@syncfusion/ej2-angular-popups.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var primeng_tabmenu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/tabmenu */ "./node_modules/primeng/tabmenu.js");
/* harmony import */ var primeng_tabmenu__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(primeng_tabmenu__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/menu */ "./node_modules/primeng/menu.js");
/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(primeng_menu__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");
/* harmony import */ var primeng_sidebar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/sidebar */ "./node_modules/primeng/sidebar.js");
/* harmony import */ var primeng_sidebar__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(primeng_sidebar__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var primeng_accordion__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/accordion */ "./node_modules/primeng/accordion.js");
/* harmony import */ var primeng_accordion__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(primeng_accordion__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var angular_user_idle__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! angular-user-idle */ "./node_modules/angular-user-idle/fesm2015/angular-user-idle.js");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-mask */ "./node_modules/ngx-mask/fesm2015/ngx-mask.js");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! angular2-text-mask */ "./node_modules/angular2-text-mask/dist/angular2TextMask.js");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _areas_auth_login_login_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./areas/auth/login/login.component */ "./src/app/areas/auth/login/login.component.ts");
/* harmony import */ var _areas_auth_register_register_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./areas/auth/register/register.component */ "./src/app/areas/auth/register/register.component.ts");
/* harmony import */ var _areas_auth_forgotpassword_forgotpassword_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./areas/auth/forgotpassword/forgotpassword.component */ "./src/app/areas/auth/forgotpassword/forgotpassword.component.ts");
/* harmony import */ var _areas_auth_emailverification_emailverification_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./areas/auth/emailverification/emailverification.component */ "./src/app/areas/auth/emailverification/emailverification.component.ts");
/* harmony import */ var _layout_header_header_header_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./layout/header/header/header.component */ "./src/app/layout/header/header/header.component.ts");
/* harmony import */ var _layout_sidebar_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./layout/sidebar/sidebar/sidebar.component */ "./src/app/layout/sidebar/sidebar/sidebar.component.ts");
/* harmony import */ var _layout_footer_footer_footer_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./layout/footer/footer/footer.component */ "./src/app/layout/footer/footer/footer.component.ts");
/* harmony import */ var _areas_globalpages_home_home_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./areas/globalpages/home/home.component */ "./src/app/areas/globalpages/home/home.component.ts");
/* harmony import */ var _areas_banking_dashboard_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./areas/banking/dashboard/dashboard/dashboard.component */ "./src/app/areas/banking/dashboard/dashboard/dashboard.component.ts");
/* harmony import */ var _areas_banking_personal_details_personal_details_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./areas/banking/personal-details/personal-details.component */ "./src/app/areas/banking/personal-details/personal-details.component.ts");
/* harmony import */ var _areas_banking_check_balance_check_balance_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./areas/banking/check-balance/check-balance.component */ "./src/app/areas/banking/check-balance/check-balance.component.ts");
/* harmony import */ var _areas_banking_transaction_history_transaction_history_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./areas/banking/transaction-history/transaction-history.component */ "./src/app/areas/banking/transaction-history/transaction-history.component.ts");
/* harmony import */ var _areas_banking_send_money_send_money_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./areas/banking/send-money/send-money.component */ "./src/app/areas/banking/send-money/send-money.component.ts");
/* harmony import */ var _areas_banking_add_money_add_money_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./areas/banking/add-money/add-money.component */ "./src/app/areas/banking/add-money/add-money.component.ts");
/* harmony import */ var _areas_globalpages_global_header_global_header_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./areas/globalpages/global-header/global-header.component */ "./src/app/areas/globalpages/global-header/global-header.component.ts");
/* harmony import */ var _areas_globalpages_global_footer_global_footer_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./areas/globalpages/global-footer/global-footer.component */ "./src/app/areas/globalpages/global-footer/global-footer.component.ts");
/* harmony import */ var _shared_directives_onlynumber_OnlyNumber__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./shared/_directives/onlynumber/OnlyNumber */ "./src/app/shared/_directives/onlynumber/OnlyNumber.ts");
/* harmony import */ var _areas_auth_resetpassword_resetpassword_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./areas/auth/resetpassword/resetpassword.component */ "./src/app/areas/auth/resetpassword/resetpassword.component.ts");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _services_Interceptor_interceptor_service__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./services/Interceptor/interceptor.service */ "./src/app/services/Interceptor/interceptor.service.ts");
/* harmony import */ var _areas_banking_user_order_userorder_userorder_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./areas/banking/user-order/userorder/userorder.component */ "./src/app/areas/banking/user-order/userorder/userorder.component.ts");
/* harmony import */ var _areas_banking_user_order_userorderframe_userorderframe_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./areas/banking/user-order/userorderframe/userorderframe.component */ "./src/app/areas/banking/user-order/userorderframe/userorderframe.component.ts");
/* harmony import */ var _areas_banking_link_account_link_account_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./areas/banking/link-account/link-account.component */ "./src/app/areas/banking/link-account/link-account.component.ts");
/* harmony import */ var _areas_banking_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./areas/banking/change-password/change-password.component */ "./src/app/areas/banking/change-password/change-password.component.ts");












































//import { OnlyNumber } from '../app/_helpers/Directive/OnlyNumber';
//import { ActivatedRoute } from "@angular/router";
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _areas_auth_login_login_component__WEBPACK_IMPORTED_MODULE_20__["LoginComponent"],
            _areas_banking_user_order_userorder_userorder_component__WEBPACK_IMPORTED_MODULE_40__["UserorderComponent"],
            _areas_banking_user_order_userorderframe_userorderframe_component__WEBPACK_IMPORTED_MODULE_41__["UserorderframeComponent"],
            _areas_auth_register_register_component__WEBPACK_IMPORTED_MODULE_21__["RegisterComponent"],
            _areas_auth_forgotpassword_forgotpassword_component__WEBPACK_IMPORTED_MODULE_22__["ForgotpasswordComponent"],
            _areas_auth_emailverification_emailverification_component__WEBPACK_IMPORTED_MODULE_23__["EmailverificationComponent"],
            _layout_header_header_header_component__WEBPACK_IMPORTED_MODULE_24__["HeaderComponent"],
            _layout_sidebar_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_25__["SidebarComponent"],
            _layout_footer_footer_footer_component__WEBPACK_IMPORTED_MODULE_26__["FooterComponent"],
            _areas_globalpages_home_home_component__WEBPACK_IMPORTED_MODULE_27__["HomeComponent"],
            _areas_banking_dashboard_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_28__["DashboardComponent"],
            _areas_banking_personal_details_personal_details_component__WEBPACK_IMPORTED_MODULE_29__["PersonalDetailsComponent"],
            _areas_banking_check_balance_check_balance_component__WEBPACK_IMPORTED_MODULE_30__["CheckBalanceComponent"],
            _areas_banking_transaction_history_transaction_history_component__WEBPACK_IMPORTED_MODULE_31__["TransactionHistoryComponent"],
            _areas_banking_send_money_send_money_component__WEBPACK_IMPORTED_MODULE_32__["SendMoneyComponent"],
            _areas_banking_add_money_add_money_component__WEBPACK_IMPORTED_MODULE_33__["AddMoneyComponent"],
            _areas_globalpages_global_header_global_header_component__WEBPACK_IMPORTED_MODULE_34__["GlobalHeaderComponent"],
            _areas_globalpages_global_footer_global_footer_component__WEBPACK_IMPORTED_MODULE_35__["GlobalFooterComponent"], _shared_directives_onlynumber_OnlyNumber__WEBPACK_IMPORTED_MODULE_36__["OnlyNumber"], _areas_auth_resetpassword_resetpassword_component__WEBPACK_IMPORTED_MODULE_37__["ResetpasswordComponent"], _areas_banking_user_order_userorderframe_userorderframe_component__WEBPACK_IMPORTED_MODULE_41__["UserorderframeComponent"], _areas_banking_link_account_link_account_component__WEBPACK_IMPORTED_MODULE_42__["LinkAccountComponent"], _areas_banking_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_43__["ChangePasswordComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            // ActivatedRoute,
            _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_15__["JwtModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__["BrowserAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            ngx_mask__WEBPACK_IMPORTED_MODULE_17__["NgxMaskModule"].forRoot(),
            ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrModule"].forRoot(),
            angular2_text_mask__WEBPACK_IMPORTED_MODULE_18__["TextMaskModule"],
            primeng_tabmenu__WEBPACK_IMPORTED_MODULE_10__["TabMenuModule"],
            primeng_menu__WEBPACK_IMPORTED_MODULE_11__["MenuModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatSidenavModule"],
            primeng_sidebar__WEBPACK_IMPORTED_MODULE_13__["SidebarModule"],
            angular_user_idle__WEBPACK_IMPORTED_MODULE_16__["UserIdleModule"].forRoot({ idle: 600, timeout: 300, ping: 120 }),
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_38__["MatMenuModule"],
            primeng_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _syncfusion_ej2_angular_popups__WEBPACK_IMPORTED_MODULE_3__["DialogModule"]
        ],
        providers: [{
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"],
                useClass: _services_Interceptor_interceptor_service__WEBPACK_IMPORTED_MODULE_39__["InterceptorService"],
                multi: true,
            }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/areas/auth/emailverification/emailverification.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/areas/auth/emailverification/emailverification.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label {\n  margin: 0px;\n}\n\n.id1 {\n  font-family: \"Open Sans Condensed\", arial, sans;\n  width: 500px;\n  padding: 20px;\n  background: 255;\n  margin: 80px auto;\n  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.22);\n  -moz-box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.22);\n  -webkit-box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.22);\n  background: white;\n}\n\n.id1 button:hover {\n  color: white;\n}\n\n.id1 h2 {\n  background: #4D4D4D;\n  text-transform: uppercase;\n  font-family: \"Open Sans Condensed\", sans-serif;\n  color: #797979;\n  font-size: 18px;\n  font-weight: 100;\n  padding: 20px;\n  margin: -30px -30px 30px -30px;\n}\n\n.id1 input[type=text],\n.id1 input[type=email],\n.id1 input[type=password],\n.form--8 select {\n  box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  outline: none;\n  display: block;\n  width: 100%;\n  padding: 5px;\n  border: none;\n  border-bottom: 1px solid #ddd;\n  background: transparent;\n  margin-bottom: 10px;\n  font: 16px Arial, Helvetica, sans-serif;\n  height: 30px;\n  margin: 0px;\n}\n\n.id1 input[type=button],\n.id1 input[type=submit] {\n  box-shadow: inset 0px 1px 0px 0px #45D6D6;\n  background-color: #2CBBBB;\n  border: 1px solid #27A0A0;\n  display: inline-block;\n  cursor: pointer;\n  color: #FFFFFF;\n  font-family: \"Open Sans Condensed\", sans-serif;\n  font-size: 14px;\n  padding: 8px 18px;\n  text-decoration: none;\n  text-transform: uppercase;\n}\n\n.id1 input[type=button]:hover,\n.id1 input[type=submit]:hover {\n  background: -webkit-gradient(linear, left top, left bottom, color-stop(5%, #34CACA), to(#30C9C9));\n  background: linear-gradient(to bottom, #34CACA 5%, #30C9C9 100%);\n  background-color: #34CACA;\n}\n\nbody {\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n* {\n  box-sizing: border-box;\n}\n\n/* Full-width input fields */\n\ninput[type=text], input[type=password] {\n  width: 100%;\n  padding: 10px;\n  margin: 5px 0 20px 0;\n  display: inline-block;\n  border: none;\n  background: #f1f1f1;\n}\n\n/* Add a background color when the inputs get focus */\n\ninput[type=text]:focus, input[type=password]:focus {\n  background-color: #ddd;\n  outline: none;\n}\n\n/* Set a style for all buttons */\n\nbutton {\n  background-color: #063b61;\n  color: white;\n  padding: 14px 20px;\n  margin: 8px 0;\n  border: none;\n  cursor: pointer;\n  width: 100%;\n  opacity: 0.9;\n}\n\nbutton:hover {\n  opacity: 1;\n}\n\n/* Extra styles for the cancel button */\n\n.cancelbtn {\n  padding: 14px 20px;\n  background-color: #f44336;\n}\n\n/* Float cancel and signup buttons and add an equal width */\n\n.cancelbtn, .signupbtn {\n  float: left;\n  width: 50%;\n}\n\n/* Add padding to container elements */\n\n.container {\n  padding: 10px;\n}\n\n/* The Modal (background) */\n\n.modal {\n  display: none;\n  /* Hidden by default */\n  position: fixed;\n  /* Stay in place */\n  z-index: 1;\n  /* Sit on top */\n  left: 0;\n  top: 0;\n  width: 100%;\n  /* Full width */\n  height: 100%;\n  /* Full height */\n  overflow: auto;\n  /* Enable scroll if needed */\n  background-color: #474e5d;\n  padding-top: 50px;\n}\n\n/* Modal Content/Box */\n\n.modal-content {\n  background-color: #fefefe;\n  margin: 5% auto 15% auto;\n  /* 5% from the top, 15% from the bottom and centered */\n  border: 1px solid #888;\n  width: 80%;\n  /* Could be more or less, depending on screen size */\n}\n\n/* Style the horizontal ruler */\n\nhr {\n  border: 1px solid #f1f1f1;\n  margin-bottom: 25px;\n}\n\n/* The Close Button (x) */\n\n.close {\n  position: absolute;\n  right: 35px;\n  top: 15px;\n  font-size: 40px;\n  font-weight: bold;\n  color: #f1f1f1;\n}\n\n.close:hover,\n.close:focus {\n  color: #f44336;\n  cursor: pointer;\n}\n\n/* Clear floats */\n\n.clearfix::after {\n  content: \"\";\n  clear: both;\n  display: table;\n}\n\n/* Change styles for cancel button and signup button on extra small screens */\n\n@media screen and (max-width: 300px) {\n  .cancelbtn, .signupbtn {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXJlYXMvYXV0aC9lbWFpbHZlcmlmaWNhdGlvbi9EOlxcUHJvamVjdF9NYWpvclxcTVNfYmFua2luZ1xcQmFua0FwcEZyb250ZW5kL3NyY1xcYXBwXFxhcmVhc1xcYXV0aFxcZW1haWx2ZXJpZmljYXRpb25cXGVtYWlsdmVyaWZpY2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcmVhcy9hdXRoL2VtYWlsdmVyaWZpY2F0aW9uL2VtYWlsdmVyaWZpY2F0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQU8sV0FBQTtBQ0VQOztBRERBO0VBQ0MsK0NBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDRDQUFBO0VBQ0EsaURBQUE7RUFDRyxvREFBQTtFQUNBLGlCQUFBO0FDSUo7O0FEREE7RUFDRSxZQUFBO0FDSUY7O0FERkE7RUFDQyxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsOENBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0FDS0Q7O0FESEE7Ozs7RUFLQyxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EsMkJBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVDQUFBO0VBQ0EsWUFBQTtFQUFjLFdBQUE7QUNNZjs7QURGQTs7RUFJQyx5Q0FBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsOENBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0FDS0Q7O0FESEE7O0VBRUMsaUdBQUE7RUFBQSxnRUFBQTtFQUNBLHlCQUFBO0FDTUQ7O0FESkE7RUFBTSx5Q0FBQTtBQ1FOOztBRFBBO0VBQUcsc0JBQUE7QUNXSDs7QURUQSw0QkFBQTs7QUFDQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ1lGOztBRFRBLHFEQUFBOztBQUNBO0VBQ0Usc0JBQUE7RUFDQSxhQUFBO0FDWUY7O0FEVEEsZ0NBQUE7O0FBQ0E7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDWUY7O0FEVEE7RUFDRSxVQUFBO0FDWUY7O0FEVEEsdUNBQUE7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0FDWUY7O0FEVEEsMkRBQUE7O0FBQ0E7RUFDRSxXQUFBO0VBQ0EsVUFBQTtBQ1lGOztBRFRBLHNDQUFBOztBQUNBO0VBQ0UsYUFBQTtBQ1lGOztBRFRBLDJCQUFBOztBQUNBO0VBQ0UsYUFBQTtFQUFlLHNCQUFBO0VBQ2YsZUFBQTtFQUFpQixrQkFBQTtFQUNqQixVQUFBO0VBQVksZUFBQTtFQUNaLE9BQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUFhLGVBQUE7RUFDYixZQUFBO0VBQWMsZ0JBQUE7RUFDZCxjQUFBO0VBQWdCLDRCQUFBO0VBQ2hCLHlCQUFBO0VBQ0EsaUJBQUE7QUNrQkY7O0FEZkEsc0JBQUE7O0FBQ0E7RUFDRSx5QkFBQTtFQUNBLHdCQUFBO0VBQTBCLHNEQUFBO0VBQzFCLHNCQUFBO0VBQ0EsVUFBQTtFQUFZLG9EQUFBO0FDb0JkOztBRGpCQSwrQkFBQTs7QUFDQTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7QUNvQkY7O0FEakJBLHlCQUFBOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNvQkY7O0FEakJBOztFQUVFLGNBQUE7RUFDQSxlQUFBO0FDb0JGOztBRGpCQSxpQkFBQTs7QUFDQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQ29CRjs7QURqQkEsNkVBQUE7O0FBQ0E7RUFDRTtJQUNHLFdBQUE7RUNvQkg7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FyZWFzL2F1dGgvZW1haWx2ZXJpZmljYXRpb24vZW1haWx2ZXJpZmljYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJsYWJlbHsgbWFyZ2luOjBweDt9XHJcbi5pZDF7XHJcblx0Zm9udC1mYW1pbHk6ICdPcGVuIFNhbnMgQ29uZGVuc2VkJywgYXJpYWwsIHNhbnM7XHJcblx0d2lkdGg6IDUwMHB4O1xyXG5cdHBhZGRpbmc6IDIwcHg7XHJcblx0YmFja2dyb3VuZDogYmx1ZSgkY29sb3I6ICNmZjAwZmYpO1xyXG5cdG1hcmdpbjogODBweCBhdXRvO1xyXG5cdGJveC1zaGFkb3c6IDBweCAwcHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMjIpO1xyXG5cdC1tb3otYm94LXNoYWRvdzogMHB4IDBweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4yMik7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6ICAwcHggMHB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjIyKTtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlXHJcbn1cclxuXHJcbi5pZDEgYnV0dG9uOmhvdmVye1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4uaWQxIGgye1xyXG5cdGJhY2tncm91bmQ6ICM0RDRENEQ7XHJcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuXHRmb250LWZhbWlseTogJ09wZW4gU2FucyBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xyXG5cdGNvbG9yOiAjNzk3OTc5O1xyXG5cdGZvbnQtc2l6ZTogMThweDtcclxuXHRmb250LXdlaWdodDogMTAwO1xyXG5cdHBhZGRpbmc6IDIwcHg7XHJcblx0bWFyZ2luOiAtMzBweCAtMzBweCAzMHB4IC0zMHB4O1xyXG59XHJcbi5pZDEgaW5wdXRbdHlwZT1cInRleHRcIl0sXHJcbi5pZDEgaW5wdXRbdHlwZT1cImVtYWlsXCJdLFxyXG4uaWQxIGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSxcclxuLmZvcm0tLTggc2VsZWN0IFxyXG57XHJcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHQtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0LW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdG91dGxpbmU6IG5vbmU7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0cGFkZGluZzogNXB4O1xyXG5cdGJvcmRlcjogbm9uZTtcclxuXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcclxuXHRiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuXHRtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5cdGZvbnQ6IDE2cHggQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuXHRoZWlnaHQ6IDMwcHg7IG1hcmdpbjowcHg7XHJcbn1cclxuXHJcblxyXG4uaWQxIGlucHV0W3R5cGU9XCJidXR0b25cIl0sIFxyXG4uaWQxIGlucHV0W3R5cGU9XCJzdWJtaXRcIl17XHJcblx0LW1vei1ib3gtc2hhZG93OiBpbnNldCAwcHggMXB4IDBweCAwcHggIzQ1RDZENjtcclxuXHQtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDBweCAxcHggMHB4IDBweCAjNDVENkQ2O1xyXG5cdGJveC1zaGFkb3c6IGluc2V0IDBweCAxcHggMHB4IDBweCAjNDVENkQ2O1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICMyQ0JCQkI7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgIzI3QTBBMDtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdGNvbG9yOiAjRkZGRkZGO1xyXG5cdGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zIENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XHJcblx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdHBhZGRpbmc6IDhweCAxOHB4O1xyXG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcbi5pZDEgaW5wdXRbdHlwZT1cImJ1dHRvblwiXTpob3ZlciwgXHJcbi5pZDEgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXTpob3ZlciB7XHJcblx0YmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMzRDQUNBIDUlLCAjMzBDOUM5IDEwMCUpO1xyXG5cdGJhY2tncm91bmQtY29sb3I6IzM0Q0FDQTtcclxufVxyXG5ib2R5IHtmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjt9XHJcbioge2JveC1zaXppbmc6IGJvcmRlci1ib3g7fVxyXG5cclxuLyogRnVsbC13aWR0aCBpbnB1dCBmaWVsZHMgKi9cclxuaW5wdXRbdHlwZT10ZXh0XSwgaW5wdXRbdHlwZT1wYXNzd29yZF0ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgbWFyZ2luOiA1cHggMCAyMHB4IDA7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xyXG59XHJcblxyXG4vKiBBZGQgYSBiYWNrZ3JvdW5kIGNvbG9yIHdoZW4gdGhlIGlucHV0cyBnZXQgZm9jdXMgKi9cclxuaW5wdXRbdHlwZT10ZXh0XTpmb2N1cywgaW5wdXRbdHlwZT1wYXNzd29yZF06Zm9jdXMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLyogU2V0IGEgc3R5bGUgZm9yIGFsbCBidXR0b25zICovXHJcbmJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjojMDYzYjYxO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAxNHB4IDIwcHg7XHJcbiAgbWFyZ2luOiA4cHggMDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG9wYWNpdHk6IDAuOTtcclxufVxyXG5cclxuYnV0dG9uOmhvdmVyIHtcclxuICBvcGFjaXR5OjE7XHJcbn1cclxuXHJcbi8qIEV4dHJhIHN0eWxlcyBmb3IgdGhlIGNhbmNlbCBidXR0b24gKi9cclxuLmNhbmNlbGJ0biB7XHJcbiAgcGFkZGluZzogMTRweCAyMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzY7XHJcbn1cclxuXHJcbi8qIEZsb2F0IGNhbmNlbCBhbmQgc2lnbnVwIGJ1dHRvbnMgYW5kIGFkZCBhbiBlcXVhbCB3aWR0aCAqL1xyXG4uY2FuY2VsYnRuLCAuc2lnbnVwYnRuIHtcclxuICBmbG9hdDogbGVmdDtcclxuICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG4vKiBBZGQgcGFkZGluZyB0byBjb250YWluZXIgZWxlbWVudHMgKi9cclxuLmNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLyogVGhlIE1vZGFsIChiYWNrZ3JvdW5kKSAqL1xyXG4ubW9kYWwge1xyXG4gIGRpc3BsYXk6IG5vbmU7IC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXHJcbiAgcG9zaXRpb246IGZpeGVkOyAvKiBTdGF5IGluIHBsYWNlICovXHJcbiAgei1pbmRleDogMTsgLyogU2l0IG9uIHRvcCAqL1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoICovXHJcbiAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAqL1xyXG4gIG92ZXJmbG93OiBhdXRvOyAvKiBFbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCAqL1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NzRlNWQ7XHJcbiAgcGFkZGluZy10b3A6IDUwcHg7XHJcbn1cclxuXHJcbi8qIE1vZGFsIENvbnRlbnQvQm94ICovXHJcbi5tb2RhbC1jb250ZW50IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xyXG4gIG1hcmdpbjogNSUgYXV0byAxNSUgYXV0bzsgLyogNSUgZnJvbSB0aGUgdG9wLCAxNSUgZnJvbSB0aGUgYm90dG9tIGFuZCBjZW50ZXJlZCAqL1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XHJcbiAgd2lkdGg6IDgwJTsgLyogQ291bGQgYmUgbW9yZSBvciBsZXNzLCBkZXBlbmRpbmcgb24gc2NyZWVuIHNpemUgKi9cclxufVxyXG5cclxuLyogU3R5bGUgdGhlIGhvcml6b250YWwgcnVsZXIgKi9cclxuaHIge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmMWYxZjE7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxufVxyXG4gXHJcbi8qIFRoZSBDbG9zZSBCdXR0b24gKHgpICovXHJcbi5jbG9zZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAzNXB4O1xyXG4gIHRvcDogMTVweDtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY29sb3I6ICNmMWYxZjE7XHJcbn1cclxuXHJcbi5jbG9zZTpob3ZlcixcclxuLmNsb3NlOmZvY3VzIHtcclxuICBjb2xvcjogI2Y0NDMzNjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi8qIENsZWFyIGZsb2F0cyAqL1xyXG4uY2xlYXJmaXg6OmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGNsZWFyOiBib3RoO1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG59XHJcblxyXG4vKiBDaGFuZ2Ugc3R5bGVzIGZvciBjYW5jZWwgYnV0dG9uIGFuZCBzaWdudXAgYnV0dG9uIG9uIGV4dHJhIHNtYWxsIHNjcmVlbnMgKi9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzAwcHgpIHtcclxuICAuY2FuY2VsYnRuLCAuc2lnbnVwYnRuIHtcclxuICAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbn0iLCJsYWJlbCB7XG4gIG1hcmdpbjogMHB4O1xufVxuXG4uaWQxIHtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zIENvbmRlbnNlZFwiLCBhcmlhbCwgc2FucztcbiAgd2lkdGg6IDUwMHB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICBiYWNrZ3JvdW5kOiAyNTU7XG4gIG1hcmdpbjogODBweCBhdXRvO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjIyKTtcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjIyKTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjIyKTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbi5pZDEgYnV0dG9uOmhvdmVyIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uaWQxIGgyIHtcbiAgYmFja2dyb3VuZDogIzRENEQ0RDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zIENvbmRlbnNlZFwiLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogIzc5Nzk3OTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogMTAwO1xuICBwYWRkaW5nOiAyMHB4O1xuICBtYXJnaW46IC0zMHB4IC0zMHB4IDMwcHggLTMwcHg7XG59XG5cbi5pZDEgaW5wdXRbdHlwZT10ZXh0XSxcbi5pZDEgaW5wdXRbdHlwZT1lbWFpbF0sXG4uaWQxIGlucHV0W3R5cGU9cGFzc3dvcmRdLFxuLmZvcm0tLTggc2VsZWN0IHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgZm9udDogMTZweCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBoZWlnaHQ6IDMwcHg7XG4gIG1hcmdpbjogMHB4O1xufVxuXG4uaWQxIGlucHV0W3R5cGU9YnV0dG9uXSxcbi5pZDEgaW5wdXRbdHlwZT1zdWJtaXRdIHtcbiAgLW1vei1ib3gtc2hhZG93OiBpbnNldCAwcHggMXB4IDBweCAwcHggIzQ1RDZENjtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwcHggMXB4IDBweCAwcHggIzQ1RDZENjtcbiAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDFweCAwcHggMHB4ICM0NUQ2RDY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyQ0JCQkI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMyN0EwQTA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zIENvbmRlbnNlZFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmc6IDhweCAxOHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5pZDEgaW5wdXRbdHlwZT1idXR0b25dOmhvdmVyLFxuLmlkMSBpbnB1dFt0eXBlPXN1Ym1pdF06aG92ZXIge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMzRDQUNBIDUlLCAjMzBDOUM5IDEwMCUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzRDQUNBO1xufVxuXG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG59XG5cbioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4vKiBGdWxsLXdpZHRoIGlucHV0IGZpZWxkcyAqL1xuaW5wdXRbdHlwZT10ZXh0XSwgaW5wdXRbdHlwZT1wYXNzd29yZF0ge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luOiA1cHggMCAyMHB4IDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xufVxuXG4vKiBBZGQgYSBiYWNrZ3JvdW5kIGNvbG9yIHdoZW4gdGhlIGlucHV0cyBnZXQgZm9jdXMgKi9cbmlucHV0W3R5cGU9dGV4dF06Zm9jdXMsIGlucHV0W3R5cGU9cGFzc3dvcmRdOmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLyogU2V0IGEgc3R5bGUgZm9yIGFsbCBidXR0b25zICovXG5idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDYzYjYxO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDE0cHggMjBweDtcbiAgbWFyZ2luOiA4cHggMDtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBvcGFjaXR5OiAwLjk7XG59XG5cbmJ1dHRvbjpob3ZlciB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi8qIEV4dHJhIHN0eWxlcyBmb3IgdGhlIGNhbmNlbCBidXR0b24gKi9cbi5jYW5jZWxidG4ge1xuICBwYWRkaW5nOiAxNHB4IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzY7XG59XG5cbi8qIEZsb2F0IGNhbmNlbCBhbmQgc2lnbnVwIGJ1dHRvbnMgYW5kIGFkZCBhbiBlcXVhbCB3aWR0aCAqL1xuLmNhbmNlbGJ0biwgLnNpZ251cGJ0biB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogNTAlO1xufVxuXG4vKiBBZGQgcGFkZGluZyB0byBjb250YWluZXIgZWxlbWVudHMgKi9cbi5jb250YWluZXIge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4vKiBUaGUgTW9kYWwgKGJhY2tncm91bmQpICovXG4ubW9kYWwge1xuICBkaXNwbGF5OiBub25lO1xuICAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIC8qIFN0YXkgaW4gcGxhY2UgKi9cbiAgei1pbmRleDogMTtcbiAgLyogU2l0IG9uIHRvcCAqL1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICAvKiBGdWxsIHdpZHRoICovXG4gIGhlaWdodDogMTAwJTtcbiAgLyogRnVsbCBoZWlnaHQgKi9cbiAgb3ZlcmZsb3c6IGF1dG87XG4gIC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NzRlNWQ7XG4gIHBhZGRpbmctdG9wOiA1MHB4O1xufVxuXG4vKiBNb2RhbCBDb250ZW50L0JveCAqL1xuLm1vZGFsLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xuICBtYXJnaW46IDUlIGF1dG8gMTUlIGF1dG87XG4gIC8qIDUlIGZyb20gdGhlIHRvcCwgMTUlIGZyb20gdGhlIGJvdHRvbSBhbmQgY2VudGVyZWQgKi9cbiAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcbiAgd2lkdGg6IDgwJTtcbiAgLyogQ291bGQgYmUgbW9yZSBvciBsZXNzLCBkZXBlbmRpbmcgb24gc2NyZWVuIHNpemUgKi9cbn1cblxuLyogU3R5bGUgdGhlIGhvcml6b250YWwgcnVsZXIgKi9cbmhyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2YxZjFmMTtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cblxuLyogVGhlIENsb3NlIEJ1dHRvbiAoeCkgKi9cbi5jbG9zZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDM1cHg7XG4gIHRvcDogMTVweDtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICNmMWYxZjE7XG59XG5cbi5jbG9zZTpob3Zlcixcbi5jbG9zZTpmb2N1cyB7XG4gIGNvbG9yOiAjZjQ0MzM2O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi8qIENsZWFyIGZsb2F0cyAqL1xuLmNsZWFyZml4OjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGNsZWFyOiBib3RoO1xuICBkaXNwbGF5OiB0YWJsZTtcbn1cblxuLyogQ2hhbmdlIHN0eWxlcyBmb3IgY2FuY2VsIGJ1dHRvbiBhbmQgc2lnbnVwIGJ1dHRvbiBvbiBleHRyYSBzbWFsbCBzY3JlZW5zICovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMDBweCkge1xuICAuY2FuY2VsYnRuLCAuc2lnbnVwYnRuIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/areas/auth/emailverification/emailverification.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/areas/auth/emailverification/emailverification.component.ts ***!
  \*****************************************************************************/
/*! exports provided: EmailverificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailverificationComponent", function() { return EmailverificationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_auth_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth/auth/auth.service */ "./src/app/services/auth/auth/auth.service.ts");





let EmailverificationComponent = class EmailverificationComponent {
    constructor(fb, router, authservice) {
        this.fb = fb;
        this.router = router;
        this.authservice = authservice;
        this.modal1 = true;
        this.modal2 = false;
        this.submitted = false;
        this.issubmitted = false;
        this.formdata = {};
    }
    ngOnInit() {
        debugger;
        this.emailform = this.fb.group({
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
        });
        this.verificationform = this.fb.group({
            otp: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    get f() { return this.verificationform.controls; }
    get emailf() { return this.emailform.controls; }
    checkotp() {
        debugger;
        this.issubmitted = true;
        if (this.verificationform.valid == true) {
            //this.formdata.Email=this.verificationform.value.email;
            this.formdata.Otp = this.verificationform.value.otp;
            this.authservice.verifyOtp(this.formdata).subscribe(data => {
                debugger;
                if (data == 1) {
                    this.router.navigate(['login']);
                    alert("welcome!.....now your are a verified user, please login again"); //otp is verified
                }
                else if (data == -1) { //otp is expired
                    alert("OTP is expired");
                    this.verificationform = this.fb.group({
                        otp: ''
                    });
                }
                else {
                    alert("invalid OTP");
                    this.verificationform = this.fb.group({
                        otp: ''
                    });
                    this.router.navigate(['verify']);
                }
            }, err => {
                console.log(err);
            });
        }
        this.verificationform.invalid;
        return;
    }
    Continue() {
        debugger;
        this.submitted = true;
        if (this.emailform.valid == true) {
            this.formdata.Email = this.emailform.value.email;
            this.authservice.verifyEmail(this.formdata).subscribe(data => {
                debugger;
                if (data == 1) {
                    this.router.navigate(['login']); //email verified
                    alert("email is already verified,please enter correct email");
                }
                else if (data == -1) { // email found but not verified
                    this.modal1 = false;
                    this.modal2 = true;
                }
                else {
                    alert("Email address does not registered, Please enter correct email address");
                    this.verificationform = this.fb.group({
                        email: ''
                    });
                }
            }, err => {
                console.log(err);
            });
        }
        this.emailform.invalid;
        return;
    }
    resend() {
        this.authservice.resendOTP(this.formdata).subscribe(data => {
            if (data == 1) {
                alert("email has sent to your account please check your email Id");
            }
            if (data == -1) {
                alert("OTP can't be sent to your account/invalid email");
            }
        });
    }
};
EmailverificationComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_services_auth_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
EmailverificationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-emailverification',
        template: __webpack_require__(/*! raw-loader!./emailverification.component.html */ "./node_modules/raw-loader/index.js!./src/app/areas/auth/emailverification/emailverification.component.html"),
        styles: [__webpack_require__(/*! ./emailverification.component.scss */ "./src/app/areas/auth/emailverification/emailverification.component.scss")]
    })
], EmailverificationComponent);



/***/ }),

/***/ "./src/app/areas/auth/forgotpassword/forgotpassword.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/areas/auth/forgotpassword/forgotpassword.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label {\n  margin: 0px;\n}\n\n.id1 {\n  font-family: \"Open Sans Condensed\", arial, sans;\n  width: 500px;\n  padding: 20px;\n  background: 255;\n  margin: 80px auto;\n  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.22);\n  -moz-box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.22);\n  -webkit-box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.22);\n  background: white;\n}\n\n.id1 button:hover {\n  color: white;\n}\n\n.id1 h2 {\n  background: #4D4D4D;\n  text-transform: uppercase;\n  font-family: \"Open Sans Condensed\", sans-serif;\n  color: #797979;\n  font-size: 18px;\n  font-weight: 100;\n  padding: 20px;\n  margin: -30px -30px 30px -30px;\n}\n\n.id1 input[type=text],\n.id1 input[type=email],\n.id1 input[type=password],\n.form--8 select {\n  box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  outline: none;\n  display: block;\n  width: 100%;\n  padding: 5px;\n  border: none;\n  border-bottom: 1px solid #ddd;\n  background: transparent;\n  margin-bottom: 10px;\n  font: 16px Arial, Helvetica, sans-serif;\n  height: 30px;\n  margin: 0px;\n}\n\n.id1 input[type=button],\n.id1 input[type=submit] {\n  box-shadow: inset 0px 1px 0px 0px #45D6D6;\n  background-color: #2CBBBB;\n  border: 1px solid #27A0A0;\n  display: inline-block;\n  cursor: pointer;\n  color: #FFFFFF;\n  font-family: \"Open Sans Condensed\", sans-serif;\n  font-size: 14px;\n  padding: 8px 18px;\n  text-decoration: none;\n  text-transform: uppercase;\n}\n\n.id1 input[type=button]:hover,\n.id1 input[type=submit]:hover {\n  background: -webkit-gradient(linear, left top, left bottom, color-stop(5%, #34CACA), to(#30C9C9));\n  background: linear-gradient(to bottom, #34CACA 5%, #30C9C9 100%);\n  background-color: #34CACA;\n}\n\nbody {\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n* {\n  box-sizing: border-box;\n}\n\n/* Full-width input fields */\n\ninput[type=text], input[type=password] {\n  width: 100%;\n  padding: 10px;\n  margin: 5px 0 20px 0;\n  display: inline-block;\n  border: none;\n  background: #f1f1f1;\n}\n\n/* Add a background color when the inputs get focus */\n\ninput[type=text]:focus, input[type=password]:focus {\n  background-color: #ddd;\n  outline: none;\n}\n\n/* Set a style for all buttons */\n\nbutton {\n  background-color: #063b61;\n  color: white;\n  padding: 14px 20px;\n  margin: 8px 0;\n  border: none;\n  cursor: pointer;\n  width: 100%;\n  opacity: 0.9;\n}\n\nbutton:hover {\n  opacity: 1;\n}\n\n/* Extra styles for the cancel button */\n\n.cancelbtn {\n  padding: 14px 20px;\n  background-color: #f44336;\n}\n\n/* Float cancel and signup buttons and add an equal width */\n\n.cancelbtn, .signupbtn {\n  float: left;\n  width: 50%;\n}\n\n/* Add padding to container elements */\n\n.container {\n  padding: 10px;\n}\n\n/* The Modal (background) */\n\n.modal {\n  display: none;\n  /* Hidden by default */\n  position: fixed;\n  /* Stay in place */\n  z-index: 1;\n  /* Sit on top */\n  left: 0;\n  top: 0;\n  width: 100%;\n  /* Full width */\n  height: 100%;\n  /* Full height */\n  overflow: auto;\n  /* Enable scroll if needed */\n  background-color: #474e5d;\n  padding-top: 50px;\n}\n\n/* Modal Content/Box */\n\n.modal-content {\n  background-color: #fefefe;\n  margin: 5% auto 15% auto;\n  /* 5% from the top, 15% from the bottom and centered */\n  border: 1px solid #888;\n  width: 80%;\n  /* Could be more or less, depending on screen size */\n}\n\n/* Style the horizontal ruler */\n\nhr {\n  border: 1px solid #f1f1f1;\n  margin-bottom: 25px;\n}\n\n/* The Close Button (x) */\n\n.close {\n  position: absolute;\n  right: 35px;\n  top: 15px;\n  font-size: 40px;\n  font-weight: bold;\n  color: #f1f1f1;\n}\n\n.close:hover,\n.close:focus {\n  color: #f44336;\n  cursor: pointer;\n}\n\n/* Clear floats */\n\n.clearfix::after {\n  content: \"\";\n  clear: both;\n  display: table;\n}\n\n/* Change styles for cancel button and signup button on extra small screens */\n\n@media screen and (max-width: 300px) {\n  .cancelbtn, .signupbtn {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXJlYXMvYXV0aC9mb3Jnb3RwYXNzd29yZC9EOlxcUHJvamVjdF9NYWpvclxcTVNfYmFua2luZ1xcQmFua0FwcEZyb250ZW5kL3NyY1xcYXBwXFxhcmVhc1xcYXV0aFxcZm9yZ290cGFzc3dvcmRcXGZvcmdvdHBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcmVhcy9hdXRoL2ZvcmdvdHBhc3N3b3JkL2ZvcmdvdHBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQU8sV0FBQTtBQ0VQOztBRERBO0VBQ0MsK0NBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDRDQUFBO0VBQ0EsaURBQUE7RUFDRyxvREFBQTtFQUNBLGlCQUFBO0FDSUo7O0FEQUE7RUFDRSxZQUFBO0FDR0Y7O0FEREE7RUFDQyxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsOENBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0FDSUQ7O0FERkE7Ozs7RUFLQyxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EsMkJBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVDQUFBO0VBQ0EsWUFBQTtFQUFjLFdBQUE7QUNLZjs7QUREQTs7RUFJQyx5Q0FBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsOENBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0FDSUQ7O0FERkE7O0VBRUMsaUdBQUE7RUFBQSxnRUFBQTtFQUNBLHlCQUFBO0FDS0Q7O0FESEE7RUFBTSx5Q0FBQTtBQ09OOztBRE5BO0VBQUcsc0JBQUE7QUNVSDs7QURSQSw0QkFBQTs7QUFDQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ1dGOztBRFJBLHFEQUFBOztBQUNBO0VBQ0Usc0JBQUE7RUFDQSxhQUFBO0FDV0Y7O0FEUkEsZ0NBQUE7O0FBQ0E7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDV0Y7O0FEUkE7RUFDRSxVQUFBO0FDV0Y7O0FEUkEsdUNBQUE7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0FDV0Y7O0FEUkEsMkRBQUE7O0FBQ0E7RUFDRSxXQUFBO0VBQ0EsVUFBQTtBQ1dGOztBRFJBLHNDQUFBOztBQUNBO0VBQ0UsYUFBQTtBQ1dGOztBRFJBLDJCQUFBOztBQUNBO0VBQ0UsYUFBQTtFQUFlLHNCQUFBO0VBQ2YsZUFBQTtFQUFpQixrQkFBQTtFQUNqQixVQUFBO0VBQVksZUFBQTtFQUNaLE9BQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUFhLGVBQUE7RUFDYixZQUFBO0VBQWMsZ0JBQUE7RUFDZCxjQUFBO0VBQWdCLDRCQUFBO0VBQ2hCLHlCQUFBO0VBQ0EsaUJBQUE7QUNpQkY7O0FEZEEsc0JBQUE7O0FBQ0E7RUFDRSx5QkFBQTtFQUNBLHdCQUFBO0VBQTBCLHNEQUFBO0VBQzFCLHNCQUFBO0VBQ0EsVUFBQTtFQUFZLG9EQUFBO0FDbUJkOztBRGhCQSwrQkFBQTs7QUFDQTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7QUNtQkY7O0FEaEJBLHlCQUFBOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNtQkY7O0FEaEJBOztFQUVFLGNBQUE7RUFDQSxlQUFBO0FDbUJGOztBRGhCQSxpQkFBQTs7QUFDQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQ21CRjs7QURoQkEsNkVBQUE7O0FBQ0E7RUFDRTtJQUNHLFdBQUE7RUNtQkg7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FyZWFzL2F1dGgvZm9yZ290cGFzc3dvcmQvZm9yZ290cGFzc3dvcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJsYWJlbHsgbWFyZ2luOjBweDt9XHJcbi5pZDF7XHJcblx0Zm9udC1mYW1pbHk6ICdPcGVuIFNhbnMgQ29uZGVuc2VkJywgYXJpYWwsIHNhbnM7XHJcblx0d2lkdGg6IDUwMHB4O1xyXG5cdHBhZGRpbmc6IDIwcHg7XHJcblx0YmFja2dyb3VuZDogYmx1ZSgkY29sb3I6ICNmZjAwZmYpO1xyXG5cdG1hcmdpbjogODBweCBhdXRvO1xyXG5cdGJveC1zaGFkb3c6IDBweCAwcHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMjIpO1xyXG5cdC1tb3otYm94LXNoYWRvdzogMHB4IDBweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4yMik7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6ICAwcHggMHB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjIyKTtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlXHJcblxyXG5cclxufVxyXG4uaWQxIGJ1dHRvbjpob3ZlcntcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLmlkMSBoMntcclxuXHRiYWNrZ3JvdW5kOiAjNEQ0RDREO1xyXG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblx0Zm9udC1mYW1pbHk6ICdPcGVuIFNhbnMgQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcclxuXHRjb2xvcjogIzc5Nzk3OTtcclxuXHRmb250LXNpemU6IDE4cHg7XHJcblx0Zm9udC13ZWlnaHQ6IDEwMDtcclxuXHRwYWRkaW5nOiAyMHB4O1xyXG5cdG1hcmdpbjogLTMwcHggLTMwcHggMzBweCAtMzBweDtcclxufVxyXG4uaWQxIGlucHV0W3R5cGU9XCJ0ZXh0XCJdLFxyXG4uaWQxIGlucHV0W3R5cGU9XCJlbWFpbFwiXSxcclxuLmlkMSBpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0sXHJcbi5mb3JtLS04IHNlbGVjdCBcclxue1xyXG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0LXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRvdXRsaW5lOiBub25lO1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdHBhZGRpbmc6IDVweDtcclxuXHRib3JkZXI6IG5vbmU7XHJcblx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XHJcblx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcblx0bWFyZ2luLWJvdHRvbTogMTBweDtcclxuXHRmb250OiAxNnB4IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcblx0aGVpZ2h0OiAzMHB4OyBtYXJnaW46MHB4O1xyXG59XHJcblxyXG5cclxuLmlkMSBpbnB1dFt0eXBlPVwiYnV0dG9uXCJdLCBcclxuLmlkMSBpbnB1dFt0eXBlPVwic3VibWl0XCJde1xyXG5cdC1tb3otYm94LXNoYWRvdzogaW5zZXQgMHB4IDFweCAwcHggMHB4ICM0NUQ2RDY7XHJcblx0LXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwcHggMXB4IDBweCAwcHggIzQ1RDZENjtcclxuXHRib3gtc2hhZG93OiBpbnNldCAwcHggMXB4IDBweCAwcHggIzQ1RDZENjtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMkNCQkJCO1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICMyN0EwQTA7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuXHRjb2xvcjogI0ZGRkZGRjtcclxuXHRmb250LWZhbWlseTogJ09wZW4gU2FucyBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xyXG5cdGZvbnQtc2l6ZTogMTRweDtcclxuXHRwYWRkaW5nOiA4cHggMThweDtcclxuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG4uaWQxIGlucHV0W3R5cGU9XCJidXR0b25cIl06aG92ZXIsIFxyXG4uaWQxIGlucHV0W3R5cGU9XCJzdWJtaXRcIl06aG92ZXIge1xyXG5cdGJhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzM0Q0FDQSA1JSwgIzMwQzlDOSAxMDAlKTtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiMzNENBQ0E7XHJcbn1cclxuYm9keSB7Zm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7fVxyXG4qIHtib3gtc2l6aW5nOiBib3JkZXItYm94O31cclxuXHJcbi8qIEZ1bGwtd2lkdGggaW5wdXQgZmllbGRzICovXHJcbmlucHV0W3R5cGU9dGV4dF0sIGlucHV0W3R5cGU9cGFzc3dvcmRdIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIG1hcmdpbjogNXB4IDAgMjBweCAwO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcclxufVxyXG5cclxuLyogQWRkIGEgYmFja2dyb3VuZCBjb2xvciB3aGVuIHRoZSBpbnB1dHMgZ2V0IGZvY3VzICovXHJcbmlucHV0W3R5cGU9dGV4dF06Zm9jdXMsIGlucHV0W3R5cGU9cGFzc3dvcmRdOmZvY3VzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi8qIFNldCBhIHN0eWxlIGZvciBhbGwgYnV0dG9ucyAqL1xyXG5idXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IzA2M2I2MTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMTRweCAyMHB4O1xyXG4gIG1hcmdpbjogOHB4IDA7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBvcGFjaXR5OiAwLjk7XHJcbn1cclxuXHJcbmJ1dHRvbjpob3ZlciB7XHJcbiAgb3BhY2l0eToxO1xyXG59XHJcblxyXG4vKiBFeHRyYSBzdHlsZXMgZm9yIHRoZSBjYW5jZWwgYnV0dG9uICovXHJcbi5jYW5jZWxidG4ge1xyXG4gIHBhZGRpbmc6IDE0cHggMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ0MzM2O1xyXG59XHJcblxyXG4vKiBGbG9hdCBjYW5jZWwgYW5kIHNpZ251cCBidXR0b25zIGFuZCBhZGQgYW4gZXF1YWwgd2lkdGggKi9cclxuLmNhbmNlbGJ0biwgLnNpZ251cGJ0biB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgd2lkdGg6IDUwJTtcclxufVxyXG5cclxuLyogQWRkIHBhZGRpbmcgdG8gY29udGFpbmVyIGVsZW1lbnRzICovXHJcbi5jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi8qIFRoZSBNb2RhbCAoYmFja2dyb3VuZCkgKi9cclxuLm1vZGFsIHtcclxuICBkaXNwbGF5OiBub25lOyAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xyXG4gIHBvc2l0aW9uOiBmaXhlZDsgLyogU3RheSBpbiBwbGFjZSAqL1xyXG4gIHotaW5kZXg6IDE7IC8qIFNpdCBvbiB0b3AgKi9cclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogMDtcclxuICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAqL1xyXG4gIGhlaWdodDogMTAwJTsgLyogRnVsbCBoZWlnaHQgKi9cclxuICBvdmVyZmxvdzogYXV0bzsgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDc0ZTVkO1xyXG4gIHBhZGRpbmctdG9wOiA1MHB4O1xyXG59XHJcblxyXG4vKiBNb2RhbCBDb250ZW50L0JveCAqL1xyXG4ubW9kYWwtY29udGVudCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcclxuICBtYXJnaW46IDUlIGF1dG8gMTUlIGF1dG87IC8qIDUlIGZyb20gdGhlIHRvcCwgMTUlIGZyb20gdGhlIGJvdHRvbSBhbmQgY2VudGVyZWQgKi9cclxuICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xyXG4gIHdpZHRoOiA4MCU7IC8qIENvdWxkIGJlIG1vcmUgb3IgbGVzcywgZGVwZW5kaW5nIG9uIHNjcmVlbiBzaXplICovXHJcbn1cclxuXHJcbi8qIFN0eWxlIHRoZSBob3Jpem9udGFsIHJ1bGVyICovXHJcbmhyIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZjFmMWYxO1xyXG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbn1cclxuIFxyXG4vKiBUaGUgQ2xvc2UgQnV0dG9uICh4KSAqL1xyXG4uY2xvc2Uge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMzVweDtcclxuICB0b3A6IDE1cHg7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiAjZjFmMWYxO1xyXG59XHJcblxyXG4uY2xvc2U6aG92ZXIsXHJcbi5jbG9zZTpmb2N1cyB7XHJcbiAgY29sb3I6ICNmNDQzMzY7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4vKiBDbGVhciBmbG9hdHMgKi9cclxuLmNsZWFyZml4OjphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBjbGVhcjogYm90aDtcclxuICBkaXNwbGF5OiB0YWJsZTtcclxufVxyXG5cclxuLyogQ2hhbmdlIHN0eWxlcyBmb3IgY2FuY2VsIGJ1dHRvbiBhbmQgc2lnbnVwIGJ1dHRvbiBvbiBleHRyYSBzbWFsbCBzY3JlZW5zICovXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMwMHB4KSB7XHJcbiAgLmNhbmNlbGJ0biwgLnNpZ251cGJ0biB7XHJcbiAgICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59IiwibGFiZWwge1xuICBtYXJnaW46IDBweDtcbn1cblxuLmlkMSB7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2FucyBDb25kZW5zZWRcIiwgYXJpYWwsIHNhbnM7XG4gIHdpZHRoOiA1MDBweDtcbiAgcGFkZGluZzogMjBweDtcbiAgYmFja2dyb3VuZDogMjU1O1xuICBtYXJnaW46IDgwcHggYXV0bztcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4yMik7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4yMik7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4yMik7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG4uaWQxIGJ1dHRvbjpob3ZlciB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmlkMSBoMiB7XG4gIGJhY2tncm91bmQ6ICM0RDRENEQ7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2FucyBDb25kZW5zZWRcIiwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICM3OTc5Nzk7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgcGFkZGluZzogMjBweDtcbiAgbWFyZ2luOiAtMzBweCAtMzBweCAzMHB4IC0zMHB4O1xufVxuXG4uaWQxIGlucHV0W3R5cGU9dGV4dF0sXG4uaWQxIGlucHV0W3R5cGU9ZW1haWxdLFxuLmlkMSBpbnB1dFt0eXBlPXBhc3N3b3JkXSxcbi5mb3JtLS04IHNlbGVjdCB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBvdXRsaW5lOiBub25lO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGZvbnQ6IDE2cHggQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgaGVpZ2h0OiAzMHB4O1xuICBtYXJnaW46IDBweDtcbn1cblxuLmlkMSBpbnB1dFt0eXBlPWJ1dHRvbl0sXG4uaWQxIGlucHV0W3R5cGU9c3VibWl0XSB7XG4gIC1tb3otYm94LXNoYWRvdzogaW5zZXQgMHB4IDFweCAwcHggMHB4ICM0NUQ2RDY7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMHB4IDFweCAwcHggMHB4ICM0NUQ2RDY7XG4gIGJveC1zaGFkb3c6IGluc2V0IDBweCAxcHggMHB4IDBweCAjNDVENkQ2O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkNCQkJCO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMjdBMEEwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2FucyBDb25kZW5zZWRcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nOiA4cHggMThweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uaWQxIGlucHV0W3R5cGU9YnV0dG9uXTpob3Zlcixcbi5pZDEgaW5wdXRbdHlwZT1zdWJtaXRdOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzM0Q0FDQSA1JSwgIzMwQzlDOSAxMDAlKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0Q0FDQTtcbn1cblxuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xufVxuXG4qIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLyogRnVsbC13aWR0aCBpbnB1dCBmaWVsZHMgKi9cbmlucHV0W3R5cGU9dGV4dF0sIGlucHV0W3R5cGU9cGFzc3dvcmRdIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbjogNXB4IDAgMjBweCAwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcbn1cblxuLyogQWRkIGEgYmFja2dyb3VuZCBjb2xvciB3aGVuIHRoZSBpbnB1dHMgZ2V0IGZvY3VzICovXG5pbnB1dFt0eXBlPXRleHRdOmZvY3VzLCBpbnB1dFt0eXBlPXBhc3N3b3JkXTpmb2N1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi8qIFNldCBhIHN0eWxlIGZvciBhbGwgYnV0dG9ucyAqL1xuYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA2M2I2MTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxNHB4IDIwcHg7XG4gIG1hcmdpbjogOHB4IDA7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB3aWR0aDogMTAwJTtcbiAgb3BhY2l0eTogMC45O1xufVxuXG5idXR0b246aG92ZXIge1xuICBvcGFjaXR5OiAxO1xufVxuXG4vKiBFeHRyYSBzdHlsZXMgZm9yIHRoZSBjYW5jZWwgYnV0dG9uICovXG4uY2FuY2VsYnRuIHtcbiAgcGFkZGluZzogMTRweCAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ0MzM2O1xufVxuXG4vKiBGbG9hdCBjYW5jZWwgYW5kIHNpZ251cCBidXR0b25zIGFuZCBhZGQgYW4gZXF1YWwgd2lkdGggKi9cbi5jYW5jZWxidG4sIC5zaWdudXBidG4ge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDUwJTtcbn1cblxuLyogQWRkIHBhZGRpbmcgdG8gY29udGFpbmVyIGVsZW1lbnRzICovXG4uY29udGFpbmVyIHtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLyogVGhlIE1vZGFsIChiYWNrZ3JvdW5kKSAqL1xuLm1vZGFsIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cbiAgcG9zaXRpb246IGZpeGVkO1xuICAvKiBTdGF5IGluIHBsYWNlICovXG4gIHotaW5kZXg6IDE7XG4gIC8qIFNpdCBvbiB0b3AgKi9cbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgLyogRnVsbCB3aWR0aCAqL1xuICBoZWlnaHQ6IDEwMCU7XG4gIC8qIEZ1bGwgaGVpZ2h0ICovXG4gIG92ZXJmbG93OiBhdXRvO1xuICAvKiBFbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDc0ZTVkO1xuICBwYWRkaW5nLXRvcDogNTBweDtcbn1cblxuLyogTW9kYWwgQ29udGVudC9Cb3ggKi9cbi5tb2RhbC1jb250ZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcbiAgbWFyZ2luOiA1JSBhdXRvIDE1JSBhdXRvO1xuICAvKiA1JSBmcm9tIHRoZSB0b3AsIDE1JSBmcm9tIHRoZSBib3R0b20gYW5kIGNlbnRlcmVkICovXG4gIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XG4gIHdpZHRoOiA4MCU7XG4gIC8qIENvdWxkIGJlIG1vcmUgb3IgbGVzcywgZGVwZW5kaW5nIG9uIHNjcmVlbiBzaXplICovXG59XG5cbi8qIFN0eWxlIHRoZSBob3Jpem9udGFsIHJ1bGVyICovXG5ociB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmMWYxZjE7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG5cbi8qIFRoZSBDbG9zZSBCdXR0b24gKHgpICovXG4uY2xvc2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAzNXB4O1xuICB0b3A6IDE1cHg7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjZjFmMWYxO1xufVxuXG4uY2xvc2U6aG92ZXIsXG4uY2xvc2U6Zm9jdXMge1xuICBjb2xvcjogI2Y0NDMzNjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4vKiBDbGVhciBmbG9hdHMgKi9cbi5jbGVhcmZpeDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBjbGVhcjogYm90aDtcbiAgZGlzcGxheTogdGFibGU7XG59XG5cbi8qIENoYW5nZSBzdHlsZXMgZm9yIGNhbmNlbCBidXR0b24gYW5kIHNpZ251cCBidXR0b24gb24gZXh0cmEgc21hbGwgc2NyZWVucyAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzAwcHgpIHtcbiAgLmNhbmNlbGJ0biwgLnNpZ251cGJ0biB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/areas/auth/forgotpassword/forgotpassword.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/areas/auth/forgotpassword/forgotpassword.component.ts ***!
  \***********************************************************************/
/*! exports provided: ForgotpasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotpasswordComponent", function() { return ForgotpasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_auth_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth/auth/auth.service */ "./src/app/services/auth/auth/auth.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");






let ForgotpasswordComponent = class ForgotpasswordComponent {
    constructor(fb, router, authservice, toaster) {
        this.fb = fb;
        this.router = router;
        this.authservice = authservice;
        this.toaster = toaster;
        this.submitted = false;
        this.formdata = {};
        this.istrue = true;
        //public overlay: CheckBoxComponent;
        this.target = "#modalTarget";
        this.width = '335px';
        this.header = 'Please check your email';
        this.content = 'OTP has sent to your registered emailID';
        this.isModal = true;
        this.animationSettings = { effect: 'None' };
        // Close the Dialog, while clicking "OK" Button of Dialog
        this.dlgButtonClick = () => {
            this.modalDialog.hide();
            this.initialize();
        };
        this.overlayClick = () => {
            this.modalDialog.hide();
        };
        // Initialize Button to open the modal Dialog
        this.buttons = [{
                click: this.dlgButtonClick.bind(this),
                buttonModel: { content: 'OK', isPrimary: true }
            }];
    }
    ngOnInit() {
        this.emailverificationform = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
        });
    }
    get f() { return this.emailverificationform.controls; }
    showdata() {
        debugger;
        this.submitted = true;
        if (this.emailverificationform.valid == true) {
            this.formdata.Email = this.emailverificationform.value.email;
            this.authservice.sendemail(this.formdata).subscribe(data => {
                if (data == 'Success') {
                    debugger;
                    this.istrue = false;
                    // this.toaster.success("Email has sent to your registered mailId, please check your email");
                }
                else {
                    this.toaster.error("Email is invalid");
                }
            }, err => {
                console.log(err);
            });
        }
        this.emailverificationform.invalid;
        return;
    }
    initialize() {
        this.emailverificationform = this.fb.group({
            email: ''
        });
    }
};
ForgotpasswordComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_services_auth_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('modalDialog', { static: false })
], ForgotpasswordComponent.prototype, "modalDialog", void 0);
ForgotpasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forgotpassword',
        template: __webpack_require__(/*! raw-loader!./forgotpassword.component.html */ "./node_modules/raw-loader/index.js!./src/app/areas/auth/forgotpassword/forgotpassword.component.html"),
        styles: [__webpack_require__(/*! ./forgotpassword.component.scss */ "./src/app/areas/auth/forgotpassword/forgotpassword.component.scss")]
    })
], ForgotpasswordComponent);



/***/ }),

/***/ "./src/app/areas/auth/login/login.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/areas/auth/login/login.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label {\n  margin: 0px;\n}\n\n.id1 {\n  font-family: \"Open Sans Condensed\", arial, sans;\n  width: 500px;\n  padding: 20px;\n  background: 255;\n  margin: 30px auto;\n  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.22);\n  -moz-box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.22);\n  -webkit-box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.22);\n  background-color: white;\n  margin-top: 100px;\n}\n\n.id1 button:hover {\n  color: white;\n}\n\n.id1 h2 {\n  background: #4D4D4D;\n  text-transform: uppercase;\n  font-family: \"Open Sans Condensed\", sans-serif;\n  color: #797979;\n  font-size: 18px;\n  font-weight: 100;\n  padding: 20px;\n  margin: -30px -30px 30px -30px;\n}\n\n.id1 input[type=text],\n.id1 input[type=email],\n.id1 input[type=password],\n.form--8 select {\n  box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  outline: none;\n  display: block;\n  width: 100%;\n  padding: 5px;\n  border: none;\n  border-bottom: 1px solid #ddd;\n  background: transparent;\n  margin-bottom: 10px;\n  font: 16px Arial, Helvetica, sans-serif;\n  height: 30px;\n  margin: 0px;\n}\n\n.id1 input[type=button],\n.id1 input[type=submit] {\n  box-shadow: inset 0px 1px 0px 0px #45D6D6;\n  background-color: #2CBBBB;\n  border: 1px solid #27A0A0;\n  display: inline-block;\n  cursor: pointer;\n  color: #FFFFFF;\n  font-family: \"Open Sans Condensed\", sans-serif;\n  font-size: 14px;\n  padding: 8px 18px;\n  text-decoration: none;\n  text-transform: uppercase;\n}\n\n.id1 input[type=button]:hover,\n.id1 input[type=submit]:hover {\n  background: -webkit-gradient(linear, left top, left bottom, color-stop(5%, #34CACA), to(#30C9C9));\n  background: linear-gradient(to bottom, #34CACA 5%, #30C9C9 100%);\n  background-color: #34CACA;\n}\n\nbody {\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n* {\n  box-sizing: border-box;\n}\n\n/* Full-width input fields */\n\ninput[type=text], input[type=password] {\n  width: 100%;\n  padding: 10px;\n  margin: 5px 0 20px 0;\n  display: inline-block;\n  border: none;\n  background: #f1f1f1;\n}\n\n/* Add a background color when the inputs get focus */\n\ninput[type=text]:focus, input[type=password]:focus {\n  background-color: #ddd;\n  outline: none;\n}\n\n/* Set a style for all buttons */\n\nbutton {\n  background-color: #063b61;\n  color: white;\n  padding: 14px 20px;\n  margin: 8px 0;\n  border: none;\n  cursor: pointer;\n  width: 100%;\n  opacity: 0.9;\n}\n\nbutton:hover {\n  opacity: 1;\n}\n\na {\n  text-align: right;\n  color: #000;\n}\n\na:hover {\n  color: #063b61;\n  opacity: 1;\n}\n\n/* Extra styles for the cancel button */\n\n.cancelbtn {\n  padding: 14px 20px;\n  background-color: #f44336;\n}\n\n/* Float cancel and signup buttons and add an equal width */\n\n.cancelbtn, .signupbtn {\n  float: left;\n  width: 50%;\n}\n\n/* Add padding to container elements */\n\n.container {\n  padding: 10px;\n}\n\n/* The Modal (background) */\n\n.modal {\n  display: none;\n  /* Hidden by default */\n  position: fixed;\n  /* Stay in place */\n  z-index: 1;\n  /* Sit on top */\n  left: 0;\n  top: 0;\n  width: 100%;\n  /* Full width */\n  height: 100%;\n  /* Full height */\n  overflow: auto;\n  /* Enable scroll if needed */\n  background-color: #474e5d;\n  padding-top: 50px;\n}\n\n/* Modal Content/Box */\n\n.modal-content {\n  background-color: #fefefe;\n  margin: 5% auto 15% auto;\n  /* 5% from the top, 15% from the bottom and centered */\n  border: 1px solid #888;\n  width: 80%;\n  /* Could be more or less, depending on screen size */\n}\n\n/* Style the horizontal ruler */\n\nhr {\n  border: 1px solid #f1f1f1;\n  margin-bottom: 25px;\n}\n\n/* The Close Button (x) */\n\n.close {\n  position: absolute;\n  right: 35px;\n  top: 15px;\n  font-size: 40px;\n  font-weight: bold;\n  color: #f1f1f1;\n}\n\n.close:hover,\n.close:focus {\n  color: #f44336;\n  cursor: pointer;\n}\n\n/* Clear floats */\n\n.clearfix::after {\n  content: \"\";\n  clear: both;\n  display: table;\n}\n\n/* Change styles for cancel button and signup button on extra small screens */\n\n@media screen and (max-width: 300px) {\n  .cancelbtn, .signupbtn {\n    width: 100%;\n  }\n}\n\np {\n  text-align: center;\n}\n\n.link {\n  text-align: center;\n}\n\n.login {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXJlYXMvYXV0aC9sb2dpbi9EOlxcUHJvamVjdF9NYWpvclxcTVNfYmFua2luZ1xcQmFua0FwcEZyb250ZW5kL3NyY1xcYXBwXFxhcmVhc1xcYXV0aFxcbG9naW5cXGxvZ2luLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcmVhcy9hdXRoL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQU8sV0FBQTtBQ0FQOztBRENBO0VBQ0MsK0NBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDRDQUFBO0VBQ0EsaURBQUE7RUFDQyxvREFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7QUNFRjs7QURHQTtFQUNFLFlBQUE7QUNBRjs7QURFQTtFQUNDLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSw4Q0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7QUNDRDs7QURDQTs7OztFQUtDLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSwyQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUNBQUE7RUFDQSxZQUFBO0VBQWMsV0FBQTtBQ0VmOztBREVBOztFQUlDLHlDQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSw4Q0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7QUNDRDs7QURDQTs7RUFFQyxpR0FBQTtFQUFBLGdFQUFBO0VBQ0EseUJBQUE7QUNFRDs7QURBQTtFQUFNLHlDQUFBO0FDSU47O0FESEE7RUFBRyxzQkFBQTtBQ09IOztBRExBLDRCQUFBOztBQUNBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDUUY7O0FETEEscURBQUE7O0FBQ0E7RUFDRSxzQkFBQTtFQUNBLGFBQUE7QUNRRjs7QURMQSxnQ0FBQTs7QUFDQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNRRjs7QURMQTtFQUNFLFVBQUE7QUNRRjs7QUROQTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtBQ1NGOztBRFBBO0VBQ0UsY0FBQTtFQUNELFVBQUE7QUNVRDs7QURQQSx1Q0FBQTs7QUFDQTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7QUNVRjs7QURQQSwyREFBQTs7QUFDQTtFQUNFLFdBQUE7RUFDQSxVQUFBO0FDVUY7O0FEUEEsc0NBQUE7O0FBQ0E7RUFDRSxhQUFBO0FDVUY7O0FEUEEsMkJBQUE7O0FBQ0E7RUFDRSxhQUFBO0VBQWUsc0JBQUE7RUFDZixlQUFBO0VBQWlCLGtCQUFBO0VBQ2pCLFVBQUE7RUFBWSxlQUFBO0VBQ1osT0FBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQWEsZUFBQTtFQUNiLFlBQUE7RUFBYyxnQkFBQTtFQUNkLGNBQUE7RUFBZ0IsNEJBQUE7RUFDaEIseUJBQUE7RUFDQSxpQkFBQTtBQ2dCRjs7QURiQSxzQkFBQTs7QUFDQTtFQUNFLHlCQUFBO0VBQ0Esd0JBQUE7RUFBMEIsc0RBQUE7RUFDMUIsc0JBQUE7RUFDQSxVQUFBO0VBQVksb0RBQUE7QUNrQmQ7O0FEZkEsK0JBQUE7O0FBQ0E7RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0FDa0JGOztBRGZBLHlCQUFBOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNrQkY7O0FEZkE7O0VBRUUsY0FBQTtFQUNBLGVBQUE7QUNrQkY7O0FEZkEsaUJBQUE7O0FBQ0E7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUNrQkY7O0FEZkEsNkVBQUE7O0FBQ0E7RUFDRTtJQUNHLFdBQUE7RUNrQkg7QUFDRjs7QURoQkE7RUFDRSxrQkFBQTtBQ2tCRjs7QURoQkE7RUFDRSxrQkFBQTtBQ21CRjs7QURqQkE7RUFDRSxrQkFBQTtBQ29CRiIsImZpbGUiOiJzcmMvYXBwL2FyZWFzL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmxhYmVseyBtYXJnaW46MHB4O31cclxuLmlkMXtcclxuXHRmb250LWZhbWlseTogJ09wZW4gU2FucyBDb25kZW5zZWQnLCBhcmlhbCwgc2FucztcclxuXHR3aWR0aDogNTAwcHg7XHJcblx0cGFkZGluZzogMjBweDtcclxuXHRiYWNrZ3JvdW5kOiBibHVlKCRjb2xvcjogI2ZmMDBmZik7XHJcblx0bWFyZ2luOiAzMHB4IGF1dG87XHJcblx0Ym94LXNoYWRvdzogMHB4IDBweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4yMik7XHJcblx0LW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjIyKTtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6ICAwcHggMHB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjIyKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICBcclxuXHJcbn1cclxuXHJcbi5pZDEgYnV0dG9uOmhvdmVye1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4uaWQxIGgye1xyXG5cdGJhY2tncm91bmQ6ICM0RDRENEQ7XHJcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuXHRmb250LWZhbWlseTogJ09wZW4gU2FucyBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xyXG5cdGNvbG9yOiAjNzk3OTc5O1xyXG5cdGZvbnQtc2l6ZTogMThweDtcclxuXHRmb250LXdlaWdodDogMTAwO1xyXG5cdHBhZGRpbmc6IDIwcHg7XHJcblx0bWFyZ2luOiAtMzBweCAtMzBweCAzMHB4IC0zMHB4O1xyXG59XHJcbi5pZDEgaW5wdXRbdHlwZT1cInRleHRcIl0sXHJcbi5pZDEgaW5wdXRbdHlwZT1cImVtYWlsXCJdLFxyXG4uaWQxIGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSxcclxuLmZvcm0tLTggc2VsZWN0IFxyXG57XHJcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHQtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0LW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdG91dGxpbmU6IG5vbmU7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0cGFkZGluZzogNXB4O1xyXG5cdGJvcmRlcjogbm9uZTtcclxuXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcclxuXHRiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuXHRtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5cdGZvbnQ6IDE2cHggQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuXHRoZWlnaHQ6IDMwcHg7IG1hcmdpbjowcHg7XHJcbn1cclxuXHJcblxyXG4uaWQxIGlucHV0W3R5cGU9XCJidXR0b25cIl0sIFxyXG4uaWQxIGlucHV0W3R5cGU9XCJzdWJtaXRcIl17XHJcblx0LW1vei1ib3gtc2hhZG93OiBpbnNldCAwcHggMXB4IDBweCAwcHggIzQ1RDZENjtcclxuXHQtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDBweCAxcHggMHB4IDBweCAjNDVENkQ2O1xyXG5cdGJveC1zaGFkb3c6IGluc2V0IDBweCAxcHggMHB4IDBweCAjNDVENkQ2O1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICMyQ0JCQkI7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgIzI3QTBBMDtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdGNvbG9yOiAjRkZGRkZGO1xyXG5cdGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zIENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XHJcblx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdHBhZGRpbmc6IDhweCAxOHB4O1xyXG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcbi5pZDEgaW5wdXRbdHlwZT1cImJ1dHRvblwiXTpob3ZlciwgXHJcbi5pZDEgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXTpob3ZlciB7XHJcblx0YmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMzRDQUNBIDUlLCAjMzBDOUM5IDEwMCUpO1xyXG5cdGJhY2tncm91bmQtY29sb3I6IzM0Q0FDQTtcclxufVxyXG5ib2R5IHtmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjt9XHJcbioge2JveC1zaXppbmc6IGJvcmRlci1ib3g7fVxyXG5cclxuLyogRnVsbC13aWR0aCBpbnB1dCBmaWVsZHMgKi9cclxuaW5wdXRbdHlwZT10ZXh0XSwgaW5wdXRbdHlwZT1wYXNzd29yZF0ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgbWFyZ2luOiA1cHggMCAyMHB4IDA7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xyXG59XHJcblxyXG4vKiBBZGQgYSBiYWNrZ3JvdW5kIGNvbG9yIHdoZW4gdGhlIGlucHV0cyBnZXQgZm9jdXMgKi9cclxuaW5wdXRbdHlwZT10ZXh0XTpmb2N1cywgaW5wdXRbdHlwZT1wYXNzd29yZF06Zm9jdXMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLyogU2V0IGEgc3R5bGUgZm9yIGFsbCBidXR0b25zICovXHJcbmJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjojMDYzYjYxO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAxNHB4IDIwcHg7XHJcbiAgbWFyZ2luOiA4cHggMDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG9wYWNpdHk6IDAuOTtcclxufVxyXG5cclxuYnV0dG9uOmhvdmVyIHtcclxuICBvcGFjaXR5OjE7XHJcbn1cclxuYXtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBjb2xvcjogIzAwMDtcclxufVxyXG5hOmhvdmVye1xyXG4gIGNvbG9yOiMwNjNiNjE7XHJcbiBvcGFjaXR5OjE7XHJcbn1cclxuXHJcbi8qIEV4dHJhIHN0eWxlcyBmb3IgdGhlIGNhbmNlbCBidXR0b24gKi9cclxuLmNhbmNlbGJ0biB7XHJcbiAgcGFkZGluZzogMTRweCAyMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzY7XHJcbn1cclxuXHJcbi8qIEZsb2F0IGNhbmNlbCBhbmQgc2lnbnVwIGJ1dHRvbnMgYW5kIGFkZCBhbiBlcXVhbCB3aWR0aCAqL1xyXG4uY2FuY2VsYnRuLCAuc2lnbnVwYnRuIHtcclxuICBmbG9hdDogbGVmdDtcclxuICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG4vKiBBZGQgcGFkZGluZyB0byBjb250YWluZXIgZWxlbWVudHMgKi9cclxuLmNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLyogVGhlIE1vZGFsIChiYWNrZ3JvdW5kKSAqL1xyXG4ubW9kYWwge1xyXG4gIGRpc3BsYXk6IG5vbmU7IC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXHJcbiAgcG9zaXRpb246IGZpeGVkOyAvKiBTdGF5IGluIHBsYWNlICovXHJcbiAgei1pbmRleDogMTsgLyogU2l0IG9uIHRvcCAqL1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoICovXHJcbiAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAqL1xyXG4gIG92ZXJmbG93OiBhdXRvOyAvKiBFbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCAqL1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NzRlNWQ7XHJcbiAgcGFkZGluZy10b3A6IDUwcHg7XHJcbn1cclxuXHJcbi8qIE1vZGFsIENvbnRlbnQvQm94ICovXHJcbi5tb2RhbC1jb250ZW50IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xyXG4gIG1hcmdpbjogNSUgYXV0byAxNSUgYXV0bzsgLyogNSUgZnJvbSB0aGUgdG9wLCAxNSUgZnJvbSB0aGUgYm90dG9tIGFuZCBjZW50ZXJlZCAqL1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XHJcbiAgd2lkdGg6IDgwJTsgLyogQ291bGQgYmUgbW9yZSBvciBsZXNzLCBkZXBlbmRpbmcgb24gc2NyZWVuIHNpemUgKi9cclxufVxyXG5cclxuLyogU3R5bGUgdGhlIGhvcml6b250YWwgcnVsZXIgKi9cclxuaHIge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmMWYxZjE7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxufVxyXG4gXHJcbi8qIFRoZSBDbG9zZSBCdXR0b24gKHgpICovXHJcbi5jbG9zZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAzNXB4O1xyXG4gIHRvcDogMTVweDtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY29sb3I6ICNmMWYxZjE7XHJcbn1cclxuXHJcbi5jbG9zZTpob3ZlcixcclxuLmNsb3NlOmZvY3VzIHtcclxuICBjb2xvcjogI2Y0NDMzNjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi8qIENsZWFyIGZsb2F0cyAqL1xyXG4uY2xlYXJmaXg6OmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGNsZWFyOiBib3RoO1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG59XHJcblxyXG4vKiBDaGFuZ2Ugc3R5bGVzIGZvciBjYW5jZWwgYnV0dG9uIGFuZCBzaWdudXAgYnV0dG9uIG9uIGV4dHJhIHNtYWxsIHNjcmVlbnMgKi9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzAwcHgpIHtcclxuICAuY2FuY2VsYnRuLCAuc2lnbnVwYnRuIHtcclxuICAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbn1cclxucHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmxpbmt7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5sb2dpbntcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuIiwibGFiZWwge1xuICBtYXJnaW46IDBweDtcbn1cblxuLmlkMSB7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2FucyBDb25kZW5zZWRcIiwgYXJpYWwsIHNhbnM7XG4gIHdpZHRoOiA1MDBweDtcbiAgcGFkZGluZzogMjBweDtcbiAgYmFja2dyb3VuZDogMjU1O1xuICBtYXJnaW46IDMwcHggYXV0bztcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4yMik7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4yMik7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4yMik7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tdG9wOiAxMDBweDtcbn1cblxuLmlkMSBidXR0b246aG92ZXIge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5pZDEgaDIge1xuICBiYWNrZ3JvdW5kOiAjNEQ0RDREO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnMgQ29uZGVuc2VkXCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjNzk3OTc5O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIG1hcmdpbjogLTMwcHggLTMwcHggMzBweCAtMzBweDtcbn1cblxuLmlkMSBpbnB1dFt0eXBlPXRleHRdLFxuLmlkMSBpbnB1dFt0eXBlPWVtYWlsXSxcbi5pZDEgaW5wdXRbdHlwZT1wYXNzd29yZF0sXG4uZm9ybS0tOCBzZWxlY3Qge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgb3V0bGluZTogbm9uZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBmb250OiAxNnB4IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGhlaWdodDogMzBweDtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbi5pZDEgaW5wdXRbdHlwZT1idXR0b25dLFxuLmlkMSBpbnB1dFt0eXBlPXN1Ym1pdF0ge1xuICAtbW96LWJveC1zaGFkb3c6IGluc2V0IDBweCAxcHggMHB4IDBweCAjNDVENkQ2O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDBweCAxcHggMHB4IDBweCAjNDVENkQ2O1xuICBib3gtc2hhZG93OiBpbnNldCAwcHggMXB4IDBweCAwcHggIzQ1RDZENjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJDQkJCQjtcbiAgYm9yZGVyOiAxcHggc29saWQgIzI3QTBBMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnMgQ29uZGVuc2VkXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZzogOHB4IDE4cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmlkMSBpbnB1dFt0eXBlPWJ1dHRvbl06aG92ZXIsXG4uaWQxIGlucHV0W3R5cGU9c3VibWl0XTpob3ZlciB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMzNENBQ0EgNSUsICMzMEM5QzkgMTAwJSk7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNENBQ0E7XG59XG5cbmJvZHkge1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbn1cblxuKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi8qIEZ1bGwtd2lkdGggaW5wdXQgZmllbGRzICovXG5pbnB1dFt0eXBlPXRleHRdLCBpbnB1dFt0eXBlPXBhc3N3b3JkXSB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW46IDVweCAwIDIwcHggMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6ICNmMWYxZjE7XG59XG5cbi8qIEFkZCBhIGJhY2tncm91bmQgY29sb3Igd2hlbiB0aGUgaW5wdXRzIGdldCBmb2N1cyAqL1xuaW5wdXRbdHlwZT10ZXh0XTpmb2N1cywgaW5wdXRbdHlwZT1wYXNzd29yZF06Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4vKiBTZXQgYSBzdHlsZSBmb3IgYWxsIGJ1dHRvbnMgKi9cbmJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNjNiNjE7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMTRweCAyMHB4O1xuICBtYXJnaW46IDhweCAwO1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIG9wYWNpdHk6IDAuOTtcbn1cblxuYnV0dG9uOmhvdmVyIHtcbiAgb3BhY2l0eTogMTtcbn1cblxuYSB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBjb2xvcjogIzAwMDtcbn1cblxuYTpob3ZlciB7XG4gIGNvbG9yOiAjMDYzYjYxO1xuICBvcGFjaXR5OiAxO1xufVxuXG4vKiBFeHRyYSBzdHlsZXMgZm9yIHRoZSBjYW5jZWwgYnV0dG9uICovXG4uY2FuY2VsYnRuIHtcbiAgcGFkZGluZzogMTRweCAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ0MzM2O1xufVxuXG4vKiBGbG9hdCBjYW5jZWwgYW5kIHNpZ251cCBidXR0b25zIGFuZCBhZGQgYW4gZXF1YWwgd2lkdGggKi9cbi5jYW5jZWxidG4sIC5zaWdudXBidG4ge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDUwJTtcbn1cblxuLyogQWRkIHBhZGRpbmcgdG8gY29udGFpbmVyIGVsZW1lbnRzICovXG4uY29udGFpbmVyIHtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLyogVGhlIE1vZGFsIChiYWNrZ3JvdW5kKSAqL1xuLm1vZGFsIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cbiAgcG9zaXRpb246IGZpeGVkO1xuICAvKiBTdGF5IGluIHBsYWNlICovXG4gIHotaW5kZXg6IDE7XG4gIC8qIFNpdCBvbiB0b3AgKi9cbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgLyogRnVsbCB3aWR0aCAqL1xuICBoZWlnaHQ6IDEwMCU7XG4gIC8qIEZ1bGwgaGVpZ2h0ICovXG4gIG92ZXJmbG93OiBhdXRvO1xuICAvKiBFbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDc0ZTVkO1xuICBwYWRkaW5nLXRvcDogNTBweDtcbn1cblxuLyogTW9kYWwgQ29udGVudC9Cb3ggKi9cbi5tb2RhbC1jb250ZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcbiAgbWFyZ2luOiA1JSBhdXRvIDE1JSBhdXRvO1xuICAvKiA1JSBmcm9tIHRoZSB0b3AsIDE1JSBmcm9tIHRoZSBib3R0b20gYW5kIGNlbnRlcmVkICovXG4gIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XG4gIHdpZHRoOiA4MCU7XG4gIC8qIENvdWxkIGJlIG1vcmUgb3IgbGVzcywgZGVwZW5kaW5nIG9uIHNjcmVlbiBzaXplICovXG59XG5cbi8qIFN0eWxlIHRoZSBob3Jpem9udGFsIHJ1bGVyICovXG5ociB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmMWYxZjE7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG5cbi8qIFRoZSBDbG9zZSBCdXR0b24gKHgpICovXG4uY2xvc2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAzNXB4O1xuICB0b3A6IDE1cHg7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjZjFmMWYxO1xufVxuXG4uY2xvc2U6aG92ZXIsXG4uY2xvc2U6Zm9jdXMge1xuICBjb2xvcjogI2Y0NDMzNjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4vKiBDbGVhciBmbG9hdHMgKi9cbi5jbGVhcmZpeDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBjbGVhcjogYm90aDtcbiAgZGlzcGxheTogdGFibGU7XG59XG5cbi8qIENoYW5nZSBzdHlsZXMgZm9yIGNhbmNlbCBidXR0b24gYW5kIHNpZ251cCBidXR0b24gb24gZXh0cmEgc21hbGwgc2NyZWVucyAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzAwcHgpIHtcbiAgLmNhbmNlbGJ0biwgLnNpZ251cGJ0biB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbnAge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5saW5rIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubG9naW4ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/areas/auth/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/areas/auth/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/auth/auth/auth.service */ "./src/app/services/auth/auth/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");






let LoginComponent = class LoginComponent {
    constructor(fb, router, authservice, toaster) {
        this.fb = fb;
        this.router = router;
        this.authservice = authservice;
        this.toaster = toaster;
        this.submitted = false;
        this.formdata = {};
    }
    ngOnInit() {
        debugger;
        this.loginform = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]],
            pin: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    }
    get f() { return this.loginform.controls; }
    login() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.loginform.valid) {
            // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.loginform.value))
            this.formdata.Email = this.loginform.value.email;
            this.formdata.Pin = this.loginform.value.pin;
            this.authservice.login(this.formdata).subscribe(data => {
                debugger;
                this.formdata = data;
                window.localStorage.setItem("accountid", this.formdata.AccountId.toString());
                if (this.formdata.Id == 1) { // verified + register
                    window.localStorage.setItem("authenticationToken", this.formdata.JWT);
                    const token = localStorage.getItem("authenticationToken");
                    //  if(token!=null){
                    //   this.decodetoken= jwt_decode(token);
                    //     console.log(this.decodetoken);
                    //    }
                    // this.refreshData()
                    this.router.navigate(['/dashboard']);
                }
                else if (this.formdata.Id == 2) { // register !verified
                    this.router.navigate(['/verify']);
                    this.toaster.success('you are not a verified user', 'please verify first');
                }
                else if (this.formdata.Id == 0) {
                    this.toaster.error("Not a registered user");
                    this.router.navigate(['/register']); //not register
                }
                else {
                    this.toaster.error('Email and pin is invalid', 'Enter valid email'); //incorrect password
                }
            }, err => {
                console.log(err);
            });
        }
        this.loginform.invalid;
        return;
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_auth_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/areas/auth/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/areas/auth/login/login.component.scss")]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/areas/auth/register/register.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/areas/auth/register/register.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label {\n  margin: 0px;\n}\n\nlegend {\n  text-align: center;\n}\n\n.id1 {\n  font-family: \"Open Sans Condensed\", arial, sans;\n  width: 500px;\n  padding: 20px;\n  background: 255;\n  margin: 30px auto;\n  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.22);\n  -moz-box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.22);\n  -webkit-box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.22);\n  background-color: white;\n}\n\n.id1 button:hover {\n  color: white;\n}\n\n.id1 h2 {\n  background: #4D4D4D;\n  text-transform: uppercase;\n  font-family: \"Open Sans Condensed\", sans-serif;\n  color: #797979;\n  font-size: 18px;\n  font-weight: 100;\n  padding: 20px;\n  margin: -30px -30px 30px -30px;\n}\n\n.id1 input[type=text],\n.id1 input[type=email],\n.id1 input[type=password],\n.form--8 select {\n  box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  outline: none;\n  display: block;\n  width: 100%;\n  padding: 5px;\n  border: none;\n  border-bottom: 1px solid #ddd;\n  background: transparent;\n  margin-bottom: 10px;\n  font: 16px Arial, Helvetica, sans-serif;\n  height: 30px;\n  margin: 0px;\n}\n\n.id1 input[type=button],\n.id1 input[type=submit] {\n  box-shadow: inset 0px 1px 0px 0px #45D6D6;\n  background-color: #2CBBBB;\n  border: 1px solid #27A0A0;\n  display: inline-block;\n  cursor: pointer;\n  color: #FFFFFF;\n  font-family: \"Open Sans Condensed\", sans-serif;\n  font-size: 14px;\n  padding: 8px 18px;\n  text-decoration: none;\n  text-transform: uppercase;\n}\n\n.id1 input[type=button]:hover,\n.id1 input[type=submit]:hover {\n  background: -webkit-gradient(linear, left top, left bottom, color-stop(5%, #34CACA), to(#30C9C9));\n  background: linear-gradient(to bottom, #34CACA 5%, #30C9C9 100%);\n  background-color: #34CACA;\n}\n\nbody {\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n* {\n  box-sizing: border-box;\n}\n\n/* Full-width input fields */\n\ninput[type=text], input[type=password] {\n  width: 100%;\n  padding: 10px;\n  margin: 5px 0 20px 0;\n  display: inline-block;\n  border: none;\n  background: #f1f1f1;\n}\n\n/* Add a background color when the inputs get focus */\n\ninput[type=text]:focus, input[type=password]:focus {\n  background-color: #ddd;\n  outline: none;\n}\n\n/* Set a style for all buttons */\n\nbutton {\n  background-color: #063b61;\n  color: white;\n  padding: 14px 20px;\n  margin: 8px 0;\n  border: none;\n  cursor: pointer;\n  width: 100%;\n  opacity: 0.9;\n}\n\nbutton:hover {\n  opacity: 1;\n}\n\n/* Extra styles for the cancel button */\n\n.cancelbtn {\n  padding: 14px 20px;\n  background-color: #f44336;\n}\n\n/* Float cancel and signup buttons and add an equal width */\n\n.cancelbtn, .signupbtn {\n  float: left;\n  width: 50%;\n}\n\n/* Add padding to container elements */\n\n.container {\n  padding: 10px;\n}\n\n/* The Modal (background) */\n\n.modal {\n  display: none;\n  /* Hidden by default */\n  position: fixed;\n  /* Stay in place */\n  z-index: 1;\n  /* Sit on top */\n  left: 0;\n  top: 0;\n  width: 100%;\n  /* Full width */\n  height: 100%;\n  /* Full height */\n  overflow: auto;\n  /* Enable scroll if needed */\n  background-color: #474e5d;\n  padding-top: 50px;\n}\n\n/* Modal Content/Box */\n\n.modal-content {\n  background-color: #fefefe;\n  margin: 5% auto 15% auto;\n  /* 5% from the top, 15% from the bottom and centered */\n  border: 1px solid #888;\n  width: 80%;\n  /* Could be more or less, depending on screen size */\n}\n\n/* Style the horizontal ruler */\n\nhr {\n  border: 1px solid #f1f1f1;\n  margin-bottom: 25px;\n}\n\n/* The Close Button (x) */\n\n.close {\n  position: absolute;\n  right: 35px;\n  top: 15px;\n  font-size: 40px;\n  font-weight: bold;\n  color: #f1f1f1;\n}\n\n.close:hover,\n.close:focus {\n  color: #f44336;\n  cursor: pointer;\n}\n\n/* Clear floats */\n\n.clearfix::after {\n  content: \"\";\n  clear: both;\n  display: table;\n}\n\n/* Change styles for cancel button and signup button on extra small screens */\n\n@media screen and (max-width: 300px) {\n  .cancelbtn, .signupbtn {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXJlYXMvYXV0aC9yZWdpc3Rlci9EOlxcUHJvamVjdF9NYWpvclxcTVNfYmFua2luZ1xcQmFua0FwcEZyb250ZW5kL3NyY1xcYXBwXFxhcmVhc1xcYXV0aFxccmVnaXN0ZXJcXHJlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcmVhcy9hdXRoL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQU8sV0FBQTtBQ0VQOztBREFBO0VBQ0Usa0JBQUE7QUNHRjs7QUREQTtFQUNDLCtDQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSw0Q0FBQTtFQUNBLGlEQUFBO0VBQ0Msb0RBQUE7RUFDQSx1QkFBQTtBQ0lGOztBREFBO0VBQ0UsWUFBQTtBQ0dGOztBRERBO0VBQ0MsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLDhDQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtBQ0lEOztBREZBOzs7O0VBS0Msc0JBQUE7RUFDQSw4QkFBQTtFQUNBLDJCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1Q0FBQTtFQUNBLFlBQUE7RUFBYyxXQUFBO0FDS2Y7O0FEREE7O0VBSUMseUNBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLDhDQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtBQ0lEOztBREZBOztFQUVDLGlHQUFBO0VBQUEsZ0VBQUE7RUFDQSx5QkFBQTtBQ0tEOztBREhBO0VBQU0seUNBQUE7QUNPTjs7QUROQTtFQUFHLHNCQUFBO0FDVUg7O0FEUkEsNEJBQUE7O0FBQ0E7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNXRjs7QURSQSxxREFBQTs7QUFDQTtFQUNFLHNCQUFBO0VBQ0EsYUFBQTtBQ1dGOztBRFJBLGdDQUFBOztBQUNBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ1dGOztBRFJBO0VBQ0UsVUFBQTtBQ1dGOztBRFJBLHVDQUFBOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtBQ1dGOztBRFJBLDJEQUFBOztBQUNBO0VBQ0UsV0FBQTtFQUNBLFVBQUE7QUNXRjs7QURSQSxzQ0FBQTs7QUFDQTtFQUNFLGFBQUE7QUNXRjs7QURSQSwyQkFBQTs7QUFDQTtFQUNFLGFBQUE7RUFBZSxzQkFBQTtFQUNmLGVBQUE7RUFBaUIsa0JBQUE7RUFDakIsVUFBQTtFQUFZLGVBQUE7RUFDWixPQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFBYSxlQUFBO0VBQ2IsWUFBQTtFQUFjLGdCQUFBO0VBQ2QsY0FBQTtFQUFnQiw0QkFBQTtFQUNoQix5QkFBQTtFQUNBLGlCQUFBO0FDaUJGOztBRGRBLHNCQUFBOztBQUNBO0VBQ0UseUJBQUE7RUFDQSx3QkFBQTtFQUEwQixzREFBQTtFQUMxQixzQkFBQTtFQUNBLFVBQUE7RUFBWSxvREFBQTtBQ21CZDs7QURoQkEsK0JBQUE7O0FBQ0E7RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0FDbUJGOztBRGhCQSx5QkFBQTs7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDbUJGOztBRGhCQTs7RUFFRSxjQUFBO0VBQ0EsZUFBQTtBQ21CRjs7QURoQkEsaUJBQUE7O0FBQ0E7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUNtQkY7O0FEaEJBLDZFQUFBOztBQUNBO0VBQ0U7SUFDRyxXQUFBO0VDbUJIO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcmVhcy9hdXRoL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibGFiZWx7IG1hcmdpbjowcHg7XHJcbn1cclxubGVnZW5ke1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uaWQxe1xyXG5cdGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zIENvbmRlbnNlZCcsIGFyaWFsLCBzYW5zO1xyXG5cdHdpZHRoOiA1MDBweDtcclxuXHRwYWRkaW5nOiAyMHB4O1xyXG5cdGJhY2tncm91bmQ6IGJsdWUoJGNvbG9yOiAjZmYwMGZmKTtcclxuXHRtYXJnaW46IDMwcHggYXV0bztcclxuXHRib3gtc2hhZG93OiAwcHggMHB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjIyKTtcclxuXHQtbW96LWJveC1zaGFkb3c6IDBweCAwcHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMjIpO1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogIDBweCAwcHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMjIpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlXHJcblxyXG59XHJcblxyXG4uaWQxIGJ1dHRvbjpob3ZlcntcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLmlkMSBoMntcclxuXHRiYWNrZ3JvdW5kOiAjNEQ0RDREO1xyXG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblx0Zm9udC1mYW1pbHk6ICdPcGVuIFNhbnMgQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcclxuXHRjb2xvcjogIzc5Nzk3OTtcclxuXHRmb250LXNpemU6IDE4cHg7XHJcblx0Zm9udC13ZWlnaHQ6IDEwMDtcclxuXHRwYWRkaW5nOiAyMHB4O1xyXG5cdG1hcmdpbjogLTMwcHggLTMwcHggMzBweCAtMzBweDtcclxufVxyXG4uaWQxIGlucHV0W3R5cGU9XCJ0ZXh0XCJdLFxyXG4uaWQxIGlucHV0W3R5cGU9XCJlbWFpbFwiXSxcclxuLmlkMSBpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0sXHJcbi5mb3JtLS04IHNlbGVjdCBcclxue1xyXG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0LXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRvdXRsaW5lOiBub25lO1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdHBhZGRpbmc6IDVweDtcclxuXHRib3JkZXI6IG5vbmU7XHJcblx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XHJcblx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcblx0bWFyZ2luLWJvdHRvbTogMTBweDtcclxuXHRmb250OiAxNnB4IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcblx0aGVpZ2h0OiAzMHB4OyBtYXJnaW46MHB4O1xyXG59XHJcblxyXG5cclxuLmlkMSBpbnB1dFt0eXBlPVwiYnV0dG9uXCJdLCBcclxuLmlkMSBpbnB1dFt0eXBlPVwic3VibWl0XCJde1xyXG5cdC1tb3otYm94LXNoYWRvdzogaW5zZXQgMHB4IDFweCAwcHggMHB4ICM0NUQ2RDY7XHJcblx0LXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwcHggMXB4IDBweCAwcHggIzQ1RDZENjtcclxuXHRib3gtc2hhZG93OiBpbnNldCAwcHggMXB4IDBweCAwcHggIzQ1RDZENjtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMkNCQkJCO1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICMyN0EwQTA7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuXHRjb2xvcjogI0ZGRkZGRjtcclxuXHRmb250LWZhbWlseTogJ09wZW4gU2FucyBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xyXG5cdGZvbnQtc2l6ZTogMTRweDtcclxuXHRwYWRkaW5nOiA4cHggMThweDtcclxuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG4uaWQxIGlucHV0W3R5cGU9XCJidXR0b25cIl06aG92ZXIsIFxyXG4uaWQxIGlucHV0W3R5cGU9XCJzdWJtaXRcIl06aG92ZXIge1xyXG5cdGJhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzM0Q0FDQSA1JSwgIzMwQzlDOSAxMDAlKTtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiMzNENBQ0E7XHJcbn1cclxuYm9keSB7Zm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7fVxyXG4qIHtib3gtc2l6aW5nOiBib3JkZXItYm94O31cclxuXHJcbi8qIEZ1bGwtd2lkdGggaW5wdXQgZmllbGRzICovXHJcbmlucHV0W3R5cGU9dGV4dF0sIGlucHV0W3R5cGU9cGFzc3dvcmRdIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIG1hcmdpbjogNXB4IDAgMjBweCAwO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcclxufVxyXG5cclxuLyogQWRkIGEgYmFja2dyb3VuZCBjb2xvciB3aGVuIHRoZSBpbnB1dHMgZ2V0IGZvY3VzICovXHJcbmlucHV0W3R5cGU9dGV4dF06Zm9jdXMsIGlucHV0W3R5cGU9cGFzc3dvcmRdOmZvY3VzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi8qIFNldCBhIHN0eWxlIGZvciBhbGwgYnV0dG9ucyAqL1xyXG5idXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IzA2M2I2MTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMTRweCAyMHB4O1xyXG4gIG1hcmdpbjogOHB4IDA7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBvcGFjaXR5OiAwLjk7XHJcbn1cclxuXHJcbmJ1dHRvbjpob3ZlciB7XHJcbiAgb3BhY2l0eToxO1xyXG59XHJcblxyXG4vKiBFeHRyYSBzdHlsZXMgZm9yIHRoZSBjYW5jZWwgYnV0dG9uICovXHJcbi5jYW5jZWxidG4ge1xyXG4gIHBhZGRpbmc6IDE0cHggMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ0MzM2O1xyXG59XHJcblxyXG4vKiBGbG9hdCBjYW5jZWwgYW5kIHNpZ251cCBidXR0b25zIGFuZCBhZGQgYW4gZXF1YWwgd2lkdGggKi9cclxuLmNhbmNlbGJ0biwgLnNpZ251cGJ0biB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgd2lkdGg6IDUwJTtcclxufVxyXG5cclxuLyogQWRkIHBhZGRpbmcgdG8gY29udGFpbmVyIGVsZW1lbnRzICovXHJcbi5jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi8qIFRoZSBNb2RhbCAoYmFja2dyb3VuZCkgKi9cclxuLm1vZGFsIHtcclxuICBkaXNwbGF5OiBub25lOyAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xyXG4gIHBvc2l0aW9uOiBmaXhlZDsgLyogU3RheSBpbiBwbGFjZSAqL1xyXG4gIHotaW5kZXg6IDE7IC8qIFNpdCBvbiB0b3AgKi9cclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogMDtcclxuICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAqL1xyXG4gIGhlaWdodDogMTAwJTsgLyogRnVsbCBoZWlnaHQgKi9cclxuICBvdmVyZmxvdzogYXV0bzsgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDc0ZTVkO1xyXG4gIHBhZGRpbmctdG9wOiA1MHB4O1xyXG59XHJcblxyXG4vKiBNb2RhbCBDb250ZW50L0JveCAqL1xyXG4ubW9kYWwtY29udGVudCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcclxuICBtYXJnaW46IDUlIGF1dG8gMTUlIGF1dG87IC8qIDUlIGZyb20gdGhlIHRvcCwgMTUlIGZyb20gdGhlIGJvdHRvbSBhbmQgY2VudGVyZWQgKi9cclxuICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xyXG4gIHdpZHRoOiA4MCU7IC8qIENvdWxkIGJlIG1vcmUgb3IgbGVzcywgZGVwZW5kaW5nIG9uIHNjcmVlbiBzaXplICovXHJcbn1cclxuXHJcbi8qIFN0eWxlIHRoZSBob3Jpem9udGFsIHJ1bGVyICovXHJcbmhyIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZjFmMWYxO1xyXG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbn1cclxuIFxyXG4vKiBUaGUgQ2xvc2UgQnV0dG9uICh4KSAqL1xyXG4uY2xvc2Uge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMzVweDtcclxuICB0b3A6IDE1cHg7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiAjZjFmMWYxO1xyXG59XHJcblxyXG4uY2xvc2U6aG92ZXIsXHJcbi5jbG9zZTpmb2N1cyB7XHJcbiAgY29sb3I6ICNmNDQzMzY7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4vKiBDbGVhciBmbG9hdHMgKi9cclxuLmNsZWFyZml4OjphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBjbGVhcjogYm90aDtcclxuICBkaXNwbGF5OiB0YWJsZTtcclxufVxyXG5cclxuLyogQ2hhbmdlIHN0eWxlcyBmb3IgY2FuY2VsIGJ1dHRvbiBhbmQgc2lnbnVwIGJ1dHRvbiBvbiBleHRyYSBzbWFsbCBzY3JlZW5zICovXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMwMHB4KSB7XHJcbiAgLmNhbmNlbGJ0biwgLnNpZ251cGJ0biB7XHJcbiAgICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59IiwibGFiZWwge1xuICBtYXJnaW46IDBweDtcbn1cblxubGVnZW5kIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaWQxIHtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zIENvbmRlbnNlZFwiLCBhcmlhbCwgc2FucztcbiAgd2lkdGg6IDUwMHB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICBiYWNrZ3JvdW5kOiAyNTU7XG4gIG1hcmdpbjogMzBweCBhdXRvO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjIyKTtcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjIyKTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjIyKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5pZDEgYnV0dG9uOmhvdmVyIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uaWQxIGgyIHtcbiAgYmFja2dyb3VuZDogIzRENEQ0RDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zIENvbmRlbnNlZFwiLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogIzc5Nzk3OTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogMTAwO1xuICBwYWRkaW5nOiAyMHB4O1xuICBtYXJnaW46IC0zMHB4IC0zMHB4IDMwcHggLTMwcHg7XG59XG5cbi5pZDEgaW5wdXRbdHlwZT10ZXh0XSxcbi5pZDEgaW5wdXRbdHlwZT1lbWFpbF0sXG4uaWQxIGlucHV0W3R5cGU9cGFzc3dvcmRdLFxuLmZvcm0tLTggc2VsZWN0IHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgZm9udDogMTZweCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBoZWlnaHQ6IDMwcHg7XG4gIG1hcmdpbjogMHB4O1xufVxuXG4uaWQxIGlucHV0W3R5cGU9YnV0dG9uXSxcbi5pZDEgaW5wdXRbdHlwZT1zdWJtaXRdIHtcbiAgLW1vei1ib3gtc2hhZG93OiBpbnNldCAwcHggMXB4IDBweCAwcHggIzQ1RDZENjtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwcHggMXB4IDBweCAwcHggIzQ1RDZENjtcbiAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDFweCAwcHggMHB4ICM0NUQ2RDY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyQ0JCQkI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMyN0EwQTA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zIENvbmRlbnNlZFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmc6IDhweCAxOHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5pZDEgaW5wdXRbdHlwZT1idXR0b25dOmhvdmVyLFxuLmlkMSBpbnB1dFt0eXBlPXN1Ym1pdF06aG92ZXIge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMzRDQUNBIDUlLCAjMzBDOUM5IDEwMCUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzRDQUNBO1xufVxuXG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG59XG5cbioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4vKiBGdWxsLXdpZHRoIGlucHV0IGZpZWxkcyAqL1xuaW5wdXRbdHlwZT10ZXh0XSwgaW5wdXRbdHlwZT1wYXNzd29yZF0ge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luOiA1cHggMCAyMHB4IDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xufVxuXG4vKiBBZGQgYSBiYWNrZ3JvdW5kIGNvbG9yIHdoZW4gdGhlIGlucHV0cyBnZXQgZm9jdXMgKi9cbmlucHV0W3R5cGU9dGV4dF06Zm9jdXMsIGlucHV0W3R5cGU9cGFzc3dvcmRdOmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLyogU2V0IGEgc3R5bGUgZm9yIGFsbCBidXR0b25zICovXG5idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDYzYjYxO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDE0cHggMjBweDtcbiAgbWFyZ2luOiA4cHggMDtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBvcGFjaXR5OiAwLjk7XG59XG5cbmJ1dHRvbjpob3ZlciB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi8qIEV4dHJhIHN0eWxlcyBmb3IgdGhlIGNhbmNlbCBidXR0b24gKi9cbi5jYW5jZWxidG4ge1xuICBwYWRkaW5nOiAxNHB4IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzY7XG59XG5cbi8qIEZsb2F0IGNhbmNlbCBhbmQgc2lnbnVwIGJ1dHRvbnMgYW5kIGFkZCBhbiBlcXVhbCB3aWR0aCAqL1xuLmNhbmNlbGJ0biwgLnNpZ251cGJ0biB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogNTAlO1xufVxuXG4vKiBBZGQgcGFkZGluZyB0byBjb250YWluZXIgZWxlbWVudHMgKi9cbi5jb250YWluZXIge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4vKiBUaGUgTW9kYWwgKGJhY2tncm91bmQpICovXG4ubW9kYWwge1xuICBkaXNwbGF5OiBub25lO1xuICAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIC8qIFN0YXkgaW4gcGxhY2UgKi9cbiAgei1pbmRleDogMTtcbiAgLyogU2l0IG9uIHRvcCAqL1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICAvKiBGdWxsIHdpZHRoICovXG4gIGhlaWdodDogMTAwJTtcbiAgLyogRnVsbCBoZWlnaHQgKi9cbiAgb3ZlcmZsb3c6IGF1dG87XG4gIC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NzRlNWQ7XG4gIHBhZGRpbmctdG9wOiA1MHB4O1xufVxuXG4vKiBNb2RhbCBDb250ZW50L0JveCAqL1xuLm1vZGFsLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xuICBtYXJnaW46IDUlIGF1dG8gMTUlIGF1dG87XG4gIC8qIDUlIGZyb20gdGhlIHRvcCwgMTUlIGZyb20gdGhlIGJvdHRvbSBhbmQgY2VudGVyZWQgKi9cbiAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcbiAgd2lkdGg6IDgwJTtcbiAgLyogQ291bGQgYmUgbW9yZSBvciBsZXNzLCBkZXBlbmRpbmcgb24gc2NyZWVuIHNpemUgKi9cbn1cblxuLyogU3R5bGUgdGhlIGhvcml6b250YWwgcnVsZXIgKi9cbmhyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2YxZjFmMTtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cblxuLyogVGhlIENsb3NlIEJ1dHRvbiAoeCkgKi9cbi5jbG9zZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDM1cHg7XG4gIHRvcDogMTVweDtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICNmMWYxZjE7XG59XG5cbi5jbG9zZTpob3Zlcixcbi5jbG9zZTpmb2N1cyB7XG4gIGNvbG9yOiAjZjQ0MzM2O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi8qIENsZWFyIGZsb2F0cyAqL1xuLmNsZWFyZml4OjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGNsZWFyOiBib3RoO1xuICBkaXNwbGF5OiB0YWJsZTtcbn1cblxuLyogQ2hhbmdlIHN0eWxlcyBmb3IgY2FuY2VsIGJ1dHRvbiBhbmQgc2lnbnVwIGJ1dHRvbiBvbiBleHRyYSBzbWFsbCBzY3JlZW5zICovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMDBweCkge1xuICAuY2FuY2VsYnRuLCAuc2lnbnVwYnRuIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/areas/auth/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/areas/auth/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_auth_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/auth/auth/auth.service */ "./src/app/services/auth/auth/auth.service.ts");
/* harmony import */ var _shared_directives_password_must_match_must_match_validator_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/_directives/password_must_match/must-match.validator.module */ "./src/app/shared/_directives/password_must_match/must-match.validator.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let RegisterComponent = class RegisterComponent {
    constructor(fb, router, authservice) {
        this.fb = fb;
        this.router = router;
        this.authservice = authservice;
        this.submitted = false;
        this.formdata = {};
    }
    ngOnInit() {
        this.registerForm = this.fb.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            // mobile:['',Validators.required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            pin: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(4)]],
            cpin: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        }, {
            validator: Object(_shared_directives_password_must_match_must_match_validator_module__WEBPACK_IMPORTED_MODULE_4__["MustMatch"])('pin', 'cpin')
        });
    }
    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }
    showdata() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.valid) {
            // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
            debugger;
            //console.log(this.registerForm.value);
            this.formdata.FirstName = this.registerForm.value.firstName;
            this.formdata.LastName = this.registerForm.value.lastName;
            this.formdata.Email = this.registerForm.value.email;
            this.formdata.Pin = this.registerForm.value.pin;
            this.formdata.Cpin = this.registerForm.value.cpin;
            this.authservice.register(this.formdata).subscribe(data => {
                debugger;
                if (data == "Success") {
                    //  console.log(this.registerForm.value);
                    debugger;
                    alert("User has been Success fully Registered,Please proceed for email verifcation");
                    this.router.navigate(['verify']);
                }
                else if (data == "Fail") {
                    alert("otp not sent");
                    console.log("Fail");
                }
                else if (data == -1) {
                    alert("Email Id already exist,please enter another email Id");
                    this.registerForm = this.fb.group({
                        firstName: '',
                        lastName: '',
                        email: '',
                        pin: '',
                        cpin: '',
                    });
                }
                else {
                    alert("user not registered");
                }
            }, err => {
                console.log(err);
            });
        }
        this.registerForm.invalid;
        return;
    }
};
RegisterComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _services_auth_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: __webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/index.js!./src/app/areas/auth/register/register.component.html"),
        styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/areas/auth/register/register.component.scss")]
    })
], RegisterComponent);



/***/ }),

/***/ "./src/app/areas/auth/resetpassword/resetpassword.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/areas/auth/resetpassword/resetpassword.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label {\n  margin: 0px;\n}\n\n.id1 {\n  font-family: \"Open Sans Condensed\", arial, sans;\n  width: 500px;\n  padding: 20px;\n  background: 255;\n  margin: 80px auto;\n  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.22);\n  -moz-box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.22);\n  -webkit-box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.22);\n  background: white;\n}\n\n.form-control::-webkit-input-placeholder {\n  /* Edge */\n  font-size: 12px;\n}\n\n.form-control::-moz-placeholder {\n  font-size: 12px;\n}\n\n.form-control::-ms-input-placeholder {\n  font-size: 12px;\n}\n\n.form-control::placeholder {\n  font-size: 12px;\n}\n\n.id1 button:hover {\n  color: white;\n}\n\n.id1 h2 {\n  background: #4D4D4D;\n  text-transform: uppercase;\n  font-family: \"Open Sans Condensed\", sans-serif;\n  color: #797979;\n  font-size: 18px;\n  font-weight: 100;\n  padding: 20px;\n  margin: -30px -30px 30px -30px;\n}\n\n.id1 input[type=text],\n.id1 input[type=email],\n.id1 input[type=password],\n.form--8 select {\n  box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  outline: none;\n  display: block;\n  width: 100%;\n  padding: 5px;\n  border: none;\n  border-bottom: 1px solid #ddd;\n  background: transparent;\n  margin-bottom: 10px;\n  font: 16px Arial, Helvetica, sans-serif;\n  height: 30px;\n  margin: 0px;\n}\n\n.id1 input[type=button],\n.id1 input[type=submit] {\n  box-shadow: inset 0px 1px 0px 0px #45D6D6;\n  background-color: #2CBBBB;\n  border: 1px solid #27A0A0;\n  display: inline-block;\n  cursor: pointer;\n  color: #FFFFFF;\n  font-family: \"Open Sans Condensed\", sans-serif;\n  font-size: 14px;\n  padding: 8px 18px;\n  text-decoration: none;\n  text-transform: uppercase;\n}\n\n.id1 input[type=button]:hover,\n.id1 input[type=submit]:hover {\n  background: -webkit-gradient(linear, left top, left bottom, color-stop(5%, #34CACA), to(#30C9C9));\n  background: linear-gradient(to bottom, #34CACA 5%, #30C9C9 100%);\n  background-color: #34CACA;\n}\n\nbody {\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n* {\n  box-sizing: border-box;\n}\n\n/* Full-width input fields */\n\ninput[type=text], input[type=password] {\n  width: 100%;\n  padding: 10px;\n  margin: 5px 0 20px 0;\n  display: inline-block;\n  border: none;\n  background: #f1f1f1;\n}\n\n/* Add a background color when the inputs get focus */\n\ninput[type=text]:focus, input[type=password]:focus {\n  background-color: #ddd;\n  outline: none;\n}\n\n/* Set a style for all buttons */\n\nbutton {\n  background-color: #063b61;\n  color: white;\n  padding: 14px 20px;\n  margin: 8px 0;\n  border: none;\n  cursor: pointer;\n  width: 100%;\n  opacity: 0.9;\n}\n\nbutton:hover {\n  opacity: 1;\n}\n\n/* Extra styles for the cancel button */\n\n.cancelbtn {\n  padding: 14px 20px;\n  background-color: #f44336;\n}\n\n/* Float cancel and signup buttons and add an equal width */\n\n.cancelbtn, .signupbtn {\n  float: left;\n  width: 50%;\n}\n\n/* Add padding to container elements */\n\n.container {\n  padding: 10px;\n}\n\n/* The Modal (background) */\n\n.modal {\n  display: none;\n  /* Hidden by default */\n  position: fixed;\n  /* Stay in place */\n  z-index: 1;\n  /* Sit on top */\n  left: 0;\n  top: 0;\n  width: 100%;\n  /* Full width */\n  height: 100%;\n  /* Full height */\n  overflow: auto;\n  /* Enable scroll if needed */\n  background-color: #474e5d;\n  padding-top: 50px;\n}\n\n/* Modal Content/Box */\n\n.modal-content {\n  background-color: #fefefe;\n  margin: 5% auto 15% auto;\n  /* 5% from the top, 15% from the bottom and centered */\n  border: 1px solid #888;\n  width: 80%;\n  /* Could be more or less, depending on screen size */\n}\n\n/* Style the horizontal ruler */\n\nhr {\n  border: 1px solid #f1f1f1;\n  margin-bottom: 25px;\n}\n\n/* The Close Button (x) */\n\n.close {\n  position: absolute;\n  right: 35px;\n  top: 15px;\n  font-size: 40px;\n  font-weight: bold;\n  color: #f1f1f1;\n}\n\n.close:hover,\n.close:focus {\n  color: #f44336;\n  cursor: pointer;\n}\n\n/* Clear floats */\n\n.clearfix::after {\n  content: \"\";\n  clear: both;\n  display: table;\n}\n\n/* Change styles for cancel button and signup button on extra small screens */\n\n@media screen and (max-width: 300px) {\n  .cancelbtn, .signupbtn {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXJlYXMvYXV0aC9yZXNldHBhc3N3b3JkL0Q6XFxQcm9qZWN0X01ham9yXFxNU19iYW5raW5nXFxCYW5rQXBwRnJvbnRlbmQvc3JjXFxhcHBcXGFyZWFzXFxhdXRoXFxyZXNldHBhc3N3b3JkXFxyZXNldHBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcmVhcy9hdXRoL3Jlc2V0cGFzc3dvcmQvcmVzZXRwYXNzd29yZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFPLFdBQUE7QUNFUDs7QUREQTtFQUNDLCtDQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSw0Q0FBQTtFQUNBLGlEQUFBO0VBQ0csb0RBQUE7RUFDQSxpQkFBQTtBQ0lKOztBRERBO0VBQTJDLFNBQUE7RUFDekMsZUFBQTtBQ0tGOztBREVBO0VBQ0UsZUFBQTtBQ01GOztBRFBBO0VBQ0UsZUFBQTtBQ01GOztBRFBBO0VBQ0UsZUFBQTtBQ01GOztBRERBO0VBQ0UsWUFBQTtBQ0lGOztBREZBO0VBQ0MsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLDhDQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtBQ0tEOztBREhBOzs7O0VBS0Msc0JBQUE7RUFDQSw4QkFBQTtFQUNBLDJCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1Q0FBQTtFQUNBLFlBQUE7RUFBYyxXQUFBO0FDTWY7O0FERkE7O0VBSUMseUNBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLDhDQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtBQ0tEOztBREhBOztFQUVDLGlHQUFBO0VBQUEsZ0VBQUE7RUFDQSx5QkFBQTtBQ01EOztBREpBO0VBQU0seUNBQUE7QUNRTjs7QURQQTtFQUFHLHNCQUFBO0FDV0g7O0FEVEEsNEJBQUE7O0FBQ0E7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNZRjs7QURUQSxxREFBQTs7QUFDQTtFQUNFLHNCQUFBO0VBQ0EsYUFBQTtBQ1lGOztBRFRBLGdDQUFBOztBQUNBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ1lGOztBRFRBO0VBQ0UsVUFBQTtBQ1lGOztBRFRBLHVDQUFBOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtBQ1lGOztBRFRBLDJEQUFBOztBQUNBO0VBQ0UsV0FBQTtFQUNBLFVBQUE7QUNZRjs7QURUQSxzQ0FBQTs7QUFDQTtFQUNFLGFBQUE7QUNZRjs7QURUQSwyQkFBQTs7QUFDQTtFQUNFLGFBQUE7RUFBZSxzQkFBQTtFQUNmLGVBQUE7RUFBaUIsa0JBQUE7RUFDakIsVUFBQTtFQUFZLGVBQUE7RUFDWixPQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFBYSxlQUFBO0VBQ2IsWUFBQTtFQUFjLGdCQUFBO0VBQ2QsY0FBQTtFQUFnQiw0QkFBQTtFQUNoQix5QkFBQTtFQUNBLGlCQUFBO0FDa0JGOztBRGZBLHNCQUFBOztBQUNBO0VBQ0UseUJBQUE7RUFDQSx3QkFBQTtFQUEwQixzREFBQTtFQUMxQixzQkFBQTtFQUNBLFVBQUE7RUFBWSxvREFBQTtBQ29CZDs7QURqQkEsK0JBQUE7O0FBQ0E7RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0FDb0JGOztBRGpCQSx5QkFBQTs7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDb0JGOztBRGpCQTs7RUFFRSxjQUFBO0VBQ0EsZUFBQTtBQ29CRjs7QURqQkEsaUJBQUE7O0FBQ0E7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUNvQkY7O0FEakJBLDZFQUFBOztBQUNBO0VBQ0U7SUFDRyxXQUFBO0VDb0JIO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcmVhcy9hdXRoL3Jlc2V0cGFzc3dvcmQvcmVzZXRwYXNzd29yZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImxhYmVseyBtYXJnaW46MHB4O31cclxuLmlkMXtcclxuXHRmb250LWZhbWlseTogJ09wZW4gU2FucyBDb25kZW5zZWQnLCBhcmlhbCwgc2FucztcclxuXHR3aWR0aDogNTAwcHg7XHJcblx0cGFkZGluZzogMjBweDtcclxuXHRiYWNrZ3JvdW5kOiBibHVlKCRjb2xvcjogI2ZmMDBmZik7XHJcblx0bWFyZ2luOiA4MHB4IGF1dG87XHJcblx0Ym94LXNoYWRvdzogMHB4IDBweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4yMik7XHJcblx0LW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjIyKTtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogIDBweCAwcHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMjIpO1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGVcclxufVxyXG5cclxuLmZvcm0tY29udHJvbDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7IC8qIEVkZ2UgKi9cclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2w6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHsgLyogSW50ZXJuZXQgRXhwbG9yZXIgMTAtMTEgKi9cclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2w6OnBsYWNlaG9sZGVyIHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcblxyXG5cclxuLmlkMSBidXR0b246aG92ZXJ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5pZDEgaDJ7XHJcblx0YmFja2dyb3VuZDogIzRENEQ0RDtcclxuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cdGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zIENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XHJcblx0Y29sb3I6ICM3OTc5Nzk7XHJcblx0Zm9udC1zaXplOiAxOHB4O1xyXG5cdGZvbnQtd2VpZ2h0OiAxMDA7XHJcblx0cGFkZGluZzogMjBweDtcclxuXHRtYXJnaW46IC0zMHB4IC0zMHB4IDMwcHggLTMwcHg7XHJcbn1cclxuLmlkMSBpbnB1dFt0eXBlPVwidGV4dFwiXSxcclxuLmlkMSBpbnB1dFt0eXBlPVwiZW1haWxcIl0sXHJcbi5pZDEgaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdLFxyXG4uZm9ybS0tOCBzZWxlY3QgXHJcbntcclxuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHQtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0b3V0bGluZTogbm9uZTtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHR3aWR0aDogMTAwJTtcclxuXHRwYWRkaW5nOiA1cHg7XHJcblx0Ym9yZGVyOiBub25lO1xyXG5cdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xyXG5cdGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG5cdG1hcmdpbi1ib3R0b206IDEwcHg7XHJcblx0Zm9udDogMTZweCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG5cdGhlaWdodDogMzBweDsgbWFyZ2luOjBweDtcclxufVxyXG5cclxuXHJcbi5pZDEgaW5wdXRbdHlwZT1cImJ1dHRvblwiXSwgXHJcbi5pZDEgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXXtcclxuXHQtbW96LWJveC1zaGFkb3c6IGluc2V0IDBweCAxcHggMHB4IDBweCAjNDVENkQ2O1xyXG5cdC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMHB4IDFweCAwcHggMHB4ICM0NUQ2RDY7XHJcblx0Ym94LXNoYWRvdzogaW5zZXQgMHB4IDFweCAwcHggMHB4ICM0NUQ2RDY7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzJDQkJCQjtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjMjdBMEEwO1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0Y29sb3I6ICNGRkZGRkY7XHJcblx0Zm9udC1mYW1pbHk6ICdPcGVuIFNhbnMgQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcclxuXHRmb250LXNpemU6IDE0cHg7XHJcblx0cGFkZGluZzogOHB4IDE4cHg7XHJcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuLmlkMSBpbnB1dFt0eXBlPVwiYnV0dG9uXCJdOmhvdmVyLCBcclxuLmlkMSBpbnB1dFt0eXBlPVwic3VibWl0XCJdOmhvdmVyIHtcclxuXHRiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMzNENBQ0EgNSUsICMzMEM5QzkgMTAwJSk7XHJcblx0YmFja2dyb3VuZC1jb2xvcjojMzRDQUNBO1xyXG59XHJcbmJvZHkge2ZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO31cclxuKiB7Ym94LXNpemluZzogYm9yZGVyLWJveDt9XHJcblxyXG4vKiBGdWxsLXdpZHRoIGlucHV0IGZpZWxkcyAqL1xyXG5pbnB1dFt0eXBlPXRleHRdLCBpbnB1dFt0eXBlPXBhc3N3b3JkXSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBtYXJnaW46IDVweCAwIDIwcHggMDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQ6ICNmMWYxZjE7XHJcbn1cclxuXHJcbi8qIEFkZCBhIGJhY2tncm91bmQgY29sb3Igd2hlbiB0aGUgaW5wdXRzIGdldCBmb2N1cyAqL1xyXG5pbnB1dFt0eXBlPXRleHRdOmZvY3VzLCBpbnB1dFt0eXBlPXBhc3N3b3JkXTpmb2N1cyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4vKiBTZXQgYSBzdHlsZSBmb3IgYWxsIGJ1dHRvbnMgKi9cclxuYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiMwNjNiNjE7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDE0cHggMjBweDtcclxuICBtYXJnaW46IDhweCAwO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb3BhY2l0eTogMC45O1xyXG59XHJcblxyXG5idXR0b246aG92ZXIge1xyXG4gIG9wYWNpdHk6MTtcclxufVxyXG5cclxuLyogRXh0cmEgc3R5bGVzIGZvciB0aGUgY2FuY2VsIGJ1dHRvbiAqL1xyXG4uY2FuY2VsYnRuIHtcclxuICBwYWRkaW5nOiAxNHB4IDIwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0NDMzNjtcclxufVxyXG5cclxuLyogRmxvYXQgY2FuY2VsIGFuZCBzaWdudXAgYnV0dG9ucyBhbmQgYWRkIGFuIGVxdWFsIHdpZHRoICovXHJcbi5jYW5jZWxidG4sIC5zaWdudXBidG4ge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbi8qIEFkZCBwYWRkaW5nIHRvIGNvbnRhaW5lciBlbGVtZW50cyAqL1xyXG4uY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4vKiBUaGUgTW9kYWwgKGJhY2tncm91bmQpICovXHJcbi5tb2RhbCB7XHJcbiAgZGlzcGxheTogbm9uZTsgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cclxuICBwb3NpdGlvbjogZml4ZWQ7IC8qIFN0YXkgaW4gcGxhY2UgKi9cclxuICB6LWluZGV4OiAxOyAvKiBTaXQgb24gdG9wICovXHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDA7XHJcbiAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKi9cclxuICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0ICovXHJcbiAgb3ZlcmZsb3c6IGF1dG87IC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ3NGU1ZDtcclxuICBwYWRkaW5nLXRvcDogNTBweDtcclxufVxyXG5cclxuLyogTW9kYWwgQ29udGVudC9Cb3ggKi9cclxuLm1vZGFsLWNvbnRlbnQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XHJcbiAgbWFyZ2luOiA1JSBhdXRvIDE1JSBhdXRvOyAvKiA1JSBmcm9tIHRoZSB0b3AsIDE1JSBmcm9tIHRoZSBib3R0b20gYW5kIGNlbnRlcmVkICovXHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcclxuICB3aWR0aDogODAlOyAvKiBDb3VsZCBiZSBtb3JlIG9yIGxlc3MsIGRlcGVuZGluZyBvbiBzY3JlZW4gc2l6ZSAqL1xyXG59XHJcblxyXG4vKiBTdHlsZSB0aGUgaG9yaXpvbnRhbCBydWxlciAqL1xyXG5ociB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2YxZjFmMTtcclxuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG59XHJcbiBcclxuLyogVGhlIENsb3NlIEJ1dHRvbiAoeCkgKi9cclxuLmNsb3NlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDM1cHg7XHJcbiAgdG9wOiAxNXB4O1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogI2YxZjFmMTtcclxufVxyXG5cclxuLmNsb3NlOmhvdmVyLFxyXG4uY2xvc2U6Zm9jdXMge1xyXG4gIGNvbG9yOiAjZjQ0MzM2O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLyogQ2xlYXIgZmxvYXRzICovXHJcbi5jbGVhcmZpeDo6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgY2xlYXI6IGJvdGg7XHJcbiAgZGlzcGxheTogdGFibGU7XHJcbn1cclxuXHJcbi8qIENoYW5nZSBzdHlsZXMgZm9yIGNhbmNlbCBidXR0b24gYW5kIHNpZ251cCBidXR0b24gb24gZXh0cmEgc21hbGwgc2NyZWVucyAqL1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMDBweCkge1xyXG4gIC5jYW5jZWxidG4sIC5zaWdudXBidG4ge1xyXG4gICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxufSIsImxhYmVsIHtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbi5pZDEge1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnMgQ29uZGVuc2VkXCIsIGFyaWFsLCBzYW5zO1xuICB3aWR0aDogNTAwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJhY2tncm91bmQ6IDI1NTtcbiAgbWFyZ2luOiA4MHB4IGF1dG87XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMjIpO1xuICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMjIpO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMjIpO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuLmZvcm0tY29udHJvbDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIC8qIEVkZ2UgKi9cbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uZm9ybS1jb250cm9sOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIC8qIEludGVybmV0IEV4cGxvcmVyIDEwLTExICovXG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmZvcm0tY29udHJvbDo6cGxhY2Vob2xkZXIge1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5pZDEgYnV0dG9uOmhvdmVyIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uaWQxIGgyIHtcbiAgYmFja2dyb3VuZDogIzRENEQ0RDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zIENvbmRlbnNlZFwiLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogIzc5Nzk3OTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogMTAwO1xuICBwYWRkaW5nOiAyMHB4O1xuICBtYXJnaW46IC0zMHB4IC0zMHB4IDMwcHggLTMwcHg7XG59XG5cbi5pZDEgaW5wdXRbdHlwZT10ZXh0XSxcbi5pZDEgaW5wdXRbdHlwZT1lbWFpbF0sXG4uaWQxIGlucHV0W3R5cGU9cGFzc3dvcmRdLFxuLmZvcm0tLTggc2VsZWN0IHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgZm9udDogMTZweCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBoZWlnaHQ6IDMwcHg7XG4gIG1hcmdpbjogMHB4O1xufVxuXG4uaWQxIGlucHV0W3R5cGU9YnV0dG9uXSxcbi5pZDEgaW5wdXRbdHlwZT1zdWJtaXRdIHtcbiAgLW1vei1ib3gtc2hhZG93OiBpbnNldCAwcHggMXB4IDBweCAwcHggIzQ1RDZENjtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwcHggMXB4IDBweCAwcHggIzQ1RDZENjtcbiAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDFweCAwcHggMHB4ICM0NUQ2RDY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyQ0JCQkI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMyN0EwQTA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zIENvbmRlbnNlZFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmc6IDhweCAxOHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5pZDEgaW5wdXRbdHlwZT1idXR0b25dOmhvdmVyLFxuLmlkMSBpbnB1dFt0eXBlPXN1Ym1pdF06aG92ZXIge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMzRDQUNBIDUlLCAjMzBDOUM5IDEwMCUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzRDQUNBO1xufVxuXG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG59XG5cbioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4vKiBGdWxsLXdpZHRoIGlucHV0IGZpZWxkcyAqL1xuaW5wdXRbdHlwZT10ZXh0XSwgaW5wdXRbdHlwZT1wYXNzd29yZF0ge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luOiA1cHggMCAyMHB4IDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xufVxuXG4vKiBBZGQgYSBiYWNrZ3JvdW5kIGNvbG9yIHdoZW4gdGhlIGlucHV0cyBnZXQgZm9jdXMgKi9cbmlucHV0W3R5cGU9dGV4dF06Zm9jdXMsIGlucHV0W3R5cGU9cGFzc3dvcmRdOmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLyogU2V0IGEgc3R5bGUgZm9yIGFsbCBidXR0b25zICovXG5idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDYzYjYxO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDE0cHggMjBweDtcbiAgbWFyZ2luOiA4cHggMDtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBvcGFjaXR5OiAwLjk7XG59XG5cbmJ1dHRvbjpob3ZlciB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi8qIEV4dHJhIHN0eWxlcyBmb3IgdGhlIGNhbmNlbCBidXR0b24gKi9cbi5jYW5jZWxidG4ge1xuICBwYWRkaW5nOiAxNHB4IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzY7XG59XG5cbi8qIEZsb2F0IGNhbmNlbCBhbmQgc2lnbnVwIGJ1dHRvbnMgYW5kIGFkZCBhbiBlcXVhbCB3aWR0aCAqL1xuLmNhbmNlbGJ0biwgLnNpZ251cGJ0biB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogNTAlO1xufVxuXG4vKiBBZGQgcGFkZGluZyB0byBjb250YWluZXIgZWxlbWVudHMgKi9cbi5jb250YWluZXIge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4vKiBUaGUgTW9kYWwgKGJhY2tncm91bmQpICovXG4ubW9kYWwge1xuICBkaXNwbGF5OiBub25lO1xuICAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIC8qIFN0YXkgaW4gcGxhY2UgKi9cbiAgei1pbmRleDogMTtcbiAgLyogU2l0IG9uIHRvcCAqL1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICAvKiBGdWxsIHdpZHRoICovXG4gIGhlaWdodDogMTAwJTtcbiAgLyogRnVsbCBoZWlnaHQgKi9cbiAgb3ZlcmZsb3c6IGF1dG87XG4gIC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NzRlNWQ7XG4gIHBhZGRpbmctdG9wOiA1MHB4O1xufVxuXG4vKiBNb2RhbCBDb250ZW50L0JveCAqL1xuLm1vZGFsLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xuICBtYXJnaW46IDUlIGF1dG8gMTUlIGF1dG87XG4gIC8qIDUlIGZyb20gdGhlIHRvcCwgMTUlIGZyb20gdGhlIGJvdHRvbSBhbmQgY2VudGVyZWQgKi9cbiAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcbiAgd2lkdGg6IDgwJTtcbiAgLyogQ291bGQgYmUgbW9yZSBvciBsZXNzLCBkZXBlbmRpbmcgb24gc2NyZWVuIHNpemUgKi9cbn1cblxuLyogU3R5bGUgdGhlIGhvcml6b250YWwgcnVsZXIgKi9cbmhyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2YxZjFmMTtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cblxuLyogVGhlIENsb3NlIEJ1dHRvbiAoeCkgKi9cbi5jbG9zZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDM1cHg7XG4gIHRvcDogMTVweDtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICNmMWYxZjE7XG59XG5cbi5jbG9zZTpob3Zlcixcbi5jbG9zZTpmb2N1cyB7XG4gIGNvbG9yOiAjZjQ0MzM2O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi8qIENsZWFyIGZsb2F0cyAqL1xuLmNsZWFyZml4OjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGNsZWFyOiBib3RoO1xuICBkaXNwbGF5OiB0YWJsZTtcbn1cblxuLyogQ2hhbmdlIHN0eWxlcyBmb3IgY2FuY2VsIGJ1dHRvbiBhbmQgc2lnbnVwIGJ1dHRvbiBvbiBleHRyYSBzbWFsbCBzY3JlZW5zICovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMDBweCkge1xuICAuY2FuY2VsYnRuLCAuc2lnbnVwYnRuIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/areas/auth/resetpassword/resetpassword.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/areas/auth/resetpassword/resetpassword.component.ts ***!
  \*********************************************************************/
/*! exports provided: ResetpasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetpasswordComponent", function() { return ResetpasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_auth_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth/auth/auth.service */ "./src/app/services/auth/auth/auth.service.ts");
/* harmony import */ var src_app_shared_directives_password_must_match_must_match_validator_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/_directives/password_must_match/must-match.validator.module */ "./src/app/shared/_directives/password_must_match/must-match.validator.module.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");







let ResetpasswordComponent = class ResetpasswordComponent {
    constructor(fb, router, authservice, route, toaster) {
        this.fb = fb;
        this.router = router;
        this.authservice = authservice;
        this.route = route;
        this.toaster = toaster;
        this.formdata = {};
        this.submitted = false;
    }
    ngOnInit() {
        debugger;
        this.route.queryParams.subscribe(params => {
            if (params != null) {
                this.formdata.Guid = params['resetcode'];
            }
        });
        this.resetpasswordform = this.fb.group({
            pin: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(4)]],
            cpin: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        }, {
            validator: Object(src_app_shared_directives_password_must_match_must_match_validator_module__WEBPACK_IMPORTED_MODULE_5__["MustMatch"])('pin', 'cpin')
        });
    }
    get f() { return this.resetpasswordform.controls; }
    resetpassword() {
        debugger;
        this.submitted = true;
        if (this.resetpasswordform.valid == true) {
            this.formdata.PIN = this.resetpasswordform.value.pin;
            this.formdata.Cpin = this.resetpasswordform.value.cpin;
            this.authservice.resetpass(this.formdata).subscribe(data => {
                this.formdata = data;
                if (this.formdata.Id == 1) {
                    this.toaster.success("your password has successfully changed");
                    this.router.navigate(['login']);
                }
                else if (this.formdata.Id == -1) {
                    this.toaster.error('Can not changed your password ,something went wrong', 'please verify your email again');
                }
                else {
                    this.toaster.error('Something went wrong');
                }
            }, err => {
                console.log(err);
            });
        }
        this.resetpasswordform.invalid;
        return;
    }
};
ResetpasswordComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_services_auth_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] }
];
ResetpasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-resetpassword',
        template: __webpack_require__(/*! raw-loader!./resetpassword.component.html */ "./node_modules/raw-loader/index.js!./src/app/areas/auth/resetpassword/resetpassword.component.html"),
        styles: [__webpack_require__(/*! ./resetpassword.component.scss */ "./src/app/areas/auth/resetpassword/resetpassword.component.scss")]
    })
], ResetpasswordComponent);



/***/ }),

/***/ "./src/app/areas/banking/add-money/add-money.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/areas/banking/add-money/add-money.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label {\n  margin: 0px;\n}\n\nlegend {\n  text-align: center;\n}\n\n.id1 {\n  font-family: \"Open Sans Condensed\", arial, sans;\n  width: 500px;\n  padding: 20px;\n  background: 255;\n  margin: 30px auto;\n  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.22);\n  -moz-box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.22);\n  -webkit-box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.22);\n  background-color: white;\n}\n\n.id1 button:hover {\n  color: white;\n}\n\n.id1 h2 {\n  background: #4D4D4D;\n  text-transform: uppercase;\n  font-family: \"Open Sans Condensed\", sans-serif;\n  color: #797979;\n  font-size: 18px;\n  font-weight: 100;\n  padding: 20px;\n  margin: -30px -30px 30px -30px;\n}\n\n.id1 input[type=text],\n.id1 input[type=email],\n.id1 input[type=password],\n.form--8 select {\n  box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  outline: none;\n  display: block;\n  width: 100%;\n  padding: 5px;\n  border: none;\n  border-bottom: 1px solid #ddd;\n  background: transparent;\n  margin-bottom: 10px;\n  font: 16px Arial, Helvetica, sans-serif;\n  height: 30px;\n  margin: 0px;\n}\n\n.id1 input[type=button],\n.id1 input[type=submit] {\n  box-shadow: inset 0px 1px 0px 0px #45D6D6;\n  background-color: #2CBBBB;\n  border: 1px solid #27A0A0;\n  display: inline-block;\n  cursor: pointer;\n  color: #FFFFFF;\n  font-family: \"Open Sans Condensed\", sans-serif;\n  font-size: 14px;\n  padding: 8px 18px;\n  text-decoration: none;\n  text-transform: uppercase;\n}\n\n.id1 input[type=button]:hover,\n.id1 input[type=submit]:hover {\n  background: -webkit-gradient(linear, left top, left bottom, color-stop(5%, #34CACA), to(#30C9C9));\n  background: linear-gradient(to bottom, #34CACA 5%, #30C9C9 100%);\n  background-color: #34CACA;\n}\n\nbody {\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n* {\n  box-sizing: border-box;\n}\n\n/* Full-width input fields */\n\ninput[type=text], input[type=password] {\n  width: 100%;\n  padding: 10px;\n  margin: 5px 0 20px 0;\n  display: inline-block;\n  border: none;\n  background: #f1f1f1;\n}\n\n/* Add a background color when the inputs get focus */\n\ninput[type=text]:focus, input[type=password]:focus {\n  background-color: #ddd;\n  outline: none;\n}\n\n/* Set a style for all buttons */\n\nbutton {\n  background-color: #063b61;\n  color: white;\n  padding: 14px 20px;\n  margin: 8px 0;\n  border: none;\n  cursor: pointer;\n  width: 100%;\n  opacity: 0.9;\n}\n\nbutton:hover {\n  opacity: 1;\n}\n\n/* Extra styles for the cancel button */\n\n.cancelbtn {\n  padding: 14px 20px;\n  background-color: #f44336;\n}\n\n/* Float cancel and signup buttons and add an equal width */\n\n.cancelbtn, .signupbtn {\n  float: left;\n  width: 50%;\n}\n\n/* Add padding to container elements */\n\n.container {\n  padding: 10px;\n}\n\n/* The Modal (background) */\n\n.modal {\n  display: none;\n  /* Hidden by default */\n  position: fixed;\n  /* Stay in place */\n  z-index: 1;\n  /* Sit on top */\n  left: 0;\n  top: 0;\n  width: 100%;\n  /* Full width */\n  height: 100%;\n  /* Full height */\n  overflow: auto;\n  /* Enable scroll if needed */\n  background-color: #474e5d;\n  padding-top: 50px;\n}\n\n/* Modal Content/Box */\n\n.modal-content {\n  background-color: #fefefe;\n  margin: 5% auto 15% auto;\n  /* 5% from the top, 15% from the bottom and centered */\n  border: 1px solid #888;\n  width: 80%;\n  /* Could be more or less, depending on screen size */\n}\n\n/* Style the horizontal ruler */\n\nhr {\n  border: 1px solid #f1f1f1;\n  margin-bottom: 25px;\n}\n\n/* The Close Button (x) */\n\n.close {\n  position: absolute;\n  right: 35px;\n  top: 15px;\n  font-size: 40px;\n  font-weight: bold;\n  color: #f1f1f1;\n}\n\n.close:hover,\n.close:focus {\n  color: #f44336;\n  cursor: pointer;\n}\n\n/* Clear floats */\n\n.clearfix::after {\n  content: \"\";\n  clear: both;\n  display: table;\n}\n\n/* Change styles for cancel button and signup button on extra small screens */\n\n@media screen and (max-width: 300px) {\n  .cancelbtn, .signupbtn {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXJlYXMvYmFua2luZy9hZGQtbW9uZXkvRDpcXFByb2plY3RfTWFqb3JcXE1TX2JhbmtpbmdcXEJhbmtBcHBGcm9udGVuZC9zcmNcXGFwcFxcYXJlYXNcXGJhbmtpbmdcXGFkZC1tb25leVxcYWRkLW1vbmV5LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcmVhcy9iYW5raW5nL2FkZC1tb25leS9hZGQtbW9uZXkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBTyxXQUFBO0FDRVA7O0FEQUE7RUFDRSxrQkFBQTtBQ0dGOztBRERBO0VBQ0MsK0NBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDRDQUFBO0VBQ0EsaURBQUE7RUFDQyxvREFBQTtFQUNBLHVCQUFBO0FDSUY7O0FEREE7RUFDRSxZQUFBO0FDSUY7O0FEREE7RUFDQyxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsOENBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0FDSUQ7O0FERkE7Ozs7RUFLQyxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EsMkJBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVDQUFBO0VBQ0EsWUFBQTtFQUFjLFdBQUE7QUNLZjs7QUREQTs7RUFJQyx5Q0FBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsOENBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0FDSUQ7O0FERkE7O0VBRUMsaUdBQUE7RUFBQSxnRUFBQTtFQUNBLHlCQUFBO0FDS0Q7O0FESEE7RUFBTSx5Q0FBQTtBQ09OOztBRE5BO0VBQUcsc0JBQUE7QUNVSDs7QURSQSw0QkFBQTs7QUFDQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ1dGOztBRFJBLHFEQUFBOztBQUNBO0VBQ0Usc0JBQUE7RUFDQSxhQUFBO0FDV0Y7O0FEUkEsZ0NBQUE7O0FBQ0E7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDV0Y7O0FEUkE7RUFDRSxVQUFBO0FDV0Y7O0FEUkEsdUNBQUE7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0FDV0Y7O0FEUkEsMkRBQUE7O0FBQ0E7RUFDRSxXQUFBO0VBQ0EsVUFBQTtBQ1dGOztBRFJBLHNDQUFBOztBQUNBO0VBQ0UsYUFBQTtBQ1dGOztBRFJBLDJCQUFBOztBQUNBO0VBQ0UsYUFBQTtFQUFlLHNCQUFBO0VBQ2YsZUFBQTtFQUFpQixrQkFBQTtFQUNqQixVQUFBO0VBQVksZUFBQTtFQUNaLE9BQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUFhLGVBQUE7RUFDYixZQUFBO0VBQWMsZ0JBQUE7RUFDZCxjQUFBO0VBQWdCLDRCQUFBO0VBQ2hCLHlCQUFBO0VBQ0EsaUJBQUE7QUNpQkY7O0FEZEEsc0JBQUE7O0FBQ0E7RUFDRSx5QkFBQTtFQUNBLHdCQUFBO0VBQTBCLHNEQUFBO0VBQzFCLHNCQUFBO0VBQ0EsVUFBQTtFQUFZLG9EQUFBO0FDbUJkOztBRGhCQSwrQkFBQTs7QUFDQTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7QUNtQkY7O0FEaEJBLHlCQUFBOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNtQkY7O0FEaEJBOztFQUVFLGNBQUE7RUFDQSxlQUFBO0FDbUJGOztBRGhCQSxpQkFBQTs7QUFDQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQ21CRjs7QURoQkEsNkVBQUE7O0FBQ0E7RUFDRTtJQUNHLFdBQUE7RUNtQkg7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FyZWFzL2JhbmtpbmcvYWRkLW1vbmV5L2FkZC1tb25leS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImxhYmVseyBtYXJnaW46MHB4O1xyXG59XHJcbmxlZ2VuZHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmlkMXtcclxuXHRmb250LWZhbWlseTogJ09wZW4gU2FucyBDb25kZW5zZWQnLCBhcmlhbCwgc2FucztcclxuXHR3aWR0aDogNTAwcHg7XHJcblx0cGFkZGluZzogMjBweDtcclxuXHRiYWNrZ3JvdW5kOiBibHVlKCRjb2xvcjogI2ZmMDBmZik7XHJcblx0bWFyZ2luOiAzMHB4IGF1dG87XHJcblx0Ym94LXNoYWRvdzogMHB4IDBweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4yMik7XHJcblx0LW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjIyKTtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6ICAwcHggMHB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjIyKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZVxyXG5cclxufVxyXG4uaWQxIGJ1dHRvbjpob3ZlcntcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5pZDEgaDJ7XHJcblx0YmFja2dyb3VuZDogIzRENEQ0RDtcclxuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cdGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zIENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XHJcblx0Y29sb3I6ICM3OTc5Nzk7XHJcblx0Zm9udC1zaXplOiAxOHB4O1xyXG5cdGZvbnQtd2VpZ2h0OiAxMDA7XHJcblx0cGFkZGluZzogMjBweDtcclxuXHRtYXJnaW46IC0zMHB4IC0zMHB4IDMwcHggLTMwcHg7XHJcbn1cclxuLmlkMSBpbnB1dFt0eXBlPVwidGV4dFwiXSxcclxuLmlkMSBpbnB1dFt0eXBlPVwiZW1haWxcIl0sXHJcbi5pZDEgaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdLFxyXG4uZm9ybS0tOCBzZWxlY3QgXHJcbntcclxuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHQtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0b3V0bGluZTogbm9uZTtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHR3aWR0aDogMTAwJTtcclxuXHRwYWRkaW5nOiA1cHg7XHJcblx0Ym9yZGVyOiBub25lO1xyXG5cdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xyXG5cdGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG5cdG1hcmdpbi1ib3R0b206IDEwcHg7XHJcblx0Zm9udDogMTZweCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG5cdGhlaWdodDogMzBweDsgbWFyZ2luOjBweDtcclxufVxyXG5cclxuXHJcbi5pZDEgaW5wdXRbdHlwZT1cImJ1dHRvblwiXSwgXHJcbi5pZDEgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXXtcclxuXHQtbW96LWJveC1zaGFkb3c6IGluc2V0IDBweCAxcHggMHB4IDBweCAjNDVENkQ2O1xyXG5cdC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMHB4IDFweCAwcHggMHB4ICM0NUQ2RDY7XHJcblx0Ym94LXNoYWRvdzogaW5zZXQgMHB4IDFweCAwcHggMHB4ICM0NUQ2RDY7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzJDQkJCQjtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjMjdBMEEwO1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0Y29sb3I6ICNGRkZGRkY7XHJcblx0Zm9udC1mYW1pbHk6ICdPcGVuIFNhbnMgQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcclxuXHRmb250LXNpemU6IDE0cHg7XHJcblx0cGFkZGluZzogOHB4IDE4cHg7XHJcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuLmlkMSBpbnB1dFt0eXBlPVwiYnV0dG9uXCJdOmhvdmVyLCBcclxuLmlkMSBpbnB1dFt0eXBlPVwic3VibWl0XCJdOmhvdmVyIHtcclxuXHRiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMzNENBQ0EgNSUsICMzMEM5QzkgMTAwJSk7XHJcblx0YmFja2dyb3VuZC1jb2xvcjojMzRDQUNBO1xyXG59XHJcbmJvZHkge2ZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO31cclxuKiB7Ym94LXNpemluZzogYm9yZGVyLWJveDt9XHJcblxyXG4vKiBGdWxsLXdpZHRoIGlucHV0IGZpZWxkcyAqL1xyXG5pbnB1dFt0eXBlPXRleHRdLCBpbnB1dFt0eXBlPXBhc3N3b3JkXSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBtYXJnaW46IDVweCAwIDIwcHggMDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQ6ICNmMWYxZjE7XHJcbn1cclxuXHJcbi8qIEFkZCBhIGJhY2tncm91bmQgY29sb3Igd2hlbiB0aGUgaW5wdXRzIGdldCBmb2N1cyAqL1xyXG5pbnB1dFt0eXBlPXRleHRdOmZvY3VzLCBpbnB1dFt0eXBlPXBhc3N3b3JkXTpmb2N1cyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4vKiBTZXQgYSBzdHlsZSBmb3IgYWxsIGJ1dHRvbnMgKi9cclxuYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiMwNjNiNjE7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDE0cHggMjBweDtcclxuICBtYXJnaW46IDhweCAwO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb3BhY2l0eTogMC45O1xyXG59XHJcblxyXG5idXR0b246aG92ZXIge1xyXG4gIG9wYWNpdHk6MTtcclxufVxyXG5cclxuLyogRXh0cmEgc3R5bGVzIGZvciB0aGUgY2FuY2VsIGJ1dHRvbiAqL1xyXG4uY2FuY2VsYnRuIHtcclxuICBwYWRkaW5nOiAxNHB4IDIwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0NDMzNjtcclxufVxyXG5cclxuLyogRmxvYXQgY2FuY2VsIGFuZCBzaWdudXAgYnV0dG9ucyBhbmQgYWRkIGFuIGVxdWFsIHdpZHRoICovXHJcbi5jYW5jZWxidG4sIC5zaWdudXBidG4ge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbi8qIEFkZCBwYWRkaW5nIHRvIGNvbnRhaW5lciBlbGVtZW50cyAqL1xyXG4uY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4vKiBUaGUgTW9kYWwgKGJhY2tncm91bmQpICovXHJcbi5tb2RhbCB7XHJcbiAgZGlzcGxheTogbm9uZTsgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cclxuICBwb3NpdGlvbjogZml4ZWQ7IC8qIFN0YXkgaW4gcGxhY2UgKi9cclxuICB6LWluZGV4OiAxOyAvKiBTaXQgb24gdG9wICovXHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDA7XHJcbiAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKi9cclxuICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0ICovXHJcbiAgb3ZlcmZsb3c6IGF1dG87IC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ3NGU1ZDtcclxuICBwYWRkaW5nLXRvcDogNTBweDtcclxufVxyXG5cclxuLyogTW9kYWwgQ29udGVudC9Cb3ggKi9cclxuLm1vZGFsLWNvbnRlbnQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XHJcbiAgbWFyZ2luOiA1JSBhdXRvIDE1JSBhdXRvOyAvKiA1JSBmcm9tIHRoZSB0b3AsIDE1JSBmcm9tIHRoZSBib3R0b20gYW5kIGNlbnRlcmVkICovXHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcclxuICB3aWR0aDogODAlOyAvKiBDb3VsZCBiZSBtb3JlIG9yIGxlc3MsIGRlcGVuZGluZyBvbiBzY3JlZW4gc2l6ZSAqL1xyXG59XHJcblxyXG4vKiBTdHlsZSB0aGUgaG9yaXpvbnRhbCBydWxlciAqL1xyXG5ociB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2YxZjFmMTtcclxuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG59XHJcbiBcclxuLyogVGhlIENsb3NlIEJ1dHRvbiAoeCkgKi9cclxuLmNsb3NlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDM1cHg7XHJcbiAgdG9wOiAxNXB4O1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogI2YxZjFmMTtcclxufVxyXG5cclxuLmNsb3NlOmhvdmVyLFxyXG4uY2xvc2U6Zm9jdXMge1xyXG4gIGNvbG9yOiAjZjQ0MzM2O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLyogQ2xlYXIgZmxvYXRzICovXHJcbi5jbGVhcmZpeDo6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgY2xlYXI6IGJvdGg7XHJcbiAgZGlzcGxheTogdGFibGU7XHJcbn1cclxuXHJcbi8qIENoYW5nZSBzdHlsZXMgZm9yIGNhbmNlbCBidXR0b24gYW5kIHNpZ251cCBidXR0b24gb24gZXh0cmEgc21hbGwgc2NyZWVucyAqL1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMDBweCkge1xyXG4gIC5jYW5jZWxidG4sIC5zaWdudXBidG4ge1xyXG4gICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxufSIsImxhYmVsIHtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbmxlZ2VuZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmlkMSB7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2FucyBDb25kZW5zZWRcIiwgYXJpYWwsIHNhbnM7XG4gIHdpZHRoOiA1MDBweDtcbiAgcGFkZGluZzogMjBweDtcbiAgYmFja2dyb3VuZDogMjU1O1xuICBtYXJnaW46IDMwcHggYXV0bztcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4yMik7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4yMik7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4yMik7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4uaWQxIGJ1dHRvbjpob3ZlciB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmlkMSBoMiB7XG4gIGJhY2tncm91bmQ6ICM0RDRENEQ7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2FucyBDb25kZW5zZWRcIiwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICM3OTc5Nzk7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgcGFkZGluZzogMjBweDtcbiAgbWFyZ2luOiAtMzBweCAtMzBweCAzMHB4IC0zMHB4O1xufVxuXG4uaWQxIGlucHV0W3R5cGU9dGV4dF0sXG4uaWQxIGlucHV0W3R5cGU9ZW1haWxdLFxuLmlkMSBpbnB1dFt0eXBlPXBhc3N3b3JkXSxcbi5mb3JtLS04IHNlbGVjdCB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBvdXRsaW5lOiBub25lO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGZvbnQ6IDE2cHggQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgaGVpZ2h0OiAzMHB4O1xuICBtYXJnaW46IDBweDtcbn1cblxuLmlkMSBpbnB1dFt0eXBlPWJ1dHRvbl0sXG4uaWQxIGlucHV0W3R5cGU9c3VibWl0XSB7XG4gIC1tb3otYm94LXNoYWRvdzogaW5zZXQgMHB4IDFweCAwcHggMHB4ICM0NUQ2RDY7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMHB4IDFweCAwcHggMHB4ICM0NUQ2RDY7XG4gIGJveC1zaGFkb3c6IGluc2V0IDBweCAxcHggMHB4IDBweCAjNDVENkQ2O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkNCQkJCO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMjdBMEEwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2FucyBDb25kZW5zZWRcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nOiA4cHggMThweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uaWQxIGlucHV0W3R5cGU9YnV0dG9uXTpob3Zlcixcbi5pZDEgaW5wdXRbdHlwZT1zdWJtaXRdOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzM0Q0FDQSA1JSwgIzMwQzlDOSAxMDAlKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0Q0FDQTtcbn1cblxuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xufVxuXG4qIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLyogRnVsbC13aWR0aCBpbnB1dCBmaWVsZHMgKi9cbmlucHV0W3R5cGU9dGV4dF0sIGlucHV0W3R5cGU9cGFzc3dvcmRdIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbjogNXB4IDAgMjBweCAwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcbn1cblxuLyogQWRkIGEgYmFja2dyb3VuZCBjb2xvciB3aGVuIHRoZSBpbnB1dHMgZ2V0IGZvY3VzICovXG5pbnB1dFt0eXBlPXRleHRdOmZvY3VzLCBpbnB1dFt0eXBlPXBhc3N3b3JkXTpmb2N1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi8qIFNldCBhIHN0eWxlIGZvciBhbGwgYnV0dG9ucyAqL1xuYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA2M2I2MTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxNHB4IDIwcHg7XG4gIG1hcmdpbjogOHB4IDA7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB3aWR0aDogMTAwJTtcbiAgb3BhY2l0eTogMC45O1xufVxuXG5idXR0b246aG92ZXIge1xuICBvcGFjaXR5OiAxO1xufVxuXG4vKiBFeHRyYSBzdHlsZXMgZm9yIHRoZSBjYW5jZWwgYnV0dG9uICovXG4uY2FuY2VsYnRuIHtcbiAgcGFkZGluZzogMTRweCAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ0MzM2O1xufVxuXG4vKiBGbG9hdCBjYW5jZWwgYW5kIHNpZ251cCBidXR0b25zIGFuZCBhZGQgYW4gZXF1YWwgd2lkdGggKi9cbi5jYW5jZWxidG4sIC5zaWdudXBidG4ge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDUwJTtcbn1cblxuLyogQWRkIHBhZGRpbmcgdG8gY29udGFpbmVyIGVsZW1lbnRzICovXG4uY29udGFpbmVyIHtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLyogVGhlIE1vZGFsIChiYWNrZ3JvdW5kKSAqL1xuLm1vZGFsIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cbiAgcG9zaXRpb246IGZpeGVkO1xuICAvKiBTdGF5IGluIHBsYWNlICovXG4gIHotaW5kZXg6IDE7XG4gIC8qIFNpdCBvbiB0b3AgKi9cbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgLyogRnVsbCB3aWR0aCAqL1xuICBoZWlnaHQ6IDEwMCU7XG4gIC8qIEZ1bGwgaGVpZ2h0ICovXG4gIG92ZXJmbG93OiBhdXRvO1xuICAvKiBFbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDc0ZTVkO1xuICBwYWRkaW5nLXRvcDogNTBweDtcbn1cblxuLyogTW9kYWwgQ29udGVudC9Cb3ggKi9cbi5tb2RhbC1jb250ZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcbiAgbWFyZ2luOiA1JSBhdXRvIDE1JSBhdXRvO1xuICAvKiA1JSBmcm9tIHRoZSB0b3AsIDE1JSBmcm9tIHRoZSBib3R0b20gYW5kIGNlbnRlcmVkICovXG4gIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XG4gIHdpZHRoOiA4MCU7XG4gIC8qIENvdWxkIGJlIG1vcmUgb3IgbGVzcywgZGVwZW5kaW5nIG9uIHNjcmVlbiBzaXplICovXG59XG5cbi8qIFN0eWxlIHRoZSBob3Jpem9udGFsIHJ1bGVyICovXG5ociB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmMWYxZjE7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG5cbi8qIFRoZSBDbG9zZSBCdXR0b24gKHgpICovXG4uY2xvc2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAzNXB4O1xuICB0b3A6IDE1cHg7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjZjFmMWYxO1xufVxuXG4uY2xvc2U6aG92ZXIsXG4uY2xvc2U6Zm9jdXMge1xuICBjb2xvcjogI2Y0NDMzNjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4vKiBDbGVhciBmbG9hdHMgKi9cbi5jbGVhcmZpeDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBjbGVhcjogYm90aDtcbiAgZGlzcGxheTogdGFibGU7XG59XG5cbi8qIENoYW5nZSBzdHlsZXMgZm9yIGNhbmNlbCBidXR0b24gYW5kIHNpZ251cCBidXR0b24gb24gZXh0cmEgc21hbGwgc2NyZWVucyAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzAwcHgpIHtcbiAgLmNhbmNlbGJ0biwgLnNpZ251cGJ0biB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/areas/banking/add-money/add-money.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/areas/banking/add-money/add-money.component.ts ***!
  \****************************************************************/
/*! exports provided: AddMoneyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMoneyComponent", function() { return AddMoneyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_banking_banking_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/banking/banking.service */ "./src/app/services/banking/banking.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _services_logout_logout_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/logout/logout.service */ "./src/app/services/logout/logout.service.ts");






//import logout from '../../../model/banking/logout'

let AddMoneyComponent = class AddMoneyComponent {
    constructor(fb, router, bankservice, toaster, logoutService) {
        this.fb = fb;
        this.router = router;
        this.bankservice = bankservice;
        this.toaster = toaster;
        this.logoutService = logoutService;
        this.submitted = false;
        this.formdata = {};
        this.formdata1 = {};
    }
    ngOnInit() {
        debugger;
        this.formdata1.AccountId = parseInt(localStorage.getItem("accountid"));
        this.formdata.AccountId = parseInt(localStorage.getItem("accountid"));
        this.bankservice.detail(this.formdata1.AccountId).subscribe(data => {
            if (data != null) {
                this.formdata1 = data;
            }
        }, err => {
            if (err.status == 400) {
                this.logoutService.logout();
            }
        });
        this.addbalanceform = this.fb.group({
            addbalance: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            pin: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    get f() { return this.addbalanceform.controls; }
    Continue() {
        this.submitted = true;
        if (this.addbalanceform.valid == true) {
            this.formdata.Addbalance = this.addbalanceform.value.addbalance;
            this.formdata.PIN = this.addbalanceform.value.pin;
            this.bankservice.addMoney(this.formdata).subscribe(data => {
                if (data == 1) {
                    this.toaster.success("Balance is added to your account");
                    this.addbalanceform = this.fb.group({
                        addbalance: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                        pin: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
                    });
                    this.formdata1.AccountId = parseInt(localStorage.getItem("accountid"));
                    this.bankservice.detail(this.formdata1.AccountId).subscribe(data => {
                        if (data == 1) {
                            this.formdata1 = data;
                        }
                    });
                }
                else if (data == 'Error') {
                    this.toaster.error("transaction has failed");
                }
                else {
                    this.toaster.error(' check your PIN', 'invalid PIN');
                    this.addbalanceform = this.fb.group({
                        addbalance: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                        pin: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
                    });
                }
            }, err => {
                console.log(err);
            });
        }
        this.addbalanceform.invalid;
        return;
    }
};
AddMoneyComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_services_banking_banking_service__WEBPACK_IMPORTED_MODULE_4__["BankingService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
    { type: _services_logout_logout_service__WEBPACK_IMPORTED_MODULE_6__["LogoutService"] }
];
AddMoneyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-money',
        template: __webpack_require__(/*! raw-loader!./add-money.component.html */ "./node_modules/raw-loader/index.js!./src/app/areas/banking/add-money/add-money.component.html"),
        styles: [__webpack_require__(/*! ./add-money.component.scss */ "./src/app/areas/banking/add-money/add-money.component.scss")]
    })
], AddMoneyComponent);



/***/ }),

/***/ "./src/app/areas/banking/change-password/change-password.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/areas/banking/change-password/change-password.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label {\n  margin: 0px;\n}\n\n.id1 {\n  font-family: \"Open Sans Condensed\", arial, sans;\n  width: 500px;\n  padding: 20px;\n  background: 255;\n  margin: 80px auto;\n  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.22);\n  -moz-box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.22);\n  -webkit-box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.22);\n  background: white;\n}\n\n.form-control::-webkit-input-placeholder {\n  /* Edge */\n  font-size: 12px;\n}\n\n.form-control::-moz-placeholder {\n  font-size: 12px;\n}\n\n.form-control::-ms-input-placeholder {\n  font-size: 12px;\n}\n\n.form-control::placeholder {\n  font-size: 12px;\n}\n\n.id1 button:hover {\n  color: white;\n}\n\n.id1 h2 {\n  background: #4D4D4D;\n  text-transform: uppercase;\n  font-family: \"Open Sans Condensed\", sans-serif;\n  color: #797979;\n  font-size: 18px;\n  font-weight: 100;\n  padding: 20px;\n  margin: -30px -30px 30px -30px;\n}\n\n.id1 input[type=text],\n.id1 input[type=email],\n.id1 input[type=password],\n.form--8 select {\n  box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  outline: none;\n  display: block;\n  width: 100%;\n  padding: 5px;\n  border: none;\n  border-bottom: 1px solid #ddd;\n  background: transparent;\n  margin-bottom: 10px;\n  font: 16px Arial, Helvetica, sans-serif;\n  height: 30px;\n  margin: 0px;\n}\n\n.id1 input[type=button],\n.id1 input[type=submit] {\n  box-shadow: inset 0px 1px 0px 0px #45D6D6;\n  background-color: #2CBBBB;\n  border: 1px solid #27A0A0;\n  display: inline-block;\n  cursor: pointer;\n  color: #FFFFFF;\n  font-family: \"Open Sans Condensed\", sans-serif;\n  font-size: 14px;\n  padding: 8px 18px;\n  text-decoration: none;\n  text-transform: uppercase;\n}\n\n.id1 input[type=button]:hover,\n.id1 input[type=submit]:hover {\n  background: -webkit-gradient(linear, left top, left bottom, color-stop(5%, #34CACA), to(#30C9C9));\n  background: linear-gradient(to bottom, #34CACA 5%, #30C9C9 100%);\n  background-color: #34CACA;\n}\n\nbody {\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n* {\n  box-sizing: border-box;\n}\n\n/* Full-width input fields */\n\ninput[type=text], input[type=password] {\n  width: 100%;\n  padding: 10px;\n  margin: 5px 0 20px 0;\n  display: inline-block;\n  border: none;\n  background: #f1f1f1;\n}\n\n/* Add a background color when the inputs get focus */\n\ninput[type=text]:focus, input[type=password]:focus {\n  background-color: #ddd;\n  outline: none;\n}\n\n/* Set a style for all buttons */\n\nbutton {\n  background-color: #063b61;\n  color: white;\n  padding: 14px 20px;\n  margin: 8px 0;\n  border: none;\n  cursor: pointer;\n  width: 100%;\n  opacity: 0.9;\n}\n\nbutton:hover {\n  opacity: 1;\n}\n\n/* Extra styles for the cancel button */\n\n.cancelbtn {\n  padding: 14px 20px;\n  background-color: #f44336;\n}\n\n/* Float cancel and signup buttons and add an equal width */\n\n.cancelbtn, .signupbtn {\n  float: left;\n  width: 50%;\n}\n\n/* Add padding to container elements */\n\n.container {\n  padding: 10px;\n}\n\n/* The Modal (background) */\n\n.modal {\n  display: none;\n  /* Hidden by default */\n  position: fixed;\n  /* Stay in place */\n  z-index: 1;\n  /* Sit on top */\n  left: 0;\n  top: 0;\n  width: 100%;\n  /* Full width */\n  height: 100%;\n  /* Full height */\n  overflow: auto;\n  /* Enable scroll if needed */\n  background-color: #474e5d;\n  padding-top: 50px;\n}\n\n/* Modal Content/Box */\n\n.modal-content {\n  background-color: #fefefe;\n  margin: 5% auto 15% auto;\n  /* 5% from the top, 15% from the bottom and centered */\n  border: 1px solid #888;\n  width: 80%;\n  /* Could be more or less, depending on screen size */\n}\n\n/* Style the horizontal ruler */\n\nhr {\n  border: 1px solid #f1f1f1;\n  margin-bottom: 25px;\n}\n\n/* The Close Button (x) */\n\n.close {\n  position: absolute;\n  right: 35px;\n  top: 15px;\n  font-size: 40px;\n  font-weight: bold;\n  color: #f1f1f1;\n}\n\n.close:hover,\n.close:focus {\n  color: #f44336;\n  cursor: pointer;\n}\n\n/* Clear floats */\n\n.clearfix::after {\n  content: \"\";\n  clear: both;\n  display: table;\n}\n\n/* Change styles for cancel button and signup button on extra small screens */\n\n@media screen and (max-width: 300px) {\n  .cancelbtn, .signupbtn {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXJlYXMvYmFua2luZy9jaGFuZ2UtcGFzc3dvcmQvRDpcXFByb2plY3RfTWFqb3JcXE1TX2JhbmtpbmdcXEJhbmtBcHBGcm9udGVuZC9zcmNcXGFwcFxcYXJlYXNcXGJhbmtpbmdcXGNoYW5nZS1wYXNzd29yZFxcY2hhbmdlLXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcmVhcy9iYW5raW5nL2NoYW5nZS1wYXNzd29yZC9jaGFuZ2UtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBTyxXQUFBO0FDRVA7O0FEREE7RUFDQywrQ0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsNENBQUE7RUFDQSxpREFBQTtFQUNHLG9EQUFBO0VBQ0EsaUJBQUE7QUNJSjs7QUREQTtFQUEyQyxTQUFBO0VBQ3pDLGVBQUE7QUNLRjs7QURFQTtFQUNFLGVBQUE7QUNNRjs7QURQQTtFQUNFLGVBQUE7QUNNRjs7QURQQTtFQUNFLGVBQUE7QUNNRjs7QUREQTtFQUNFLFlBQUE7QUNJRjs7QURGQTtFQUNDLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSw4Q0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7QUNLRDs7QURIQTs7OztFQUtDLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSwyQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUNBQUE7RUFDQSxZQUFBO0VBQWMsV0FBQTtBQ01mOztBREZBOztFQUlDLHlDQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSw4Q0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7QUNLRDs7QURIQTs7RUFFQyxpR0FBQTtFQUFBLGdFQUFBO0VBQ0EseUJBQUE7QUNNRDs7QURKQTtFQUFNLHlDQUFBO0FDUU47O0FEUEE7RUFBRyxzQkFBQTtBQ1dIOztBRFRBLDRCQUFBOztBQUNBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDWUY7O0FEVEEscURBQUE7O0FBQ0E7RUFDRSxzQkFBQTtFQUNBLGFBQUE7QUNZRjs7QURUQSxnQ0FBQTs7QUFDQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNZRjs7QURUQTtFQUNFLFVBQUE7QUNZRjs7QURUQSx1Q0FBQTs7QUFDQTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7QUNZRjs7QURUQSwyREFBQTs7QUFDQTtFQUNFLFdBQUE7RUFDQSxVQUFBO0FDWUY7O0FEVEEsc0NBQUE7O0FBQ0E7RUFDRSxhQUFBO0FDWUY7O0FEVEEsMkJBQUE7O0FBQ0E7RUFDRSxhQUFBO0VBQWUsc0JBQUE7RUFDZixlQUFBO0VBQWlCLGtCQUFBO0VBQ2pCLFVBQUE7RUFBWSxlQUFBO0VBQ1osT0FBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQWEsZUFBQTtFQUNiLFlBQUE7RUFBYyxnQkFBQTtFQUNkLGNBQUE7RUFBZ0IsNEJBQUE7RUFDaEIseUJBQUE7RUFDQSxpQkFBQTtBQ2tCRjs7QURmQSxzQkFBQTs7QUFDQTtFQUNFLHlCQUFBO0VBQ0Esd0JBQUE7RUFBMEIsc0RBQUE7RUFDMUIsc0JBQUE7RUFDQSxVQUFBO0VBQVksb0RBQUE7QUNvQmQ7O0FEakJBLCtCQUFBOztBQUNBO0VBQ0UseUJBQUE7RUFDQSxtQkFBQTtBQ29CRjs7QURqQkEseUJBQUE7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ29CRjs7QURqQkE7O0VBRUUsY0FBQTtFQUNBLGVBQUE7QUNvQkY7O0FEakJBLGlCQUFBOztBQUNBO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FDb0JGOztBRGpCQSw2RUFBQTs7QUFDQTtFQUNFO0lBQ0csV0FBQTtFQ29CSDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXJlYXMvYmFua2luZy9jaGFuZ2UtcGFzc3dvcmQvY2hhbmdlLXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibGFiZWx7IG1hcmdpbjowcHg7fVxyXG4uaWQxe1xyXG5cdGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zIENvbmRlbnNlZCcsIGFyaWFsLCBzYW5zO1xyXG5cdHdpZHRoOiA1MDBweDtcclxuXHRwYWRkaW5nOiAyMHB4O1xyXG5cdGJhY2tncm91bmQ6IGJsdWUoJGNvbG9yOiAjZmYwMGZmKTtcclxuXHRtYXJnaW46IDgwcHggYXV0bztcclxuXHRib3gtc2hhZG93OiAwcHggMHB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjIyKTtcclxuXHQtbW96LWJveC1zaGFkb3c6IDBweCAwcHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMjIpO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAgMHB4IDBweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4yMik7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZVxyXG59XHJcblxyXG4uZm9ybS1jb250cm9sOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHsgLyogRWRnZSAqL1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLmZvcm0tY29udHJvbDotbXMtaW5wdXQtcGxhY2Vob2xkZXIgeyAvKiBJbnRlcm5ldCBFeHBsb3JlciAxMC0xMSAqL1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLmZvcm0tY29udHJvbDo6cGxhY2Vob2xkZXIge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuXHJcblxyXG4uaWQxIGJ1dHRvbjpob3ZlcntcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLmlkMSBoMntcclxuXHRiYWNrZ3JvdW5kOiAjNEQ0RDREO1xyXG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblx0Zm9udC1mYW1pbHk6ICdPcGVuIFNhbnMgQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcclxuXHRjb2xvcjogIzc5Nzk3OTtcclxuXHRmb250LXNpemU6IDE4cHg7XHJcblx0Zm9udC13ZWlnaHQ6IDEwMDtcclxuXHRwYWRkaW5nOiAyMHB4O1xyXG5cdG1hcmdpbjogLTMwcHggLTMwcHggMzBweCAtMzBweDtcclxufVxyXG4uaWQxIGlucHV0W3R5cGU9XCJ0ZXh0XCJdLFxyXG4uaWQxIGlucHV0W3R5cGU9XCJlbWFpbFwiXSxcclxuLmlkMSBpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0sXHJcbi5mb3JtLS04IHNlbGVjdCBcclxue1xyXG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0LXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRvdXRsaW5lOiBub25lO1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdHBhZGRpbmc6IDVweDtcclxuXHRib3JkZXI6IG5vbmU7XHJcblx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XHJcblx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcblx0bWFyZ2luLWJvdHRvbTogMTBweDtcclxuXHRmb250OiAxNnB4IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcblx0aGVpZ2h0OiAzMHB4OyBtYXJnaW46MHB4O1xyXG59XHJcblxyXG5cclxuLmlkMSBpbnB1dFt0eXBlPVwiYnV0dG9uXCJdLCBcclxuLmlkMSBpbnB1dFt0eXBlPVwic3VibWl0XCJde1xyXG5cdC1tb3otYm94LXNoYWRvdzogaW5zZXQgMHB4IDFweCAwcHggMHB4ICM0NUQ2RDY7XHJcblx0LXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwcHggMXB4IDBweCAwcHggIzQ1RDZENjtcclxuXHRib3gtc2hhZG93OiBpbnNldCAwcHggMXB4IDBweCAwcHggIzQ1RDZENjtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMkNCQkJCO1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICMyN0EwQTA7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuXHRjb2xvcjogI0ZGRkZGRjtcclxuXHRmb250LWZhbWlseTogJ09wZW4gU2FucyBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xyXG5cdGZvbnQtc2l6ZTogMTRweDtcclxuXHRwYWRkaW5nOiA4cHggMThweDtcclxuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG4uaWQxIGlucHV0W3R5cGU9XCJidXR0b25cIl06aG92ZXIsIFxyXG4uaWQxIGlucHV0W3R5cGU9XCJzdWJtaXRcIl06aG92ZXIge1xyXG5cdGJhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzM0Q0FDQSA1JSwgIzMwQzlDOSAxMDAlKTtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiMzNENBQ0E7XHJcbn1cclxuYm9keSB7Zm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7fVxyXG4qIHtib3gtc2l6aW5nOiBib3JkZXItYm94O31cclxuXHJcbi8qIEZ1bGwtd2lkdGggaW5wdXQgZmllbGRzICovXHJcbmlucHV0W3R5cGU9dGV4dF0sIGlucHV0W3R5cGU9cGFzc3dvcmRdIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIG1hcmdpbjogNXB4IDAgMjBweCAwO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcclxufVxyXG5cclxuLyogQWRkIGEgYmFja2dyb3VuZCBjb2xvciB3aGVuIHRoZSBpbnB1dHMgZ2V0IGZvY3VzICovXHJcbmlucHV0W3R5cGU9dGV4dF06Zm9jdXMsIGlucHV0W3R5cGU9cGFzc3dvcmRdOmZvY3VzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi8qIFNldCBhIHN0eWxlIGZvciBhbGwgYnV0dG9ucyAqL1xyXG5idXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IzA2M2I2MTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMTRweCAyMHB4O1xyXG4gIG1hcmdpbjogOHB4IDA7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBvcGFjaXR5OiAwLjk7XHJcbn1cclxuXHJcbmJ1dHRvbjpob3ZlciB7XHJcbiAgb3BhY2l0eToxO1xyXG59XHJcblxyXG4vKiBFeHRyYSBzdHlsZXMgZm9yIHRoZSBjYW5jZWwgYnV0dG9uICovXHJcbi5jYW5jZWxidG4ge1xyXG4gIHBhZGRpbmc6IDE0cHggMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ0MzM2O1xyXG59XHJcblxyXG4vKiBGbG9hdCBjYW5jZWwgYW5kIHNpZ251cCBidXR0b25zIGFuZCBhZGQgYW4gZXF1YWwgd2lkdGggKi9cclxuLmNhbmNlbGJ0biwgLnNpZ251cGJ0biB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgd2lkdGg6IDUwJTtcclxufVxyXG5cclxuLyogQWRkIHBhZGRpbmcgdG8gY29udGFpbmVyIGVsZW1lbnRzICovXHJcbi5jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi8qIFRoZSBNb2RhbCAoYmFja2dyb3VuZCkgKi9cclxuLm1vZGFsIHtcclxuICBkaXNwbGF5OiBub25lOyAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xyXG4gIHBvc2l0aW9uOiBmaXhlZDsgLyogU3RheSBpbiBwbGFjZSAqL1xyXG4gIHotaW5kZXg6IDE7IC8qIFNpdCBvbiB0b3AgKi9cclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogMDtcclxuICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAqL1xyXG4gIGhlaWdodDogMTAwJTsgLyogRnVsbCBoZWlnaHQgKi9cclxuICBvdmVyZmxvdzogYXV0bzsgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDc0ZTVkO1xyXG4gIHBhZGRpbmctdG9wOiA1MHB4O1xyXG59XHJcblxyXG4vKiBNb2RhbCBDb250ZW50L0JveCAqL1xyXG4ubW9kYWwtY29udGVudCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcclxuICBtYXJnaW46IDUlIGF1dG8gMTUlIGF1dG87IC8qIDUlIGZyb20gdGhlIHRvcCwgMTUlIGZyb20gdGhlIGJvdHRvbSBhbmQgY2VudGVyZWQgKi9cclxuICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xyXG4gIHdpZHRoOiA4MCU7IC8qIENvdWxkIGJlIG1vcmUgb3IgbGVzcywgZGVwZW5kaW5nIG9uIHNjcmVlbiBzaXplICovXHJcbn1cclxuXHJcbi8qIFN0eWxlIHRoZSBob3Jpem9udGFsIHJ1bGVyICovXHJcbmhyIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZjFmMWYxO1xyXG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbn1cclxuIFxyXG4vKiBUaGUgQ2xvc2UgQnV0dG9uICh4KSAqL1xyXG4uY2xvc2Uge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMzVweDtcclxuICB0b3A6IDE1cHg7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiAjZjFmMWYxO1xyXG59XHJcblxyXG4uY2xvc2U6aG92ZXIsXHJcbi5jbG9zZTpmb2N1cyB7XHJcbiAgY29sb3I6ICNmNDQzMzY7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4vKiBDbGVhciBmbG9hdHMgKi9cclxuLmNsZWFyZml4OjphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBjbGVhcjogYm90aDtcclxuICBkaXNwbGF5OiB0YWJsZTtcclxufVxyXG5cclxuLyogQ2hhbmdlIHN0eWxlcyBmb3IgY2FuY2VsIGJ1dHRvbiBhbmQgc2lnbnVwIGJ1dHRvbiBvbiBleHRyYSBzbWFsbCBzY3JlZW5zICovXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMwMHB4KSB7XHJcbiAgLmNhbmNlbGJ0biwgLnNpZ251cGJ0biB7XHJcbiAgICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59IiwibGFiZWwge1xuICBtYXJnaW46IDBweDtcbn1cblxuLmlkMSB7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2FucyBDb25kZW5zZWRcIiwgYXJpYWwsIHNhbnM7XG4gIHdpZHRoOiA1MDBweDtcbiAgcGFkZGluZzogMjBweDtcbiAgYmFja2dyb3VuZDogMjU1O1xuICBtYXJnaW46IDgwcHggYXV0bztcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4yMik7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4yMik7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4yMik7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG4uZm9ybS1jb250cm9sOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgLyogRWRnZSAqL1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5mb3JtLWNvbnRyb2w6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgLyogSW50ZXJuZXQgRXhwbG9yZXIgMTAtMTEgKi9cbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uZm9ybS1jb250cm9sOjpwbGFjZWhvbGRlciB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmlkMSBidXR0b246aG92ZXIge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5pZDEgaDIge1xuICBiYWNrZ3JvdW5kOiAjNEQ0RDREO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnMgQ29uZGVuc2VkXCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjNzk3OTc5O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIG1hcmdpbjogLTMwcHggLTMwcHggMzBweCAtMzBweDtcbn1cblxuLmlkMSBpbnB1dFt0eXBlPXRleHRdLFxuLmlkMSBpbnB1dFt0eXBlPWVtYWlsXSxcbi5pZDEgaW5wdXRbdHlwZT1wYXNzd29yZF0sXG4uZm9ybS0tOCBzZWxlY3Qge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgb3V0bGluZTogbm9uZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBmb250OiAxNnB4IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGhlaWdodDogMzBweDtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbi5pZDEgaW5wdXRbdHlwZT1idXR0b25dLFxuLmlkMSBpbnB1dFt0eXBlPXN1Ym1pdF0ge1xuICAtbW96LWJveC1zaGFkb3c6IGluc2V0IDBweCAxcHggMHB4IDBweCAjNDVENkQ2O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDBweCAxcHggMHB4IDBweCAjNDVENkQ2O1xuICBib3gtc2hhZG93OiBpbnNldCAwcHggMXB4IDBweCAwcHggIzQ1RDZENjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJDQkJCQjtcbiAgYm9yZGVyOiAxcHggc29saWQgIzI3QTBBMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnMgQ29uZGVuc2VkXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZzogOHB4IDE4cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmlkMSBpbnB1dFt0eXBlPWJ1dHRvbl06aG92ZXIsXG4uaWQxIGlucHV0W3R5cGU9c3VibWl0XTpob3ZlciB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMzNENBQ0EgNSUsICMzMEM5QzkgMTAwJSk7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNENBQ0E7XG59XG5cbmJvZHkge1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbn1cblxuKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi8qIEZ1bGwtd2lkdGggaW5wdXQgZmllbGRzICovXG5pbnB1dFt0eXBlPXRleHRdLCBpbnB1dFt0eXBlPXBhc3N3b3JkXSB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW46IDVweCAwIDIwcHggMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6ICNmMWYxZjE7XG59XG5cbi8qIEFkZCBhIGJhY2tncm91bmQgY29sb3Igd2hlbiB0aGUgaW5wdXRzIGdldCBmb2N1cyAqL1xuaW5wdXRbdHlwZT10ZXh0XTpmb2N1cywgaW5wdXRbdHlwZT1wYXNzd29yZF06Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4vKiBTZXQgYSBzdHlsZSBmb3IgYWxsIGJ1dHRvbnMgKi9cbmJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNjNiNjE7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMTRweCAyMHB4O1xuICBtYXJnaW46IDhweCAwO1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIG9wYWNpdHk6IDAuOTtcbn1cblxuYnV0dG9uOmhvdmVyIHtcbiAgb3BhY2l0eTogMTtcbn1cblxuLyogRXh0cmEgc3R5bGVzIGZvciB0aGUgY2FuY2VsIGJ1dHRvbiAqL1xuLmNhbmNlbGJ0biB7XG4gIHBhZGRpbmc6IDE0cHggMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0NDMzNjtcbn1cblxuLyogRmxvYXQgY2FuY2VsIGFuZCBzaWdudXAgYnV0dG9ucyBhbmQgYWRkIGFuIGVxdWFsIHdpZHRoICovXG4uY2FuY2VsYnRuLCAuc2lnbnVwYnRuIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiA1MCU7XG59XG5cbi8qIEFkZCBwYWRkaW5nIHRvIGNvbnRhaW5lciBlbGVtZW50cyAqL1xuLmNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi8qIFRoZSBNb2RhbCAoYmFja2dyb3VuZCkgKi9cbi5tb2RhbCB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgLyogU3RheSBpbiBwbGFjZSAqL1xuICB6LWluZGV4OiAxO1xuICAvKiBTaXQgb24gdG9wICovXG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIC8qIEZ1bGwgd2lkdGggKi9cbiAgaGVpZ2h0OiAxMDAlO1xuICAvKiBGdWxsIGhlaWdodCAqL1xuICBvdmVyZmxvdzogYXV0bztcbiAgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ3NGU1ZDtcbiAgcGFkZGluZy10b3A6IDUwcHg7XG59XG5cbi8qIE1vZGFsIENvbnRlbnQvQm94ICovXG4ubW9kYWwtY29udGVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XG4gIG1hcmdpbjogNSUgYXV0byAxNSUgYXV0bztcbiAgLyogNSUgZnJvbSB0aGUgdG9wLCAxNSUgZnJvbSB0aGUgYm90dG9tIGFuZCBjZW50ZXJlZCAqL1xuICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xuICB3aWR0aDogODAlO1xuICAvKiBDb3VsZCBiZSBtb3JlIG9yIGxlc3MsIGRlcGVuZGluZyBvbiBzY3JlZW4gc2l6ZSAqL1xufVxuXG4vKiBTdHlsZSB0aGUgaG9yaXpvbnRhbCBydWxlciAqL1xuaHIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZjFmMWYxO1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuXG4vKiBUaGUgQ2xvc2UgQnV0dG9uICh4KSAqL1xuLmNsb3NlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMzVweDtcbiAgdG9wOiAxNXB4O1xuICBmb250LXNpemU6IDQwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogI2YxZjFmMTtcbn1cblxuLmNsb3NlOmhvdmVyLFxuLmNsb3NlOmZvY3VzIHtcbiAgY29sb3I6ICNmNDQzMzY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLyogQ2xlYXIgZmxvYXRzICovXG4uY2xlYXJmaXg6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgY2xlYXI6IGJvdGg7XG4gIGRpc3BsYXk6IHRhYmxlO1xufVxuXG4vKiBDaGFuZ2Ugc3R5bGVzIGZvciBjYW5jZWwgYnV0dG9uIGFuZCBzaWdudXAgYnV0dG9uIG9uIGV4dHJhIHNtYWxsIHNjcmVlbnMgKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMwMHB4KSB7XG4gIC5jYW5jZWxidG4sIC5zaWdudXBidG4ge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/areas/banking/change-password/change-password.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/areas/banking/change-password/change-password.component.ts ***!
  \****************************************************************************/
/*! exports provided: ChangePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function() { return ChangePasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_banking_banking_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/banking/banking.service */ "./src/app/services/banking/banking.service.ts");
/* harmony import */ var src_app_shared_directives_password_must_match_must_match_validator_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/_directives/password_must_match/must-match.validator.module */ "./src/app/shared/_directives/password_must_match/must-match.validator.module.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");







let ChangePasswordComponent = class ChangePasswordComponent {
    constructor(fb, router, bankservice, route, toaster) {
        this.fb = fb;
        this.router = router;
        this.bankservice = bankservice;
        this.route = route;
        this.toaster = toaster;
        this.formdata = {};
        this.submitted = false;
    }
    ngOnInit() {
        debugger;
        this.formdata.AccountId = parseInt(localStorage.getItem('accountid'));
        this.changepasswordform = this.fb.group({
            pin: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(4)]],
            newpin: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4)]],
            cpin: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        }, {
            validator: Object(src_app_shared_directives_password_must_match_must_match_validator_module__WEBPACK_IMPORTED_MODULE_5__["MustMatch"])('newpin', 'cpin')
        });
    }
    get f() { return this.changepasswordform.controls; }
    resetpassword() {
        debugger;
        this.submitted = true;
        if (this.changepasswordform.valid == true) {
            this.formdata.NewPIN = this.changepasswordform.value.newpin;
            this.formdata.PIN = this.changepasswordform.value.pin;
            this.formdata.Cpin = this.changepasswordform.value.cpin;
            this.bankservice.changepass(this.formdata).subscribe(data => {
                this.formdata = data;
                if (this.formdata.Id >= 1) {
                    this.toaster.success("your password has successfully changed");
                    this.validation();
                }
                else {
                    this.toaster.error('Can not changed your password ,something went wrong', 'please verify your email again');
                    this.validation();
                }
            }, err => {
                this.toaster.error("Please enter correct PIN", 'PIN is invalid');
                this.validation();
            });
        }
        this.changepasswordform.invalid;
        return;
    }
    validation() {
        this.formdata.AccountId = parseInt(localStorage.getItem('accountid'));
        this.changepasswordform = this.fb.group({
            pin: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(4)]],
            newpin: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4)]],
            cpin: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        }, {
            validator: Object(src_app_shared_directives_password_must_match_must_match_validator_module__WEBPACK_IMPORTED_MODULE_5__["MustMatch"])('newpin', 'cpin')
        });
    }
};
ChangePasswordComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_banking_banking_service__WEBPACK_IMPORTED_MODULE_4__["BankingService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] }
];
ChangePasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-change-password',
        template: __webpack_require__(/*! raw-loader!./change-password.component.html */ "./node_modules/raw-loader/index.js!./src/app/areas/banking/change-password/change-password.component.html"),
        styles: [__webpack_require__(/*! ./change-password.component.scss */ "./src/app/areas/banking/change-password/change-password.component.scss")]
    })
], ChangePasswordComponent);



/***/ }),

/***/ "./src/app/areas/banking/check-balance/check-balance.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/areas/banking/check-balance/check-balance.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label {\n  margin: 0px;\n}\n\nlegend {\n  text-align: center;\n}\n\n.id1 {\n  font-family: \"Open Sans Condensed\", arial, sans;\n  width: 500px;\n  padding: 20px;\n  background: 255;\n  margin: 30px auto;\n  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.22);\n  -moz-box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.22);\n  -webkit-box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.22);\n  background-color: white;\n}\n\n.id1 h2 {\n  background: #4D4D4D;\n  text-transform: uppercase;\n  font-family: \"Open Sans Condensed\", sans-serif;\n  color: #797979;\n  font-size: 18px;\n  font-weight: 100;\n  padding: 20px;\n  margin: -30px -30px 30px -30px;\n}\n\n.id1 input[type=text],\n.id1 input[type=email],\n.id1 input[type=password],\n.form--8 select {\n  box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  outline: none;\n  display: block;\n  width: 100%;\n  padding: 5px;\n  border: none;\n  border-bottom: 1px solid #ddd;\n  background: transparent;\n  margin-bottom: 10px;\n  font: 16px Arial, Helvetica, sans-serif;\n  height: 30px;\n  margin: 0px;\n}\n\n.id1 input[type=button],\n.id1 input[type=submit] {\n  box-shadow: inset 0px 1px 0px 0px #45D6D6;\n  background-color: #2CBBBB;\n  border: 1px solid #27A0A0;\n  display: inline-block;\n  cursor: pointer;\n  color: #FFFFFF;\n  font-family: \"Open Sans Condensed\", sans-serif;\n  font-size: 14px;\n  padding: 8px 18px;\n  text-decoration: none;\n  text-transform: uppercase;\n}\n\n.id1 input[type=button]:hover,\n.id1 input[type=submit]:hover {\n  background: -webkit-gradient(linear, left top, left bottom, color-stop(5%, #34CACA), to(#30C9C9));\n  background: linear-gradient(to bottom, #34CACA 5%, #30C9C9 100%);\n  background-color: #34CACA;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXJlYXMvYmFua2luZy9jaGVjay1iYWxhbmNlL0Q6XFxQcm9qZWN0X01ham9yXFxNU19iYW5raW5nXFxCYW5rQXBwRnJvbnRlbmQvc3JjXFxhcHBcXGFyZWFzXFxiYW5raW5nXFxjaGVjay1iYWxhbmNlXFxjaGVjay1iYWxhbmNlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcmVhcy9iYW5raW5nL2NoZWNrLWJhbGFuY2UvY2hlY2stYmFsYW5jZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFPLFdBQUE7QUNFUDs7QURBQTtFQUNFLGtCQUFBO0FDR0Y7O0FEREE7RUFDQywrQ0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsNENBQUE7RUFDQSxpREFBQTtFQUNDLG9EQUFBO0VBQ0EsdUJBQUE7QUNJRjs7QUREQTtFQUNDLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSw4Q0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7QUNJRDs7QURGQTs7OztFQUtDLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSwyQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUNBQUE7RUFDQSxZQUFBO0VBQWMsV0FBQTtBQ0tmOztBRERBOztFQUlDLHlDQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSw4Q0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7QUNJRDs7QURGQTs7RUFFQyxpR0FBQTtFQUFBLGdFQUFBO0VBQ0EseUJBQUE7QUNLRCIsImZpbGUiOiJzcmMvYXBwL2FyZWFzL2JhbmtpbmcvY2hlY2stYmFsYW5jZS9jaGVjay1iYWxhbmNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibGFiZWx7IG1hcmdpbjowcHg7XHJcbn1cclxubGVnZW5ke1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uaWQxe1xyXG5cdGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zIENvbmRlbnNlZCcsIGFyaWFsLCBzYW5zO1xyXG5cdHdpZHRoOiA1MDBweDtcclxuXHRwYWRkaW5nOiAyMHB4O1xyXG5cdGJhY2tncm91bmQ6IGJsdWUoJGNvbG9yOiAjZmYwMGZmKTtcclxuXHRtYXJnaW46IDMwcHggYXV0bztcclxuXHRib3gtc2hhZG93OiAwcHggMHB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjIyKTtcclxuXHQtbW96LWJveC1zaGFkb3c6IDBweCAwcHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMjIpO1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogIDBweCAwcHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMjIpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlXHJcblxyXG59XHJcbi5pZDEgaDJ7XHJcblx0YmFja2dyb3VuZDogIzRENEQ0RDtcclxuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cdGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zIENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XHJcblx0Y29sb3I6ICM3OTc5Nzk7XHJcblx0Zm9udC1zaXplOiAxOHB4O1xyXG5cdGZvbnQtd2VpZ2h0OiAxMDA7XHJcblx0cGFkZGluZzogMjBweDtcclxuXHRtYXJnaW46IC0zMHB4IC0zMHB4IDMwcHggLTMwcHg7XHJcbn1cclxuLmlkMSBpbnB1dFt0eXBlPVwidGV4dFwiXSxcclxuLmlkMSBpbnB1dFt0eXBlPVwiZW1haWxcIl0sXHJcbi5pZDEgaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdLFxyXG4uZm9ybS0tOCBzZWxlY3QgXHJcbntcclxuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHQtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0b3V0bGluZTogbm9uZTtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHR3aWR0aDogMTAwJTtcclxuXHRwYWRkaW5nOiA1cHg7XHJcblx0Ym9yZGVyOiBub25lO1xyXG5cdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xyXG5cdGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG5cdG1hcmdpbi1ib3R0b206IDEwcHg7XHJcblx0Zm9udDogMTZweCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG5cdGhlaWdodDogMzBweDsgbWFyZ2luOjBweDtcclxufVxyXG5cclxuXHJcbi5pZDEgaW5wdXRbdHlwZT1cImJ1dHRvblwiXSwgXHJcbi5pZDEgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXXtcclxuXHQtbW96LWJveC1zaGFkb3c6IGluc2V0IDBweCAxcHggMHB4IDBweCAjNDVENkQ2O1xyXG5cdC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMHB4IDFweCAwcHggMHB4ICM0NUQ2RDY7XHJcblx0Ym94LXNoYWRvdzogaW5zZXQgMHB4IDFweCAwcHggMHB4ICM0NUQ2RDY7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzJDQkJCQjtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjMjdBMEEwO1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0Y29sb3I6ICNGRkZGRkY7XHJcblx0Zm9udC1mYW1pbHk6ICdPcGVuIFNhbnMgQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcclxuXHRmb250LXNpemU6IDE0cHg7XHJcblx0cGFkZGluZzogOHB4IDE4cHg7XHJcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuLmlkMSBpbnB1dFt0eXBlPVwiYnV0dG9uXCJdOmhvdmVyLCBcclxuLmlkMSBpbnB1dFt0eXBlPVwic3VibWl0XCJdOmhvdmVyIHtcclxuXHRiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMzNENBQ0EgNSUsICMzMEM5QzkgMTAwJSk7XHJcblx0YmFja2dyb3VuZC1jb2xvcjojMzRDQUNBO1xyXG59IiwibGFiZWwge1xuICBtYXJnaW46IDBweDtcbn1cblxubGVnZW5kIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaWQxIHtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zIENvbmRlbnNlZFwiLCBhcmlhbCwgc2FucztcbiAgd2lkdGg6IDUwMHB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICBiYWNrZ3JvdW5kOiAyNTU7XG4gIG1hcmdpbjogMzBweCBhdXRvO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjIyKTtcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjIyKTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjIyKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5pZDEgaDIge1xuICBiYWNrZ3JvdW5kOiAjNEQ0RDREO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnMgQ29uZGVuc2VkXCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjNzk3OTc5O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIG1hcmdpbjogLTMwcHggLTMwcHggMzBweCAtMzBweDtcbn1cblxuLmlkMSBpbnB1dFt0eXBlPXRleHRdLFxuLmlkMSBpbnB1dFt0eXBlPWVtYWlsXSxcbi5pZDEgaW5wdXRbdHlwZT1wYXNzd29yZF0sXG4uZm9ybS0tOCBzZWxlY3Qge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgb3V0bGluZTogbm9uZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBmb250OiAxNnB4IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGhlaWdodDogMzBweDtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbi5pZDEgaW5wdXRbdHlwZT1idXR0b25dLFxuLmlkMSBpbnB1dFt0eXBlPXN1Ym1pdF0ge1xuICAtbW96LWJveC1zaGFkb3c6IGluc2V0IDBweCAxcHggMHB4IDBweCAjNDVENkQ2O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDBweCAxcHggMHB4IDBweCAjNDVENkQ2O1xuICBib3gtc2hhZG93OiBpbnNldCAwcHggMXB4IDBweCAwcHggIzQ1RDZENjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJDQkJCQjtcbiAgYm9yZGVyOiAxcHggc29saWQgIzI3QTBBMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnMgQ29uZGVuc2VkXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZzogOHB4IDE4cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmlkMSBpbnB1dFt0eXBlPWJ1dHRvbl06aG92ZXIsXG4uaWQxIGlucHV0W3R5cGU9c3VibWl0XTpob3ZlciB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMzNENBQ0EgNSUsICMzMEM5QzkgMTAwJSk7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNENBQ0E7XG59Il19 */"

/***/ }),

/***/ "./src/app/areas/banking/check-balance/check-balance.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/areas/banking/check-balance/check-balance.component.ts ***!
  \************************************************************************/
/*! exports provided: CheckBalanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckBalanceComponent", function() { return CheckBalanceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_banking_banking_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/banking/banking.service */ "./src/app/services/banking/banking.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _services_logout_logout_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/logout/logout.service */ "./src/app/services/logout/logout.service.ts");






let CheckBalanceComponent = class CheckBalanceComponent {
    constructor(router, bankservice, toaster, logoutService) {
        this.router = router;
        this.bankservice = bankservice;
        this.toaster = toaster;
        this.logoutService = logoutService;
        this.formdata = {};
    }
    ngOnInit() {
        debugger;
        this.formdata.AccountId = parseInt(localStorage.getItem("accountid"));
        // this.data= JSON.parse(localStorage.getItem("personDetail"));
        // this.final=JSON.parse(this.data);
        this.formdata.AccountNo = localStorage.getItem("accountno");
        this.bankservice.checkBalance(this.formdata.AccountId).subscribe(data => {
            if (data != null) {
                this.formdata.Balance = parseInt(data.toString());
            }
            else {
                this.toaster.error("no balance");
            }
        }, err => {
            if (err.status == 400) {
                this.logoutService.logout();
            }
        });
    }
};
CheckBalanceComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_banking_banking_service__WEBPACK_IMPORTED_MODULE_3__["BankingService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
    { type: _services_logout_logout_service__WEBPACK_IMPORTED_MODULE_5__["LogoutService"] }
];
CheckBalanceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-check-balance',
        template: __webpack_require__(/*! raw-loader!./check-balance.component.html */ "./node_modules/raw-loader/index.js!./src/app/areas/banking/check-balance/check-balance.component.html"),
        styles: [__webpack_require__(/*! ./check-balance.component.scss */ "./src/app/areas/banking/check-balance/check-balance.component.scss")]
    })
], CheckBalanceComponent);



/***/ }),

/***/ "./src/app/areas/banking/dashboard/dashboard/dashboard.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/areas/banking/dashboard/dashboard/dashboard.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FyZWFzL2JhbmtpbmcvZGFzaGJvYXJkL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/areas/banking/dashboard/dashboard/dashboard.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/areas/banking/dashboard/dashboard/dashboard.component.ts ***!
  \**************************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DashboardComponent = class DashboardComponent {
    constructor() { }
    ngOnInit() {
    }
};
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/areas/banking/dashboard/dashboard/dashboard.component.html"),
        styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/areas/banking/dashboard/dashboard/dashboard.component.scss")]
    })
], DashboardComponent);



/***/ }),

/***/ "./src/app/areas/banking/link-account/link-account.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/areas/banking/link-account/link-account.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label {\n  margin: 0px;\n}\n\nlegend {\n  text-align: center;\n}\n\n.id1 {\n  font-family: \"Open Sans Condensed\", arial, sans;\n  width: 500px;\n  padding: 20px;\n  background: 255;\n  margin: 30px auto;\n  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.22);\n  -moz-box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.22);\n  -webkit-box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.22);\n  background-color: white;\n}\n\n.id1 h2 {\n  background: #4D4D4D;\n  text-transform: uppercase;\n  font-family: \"Open Sans Condensed\", sans-serif;\n  color: #797979;\n  font-size: 18px;\n  font-weight: 100;\n  padding: 20px;\n  margin: -30px -30px 30px -30px;\n}\n\n.id1 input[type=text],\n.id1 input[type=email],\n.id1 input[type=password],\n.form--8 select {\n  box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  outline: none;\n  display: block;\n  width: 100%;\n  padding: 5px;\n  border: none;\n  border-bottom: 1px solid #ddd;\n  background: transparent;\n  margin-bottom: 10px;\n  font: 16px Arial, Helvetica, sans-serif;\n  height: 30px;\n  margin: 0px;\n}\n\n.id1 button:hover {\n  color: white;\n}\n\n.id1 input[type=button],\n.id1 input[type=submit] {\n  box-shadow: inset 0px 1px 0px 0px #45D6D6;\n  background-color: #2CBBBB;\n  border: 1px solid #27A0A0;\n  display: inline-block;\n  cursor: pointer;\n  color: #FFFFFF;\n  font-family: \"Open Sans Condensed\", sans-serif;\n  font-size: 14px;\n  padding: 8px 18px;\n  text-decoration: none;\n  text-transform: uppercase;\n}\n\n.id1 input[type=button]:hover,\n.id1 input[type=submit]:hover {\n  background: -webkit-gradient(linear, left top, left bottom, color-stop(5%, #34CACA), to(#30C9C9));\n  background: linear-gradient(to bottom, #34CACA 5%, #30C9C9 100%);\n  background-color: #34CACA;\n}\n\nbody {\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n* {\n  box-sizing: border-box;\n}\n\n/* Full-width input fields */\n\ninput[type=text], input[type=password] {\n  width: 100%;\n  padding: 10px;\n  margin: 5px 0 20px 0;\n  display: inline-block;\n  border: none;\n  background: #f1f1f1;\n}\n\n/* Add a background color when the inputs get focus */\n\ninput[type=text]:focus, input[type=password]:focus {\n  background-color: #ddd;\n  outline: none;\n}\n\n/* Set a style for all buttons */\n\nbutton {\n  background-color: #063b61;\n  color: white;\n  padding: 14px 20px;\n  margin: 8px 0;\n  border: none;\n  cursor: pointer;\n  width: 100%;\n  opacity: 0.9;\n}\n\nbutton:hover {\n  opacity: 1;\n}\n\n/* Extra styles for the cancel button */\n\n.cancelbtn {\n  padding: 14px 20px;\n  background-color: #f44336;\n}\n\n/* Float cancel and signup buttons and add an equal width */\n\n.cancelbtn, .signupbtn {\n  float: left;\n  width: 50%;\n}\n\n/* Add padding to container elements */\n\n.container {\n  padding: 10px;\n}\n\n/* The Modal (background) */\n\n.modal {\n  display: none;\n  /* Hidden by default */\n  position: fixed;\n  /* Stay in place */\n  z-index: 1;\n  /* Sit on top */\n  left: 0;\n  top: 0;\n  width: 100%;\n  /* Full width */\n  height: 100%;\n  /* Full height */\n  overflow: auto;\n  /* Enable scroll if needed */\n  background-color: #474e5d;\n  padding-top: 50px;\n}\n\n/* Modal Content/Box */\n\n.modal-content {\n  background-color: #fefefe;\n  margin: 5% auto 15% auto;\n  /* 5% from the top, 15% from the bottom and centered */\n  border: 1px solid #888;\n  width: 80%;\n  /* Could be more or less, depending on screen size */\n}\n\n/* Style the horizontal ruler */\n\nhr {\n  border: 1px solid #f1f1f1;\n  margin-bottom: 25px;\n}\n\n/* The Close Button (x) */\n\n.close {\n  position: absolute;\n  right: 35px;\n  top: 15px;\n  font-size: 40px;\n  font-weight: bold;\n  color: #f1f1f1;\n}\n\n.close:hover,\n.close:focus {\n  color: #f44336;\n  cursor: pointer;\n}\n\n/* Clear floats */\n\n.clearfix::after {\n  content: \"\";\n  clear: both;\n  display: table;\n}\n\n/* Change styles for cancel button and signup button on extra small screens */\n\n@media screen and (max-width: 300px) {\n  .cancelbtn, .signupbtn {\n    width: 100%;\n  }\n}\n\n.form-control::-webkit-input-placeholder {\n  /* Edge */\n  font-size: 12px;\n}\n\n.form-control::-moz-placeholder {\n  font-size: 12px;\n}\n\n.form-control::-ms-input-placeholder {\n  font-size: 12px;\n}\n\n.form-control::placeholder {\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXJlYXMvYmFua2luZy9saW5rLWFjY291bnQvRDpcXFByb2plY3RfTWFqb3JcXE1TX2JhbmtpbmdcXEJhbmtBcHBGcm9udGVuZC9zcmNcXGFwcFxcYXJlYXNcXGJhbmtpbmdcXGxpbmstYWNjb3VudFxcbGluay1hY2NvdW50LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcmVhcy9iYW5raW5nL2xpbmstYWNjb3VudC9saW5rLWFjY291bnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBTyxXQUFBO0FDRVA7O0FEQUE7RUFDRSxrQkFBQTtBQ0dGOztBRERBO0VBQ0MsK0NBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDRDQUFBO0VBQ0EsaURBQUE7RUFDQyxvREFBQTtFQUNBLHVCQUFBO0FDSUY7O0FEREE7RUFDQyxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsOENBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0FDSUQ7O0FERkE7Ozs7RUFLQyxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EsMkJBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVDQUFBO0VBQ0EsWUFBQTtFQUFjLFdBQUE7QUNLZjs7QURIQTtFQUNFLFlBQUE7QUNNRjs7QURIQTs7RUFJQyx5Q0FBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsOENBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0FDTUQ7O0FESkE7O0VBRUMsaUdBQUE7RUFBQSxnRUFBQTtFQUNBLHlCQUFBO0FDT0Q7O0FETEE7RUFBTSx5Q0FBQTtBQ1NOOztBRFJBO0VBQUcsc0JBQUE7QUNZSDs7QURWQSw0QkFBQTs7QUFDQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ2FGOztBRFZBLHFEQUFBOztBQUNBO0VBQ0Usc0JBQUE7RUFDQSxhQUFBO0FDYUY7O0FEVkEsZ0NBQUE7O0FBQ0E7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDYUY7O0FEVkE7RUFDRSxVQUFBO0FDYUY7O0FEVkEsdUNBQUE7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0FDYUY7O0FEVkEsMkRBQUE7O0FBQ0E7RUFDRSxXQUFBO0VBQ0EsVUFBQTtBQ2FGOztBRFZBLHNDQUFBOztBQUNBO0VBQ0UsYUFBQTtBQ2FGOztBRFZBLDJCQUFBOztBQUNBO0VBQ0UsYUFBQTtFQUFlLHNCQUFBO0VBQ2YsZUFBQTtFQUFpQixrQkFBQTtFQUNqQixVQUFBO0VBQVksZUFBQTtFQUNaLE9BQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUFhLGVBQUE7RUFDYixZQUFBO0VBQWMsZ0JBQUE7RUFDZCxjQUFBO0VBQWdCLDRCQUFBO0VBQ2hCLHlCQUFBO0VBQ0EsaUJBQUE7QUNtQkY7O0FEaEJBLHNCQUFBOztBQUNBO0VBQ0UseUJBQUE7RUFDQSx3QkFBQTtFQUEwQixzREFBQTtFQUMxQixzQkFBQTtFQUNBLFVBQUE7RUFBWSxvREFBQTtBQ3FCZDs7QURsQkEsK0JBQUE7O0FBQ0E7RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0FDcUJGOztBRGxCQSx5QkFBQTs7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDcUJGOztBRGxCQTs7RUFFRSxjQUFBO0VBQ0EsZUFBQTtBQ3FCRjs7QURsQkEsaUJBQUE7O0FBQ0E7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUNxQkY7O0FEbEJBLDZFQUFBOztBQUNBO0VBQ0U7SUFDRyxXQUFBO0VDcUJIO0FBQ0Y7O0FEbkJBO0VBQTJDLFNBQUE7RUFDdkMsZUFBQTtBQ3NCSjs7QURmRTtFQUNFLGVBQUE7QUN1Qko7O0FEeEJFO0VBQ0UsZUFBQTtBQ3VCSjs7QUR4QkU7RUFDRSxlQUFBO0FDdUJKIiwiZmlsZSI6InNyYy9hcHAvYXJlYXMvYmFua2luZy9saW5rLWFjY291bnQvbGluay1hY2NvdW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibGFiZWx7IG1hcmdpbjowcHg7XHJcbn1cclxubGVnZW5ke1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uaWQxe1xyXG5cdGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zIENvbmRlbnNlZCcsIGFyaWFsLCBzYW5zO1xyXG5cdHdpZHRoOiA1MDBweDtcclxuXHRwYWRkaW5nOiAyMHB4O1xyXG5cdGJhY2tncm91bmQ6IGJsdWUoJGNvbG9yOiAjZmYwMGZmKTtcclxuXHRtYXJnaW46IDMwcHggYXV0bztcclxuXHRib3gtc2hhZG93OiAwcHggMHB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjIyKTtcclxuXHQtbW96LWJveC1zaGFkb3c6IDBweCAwcHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMjIpO1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogIDBweCAwcHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMjIpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlXHJcblxyXG59XHJcbi5pZDEgaDJ7XHJcblx0YmFja2dyb3VuZDogIzRENEQ0RDtcclxuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cdGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zIENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XHJcblx0Y29sb3I6ICM3OTc5Nzk7XHJcblx0Zm9udC1zaXplOiAxOHB4O1xyXG5cdGZvbnQtd2VpZ2h0OiAxMDA7XHJcblx0cGFkZGluZzogMjBweDtcclxuXHRtYXJnaW46IC0zMHB4IC0zMHB4IDMwcHggLTMwcHg7XHJcbn1cclxuLmlkMSBpbnB1dFt0eXBlPVwidGV4dFwiXSxcclxuLmlkMSBpbnB1dFt0eXBlPVwiZW1haWxcIl0sXHJcbi5pZDEgaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdLFxyXG4uZm9ybS0tOCBzZWxlY3QgXHJcbntcclxuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHQtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0b3V0bGluZTogbm9uZTtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHR3aWR0aDogMTAwJTtcclxuXHRwYWRkaW5nOiA1cHg7XHJcblx0Ym9yZGVyOiBub25lO1xyXG5cdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xyXG5cdGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG5cdG1hcmdpbi1ib3R0b206IDEwcHg7XHJcblx0Zm9udDogMTZweCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG5cdGhlaWdodDogMzBweDsgbWFyZ2luOjBweDtcclxufVxyXG4uaWQxIGJ1dHRvbjpob3ZlcntcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5pZDEgaW5wdXRbdHlwZT1cImJ1dHRvblwiXSwgXHJcbi5pZDEgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXXtcclxuXHQtbW96LWJveC1zaGFkb3c6IGluc2V0IDBweCAxcHggMHB4IDBweCAjNDVENkQ2O1xyXG5cdC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMHB4IDFweCAwcHggMHB4ICM0NUQ2RDY7XHJcblx0Ym94LXNoYWRvdzogaW5zZXQgMHB4IDFweCAwcHggMHB4ICM0NUQ2RDY7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzJDQkJCQjtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjMjdBMEEwO1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0Y29sb3I6ICNGRkZGRkY7XHJcblx0Zm9udC1mYW1pbHk6ICdPcGVuIFNhbnMgQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcclxuXHRmb250LXNpemU6IDE0cHg7XHJcblx0cGFkZGluZzogOHB4IDE4cHg7XHJcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuLmlkMSBpbnB1dFt0eXBlPVwiYnV0dG9uXCJdOmhvdmVyLCBcclxuLmlkMSBpbnB1dFt0eXBlPVwic3VibWl0XCJdOmhvdmVyIHtcclxuXHRiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMzNENBQ0EgNSUsICMzMEM5QzkgMTAwJSk7XHJcblx0YmFja2dyb3VuZC1jb2xvcjojMzRDQUNBO1xyXG59XHJcbmJvZHkge2ZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO31cclxuKiB7Ym94LXNpemluZzogYm9yZGVyLWJveDt9XHJcblxyXG4vKiBGdWxsLXdpZHRoIGlucHV0IGZpZWxkcyAqL1xyXG5pbnB1dFt0eXBlPXRleHRdLCBpbnB1dFt0eXBlPXBhc3N3b3JkXSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBtYXJnaW46IDVweCAwIDIwcHggMDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQ6ICNmMWYxZjE7XHJcbn1cclxuXHJcbi8qIEFkZCBhIGJhY2tncm91bmQgY29sb3Igd2hlbiB0aGUgaW5wdXRzIGdldCBmb2N1cyAqL1xyXG5pbnB1dFt0eXBlPXRleHRdOmZvY3VzLCBpbnB1dFt0eXBlPXBhc3N3b3JkXTpmb2N1cyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4vKiBTZXQgYSBzdHlsZSBmb3IgYWxsIGJ1dHRvbnMgKi9cclxuYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiMwNjNiNjE7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDE0cHggMjBweDtcclxuICBtYXJnaW46IDhweCAwO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb3BhY2l0eTogMC45O1xyXG59XHJcblxyXG5idXR0b246aG92ZXIge1xyXG4gIG9wYWNpdHk6MTtcclxufVxyXG5cclxuLyogRXh0cmEgc3R5bGVzIGZvciB0aGUgY2FuY2VsIGJ1dHRvbiAqL1xyXG4uY2FuY2VsYnRuIHtcclxuICBwYWRkaW5nOiAxNHB4IDIwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0NDMzNjtcclxufVxyXG5cclxuLyogRmxvYXQgY2FuY2VsIGFuZCBzaWdudXAgYnV0dG9ucyBhbmQgYWRkIGFuIGVxdWFsIHdpZHRoICovXHJcbi5jYW5jZWxidG4sIC5zaWdudXBidG4ge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbi8qIEFkZCBwYWRkaW5nIHRvIGNvbnRhaW5lciBlbGVtZW50cyAqL1xyXG4uY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4vKiBUaGUgTW9kYWwgKGJhY2tncm91bmQpICovXHJcbi5tb2RhbCB7XHJcbiAgZGlzcGxheTogbm9uZTsgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cclxuICBwb3NpdGlvbjogZml4ZWQ7IC8qIFN0YXkgaW4gcGxhY2UgKi9cclxuICB6LWluZGV4OiAxOyAvKiBTaXQgb24gdG9wICovXHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDA7XHJcbiAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKi9cclxuICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0ICovXHJcbiAgb3ZlcmZsb3c6IGF1dG87IC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ3NGU1ZDtcclxuICBwYWRkaW5nLXRvcDogNTBweDtcclxufVxyXG5cclxuLyogTW9kYWwgQ29udGVudC9Cb3ggKi9cclxuLm1vZGFsLWNvbnRlbnQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XHJcbiAgbWFyZ2luOiA1JSBhdXRvIDE1JSBhdXRvOyAvKiA1JSBmcm9tIHRoZSB0b3AsIDE1JSBmcm9tIHRoZSBib3R0b20gYW5kIGNlbnRlcmVkICovXHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcclxuICB3aWR0aDogODAlOyAvKiBDb3VsZCBiZSBtb3JlIG9yIGxlc3MsIGRlcGVuZGluZyBvbiBzY3JlZW4gc2l6ZSAqL1xyXG59XHJcblxyXG4vKiBTdHlsZSB0aGUgaG9yaXpvbnRhbCBydWxlciAqL1xyXG5ociB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2YxZjFmMTtcclxuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG59XHJcbiBcclxuLyogVGhlIENsb3NlIEJ1dHRvbiAoeCkgKi9cclxuLmNsb3NlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDM1cHg7XHJcbiAgdG9wOiAxNXB4O1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogI2YxZjFmMTtcclxufVxyXG5cclxuLmNsb3NlOmhvdmVyLFxyXG4uY2xvc2U6Zm9jdXMge1xyXG4gIGNvbG9yOiAjZjQ0MzM2O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLyogQ2xlYXIgZmxvYXRzICovXHJcbi5jbGVhcmZpeDo6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgY2xlYXI6IGJvdGg7XHJcbiAgZGlzcGxheTogdGFibGU7XHJcbn1cclxuXHJcbi8qIENoYW5nZSBzdHlsZXMgZm9yIGNhbmNlbCBidXR0b24gYW5kIHNpZ251cCBidXR0b24gb24gZXh0cmEgc21hbGwgc2NyZWVucyAqL1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMDBweCkge1xyXG4gIC5jYW5jZWxidG4sIC5zaWdudXBidG4ge1xyXG4gICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxufVxyXG4uZm9ybS1jb250cm9sOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHsgLyogRWRnZSAqL1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxuICBcclxuICAuZm9ybS1jb250cm9sOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7IC8qIEludGVybmV0IEV4cGxvcmVyIDEwLTExICovXHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtLWNvbnRyb2w6OnBsYWNlaG9sZGVyIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICB9IiwibGFiZWwge1xuICBtYXJnaW46IDBweDtcbn1cblxubGVnZW5kIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaWQxIHtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zIENvbmRlbnNlZFwiLCBhcmlhbCwgc2FucztcbiAgd2lkdGg6IDUwMHB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICBiYWNrZ3JvdW5kOiAyNTU7XG4gIG1hcmdpbjogMzBweCBhdXRvO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjIyKTtcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjIyKTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjIyKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5pZDEgaDIge1xuICBiYWNrZ3JvdW5kOiAjNEQ0RDREO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnMgQ29uZGVuc2VkXCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjNzk3OTc5O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIG1hcmdpbjogLTMwcHggLTMwcHggMzBweCAtMzBweDtcbn1cblxuLmlkMSBpbnB1dFt0eXBlPXRleHRdLFxuLmlkMSBpbnB1dFt0eXBlPWVtYWlsXSxcbi5pZDEgaW5wdXRbdHlwZT1wYXNzd29yZF0sXG4uZm9ybS0tOCBzZWxlY3Qge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgb3V0bGluZTogbm9uZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBmb250OiAxNnB4IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGhlaWdodDogMzBweDtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbi5pZDEgYnV0dG9uOmhvdmVyIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uaWQxIGlucHV0W3R5cGU9YnV0dG9uXSxcbi5pZDEgaW5wdXRbdHlwZT1zdWJtaXRdIHtcbiAgLW1vei1ib3gtc2hhZG93OiBpbnNldCAwcHggMXB4IDBweCAwcHggIzQ1RDZENjtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwcHggMXB4IDBweCAwcHggIzQ1RDZENjtcbiAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDFweCAwcHggMHB4ICM0NUQ2RDY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyQ0JCQkI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMyN0EwQTA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zIENvbmRlbnNlZFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmc6IDhweCAxOHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5pZDEgaW5wdXRbdHlwZT1idXR0b25dOmhvdmVyLFxuLmlkMSBpbnB1dFt0eXBlPXN1Ym1pdF06aG92ZXIge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMzRDQUNBIDUlLCAjMzBDOUM5IDEwMCUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzRDQUNBO1xufVxuXG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG59XG5cbioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4vKiBGdWxsLXdpZHRoIGlucHV0IGZpZWxkcyAqL1xuaW5wdXRbdHlwZT10ZXh0XSwgaW5wdXRbdHlwZT1wYXNzd29yZF0ge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luOiA1cHggMCAyMHB4IDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xufVxuXG4vKiBBZGQgYSBiYWNrZ3JvdW5kIGNvbG9yIHdoZW4gdGhlIGlucHV0cyBnZXQgZm9jdXMgKi9cbmlucHV0W3R5cGU9dGV4dF06Zm9jdXMsIGlucHV0W3R5cGU9cGFzc3dvcmRdOmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLyogU2V0IGEgc3R5bGUgZm9yIGFsbCBidXR0b25zICovXG5idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDYzYjYxO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDE0cHggMjBweDtcbiAgbWFyZ2luOiA4cHggMDtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBvcGFjaXR5OiAwLjk7XG59XG5cbmJ1dHRvbjpob3ZlciB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi8qIEV4dHJhIHN0eWxlcyBmb3IgdGhlIGNhbmNlbCBidXR0b24gKi9cbi5jYW5jZWxidG4ge1xuICBwYWRkaW5nOiAxNHB4IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzY7XG59XG5cbi8qIEZsb2F0IGNhbmNlbCBhbmQgc2lnbnVwIGJ1dHRvbnMgYW5kIGFkZCBhbiBlcXVhbCB3aWR0aCAqL1xuLmNhbmNlbGJ0biwgLnNpZ251cGJ0biB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogNTAlO1xufVxuXG4vKiBBZGQgcGFkZGluZyB0byBjb250YWluZXIgZWxlbWVudHMgKi9cbi5jb250YWluZXIge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4vKiBUaGUgTW9kYWwgKGJhY2tncm91bmQpICovXG4ubW9kYWwge1xuICBkaXNwbGF5OiBub25lO1xuICAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIC8qIFN0YXkgaW4gcGxhY2UgKi9cbiAgei1pbmRleDogMTtcbiAgLyogU2l0IG9uIHRvcCAqL1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICAvKiBGdWxsIHdpZHRoICovXG4gIGhlaWdodDogMTAwJTtcbiAgLyogRnVsbCBoZWlnaHQgKi9cbiAgb3ZlcmZsb3c6IGF1dG87XG4gIC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NzRlNWQ7XG4gIHBhZGRpbmctdG9wOiA1MHB4O1xufVxuXG4vKiBNb2RhbCBDb250ZW50L0JveCAqL1xuLm1vZGFsLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xuICBtYXJnaW46IDUlIGF1dG8gMTUlIGF1dG87XG4gIC8qIDUlIGZyb20gdGhlIHRvcCwgMTUlIGZyb20gdGhlIGJvdHRvbSBhbmQgY2VudGVyZWQgKi9cbiAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcbiAgd2lkdGg6IDgwJTtcbiAgLyogQ291bGQgYmUgbW9yZSBvciBsZXNzLCBkZXBlbmRpbmcgb24gc2NyZWVuIHNpemUgKi9cbn1cblxuLyogU3R5bGUgdGhlIGhvcml6b250YWwgcnVsZXIgKi9cbmhyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2YxZjFmMTtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cblxuLyogVGhlIENsb3NlIEJ1dHRvbiAoeCkgKi9cbi5jbG9zZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDM1cHg7XG4gIHRvcDogMTVweDtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICNmMWYxZjE7XG59XG5cbi5jbG9zZTpob3Zlcixcbi5jbG9zZTpmb2N1cyB7XG4gIGNvbG9yOiAjZjQ0MzM2O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi8qIENsZWFyIGZsb2F0cyAqL1xuLmNsZWFyZml4OjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGNsZWFyOiBib3RoO1xuICBkaXNwbGF5OiB0YWJsZTtcbn1cblxuLyogQ2hhbmdlIHN0eWxlcyBmb3IgY2FuY2VsIGJ1dHRvbiBhbmQgc2lnbnVwIGJ1dHRvbiBvbiBleHRyYSBzbWFsbCBzY3JlZW5zICovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMDBweCkge1xuICAuY2FuY2VsYnRuLCAuc2lnbnVwYnRuIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuLmZvcm0tY29udHJvbDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIC8qIEVkZ2UgKi9cbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uZm9ybS1jb250cm9sOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIC8qIEludGVybmV0IEV4cGxvcmVyIDEwLTExICovXG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmZvcm0tY29udHJvbDo6cGxhY2Vob2xkZXIge1xuICBmb250LXNpemU6IDEycHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/areas/banking/link-account/link-account.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/areas/banking/link-account/link-account.component.ts ***!
  \**********************************************************************/
/*! exports provided: LinkAccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkAccountComponent", function() { return LinkAccountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_banking_banking_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/banking/banking.service */ "./src/app/services/banking/banking.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");






let LinkAccountComponent = class LinkAccountComponent {
    constructor(fb, bankservice, router, toaster) {
        this.fb = fb;
        this.bankservice = bankservice;
        this.router = router;
        this.toaster = toaster;
        this.formdata = {};
        this.submitted = false;
    }
    ngOnInit() {
        debugger;
        // this.linkaccountform=this.fb.group({
        //   accountno:['',Validators.required],
        //   pin:['',[Validators.required,Validators.maxLength(4)]]
        // })
        this.validation();
    }
    validation() {
        this.linkaccountform = this.fb.group({
            accountno: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            pin: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(4)]]
        });
    }
    get f() { return this.linkaccountform.controls; }
    ;
    Continue() {
        debugger;
        this.submitted = true;
        if (this.linkaccountform.valid == true) {
            this.formdata.Accountno = this.linkaccountform.value.accountno;
            this.formdata.PIN = this.linkaccountform.value.pin;
            this.bankservice.linkaccount(this.formdata).subscribe(data => {
                this.formdata = data;
                if (this.formdata.Id == 1) {
                    this.toaster.success('your account has linked Successfully ');
                    this.router.navigate(['']);
                }
                else {
                    this.toaster.error('Somthing went wrong');
                    this.validation();
                }
            }, err => {
                console.log(err);
            });
        }
    }
};
LinkAccountComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_banking_banking_service__WEBPACK_IMPORTED_MODULE_3__["BankingService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }
];
LinkAccountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-link-account',
        template: __webpack_require__(/*! raw-loader!./link-account.component.html */ "./node_modules/raw-loader/index.js!./src/app/areas/banking/link-account/link-account.component.html"),
        styles: [__webpack_require__(/*! ./link-account.component.scss */ "./src/app/areas/banking/link-account/link-account.component.scss")]
    })
], LinkAccountComponent);



/***/ }),

/***/ "./src/app/areas/banking/personal-details/personal-details.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/areas/banking/personal-details/personal-details.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label {\n  margin: 0px;\n}\n\nlegend {\n  text-align: center;\n}\n\n.id1 {\n  font-family: \"Open Sans Condensed\", arial, sans;\n  width: 500px;\n  padding: 20px;\n  background: 255;\n  margin: 30px auto;\n  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.22);\n  -moz-box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.22);\n  -webkit-box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.22);\n  background-color: white;\n}\n\n.id1 button:hover {\n  color: white;\n}\n\n.id1 h2 {\n  background: #4D4D4D;\n  text-transform: uppercase;\n  font-family: \"Open Sans Condensed\", sans-serif;\n  color: #797979;\n  font-size: 18px;\n  font-weight: 100;\n  padding: 20px;\n  margin: -30px -30px 30px -30px;\n}\n\n.id1 input[type=text],\n.id1 input[type=email],\n.id1 input[type=password],\n.form--8 select {\n  box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  outline: none;\n  display: block;\n  width: 100%;\n  padding: 5px;\n  border: none;\n  border-bottom: 1px solid #ddd;\n  background: transparent;\n  margin-bottom: 10px;\n  font: 16px Arial, Helvetica, sans-serif;\n  height: 30px;\n  margin: 0px;\n}\n\n.id1 input[type=button],\n.id1 input[type=submit] {\n  box-shadow: inset 0px 1px 0px 0px #45D6D6;\n  background-color: #2CBBBB;\n  border: 1px solid #27A0A0;\n  display: inline-block;\n  cursor: pointer;\n  color: #FFFFFF;\n  font-family: \"Open Sans Condensed\", sans-serif;\n  font-size: 14px;\n  padding: 8px 18px;\n  text-decoration: none;\n  text-transform: uppercase;\n}\n\n.id1 input[type=button]:hover,\n.id1 input[type=submit]:hover {\n  background: -webkit-gradient(linear, left top, left bottom, color-stop(5%, #34CACA), to(#30C9C9));\n  background: linear-gradient(to bottom, #34CACA 5%, #30C9C9 100%);\n  background-color: #34CACA;\n}\n\nbutton:hover {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXJlYXMvYmFua2luZy9wZXJzb25hbC1kZXRhaWxzL0Q6XFxQcm9qZWN0X01ham9yXFxNU19iYW5raW5nXFxCYW5rQXBwRnJvbnRlbmQvc3JjXFxhcHBcXGFyZWFzXFxiYW5raW5nXFxwZXJzb25hbC1kZXRhaWxzXFxwZXJzb25hbC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcmVhcy9iYW5raW5nL3BlcnNvbmFsLWRldGFpbHMvcGVyc29uYWwtZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFPLFdBQUE7QUNFUDs7QURBQTtFQUNFLGtCQUFBO0FDR0Y7O0FEREE7RUFDQywrQ0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsNENBQUE7RUFDQSxpREFBQTtFQUNDLG9EQUFBO0VBQ0EsdUJBQUE7QUNJRjs7QUREQTtFQUNDLFlBQUE7QUNJRDs7QUREQTtFQUNDLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSw4Q0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7QUNJRDs7QURGQTs7OztFQUtDLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSwyQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUNBQUE7RUFDQSxZQUFBO0VBQWMsV0FBQTtBQ0tmOztBRERBOztFQUlDLHlDQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSw4Q0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7QUNJRDs7QURGQTs7RUFFQyxpR0FBQTtFQUFBLGdFQUFBO0VBQ0EseUJBQUE7QUNLRDs7QURIQTtFQUNJLFlBQUE7QUNNSiIsImZpbGUiOiJzcmMvYXBwL2FyZWFzL2JhbmtpbmcvcGVyc29uYWwtZGV0YWlscy9wZXJzb25hbC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibGFiZWx7IG1hcmdpbjowcHg7XHJcbn1cclxubGVnZW5ke1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uaWQxe1xyXG5cdGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zIENvbmRlbnNlZCcsIGFyaWFsLCBzYW5zO1xyXG5cdHdpZHRoOiA1MDBweDtcclxuXHRwYWRkaW5nOiAyMHB4O1xyXG5cdGJhY2tncm91bmQ6IGJsdWUoJGNvbG9yOiAjZmYwMGZmKTtcclxuXHRtYXJnaW46IDMwcHggYXV0bztcclxuXHRib3gtc2hhZG93OiAwcHggMHB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjIyKTtcclxuXHQtbW96LWJveC1zaGFkb3c6IDBweCAwcHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMjIpO1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogIDBweCAwcHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMjIpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlXHJcblxyXG59XHJcbi5pZDEgYnV0dG9uOmhvdmVye1xyXG5cdGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgXHJcbi5pZDEgaDJ7XHJcblx0YmFja2dyb3VuZDogIzRENEQ0RDtcclxuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cdGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zIENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XHJcblx0Y29sb3I6ICM3OTc5Nzk7XHJcblx0Zm9udC1zaXplOiAxOHB4O1xyXG5cdGZvbnQtd2VpZ2h0OiAxMDA7XHJcblx0cGFkZGluZzogMjBweDtcclxuXHRtYXJnaW46IC0zMHB4IC0zMHB4IDMwcHggLTMwcHg7XHJcbn1cclxuLmlkMSBpbnB1dFt0eXBlPVwidGV4dFwiXSxcclxuLmlkMSBpbnB1dFt0eXBlPVwiZW1haWxcIl0sXHJcbi5pZDEgaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdLFxyXG4uZm9ybS0tOCBzZWxlY3QgXHJcbntcclxuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHQtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0b3V0bGluZTogbm9uZTtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHR3aWR0aDogMTAwJTtcclxuXHRwYWRkaW5nOiA1cHg7XHJcblx0Ym9yZGVyOiBub25lO1xyXG5cdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xyXG5cdGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG5cdG1hcmdpbi1ib3R0b206IDEwcHg7XHJcblx0Zm9udDogMTZweCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG5cdGhlaWdodDogMzBweDsgbWFyZ2luOjBweDtcclxufVxyXG5cclxuXHJcbi5pZDEgaW5wdXRbdHlwZT1cImJ1dHRvblwiXSwgXHJcbi5pZDEgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXXtcclxuXHQtbW96LWJveC1zaGFkb3c6IGluc2V0IDBweCAxcHggMHB4IDBweCAjNDVENkQ2O1xyXG5cdC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMHB4IDFweCAwcHggMHB4ICM0NUQ2RDY7XHJcblx0Ym94LXNoYWRvdzogaW5zZXQgMHB4IDFweCAwcHggMHB4ICM0NUQ2RDY7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzJDQkJCQjtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjMjdBMEEwO1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0Y29sb3I6ICNGRkZGRkY7XHJcblx0Zm9udC1mYW1pbHk6ICdPcGVuIFNhbnMgQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcclxuXHRmb250LXNpemU6IDE0cHg7XHJcblx0cGFkZGluZzogOHB4IDE4cHg7XHJcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuLmlkMSBpbnB1dFt0eXBlPVwiYnV0dG9uXCJdOmhvdmVyLCBcclxuLmlkMSBpbnB1dFt0eXBlPVwic3VibWl0XCJdOmhvdmVyIHtcclxuXHRiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMzNENBQ0EgNSUsICMzMEM5QzkgMTAwJSk7XHJcblx0YmFja2dyb3VuZC1jb2xvcjojMzRDQUNBO1xyXG59XHJcbmJ1dHRvbjpob3ZlciB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn0iLCJsYWJlbCB7XG4gIG1hcmdpbjogMHB4O1xufVxuXG5sZWdlbmQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pZDEge1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnMgQ29uZGVuc2VkXCIsIGFyaWFsLCBzYW5zO1xuICB3aWR0aDogNTAwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJhY2tncm91bmQ6IDI1NTtcbiAgbWFyZ2luOiAzMHB4IGF1dG87XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMjIpO1xuICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMjIpO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMjIpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLmlkMSBidXR0b246aG92ZXIge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5pZDEgaDIge1xuICBiYWNrZ3JvdW5kOiAjNEQ0RDREO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnMgQ29uZGVuc2VkXCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjNzk3OTc5O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIG1hcmdpbjogLTMwcHggLTMwcHggMzBweCAtMzBweDtcbn1cblxuLmlkMSBpbnB1dFt0eXBlPXRleHRdLFxuLmlkMSBpbnB1dFt0eXBlPWVtYWlsXSxcbi5pZDEgaW5wdXRbdHlwZT1wYXNzd29yZF0sXG4uZm9ybS0tOCBzZWxlY3Qge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgb3V0bGluZTogbm9uZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBmb250OiAxNnB4IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGhlaWdodDogMzBweDtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbi5pZDEgaW5wdXRbdHlwZT1idXR0b25dLFxuLmlkMSBpbnB1dFt0eXBlPXN1Ym1pdF0ge1xuICAtbW96LWJveC1zaGFkb3c6IGluc2V0IDBweCAxcHggMHB4IDBweCAjNDVENkQ2O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDBweCAxcHggMHB4IDBweCAjNDVENkQ2O1xuICBib3gtc2hhZG93OiBpbnNldCAwcHggMXB4IDBweCAwcHggIzQ1RDZENjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJDQkJCQjtcbiAgYm9yZGVyOiAxcHggc29saWQgIzI3QTBBMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnMgQ29uZGVuc2VkXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZzogOHB4IDE4cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmlkMSBpbnB1dFt0eXBlPWJ1dHRvbl06aG92ZXIsXG4uaWQxIGlucHV0W3R5cGU9c3VibWl0XTpob3ZlciB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMzNENBQ0EgNSUsICMzMEM5QzkgMTAwJSk7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNENBQ0E7XG59XG5cbmJ1dHRvbjpob3ZlciB7XG4gIGNvbG9yOiB3aGl0ZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/areas/banking/personal-details/personal-details.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/areas/banking/personal-details/personal-details.component.ts ***!
  \******************************************************************************/
/*! exports provided: PersonalDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalDetailsComponent", function() { return PersonalDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_banking_banking_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/banking/banking.service */ "./src/app/services/banking/banking.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var angular_user_idle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-user-idle */ "./node_modules/angular-user-idle/fesm2015/angular-user-idle.js");
/* harmony import */ var _services_logout_logout_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/logout/logout.service */ "./src/app/services/logout/logout.service.ts");




//import Logout from '../../../model/banking/logout';



let PersonalDetailsComponent = class PersonalDetailsComponent {
    //log1 : any;
    constructor(router, bankservice, toaster, idleservice, logoutService) {
        this.router = router;
        this.bankservice = bankservice;
        this.toaster = toaster;
        this.idleservice = idleservice;
        this.logoutService = logoutService;
        //formdata:PersonDetail=new PersonDetail();
        this.formdata = {};
        //this.log1 = new Logout( router,toaster);
    }
    ngOnInit() {
        //  this.idleservice.startWatching(600).subscribe(res => {
        //  })
        //   if (res === true) {
        //   localStorage.clear();
        //   sessionStorage.clear();
        //   this.router.navigate(['/login'])
        //   }
        //   else {
        //   if (localStorage.length == 0)
        //   this.router.navigate(['/login'])
        //   }
        //   })
        this.formdata.AccountId = parseInt(localStorage.getItem("accountid"));
        this.bankservice.detail(this.formdata.AccountId).subscribe(data => {
            debugger;
            if (data != null) {
                this.formdata = data;
                // window.localStorage.setItem("personDetail",JSON.stringify(data));
                window.localStorage.setItem("accountno", this.formdata[0].AccountNo + "");
            }
            else {
                this.toaster.error("no details");
            }
        }, err => {
            if (err.status == 400) {
                this.logoutService.logout();
            }
        });
    }
};
PersonalDetailsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_banking_banking_service__WEBPACK_IMPORTED_MODULE_3__["BankingService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
    { type: angular_user_idle__WEBPACK_IMPORTED_MODULE_5__["UserIdleService"] },
    { type: _services_logout_logout_service__WEBPACK_IMPORTED_MODULE_6__["LogoutService"] }
];
PersonalDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-personal-details',
        template: __webpack_require__(/*! raw-loader!./personal-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/areas/banking/personal-details/personal-details.component.html"),
        styles: [__webpack_require__(/*! ./personal-details.component.scss */ "./src/app/areas/banking/personal-details/personal-details.component.scss")]
    })
], PersonalDetailsComponent);



/***/ }),

/***/ "./src/app/areas/banking/send-money/send-money.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/areas/banking/send-money/send-money.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label {\n  margin: 0px;\n}\n\nlegend {\n  text-align: center;\n}\n\n.id1 {\n  font-family: \"Open Sans Condensed\", arial, sans;\n  width: 500px;\n  padding: 20px;\n  background: 255;\n  margin: 30px auto;\n  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.22);\n  -moz-box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.22);\n  -webkit-box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.22);\n  background-color: white;\n}\n\n.id1 h2 {\n  background: #4D4D4D;\n  text-transform: uppercase;\n  font-family: \"Open Sans Condensed\", sans-serif;\n  color: #797979;\n  font-size: 18px;\n  font-weight: 100;\n  padding: 20px;\n  margin: -30px -30px 30px -30px;\n}\n\n.id1 input[type=text],\n.id1 input[type=email],\n.id1 input[type=password],\n.form--8 select {\n  box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  outline: none;\n  display: block;\n  width: 100%;\n  padding: 5px;\n  border: none;\n  border-bottom: 1px solid #ddd;\n  background: transparent;\n  margin-bottom: 10px;\n  font: 16px Arial, Helvetica, sans-serif;\n  height: 30px;\n  margin: 0px;\n}\n\n.id1 button:hover {\n  color: white;\n}\n\n.id1 input[type=button],\n.id1 input[type=submit] {\n  box-shadow: inset 0px 1px 0px 0px #45D6D6;\n  background-color: #2CBBBB;\n  border: 1px solid #27A0A0;\n  display: inline-block;\n  cursor: pointer;\n  color: #FFFFFF;\n  font-family: \"Open Sans Condensed\", sans-serif;\n  font-size: 14px;\n  padding: 8px 18px;\n  text-decoration: none;\n  text-transform: uppercase;\n}\n\n.id1 input[type=button]:hover,\n.id1 input[type=submit]:hover {\n  background: -webkit-gradient(linear, left top, left bottom, color-stop(5%, #34CACA), to(#30C9C9));\n  background: linear-gradient(to bottom, #34CACA 5%, #30C9C9 100%);\n  background-color: #34CACA;\n}\n\nbody {\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n* {\n  box-sizing: border-box;\n}\n\n/* Full-width input fields */\n\ninput[type=text], input[type=password] {\n  width: 100%;\n  padding: 10px;\n  margin: 5px 0 20px 0;\n  display: inline-block;\n  border: none;\n  background: #f1f1f1;\n}\n\n/* Add a background color when the inputs get focus */\n\ninput[type=text]:focus, input[type=password]:focus {\n  background-color: #ddd;\n  outline: none;\n}\n\n/* Set a style for all buttons */\n\nbutton {\n  background-color: #063b61;\n  color: white;\n  padding: 14px 20px;\n  margin: 8px 0;\n  border: none;\n  cursor: pointer;\n  width: 100%;\n  opacity: 0.9;\n}\n\nbutton:hover {\n  opacity: 1;\n}\n\n/* Extra styles for the cancel button */\n\n.cancelbtn {\n  padding: 14px 20px;\n  background-color: #f44336;\n}\n\n/* Float cancel and signup buttons and add an equal width */\n\n.cancelbtn, .signupbtn {\n  float: left;\n  width: 50%;\n}\n\n/* Add padding to container elements */\n\n.container {\n  padding: 10px;\n}\n\n/* The Modal (background) */\n\n.modal {\n  display: none;\n  /* Hidden by default */\n  position: fixed;\n  /* Stay in place */\n  z-index: 1;\n  /* Sit on top */\n  left: 0;\n  top: 0;\n  width: 100%;\n  /* Full width */\n  height: 100%;\n  /* Full height */\n  overflow: auto;\n  /* Enable scroll if needed */\n  background-color: #474e5d;\n  padding-top: 50px;\n}\n\n/* Modal Content/Box */\n\n.modal-content {\n  background-color: #fefefe;\n  margin: 5% auto 15% auto;\n  /* 5% from the top, 15% from the bottom and centered */\n  border: 1px solid #888;\n  width: 80%;\n  /* Could be more or less, depending on screen size */\n}\n\n/* Style the horizontal ruler */\n\nhr {\n  border: 1px solid #f1f1f1;\n  margin-bottom: 25px;\n}\n\n/* The Close Button (x) */\n\n.close {\n  position: absolute;\n  right: 35px;\n  top: 15px;\n  font-size: 40px;\n  font-weight: bold;\n  color: #f1f1f1;\n}\n\n.close:hover,\n.close:focus {\n  color: #f44336;\n  cursor: pointer;\n}\n\n/* Clear floats */\n\n.clearfix::after {\n  content: \"\";\n  clear: both;\n  display: table;\n}\n\n/* Change styles for cancel button and signup button on extra small screens */\n\n@media screen and (max-width: 300px) {\n  .cancelbtn, .signupbtn {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXJlYXMvYmFua2luZy9zZW5kLW1vbmV5L0Q6XFxQcm9qZWN0X01ham9yXFxNU19iYW5raW5nXFxCYW5rQXBwRnJvbnRlbmQvc3JjXFxhcHBcXGFyZWFzXFxiYW5raW5nXFxzZW5kLW1vbmV5XFxzZW5kLW1vbmV5LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcmVhcy9iYW5raW5nL3NlbmQtbW9uZXkvc2VuZC1tb25leS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFPLFdBQUE7QUNFUDs7QURBQTtFQUNFLGtCQUFBO0FDR0Y7O0FEREE7RUFDQywrQ0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsNENBQUE7RUFDQSxpREFBQTtFQUNDLG9EQUFBO0VBQ0EsdUJBQUE7QUNJRjs7QUREQTtFQUNDLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSw4Q0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7QUNJRDs7QURGQTs7OztFQUtDLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSwyQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUNBQUE7RUFDQSxZQUFBO0VBQWMsV0FBQTtBQ0tmOztBREhBO0VBQ0UsWUFBQTtBQ01GOztBREhBOztFQUlDLHlDQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSw4Q0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7QUNNRDs7QURKQTs7RUFFQyxpR0FBQTtFQUFBLGdFQUFBO0VBQ0EseUJBQUE7QUNPRDs7QURMQTtFQUFNLHlDQUFBO0FDU047O0FEUkE7RUFBRyxzQkFBQTtBQ1lIOztBRFZBLDRCQUFBOztBQUNBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDYUY7O0FEVkEscURBQUE7O0FBQ0E7RUFDRSxzQkFBQTtFQUNBLGFBQUE7QUNhRjs7QURWQSxnQ0FBQTs7QUFDQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNhRjs7QURWQTtFQUNFLFVBQUE7QUNhRjs7QURWQSx1Q0FBQTs7QUFDQTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7QUNhRjs7QURWQSwyREFBQTs7QUFDQTtFQUNFLFdBQUE7RUFDQSxVQUFBO0FDYUY7O0FEVkEsc0NBQUE7O0FBQ0E7RUFDRSxhQUFBO0FDYUY7O0FEVkEsMkJBQUE7O0FBQ0E7RUFDRSxhQUFBO0VBQWUsc0JBQUE7RUFDZixlQUFBO0VBQWlCLGtCQUFBO0VBQ2pCLFVBQUE7RUFBWSxlQUFBO0VBQ1osT0FBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQWEsZUFBQTtFQUNiLFlBQUE7RUFBYyxnQkFBQTtFQUNkLGNBQUE7RUFBZ0IsNEJBQUE7RUFDaEIseUJBQUE7RUFDQSxpQkFBQTtBQ21CRjs7QURoQkEsc0JBQUE7O0FBQ0E7RUFDRSx5QkFBQTtFQUNBLHdCQUFBO0VBQTBCLHNEQUFBO0VBQzFCLHNCQUFBO0VBQ0EsVUFBQTtFQUFZLG9EQUFBO0FDcUJkOztBRGxCQSwrQkFBQTs7QUFDQTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7QUNxQkY7O0FEbEJBLHlCQUFBOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNxQkY7O0FEbEJBOztFQUVFLGNBQUE7RUFDQSxlQUFBO0FDcUJGOztBRGxCQSxpQkFBQTs7QUFDQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQ3FCRjs7QURsQkEsNkVBQUE7O0FBQ0E7RUFDRTtJQUNHLFdBQUE7RUNxQkg7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FyZWFzL2Jhbmtpbmcvc2VuZC1tb25leS9zZW5kLW1vbmV5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibGFiZWx7IG1hcmdpbjowcHg7XHJcbn1cclxubGVnZW5ke1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uaWQxe1xyXG5cdGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zIENvbmRlbnNlZCcsIGFyaWFsLCBzYW5zO1xyXG5cdHdpZHRoOiA1MDBweDtcclxuXHRwYWRkaW5nOiAyMHB4O1xyXG5cdGJhY2tncm91bmQ6IGJsdWUoJGNvbG9yOiAjZmYwMGZmKTtcclxuXHRtYXJnaW46IDMwcHggYXV0bztcclxuXHRib3gtc2hhZG93OiAwcHggMHB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjIyKTtcclxuXHQtbW96LWJveC1zaGFkb3c6IDBweCAwcHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMjIpO1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogIDBweCAwcHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMjIpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlXHJcblxyXG59XHJcbi5pZDEgaDJ7XHJcblx0YmFja2dyb3VuZDogIzRENEQ0RDtcclxuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cdGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zIENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XHJcblx0Y29sb3I6ICM3OTc5Nzk7XHJcblx0Zm9udC1zaXplOiAxOHB4O1xyXG5cdGZvbnQtd2VpZ2h0OiAxMDA7XHJcblx0cGFkZGluZzogMjBweDtcclxuXHRtYXJnaW46IC0zMHB4IC0zMHB4IDMwcHggLTMwcHg7XHJcbn1cclxuLmlkMSBpbnB1dFt0eXBlPVwidGV4dFwiXSxcclxuLmlkMSBpbnB1dFt0eXBlPVwiZW1haWxcIl0sXHJcbi5pZDEgaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdLFxyXG4uZm9ybS0tOCBzZWxlY3QgXHJcbntcclxuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHQtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0b3V0bGluZTogbm9uZTtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHR3aWR0aDogMTAwJTtcclxuXHRwYWRkaW5nOiA1cHg7XHJcblx0Ym9yZGVyOiBub25lO1xyXG5cdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xyXG5cdGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG5cdG1hcmdpbi1ib3R0b206IDEwcHg7XHJcblx0Zm9udDogMTZweCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG5cdGhlaWdodDogMzBweDsgbWFyZ2luOjBweDtcclxufVxyXG4uaWQxIGJ1dHRvbjpob3ZlcntcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5pZDEgaW5wdXRbdHlwZT1cImJ1dHRvblwiXSwgXHJcbi5pZDEgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXXtcclxuXHQtbW96LWJveC1zaGFkb3c6IGluc2V0IDBweCAxcHggMHB4IDBweCAjNDVENkQ2O1xyXG5cdC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMHB4IDFweCAwcHggMHB4ICM0NUQ2RDY7XHJcblx0Ym94LXNoYWRvdzogaW5zZXQgMHB4IDFweCAwcHggMHB4ICM0NUQ2RDY7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzJDQkJCQjtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjMjdBMEEwO1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0Y29sb3I6ICNGRkZGRkY7XHJcblx0Zm9udC1mYW1pbHk6ICdPcGVuIFNhbnMgQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcclxuXHRmb250LXNpemU6IDE0cHg7XHJcblx0cGFkZGluZzogOHB4IDE4cHg7XHJcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuLmlkMSBpbnB1dFt0eXBlPVwiYnV0dG9uXCJdOmhvdmVyLCBcclxuLmlkMSBpbnB1dFt0eXBlPVwic3VibWl0XCJdOmhvdmVyIHtcclxuXHRiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMzNENBQ0EgNSUsICMzMEM5QzkgMTAwJSk7XHJcblx0YmFja2dyb3VuZC1jb2xvcjojMzRDQUNBO1xyXG59XHJcbmJvZHkge2ZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO31cclxuKiB7Ym94LXNpemluZzogYm9yZGVyLWJveDt9XHJcblxyXG4vKiBGdWxsLXdpZHRoIGlucHV0IGZpZWxkcyAqL1xyXG5pbnB1dFt0eXBlPXRleHRdLCBpbnB1dFt0eXBlPXBhc3N3b3JkXSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBtYXJnaW46IDVweCAwIDIwcHggMDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQ6ICNmMWYxZjE7XHJcbn1cclxuXHJcbi8qIEFkZCBhIGJhY2tncm91bmQgY29sb3Igd2hlbiB0aGUgaW5wdXRzIGdldCBmb2N1cyAqL1xyXG5pbnB1dFt0eXBlPXRleHRdOmZvY3VzLCBpbnB1dFt0eXBlPXBhc3N3b3JkXTpmb2N1cyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4vKiBTZXQgYSBzdHlsZSBmb3IgYWxsIGJ1dHRvbnMgKi9cclxuYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiMwNjNiNjE7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDE0cHggMjBweDtcclxuICBtYXJnaW46IDhweCAwO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb3BhY2l0eTogMC45O1xyXG59XHJcblxyXG5idXR0b246aG92ZXIge1xyXG4gIG9wYWNpdHk6MTtcclxufVxyXG5cclxuLyogRXh0cmEgc3R5bGVzIGZvciB0aGUgY2FuY2VsIGJ1dHRvbiAqL1xyXG4uY2FuY2VsYnRuIHtcclxuICBwYWRkaW5nOiAxNHB4IDIwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0NDMzNjtcclxufVxyXG5cclxuLyogRmxvYXQgY2FuY2VsIGFuZCBzaWdudXAgYnV0dG9ucyBhbmQgYWRkIGFuIGVxdWFsIHdpZHRoICovXHJcbi5jYW5jZWxidG4sIC5zaWdudXBidG4ge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbi8qIEFkZCBwYWRkaW5nIHRvIGNvbnRhaW5lciBlbGVtZW50cyAqL1xyXG4uY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4vKiBUaGUgTW9kYWwgKGJhY2tncm91bmQpICovXHJcbi5tb2RhbCB7XHJcbiAgZGlzcGxheTogbm9uZTsgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cclxuICBwb3NpdGlvbjogZml4ZWQ7IC8qIFN0YXkgaW4gcGxhY2UgKi9cclxuICB6LWluZGV4OiAxOyAvKiBTaXQgb24gdG9wICovXHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDA7XHJcbiAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKi9cclxuICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0ICovXHJcbiAgb3ZlcmZsb3c6IGF1dG87IC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ3NGU1ZDtcclxuICBwYWRkaW5nLXRvcDogNTBweDtcclxufVxyXG5cclxuLyogTW9kYWwgQ29udGVudC9Cb3ggKi9cclxuLm1vZGFsLWNvbnRlbnQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XHJcbiAgbWFyZ2luOiA1JSBhdXRvIDE1JSBhdXRvOyAvKiA1JSBmcm9tIHRoZSB0b3AsIDE1JSBmcm9tIHRoZSBib3R0b20gYW5kIGNlbnRlcmVkICovXHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcclxuICB3aWR0aDogODAlOyAvKiBDb3VsZCBiZSBtb3JlIG9yIGxlc3MsIGRlcGVuZGluZyBvbiBzY3JlZW4gc2l6ZSAqL1xyXG59XHJcblxyXG4vKiBTdHlsZSB0aGUgaG9yaXpvbnRhbCBydWxlciAqL1xyXG5ociB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2YxZjFmMTtcclxuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG59XHJcbiBcclxuLyogVGhlIENsb3NlIEJ1dHRvbiAoeCkgKi9cclxuLmNsb3NlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDM1cHg7XHJcbiAgdG9wOiAxNXB4O1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogI2YxZjFmMTtcclxufVxyXG5cclxuLmNsb3NlOmhvdmVyLFxyXG4uY2xvc2U6Zm9jdXMge1xyXG4gIGNvbG9yOiAjZjQ0MzM2O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLyogQ2xlYXIgZmxvYXRzICovXHJcbi5jbGVhcmZpeDo6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgY2xlYXI6IGJvdGg7XHJcbiAgZGlzcGxheTogdGFibGU7XHJcbn1cclxuXHJcbi8qIENoYW5nZSBzdHlsZXMgZm9yIGNhbmNlbCBidXR0b24gYW5kIHNpZ251cCBidXR0b24gb24gZXh0cmEgc21hbGwgc2NyZWVucyAqL1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMDBweCkge1xyXG4gIC5jYW5jZWxidG4sIC5zaWdudXBidG4ge1xyXG4gICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxufSIsImxhYmVsIHtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbmxlZ2VuZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmlkMSB7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2FucyBDb25kZW5zZWRcIiwgYXJpYWwsIHNhbnM7XG4gIHdpZHRoOiA1MDBweDtcbiAgcGFkZGluZzogMjBweDtcbiAgYmFja2dyb3VuZDogMjU1O1xuICBtYXJnaW46IDMwcHggYXV0bztcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4yMik7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4yMik7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4yMik7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4uaWQxIGgyIHtcbiAgYmFja2dyb3VuZDogIzRENEQ0RDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zIENvbmRlbnNlZFwiLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogIzc5Nzk3OTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogMTAwO1xuICBwYWRkaW5nOiAyMHB4O1xuICBtYXJnaW46IC0zMHB4IC0zMHB4IDMwcHggLTMwcHg7XG59XG5cbi5pZDEgaW5wdXRbdHlwZT10ZXh0XSxcbi5pZDEgaW5wdXRbdHlwZT1lbWFpbF0sXG4uaWQxIGlucHV0W3R5cGU9cGFzc3dvcmRdLFxuLmZvcm0tLTggc2VsZWN0IHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgZm9udDogMTZweCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBoZWlnaHQ6IDMwcHg7XG4gIG1hcmdpbjogMHB4O1xufVxuXG4uaWQxIGJ1dHRvbjpob3ZlciB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmlkMSBpbnB1dFt0eXBlPWJ1dHRvbl0sXG4uaWQxIGlucHV0W3R5cGU9c3VibWl0XSB7XG4gIC1tb3otYm94LXNoYWRvdzogaW5zZXQgMHB4IDFweCAwcHggMHB4ICM0NUQ2RDY7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMHB4IDFweCAwcHggMHB4ICM0NUQ2RDY7XG4gIGJveC1zaGFkb3c6IGluc2V0IDBweCAxcHggMHB4IDBweCAjNDVENkQ2O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkNCQkJCO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMjdBMEEwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2FucyBDb25kZW5zZWRcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nOiA4cHggMThweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uaWQxIGlucHV0W3R5cGU9YnV0dG9uXTpob3Zlcixcbi5pZDEgaW5wdXRbdHlwZT1zdWJtaXRdOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzM0Q0FDQSA1JSwgIzMwQzlDOSAxMDAlKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0Q0FDQTtcbn1cblxuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xufVxuXG4qIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLyogRnVsbC13aWR0aCBpbnB1dCBmaWVsZHMgKi9cbmlucHV0W3R5cGU9dGV4dF0sIGlucHV0W3R5cGU9cGFzc3dvcmRdIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbjogNXB4IDAgMjBweCAwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcbn1cblxuLyogQWRkIGEgYmFja2dyb3VuZCBjb2xvciB3aGVuIHRoZSBpbnB1dHMgZ2V0IGZvY3VzICovXG5pbnB1dFt0eXBlPXRleHRdOmZvY3VzLCBpbnB1dFt0eXBlPXBhc3N3b3JkXTpmb2N1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi8qIFNldCBhIHN0eWxlIGZvciBhbGwgYnV0dG9ucyAqL1xuYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA2M2I2MTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxNHB4IDIwcHg7XG4gIG1hcmdpbjogOHB4IDA7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB3aWR0aDogMTAwJTtcbiAgb3BhY2l0eTogMC45O1xufVxuXG5idXR0b246aG92ZXIge1xuICBvcGFjaXR5OiAxO1xufVxuXG4vKiBFeHRyYSBzdHlsZXMgZm9yIHRoZSBjYW5jZWwgYnV0dG9uICovXG4uY2FuY2VsYnRuIHtcbiAgcGFkZGluZzogMTRweCAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ0MzM2O1xufVxuXG4vKiBGbG9hdCBjYW5jZWwgYW5kIHNpZ251cCBidXR0b25zIGFuZCBhZGQgYW4gZXF1YWwgd2lkdGggKi9cbi5jYW5jZWxidG4sIC5zaWdudXBidG4ge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDUwJTtcbn1cblxuLyogQWRkIHBhZGRpbmcgdG8gY29udGFpbmVyIGVsZW1lbnRzICovXG4uY29udGFpbmVyIHtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLyogVGhlIE1vZGFsIChiYWNrZ3JvdW5kKSAqL1xuLm1vZGFsIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cbiAgcG9zaXRpb246IGZpeGVkO1xuICAvKiBTdGF5IGluIHBsYWNlICovXG4gIHotaW5kZXg6IDE7XG4gIC8qIFNpdCBvbiB0b3AgKi9cbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgLyogRnVsbCB3aWR0aCAqL1xuICBoZWlnaHQ6IDEwMCU7XG4gIC8qIEZ1bGwgaGVpZ2h0ICovXG4gIG92ZXJmbG93OiBhdXRvO1xuICAvKiBFbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDc0ZTVkO1xuICBwYWRkaW5nLXRvcDogNTBweDtcbn1cblxuLyogTW9kYWwgQ29udGVudC9Cb3ggKi9cbi5tb2RhbC1jb250ZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcbiAgbWFyZ2luOiA1JSBhdXRvIDE1JSBhdXRvO1xuICAvKiA1JSBmcm9tIHRoZSB0b3AsIDE1JSBmcm9tIHRoZSBib3R0b20gYW5kIGNlbnRlcmVkICovXG4gIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XG4gIHdpZHRoOiA4MCU7XG4gIC8qIENvdWxkIGJlIG1vcmUgb3IgbGVzcywgZGVwZW5kaW5nIG9uIHNjcmVlbiBzaXplICovXG59XG5cbi8qIFN0eWxlIHRoZSBob3Jpem9udGFsIHJ1bGVyICovXG5ociB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmMWYxZjE7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG5cbi8qIFRoZSBDbG9zZSBCdXR0b24gKHgpICovXG4uY2xvc2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAzNXB4O1xuICB0b3A6IDE1cHg7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjZjFmMWYxO1xufVxuXG4uY2xvc2U6aG92ZXIsXG4uY2xvc2U6Zm9jdXMge1xuICBjb2xvcjogI2Y0NDMzNjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4vKiBDbGVhciBmbG9hdHMgKi9cbi5jbGVhcmZpeDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBjbGVhcjogYm90aDtcbiAgZGlzcGxheTogdGFibGU7XG59XG5cbi8qIENoYW5nZSBzdHlsZXMgZm9yIGNhbmNlbCBidXR0b24gYW5kIHNpZ251cCBidXR0b24gb24gZXh0cmEgc21hbGwgc2NyZWVucyAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzAwcHgpIHtcbiAgLmNhbmNlbGJ0biwgLnNpZ251cGJ0biB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/areas/banking/send-money/send-money.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/areas/banking/send-money/send-money.component.ts ***!
  \******************************************************************/
/*! exports provided: SendMoneyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendMoneyComponent", function() { return SendMoneyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_banking_banking_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/banking/banking.service */ "./src/app/services/banking/banking.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _services_logout_logout_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/logout/logout.service */ "./src/app/services/logout/logout.service.ts");






//import Logout from '../../../model/banking/logout';

let SendMoneyComponent = class SendMoneyComponent {
    //log1:Logout
    constructor(fb, router, bankservice, toster, logoutService) {
        this.fb = fb;
        this.router = router;
        this.bankservice = bankservice;
        this.toster = toster;
        this.logoutService = logoutService;
        this.modal1 = true;
        this.modal2 = false;
        this.modal3 = false;
        this.submitted = false;
        this.formdata = {};
    }
    ngOnInit() {
        debugger;
        this.formdata.AccountId = parseInt(localStorage.getItem("accountid"));
        //this.validationcheck();
        this.sendmoneyform = this.fb.group({
            accountno: [null],
            balance1: [null],
            pin: [null]
        });
    }
    validationcheck() {
        this.sendmoneyform = this.fb.group({
            accountno: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            balance1: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            pin: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    get f() { return this.sendmoneyform.controls; }
    Continue() {
        debugger;
        this.submitted = true;
        if (this.sendmoneyform.valid == true) {
            this.formdata.AddBalance = this.sendmoneyform.value.balance1;
            this.formdata.AccountNo = this.sendmoneyform.value.accountno;
            this.formdata.Pin = this.sendmoneyform.value.pin;
            this.bankservice.sendMoney(this.formdata).subscribe(data => {
                if (data == 1) {
                    this.toster.success('Thank you for using our service,for futher information go to transaction history.', ' your money has successfully transferred');
                    this.router.navigate(['dashboard']);
                    this.validationcheck();
                }
                else if (data == -1) {
                    this.toster.error("money can't be sent successfully");
                    this.validationcheck();
                }
                else if (data == -2) {
                    this.toster.error("sender account not found");
                    this.validationcheck();
                }
                else if (data == -3) {
                    this.toster.error("Incorrect Pin");
                    this.validationcheck();
                }
                else {
                    this.toster.error("transaction has failed");
                    this.validationcheck();
                }
            }, err => {
                if (err.status == 400) {
                    this.logoutService.logout();
                }
            });
        }
        this.sendmoneyform.invalid;
        return;
    }
    verifyAccount(value) {
        debugger;
        if (value != null && value != undefined) {
            this.formdata.AccountNo = value;
            this.bankservice.verifyAccount(this.formdata).subscribe(data => {
                debugger;
                if (data == 1) { //account no.found or verified 
                }
                else if (data == -1) { //account no.found or not verified 
                    this.toster.error("not a averified one");
                }
                else {
                    this.toster.error("Account no.doesn't exist");
                    this.validationcheck();
                }
            }, err => {
                console.log(err);
            });
        }
    }
    verifyBalance(balance) {
        debugger;
        if (balance.toString() != "" && balance != undefined) {
            this.formdata.AddBalance = balance;
            this.bankservice.verifyBalance(this.formdata).subscribe(data => {
                debugger;
                if (data == 1) {
                }
                else {
                    this.toster.error("Balance is not sufficient");
                    this.validationcheck();
                }
            }, err => {
                console.log(err);
            });
        }
    }
};
SendMoneyComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_services_banking_banking_service__WEBPACK_IMPORTED_MODULE_4__["BankingService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
    { type: _services_logout_logout_service__WEBPACK_IMPORTED_MODULE_6__["LogoutService"] }
];
SendMoneyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-send-money',
        template: __webpack_require__(/*! raw-loader!./send-money.component.html */ "./node_modules/raw-loader/index.js!./src/app/areas/banking/send-money/send-money.component.html"),
        styles: [__webpack_require__(/*! ./send-money.component.scss */ "./src/app/areas/banking/send-money/send-money.component.scss")]
    })
], SendMoneyComponent);



/***/ }),

/***/ "./src/app/areas/banking/transaction-history/transaction-history.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/areas/banking/transaction-history/transaction-history.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content-block {\n  margin-left: 250px;\n  padding-right: 15px;\n  padding-top: 70px;\n}\n\n.content-block .table th {\n  background: #2a4b7d;\n  color: #fff;\n  font-size: 14px;\n  padding: 12px 15px;\n}\n\n.content-block .table td {\n  font-size: 14px;\n  color: #555;\n  padding: 12px 15px;\n}\n\nlabel {\n  margin: 0px;\n}\n\nlegend {\n  text-align: center;\n}\n\n.page-title {\n  padding-top: 14px;\n  margin-bottom: -14px;\n}\n\n.page-title h3 {\n  font-size: 24px;\n  margin-bottom: 0px;\n  color: #2a4b7d;\n}\n\n.id1 {\n  font-family: \"Open Sans Condensed\", arial, sans;\n  width: 100%;\n  padding: 20px;\n  background: 255;\n  margin: 30px auto;\n  background: #fff;\n  box-shadow: 0px 0px 5px 0px #ccc;\n}\n\n.id1 button:hover {\n  color: white;\n}\n\n.id1 h2 {\n  background: #4D4D4D;\n  text-transform: uppercase;\n  font-family: \"Open Sans Condensed\", sans-serif;\n  color: #797979;\n  font-size: 18px;\n  font-weight: 100;\n  padding: 20px;\n  margin: -30px -30px 30px -30px;\n}\n\n.id1 input[type=text],\n.id1 input[type=email],\n.id1 input[type=password],\n.form--8 select {\n  box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  outline: none;\n  display: block;\n  width: 100%;\n  padding: 5px;\n  border: none;\n  border-bottom: 1px solid #ddd;\n  background: transparent;\n  margin-bottom: 10px;\n  font: 16px Arial, Helvetica, sans-serif;\n  height: 30px;\n  margin: 0px;\n}\n\n.id1 input[type=button],\n.id1 input[type=submit] {\n  box-shadow: inset 0px 1px 0px 0px #45D6D6;\n  background-color: #2CBBBB;\n  border: 1px solid #27A0A0;\n  display: inline-block;\n  cursor: pointer;\n  color: #FFFFFF;\n  font-family: \"Open Sans Condensed\", sans-serif;\n  font-size: 14px;\n  padding: 8px 18px;\n  text-decoration: none;\n  text-transform: uppercase;\n}\n\n.id1 input[type=button]:hover,\n.id1 input[type=submit]:hover {\n  background: -webkit-gradient(linear, left top, left bottom, color-stop(5%, #34CACA), to(#30C9C9));\n  background: linear-gradient(to bottom, #34CACA 5%, #30C9C9 100%);\n  background-color: #34CACA;\n}\n\nbutton:hover {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXJlYXMvYmFua2luZy90cmFuc2FjdGlvbi1oaXN0b3J5L0Q6XFxQcm9qZWN0X01ham9yXFxNU19iYW5raW5nXFxCYW5rQXBwRnJvbnRlbmQvc3JjXFxhcHBcXGFyZWFzXFxiYW5raW5nXFx0cmFuc2FjdGlvbi1oaXN0b3J5XFx0cmFuc2FjdGlvbi1oaXN0b3J5LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcmVhcy9iYW5raW5nL3RyYW5zYWN0aW9uLWhpc3RvcnkvdHJhbnNhY3Rpb24taGlzdG9yeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFtQixrQkFBQTtFQUNmLG1CQUFBO0VBQ0EsaUJBQUE7QUNFSjs7QUREQTtFQUEyQixtQkFBQTtFQUFxQixXQUFBO0VBQWEsZUFBQTtFQUFpQixrQkFBQTtBQ1E5RTs7QURQQTtFQUEwQixlQUFBO0VBQWlCLFdBQUE7RUFBWSxrQkFBQTtBQ2F2RDs7QURSQTtFQUFPLFdBQUE7QUNZUDs7QURWQTtFQUNFLGtCQUFBO0FDYUY7O0FEWEE7RUFBYyxpQkFBQTtFQUFtQixvQkFBQTtBQ2dCakM7O0FEZkE7RUFBZ0IsZUFBQTtFQUFnQixrQkFBQTtFQUFvQixjQUFBO0FDcUJwRDs7QURwQkE7RUFDQywrQ0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDRyxnQ0FBQTtBQ3VCSjs7QURyQkE7RUFDQyxZQUFBO0FDd0JEOztBRHJCQTtFQUNDLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSw4Q0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7QUN3QkQ7O0FEdEJBOzs7O0VBS0Msc0JBQUE7RUFDQSw4QkFBQTtFQUNBLDJCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1Q0FBQTtFQUNBLFlBQUE7RUFBYyxXQUFBO0FDeUJmOztBRHJCQTs7RUFJQyx5Q0FBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsOENBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0FDd0JEOztBRHRCQTs7RUFFQyxpR0FBQTtFQUFBLGdFQUFBO0VBQ0EseUJBQUE7QUN5QkQ7O0FEdkJBO0VBQ0ksWUFBQTtBQzBCSiIsImZpbGUiOiJzcmMvYXBwL2FyZWFzL2JhbmtpbmcvdHJhbnNhY3Rpb24taGlzdG9yeS90cmFuc2FjdGlvbi1oaXN0b3J5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQtYmxvY2t7ICAgIG1hcmdpbi1sZWZ0OiAyNTBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogNzBweDt9IFxyXG4uY29udGVudC1ibG9jayAudGFibGUgdGggeyBiYWNrZ3JvdW5kOiAjMmE0YjdkOyBjb2xvcjogI2ZmZjsgZm9udC1zaXplOiAxNHB4OyBwYWRkaW5nOjEycHggMTVweDt9XHJcbi5jb250ZW50LWJsb2NrIC50YWJsZSB0ZHsgZm9udC1zaXplOiAxNHB4OyBjb2xvcjojNTU1OyBwYWRkaW5nOiAxMnB4IDE1cHg7fVxyXG5cclxuXHJcblxyXG5cclxubGFiZWx7IG1hcmdpbjowcHg7XHJcbn1cclxubGVnZW5ke1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ucGFnZS10aXRsZSB7IHBhZGRpbmctdG9wOiAxNHB4OyBtYXJnaW4tYm90dG9tOiAtMTRweDt9XHJcbi5wYWdlLXRpdGxlIGgzeyBmb250LXNpemU6MjRweDsgbWFyZ2luLWJvdHRvbTogMHB4OyBjb2xvcjojMmE0YjdkO31cclxuLmlkMXtcclxuXHRmb250LWZhbWlseTogJ09wZW4gU2FucyBDb25kZW5zZWQnLCBhcmlhbCwgc2FucztcclxuXHR3aWR0aDogMTAwJTtcclxuXHRwYWRkaW5nOiAyMHB4O1xyXG5cdGJhY2tncm91bmQ6IGJsdWUoJGNvbG9yOiAjZmYwMGZmKTtcclxuXHRtYXJnaW46IDMwcHggYXV0bztcclxuXHRiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggMHB4ICNjY2M7XHJcbn1cclxuLmlkMSBidXR0b246aG92ZXJ7XHJcblx0Y29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICBcclxuLmlkMSBoMntcclxuXHRiYWNrZ3JvdW5kOiAjNEQ0RDREO1xyXG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblx0Zm9udC1mYW1pbHk6ICdPcGVuIFNhbnMgQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcclxuXHRjb2xvcjogIzc5Nzk3OTtcclxuXHRmb250LXNpemU6IDE4cHg7XHJcblx0Zm9udC13ZWlnaHQ6IDEwMDtcclxuXHRwYWRkaW5nOiAyMHB4O1xyXG5cdG1hcmdpbjogLTMwcHggLTMwcHggMzBweCAtMzBweDtcclxufVxyXG4uaWQxIGlucHV0W3R5cGU9XCJ0ZXh0XCJdLFxyXG4uaWQxIGlucHV0W3R5cGU9XCJlbWFpbFwiXSxcclxuLmlkMSBpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0sXHJcbi5mb3JtLS04IHNlbGVjdCBcclxue1xyXG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0LXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRvdXRsaW5lOiBub25lO1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdHBhZGRpbmc6IDVweDtcclxuXHRib3JkZXI6IG5vbmU7XHJcblx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XHJcblx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcblx0bWFyZ2luLWJvdHRvbTogMTBweDtcclxuXHRmb250OiAxNnB4IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcblx0aGVpZ2h0OiAzMHB4OyBtYXJnaW46MHB4O1xyXG59XHJcblxyXG5cclxuLmlkMSBpbnB1dFt0eXBlPVwiYnV0dG9uXCJdLCBcclxuLmlkMSBpbnB1dFt0eXBlPVwic3VibWl0XCJde1xyXG5cdC1tb3otYm94LXNoYWRvdzogaW5zZXQgMHB4IDFweCAwcHggMHB4ICM0NUQ2RDY7XHJcblx0LXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwcHggMXB4IDBweCAwcHggIzQ1RDZENjtcclxuXHRib3gtc2hhZG93OiBpbnNldCAwcHggMXB4IDBweCAwcHggIzQ1RDZENjtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMkNCQkJCO1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICMyN0EwQTA7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuXHRjb2xvcjogI0ZGRkZGRjtcclxuXHRmb250LWZhbWlseTogJ09wZW4gU2FucyBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xyXG5cdGZvbnQtc2l6ZTogMTRweDtcclxuXHRwYWRkaW5nOiA4cHggMThweDtcclxuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG4uaWQxIGlucHV0W3R5cGU9XCJidXR0b25cIl06aG92ZXIsIFxyXG4uaWQxIGlucHV0W3R5cGU9XCJzdWJtaXRcIl06aG92ZXIge1xyXG5cdGJhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzM0Q0FDQSA1JSwgIzMwQzlDOSAxMDAlKTtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiMzNENBQ0E7XHJcbn1cclxuYnV0dG9uOmhvdmVyIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4iLCIuY29udGVudC1ibG9jayB7XG4gIG1hcmdpbi1sZWZ0OiAyNTBweDtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgcGFkZGluZy10b3A6IDcwcHg7XG59XG5cbi5jb250ZW50LWJsb2NrIC50YWJsZSB0aCB7XG4gIGJhY2tncm91bmQ6ICMyYTRiN2Q7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmc6IDEycHggMTVweDtcbn1cblxuLmNvbnRlbnQtYmxvY2sgLnRhYmxlIHRkIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzU1NTtcbiAgcGFkZGluZzogMTJweCAxNXB4O1xufVxuXG5sYWJlbCB7XG4gIG1hcmdpbjogMHB4O1xufVxuXG5sZWdlbmQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5wYWdlLXRpdGxlIHtcbiAgcGFkZGluZy10b3A6IDE0cHg7XG4gIG1hcmdpbi1ib3R0b206IC0xNHB4O1xufVxuXG4ucGFnZS10aXRsZSBoMyB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBjb2xvcjogIzJhNGI3ZDtcbn1cblxuLmlkMSB7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2FucyBDb25kZW5zZWRcIiwgYXJpYWwsIHNhbnM7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAyMHB4O1xuICBiYWNrZ3JvdW5kOiAyNTU7XG4gIG1hcmdpbjogMzBweCBhdXRvO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDVweCAwcHggI2NjYztcbn1cblxuLmlkMSBidXR0b246aG92ZXIge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5pZDEgaDIge1xuICBiYWNrZ3JvdW5kOiAjNEQ0RDREO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnMgQ29uZGVuc2VkXCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjNzk3OTc5O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIG1hcmdpbjogLTMwcHggLTMwcHggMzBweCAtMzBweDtcbn1cblxuLmlkMSBpbnB1dFt0eXBlPXRleHRdLFxuLmlkMSBpbnB1dFt0eXBlPWVtYWlsXSxcbi5pZDEgaW5wdXRbdHlwZT1wYXNzd29yZF0sXG4uZm9ybS0tOCBzZWxlY3Qge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgb3V0bGluZTogbm9uZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBmb250OiAxNnB4IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGhlaWdodDogMzBweDtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbi5pZDEgaW5wdXRbdHlwZT1idXR0b25dLFxuLmlkMSBpbnB1dFt0eXBlPXN1Ym1pdF0ge1xuICAtbW96LWJveC1zaGFkb3c6IGluc2V0IDBweCAxcHggMHB4IDBweCAjNDVENkQ2O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDBweCAxcHggMHB4IDBweCAjNDVENkQ2O1xuICBib3gtc2hhZG93OiBpbnNldCAwcHggMXB4IDBweCAwcHggIzQ1RDZENjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJDQkJCQjtcbiAgYm9yZGVyOiAxcHggc29saWQgIzI3QTBBMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnMgQ29uZGVuc2VkXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZzogOHB4IDE4cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmlkMSBpbnB1dFt0eXBlPWJ1dHRvbl06aG92ZXIsXG4uaWQxIGlucHV0W3R5cGU9c3VibWl0XTpob3ZlciB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMzNENBQ0EgNSUsICMzMEM5QzkgMTAwJSk7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNENBQ0E7XG59XG5cbmJ1dHRvbjpob3ZlciB7XG4gIGNvbG9yOiB3aGl0ZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/areas/banking/transaction-history/transaction-history.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/areas/banking/transaction-history/transaction-history.component.ts ***!
  \************************************************************************************/
/*! exports provided: TransactionHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionHistoryComponent", function() { return TransactionHistoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_banking_banking_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/banking/banking.service */ "./src/app/services/banking/banking.service.ts");
/* harmony import */ var _services_logout_logout_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/logout/logout.service */ "./src/app/services/logout/logout.service.ts");




//import Logout from '../../../model/banking/logout'

let TransactionHistoryComponent = class TransactionHistoryComponent {
    //log1=Logout;
    constructor(route, bankservice, logoutService) {
        this.route = route;
        this.bankservice = bankservice;
        this.logoutService = logoutService;
        this.formdata = [];
    }
    ngOnInit() {
        debugger;
        this.AccountId = parseInt(localStorage.getItem('accountid'));
        this.bankservice.transactionhistory(this.AccountId).subscribe(data => {
            if (data != null) {
                this.formdata.push(data);
                console.log(this.formdata);
            }
        }, err => {
            console.log(err);
            if (err.status == 400) {
                this.logoutService.logout();
            }
            ;
        });
    }
};
TransactionHistoryComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_banking_banking_service__WEBPACK_IMPORTED_MODULE_3__["BankingService"] },
    { type: _services_logout_logout_service__WEBPACK_IMPORTED_MODULE_4__["LogoutService"] }
];
TransactionHistoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-transaction-history',
        template: __webpack_require__(/*! raw-loader!./transaction-history.component.html */ "./node_modules/raw-loader/index.js!./src/app/areas/banking/transaction-history/transaction-history.component.html"),
        styles: [__webpack_require__(/*! ./transaction-history.component.scss */ "./src/app/areas/banking/transaction-history/transaction-history.component.scss")]
    })
], TransactionHistoryComponent);



/***/ }),

/***/ "./src/app/areas/banking/user-order/userorder/userorder.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/areas/banking/user-order/userorder/userorder.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label {\n  margin: 0px;\n}\n\nlegend {\n  text-align: center;\n}\n\n.id1 {\n  font-family: \"Open Sans Condensed\", arial, sans;\n  width: 500px;\n  padding: 20px;\n  background: 255;\n  margin: 30px auto;\n  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.22);\n  -moz-box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.22);\n  -webkit-box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.22);\n  background-color: white;\n}\n\n.id1 h2 {\n  background: #4D4D4D;\n  text-transform: uppercase;\n  font-family: \"Open Sans Condensed\", sans-serif;\n  color: #797979;\n  font-size: 18px;\n  font-weight: 100;\n  padding: 20px;\n  margin: -30px -30px 30px -30px;\n}\n\n.id1 input[type=text],\n.id1 input[type=email],\n.id1 input[type=password],\n.form--8 select {\n  box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  outline: none;\n  display: block;\n  width: 100%;\n  padding: 5px;\n  border: none;\n  border-bottom: 1px solid #ddd;\n  background: transparent;\n  margin-bottom: 10px;\n  font: 16px Arial, Helvetica, sans-serif;\n  height: 30px;\n  margin: 0px;\n}\n\n.id1 input[type=button],\n.id1 input[type=submit] {\n  box-shadow: inset 0px 1px 0px 0px #45D6D6;\n  background-color: #2CBBBB;\n  border: 1px solid #27A0A0;\n  display: inline-block;\n  cursor: pointer;\n  color: #FFFFFF;\n  font-family: \"Open Sans Condensed\", sans-serif;\n  font-size: 14px;\n  padding: 8px 18px;\n  text-decoration: none;\n  text-transform: uppercase;\n}\n\n.id1 input[type=button]:hover,\n.id1 input[type=submit]:hover {\n  background: -webkit-gradient(linear, left top, left bottom, color-stop(5%, #34CACA), to(#30C9C9));\n  background: linear-gradient(to bottom, #34CACA 5%, #30C9C9 100%);\n  background-color: #34CACA;\n}\n\nbody {\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n* {\n  box-sizing: border-box;\n}\n\n/* Full-width input fields */\n\ninput[type=text], input[type=password] {\n  width: 100%;\n  padding: 10px;\n  margin: 5px 0 20px 0;\n  display: inline-block;\n  border: none;\n  background: #f1f1f1;\n}\n\n/* Add a background color when the inputs get focus */\n\ninput[type=text]:focus, input[type=password]:focus {\n  background-color: #ddd;\n  outline: none;\n}\n\n/* Set a style for all buttons */\n\nbutton {\n  background-color: #063b61;\n  color: white;\n  padding: 14px 20px;\n  margin: 8px 0;\n  border: none;\n  cursor: pointer;\n  width: 100%;\n  opacity: 0.9;\n}\n\nbutton:hover {\n  opacity: 1;\n}\n\n/* Extra styles for the cancel button */\n\n.cancelbtn {\n  padding: 14px 20px;\n  background-color: #f44336;\n}\n\n/* Float cancel and signup buttons and add an equal width */\n\n.cancelbtn, .signupbtn {\n  float: left;\n  width: 50%;\n}\n\n/* Add padding to container elements */\n\n.container {\n  padding: 10px;\n}\n\n/* The Modal (background) */\n\n.modal {\n  display: none;\n  /* Hidden by default */\n  position: fixed;\n  /* Stay in place */\n  z-index: 1;\n  /* Sit on top */\n  left: 0;\n  top: 0;\n  width: 100%;\n  /* Full width */\n  height: 100%;\n  /* Full height */\n  overflow: auto;\n  /* Enable scroll if needed */\n  background-color: #474e5d;\n  padding-top: 50px;\n}\n\n/* Modal Content/Box */\n\n.modal-content {\n  background-color: #fefefe;\n  margin: 5% auto 15% auto;\n  /* 5% from the top, 15% from the bottom and centered */\n  border: 1px solid #888;\n  width: 80%;\n  /* Could be more or less, depending on screen size */\n}\n\n/* Style the horizontal ruler */\n\nhr {\n  border: 1px solid #f1f1f1;\n  margin-bottom: 25px;\n}\n\n/* The Close Button (x) */\n\n.close {\n  position: absolute;\n  right: 35px;\n  top: 15px;\n  font-size: 40px;\n  font-weight: bold;\n  color: #f1f1f1;\n}\n\n.close:hover,\n.close:focus {\n  color: #f44336;\n  cursor: pointer;\n}\n\n/* Clear floats */\n\n.clearfix::after {\n  content: \"\";\n  clear: both;\n  display: table;\n}\n\n/* Change styles for cancel button and signup button on extra small screens */\n\n@media screen and (max-width: 300px) {\n  .cancelbtn, .signupbtn {\n    width: 100%;\n  }\n}\n\n.id1 button:hover {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXJlYXMvYmFua2luZy91c2VyLW9yZGVyL3VzZXJvcmRlci9EOlxcUHJvamVjdF9NYWpvclxcTVNfYmFua2luZ1xcQmFua0FwcEZyb250ZW5kL3NyY1xcYXBwXFxhcmVhc1xcYmFua2luZ1xcdXNlci1vcmRlclxcdXNlcm9yZGVyXFx1c2Vyb3JkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FyZWFzL2JhbmtpbmcvdXNlci1vcmRlci91c2Vyb3JkZXIvdXNlcm9yZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQU8sV0FBQTtBQ0VQOztBREFBO0VBQ0Usa0JBQUE7QUNHRjs7QUREQTtFQUNDLCtDQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSw0Q0FBQTtFQUNBLGlEQUFBO0VBQ0Msb0RBQUE7RUFDQSx1QkFBQTtBQ0lGOztBRERBO0VBQ0MsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLDhDQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtBQ0lEOztBREZBOzs7O0VBS0Msc0JBQUE7RUFDQSw4QkFBQTtFQUNBLDJCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1Q0FBQTtFQUNBLFlBQUE7RUFBYyxXQUFBO0FDS2Y7O0FEREE7O0VBSUMseUNBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLDhDQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtBQ0lEOztBREZBOztFQUVDLGlHQUFBO0VBQUEsZ0VBQUE7RUFDQSx5QkFBQTtBQ0tEOztBREhBO0VBQU0seUNBQUE7QUNPTjs7QUROQTtFQUFHLHNCQUFBO0FDVUg7O0FEUkEsNEJBQUE7O0FBQ0E7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNXRjs7QURSQSxxREFBQTs7QUFDQTtFQUNFLHNCQUFBO0VBQ0EsYUFBQTtBQ1dGOztBRFJBLGdDQUFBOztBQUNBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ1dGOztBRFJBO0VBQ0UsVUFBQTtBQ1dGOztBRFJBLHVDQUFBOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtBQ1dGOztBRFJBLDJEQUFBOztBQUNBO0VBQ0UsV0FBQTtFQUNBLFVBQUE7QUNXRjs7QURSQSxzQ0FBQTs7QUFDQTtFQUNFLGFBQUE7QUNXRjs7QURSQSwyQkFBQTs7QUFDQTtFQUNFLGFBQUE7RUFBZSxzQkFBQTtFQUNmLGVBQUE7RUFBaUIsa0JBQUE7RUFDakIsVUFBQTtFQUFZLGVBQUE7RUFDWixPQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFBYSxlQUFBO0VBQ2IsWUFBQTtFQUFjLGdCQUFBO0VBQ2QsY0FBQTtFQUFnQiw0QkFBQTtFQUNoQix5QkFBQTtFQUNBLGlCQUFBO0FDaUJGOztBRGRBLHNCQUFBOztBQUNBO0VBQ0UseUJBQUE7RUFDQSx3QkFBQTtFQUEwQixzREFBQTtFQUMxQixzQkFBQTtFQUNBLFVBQUE7RUFBWSxvREFBQTtBQ21CZDs7QURoQkEsK0JBQUE7O0FBQ0E7RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0FDbUJGOztBRGhCQSx5QkFBQTs7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDbUJGOztBRGhCQTs7RUFFRSxjQUFBO0VBQ0EsZUFBQTtBQ21CRjs7QURoQkEsaUJBQUE7O0FBQ0E7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUNtQkY7O0FEaEJBLDZFQUFBOztBQUNBO0VBQ0U7SUFDRyxXQUFBO0VDbUJIO0FBQ0Y7O0FEakJBO0VBQ0UsWUFBQTtBQ21CRiIsImZpbGUiOiJzcmMvYXBwL2FyZWFzL2JhbmtpbmcvdXNlci1vcmRlci91c2Vyb3JkZXIvdXNlcm9yZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibGFiZWx7IG1hcmdpbjowcHg7XHJcbn1cclxubGVnZW5ke1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uaWQxe1xyXG5cdGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zIENvbmRlbnNlZCcsIGFyaWFsLCBzYW5zO1xyXG5cdHdpZHRoOiA1MDBweDtcclxuXHRwYWRkaW5nOiAyMHB4O1xyXG5cdGJhY2tncm91bmQ6IGJsdWUoJGNvbG9yOiAjZmYwMGZmKTtcclxuXHRtYXJnaW46IDMwcHggYXV0bztcclxuXHRib3gtc2hhZG93OiAwcHggMHB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjIyKTtcclxuXHQtbW96LWJveC1zaGFkb3c6IDBweCAwcHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMjIpO1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogIDBweCAwcHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMjIpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlXHJcblxyXG59XHJcbi5pZDEgaDJ7XHJcblx0YmFja2dyb3VuZDogIzRENEQ0RDtcclxuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cdGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zIENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XHJcblx0Y29sb3I6ICM3OTc5Nzk7XHJcblx0Zm9udC1zaXplOiAxOHB4O1xyXG5cdGZvbnQtd2VpZ2h0OiAxMDA7XHJcblx0cGFkZGluZzogMjBweDtcclxuXHRtYXJnaW46IC0zMHB4IC0zMHB4IDMwcHggLTMwcHg7XHJcbn1cclxuLmlkMSBpbnB1dFt0eXBlPVwidGV4dFwiXSxcclxuLmlkMSBpbnB1dFt0eXBlPVwiZW1haWxcIl0sXHJcbi5pZDEgaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdLFxyXG4uZm9ybS0tOCBzZWxlY3QgXHJcbntcclxuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHQtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0b3V0bGluZTogbm9uZTtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHR3aWR0aDogMTAwJTtcclxuXHRwYWRkaW5nOiA1cHg7XHJcblx0Ym9yZGVyOiBub25lO1xyXG5cdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xyXG5cdGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG5cdG1hcmdpbi1ib3R0b206IDEwcHg7XHJcblx0Zm9udDogMTZweCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG5cdGhlaWdodDogMzBweDsgbWFyZ2luOjBweDtcclxufVxyXG5cclxuXHJcbi5pZDEgaW5wdXRbdHlwZT1cImJ1dHRvblwiXSwgXHJcbi5pZDEgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXXtcclxuXHQtbW96LWJveC1zaGFkb3c6IGluc2V0IDBweCAxcHggMHB4IDBweCAjNDVENkQ2O1xyXG5cdC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMHB4IDFweCAwcHggMHB4ICM0NUQ2RDY7XHJcblx0Ym94LXNoYWRvdzogaW5zZXQgMHB4IDFweCAwcHggMHB4ICM0NUQ2RDY7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzJDQkJCQjtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjMjdBMEEwO1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0Y29sb3I6ICNGRkZGRkY7XHJcblx0Zm9udC1mYW1pbHk6ICdPcGVuIFNhbnMgQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcclxuXHRmb250LXNpemU6IDE0cHg7XHJcblx0cGFkZGluZzogOHB4IDE4cHg7XHJcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuLmlkMSBpbnB1dFt0eXBlPVwiYnV0dG9uXCJdOmhvdmVyLCBcclxuLmlkMSBpbnB1dFt0eXBlPVwic3VibWl0XCJdOmhvdmVyIHtcclxuXHRiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMzNENBQ0EgNSUsICMzMEM5QzkgMTAwJSk7XHJcblx0YmFja2dyb3VuZC1jb2xvcjojMzRDQUNBO1xyXG59XHJcbmJvZHkge2ZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO31cclxuKiB7Ym94LXNpemluZzogYm9yZGVyLWJveDt9XHJcblxyXG4vKiBGdWxsLXdpZHRoIGlucHV0IGZpZWxkcyAqL1xyXG5pbnB1dFt0eXBlPXRleHRdLCBpbnB1dFt0eXBlPXBhc3N3b3JkXSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBtYXJnaW46IDVweCAwIDIwcHggMDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQ6ICNmMWYxZjE7XHJcbn1cclxuXHJcbi8qIEFkZCBhIGJhY2tncm91bmQgY29sb3Igd2hlbiB0aGUgaW5wdXRzIGdldCBmb2N1cyAqL1xyXG5pbnB1dFt0eXBlPXRleHRdOmZvY3VzLCBpbnB1dFt0eXBlPXBhc3N3b3JkXTpmb2N1cyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4vKiBTZXQgYSBzdHlsZSBmb3IgYWxsIGJ1dHRvbnMgKi9cclxuYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiMwNjNiNjE7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDE0cHggMjBweDtcclxuICBtYXJnaW46IDhweCAwO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb3BhY2l0eTogMC45O1xyXG59XHJcblxyXG5idXR0b246aG92ZXIge1xyXG4gIG9wYWNpdHk6MTtcclxufVxyXG5cclxuLyogRXh0cmEgc3R5bGVzIGZvciB0aGUgY2FuY2VsIGJ1dHRvbiAqL1xyXG4uY2FuY2VsYnRuIHtcclxuICBwYWRkaW5nOiAxNHB4IDIwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0NDMzNjtcclxufVxyXG5cclxuLyogRmxvYXQgY2FuY2VsIGFuZCBzaWdudXAgYnV0dG9ucyBhbmQgYWRkIGFuIGVxdWFsIHdpZHRoICovXHJcbi5jYW5jZWxidG4sIC5zaWdudXBidG4ge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbi8qIEFkZCBwYWRkaW5nIHRvIGNvbnRhaW5lciBlbGVtZW50cyAqL1xyXG4uY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4vKiBUaGUgTW9kYWwgKGJhY2tncm91bmQpICovXHJcbi5tb2RhbCB7XHJcbiAgZGlzcGxheTogbm9uZTsgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cclxuICBwb3NpdGlvbjogZml4ZWQ7IC8qIFN0YXkgaW4gcGxhY2UgKi9cclxuICB6LWluZGV4OiAxOyAvKiBTaXQgb24gdG9wICovXHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDA7XHJcbiAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKi9cclxuICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0ICovXHJcbiAgb3ZlcmZsb3c6IGF1dG87IC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ3NGU1ZDtcclxuICBwYWRkaW5nLXRvcDogNTBweDtcclxufVxyXG5cclxuLyogTW9kYWwgQ29udGVudC9Cb3ggKi9cclxuLm1vZGFsLWNvbnRlbnQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XHJcbiAgbWFyZ2luOiA1JSBhdXRvIDE1JSBhdXRvOyAvKiA1JSBmcm9tIHRoZSB0b3AsIDE1JSBmcm9tIHRoZSBib3R0b20gYW5kIGNlbnRlcmVkICovXHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcclxuICB3aWR0aDogODAlOyAvKiBDb3VsZCBiZSBtb3JlIG9yIGxlc3MsIGRlcGVuZGluZyBvbiBzY3JlZW4gc2l6ZSAqL1xyXG59XHJcblxyXG4vKiBTdHlsZSB0aGUgaG9yaXpvbnRhbCBydWxlciAqL1xyXG5ociB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2YxZjFmMTtcclxuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG59XHJcbiBcclxuLyogVGhlIENsb3NlIEJ1dHRvbiAoeCkgKi9cclxuLmNsb3NlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDM1cHg7XHJcbiAgdG9wOiAxNXB4O1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogI2YxZjFmMTtcclxufVxyXG5cclxuLmNsb3NlOmhvdmVyLFxyXG4uY2xvc2U6Zm9jdXMge1xyXG4gIGNvbG9yOiAjZjQ0MzM2O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLyogQ2xlYXIgZmxvYXRzICovXHJcbi5jbGVhcmZpeDo6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgY2xlYXI6IGJvdGg7XHJcbiAgZGlzcGxheTogdGFibGU7XHJcbn1cclxuXHJcbi8qIENoYW5nZSBzdHlsZXMgZm9yIGNhbmNlbCBidXR0b24gYW5kIHNpZ251cCBidXR0b24gb24gZXh0cmEgc21hbGwgc2NyZWVucyAqL1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMDBweCkge1xyXG4gIC5jYW5jZWxidG4sIC5zaWdudXBidG4ge1xyXG4gICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxufVxyXG4uaWQxIGJ1dHRvbjpob3ZlcntcclxuICBjb2xvcjogd2hpdGU7XHJcbn0iLCJsYWJlbCB7XG4gIG1hcmdpbjogMHB4O1xufVxuXG5sZWdlbmQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pZDEge1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnMgQ29uZGVuc2VkXCIsIGFyaWFsLCBzYW5zO1xuICB3aWR0aDogNTAwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJhY2tncm91bmQ6IDI1NTtcbiAgbWFyZ2luOiAzMHB4IGF1dG87XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMjIpO1xuICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMjIpO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMjIpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLmlkMSBoMiB7XG4gIGJhY2tncm91bmQ6ICM0RDRENEQ7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2FucyBDb25kZW5zZWRcIiwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICM3OTc5Nzk7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgcGFkZGluZzogMjBweDtcbiAgbWFyZ2luOiAtMzBweCAtMzBweCAzMHB4IC0zMHB4O1xufVxuXG4uaWQxIGlucHV0W3R5cGU9dGV4dF0sXG4uaWQxIGlucHV0W3R5cGU9ZW1haWxdLFxuLmlkMSBpbnB1dFt0eXBlPXBhc3N3b3JkXSxcbi5mb3JtLS04IHNlbGVjdCB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBvdXRsaW5lOiBub25lO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGZvbnQ6IDE2cHggQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgaGVpZ2h0OiAzMHB4O1xuICBtYXJnaW46IDBweDtcbn1cblxuLmlkMSBpbnB1dFt0eXBlPWJ1dHRvbl0sXG4uaWQxIGlucHV0W3R5cGU9c3VibWl0XSB7XG4gIC1tb3otYm94LXNoYWRvdzogaW5zZXQgMHB4IDFweCAwcHggMHB4ICM0NUQ2RDY7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMHB4IDFweCAwcHggMHB4ICM0NUQ2RDY7XG4gIGJveC1zaGFkb3c6IGluc2V0IDBweCAxcHggMHB4IDBweCAjNDVENkQ2O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkNCQkJCO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMjdBMEEwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2FucyBDb25kZW5zZWRcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nOiA4cHggMThweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uaWQxIGlucHV0W3R5cGU9YnV0dG9uXTpob3Zlcixcbi5pZDEgaW5wdXRbdHlwZT1zdWJtaXRdOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzM0Q0FDQSA1JSwgIzMwQzlDOSAxMDAlKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0Q0FDQTtcbn1cblxuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xufVxuXG4qIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLyogRnVsbC13aWR0aCBpbnB1dCBmaWVsZHMgKi9cbmlucHV0W3R5cGU9dGV4dF0sIGlucHV0W3R5cGU9cGFzc3dvcmRdIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbjogNXB4IDAgMjBweCAwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcbn1cblxuLyogQWRkIGEgYmFja2dyb3VuZCBjb2xvciB3aGVuIHRoZSBpbnB1dHMgZ2V0IGZvY3VzICovXG5pbnB1dFt0eXBlPXRleHRdOmZvY3VzLCBpbnB1dFt0eXBlPXBhc3N3b3JkXTpmb2N1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi8qIFNldCBhIHN0eWxlIGZvciBhbGwgYnV0dG9ucyAqL1xuYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA2M2I2MTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxNHB4IDIwcHg7XG4gIG1hcmdpbjogOHB4IDA7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB3aWR0aDogMTAwJTtcbiAgb3BhY2l0eTogMC45O1xufVxuXG5idXR0b246aG92ZXIge1xuICBvcGFjaXR5OiAxO1xufVxuXG4vKiBFeHRyYSBzdHlsZXMgZm9yIHRoZSBjYW5jZWwgYnV0dG9uICovXG4uY2FuY2VsYnRuIHtcbiAgcGFkZGluZzogMTRweCAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ0MzM2O1xufVxuXG4vKiBGbG9hdCBjYW5jZWwgYW5kIHNpZ251cCBidXR0b25zIGFuZCBhZGQgYW4gZXF1YWwgd2lkdGggKi9cbi5jYW5jZWxidG4sIC5zaWdudXBidG4ge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDUwJTtcbn1cblxuLyogQWRkIHBhZGRpbmcgdG8gY29udGFpbmVyIGVsZW1lbnRzICovXG4uY29udGFpbmVyIHtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLyogVGhlIE1vZGFsIChiYWNrZ3JvdW5kKSAqL1xuLm1vZGFsIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cbiAgcG9zaXRpb246IGZpeGVkO1xuICAvKiBTdGF5IGluIHBsYWNlICovXG4gIHotaW5kZXg6IDE7XG4gIC8qIFNpdCBvbiB0b3AgKi9cbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgLyogRnVsbCB3aWR0aCAqL1xuICBoZWlnaHQ6IDEwMCU7XG4gIC8qIEZ1bGwgaGVpZ2h0ICovXG4gIG92ZXJmbG93OiBhdXRvO1xuICAvKiBFbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDc0ZTVkO1xuICBwYWRkaW5nLXRvcDogNTBweDtcbn1cblxuLyogTW9kYWwgQ29udGVudC9Cb3ggKi9cbi5tb2RhbC1jb250ZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcbiAgbWFyZ2luOiA1JSBhdXRvIDE1JSBhdXRvO1xuICAvKiA1JSBmcm9tIHRoZSB0b3AsIDE1JSBmcm9tIHRoZSBib3R0b20gYW5kIGNlbnRlcmVkICovXG4gIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XG4gIHdpZHRoOiA4MCU7XG4gIC8qIENvdWxkIGJlIG1vcmUgb3IgbGVzcywgZGVwZW5kaW5nIG9uIHNjcmVlbiBzaXplICovXG59XG5cbi8qIFN0eWxlIHRoZSBob3Jpem9udGFsIHJ1bGVyICovXG5ociB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmMWYxZjE7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG5cbi8qIFRoZSBDbG9zZSBCdXR0b24gKHgpICovXG4uY2xvc2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAzNXB4O1xuICB0b3A6IDE1cHg7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjZjFmMWYxO1xufVxuXG4uY2xvc2U6aG92ZXIsXG4uY2xvc2U6Zm9jdXMge1xuICBjb2xvcjogI2Y0NDMzNjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4vKiBDbGVhciBmbG9hdHMgKi9cbi5jbGVhcmZpeDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBjbGVhcjogYm90aDtcbiAgZGlzcGxheTogdGFibGU7XG59XG5cbi8qIENoYW5nZSBzdHlsZXMgZm9yIGNhbmNlbCBidXR0b24gYW5kIHNpZ251cCBidXR0b24gb24gZXh0cmEgc21hbGwgc2NyZWVucyAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzAwcHgpIHtcbiAgLmNhbmNlbGJ0biwgLnNpZ251cGJ0biB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbi5pZDEgYnV0dG9uOmhvdmVyIHtcbiAgY29sb3I6IHdoaXRlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/areas/banking/user-order/userorder/userorder.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/areas/banking/user-order/userorder/userorder.component.ts ***!
  \***************************************************************************/
/*! exports provided: UserorderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserorderComponent", function() { return UserorderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_banking_banking_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/banking/banking.service */ "./src/app/services/banking/banking.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");






let UserorderComponent = class UserorderComponent {
    constructor(fb, router, bankservice, toster, routers) {
        this.fb = fb;
        this.router = router;
        this.bankservice = bankservice;
        this.toster = toster;
        this.routers = routers;
        this.submitted = false;
        this.formdata = {};
    }
    ngOnInit() {
        debugger;
        this.routers.queryParams.subscribe(params => {
            if (params != undefined) {
                console.log(params);
                this.formdata.Amount = parseInt(params['amount']);
                this.formdata.OrderId = parseInt(params['orderid']);
                // this.formdata.Amount = parseInt(params.get('amount'));
                // this.formdata.OrderId = parseInt(params.get('orderid'));
            }
        });
        this.userorderform = this.fb.group({
            accountno: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            otp: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    get f() { return this.userorderform.controls; }
    verifyAccount(value) {
        debugger;
        if (value != null && value != undefined) {
            this.bankservice.verifyuseraccount(value).subscribe(data => {
                if (data == 'Success') {
                    this.toster.success('OTP has sent to your email', 'please check your email for OTP');
                }
                else {
                    this.toster.error('Account number does not exist', 'please enter a valid account number');
                }
            });
        }
    }
    continue() {
        this.submitted = true;
        if (this.userorderform.valid == true) {
            this.formdata.AccountNo = this.userorderform.value.accountno;
            this.formdata.OTP = this.userorderform.value.otp;
            this.bankservice.userorder(this.formdata).subscribe(data => {
                if (data != null) {
                    this.router.navigate(['']);
                }
            });
        }
    }
};
UserorderComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_services_banking_banking_service__WEBPACK_IMPORTED_MODULE_4__["BankingService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
UserorderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-userorder',
        template: __webpack_require__(/*! raw-loader!./userorder.component.html */ "./node_modules/raw-loader/index.js!./src/app/areas/banking/user-order/userorder/userorder.component.html"),
        styles: [__webpack_require__(/*! ./userorder.component.scss */ "./src/app/areas/banking/user-order/userorder/userorder.component.scss")]
    })
], UserorderComponent);



/***/ }),

/***/ "./src/app/areas/banking/user-order/userorderframe/userorderframe.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/areas/banking/user-order/userorderframe/userorderframe.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".iframe {\n  width: 50%;\n  padding: 15px 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXJlYXMvYmFua2luZy91c2VyLW9yZGVyL3VzZXJvcmRlcmZyYW1lL0Q6XFxQcm9qZWN0X01ham9yXFxNU19iYW5raW5nXFxCYW5rQXBwRnJvbnRlbmQvc3JjXFxhcHBcXGFyZWFzXFxiYW5raW5nXFx1c2VyLW9yZGVyXFx1c2Vyb3JkZXJmcmFtZVxcdXNlcm9yZGVyZnJhbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FyZWFzL2JhbmtpbmcvdXNlci1vcmRlci91c2Vyb3JkZXJmcmFtZS91c2Vyb3JkZXJmcmFtZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvYXJlYXMvYmFua2luZy91c2VyLW9yZGVyL3VzZXJvcmRlcmZyYW1lL3VzZXJvcmRlcmZyYW1lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlmcmFtZXtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDIwcHg7XHJcbn0iLCIuaWZyYW1lIHtcbiAgd2lkdGg6IDUwJTtcbiAgcGFkZGluZzogMTVweCAyMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/areas/banking/user-order/userorderframe/userorderframe.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/areas/banking/user-order/userorderframe/userorderframe.component.ts ***!
  \*************************************************************************************/
/*! exports provided: UserorderframeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserorderframeComponent", function() { return UserorderframeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UserorderframeComponent = class UserorderframeComponent {
    constructor() { }
    ngOnInit() {
    }
};
UserorderframeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-userorderframe',
        template: __webpack_require__(/*! raw-loader!./userorderframe.component.html */ "./node_modules/raw-loader/index.js!./src/app/areas/banking/user-order/userorderframe/userorderframe.component.html"),
        styles: [__webpack_require__(/*! ./userorderframe.component.scss */ "./src/app/areas/banking/user-order/userorderframe/userorderframe.component.scss")]
    })
], UserorderframeComponent);



/***/ }),

/***/ "./src/app/areas/globalpages/global-footer/global-footer.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/areas/globalpages/global-footer/global-footer.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer-big {\n  padding: 45px 0 25px 0;\n}\n\n.footer-big .footer-widget {\n  margin-bottom: 40px;\n}\n\n.footer--light {\n  background: #e7e8ed;\n}\n\n.footer-big .footer-menu ul li a, .footer-big p, .footer-big ul li {\n  color: #898b96;\n}\n\n.footer-menu {\n  padding-left: 48px;\n}\n\n.footer-menu ul li a {\n  font-size: 15px;\n  line-height: 32px;\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n}\n\n.footer-menu ul li a:hover {\n  color: #5867dd;\n}\n\n.footer-menu--1 {\n  width: 100%;\n}\n\n.footer-widget-title {\n  line-height: 42px;\n  margin-bottom: 10px;\n  font-size: 18px;\n}\n\n.mini-footer {\n  background: #192027;\n  text-align: center;\n  padding: 12px 0;\n}\n\n.mini-footer p {\n  margin: 0;\n  line-height: 26px;\n  font-size: 14px;\n  color: #fff;\n  opacity: 0.6;\n}\n\n.mini-footer p a {\n  color: #5867dd;\n}\n\n.mini-footer p a:hover {\n  color: #34bfa3;\n}\n\n.widget-about img {\n  display: block;\n  margin-bottom: 30px;\n}\n\n.widget-about p {\n  font-weight: 400;\n}\n\n.widget-about .contact-details {\n  margin: 30px 0 0 0;\n}\n\n.widget-about .contact-details li {\n  margin-bottom: 10px;\n}\n\n.widget-about .contact-details li:last-child {\n  margin-bottom: 0;\n}\n\n.widget-about .contact-details li span {\n  padding-right: 12px;\n}\n\n.widget-about .contact-details li a {\n  color: #5867dd;\n}\n\na.navbar-brand {\n  color: rgba(0, 0, 0, 0.9);\n  font-weight: 600;\n}\n\n.footer-widget ul, .footer-menu ul {\n  list-style: none;\n  padding: 0px;\n}\n\n.footer-menu li a:hover {\n  color: #28a745 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXJlYXMvZ2xvYmFscGFnZXMvZ2xvYmFsLWZvb3Rlci9EOlxcUHJvamVjdF9NYWpvclxcTVNfYmFua2luZ1xcQmFua0FwcEZyb250ZW5kL3NyY1xcYXBwXFxhcmVhc1xcZ2xvYmFscGFnZXNcXGdsb2JhbC1mb290ZXJcXGdsb2JhbC1mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FyZWFzL2dsb2JhbHBhZ2VzL2dsb2JhbC1mb290ZXIvZ2xvYmFsLWZvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFBO0FDQ0o7O0FEQ0c7RUFDQyxtQkFBQTtBQ0VKOztBREFHO0VBQ0MsbUJBQUE7QUNHSjs7QURERztFQUNDLGNBQUE7QUNJSjs7QURGRztFQUNDLGtCQUFBO0FDS0o7O0FESEc7RUFDQyxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx3QkFBQTtFQUVBLGdCQUFBO0FDTUo7O0FESkc7RUFDQyxjQUFBO0FDT0o7O0FETEc7RUFDQyxXQUFBO0FDUUo7O0FETkc7RUFDQyxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ1NKOztBRFBHO0VBQ0MsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNVSjs7QURSRztFQUNDLFNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFBaUIsV0FBQTtFQUFhLFlBQUE7QUNhbEM7O0FEWEc7RUFDQyxjQUFBO0FDY0o7O0FEWkc7RUFDQyxjQUFBO0FDZUo7O0FEYkc7RUFDQyxjQUFBO0VBQ0EsbUJBQUE7QUNnQko7O0FEZEc7RUFDQyxnQkFBQTtBQ2lCSjs7QURmRztFQUNDLGtCQUFBO0FDa0JKOztBRGhCRztFQUNDLG1CQUFBO0FDbUJKOztBRGpCRztFQUNDLGdCQUFBO0FDb0JKOztBRGxCRztFQUNDLG1CQUFBO0FDcUJKOztBRG5CRztFQUNDLGNBQUE7QUNzQko7O0FEbkJHO0VBQWdCLHlCQUFBO0VBQXVCLGdCQUFBO0FDd0IxQzs7QUR2QkE7RUFBb0MsZ0JBQUE7RUFBa0IsWUFBQTtBQzRCdEQ7O0FEM0JBO0VBQXlCLHlCQUFBO0FDK0J6QiIsImZpbGUiOiJzcmMvYXBwL2FyZWFzL2dsb2JhbHBhZ2VzL2dsb2JhbC1mb290ZXIvZ2xvYmFsLWZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXItYmlnIHtcclxuICAgIHBhZGRpbmc6NDVweCAwIDI1cHggMFxyXG4gICB9XHJcbiAgIC5mb290ZXItYmlnIC5mb290ZXItd2lkZ2V0IHtcclxuICAgIG1hcmdpbi1ib3R0b206NDBweFxyXG4gICB9XHJcbiAgIC5mb290ZXItLWxpZ2h0IHtcclxuICAgIGJhY2tncm91bmQ6I2U3ZThlZFxyXG4gICB9XHJcbiAgIC5mb290ZXItYmlnIC5mb290ZXItbWVudSB1bCBsaSBhLC5mb290ZXItYmlnIHAsLmZvb3Rlci1iaWcgdWwgbGkge1xyXG4gICAgY29sb3I6Izg5OGI5NlxyXG4gICB9XHJcbiAgIC5mb290ZXItbWVudSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6NDhweFxyXG4gICB9XHJcbiAgIC5mb290ZXItbWVudSB1bCBsaSBhIHtcclxuICAgIGZvbnQtc2l6ZToxNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6MzJweDtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjouM3M7XHJcbiAgICAtby10cmFuc2l0aW9uOi4zcztcclxuICAgIHRyYW5zaXRpb246LjNzXHJcbiAgIH1cclxuICAgLmZvb3Rlci1tZW51IHVsIGxpIGE6aG92ZXIge1xyXG4gICAgY29sb3I6IzU4NjdkZFxyXG4gICB9XHJcbiAgIC5mb290ZXItbWVudS0tMSB7XHJcbiAgICB3aWR0aDoxMDAlXHJcbiAgIH1cclxuICAgLmZvb3Rlci13aWRnZXQtdGl0bGUge1xyXG4gICAgbGluZS1oZWlnaHQ6NDJweDtcclxuICAgIG1hcmdpbi1ib3R0b206MTBweDtcclxuICAgIGZvbnQtc2l6ZToxOHB4XHJcbiAgIH1cclxuICAgLm1pbmktZm9vdGVyIHtcclxuICAgIGJhY2tncm91bmQ6IzE5MjAyNztcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgcGFkZGluZzoxMnB4IDA7IFxyXG4gICB9XHJcbiAgIC5taW5pLWZvb3RlciBwIHtcclxuICAgIG1hcmdpbjowO1xyXG4gICAgbGluZS1oZWlnaHQ6MjZweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDsgY29sb3I6I2ZmZjsgIG9wYWNpdHk6MC42O1xyXG4gICB9XHJcbiAgIC5taW5pLWZvb3RlciBwIGEge1xyXG4gICAgY29sb3I6IzU4NjdkZFxyXG4gICB9XHJcbiAgIC5taW5pLWZvb3RlciBwIGE6aG92ZXIge1xyXG4gICAgY29sb3I6IzM0YmZhM1xyXG4gICB9XHJcbiAgIC53aWRnZXQtYWJvdXQgaW1nIHtcclxuICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICBtYXJnaW4tYm90dG9tOjMwcHhcclxuICAgfVxyXG4gICAud2lkZ2V0LWFib3V0IHAge1xyXG4gICAgZm9udC13ZWlnaHQ6NDAwXHJcbiAgIH1cclxuICAgLndpZGdldC1hYm91dCAuY29udGFjdC1kZXRhaWxzIHtcclxuICAgIG1hcmdpbjozMHB4IDAgMCAwXHJcbiAgIH1cclxuICAgLndpZGdldC1hYm91dCAuY29udGFjdC1kZXRhaWxzIGxpIHtcclxuICAgIG1hcmdpbi1ib3R0b206MTBweFxyXG4gICB9XHJcbiAgIC53aWRnZXQtYWJvdXQgLmNvbnRhY3QtZGV0YWlscyBsaTpsYXN0LWNoaWxkIHtcclxuICAgIG1hcmdpbi1ib3R0b206MFxyXG4gICB9XHJcbiAgIC53aWRnZXQtYWJvdXQgLmNvbnRhY3QtZGV0YWlscyBsaSBzcGFuIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6MTJweFxyXG4gICB9XHJcbiAgIC53aWRnZXQtYWJvdXQgLmNvbnRhY3QtZGV0YWlscyBsaSBhIHtcclxuICAgIGNvbG9yOiM1ODY3ZGRcclxuICAgfVxyXG5cclxuICAgYS5uYXZiYXItYnJhbmR7IGNvbG9yOiByZ2JhKDAsMCwwLC45KTsgZm9udC13ZWlnaHQ6NjAwO30gXHJcbi5mb290ZXItd2lkZ2V0IHVsLCAuZm9vdGVyLW1lbnUgdWx7IGxpc3Qtc3R5bGU6IG5vbmU7IHBhZGRpbmc6IDBweDt9XHJcbi5mb290ZXItbWVudSBsaSBhOmhvdmVyeyBjb2xvcjojMjhhNzQ1ICFpbXBvcnRhbnQ7fSIsIi5mb290ZXItYmlnIHtcbiAgcGFkZGluZzogNDVweCAwIDI1cHggMDtcbn1cblxuLmZvb3Rlci1iaWcgLmZvb3Rlci13aWRnZXQge1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xufVxuXG4uZm9vdGVyLS1saWdodCB7XG4gIGJhY2tncm91bmQ6ICNlN2U4ZWQ7XG59XG5cbi5mb290ZXItYmlnIC5mb290ZXItbWVudSB1bCBsaSBhLCAuZm9vdGVyLWJpZyBwLCAuZm9vdGVyLWJpZyB1bCBsaSB7XG4gIGNvbG9yOiAjODk4Yjk2O1xufVxuXG4uZm9vdGVyLW1lbnUge1xuICBwYWRkaW5nLWxlZnQ6IDQ4cHg7XG59XG5cbi5mb290ZXItbWVudSB1bCBsaSBhIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBsaW5lLWhlaWdodDogMzJweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjNzO1xuICAtby10cmFuc2l0aW9uOiAwLjNzO1xuICB0cmFuc2l0aW9uOiAwLjNzO1xufVxuXG4uZm9vdGVyLW1lbnUgdWwgbGkgYTpob3ZlciB7XG4gIGNvbG9yOiAjNTg2N2RkO1xufVxuXG4uZm9vdGVyLW1lbnUtLTEge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmZvb3Rlci13aWRnZXQtdGl0bGUge1xuICBsaW5lLWhlaWdodDogNDJweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4ubWluaS1mb290ZXIge1xuICBiYWNrZ3JvdW5kOiAjMTkyMDI3O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEycHggMDtcbn1cblxuLm1pbmktZm9vdGVyIHAge1xuICBtYXJnaW46IDA7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBvcGFjaXR5OiAwLjY7XG59XG5cbi5taW5pLWZvb3RlciBwIGEge1xuICBjb2xvcjogIzU4NjdkZDtcbn1cblxuLm1pbmktZm9vdGVyIHAgYTpob3ZlciB7XG4gIGNvbG9yOiAjMzRiZmEzO1xufVxuXG4ud2lkZ2V0LWFib3V0IGltZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4ud2lkZ2V0LWFib3V0IHAge1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4ud2lkZ2V0LWFib3V0IC5jb250YWN0LWRldGFpbHMge1xuICBtYXJnaW46IDMwcHggMCAwIDA7XG59XG5cbi53aWRnZXQtYWJvdXQgLmNvbnRhY3QtZGV0YWlscyBsaSB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi53aWRnZXQtYWJvdXQgLmNvbnRhY3QtZGV0YWlscyBsaTpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLndpZGdldC1hYm91dCAuY29udGFjdC1kZXRhaWxzIGxpIHNwYW4ge1xuICBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xufVxuXG4ud2lkZ2V0LWFib3V0IC5jb250YWN0LWRldGFpbHMgbGkgYSB7XG4gIGNvbG9yOiAjNTg2N2RkO1xufVxuXG5hLm5hdmJhci1icmFuZCB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOSk7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5mb290ZXItd2lkZ2V0IHVsLCAuZm9vdGVyLW1lbnUgdWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbi5mb290ZXItbWVudSBsaSBhOmhvdmVyIHtcbiAgY29sb3I6ICMyOGE3NDUgIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/areas/globalpages/global-footer/global-footer.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/areas/globalpages/global-footer/global-footer.component.ts ***!
  \****************************************************************************/
/*! exports provided: GlobalFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalFooterComponent", function() { return GlobalFooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let GlobalFooterComponent = class GlobalFooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
GlobalFooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-global-footer',
        template: __webpack_require__(/*! raw-loader!./global-footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/areas/globalpages/global-footer/global-footer.component.html"),
        styles: [__webpack_require__(/*! ./global-footer.component.scss */ "./src/app/areas/globalpages/global-footer/global-footer.component.scss")]
    })
], GlobalFooterComponent);



/***/ }),

/***/ "./src/app/areas/globalpages/global-header/global-header.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/areas/globalpages/global-header/global-header.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search-container {\n  width: 490px;\n  display: block;\n  margin: 0 auto;\n}\n\ninput#search-bar {\n  margin: 0 auto;\n  width: 100%;\n  height: 45px;\n  border-radius: 5px;\n  padding: 0 20px;\n  font-size: 1rem;\n  border: 1px solid #D0CFCE;\n  outline: none;\n}\n\ninput#search-bar:focus {\n  border: 1px solid #008ABF;\n  -webkit-transition: 0.35s ease;\n  transition: 0.35s ease;\n  color: #008ABF;\n}\n\ninput#search-bar:focus::-webkit-input-placeholder {\n  -webkit-transition: opacity 0.45s ease;\n  transition: opacity 0.45s ease;\n  opacity: 0;\n}\n\ninput#search-bar:focus::-moz-placeholder {\n  -webkit-transition: opacity 0.45s ease;\n  transition: opacity 0.45s ease;\n  opacity: 0;\n}\n\ninput#search-bar:focus:-ms-placeholder {\n  -webkit-transition: opacity 0.45s ease;\n  transition: opacity 0.45s ease;\n  opacity: 0;\n}\n\n.search-icon .fa-search {\n  position: relative;\n  float: right;\n  width: 75px !important;\n  top: -39px;\n  right: -38px;\n  font-size: 30px;\n}\n\n.header-dark {\n  background: black;\n  padding: 10px;\n}\n\n.text-space {\n  text-align: right;\n  padding: 20px;\n  margin: 30px 15px;\n}\n\n.social-links li {\n  margin-right: 10px;\n}\n\n.social-links li img {\n  border-radius: 50%;\n}\n\n.top-sub-links a {\n  color: #28a745;\n}\n\n.navbar {\n  padding: 5px;\n  text-align: right;\n}\n\nli {\n  padding: 10px;\n  text-align: center;\n  color: black;\n  text-decoration: none;\n}\n\nspan {\n  margin: 20px;\n  padding: 20px;\n  display: inline;\n}\n\n.top-links li {\n  margin-right: 20px;\n}\n\n.top-links li a {\n  color: #555;\n}\n\n.navbar-brand {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXJlYXMvZ2xvYmFscGFnZXMvZ2xvYmFsLWhlYWRlci9EOlxcUHJvamVjdF9NYWpvclxcTVNfYmFua2luZ1xcQmFua0FwcEZyb250ZW5kL3NyY1xcYXBwXFxhcmVhc1xcZ2xvYmFscGFnZXNcXGdsb2JhbC1oZWFkZXJcXGdsb2JhbC1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FyZWFzL2dsb2JhbHBhZ2VzL2dsb2JhbC1oZWFkZXIvZ2xvYmFsLWhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVFO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtBQ0NKOztBREFJO0VBQ0UseUJBQUE7RUFDQSw4QkFBQTtFQUFBLHNCQUFBO0VBQ0EsY0FBQTtBQ0VOOztBRERNO0VBQ0Usc0NBQUE7RUFBQSw4QkFBQTtFQUNBLFVBQUE7QUNHUjs7QURETTtFQUNFLHNDQUFBO0VBQUEsOEJBQUE7RUFDQSxVQUFBO0FDR1I7O0FERE07RUFDQyxzQ0FBQTtFQUFBLDhCQUFBO0VBQ0EsVUFBQTtBQ0dQOztBREVFO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNDTjs7QURDRTtFQUNELGlCQUFBO0VBQ0EsYUFBQTtBQ0VEOztBREFFO0VBQ0ksaUJBQUE7RUFDRixhQUFBO0VBQ0EsaUJBQUE7QUNHSjs7QURBQztFQUFrQixrQkFBQTtBQ0luQjs7QURIQztFQUFzQixrQkFBQTtBQ092Qjs7QUROQztFQUFrQixjQUFBO0FDVW5COztBRFJDO0VBQ0csWUFBQTtFQUNBLGlCQUFBO0FDV0o7O0FEVEE7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QUNZSjs7QURWQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQ2FKOztBRFhBO0VBQWUsa0JBQUE7QUNlZjs7QURkQTtFQUFpQixXQUFBO0FDa0JqQjs7QURqQkE7RUFBZSxpQkFBQTtBQ3FCZiIsImZpbGUiOiJzcmMvYXBwL2FyZWFzL2dsb2JhbHBhZ2VzL2dsb2JhbC1oZWFkZXIvZ2xvYmFsLWhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWFyY2gtY29udGFpbmVye1xyXG4gICAgd2lkdGg6IDQ5MHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICB9XHJcbiAgXHJcbiAgaW5wdXQjc2VhcmNoLWJhcntcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRDBDRkNFO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgICY6Zm9jdXN7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDhBQkY7XHJcbiAgICAgIHRyYW5zaXRpb246IDAuMzVzIGVhc2U7XHJcbiAgICAgIGNvbG9yOiAjMDA4QUJGO1xyXG4gICAgICAmOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVye1xyXG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC40NXMgZWFzZTsgXHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgIH1cclxuICAgICAgJjo6LW1vei1wbGFjZWhvbGRlciB7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjQ1cyBlYXNlOyBcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgfVxyXG4gICAgICAmOi1tcy1wbGFjZWhvbGRlciB7XHJcbiAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNDVzIGVhc2U7IFxyXG4gICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgIH0gICAgXHJcbiAgICAgfVxyXG4gICB9XHJcbiAgXHJcbiAgLnNlYXJjaC1pY29uIC5mYS1zZWFyY2h7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICB3aWR0aDogNzVweCAhaW1wb3J0YW50O1xyXG4gICAgICB0b3A6IC0zOXB4O1xyXG4gICAgICByaWdodDogLTM4cHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICB9XHJcbiAgLmhlYWRlci1kYXJre1xyXG4gYmFja2dyb3VuZDogYmxhY2s7XHJcbiBwYWRkaW5nOiAxMHB4O1xyXG4gIH1cclxuICAudGV4dC1zcGFjZXtcclxuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgbWFyZ2luOiAzMHB4IDE1cHg7IFxyXG4gIH1cclxuIFxyXG4gLnNvY2lhbC1saW5rcyBsaXsgbWFyZ2luLXJpZ2h0OjEwcHg7fVxyXG4gLnNvY2lhbC1saW5rcyBsaSBpbWd7IGJvcmRlci1yYWRpdXM6NTAlO31cclxuIC50b3Atc3ViLWxpbmtzIGF7IGNvbG9yOiMyOGE3NDU7fVxyXG5cclxuIC5uYXZiYXJ7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5saXtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuc3BhbntcclxuICAgIG1hcmdpbjogMjBweDtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbn1cclxuLnRvcC1saW5rcyBsaXsgbWFyZ2luLXJpZ2h0OjIwcHg7fVxyXG4udG9wLWxpbmtzIGxpIGF7IGNvbG9yOiAjNTU1O31cclxuLm5hdmJhci1icmFuZHsgZm9udC13ZWlnaHQ6IGJvbGQ7fVxyXG5cclxuICAgIFxyXG4gIiwiLnNlYXJjaC1jb250YWluZXIge1xuICB3aWR0aDogNDkwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuaW5wdXQjc2VhcmNoLWJhciB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0NXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDAgMjBweDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBib3JkZXI6IDFweCBzb2xpZCAjRDBDRkNFO1xuICBvdXRsaW5lOiBub25lO1xufVxuaW5wdXQjc2VhcmNoLWJhcjpmb2N1cyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDhBQkY7XG4gIHRyYW5zaXRpb246IDAuMzVzIGVhc2U7XG4gIGNvbG9yOiAjMDA4QUJGO1xufVxuaW5wdXQjc2VhcmNoLWJhcjpmb2N1czo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC40NXMgZWFzZTtcbiAgb3BhY2l0eTogMDtcbn1cbmlucHV0I3NlYXJjaC1iYXI6Zm9jdXM6Oi1tb3otcGxhY2Vob2xkZXIge1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNDVzIGVhc2U7XG4gIG9wYWNpdHk6IDA7XG59XG5pbnB1dCNzZWFyY2gtYmFyOmZvY3VzOi1tcy1wbGFjZWhvbGRlciB7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC40NXMgZWFzZTtcbiAgb3BhY2l0eTogMDtcbn1cblxuLnNlYXJjaC1pY29uIC5mYS1zZWFyY2gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZsb2F0OiByaWdodDtcbiAgd2lkdGg6IDc1cHggIWltcG9ydGFudDtcbiAgdG9wOiAtMzlweDtcbiAgcmlnaHQ6IC0zOHB4O1xuICBmb250LXNpemU6IDMwcHg7XG59XG5cbi5oZWFkZXItZGFyayB7XG4gIGJhY2tncm91bmQ6IGJsYWNrO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4udGV4dC1zcGFjZSB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBwYWRkaW5nOiAyMHB4O1xuICBtYXJnaW46IDMwcHggMTVweDtcbn1cblxuLnNvY2lhbC1saW5rcyBsaSB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLnNvY2lhbC1saW5rcyBsaSBpbWcge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi50b3Atc3ViLWxpbmtzIGEge1xuICBjb2xvcjogIzI4YTc0NTtcbn1cblxuLm5hdmJhciB7XG4gIHBhZGRpbmc6IDVweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbmxpIHtcbiAgcGFkZGluZzogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogYmxhY2s7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuc3BhbiB7XG4gIG1hcmdpbjogMjBweDtcbiAgcGFkZGluZzogMjBweDtcbiAgZGlzcGxheTogaW5saW5lO1xufVxuXG4udG9wLWxpbmtzIGxpIHtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG4udG9wLWxpbmtzIGxpIGEge1xuICBjb2xvcjogIzU1NTtcbn1cblxuLm5hdmJhci1icmFuZCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/areas/globalpages/global-header/global-header.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/areas/globalpages/global-header/global-header.component.ts ***!
  \****************************************************************************/
/*! exports provided: GlobalHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalHeaderComponent", function() { return GlobalHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let GlobalHeaderComponent = class GlobalHeaderComponent {
    constructor() { }
    ngOnInit() {
    }
};
GlobalHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-global-header',
        template: __webpack_require__(/*! raw-loader!./global-header.component.html */ "./node_modules/raw-loader/index.js!./src/app/areas/globalpages/global-header/global-header.component.html"),
        styles: [__webpack_require__(/*! ./global-header.component.scss */ "./src/app/areas/globalpages/global-header/global-header.component.scss")]
    })
], GlobalHeaderComponent);



/***/ }),

/***/ "./src/app/areas/globalpages/home/home.component.scss":
/*!************************************************************!*\
  !*** ./src/app/areas/globalpages/home/home.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".banner {\n  padding: 210px 0px;\n  position: relative;\n  background: url(\"/assets/images/bank.jpg\");\n  background-size: cover;\n}\n\n.banner:before {\n  position: absolute;\n  content: \"\";\n  left: 0px;\n  top: 0px;\n  bottom: 0px;\n  right: 0px;\n  background: #000;\n  opacity: 0.7;\n}\n\n.showcase .showcase-text {\n  padding: 3rem;\n}\n\n.showcase .showcase-img {\n  min-height: 30rem;\n  background-size: cover;\n}\n\n.masthead h1 {\n  text-align: center;\n  font-size: 40px;\n  color: #fff;\n  margin-bottom: 15px;\n}\n\n.banner p {\n  font-size: 20px;\n  color: #fff;\n  max-width: 700px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.banner .container {\n  max-width: 860px;\n  text-align: center;\n}\n\n.banner .btn {\n  background: #28a745;\n  border-color: #28a745;\n  padding-left: 35px;\n  padding-right: 35px;\n}\n\n@media (min-width: 768px) {\n  header.masthead {\n    padding-top: 12rem;\n    padding-bottom: 12rem;\n  }\n\n  header.masthead h1 {\n    font-size: 3rem;\n  }\n}\n\n@media (min-width: 768px) {\n  .showcase .showcase-text {\n    padding: 7rem;\n  }\n}\n\n.features-icons {\n  padding-top: 7rem;\n  padding-bottom: 7rem;\n}\n\n.features-icons .features-icons-item {\n  max-width: 20rem;\n}\n\n.features-icons .features-icons-item .features-icons-icon {\n  height: 7rem;\n}\n\n.features-icons .features-icons-item .features-icons-icon i {\n  font-size: 4.5rem;\n}\n\n.features-icons .features-icons-item:hover .features-icons-icon i {\n  font-size: 5rem;\n}\n\n.testimonials {\n  padding-top: 7rem;\n  padding-bottom: 7rem;\n}\n\n.testimonials .testimonial-item {\n  max-width: 18rem;\n}\n\n.testimonials .testimonial-item img {\n  max-width: 12rem;\n  box-shadow: 0px 5px 5px 0px #adb5bd;\n}\n\n.call-to-action {\n  position: relative;\n  background-color: #343a40;\n  background: url(\"/assets/images/bank5.jpg\") no-repeat center center;\n  background-size: cover;\n  padding-top: 7rem;\n  padding-bottom: 7rem;\n}\n\n.call-to-action .overlay {\n  position: absolute;\n  background-color: #212529;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  left: 0;\n  opacity: 0.3;\n}\n\nfooter.footer {\n  padding-top: 4rem;\n  padding-bottom: 4rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXJlYXMvZ2xvYmFscGFnZXMvaG9tZS9EOlxcUHJvamVjdF9NYWpvclxcTVNfYmFua2luZ1xcQmFua0FwcEZyb250ZW5kL3NyY1xcYXBwXFxhcmVhc1xcZ2xvYmFscGFnZXNcXGhvbWVcXGhvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FyZWFzL2dsb2JhbHBhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFTLGtCQUFBO0VBQW1CLGtCQUFBO0VBQW9CLDBDQUFBO0VBQTJDLHNCQUFBO0FDSzNGOztBREpBO0VBQWdCLGtCQUFBO0VBQW1CLFdBQUE7RUFBYSxTQUFBO0VBQVUsUUFBQTtFQUFTLFdBQUE7RUFBYSxVQUFBO0VBQVcsZ0JBQUE7RUFBaUIsWUFBQTtBQ2U1Rzs7QURkRTtFQUNFLGFBQUE7QUNpQko7O0FEZEU7RUFDRSxpQkFBQTtFQUNBLHNCQUFBO0FDaUJKOztBRGZFO0VBQWUsa0JBQUE7RUFDYixlQUFBO0VBQWlCLFdBQUE7RUFBWSxtQkFBQTtBQ3FCakM7O0FEbkJBO0VBQVcsZUFBQTtFQUFnQixXQUFBO0VBQWEsZ0JBQUE7RUFBa0IsaUJBQUE7RUFBa0Isa0JBQUE7QUMyQjVFOztBRDFCQTtFQUFvQixnQkFBQTtFQUFrQixrQkFBQTtBQytCdEM7O0FEOUJBO0VBQWEsbUJBQUE7RUFBb0IscUJBQUE7RUFBdUIsa0JBQUE7RUFBbUIsbUJBQUE7QUNxQzNFOztBRHBDRTtFQUNFO0lBQ0Usa0JBQUE7SUFDQSxxQkFBQTtFQ3VDSjs7RURyQ0U7SUFDRSxlQUFBO0VDd0NKO0FBQ0Y7O0FEcENFO0VBQ0U7SUFDRSxhQUFBO0VDc0NKO0FBQ0Y7O0FEbkNFO0VBQ0UsaUJBQUE7RUFDQSxvQkFBQTtBQ3FDSjs7QURsQ0U7RUFDRSxnQkFBQTtBQ3FDSjs7QURsQ0U7RUFDRSxZQUFBO0FDcUNKOztBRGxDRTtFQUNFLGlCQUFBO0FDcUNKOztBRGxDRTtFQUNFLGVBQUE7QUNxQ0o7O0FEbENFO0VBQ0UsaUJBQUE7RUFDQSxvQkFBQTtBQ3FDSjs7QURsQ0U7RUFDRSxnQkFBQTtBQ3FDSjs7QURsQ0U7RUFDRSxnQkFBQTtFQUVBLG1DQUFBO0FDcUNKOztBRGxDRTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxtRUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQ3FDSjs7QURsQ0U7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7QUNxQ0o7O0FEbENFO0VBQ0UsaUJBQUE7RUFDQSxvQkFBQTtBQ3FDSiIsImZpbGUiOiJzcmMvYXBwL2FyZWFzL2dsb2JhbHBhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYW5uZXJ7IHBhZGRpbmc6MjEwcHggMHB4OyBwb3NpdGlvbjogcmVsYXRpdmU7IGJhY2tncm91bmQ6dXJsKFwiL2Fzc2V0cy9pbWFnZXMvYmFuay5qcGdcIik7IGJhY2tncm91bmQtc2l6ZTpjb3ZlcjsgfVxyXG4uYmFubmVyOmJlZm9yZXsgcG9zaXRpb246YWJzb2x1dGU7IGNvbnRlbnQ6IFwiXCI7IGxlZnQ6MHB4OyB0b3A6MHB4OyBib3R0b206IDBweDsgcmlnaHQ6MHB4OyBiYWNrZ3JvdW5kOiMwMDA7IG9wYWNpdHk6MC43O31cclxuICAuc2hvd2Nhc2UgLnNob3djYXNlLXRleHQge1xyXG4gICAgcGFkZGluZzogM3JlbTtcclxuICB9XHJcbiAgXHJcbiAgLnNob3djYXNlIC5zaG93Y2FzZS1pbWcge1xyXG4gICAgbWluLWhlaWdodDogMzByZW07XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIH1cclxuICAubWFzdGhlYWQgaDEgeyB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDQwcHg7IGNvbG9yOiNmZmY7IG1hcmdpbi1ib3R0b206MTVweDtcclxuICB9XHJcbi5iYW5uZXIgcHsgZm9udC1zaXplOjIwcHg7IGNvbG9yOiAjZmZmOyBtYXgtd2lkdGg6IDcwMHB4OyBtYXJnaW4tbGVmdDphdXRvOyBtYXJnaW4tcmlnaHQ6YXV0bzt9XHJcbi5iYW5uZXIgLmNvbnRhaW5lcnsgbWF4LXdpZHRoOiA4NjBweDsgdGV4dC1hbGlnbjogY2VudGVyO31cclxuLmJhbm5lciAuYnRue2JhY2tncm91bmQ6IzI4YTc0NTsgYm9yZGVyLWNvbG9yOiAjMjhhNzQ1OyBwYWRkaW5nLWxlZnQ6MzVweDsgcGFkZGluZy1yaWdodDozNXB4O31cclxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgIGhlYWRlci5tYXN0aGVhZCB7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAxMnJlbTtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDEycmVtO1xyXG4gICAgfVxyXG4gICAgaGVhZGVyLm1hc3RoZWFkIGgxIHtcclxuICAgICAgZm9udC1zaXplOiAzcmVtO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAuc2hvd2Nhc2UgLnNob3djYXNlLXRleHQge1xyXG4gICAgICBwYWRkaW5nOiA3cmVtO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuZmVhdHVyZXMtaWNvbnMge1xyXG4gICAgcGFkZGluZy10b3A6IDdyZW07XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogN3JlbTtcclxuICB9XHJcbiAgXHJcbiAgLmZlYXR1cmVzLWljb25zIC5mZWF0dXJlcy1pY29ucy1pdGVtIHtcclxuICAgIG1heC13aWR0aDogMjByZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5mZWF0dXJlcy1pY29ucyAuZmVhdHVyZXMtaWNvbnMtaXRlbSAuZmVhdHVyZXMtaWNvbnMtaWNvbiB7XHJcbiAgICBoZWlnaHQ6IDdyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5mZWF0dXJlcy1pY29ucyAuZmVhdHVyZXMtaWNvbnMtaXRlbSAuZmVhdHVyZXMtaWNvbnMtaWNvbiBpIHtcclxuICAgIGZvbnQtc2l6ZTogNC41cmVtO1xyXG4gIH1cclxuICBcclxuICAuZmVhdHVyZXMtaWNvbnMgLmZlYXR1cmVzLWljb25zLWl0ZW06aG92ZXIgLmZlYXR1cmVzLWljb25zLWljb24gaSB7XHJcbiAgICBmb250LXNpemU6IDVyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC50ZXN0aW1vbmlhbHMge1xyXG4gICAgcGFkZGluZy10b3A6IDdyZW07XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogN3JlbTtcclxuICB9XHJcbiAgXHJcbiAgLnRlc3RpbW9uaWFscyAudGVzdGltb25pYWwtaXRlbSB7XHJcbiAgICBtYXgtd2lkdGg6IDE4cmVtO1xyXG4gIH1cclxuICBcclxuICAudGVzdGltb25pYWxzIC50ZXN0aW1vbmlhbC1pdGVtIGltZyB7XHJcbiAgICBtYXgtd2lkdGg6IDEycmVtO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggI2FkYjViZDtcclxuICAgIGJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCAjYWRiNWJkO1xyXG4gIH1cclxuICBcclxuICAuY2FsbC10by1hY3Rpb24ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM0M2E0MDtcclxuICAgIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvaW1hZ2VzL2Jhbms1LmpwZ1wiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogN3JlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiA3cmVtO1xyXG4gIH1cclxuICBcclxuICAuY2FsbC10by1hY3Rpb24gLm92ZXJsYXkge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjUyOTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIG9wYWNpdHk6IDAuMztcclxuICB9XHJcbiAgXHJcbiAgZm9vdGVyLmZvb3RlciB7XHJcbiAgICBwYWRkaW5nLXRvcDogNHJlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiA0cmVtO1xyXG4gIH1cclxuICAiLCIuYmFubmVyIHtcbiAgcGFkZGluZzogMjEwcHggMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvaW1hZ2VzL2JhbmsuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4uYmFubmVyOmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogXCJcIjtcbiAgbGVmdDogMHB4O1xuICB0b3A6IDBweDtcbiAgYm90dG9tOiAwcHg7XG4gIHJpZ2h0OiAwcHg7XG4gIGJhY2tncm91bmQ6ICMwMDA7XG4gIG9wYWNpdHk6IDAuNztcbn1cblxuLnNob3djYXNlIC5zaG93Y2FzZS10ZXh0IHtcbiAgcGFkZGluZzogM3JlbTtcbn1cblxuLnNob3djYXNlIC5zaG93Y2FzZS1pbWcge1xuICBtaW4taGVpZ2h0OiAzMHJlbTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLm1hc3RoZWFkIGgxIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDQwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4uYmFubmVyIHAge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXgtd2lkdGg6IDcwMHB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG4uYmFubmVyIC5jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDg2MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5iYW5uZXIgLmJ0biB7XG4gIGJhY2tncm91bmQ6ICMyOGE3NDU7XG4gIGJvcmRlci1jb2xvcjogIzI4YTc0NTtcbiAgcGFkZGluZy1sZWZ0OiAzNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiAzNXB4O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgaGVhZGVyLm1hc3RoZWFkIHtcbiAgICBwYWRkaW5nLXRvcDogMTJyZW07XG4gICAgcGFkZGluZy1ib3R0b206IDEycmVtO1xuICB9XG5cbiAgaGVhZGVyLm1hc3RoZWFkIGgxIHtcbiAgICBmb250LXNpemU6IDNyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAuc2hvd2Nhc2UgLnNob3djYXNlLXRleHQge1xuICAgIHBhZGRpbmc6IDdyZW07XG4gIH1cbn1cbi5mZWF0dXJlcy1pY29ucyB7XG4gIHBhZGRpbmctdG9wOiA3cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogN3JlbTtcbn1cblxuLmZlYXR1cmVzLWljb25zIC5mZWF0dXJlcy1pY29ucy1pdGVtIHtcbiAgbWF4LXdpZHRoOiAyMHJlbTtcbn1cblxuLmZlYXR1cmVzLWljb25zIC5mZWF0dXJlcy1pY29ucy1pdGVtIC5mZWF0dXJlcy1pY29ucy1pY29uIHtcbiAgaGVpZ2h0OiA3cmVtO1xufVxuXG4uZmVhdHVyZXMtaWNvbnMgLmZlYXR1cmVzLWljb25zLWl0ZW0gLmZlYXR1cmVzLWljb25zLWljb24gaSB7XG4gIGZvbnQtc2l6ZTogNC41cmVtO1xufVxuXG4uZmVhdHVyZXMtaWNvbnMgLmZlYXR1cmVzLWljb25zLWl0ZW06aG92ZXIgLmZlYXR1cmVzLWljb25zLWljb24gaSB7XG4gIGZvbnQtc2l6ZTogNXJlbTtcbn1cblxuLnRlc3RpbW9uaWFscyB7XG4gIHBhZGRpbmctdG9wOiA3cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogN3JlbTtcbn1cblxuLnRlc3RpbW9uaWFscyAudGVzdGltb25pYWwtaXRlbSB7XG4gIG1heC13aWR0aDogMThyZW07XG59XG5cbi50ZXN0aW1vbmlhbHMgLnRlc3RpbW9uaWFsLWl0ZW0gaW1nIHtcbiAgbWF4LXdpZHRoOiAxMnJlbTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggI2FkYjViZDtcbiAgYm94LXNoYWRvdzogMHB4IDVweCA1cHggMHB4ICNhZGI1YmQ7XG59XG5cbi5jYWxsLXRvLWFjdGlvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0M2E0MDtcbiAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvYmFuazUuanBnXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBwYWRkaW5nLXRvcDogN3JlbTtcbiAgcGFkZGluZy1ib3R0b206IDdyZW07XG59XG5cbi5jYWxsLXRvLWFjdGlvbiAub3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjUyOTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBvcGFjaXR5OiAwLjM7XG59XG5cbmZvb3Rlci5mb290ZXIge1xuICBwYWRkaW5nLXRvcDogNHJlbTtcbiAgcGFkZGluZy1ib3R0b206IDRyZW07XG59Il19 */"

/***/ }),

/***/ "./src/app/areas/globalpages/home/home.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/areas/globalpages/home/home.component.ts ***!
  \**********************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/areas/globalpages/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/areas/globalpages/home/home.component.scss")]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/guards/anonymous.guard.ts":
/*!*******************************************!*\
  !*** ./src/app/guards/anonymous.guard.ts ***!
  \*******************************************/
/*! exports provided: AnonymousGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnonymousGuard", function() { return AnonymousGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let AnonymousGuard = class AnonymousGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate(route, state) {
        if (localStorage.getItem('authenticationToken') == null) {
            return true;
        }
        else {
            this.router.navigate(['/dashboard']);
            return false;
        }
    }
};
AnonymousGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AnonymousGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AnonymousGuard);



/***/ }),

/***/ "./src/app/guards/authguard.guard.ts":
/*!*******************************************!*\
  !*** ./src/app/guards/authguard.guard.ts ***!
  \*******************************************/
/*! exports provided: AuthguardGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthguardGuard", function() { return AuthguardGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let AuthguardGuard = class AuthguardGuard {
    constructor(routes) {
        this.routes = routes;
    }
    canActivate(route, state) {
        if (localStorage.getItem('authenticationToken') == null || localStorage.getItem('authenticationToken') == '') {
            this.routes.navigate(['/home']);
            return false;
        }
        else {
            return true;
        }
    }
};
AuthguardGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthguardGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthguardGuard);



/***/ }),

/***/ "./src/app/layout/footer/footer/footer.component.scss":
/*!************************************************************!*\
  !*** ./src/app/layout/footer/footer/footer.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar {\n  padding: 5px;\n  text-align: right;\n}\n\nli {\n  padding: 10px;\n  text-align: center;\n  color: black;\n  text-decoration: none;\n}\n\nspan {\n  margin: 20px;\n  padding: 20px;\n  display: inline;\n}\n\n.top-links li {\n  margin-right: 20px;\n}\n\n.top-links li a {\n  color: #555;\n}\n\n.navbar-brand {\n  font-weight: bold;\n}\n\n.footer-area.footer--light {\n  position: fixed;\n  bottom: 0px;\n  left: 200px;\n  right: 0;\n  text-align: center;\n  padding: 15px 30px;\n  background: #e8ebef;\n  color: #61636d;\n}\n\n.footer-area.footer--light p {\n  margin-bottom: 0px;\n  opacity: 0.5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2Zvb3Rlci9mb290ZXIvRDpcXFByb2plY3RfTWFqb3JcXE1TX2JhbmtpbmdcXEJhbmtBcHBGcm9udGVuZC9zcmNcXGFwcFxcbGF5b3V0XFxmb290ZXJcXGZvb3RlclxcZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sYXlvdXQvZm9vdGVyL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURDQTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtBQ0VKOztBREFBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FDR0o7O0FEREE7RUFBZSxrQkFBQTtBQ0tmOztBREpBO0VBQWlCLFdBQUE7QUNRakI7O0FEUEE7RUFBZSxpQkFBQTtBQ1dmOztBRFZBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNhSjs7QURYQTtFQUE4QixrQkFBQTtFQUFvQixZQUFBO0FDZ0JsRCIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9mb290ZXIvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXJ7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5saXtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuc3BhbntcclxuICAgIG1hcmdpbjogMjBweDtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbn1cclxuLnRvcC1saW5rcyBsaXsgbWFyZ2luLXJpZ2h0OjIwcHg7fVxyXG4udG9wLWxpbmtzIGxpIGF7IGNvbG9yOiAjNTU1O31cclxuLm5hdmJhci1icmFuZHsgZm9udC13ZWlnaHQ6IGJvbGQ7fVxyXG4uZm9vdGVyLWFyZWEuZm9vdGVyLS1saWdodHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogMHB4O1xyXG4gICAgbGVmdDogMjAwcHg7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDE1cHggMzBweDtcclxuICAgIGJhY2tncm91bmQ6ICNlOGViZWY7XHJcbiAgICBjb2xvcjogIzYxNjM2ZDtcclxufVxyXG4uZm9vdGVyLWFyZWEuZm9vdGVyLS1saWdodCBweyBtYXJnaW4tYm90dG9tOiAwcHg7IG9wYWNpdHk6IDAuNTt9ICIsIi5uYXZiYXIge1xuICBwYWRkaW5nOiA1cHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG5saSB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IGJsYWNrO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbnNwYW4ge1xuICBtYXJnaW46IDIwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGRpc3BsYXk6IGlubGluZTtcbn1cblxuLnRvcC1saW5rcyBsaSB7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cblxuLnRvcC1saW5rcyBsaSBhIHtcbiAgY29sb3I6ICM1NTU7XG59XG5cbi5uYXZiYXItYnJhbmQge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmZvb3Rlci1hcmVhLmZvb3Rlci0tbGlnaHQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMHB4O1xuICBsZWZ0OiAyMDBweDtcbiAgcmlnaHQ6IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTVweCAzMHB4O1xuICBiYWNrZ3JvdW5kOiAjZThlYmVmO1xuICBjb2xvcjogIzYxNjM2ZDtcbn1cblxuLmZvb3Rlci1hcmVhLmZvb3Rlci0tbGlnaHQgcCB7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgb3BhY2l0eTogMC41O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/layout/footer/footer/footer.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/layout/footer/footer/footer.component.ts ***!
  \**********************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/layout/footer/footer/footer.component.html"),
        styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/layout/footer/footer/footer.component.scss")]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/layout/header/header/header.component.scss":
/*!************************************************************!*\
  !*** ./src/app/layout/header/header/header.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-dark {\n  background: white;\n  box-shadow: 0px 0px 8px 0px #ccc;\n}\n\n.nv-lnk li {\n  margin-left: 35px;\n  padding-top: 8px;\n}\n\n.nv-lnk li a {\n  color: #2a4b7d;\n  font-weight: normal;\n  text-decoration: none;\n}\n\n.header-dark .navbar {\n  color: #000;\n  font-weight: bold;\n  line-height: 37PX;\n}\n\n.navbar-brand {\n  color: black;\n}\n\n.navbar-expand-lg .navbar-nav {\n  margin-bottom: 6px;\n  margin-top: -1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2hlYWRlci9oZWFkZXIvRDpcXFByb2plY3RfTWFqb3JcXE1TX2JhbmtpbmdcXEJhbmtBcHBGcm9udGVuZC9zcmNcXGFwcFxcbGF5b3V0XFxoZWFkZXJcXGhlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sYXlvdXQvaGVhZGVyL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLGdDQUFBO0FDQ0o7O0FES0E7RUFFSSxpQkFBQTtFQUNBLGdCQUFBO0FDSEo7O0FETUE7RUFBYyxjQUFBO0VBQWUsbUJBQUE7RUFBb0IscUJBQUE7QUNBakQ7O0FEQ0E7RUFFSSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREFBO0VBQWdCLFlBQUE7QUNJaEI7O0FERkE7RUFFSSxrQkFBQTtFQUNBLGdCQUFBO0FDSUoiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvaGVhZGVyL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLWRhcmt7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggOHB4IDBweCAjY2NjO1xyXG4gICAgLy8gcG9zaXRpb246IGZpeGVkO1xyXG4gICAgLy8gbGVmdDogMDtcclxuICAgIC8vIHJpZ2h0OiAwO1xyXG4gICAgIH1cclxuXHJcbi5udi1sbmsgbGl7IFxyXG4gICAgXHJcbiAgICBtYXJnaW4tbGVmdDogMzVweDtcclxuICAgIHBhZGRpbmctdG9wOiA4cHg7XHJcbiAgICBcclxufSAgICAgXHJcbi5udi1sbmsgbGkgYSB7Y29sb3I6ICMyYTRiN2Q7Zm9udC13ZWlnaHQ6IG5vcm1hbDt0ZXh0LWRlY29yYXRpb246IG5vbmU7fVxyXG4uaGVhZGVyLWRhcmsgLm5hdmJhcnsgICBcclxuICAgIFxyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzN1BYO31cclxuLm5hdmJhci1icmFuZCB7IGNvbG9yOmJsYWNrO31cclxuXHJcbi5uYXZiYXItZXhwYW5kLWxnIC5uYXZiYXItbmF2IHtcclxuICAgIFxyXG4gICAgbWFyZ2luLWJvdHRvbTogNnB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTFweDtcclxufSIsIi5oZWFkZXItZGFyayB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDhweCAwcHggI2NjYztcbn1cblxuLm52LWxuayBsaSB7XG4gIG1hcmdpbi1sZWZ0OiAzNXB4O1xuICBwYWRkaW5nLXRvcDogOHB4O1xufVxuXG4ubnYtbG5rIGxpIGEge1xuICBjb2xvcjogIzJhNGI3ZDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uaGVhZGVyLWRhcmsgLm5hdmJhciB7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGluZS1oZWlnaHQ6IDM3UFg7XG59XG5cbi5uYXZiYXItYnJhbmQge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5uYXZiYXItZXhwYW5kLWxnIC5uYXZiYXItbmF2IHtcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xuICBtYXJnaW4tdG9wOiAtMXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/layout/header/header/header.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/layout/header/header/header.component.ts ***!
  \**********************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");




let HeaderComponent = class HeaderComponent {
    constructor(router, toaster) {
        this.router = router;
        this.toaster = toaster;
    }
    ngOnInit() {
    }
    logout() {
        localStorage.clear();
        this.router.navigate(['/login']);
        this.toaster.success('please login again');
    }
    changepass() {
        this.router.navigate(['/changepass']);
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/layout/header/header/header.component.html"),
        styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/layout/header/header/header.component.scss")]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/layout/sidebar/sidebar/sidebar.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/layout/sidebar/sidebar/sidebar.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-sidenav-container, mat-sidenav-content, mat-sidenav {\n  height: 100%;\n}\n\n.sd-nav-wrp {\n  margin-left: -14px;\n  margin-right: -14px;\n}\n\n.sd-nav-wrp form {\n  padding-left: 12px;\n  padding-right: 12px;\n}\n\nmat-sidenav {\n  width: 250px;\n}\n\n.sidebar {\n  bottom: 50px;\n}\n\nmain {\n  padding: 10px;\n}\n\n.search-container {\n  width: 100%;\n  display: block;\n  margin: 0 auto;\n}\n\ninput#search-bar {\n  margin: 0 auto;\n  width: 100%;\n  height: 40px;\n  border-radius: 5px;\n  padding: 0 20px;\n  font-size: 1rem;\n  border: 1px solid #D0CFCE;\n  outline: none;\n  /* box-sizing: content-box; */\n  width: 100%;\n}\n\n.search-icon .fa-search {\n  position: relative;\n  float: right;\n  width: 75px !important;\n  top: -39px;\n  right: -38px;\n  font-size: 30px;\n}\n\n.sidebar .nav li a {\n  padding: 12px 15px;\n  display: inline-block;\n  width: 100%;\n  color: white;\n  text-decoration: none;\n}\n\n.sidebar .nav li:hover {\n  background: #213e6b;\n  color: black;\n}\n\n.sidebar {\n  background: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3NpZGViYXIvc2lkZWJhci9EOlxcUHJvamVjdF9NYWpvclxcTVNfYmFua2luZ1xcQmFua0FwcEZyb250ZW5kL3NyY1xcYXBwXFxsYXlvdXRcXHNpZGViYXJcXHNpZGViYXJcXHNpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xheW91dC9zaWRlYmFyL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUNDSjs7QURDQztFQUFhLGtCQUFBO0VBQW9CLG1CQUFBO0FDSWxDOztBREhDO0VBQWtCLGtCQUFBO0VBQW1CLG1CQUFBO0FDUXRDOztBRFBBO0VBQ0ksWUFBQTtBQ1VKOztBRFJDO0VBQ0ksWUFBQTtBQ1dMOztBRFRBO0VBQ0ksYUFBQTtBQ1lKOztBRFRBO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FDWUY7O0FEVEU7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxXQUFBO0FDWUo7O0FEUUU7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ0xOOztBRE9FO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QUNKSjs7QURNRTtFQUVDLG1CQUFBO0VBQ0EsWUFBQTtBQ0pIOztBRE9FO0VBQ0UsaUJBQUE7QUNKSiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9zaWRlYmFyL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1zaWRlbmF2LWNvbnRhaW5lciwgbWF0LXNpZGVuYXYtY29udGVudCwgbWF0LXNpZGVuYXYge1xyXG4gICAgaGVpZ2h0OiAxMDAlOyAgXHJcbn1cclxuIC5zZC1uYXYtd3JweyBtYXJnaW4tbGVmdDogLTE0cHg7IG1hcmdpbi1yaWdodDotMTRweDsgfVxyXG4gLnNkLW5hdi13cnAgZm9ybXsgcGFkZGluZy1sZWZ0OjEycHg7IHBhZGRpbmctcmlnaHQ6MTJweDt9XHJcbm1hdC1zaWRlbmF2IHtcclxuICAgIHdpZHRoOiAyNTBweDsgXHJcbn1cclxuIC5zaWRlYmFye1xyXG4gICAgIGJvdHRvbTogNTBweDtcclxuIH1cclxubWFpbiB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4uc2VhcmNoLWNvbnRhaW5lcntcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW46IDAgYXV0bztcclxuICB9XHJcbiAgXHJcbiAgaW5wdXQjc2VhcmNoLWJhcntcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRDBDRkNFO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIC8qIGJveC1zaXppbmc6IGNvbnRlbnQtYm94OyAqL1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAvLyBvdXRsaW5lOiBub25lO1xyXG4gICAgLy8gJjpmb2N1c3tcclxuICAgIC8vICAgYm9yZGVyOiAxcHggc29saWQgIzAwOEFCRjtcclxuICAgIC8vICAgdHJhbnNpdGlvbjogMC4zNXMgZWFzZTtcclxuICAgIC8vICAgY29sb3I6ICMwMDhBQkY7XHJcbiAgICAvLyAgICY6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXJ7XHJcbiAgICAvLyAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjQ1cyBlYXNlOyBcclxuICAgIC8vICAgICBvcGFjaXR5OiAwO1xyXG4gICAgLy8gICAgfVxyXG4gICAgLy8gICAmOjotbW96LXBsYWNlaG9sZGVyIHtcclxuICAgIC8vICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNDVzIGVhc2U7IFxyXG4gICAgLy8gICAgIG9wYWNpdHk6IDA7XHJcbiAgICAvLyAgICB9XHJcbiAgICAvLyAgICY6LW1zLXBsYWNlaG9sZGVyIHtcclxuICAgIC8vICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC40NXMgZWFzZTsgXHJcbiAgICAvLyAgICBvcGFjaXR5OiAwO1xyXG4gICAgLy8gICAgfSAgICBcclxuICAgfVxyXG4gIFxyXG4gIC5zZWFyY2gtaWNvbiAuZmEtc2VhcmNoe1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgd2lkdGg6IDc1cHggIWltcG9ydGFudDtcclxuICAgICAgdG9wOiAtMzlweDtcclxuICAgICAgcmlnaHQ6IC0zOHB4O1xyXG4gICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgfVxyXG4gIC5zaWRlYmFyIC5uYXYgbGkgYSB7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDE1cHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcbiAgLnNpZGViYXIgLm5hdiBsaTpob3ZlcntcclxuICAgIFxyXG4gICBiYWNrZ3JvdW5kOiMyMTNlNmI7XHJcbiAgIGNvbG9yOiBibGFjaztcclxuICAgXHJcbiAgfVxyXG4gIC5zaWRlYmFye1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgfVxyXG4gICIsIm1hdC1zaWRlbmF2LWNvbnRhaW5lciwgbWF0LXNpZGVuYXYtY29udGVudCwgbWF0LXNpZGVuYXYge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5zZC1uYXYtd3JwIHtcbiAgbWFyZ2luLWxlZnQ6IC0xNHB4O1xuICBtYXJnaW4tcmlnaHQ6IC0xNHB4O1xufVxuXG4uc2QtbmF2LXdycCBmb3JtIHtcbiAgcGFkZGluZy1sZWZ0OiAxMnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xufVxuXG5tYXQtc2lkZW5hdiB7XG4gIHdpZHRoOiAyNTBweDtcbn1cblxuLnNpZGViYXIge1xuICBib3R0b206IDUwcHg7XG59XG5cbm1haW4ge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uc2VhcmNoLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbmlucHV0I3NlYXJjaC1iYXIge1xuICBtYXJnaW46IDAgYXV0bztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAwIDIwcHg7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgI0QwQ0ZDRTtcbiAgb3V0bGluZTogbm9uZTtcbiAgLyogYm94LXNpemluZzogY29udGVudC1ib3g7ICovXG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uc2VhcmNoLWljb24gLmZhLXNlYXJjaCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxvYXQ6IHJpZ2h0O1xuICB3aWR0aDogNzVweCAhaW1wb3J0YW50O1xuICB0b3A6IC0zOXB4O1xuICByaWdodDogLTM4cHg7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cblxuLnNpZGViYXIgLm5hdiBsaSBhIHtcbiAgcGFkZGluZzogMTJweCAxNXB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLnNpZGViYXIgLm5hdiBsaTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMyMTNlNmI7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLnNpZGViYXIge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/layout/sidebar/sidebar/sidebar.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/layout/sidebar/sidebar/sidebar.component.ts ***!
  \*************************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SidebarComponent = class SidebarComponent {
    constructor() { }
    ngOnInit() {
    }
};
SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sidebar',
        template: __webpack_require__(/*! raw-loader!./sidebar.component.html */ "./node_modules/raw-loader/index.js!./src/app/layout/sidebar/sidebar/sidebar.component.html"),
        styles: [__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/layout/sidebar/sidebar/sidebar.component.scss")]
    })
], SidebarComponent);



/***/ }),

/***/ "./src/app/services/Interceptor/interceptor.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/services/Interceptor/interceptor.service.ts ***!
  \*************************************************************/
/*! exports provided: InterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterceptorService", function() { return InterceptorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let InterceptorService = class InterceptorService {
    intercept(req, next) {
        //GET
        if (req.method === 'GET') {
            debugger;
            req = req.clone({
                headers: req.headers
                    .set('Accept', 'Application/json')
                    .append('Access-Control-Allow-Credentials', 'true')
                    .append('Authorization', 'Bearer' + localStorage.getItem('authenticationToken'))
            });
            return next.handle(req);
        }
        //POST
        if (req.method === 'POST') {
            debugger;
            req = req.clone({
                headers: req.headers
                    .append('Authorization', 'Bearer' + localStorage.getItem('authenticationToken'))
            });
            return next.handle(req);
        }
        // PUT
        if (req.method === 'PUT') {
            debugger;
            req = req.clone({
                headers: req.headers
                // .set('Accept', 'application/json')
                //  .append('Content-Type', 'text/plain')
            });
            return next.handle(req);
        }
        // DELETE
        if (req.method === 'DELETE') {
            return next.handle(req);
        }
        // Default
        req = req.clone({
            headers: req.headers
                .set('Accept', 'application/json')
                .append('Access-Control-Allow-Credentials', 'true')
        });
        return next.handle(req);
    }
};
InterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], InterceptorService);



/***/ }),

/***/ "./src/app/services/auth/auth/auth.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/auth/auth/auth.service.ts ***!
  \****************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let AuthService = class AuthService {
    constructor(http) {
        this.http = http;
        this.base_url = "http://localhost:57436/";
    }
    register(register) {
        debugger;
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.base_url + 'api/Bank/PostUserSignUp', register, { headers: headers, responseType: "json" });
    }
    login(login) {
        debugger;
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.base_url + 'api/Bank/PostUserLogin', login, { headers: headers, responseType: "json" });
    }
    verifyOtp(otpverify) {
        debugger;
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.base_url + 'api/Bank/VerifyOTP', otpverify, { headers: headers, responseType: "json" });
    }
    resendOTP(otpverify) {
        debugger;
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.base_url + 'api/Bank/ResendOTP', otpverify, { headers: headers, responseType: "json" });
    }
    verifyEmail(otpverify) {
        debugger;
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.base_url + 'api/Bank/CheckAccAndEmail', otpverify, { headers: headers, responseType: "json" });
    }
    resetpass(forgotpass) {
        debugger;
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.base_url + 'api/Bank/UpdatePassword', forgotpass, { headers: headers, responseType: "json" });
    }
    sendemail(forgotpass) {
        debugger;
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.base_url + 'api/Bank/ForgotPassword', forgotpass, { headers: headers, responseType: "json" });
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "./src/app/services/banking/banking.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/banking/banking.service.ts ***!
  \*****************************************************/
/*! exports provided: BankingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BankingService", function() { return BankingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let BankingService = class BankingService {
    constructor(http) {
        this.http = http;
        this.base_url = "http://localhost:57436/";
    }
    detail(accountid) {
        debugger;
        return this.http.get(this.base_url + 'api/Bank/CheckDetails?AccountId=' + accountid);
    }
    checkBalance(accountid) {
        debugger;
        return this.http.get(this.base_url + 'api/Bank/ShowBalance?AccountId=' + accountid);
    }
    verifyAccount(sendMoney) {
        debugger;
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.base_url + 'api/Bank/CheckAccAndEmail', sendMoney, { headers: headers, responseType: "json" });
    }
    verifyBalance(sendMoney) {
        debugger;
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.append('Content-Type', 'Application/json');
        return this.http.post(this.base_url + 'api/Bank/CheckACCBal', sendMoney, { headers: headers, responseType: "json" });
    }
    sendMoney(send) {
        debugger;
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.append('Content-Type', 'Application/json');
        return this.http.post(this.base_url + 'api/Bank/SendMoney', send, { headers: headers, responseType: "json" });
    }
    // showDetail(accountid:number){
    //   debugger
    //   return this.http.get(this.base_url+'api/Bank/CheckDetails');
    // }
    addMoney(add) {
        debugger;
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.append('Content-Type', 'Application/json');
        return this.http.post(this.base_url + 'api/Bank/AddMoney', add, { headers: headers, responseType: "json" });
    }
    userorder(userorder) {
        debugger;
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.append('Content-Type', 'Application/json');
        return this.http.post(this.base_url + 'api/Bank/CheckoutTransaction', userorder, { headers: headers, responseType: "json" });
    }
    verifyuseraccount(Accountno) {
        debugger;
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.append('Content-Type', 'Application/json');
        return this.http.post(this.base_url + 'api/Bank/CheckAccountandSendOtp?Accountno=' + Accountno, { headers: headers, responseType: "json" });
    }
    transactionhistory(AccountId) {
        debugger;
        return this.http.get(this.base_url + 'api/Bank/TransactionsHistory?AccountId=' + AccountId);
    }
    linkaccount(linkaccount) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.append('Content-Type', 'Application/json');
        return this.http.post(this.base_url + 'api/Bank/LinkBank', linkaccount, { headers: headers, responseType: "json" });
    }
    changepass(changepass) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.append('Content-Type', 'Application/json');
        return this.http.post(this.base_url + 'api/Bank/ChangePassword', changepass, { headers: headers, responseType: "json" });
    }
};
BankingService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
BankingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], BankingService);



/***/ }),

/***/ "./src/app/services/logout/logout.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/logout/logout.service.ts ***!
  \***************************************************/
/*! exports provided: LogoutService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutService", function() { return LogoutService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");




let LogoutService = class LogoutService {
    constructor(router, toaster) {
        this.router = router;
        this.toaster = toaster;
    }
    logout() {
        localStorage.clear();
        this.router.navigate(['/login']);
        this.toaster.error("please login again");
    }
};
LogoutService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }
];
LogoutService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LogoutService);



/***/ }),

/***/ "./src/app/shared/_directives/onlynumber/OnlyNumber.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/_directives/onlynumber/OnlyNumber.ts ***!
  \*************************************************************/
/*! exports provided: OnlyNumber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnlyNumber", function() { return OnlyNumber; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let OnlyNumber = class OnlyNumber {
    constructor(el) {
        this.el = el;
    }
    onKeyDown(event) {
        let e = event;
        if (this.OnlyNumber) {
            if ([46, 8, 9, 27, 13, 110, 190].indexOf(e.keyCode) !== -1 ||
                // Allow: Ctrl+A
                (e.keyCode === 65 && (e.ctrlKey || e.metaKey)) ||
                // Allow: Ctrl+C
                (e.keyCode === 67 && (e.ctrlKey || e.metaKey)) ||
                // Allow: Ctrl+V
                (e.keyCode === 86 && (e.ctrlKey || e.metaKey)) ||
                // Allow: Ctrl+X
                (e.keyCode === 88 && (e.ctrlKey || e.metaKey)) ||
                // Allow: home, end, left, right
                (e.keyCode >= 35 && e.keyCode <= 39)) {
                // let it happen, don't do anything
                return;
            }
            // Ensure that it is a number and stop the keypress
            if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
                e.preventDefault();
            }
        }
    }
};
OnlyNumber.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], OnlyNumber.prototype, "OnlyNumber", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('keydown', ['$event'])
], OnlyNumber.prototype, "onKeyDown", null);
OnlyNumber = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[OnlyNumber]'
    })
], OnlyNumber);



/***/ }),

/***/ "./src/app/shared/_directives/password_must_match/must-match.validator.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/shared/_directives/password_must_match/must-match.validator.module.ts ***!
  \***************************************************************************************/
/*! exports provided: MustMatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MustMatch", function() { return MustMatch; });
// custom validator to check that two fields match
function MustMatch(controlName, matchingControlName) {
    return (formGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];
        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
        }
        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        }
        else {
            matchingControl.setErrors(null);
        }
    };
}


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Project_Major\MS_banking\BankAppFrontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map