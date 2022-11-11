import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgxPaginationModule } from 'ngx-pagination';
import { SelectDropDownModule } from 'ngx-select-dropdown';
import { NgxTypedJsModule } from 'ngx-typed-js';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppDownloadComponent } from './components/common/app-download/app-download.component';
import { CategoryComponent } from './components/common/category/category.component';
import { FeaturesComponent } from './components/common/features/features.component';
import { FeedbackStyleOneComponent } from './components/common/feedback-style-one/feedback-style-one.component';
import { FooterStyleOneComponent } from './components/common/footer-style-one/footer-style-one.component';
import { HowItWorksComponent } from './components/common/how-it-works/how-it-works.component';
import { NavbarStyleOneComponent } from './components/common/navbar-style-one/navbar-style-one.component';
import { NavbarStyleTwoComponent } from './components/common/navbar-style-two/navbar-style-two.component';
import { HomeDemoOneComponent } from './components/pages/home-demo-one/home-demo-one.component';
import { HomeoneBannerComponent } from './components/pages/home-demo-one/homeone-banner/homeone-banner.component';
import { HomeoneBlogComponent } from './components/pages/home-demo-one/homeone-blog/homeone-blog.component';
import { HomeoneDestinationsComponent } from './components/pages/home-demo-one/homeone-destinations/homeone-destinations.component';
import { HomeoneListingsComponent } from './components/pages/home-demo-one/homeone-listings/homeone-listings.component';
import { HomeDemoTwoComponent } from './components/pages/home-demo-two/home-demo-two.component';
import { HometwoBannerComponent } from './components/pages/home-demo-two/hometwo-banner/hometwo-banner.component';
import { HometwoBlogComponent } from './components/pages/home-demo-two/hometwo-blog/hometwo-blog.component';
import { HometwoDestinationsComponent } from './components/pages/home-demo-two/hometwo-destinations/hometwo-destinations.component';
import { HometwoEventsComponent } from './components/pages/home-demo-two/hometwo-events/hometwo-events.component';
import { HometwoListingsComponent } from './components/pages/home-demo-two/hometwo-listings/hometwo-listings.component';
// import { ComingSoonComponent } from './components/pages/coming-soon/coming-soon.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
// import { AboutUsComponent } from './components/pages/about-us/about-us.component';
import { FunfactsComponent } from './components/common/funfacts/funfacts.component';
import { PartnerComponent } from './components/common/partner/partner.component';
import { TeamComponent } from './components/common/team/team.component';
// import { HowItWorksPageComponent } from './components/pages/how-it-works-page/how-it-works-page.component';
// import { PricingComponent } from './components/pages/pricing/pricing.component';
// import { GalleryComponent } from './components/pages/gallery/gallery.component';
import { FaqComponent } from './components/pages/faq/faq.component';
// import { ContactComponent } from './components/pages/contact/contact.component';
import { FooterStyleTwoComponent } from './components/common/footer-style-two/footer-style-two.component';
// import { BlogGridComponent } from './components/pages/blog-grid/blog-grid.component';
// import { BlogRightSidebarComponent } from './components/pages/blog-right-sidebar/blog-right-sidebar.component';
// import { BlogDetailsComponent } from './components/pages/blog-details/blog-details.component';
// import { ProductsListComponent } from './components/pages/products-list/products-list.component';
// import { CartComponent } from './components/pages/cart/cart.component';
// import { CheckoutComponent } from './components/pages/checkout/checkout.component';
// import { ProductsDetailsComponent } from './components/pages/products-details/products-details.component';
// import { RelatedProductsComponent } from './components/pages/products-details/related-products/related-products.component';
// import { AuthorProfileComponent } from './components/pages/author-profile/author-profile.component';
// import { CategoriesComponent } from './components/pages/categories/categories.component';
// import { TopPlaceComponent } from './components/pages/top-place/top-place.component';
// import { ListingsDetailsComponent } from './components/pages/listings-details/listings-details.component';
// import { EventsDetailsComponent } from './components/pages/events-details/events-details.component';
// import { EventsComponent } from './components/pages/events/events.component';
// import { VerticalListingsLeftSidebarComponent } from './components/pages/vertical-listings-left-sidebar/vertical-listings-left-sidebar.component';
// import { VerticalListingsRightSidebarComponent } from './components/pages/vertical-listings-right-sidebar/vertical-listings-right-sidebar.component';
// import { VerticalListingsFullWidthComponent } from './components/pages/vertical-listings-full-width/vertical-listings-full-width.component';
// import { GridListingsLeftSidebarComponent } from './components/pages/grid-listings-left-sidebar/grid-listings-left-sidebar.component';
// import { GridListingsRightSidebarComponent } from './components/pages/grid-listings-right-sidebar/grid-listings-right-sidebar.component';
// import { GridListingsFullWidthComponent } from './components/pages/grid-listings-full-width/grid-listings-full-width.component';
import { DashboardNavbarComponent } from './components/common/dashboard-navbar/dashboard-navbar.component';
import { DashboardSidemenuComponent } from './components/common/dashboard-sidemenu/dashboard-sidemenu.component';
import { CopyrightsComponent } from './components/pages/dashboard/copyrights/copyrights.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { StatsComponent } from './components/pages/dashboard/stats/stats.component';
// import { RecentActivitiesComponent } from './components/pages/dashboard/recent-activities/recent-activities.component';
import { DashboardBookingsComponent } from './components/pages/dashboard/dashboard-bookings/dashboard-bookings.component';
import { DashboardInvoiceComponent } from './components/pages/dashboard/dashboard-invoice/dashboard-invoice.component';
import { DashboardMessagesComponent } from './components/pages/dashboard/dashboard-messages/dashboard-messages.component';
import { DashboardMyProfileComponent } from './components/pages/dashboard/dashboard-my-profile/dashboard-my-profile.component';
import { DashboardReviewsComponent } from './components/pages/dashboard/dashboard-reviews/dashboard-reviews.component';
import { DashboardWalletComponent } from './components/pages/dashboard/dashboard-wallet/dashboard-wallet.component';
// import { DashboardAddListingsComponent } from './components/pages/dashboard/dashboard-add-listings/dashboard-add-listings.component';
import { DashboardBookmarksComponent } from './components/pages/dashboard/dashboard-bookmarks/dashboard-bookmarks.component';
import { DashboardMyListingsComponent } from './components/pages/dashboard/dashboard-my-listings/dashboard-my-listings.component';
// import { RegularMemberFormComponent } from './components/pages/forms/regular-member-form/regular-member-form.component';
// import { CertificateOfOriginFormComponent } from './components/pages/forms/certificate-of-origin-form/certificate-of-origin-form.component';
// import { MemberCategoriesComponent } from './components/masters/member-categories/member-categories.component';
import { MemberClassificationComponent } from './components/masters/member-classification/member-classification.component';
// import { SelectionComponent } from './components/pages/FacilityBooking/selection/selection.component';
// import { BookingFormComponent } from './components/pages/FacilityBooking/booking-form/booking-form.component';
// import { ExternalBookingComponent } from './components/pages/FacilityBooking/external-booking/external-booking.component';
// import { FeesMasterComponent } from './components/masters/fees-master/fees-master.component';
import { TurnoverMasterComponent } from './components/masters/turnover-master/turnover-master.component';
// import { MembershipTypeMasterComponent } from './components/masters/membership-type-master/membership-type-master.component';
// import { BookFacilityComponent } from './components/pages/FacilityBooking/book-facility/book-facility.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// import { DocumentAttestationFormComponent } from './components/pages/forms/document-attestation-form/document-attestation-form.component';
import { ErrorInterceptor } from './helpers/error.interceptor';
import { JwtInterceptor } from './helpers/jwt.interceptor';
// import { CallMemberComponent } from './components/pages/dashboard/call-member/call-member.component';
// import { RegularMemberListComponent } from './components/pages/dashboard/approval-master/regular-member-list/regular-member-list.component';
// import { PaymentDocumentAttestationComponent } from './components/pages/dashboard/approval-master/payment-process/payment-document-attestation/payment-document-attestation.component';
// import { CertificateOfOriginListComponent } from './components/pages/dashboard/approval-master/certificate-of-origin-list/certificate-of-origin-list.component';
// import { DocumentAttestationListComponent } from './components/pages/dashboard/approval-master/document-attestation-list/document-attestation-list.component';
// import { ApprovalComponent } from './components/pages/FacilityBooking/approval/approval.component';
// import { SelectedPlaceAprrovalComponent } from './components/pages/FacilityBooking/selected-place-aprroval/selected-place-aprroval.component';
// import { VisaFormComponent } from './components/pages/visa/visa-form/visa-form.component';
// import { VisaPaymentComponent } from './components/pages/visa/visa-payment/visa-payment.component';

