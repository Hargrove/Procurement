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
    public partial class ProposalShipping
    {
        partial void ShowExpediting_Execute()
        {
            if(this.Shipments.SelectedItem != null)
            this.Application.ShowShipmentDetail(this.Shipments.SelectedItem.ID);
        }
    }
}
