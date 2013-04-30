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
    public partial class NewProject
    {
        partial void NewProject_InitializeDataWorkspace(global::System.Collections.Generic.List<global::Microsoft.LightSwitch.IDataService> saveChangesTo)
        {
            // Write your code here.
            this.ProjectProperty = new Project();
        }

        partial void NewProject_Saved()
        {
            // Write your code here.
            this.Close(false);
            Application.Current.ShowDefaultScreen(this.ProjectProperty);
        }

        partial void Project_StakeholdersAddAndEditNew_CanExecute(ref bool result)
        {
            // Write your code here.

        }

       

        partial void Project_StakeholdersAddAndEditNew1_CanExecute(ref bool result)
        {
            // Write your code here.

        }

        partial void Project_StakeholdersAddAndEditNew1_Execute()
        {
            this.Application.ShowAddProjectStakeholder();

        }

        

        
    }
}