// import { VisaServiceComponent } from './components/pages/visa-service/visa-service.component';
// import { VisaRecommendationFormComponent } from './components/pages/visa/visa-recommendation-form/visa-recommendation-form.component';

// Diractives

import { FileDragNDropDirectiveDirective } from './directives/file-drag-ndrop-directive.directive';

// PrimeNg Modules Path
import { AccordionModule } from 'primeng/accordion';
import { ConfirmationService, MessageService } from 'primeng/api';
import { CalendarModule } from 'primeng/calendar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { SidebarModule } from 'primeng/sidebar';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { TooltipModule } from 'primeng/tooltip';
// import { HWMFormComponent } from './components/pages/forms/hwm-form/hwm-form.component';
// import { HwmMemberListComponent } from './components/pages/dashboard/approval-master/hwm-member-list/hwm-member-list.component';
// import { NonMemberExporterFormComponent } from './components/pages/forms/non-member-exporter-form/non-member-exporter-form.component';
// import { RegisteredNonMemberListComponent } from './components/pages/dashboard/approval-master/registered-non-member-list/registered-non-member-list.component';
import { CustomFormComponent } from './components/masters/custom-form/custom-form.component';
// import { FormBuilderComponent } from './components/masters/form-builder/form-builder.component';
// import { EventListingComponent } from './components/masters/event-listing/event-listing.component';
// import { EventCreationFormComponent } from './components/masters/event-creation-form/event-creation-form.component';
import { GroupByPipePipe } from './pipes/group-by-pipe.pipe';
// import { CallLogComponent } from './components/pages/dashboard/call-log/call-log.component';
import { DropdownModule } from 'primeng/dropdown';
// import { RaiseIssueFormComponent } from './components/pages/forms/raise-issue-form/raise-issue-form.component';
// import { EscalationMatrixMasterComponent } from './components/masters/escalation-matrix-master/escalation-matrix-master.component';
// import { RaiseIssuesListComponent } from './components/pages/dashboard/raise-issues-list/raise-issues-list.component';
import { DashboardNavbarUcciStaffComponent } from './components/common/dashboard-navbar-ucci-staff/dashboard-navbar-ucci-staff.component';

