using System;
using System.Linq;
using System.IO;
using System.IO.IsolatedStorage;
using System.Collections.Generic;
using Microsoft.LightSwitch;
using Microsoft.LightSwitch.Framework.Client;
using Microsoft.LightSwitch.Presentation;
using Microsoft.LightSwitch.Presentation.Extensions;
using Microsoft.LightSwitch.Threading;
using System.Windows.Browser;
using System.ComponentModel;
using System.Windows.Controls;


namespace LightSwitchApplication
{
    public partial class RFQ_PItemDetail
    {
        partial void RFQ_PItem_Loaded(bool succeeded)
        {
            // Write your code here.
            this.SetDisplayNameFromEntity(this.RFQ_PItem);
        }

        partial void RFQ_PItem_Changed()
        {
            // Write your code here.
            this.SetDisplayNameFromEntity(this.RFQ_PItem);
        }

        partial void RFQ_PItemDetail_Saved()
        {
            // Write your code here.
            this.SetDisplayNameFromEntity(this.RFQ_PItem);
        }

        partial void AddSupplier_Execute()
        {
            if (Suppliers.SelectedItem != null)
            {
                BidList blExist = new BidList();
                foreach (BidList blSearch in this.BidLists)
                {
                    if (blSearch.Supplier == this.Suppliers.SelectedItem)
                    {
                        blExist = blSearch;
                        blSearch.Delete();
                        this.DataWorkspace.ProcurementData.Details.DiscardChanges();
                        this.BidLists.Refresh();
                    }
                }

                if (blExist == null || blExist.Supplier == null)
                {
                    blExist.Delete();
                    BidList bl = BidLists.AddNew();
                    bl.Supplier = Suppliers.SelectedItem;
                    bl.RFQ_PItem = this.RFQ_PItem;
                    this.Save();
                    this.BidLists.Refresh();
                }
            }

        }

        partial void RemoveSupplier_Execute()
        {
            BidLists.DeleteSelected();// Write your code here.

        }

        //partial void Award_SelectedsAddAndEditNew_CanExecute(ref bool result)
        //{
        //    result = this.Award_Selecteds.CanAddNew;

        //}

        //partial void Award_SelectedsAddAndEditNew_Execute()
        //{
           

        //    Award_Selected asel = this.Award_Selecteds.AddNew();
        //    this.Award_Selecteds.SelectedItem = asel;
        //    this.OpenModalWindow("modalASEL");

        //}

        //partial void CreatePO_Execute()
        //{
        //    string pnum = this.RFQ_PItem.Project.ProjectNo;
        //    string rfqn = this.RFQ_PItem.PkgNo;
        //    Award_Selected asltd = this.Award_Selecteds.SelectedItem;
        //    string sup = asltd.Proposal1.Supplier1.SupplierName;

        //    this.Application.ShowCreateNewPO(pnum,rfqn,sup);
            
        //}

        partial void CreateNewRFQLine_Execute()
        {
            var nextLine = this.RFQ_Lines.Count + 1;
            this.ShowMessageBox(nextLine.ToString());

        }

        partial void RFQ_LinesAddAndEditNew_CanExecute(ref bool result)
        {
            result = this.RFQ_Lines.CanAddNew;

        }

        partial void RFQ_LinesAddAndEditNew_Execute()
        {
            //r nxtLine = this.RFQ_Lines.Count + 1;
            RFQ_Line rfqLine = this.RFQ_Lines.AddNew();
            this.RFQ_Lines.SelectedItem = rfqLine;
            this.ProjNum = this.RFQ_Lines.SelectedItem.RFQ_PItem.Project.ProjectNo;
            this.RFQNum = this.RFQ_Lines.SelectedItem.RFQ_PItem.PkgNo;
            rfqLine.RFQLineNo = this.RFQ_Lines.Count;
            this.OpenModalWindow("modalRFQLine");

        }







        //partial void Proposal_LinesAddAndEditNew_CanExecute(ref bool result)
        //{
        //    result = this.Proposal_Lines.CanAddNew;

        //}

        //partial void Proposal_LinesAddAndEditNew_Execute()
        //{
        //    Proposal_Line pline = this.Proposal_Lines.AddNew();
        //    this.Proposal_Lines.SelectedItem = pline;
        //    pline.ProposalLineNo = this.Proposal_Lines.Count;
        //    this.OpenModalWindow("modalProp");
            

        //}

        //partial void ProposalsAddNew_CanExecute(ref bool result)
        //{
        //    result = this.Proposals.CanAddNew;

        //}

        //partial void ProposalsAddNew_Execute()
        //{
        //    Proposal prop = this.Proposals.AddNew();
        //    this.Proposals.SelectedItem = prop;
        //    this.OpenModalWindow("modalProposal");

        //}

        //partial void Proposal_LinesAddAndEditNew1_CanExecute(ref bool result)
        //{
        //    result = this.Proposal_Lines.CanAddNew;

        //}

        //partial void Proposal_LinesAddAndEditNew1_Execute()
        //{
        //    Proposal_Line pline = this.Proposal_Lines.AddNew();
        //    this.Proposal_Lines.SelectedItem = pline;
        //    //pline.ProposalLineNo = this.Proposal_Lines.Count;
        //    this.OpenModalWindow("modalProp");

        //}

        //partial void Proposal_LinesAddAndEditNew2_CanExecute(ref bool result)
        //{
        //    result = this.Proposal_Lines.CanAddNew;

        //}

        //partial void Proposal_LinesAddAndEditNew2_Execute()
        //{
        //    Proposal_Line p = this.Proposal_Lines.AddNew();
        //    this.Proposal_Lines.SelectedItem = p;
        //    p.ProposalLineNo = this.Proposal_Lines.Count.ToString();
        //    this.OpenModalWindow("modalProp");

        //}

        

        partial void RFQ_PItemDetail_Activated()
        {
            RFQID = this.RFQ_PItem.ID;

        }

        //partial void PO_LinesAddAndEditNew1_CanExecute(ref bool result)
        //{
        //    result = this.PO_Lines.CanAddNew;

        //}

        //partial void PO_LinesAddAndEditNew1_Execute()
        //{
        //    PO_Line pol = this.PO_Lines.AddNew();
        //    this.PO_Lines.SelectedItem = pol;
        //    pol.POLineRef = this.PO_Lines.Count;
        //    this.OpenModalWindow("modalPOLines");

        //}

        

       

        partial void RFQ_PItemDetail_Created()
        {

        }


        partial void ViewRFQPORegistrar_Execute()
        {
            int rfqid = this.RFQ_PItem.ID;
            this.Application.ShowPOListDetail(rfqid, this.RFQ_PItem.PkgNo, this.RFQ_PItem.PkgDescription,null);

        }

        partial void CreateProposals_Execute()
        {
            this.Application.ShowProposalsListDetail(this.RFQ_PItem.PkgNo);

        }

        partial void ViewProposals_Execute()
        {
            this.Application.ShowProposals(this.RFQ_PItem.PkgNo);// Write your code here.

        }

        partial void ShowCO_Execute()
        {
            this.Application.ShowPOChangeOrders(this.RFQID, this.RFQ_PItem.PkgNo, this.RFQ_PItem.PkgDescription);

        }

        partial void ShowExpediting_Execute()
        {
            this.Application.ShowPOListDetail1(null, RFQID);

        }

        

       

        
        
    }
}