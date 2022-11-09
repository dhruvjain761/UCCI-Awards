import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { FeesMasterComponent } from './components/masters/fees-master/fees-master.component';
// import { MemberCategoriesComponent } from './components/masters/member-categories/member-categories.component';
import { MemberClassificationComponent } from './components/masters/member-classification/member-classification.component';
// import { MembershipTypeMasterComponent } from './components/masters/membership-type-master/membership-type-master.component';
import { TurnoverMasterComponent } from './components/masters/turnover-master/turnover-master.component';
// import { AboutUsComponent } from './components/pages/about-us/about-us.component';
// import { AuthorProfileComponent } from './components/pages/author-profile/author-profile.component';
// import { BlogDetailsComponent } from './components/pages/blog-details/blog-details.component';
// import { BlogGridComponent } from './components/pages/blog-grid/blog-grid.component';
// import { BlogRightSidebarComponent } from './components/pages/blog-right-sidebar/blog-right-sidebar.component';
// import { CartComponent } from './components/pages/cart/cart.component';
// import { CategoriesComponent } from './components/pages/categories/categories.component';
// import { CheckoutComponent } from './components/pages/checkout/checkout.component';
// import { ComingSoonComponent } from './components/pages/coming-soon/coming-soon.component';
// import { ContactComponent } from './components/pages/contact/contact.component';
// import { CertificateOfOriginListComponent } from './components/pages/dashboard/approval-master/certificate-of-origin-list/certificate-of-origin-list.component';
// import { DocumentAttestationListComponent } from './components/pages/dashboard/approval-master/document-attestation-list/document-attestation-list.component';
// import { RegularMemberListComponent } from './components/pages/dashboard/approval-master/regular-member-list/regular-member-list.component';
// import { CallMemberComponent } from './components/pages/dashboard/call-member/call-member.component';
// import { DashboardAddListingsComponent } from './components/pages/dashboard/dashboard-add-listings/dashboard-add-listings.component';
import { DashboardBookingsComponent } from './components/pages/dashboard/dashboard-bookings/dashboard-bookings.component';
import { DashboardBookmarksComponent } from './components/pages/dashboard/dashboard-bookmarks/dashboard-bookmarks.component';
import { DashboardInvoiceComponent } from './components/pages/dashboard/dashboard-invoice/dashboard-invoice.component';
import { DashboardMessagesComponent } from './components/pages/dashboard/dashboard-messages/dashboard-messages.component';
import { DashboardMyListingsComponent } from './components/pages/dashboard/dashboard-my-listings/dashboard-my-listings.component';
import { DashboardMyProfileComponent } from './components/pages/dashboard/dashboard-my-profile/dashboard-my-profile.component';
import { DashboardReviewsComponent } from './components/pages/dashboard/dashboard-reviews/dashboard-reviews.component';
import { DashboardWalletComponent } from './components/pages/dashboard/dashboard-wallet/dashboard-wallet.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
// import { EventsDetailsComponent } from './components/pages/events-details/events-details.component';
// import { EventsComponent } from './components/pages/events/events.component';
// import { ApprovalComponent } from './components/pages/FacilityBooking/approval/approval.component';
// import { BookFacilityComponent } from './components/pages/FacilityBooking/book-facility/book-facility.component';
// import { SelectedPlaceAprrovalComponent } from './components/pages/FacilityBooking/selected-place-aprroval/selected-place-aprroval.component';
import { FaqComponent } from './components/pages/faq/faq.component';
// import { CertificateOfOriginFormComponent } from './components/pages/forms/certificate-of-origin-form/certificate-of-origin-form.component';
// import { HWMFormComponent } from './components/pages/forms/hwm-form/hwm-form.component';
// import { DocumentAttestationFormComponent } from './components/pages/forms/document-attestation-form/document-attestation-form.component';
// import { RegularMemberFormComponent } from './components/pages/forms/regular-member-form/regular-member-form.component';
// import { GalleryComponent } from './components/pages/gallery/gallery.component';
// import { GridListingsFullWidthComponent } from './components/pages/grid-listings-full-width/grid-listings-full-width.component';
// import { GridListingsLeftSidebarComponent } from './components/pages/grid-listings-left-sidebar/grid-listings-left-sidebar.component';
// import { GridListingsRightSidebarComponent } from './components/pages/grid-listings-right-sidebar/grid-listings-right-sidebar.component';
import { HomeDemoOneComponent } from './components/pages/home-demo-one/home-demo-one.component';
import { HomeDemoTwoComponent } from './components/pages/home-demo-two/home-demo-two.component';
// import { HowItWorksPageComponent } from './components/pages/how-it-works-page/how-it-works-page.component';
// import { ListingsDetailsComponent } from './components/pages/listings-details/listings-details.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
// import { PricingComponent } from './components/pages/pricing/pricing.component';
// import { ProductsDetailsComponent } from './components/pages/products-details/products-details.component';
// import { ProductsListComponent } from './components/pages/products-list/products-list.component';
// import { TopPlaceComponent } from './components/pages/top-place/top-place.component';
// import { VerticalListingsFullWidthComponent } from './components/pages/vertical-listings-full-width/vertical-listings-full-width.component';
// import { VerticalListingsLeftSidebarComponent } from './components/pages/vertical-listings-left-sidebar/vertical-listings-left-sidebar.component';
// import { VerticalListingsRightSidebarComponent } from './components/pages/vertical-listings-right-sidebar/vertical-listings-right-sidebar.component';
// import { VisaServiceComponent } from './components/pages/visa-service/visa-service.component';
// import { VissaApprovalComponent } from './components/pages/visa/vissa-approval/vissa-approval.component';
// import { VisaServiceComponent } from './components/pages/visa-service/visa-service.component';
// import { VisaFormComponent } from './components/pages/visa/visa-form/visa-form.component';
// import { HwmMemberListComponent } from './components/pages/dashboard/approval-master/hwm-member-list/hwm-member-list.component';
// import { NonMemberExporterFormComponent } from './components/pages/forms/non-member-exporter-form/non-member-exporter-form.component';
// import { RegisteredNonMemberListComponent } from './components/pages/dashboard/approval-master/registered-non-member-list/registered-non-member-list.component';
import { CustomFormComponent } from './components/masters/custom-form/custom-form.component';
// import { FormBuilderComponent } from './components/masters/form-builder/form-builder.component';
// import { EventListingComponent } from './components/masters/event-listing/event-listing.component';
// import { EventCreationFormComponent } from './components/masters/event-creation-form/event-creation-form.component';
// import { CallLogComponent } from './components/pages/dashboard/call-log/call-log.component';
// import { RaiseIssueFormComponent } from './components/pages/forms/raise-issue-form/raise-issue-form.component';
// import { EscalationMatrixMasterComponent } from './components/masters/escalation-matrix-master/escalation-matrix-master.component';
// import { RaiseIssuesListComponent } from './components/pages/dashboard/raise-issues-list/raise-issues-list.component';
import { AuthGuard } from './auth.guard';
// import { MyIssuesComponent } from './components/pages/dashboard/my-issues/my-issues.component';
// import { EventDataComponent } from './components/masters/event-data/event-data.component';
// import { ExpiringMembershipComponent } from './components/pages/expiring-membership/expiring-membership.component';
// import { IssueTypeMasterComponent } from './components/masters/issue-type-master/issue-type-master.component';
import { ServiceMasterComponent } from './components/award/service-master/service-master.component';
import { AwardCategoryComponent } from './components/masters/award-category/award-category.component';
import { AwardConfigurationComponent } from './components/masters/award-configuration/award-configuration.component';
import { FormBuilderComponent } from './components/masters/form-builder/form-builder.component';
import { AdminLoginComponent } from './components/pages/admin-login/admin-login.component';
import { RegisteredUsersComponent } from './components/pages/registered-users/registered-users.component';
import { SuccessPageComponent } from './components/pages/success-page/success-page.component';
import { CsrFormComponent } from './components/masters/csr-form/csr-form.component';
// import { InterestAreaMasterComponent } from './components/masters/interest-area-master/interest-area-master.component';
// import { SubcategoryMasterComponent } from './components/masters/marketplace-master/subcategory-master/subcategory-master.component';
// import { CategoryMasterComponent } from './components/masters/marketplace-master/category-master/category-master.component';
// import { CategoryMasterFromComponent } from './components/masters/marketplace-master/master-froms/category-master-from/category-master-from.component';
// import { SubcategoryMasterFormComponent } from './components/masters/marketplace-master/master-froms/subcategory-master-form/subcategory-master-form.component';

