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
    public partial class Add_Shipping
    {
        partial void Proposal_Line_Loaded(bool succeeded)
        {
            // Write your code here.
            this.SetDisplayNameFromEntity(this.Proposal_Line);
        }

        partial void Proposal_Line_Changed()
        {
            // Write your code here.
            this.SetDisplayNameFromEntity(this.Proposal_Line);
        }

        partial void Add_Shipping_Saved()
        {
            // Write your code here.
            this.SetDisplayNameFromEntity(this.Proposal_Line);
        }
    }
}