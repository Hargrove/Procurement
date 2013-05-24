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

        partial void Award_SelectedsAddAndEditNew_CanExecute(ref bool result)
        {
            result = this.Award_Selecteds.CanAddNew;

        }

        partial void Award_SelectedsAddAndEditNew_Execute()
        {
           

            Award_Selected asel = this.Award_Selecteds.AddNew();
            this.Award_Selecteds.SelectedItem = asel;
            this.OpenModalWindow("modalASEL");

        }
    }
}