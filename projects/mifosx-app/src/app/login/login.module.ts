/** Angular Imports */
import { NgModule } from '@angular/core';

/** Custom Modules */
import { MifosxLibModule } from '@mifosx-lib/mifosx-lib.module';
import { LoginRoutingModule } from './login-routing.module';

/** Custom Components */
import { LoginComponent } from './login.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { TwoFactorAuthenticationComponent } from './two-factor-authentication/two-factor-authentication.component';
import { TranslateModule } from '@ngx-translate/core';
import { CoreModule } from '@mifosx-lib/core/core.module';

/**
 * Login Module
 *
 * All components related to user authentication should be declared here.
 */
@NgModule({
  imports: [
    MifosxLibModule,
    LoginRoutingModule,
    TranslateModule,
    CoreModule
  ],
  declarations: [
    LoginComponent,
    LoginFormComponent,
    ResetPasswordComponent,
    TwoFactorAuthenticationComponent
  ],
  exports: [
    CoreModule
  ]
})
export class LoginModule { }
