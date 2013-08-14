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
    public partial class ShipmentDetail
    {
        partial void Shipment_Loaded(bool succeeded)
        {
            // Write your code here.
            this.SetDisplayNameFromEntity(this.Shipment);
        }

        partial void Shipment_Changed()
        {
            // Write your code here.
            this.SetDisplayNameFromEntity(this.Shipment);
        }

        partial void ShipmentDetail_Saved()
        {
            // Write your code here.
            this.SetDisplayNameFromEntity(this.Shipment);
        }

        partial void ExpeditingsAddAndEditNew_CanExecute(ref bool result)
        {
            result = this.Expeditings.CanAddNew;

        }

        partial void ExpeditingsAddAndEditNew_Execute()
        {
            Expediting exp = this.Expeditings.AddNew();
            this.Expeditings.SelectedItem = exp;
            this.OpenModalWindow("modalEXP");

        }

        partial void SaveExpediting_Execute()
        {
            this.Save();
            this.CloseModalWindow("modalEXP");

        }

        partial void CancelExpediting_Execute()
        {
            this.CloseModalWindow("modalEXP");
            this.DataWorkspace.ProcurementData.Details.DiscardChanges();

        }
    }
}