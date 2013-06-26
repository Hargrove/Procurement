using System;
using System.Linq;
using System.IO;
using System.IO.IsolatedStorage;
using System.Collections.Generic;
using Microsoft.LightSwitch;
using Microsoft.LightSwitch.Framework.Client;
using Microsoft.LightSwitch.Presentation;
using Microsoft.LightSwitch.Presentation.Extensions;
using System.Collections.ObjectModel;
using System.ComponentModel;
namespace LightSwitchApplication
{
    public partial class POListDetail
    {
        ObservableCollection<PO_Line> SelectedPOs = new ObservableCollection<PO_Line>();
        ObservableCollection<Award_Selected> SelectedAwards = new ObservableCollection<Award_Selected>();

        partial void POListDetail_InitializeDataWorkspace(List<IDataService> saveChangesTo)
        {
            this.FindControl("FilterByAwardedSupplierID").AddCheckBoxColumnForMultiSelection<Award_Selected>(SelectedAwards);
            this.FindControl("PO_Lines").AddCheckBoxColumnForMultiSelection<PO_Line>(SelectedPOs);

        }

        partial void AddAwardToSelectedPO_Execute()
        {
            foreach (Award_Selected aws in SelectedAwards)
            {
                if (POLineExist(aws.Proposal1.ID, aws.Proposal_Line1.ID) == false)
                {
                    PO_Line poL = PO_Lines.AddNew();
                    poL.PO = this.PO.SelectedItem;
                    poL.POLineRef = PO.SelectedItem.PO_Lines.Count();
                    poL.Award_Selected1 = aws;
                    poL.Proposal_Line1 = aws.Proposal_Line1;
                    poL.Proposal1 = aws.Proposal1;
                    poL.Description = "(RFQ: ["+ aws.RFQ_PItem1.PkgNo + "]"+aws.RFQ_PItem1.PkgName+") - "+ aws.RFQ_Line1.Description;
                    aws.HasPO = true;

                }
            }
            this.SelectedAwards.Clear();
            this.Save();
            this.FilterByAwardedSupplierID.Refresh();
        }

        partial void RemoveFromPO_Execute()
        {
            
            foreach (PO_Line pLine in SelectedPOs)
            {
                pLine.Delete();
                
               
                IDataServiceQueryable<Award_Selected> awS = (from x in DataWorkspace.ProcurementData.Award_Selecteds where x.Proposal1.ID == pLine.Proposal1.ID && x.Proposal_Line1.ID == pLine.Proposal_Line1.ID select x);
                foreach (Award_Selected Aws in awS)
                {
                    Aws.HasPO = false;
                }
            }
            int Po_x = 1;
            foreach(PO_Line poLn in PO.SelectedItem.PO_Lines)
            {
                poLn.POLineRef = Po_x;
                Po_x++;
            }
            this.SelectedPOs.Clear();
            this.Save();
            this.PO_Lines.Refresh();
            this.FilterByAwardedSupplierID.Refresh();

        }

        private bool POLineExist(int propID, int plineid)
        {

            //IDataServiceQueryable<Award_Selected> aw = (from x in DataWorkspace.ProcurementData.Award_Selecteds where x.Proposal1.ID == propID && x.Proposal_Line1.ID == plineid select x); 
            var query = DataWorkspace.ProcurementData.PO_Lines.Where(x => x.Proposal1.ID == propID && x.Proposal_Line1.ID == plineid).FirstOrDefault();
            if (query == null)
            {
                return false;
            }
            else
            {
                return true;
            }
        }


    }
}
