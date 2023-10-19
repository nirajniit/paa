import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VendorNewDesignComponent } from './vendor-new-design/vendor-new-design.component';
import { VendorhomeComponent } from './vendorhome/vendorhome.component';
import { FirstComponent } from './first/first.component';
import { SampleComponent } from './sample/sample.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { ApprovedComponent } from './approved/approved.component';
import { OrderComponent } from './order/order.component';
import { OrderhistoryComponent } from './orderhistory/orderhistory.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { HomeComponent } from './home/home.component';
import { RepeatComponent } from './repeat/repeat.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
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
import { SuperadminRepeatOrder1Component } from './superadmin-repeat-order1/superadmin-repeat-order1.component';
import { AfteradminloginComponent } from './afteradminlogin/afteradminlogin.component';
import { SuperAdminNewdesignComponent } from './super-admin-newdesign/super-admin-newdesign.component';
import { VendorHeaderComponent } from './vendor-header/vendor-header.component';
import { VendorFooterComponent } from './vendor-footer/vendor-footer.component';







const routes: Routes = [
  { path: 'vendor-new-design.component', component: VendorNewDesignComponent },  
  { path: 'vendorhome.component', component: VendorhomeComponent }, 
  { path: 'first.component', component: FirstComponent }, 
  { path: 'sample.component', component: SampleComponent }, 
  { path: 'login.component', component: LoginComponent },
  { path: 'products.component', component: ProductsComponent }, 
  { path: 'approved.component', component: ApprovedComponent },
  { path: 'order.component', component: OrderComponent },
  { path: 'orderhistory.component', component: OrderhistoryComponent }, 
  { path: 'order-detail.component', component: OrderDetailComponent }, 
  { path: 'home.component', component: HomeComponent }, 
  { path: 'repeat.component', component: RepeatComponent }, 
  { path: 'myprofile.component', component: MyprofileComponent }, 
  { path: 'editprofile.component', component: EditprofileComponent },
  { path: 'repeateddetails.component', component: RepeateddetailsComponent }, 
  { path: 'edit.component', component: EditComponent }, 
  { path: 'superadmin.component', component: SuperadminComponent },
  { path: 'adduser.component', component: AdduserComponent }, 
  { path: 'merchant.component', component: MerchantComponent }, 
  { path: 'admin.component', component: AdminComponent }, 
  { path: 'supernewdesign.component', component: SupernewdesignComponent }, 
  { path: 'superorder.component', component: SuperorderComponent }, 
  { path: 'superreapet.component', component: SuperreapetComponent }, 
  { path: 'superprofile.component', component: SuperprofileComponent }, 
  { path: 'superadminprofile.component', component: SuperadminprofileComponent },
  { path: 'adminapprove.component', component: AdminapproveComponent }, 
  { path: 'popup.component', component: PopupComponent }, 
  { path: 'approvedbyadmin.component', component: ApprovedbyadminComponent }, 
  { path: 'disapprovedbyadmin.component', component: DisapprovedbyadminComponent }, 
  { path: 'placeorder.component', component: PlaceorderComponent },
  { path: 'editbyadmin.component', component: EditbyadminComponent },
  { path: 'orderdetails.component', component: OrderdetailsComponent },
  { path: 'sample-details.component', component: SampleDetailsComponent },
  { path: 'completed.component', component: CompletedComponent },
  { path: 'final-submit.component', component: FinalSubmitComponent  },
  { path: 'final-submit.component', component: FinalSubmitComponent  },
  { path: 'brodcast.component', component:BrodcastComponent  },
  { path: 'super-admin-reapet.component', component:SuperAdminReapetComponent },
  { path: 'super-admin-order-history.component', component:SuperAdminOrderHistoryComponent  },
  { path: 'super-admin-user-profile.component', component:SuperAdminUserProfileComponent },
  { path: 'super-admin-approve-completed.component', component:SuperAdminApproveCompletedComponent },
  { path: 'super-admin-repeat-order2.component', component: SuperAdminRepeatOrder2Component },
  { path: 'super-admin-setting.component', component:SuperAdminSettingComponent  },
  { path: 'superadmin-setting-brand.component', component:SuperadminSettingBrandComponent  },
  { path: 'super-admin-add-seasons.component', component:SuperAdminAddSeasonsComponent },
  { path: 'superadmin-setting-categories.component', component:SuperadminSettingCategoriesComponent  },
  { path: 'superadmin-setting-gender.component', component:SuperadminSettingGenderComponent },
  { path: 'superadmin-setting-size.component', component:SuperadminSettingSizeComponent },
  { path: 'supperadmin-orderplace-merchant.component', component:SupperadminOrderplaceMerchantComponent},
  { path: 'super-admin-edit-profile.component', component: SuperAdminEditProfileComponent },
  { path: 'super-admin-notification.component', component: SuperAdminNotificationComponent  },
  { path: 'superadmin-payment-reportdate.component', component: SuperadminPaymentReportdateComponent  },
  { path: 'superadmin-termand-condition.component', component:  SuperadminTermandConditionComponent   },
  { path: 'superadmin-privacy-policy.component', component: SuperadminPrivacyPolicyComponent  },
  { path: 'superadmin-edit-review.component', component:  SuperadminEditReviewComponent },
  { path: 'superadmin-repeatorder-history.component', component: SuperadminRepeatorderHistoryComponent },
  { path: 'superadmin-repeat-order1.component', component:SuperadminRepeatOrder1Component },
  { path: 'afteradminlogin.component', component: AfteradminloginComponent },
  { path: 'super-admin-newdesign.component', component: SuperAdminNewdesignComponent },
  { path: 'vendor-header.component', component: VendorHeaderComponent},
  { path: 'vendor-footer.component', component: VendorFooterComponent},




 








  { path: '**', component: HomeComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
