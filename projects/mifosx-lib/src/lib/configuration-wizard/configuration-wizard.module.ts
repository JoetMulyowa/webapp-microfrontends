/** Angular Imports */
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';

/*Custom Directives*/
import { PopoverArrowDirective } from './popover/popover-arrow.directive';
import { PopoverCloseDirective } from './popover/popover-close.directive';

/*Custom Components*/
import { PopoverComponent } from './popover/popover.component';
import { ConfigurationWizardComponent } from './configuration-wizard.component';
import { ContinueSetupDialogComponent } from './continue-setup-dialog/continue-setup-dialog.component';
import { NextStepDialogComponent } from './next-step-dialog/next-step-dialog.component';
import { CompletionDialogComponent } from './completion-dialog/completion-dialog.component';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from '@mifosx-lib/material.module';


/**
 * Configuration Wizard Module
 */
@NgModule({
    declarations: [
        PopoverComponent,
        PopoverCloseDirective,
        PopoverArrowDirective,
        ConfigurationWizardComponent,
        ContinueSetupDialogComponent,
        NextStepDialogComponent,
        CompletionDialogComponent
    ],
    imports: [
        CommonModule,
        OverlayModule,
        PortalModule,
        MatDialogModule,
        MaterialModule,
        TranslateModule
    ],
    exports: [
        PopoverCloseDirective
    ]
})

export class ConfigurationWizardModule { }
