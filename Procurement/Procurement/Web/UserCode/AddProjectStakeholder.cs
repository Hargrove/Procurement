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
    public partial class AddProjectStakeholder
    {
        partial void AddProjectStakeholder_InitializeDataWorkspace(global::System.Collections.Generic.List<global::Microsoft.LightSwitch.IDataService> saveChangesTo)
        {
            // Write your code here.
            this.Project_StakeholderProperty = new Project_Stakeholder();
        }

        partial void AddProjectStakeholder_Saved()
        {
            // Write your code here.
            this.Close(false);
            Application.Current.ShowDefaultScreen(this.Project_StakeholderProperty);
        }

        partial void AddStakeholderType_Execute()
        {
            this.Application.ShowStakeholdertypeLookup();

        }

        partial void AddStakeholder_Execute()
        {
            this.Application.ShowAddStakeholder();

        }
    }
}