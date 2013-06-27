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
using System.ComponentModel;
using System.Collections.ObjectModel;
namespace LightSwitchApplication
{
    public partial class ProposalsListDetail
    {
        ObservableCollection<Proposal_Line> SelectedPLs = new ObservableCollection<Proposal_Line>();
        ObservableCollection<Award_Selected> SelectedAwards = new ObservableCollection<Award_Selected>();
        partial void AwardProposalLine_Execute()
        {
            
            foreach (Proposal_Line pLine in SelectedPLs)
            {
                //if (pLine. != null)
                //{
                    //if (SelectedProposalLine == true && pLine.AwardIt == false)
                    //{ 
                        //Check Exist
                        if (ProposalExist(pLine.Proposal1.ID, pLine.ID) == false)
                        {
                            Award_Selected aws = DataWorkspace.ProcurementData.Award_Selecteds.AddNew();
                            //Proposal_Line propL = pLine;
                            aws.Proposal_Line1 = pLine;
                            aws.Proposal1 = pLine.Proposal1;
                            aws.RFQ_PItem1 = pLine.RFQ_Line.RFQ_PItem;
                            aws.RFQ_Line1 = pLine.RFQ_Line;

                            pLine.AwardIt = true;
                            
                        }

                    //}
                //}
            }
            this.SelectedPLs.Clear();
            
            this.Save();

            this.Proposal_Lines.Refresh();
            //this.AwardsByProposalID.Refresh();
            

        }

        private bool ProposalExist(int propID, int plineid)
        {
           
            //IDataServiceQueryable<Award_Selected> aw = (from x in DataWorkspace.ProcurementData.Award_Selecteds where x.Proposal1.ID == propID && x.Proposal_Line1.ID == plineid select x); 
            var query = DataWorkspace.ProcurementData.Award_Selecteds.Where(x => x.Proposal1.ID == propID && x.Proposal_Line1.ID == plineid).FirstOrDefault();
            if (query == null)
            {
                return false;
            }
            else
            {
                return true;
            }
        }

        partial void RemoveFromAward_Execute()
        {
            foreach (Award_Selected aws in SelectedAwards)
            {
                //if (RemoveSelectedAward == true)
                //{
                    aws.Delete();
                    IDataServiceQueryable<Proposal_Line> pl = (from x in DataWorkspace.ProcurementData.Proposal_Lines where x.ID == aws.Proposal_Line1.ID && x.Proposal1.ID == aws.Proposal1.ID select x);
                    foreach (Proposal_Line prL in pl)
                    {
                        prL.AwardIt = false;
                    }
                //}
            }
            this.SelectedAwards.Clear();
            this.Save();
            this.AwardsByProposalID.Refresh();
            this.Proposal_Lines.Refresh();
        }

        partial void ProposalsListDetail_Created()
        {
            //SelectedProposalLine = false;
            //RemoveSelectedAward= false;
            //this.FindControl("Proposal_Lines").AddCheckBoxColumnForMultiSelection<Proposal_Line>(SelectedPLs);
            //this.FindControl("AwardsByProposalID").AddCheckBoxColumnForMultiSelection<Proposal_Line>(SelectedPLs);
        }

        partial void ProposalsListDetail_InitializeDataWorkspace(List<IDataService> saveChangesTo)
        {
            this.FindControl("Proposal_Lines").AddCheckBoxColumnForMultiSelection<Proposal_Line>(SelectedPLs);
            this.FindControl("AwardsByProposalID").AddCheckBoxColumnForMultiSelection<Award_Selected>(SelectedAwards);

        }

        partial void Proposal_LinesAddAndEditNew_CanExecute(ref bool result)
        {
            result = this.Proposal_Lines.CanAddNew;

        }

        partial void Proposal_LinesAddAndEditNew_Execute()
        {
            Proposal_Line pLine = this.Proposal_Lines.AddNew();
            this.Proposal_Lines.SelectedItem = pLine;
            int lineCnt = 1;
            IDataServiceQueryable<Proposal_Line> pl = (from x in DataWorkspace.ProcurementData.Proposal_Lines where x.Proposal1.ID == pLine.Proposal1.ID select x);
            foreach (Proposal_Line prL in pl)
            {
                lineCnt++;
            }
            pLine.ProposalLineNo = lineCnt;
            this.OpenModalWindow("modalPLine");


        }

        partial void AddProposal_Execute()
        {
            this.CloseModalWindow("modalPLine");

        }

        partial void ShowPORegistrar_Execute()
        {
            int rfqid = this.Proposals.SelectedItem.RFQ_PItem.ID;
            this.Application.ShowPOListDetail(rfqid, this.Proposals.SelectedItem.RFQ_PItem.PkgNo, this.Proposals.SelectedItem.RFQ_PItem.PkgDescription, this.Proposals.SelectedItem.Supplier1.id);

        }

        partial void Proposal_LinesDeleteSelected_CanExecute(ref bool result)
        {
            
        }

        partial void Proposal_LinesDeleteSelected_Execute()
        {
            if (SelectedPLs.Count != 0)
            {
                foreach (Proposal_Line p in SelectedPLs)
                {
                    p.Delete();
                }
                this.SelectedPLs.Clear();
                this.Save();
                


            }
            else { this.ShowMessageBox("No Rows were checked for deletion!"); }

        }


    }
}
