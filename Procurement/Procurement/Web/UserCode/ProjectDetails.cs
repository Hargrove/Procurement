﻿using System;
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

        partial void RFQ_PAddAndEditNew_CanExecute(ref bool result)
        {
            result = this.RFQ_P.CanAddNew;

        }

        partial void RFQ_PAddAndEditNew_Execute()
        {
            RFQ_PItem rfq = this.RFQ_P.AddNew();
            this.RFQ_P.SelectedItem = rfq;
            this.OpenModalWindow("modalRFQ");

        }

        partial void AddRFQ_Execute()
        {
            this.CloseModalWindow("modalRFQ");// Write your code here.

        }

        partial void CancelRFQ_Execute()
        {
            foreach (RFQ_PItem rfq in this.DataWorkspace.ProcurementData.Details.GetChanges().AddedEntities.OfType<RFQ_PItem>())
                rfq.Details.DiscardChanges();
            this.CloseModalWindow("modalRFQ");

        }

        partial void Project_StakeholdersEditSelected_CanExecute(ref bool result)
        {
            // Write your code here.

        }

        partial void Project_StakeholdersEditSelected_Execute()
        {
            Stakeholder STK = this.Project_Stakeholders.SelectedItem.Stakeholder1;
            this.Stakeholders.SelectedItem = STK;
            this.OpenModalWindow("modalESTK");


        }

        
    }
}