const routes: Routes = [
  { path: '', component: HomeDemoOneComponent },
  { path: 'admin-login', component: AdminLoginComponent },
  { path: 'index-2', component: HomeDemoTwoComponent },
  // {path: 'about', component: AboutUsComponent},
  // {path: 'how-it-works', component: HowItWorksPageComponent},
  // {path: 'pricing', component: PricingComponent},
  // {path: 'gallery', component: GalleryComponent},
  { path: 'faq', component: FaqComponent },
  // {path: 'coming-soon', component: ComingSoonComponent},
  // {path: 'contact', component: ContactComponent},
  // {path: 'blog-grid', component: BlogGridComponent},
  // {path: 'blog-right-sidebar', component: BlogRightSidebarComponent},
  // {path: 'blog-details', component: BlogDetailsComponent},
  // {path: 'blog-details/:slug', component: BlogDetailsComponent},
  // {path: 'event/:slug', component: EventDataComponent},
  // {path: 'products-list', component: ProductsListComponent},
  // {path: 'cart', component: CartComponent},
  // {path: 'checkout', component: CheckoutComponent},
  // {path: 'single-products', component: ProductsDetailsComponent},
  // {path: 'user-profile', component: AuthorProfileComponent},
  // {path: 'categories', component: CategoriesComponent},
  // {path: 'destinations', component: TopPlaceComponent},
  // {path: 'vertical-listings-left-sidebar', component: VerticalListingsLeftSidebarComponent},
  // {path: 'vertical-listings-right-sidebar', component: VerticalListingsRightSidebarComponent},
  // {path: 'vertical-listings-full-width', component: VerticalListingsFullWidthComponent},
  // {path: 'grid-listings-left-sidebar', component: GridListingsLeftSidebarComponent},
  // {path: 'grid-listings-right-sidebar', component: GridListingsRightSidebarComponent},
  // {path: 'grid-listings-full-width', component: GridListingsFullWidthComponent},
  // {path: 'single-listings', component: ListingsDetailsComponent},
  // {path: 'events', component: EventsComponent},
  // {path: 'single-events', component: EventsDetailsComponent},
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: { route: ['Admin', 'Nominee 2', 'Nominee 1', 'UCCI Staff'] },
    canActivate: [AuthGuard],
  },
  { path: 'dashboard-messages', component: DashboardMessagesComponent },
  { path: 'dashboard-bookings', component: DashboardBookingsComponent },
  { path: 'dashboard-wallet', component: DashboardWalletComponent },
  // {path: 'call-member', component: CallMemberComponent},
  // {path: 'call-logs/:slug', component: CallLogComponent},
  // {path: 'raise-issues', component: RaiseIssueFormComponent},
  { path: 'dashboard-reviews', component: DashboardReviewsComponent },
  { path: 'dashboard-invoice', component: DashboardInvoiceComponent },
  { path: 'dashboard-my-profile', component: DashboardMyProfileComponent },
  // {path: 'dashboard-add-listings', component: DashboardAddListingsComponent},
  { path: 'dashboard-bookmarks', component: DashboardBookmarksComponent },
  { path: 'dashboard-my-listings', component: DashboardMyListingsComponent },
  { path: 'success', component: SuccessPageComponent },
  // {path: 'regular-member-form', component: RegularMemberFormComponent},
  // {path: 'hwm-registration', component: HWMFormComponent},
  // {path: 'non-member-registration', component: NonMemberExporterFormComponent},
  // {path: 'certificate-of-origin-form', component: CertificateOfOriginFormComponent},
  // {path: 'document-attestation-form', component: DocumentAttestationFormComponent},
  // {path: 'regular-member-list', component: RegularMemberListComponent},
  // {path: 'hwm-member-list', component:HwmMemberListwComponent },
  // {path: 'non-member-list', component:RegisteredNonMemberListComponent },
  // {path: 'certificate-of-origin-list', component: CertificateOfOriginListComponent},
  // {path: 'document-attestation-list', component: DocumentAttestationListComponent},
  { path: 'custom-forms', component: CustomFormComponent },
  { path: 'form-lib/:slug', component: CsrFormComponent },
  // {path: 'events-list', component: EventListingComponent},
  // {path: 'event-form', component: EventCreationFormComponent},
  // {path: 'event-form/:slug', component: EventCreationFormComponent},
  { path: 'form-builder', component: FormBuilderComponent },
  // {path: 'form-builder/:slug', component: FormBuilderComponent},
  // Here add new pages component

  // Master Page Routing Pats
  // {path: 'member-categories', component: MemberCategoriesComponent},
  { path: 'member-classification', component: MemberClassificationComponent },
  // {path: 'fees-master', component: FeesMasterComponent},
  { path: 'turnover-master', component: TurnoverMasterComponent },
  // {path: 'membership-type-master', component: MembershipTypeMasterComponent},
  // {path: 'facilities-approval', component: ApprovalComponent},
  // {path: 'selected-facilities-approval', component: SelectedPlaceAprrovalComponent},
  // {path: 'my-issues', component: MyIssuesComponent},
  // {path: 'escalation-matrix', component: EscalationMatrixMasterComponent},
  // {path: 'create-issue-type', component: IssueTypeMasterComponent},
  // {path: 'issues-lists', component: RaiseIssuesListComponent},
  // {path: 'area-of-interest', component: InterestAreaMasterComponent},
  // {path: 'category', component: CategoryMasterComponent},
  // {path: 'sub-category', component: SubcategoryMasterComponent},
  // {path: 'subcategory-form', component: SubcategoryMasterFormComponent},
  // {path: 'category-form', component: CategoryMasterFromComponent},

  // Facility Booking
  // {path: 'facility-booking', component: BookFacilityComponent},

  // Visa Recommendation

  // {path: 'visa-recommendation', component: VisaServiceComponent},
  // {path: 'visa-approval', component: VissaApprovalComponent},

  // Membership Renewal

  // {path: 'expiring-membership', component: ExpiringMembershipComponent},

  // Award Path

  { path: 'service-master', component: ServiceMasterComponent },
  { path: 'award-configuration', component: AwardConfigurationComponent },
  { path: 'registered-user', component: RegisteredUsersComponent },
  { path: 'award-category', component: AwardCategoryComponent },

  //

  // This line will remain down from the whole pages component list

  { path: '**', component: NotFoundComponent }, // This line will remain down from the whole pages component list
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
