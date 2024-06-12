/** Angular Imports */
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';

/** Custom Services */
import { LoansService } from '@mifosx-app/loans/loans.service';
import { AccountTransfersService } from '@mifosx-app/account-transfers/account-transfers.service';
import { SettingsService } from '@mifosx-lib/settings/settings.service';

/** Dialog Components */
import { DeleteDialogComponent } from '@mifosx-lib/delete-dialog/delete-dialog.component';

/**
 * Loans Standing Instructions Tab
 */
@Component({
  selector: 'mifosx-standing-instructions-tab',
  templateUrl: './standing-instructions-tab.component.html',
  styleUrls: ['./standing-instructions-tab.component.scss']
})
export class StandingInstructionsTabComponent implements OnInit {

  /** Loans Data */
  loanDetailsData: any;
  /** Instructions Data */
  instructionsData: any[];
  /** Data source for instructions table. */
  dataSource = new MatTableDataSource();
  /** Columns to be displayed in instructions table. */
  displayedColumns: string[] = ['client', 'fromAccount', 'beneficiary', 'toAccount', 'amount', 'validity', 'actions'];

  /** Instruction Table Reference */
  @ViewChild('instructionsTable', { static: true }) instructionTableRef: MatTable<Element>;

  /**
   * Retrieves Loans Account Data from `resolve`.
   * @param {ActivatedRoute} route Activated Route.
   * @param {SettingsService} settingsService Settings Service
   */
  constructor(private route: ActivatedRoute,
    private loansService: LoansService,
    private dialog: MatDialog,
    private accountTransfersService: AccountTransfersService,
    private settingsService: SettingsService) {
    this.route.parent.data.subscribe((data: { loanDetailsData: any }) => {
      this.loanDetailsData = data.loanDetailsData;
    });
  }

  ngOnInit() {
    this.getStandingInstructions();
  }

  /**
   * Retrieves standing instructions and initializes instructions table.
   */
  getStandingInstructions() {
    const clientId = this.loanDetailsData.clientId;
    const clientName = this.loanDetailsData.clientName;
    const accountId = this.loanDetailsData.id;
    const locale = this.settingsService.language.code;
    const dateFormat = this.settingsService.dateFormat;
    this.loansService.getStandingInstructions(clientId, clientName, accountId, locale, dateFormat).subscribe((response: any) => {
      this.instructionsData = response.pageItems;
      this.dataSource.data = this.instructionsData;
      this.instructionTableRef.renderRows();
    });
  }

  deleteStandingInstruction(instructionId: any) {
    const deleteStandingInstructionDialogRef = this.dialog.open(DeleteDialogComponent, {
      data: { deleteContext: `standing instruction id: ${instructionId}` }
    });
    deleteStandingInstructionDialogRef.afterClosed().subscribe((response: any) => {
      if (response.delete) {
        this.accountTransfersService.deleteStandingInstrucions(instructionId)
          .subscribe(() => { });
      }
    });
  }

}