// Vizard Form Imports
import { NgWizardConfig, NgWizardModule, THEME } from 'ng-wizard';
import { SuccessComponent } from './components/common/success/success.component';
// import { VissaApprovalComponent } from './components/pages/visa/vissa-approval/vissa-approval.component';
// import { FormBuilderModule } from 'form-builder';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NonAuthorizedModalComponent } from './components/common/non-authorized-modal/non-authorized-modal.component';
import { SpinnerComponent } from './components/common/spinner/spinner.component';
// import { MyIssuesComponent } from './components/pages/dashboard/my-issues/my-issues.component';
// import { EventDataComponent } from './components/masters/event-data/event-data.component';
// import { ExpiringMembershipComponent } from './components/pages/expiring-membership/expiring-membership.component';
// import { IssueTypeMasterComponent } from './components/masters/issue-type-master/issue-type-master.component';
import { ServiceMasterComponent } from './components/award/service-master/service-master.component';
import { AwardConfigurationComponent } from './components/masters/award-configuration/award-configuration.component';
import { RegisteredUsersComponent } from './components/pages/registered-users/registered-users.component';
import { AwardCategoryComponent } from './components/masters/award-category/award-category.component';
import { FormBuilderComponent } from './components/masters/form-builder/form-builder.component';
import {LibFBModule} from 'lib-fb';
import { CsrFormComponent } from './components/masters/csr-form/csr-form.component';
import { AdminLoginComponent } from './components/pages/admin-login/admin-login.component';
import { SuccessPageComponent } from './components/pages/success-page/success-page.component';
import { ExcelService } from './services/excel.service';
// import { LibFBModule } from 'libFB';
// import { InterestAreaMasterComponent } from './components/masters/interest-area-master/interest-area-master.component';
// import { CategoryMasterComponent } from './components/masters/marketplace-master/category-master/category-master.component';
// import { SubcategoryMasterComponent } from './components/masters/marketplace-master/subcategory-master/subcategory-master.component';
// import { CategoryMasterFromComponent } from './components/masters/marketplace-master/master-froms/category-master-from/category-master-from.component';
// import { SubcategoryMasterFormComponent } from './components/masters/marketplace-master/master-froms/subcategory-master-form/subcategory-master-form.component';

const ngWizardConfig: NgWizardConfig = {
  theme: THEME.default,
};

