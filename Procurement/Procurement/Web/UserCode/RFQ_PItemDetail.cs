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
    }
}