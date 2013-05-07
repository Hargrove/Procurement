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
    public partial class SuppliersListDetail
    {
        partial void SupplierManufacturesAddAndEditNew_CanExecute(ref bool result)
        {
            result = this.Manufacturers.CanAddNew;// Write your code here.

        }

        partial void SupplierManufacturesAddAndEditNew_Execute()
        {
            Manufacturer mfg = this.Manufacturers.AddNew();
            this.Manufacturers.SelectedItem = mfg;
            this.OpenModalWindow("modalMFG");

        }

        partial void AddManufacturer_Execute()
        {
            if (Manufacturers.SelectedItem != null)
            {
                SupplierManufacture smExist = new SupplierManufacture();
                foreach (SupplierManufacture smSearch in this.SupplierManufactures)
                {
                    if (smSearch.Manufacturer == this.Manufacturers.SelectedItem)
                    {
                        smExist = smSearch;
                        smSearch.Delete();
                        this.DataWorkspace.ProcurementData.Details.DiscardChanges();
                        this.SupplierManufactures.Refresh();
                    }
                }

                if (smExist == null || smExist.Manufacturer == null)
                {
                    smExist.Delete();
                    SupplierManufacture sm = SupplierManufactures.AddNew();
                    sm.Supplier = this.Suppliers.SelectedItem;
                    sm.Manufacturer = Manufacturers.SelectedItem;
                    this.Save();
                    this.SupplierManufactures.Refresh();
                }
            }

        }

        partial void RemoveManufacturer_Execute()
        {
            SupplierManufactures.DeleteSelected();

        }
    }
}