@NgModule({
  declarations: [
    AppComponent,
    HomeDemoOneComponent,
    HomeDemoTwoComponent,
    AppDownloadComponent,
    HowItWorksComponent,
    HomeoneBlogComponent,
    FeedbackStyleOneComponent,
    HomeoneDestinationsComponent,
    CategoryComponent,
    HomeoneListingsComponent,
    FeaturesComponent,
    HomeoneBannerComponent,
    FooterStyleOneComponent,
    NavbarStyleOneComponent,
    NavbarStyleTwoComponent,
    HometwoBannerComponent,
    HometwoListingsComponent,
    HometwoDestinationsComponent,
    HometwoEventsComponent,
    HometwoBlogComponent,
    // ComingSoonComponent,
    NotFoundComponent,
    // AboutUsComponent,
    PartnerComponent,
    TeamComponent,
    FunfactsComponent,
    // HowItWorksPageComponent,
    // PricingComponent,
    // GalleryComponent,
    FaqComponent,
    // ContactComponent,
    FooterStyleTwoComponent,
    // BlogGridComponent,
    // BlogRightSidebarComponent,
    // BlogDetailsComponent,
    // ProductsListComponent,
    // CartComponent,
    // CheckoutComponent,
    // ProductsDetailsComponent,
    // RelatedProductsComponent,
    // AuthorProfileComponent,
    // CategoriesComponent,
    // TopPlaceComponent,
    // ListingsDetailsComponent,
    // EventsDetailsComponent,
    // EventsComponent,
    // VerticalListingsLeftSidebarComponent,
    // VerticalListingsRightSidebarComponent,
    // VerticalListingsFullWidthComponent,
    // GridListingsLeftSidebarComponent,
    // GridListingsRightSidebarComponent,
    // GridListingsFullWidthComponent,
    DashboardComponent,
    DashboardNavbarComponent,
    DashboardSidemenuComponent,
    CopyrightsComponent,
    StatsComponent,
    // RecentActivitiesComponent,
    DashboardMessagesComponent,
    DashboardBookingsComponent,
    DashboardWalletComponent,
    DashboardReviewsComponent,
    DashboardInvoiceComponent,
    DashboardMyProfileComponent,
    // DashboardAddListingsComponent,
    DashboardBookmarksComponent,
    DashboardMyListingsComponent,
    // RegularMemberFormComponent,
    // CertificateOfOriginFormComponent,
    DashboardMyListingsComponent,
    // MemberCategoriesComponent,
    MemberClassificationComponent,
    // FeesMasterComponent,
    TurnoverMasterComponent,
    // MembershipTypeMasterComponent,
    // BookFacilityComponent,
    // SelectionComponent,
    // BookingFormComponent,
    // ExternalBookingComponent,
    // DocumentAttestationFormComponent,
    // CallMemberComponent,
    // HWMFormComponent,

    // ApprovalComponent,
    // SelectedPlaceAprrovalComponent,
    // VisaFormComponent,
    // RegularMemberListComponent,
    // CertificateOfOriginListComponent,
    // DocumentAttestationListComponent,
    GroupByPipePipe,
    // CallLogComponent,
    // DocumentAttestationListComponent,
    // PaymentDocumentAttestationComponent,
    // VisaPaymentComponent,
    // VisaServiceComponent,
    // VisaRecommendationFormComponent,
    FileDragNDropDirectiveDirective,
    SuccessComponent,
    // VissaApprovalComponent,
    // HwmMemberListComponent,
    // NonMemberExporterFormComponent,
    // RegisteredNonMemberListComponent,
    CustomFormComponent,
    // FormBuilderComponent,
    // EventListingComponent,
    // EventCreationFormComponent,
    // RaiseIssueFormComponent,
    // EscalationMatrixMasterComponent,
    // RaiseIssuesListComponent,
    // RaiseIssueFormComponent,
    DashboardNavbarUcciStaffComponent,
    NonAuthorizedModalComponent,
    SpinnerComponent,
    // MyIssuesComponent,
    // EventDataComponent,
    // ExpiringMembershipComponent,
    // IssueTypeMasterComponent,
    ServiceMasterComponent,
    AwardConfigurationComponent,
    RegisteredUsersComponent,
    AwardCategoryComponent,
    FormBuilderComponent,
    CsrFormComponent,
    AdminLoginComponent,
    SuccessPageComponent,
    // InterestAreaMasterComponent,
    // CategoryMasterComponent,
    // SubcategoryMasterComponent,
    // CategoryMasterFromComponent,
    // SubcategoryMasterFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    SelectDropDownModule,
    NgxTypedJsModule,
    FormsModule,
    // NgxPaginationModule,
    ReactiveFormsModule,
    // HttpClientModule,
    NgxPaginationModule,
    HttpClientModule,
    ReactiveFormsModule,
    // FormBuilderModule,

    // PrimeNG Imports
    TableModule,
    ToastModule,
    ConfirmDialogModule,
    CalendarModule,
    SidebarModule,
    TooltipModule,
    // // InputTextModule,
    DialogModule,
    InputTextModule,
    AccordionModule,
    DropdownModule,
    InputNumberModule,
    ScrollPanelModule,
    

    // Vizard Form Imports
    NgWizardModule.forRoot(ngWizardConfig),

    // loader import

    NgxSpinnerModule,
    LibFBModule
  ],
  bootstrap: [AppComponent],
  providers: [
    MessageService,
    ConfirmationService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    ExcelService
  ],
})
export class AppModule {}
