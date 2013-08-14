using System;
using System.Linq;
using System.IO;
using System.IO.IsolatedStorage;
using System.Collections.Generic;
using Microsoft.LightSwitch;
using Microsoft.LightSwitch.Framework.Client;
using Microsoft.LightSwitch.Presentation;
using Microsoft.LightSwitch.Presentation.Extensions;
namespace LightSwitchApplication
{
    public partial class Proposals
    {
        partial void ViewAwards_Execute()
        {
            this.Application.ShowProposalsListDetail(RFQNum);

        }

        partial void Proposal_LinesAddAndEditNew_CanExecute(ref bool result)
        {
            result = this.Proposal_Lines.CanAddNew;

        }

        partial void Proposal_LinesAddAndEditNew_Execute()
        {
            Proposal_Line pl = this.Proposal_Lines.AddNew();
            this.Proposal_Lines.SelectedItem = pl;
            pl.ProposalLineNo = this.Proposal_Lines.Count;
            this.OpenModalWindow("modalPLine");

        }

        partial void SavePLine_Execute()
        {
            this.Save();
            this.CloseModalWindow("modalPLine");

        }

        partial void CancelPLine_Execute()
        {
            this.DataWorkspace.ProcurementData.Details.DiscardChanges();
            this.CloseModalWindow("modalPLine");

        }

        partial void Proposal_LinesEditSelected_CanExecute(ref bool result)
        {
            result = this.Proposal_Lines.CanEdit;


        }

        partial void Proposal_LinesEditSelected_Execute()
        {
            
            this.OpenModalWindow("modalPLine");

        }
    }
}
