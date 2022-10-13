import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { TemplateFormValidationComponent } from './template-form-validation/template-form-validation.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FileUploadPreviewComponent } from './file-upload-preview/file-upload-preview.component';
import { UnderstandPipesComponent } from './understand-pipes/understand-pipes.component';
import { CrudOperationsUserComponent } from './crud-operations-user/crud-operations-user.component';
import { CustomDirectiveComponent } from './custom-directive/custom-directive.component';
import { DependencyInjectionComponent } from './dependency-injection/dependency-injection.component';

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" }, 
  { path: "home", component: HomeComponent }, 
  { path: "about-us", component: AboutUsComponent }, 
  { path: "products", component: ProductsComponent }, 
  { path: "product-detail/:id", component: ProductDetailComponent }, 
  { path: "contact-us", component: ContactUsComponent }, 
  { path: "template-form-validation", component: TemplateFormValidationComponent }, 
  { path: "file-upload-preview", component: FileUploadPreviewComponent }, 
  { path: "understand-pipes", component: UnderstandPipesComponent }, 
  { path: "crud-operations-user", component: CrudOperationsUserComponent }, 
  { path: "custom-directive", component: CustomDirectiveComponent }, 
  { path: "dependency-injection", component: DependencyInjectionComponent },  
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
