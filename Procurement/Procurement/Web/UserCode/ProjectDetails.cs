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
    public partial class ProjectDetails
    {
        partial void Project_Loaded(bool succeeded)
        {
            // Write your code here.
            this.SetDisplayNameFromEntity(this.Project);
        }

        partial void Project_Changed()
        {
            // Write your code here.
            this.SetDisplayNameFromEntity(this.Project);
        }

        partial void ProjectDetails_Saved()
        {
            // Write your code here.
            this.SetDisplayNameFromEntity(this.Project);
        }

        partial void Project_Stakeholders1AddAndEditNew_CanExecute(ref bool result)
        {
            // Write your code here.

        }

        partial void Project_Stakeholders1AddAndEditNew_Execute()
        {
            this.Application.ShowAddProjectStakeholder();

        }

        partial void Project_StakeholdersAddAndEditNew_CanExecute(ref bool result)
        {
            // Write your code here.

        }

        partial void Project_StakeholdersAddAndEditNew_Execute()
        {
            this.Application.ShowAddProjectStakeholder();

        }

        partial void Project_StakeholdersAddAndEditNew1_CanExecute(ref bool result)
        {
            result = this.Project_Stakeholders.CanAddNew;

        }

        partial void Project_StakeholdersAddAndEditNew1_Execute()
        {
            Project_Stakeholder sh = this.Project_Stakeholders.AddNew();
            this.Project_Stakeholders.SelectedItem = sh;
            this.OpenModalWindow("modalPSH");

        }

        partial void AddPSH_Execute()
        {
            this.CloseModalWindow("modalPSH");

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