import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VendorNewDesignComponent } from './vendor-new-design/vendor-new-design.component';
import { HomeComponent } from './home/home.component';
import { VendorhomeComponent } from './vendorhome/vendorhome.component';
import { FirstComponent } from './first/first.component';
import { SampleComponent } from './sample/sample.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { ApprovedComponent } from './approved/approved.component';
import { OrderComponent } from './order/order.component';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { RatingModule } from 'ngx-bootstrap/rating';
import { RepeatComponent } from './repeat/repeat.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { RepeateddetailsComponent } from './repeateddetails/repeateddetails.component';
import { EditComponent } from './edit/edit.component';
import { SuperadminComponent } from './superadmin/superadmin.component';
import { AdduserComponent } from './adduser/adduser.component';
import { MerchantComponent } from './merchant/merchant.component';
import { AdminComponent } from './admin/admin.component';
import { SupernewdesignComponent } from './supernewdesign/supernewdesign.component';
import { SuperorderComponent } from './superorder/superorder.component';
import { SuperreapetComponent } from './superreapet/superreapet.component';
import { SuperprofileComponent } from './superprofile/superprofile.component';
import { SuperadminprofileComponent } from './superadminprofile/superadminprofile.component';
import { AdminapproveComponent } from './adminapprove/adminapprove.component';
import { PopupComponent } from './popup/popup.component';
import { ApprovedbyadminComponent } from './approvedbyadmin/approvedbyadmin.component';
import { DisapprovedbyadminComponent } from './disapprovedbyadmin/disapprovedbyadmin.component';
import { PlaceorderComponent } from './placeorder/placeorder.component';
import { EditbyadminComponent } from './editbyadmin/editbyadmin.component';
import { OrderdetailsComponent } from './orderdetails/orderdetails.component';
import { SampleDetailsComponent } from './sample-details/sample-details.component';
import { CompletedComponent } from './completed/completed.component';
import { FinalSubmitComponent } from './final-submit/final-submit.component';
import { SuperAdminReapetComponent } from './super-admin-reapet/super-admin-reapet.component';
import { BrodcastComponent } from './brodcast/brodcast.component';
import { SuperAdminOrderHistoryComponent } from './super-admin-order-history/super-admin-order-history.component';
import { SuperAdminUserProfileComponent } from './super-admin-user-profile/super-admin-user-profile.component';
import { SuperAdminApproveCompletedComponent } from './super-admin-approve-completed/super-admin-approve-completed.component';
import { SuperAdminRepeatOrder2Component } from './super-admin-repeat-order2/super-admin-repeat-order2.component';
import { SuperAdminSettingComponent } from './super-admin-setting/super-admin-setting.component';
import { SuperadminSettingBrandComponent } from './superadmin-setting-brand/superadmin-setting-brand.component';
import { SuperAdminAddSeasonsComponent } from './super-admin-add-seasons/super-admin-add-seasons.component';
import { SuperadminSettingCategoriesComponent } from './superadmin-setting-categories/superadmin-setting-categories.component';
import { SuperadminSettingGenderComponent } from './superadmin-setting-gender/superadmin-setting-gender.component';
import { SuperadminSettingSizeComponent } from './superadmin-setting-size/superadmin-setting-size.component';
import { SupperadminOrderplaceMerchantComponent } from './supperadmin-orderplace-merchant/supperadmin-orderplace-merchant.component';
import { SuperAdminEditProfileComponent } from './super-admin-edit-profile/super-admin-edit-profile.component';
import { SuperAdminNotificationComponent } from './super-admin-notification/super-admin-notification.component';
import { SuperadminPaymentReportdateComponent } from './superadmin-payment-reportdate/superadmin-payment-reportdate.component';
import { SuperadminTermandConditionComponent } from './superadmin-termand-condition/superadmin-termand-condition.component';
import { SuperadminPrivacyPolicyComponent } from './superadmin-privacy-policy/superadmin-privacy-policy.component';
import { SuperadminEditReviewComponent } from './superadmin-edit-review/superadmin-edit-review.component';
import { SuperadminRepeatorderHistoryComponent } from './superadmin-repeatorder-history/superadmin-repeatorder-history.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SuperadminRepeatOrder1Component } from './superadmin-repeat-order1/superadmin-repeat-order1.component';
import { AfteradminloginComponent } from './afteradminlogin/afteradminlogin.component';
import { SuperAdminNewdesignComponent } from './super-admin-newdesign/super-admin-newdesign.component';















@NgModule({
  declarations: [
    AppComponent,
    VendorNewDesignComponent,
    HomeComponent,
    VendorhomeComponent,
    FirstComponent,
    SampleComponent,
    LoginComponent,
    ProductsComponent,
    ApprovedComponent,
    OrderComponent,
    OrderDetailComponent,
    RepeatComponent,
    MyprofileComponent,
    HeaderComponent,
    FooterComponent,
    EditprofileComponent,
    RepeateddetailsComponent,
    EditComponent,
    SuperadminComponent,
    AdduserComponent,
    MerchantComponent,
    AdminComponent,
    SupernewdesignComponent,
    SuperorderComponent,
    SuperreapetComponent,
    SuperprofileComponent,
    SuperadminprofileComponent,
    AdminapproveComponent,
    PopupComponent,
    ApprovedbyadminComponent,
    DisapprovedbyadminComponent,
    PlaceorderComponent,
    EditbyadminComponent,
    OrderdetailsComponent,
    SampleDetailsComponent,
    CompletedComponent,
    FinalSubmitComponent,
    SuperAdminReapetComponent,
    BrodcastComponent,
    SuperAdminOrderHistoryComponent,
    

         SuperAdminUserProfileComponent,
               SuperAdminApproveCompletedComponent,
       
               SuperAdminRepeatOrder2Component,
                       SuperAdminSettingComponent,
                       SuperadminSettingBrandComponent,
                       SuperAdminAddSeasonsComponent,
                 
                       SuperadminSettingCategoriesComponent,
                                         SuperadminSettingGenderComponent,
                                         SuperadminSettingSizeComponent,
                                         SupperadminOrderplaceMerchantComponent,
                                         SuperAdminEditProfileComponent,
                                         SuperAdminNotificationComponent,
                                         SuperadminPaymentReportdateComponent,
                                         SuperadminTermandConditionComponent,
                                         SuperadminPrivacyPolicyComponent,
                                         SuperadminEditReviewComponent,
                                         SuperadminRepeatorderHistoryComponent,
                                         SuperadminRepeatOrder1Component,
                                         AfteradminloginComponent,
                                         SuperAdminNewdesignComponent,
                                 
                         
                  
                                      
                                 

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule,
    RatingModule,
    NgbModule,
    

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
