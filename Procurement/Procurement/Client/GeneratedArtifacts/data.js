/// <reference path="../Scripts/msls-1.0.0.js" />

window.myapp = msls.application;

(function (lightSwitchApplication) {

    var $Entity = msls.Entity,
        $DataService = msls.DataService,
        $DataWorkspace = msls.DataWorkspace,
        $defineEntity = msls._defineEntity,
        $defineDataService = msls._defineDataService,
        $defineDataWorkspace = msls._defineDataWorkspace,
        $DataServiceQuery = msls.DataServiceQuery,
        $toODataString = msls._toODataString;

    function Award_Selected(entitySet) {
        /// <summary>
        /// Represents the Award_Selected entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this award_Selected.
        /// </param>
        /// <field name="ID" type="Number">
        /// Gets or sets the iD for this award_Selected.
        /// </field>
        /// <field name="RFQItem" type="Number">
        /// Gets or sets the rFQItem for this award_Selected.
        /// </field>
        /// <field name="SourceReason" type="String">
        /// Gets or sets the sourceReason for this award_Selected.
        /// </field>
        /// <field name="AwdReqstd" type="Date">
        /// Gets or sets the awdReqstd for this award_Selected.
        /// </field>
        /// <field name="AwdApp" type="Date">
        /// Gets or sets the awdApp for this award_Selected.
        /// </field>
        /// <field name="RequisitionNo" type="String">
        /// Gets or sets the requisitionNo for this award_Selected.
        /// </field>
        /// <field name="RequisitionSub" type="Date">
        /// Gets or sets the requisitionSub for this award_Selected.
        /// </field>
        /// <field name="RequisitionApp" type="Date">
        /// Gets or sets the requisitionApp for this award_Selected.
        /// </field>
        /// <field name="Comment" type="String">
        /// Gets or sets the comment for this award_Selected.
        /// </field>
        /// <field name="PO_Line" type="msls.application.PO_Line">
        /// Gets or sets the pO_Line for this award_Selected.
        /// </field>
        /// <field name="PO_Line1" type="msls.application.PO_Line">
        /// Gets or sets the pO_Line1 for this award_Selected.
        /// </field>
        /// <field name="RFQ_PItem" type="msls.application.RFQ_PItem">
        /// Gets or sets the rFQ_PItem for this award_Selected.
        /// </field>
        /// <field name="Proposal" type="msls.application.Proposal">
        /// Gets or sets the proposal for this award_Selected.
        /// </field>
        /// <field name="details" type="msls.application.Award_Selected.Details">
        /// Gets the details for this award_Selected.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function BidList(entitySet) {
        /// <summary>
        /// Represents the BidList entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this bidList.
        /// </param>
        /// <field name="id" type="Number">
        /// Gets or sets the id for this bidList.
        /// </field>
        /// <field name="RFQ_PItem" type="msls.application.RFQ_PItem">
        /// Gets or sets the rFQ_PItem for this bidList.
        /// </field>
        /// <field name="Supplier" type="msls.application.Supplier">
        /// Gets or sets the supplier for this bidList.
        /// </field>
        /// <field name="details" type="msls.application.BidList.Details">
        /// Gets the details for this bidList.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Business_Class(entitySet) {
        /// <summary>
        /// Represents the Business_Class entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this business_Class.
        /// </param>
        /// <field name="ID" type="Number">
        /// Gets or sets the iD for this business_Class.
        /// </field>
        /// <field name="BusinessClass" type="String">
        /// Gets or sets the businessClass for this business_Class.
        /// </field>
        /// <field name="Suppliers" type="msls.EntityCollection">
        /// Gets the suppliers for this business_Class.
        /// </field>
        /// <field name="details" type="msls.application.Business_Class.Details">
        /// Gets the details for this business_Class.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function ChangeOrder(entitySet) {
        /// <summary>
        /// Represents the ChangeOrder entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this changeOrder.
        /// </param>
        /// <field name="ID" type="Number">
        /// Gets or sets the iD for this changeOrder.
        /// </field>
        /// <field name="ChangeOrderNum" type="Number">
        /// Gets or sets the changeOrderNum for this changeOrder.
        /// </field>
        /// <field name="PCN" type="String">
        /// Gets or sets the pCN for this changeOrder.
        /// </field>
        /// <field name="COAward" type="Date">
        /// Gets or sets the cOAward for this changeOrder.
        /// </field>
        /// <field name="CO_Description" type="String">
        /// Gets or sets the cO_Description for this changeOrder.
        /// </field>
        /// <field name="CO_WBS" type="String">
        /// Gets or sets the cO_WBS for this changeOrder.
        /// </field>
        /// <field name="CO_Qty" type="Number">
        /// Gets or sets the cO_Qty for this changeOrder.
        /// </field>
        /// <field name="CO_UOM" type="String">
        /// Gets or sets the cO_UOM for this changeOrder.
        /// </field>
        /// <field name="CO_CostPerUnit" type="Number">
        /// Gets or sets the cO_CostPerUnit for this changeOrder.
        /// </field>
        /// <field name="PO" type="msls.application.PO">
        /// Gets or sets the pO for this changeOrder.
        /// </field>
        /// <field name="PO_Line" type="msls.application.PO_Line">
        /// Gets or sets the pO_Line for this changeOrder.
        /// </field>
        /// <field name="LineChangeOrders" type="msls.EntityCollection">
        /// Gets the lineChangeOrders for this changeOrder.
        /// </field>
        /// <field name="details" type="msls.application.ChangeOrder.Details">
        /// Gets the details for this changeOrder.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Client_Approved(entitySet) {
        /// <summary>
        /// Represents the Client_Approved entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this client_Approved.
        /// </param>
        /// <field name="ID" type="Number">
        /// Gets or sets the iD for this client_Approved.
        /// </field>
        /// <field name="Client" type="String">
        /// Gets or sets the client for this client_Approved.
        /// </field>
        /// <field name="ServiceAgreement" type="String">
        /// Gets or sets the serviceAgreement for this client_Approved.
        /// </field>
        /// <field name="SupplierID_No" type="String">
        /// Gets or sets the supplierID_No for this client_Approved.
        /// </field>
        /// <field name="SiteApproved" type="Boolean">
        /// Gets or sets the siteApproved for this client_Approved.
        /// </field>
        /// <field name="Preference1" type="msls.application.Preference">
        /// Gets or sets the preference1 for this client_Approved.
        /// </field>
        /// <field name="Supplier" type="msls.application.Supplier">
        /// Gets or sets the supplier for this client_Approved.
        /// </field>
        /// <field name="details" type="msls.application.Client_Approved.Details">
        /// Gets the details for this client_Approved.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Client(entitySet) {
        /// <summary>
        /// Represents the Client entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this client.
        /// </param>
        /// <field name="ID" type="Number">
        /// Gets or sets the iD for this client.
        /// </field>
        /// <field name="Name" type="String">
        /// Gets or sets the name for this client.
        /// </field>
        /// <field name="Projects" type="msls.EntityCollection">
        /// Gets the projects for this client.
        /// </field>
        /// <field name="details" type="msls.application.Client.Details">
        /// Gets the details for this client.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Expediting(entitySet) {
        /// <summary>
        /// Represents the Expediting entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this expediting.
        /// </param>
        /// <field name="ID" type="Number">
        /// Gets or sets the iD for this expediting.
        /// </field>
        /// <field name="ExpeditingLevel" type="String">
        /// Gets or sets the expeditingLevel for this expediting.
        /// </field>
        /// <field name="LastContacted" type="Date">
        /// Gets or sets the lastContacted for this expediting.
        /// </field>
        /// <field name="LastResponse" type="Date">
        /// Gets or sets the lastResponse for this expediting.
        /// </field>
        /// <field name="Results" type="String">
        /// Gets or sets the results for this expediting.
        /// </field>
        /// <field name="ShipmentRefNum" type="String">
        /// Gets or sets the shipmentRefNum for this expediting.
        /// </field>
        /// <field name="ETS" type="Date">
        /// Gets or sets the eTS for this expediting.
        /// </field>
        /// <field name="ETA" type="Date">
        /// Gets or sets the eTA for this expediting.
        /// </field>
        /// <field name="Notes" type="String">
        /// Gets or sets the notes for this expediting.
        /// </field>
        /// <field name="Material_Status" type="msls.application.Material_Status">
        /// Gets or sets the material_Status for this expediting.
        /// </field>
        /// <field name="PO_Line" type="msls.application.PO_Line">
        /// Gets or sets the pO_Line for this expediting.
        /// </field>
        /// <field name="Shipment" type="msls.application.Shipment">
        /// Gets or sets the shipment for this expediting.
        /// </field>
        /// <field name="details" type="msls.application.Expediting.Details">
        /// Gets the details for this expediting.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function LineChangeOrder(entitySet) {
        /// <summary>
        /// Represents the LineChangeOrder entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this lineChangeOrder.
        /// </param>
        /// <field name="ID" type="Number">
        /// Gets or sets the iD for this lineChangeOrder.
        /// </field>
        /// <field name="CO_Description" type="String">
        /// Gets or sets the cO_Description for this lineChangeOrder.
        /// </field>
        /// <field name="CO_WBS" type="String">
        /// Gets or sets the cO_WBS for this lineChangeOrder.
        /// </field>
        /// <field name="CO_Qty" type="Number">
        /// Gets or sets the cO_Qty for this lineChangeOrder.
        /// </field>
        /// <field name="CO_UOM" type="String">
        /// Gets or sets the cO_UOM for this lineChangeOrder.
        /// </field>
        /// <field name="CO_CostPerUnit" type="Number">
        /// Gets or sets the cO_CostPerUnit for this lineChangeOrder.
        /// </field>
        /// <field name="ChangeOrder" type="msls.application.ChangeOrder">
        /// Gets or sets the changeOrder for this lineChangeOrder.
        /// </field>
        /// <field name="PO_Line" type="msls.application.PO_Line">
        /// Gets or sets the pO_Line for this lineChangeOrder.
        /// </field>
        /// <field name="details" type="msls.application.LineChangeOrder.Details">
        /// Gets the details for this lineChangeOrder.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Manufacturer(entitySet) {
        /// <summary>
        /// Represents the Manufacturer entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this manufacturer.
        /// </param>
        /// <field name="ID" type="Number">
        /// Gets or sets the iD for this manufacturer.
        /// </field>
        /// <field name="Mfg_Name" type="String">
        /// Gets or sets the mfg_Name for this manufacturer.
        /// </field>
        /// <field name="Specialty" type="String">
        /// Gets or sets the specialty for this manufacturer.
        /// </field>
        /// <field name="SupplierManufactures" type="msls.EntityCollection">
        /// Gets the supplierManufactures for this manufacturer.
        /// </field>
        /// <field name="details" type="msls.application.Manufacturer.Details">
        /// Gets the details for this manufacturer.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Material_Status(entitySet) {
        /// <summary>
        /// Represents the Material_Status entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this material_Status.
        /// </param>
        /// <field name="ID" type="Number">
        /// Gets or sets the iD for this material_Status.
        /// </field>
        /// <field name="MaterialStatus" type="String">
        /// Gets or sets the materialStatus for this material_Status.
        /// </field>
        /// <field name="Expeditings" type="msls.EntityCollection">
        /// Gets the expeditings for this material_Status.
        /// </field>
        /// <field name="details" type="msls.application.Material_Status.Details">
        /// Gets the details for this material_Status.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Phase(entitySet) {
        /// <summary>
        /// Represents the Phase entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this phase.
        /// </param>
        /// <field name="ID" type="Number">
        /// Gets or sets the iD for this phase.
        /// </field>
        /// <field name="Phase1" type="String">
        /// Gets or sets the phase1 for this phase.
        /// </field>
        /// <field name="Projects" type="msls.EntityCollection">
        /// Gets the projects for this phase.
        /// </field>
        /// <field name="details" type="msls.application.Phase.Details">
        /// Gets the details for this phase.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function PO(entitySet) {
        /// <summary>
        /// Represents the PO entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this pO.
        /// </param>
        /// <field name="ID" type="Number">
        /// Gets or sets the iD for this pO.
        /// </field>
        /// <field name="PONumber" type="String">
        /// Gets or sets the pONumber for this pO.
        /// </field>
        /// <field name="AwardDate" type="Date">
        /// Gets or sets the awardDate for this pO.
        /// </field>
        /// <field name="SupplierID" type="Number">
        /// Gets or sets the supplierID for this pO.
        /// </field>
        /// <field name="Closed" type="Boolean">
        /// Gets or sets the closed for this pO.
        /// </field>
        /// <field name="ChangeOrders" type="msls.EntityCollection">
        /// Gets the changeOrders for this pO.
        /// </field>
        /// <field name="PO_Lines" type="msls.EntityCollection">
        /// Gets the pO_Lines for this pO.
        /// </field>
        /// <field name="details" type="msls.application.PO.Details">
        /// Gets the details for this pO.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function PO_Line(entitySet) {
        /// <summary>
        /// Represents the PO_Line entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this pO_Line.
        /// </param>
        /// <field name="id" type="Number">
        /// Gets or sets the id for this pO_Line.
        /// </field>
        /// <field name="POLineRef" type="Number">
        /// Gets or sets the pOLineRef for this pO_Line.
        /// </field>
        /// <field name="PropLineSlctd" type="Number">
        /// Gets or sets the propLineSlctd for this pO_Line.
        /// </field>
        /// <field name="ProposalSelected" type="Number">
        /// Gets or sets the proposalSelected for this pO_Line.
        /// </field>
        /// <field name="Award_Selecteds" type="msls.EntityCollection">
        /// Gets the award_Selecteds for this pO_Line.
        /// </field>
        /// <field name="Award_Selecteds1" type="msls.EntityCollection">
        /// Gets the award_Selecteds1 for this pO_Line.
        /// </field>
        /// <field name="ChangeOrders" type="msls.EntityCollection">
        /// Gets the changeOrders for this pO_Line.
        /// </field>
        /// <field name="Expeditings" type="msls.EntityCollection">
        /// Gets the expeditings for this pO_Line.
        /// </field>
        /// <field name="LineChangeOrders" type="msls.EntityCollection">
        /// Gets the lineChangeOrders for this pO_Line.
        /// </field>
        /// <field name="PO" type="msls.application.PO">
        /// Gets or sets the pO for this pO_Line.
        /// </field>
        /// <field name="details" type="msls.application.PO_Line.Details">
        /// Gets the details for this pO_Line.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Preference(entitySet) {
        /// <summary>
        /// Represents the Preference entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this preference.
        /// </param>
        /// <field name="ID" type="Number">
        /// Gets or sets the iD for this preference.
        /// </field>
        /// <field name="PreferenceType" type="String">
        /// Gets or sets the preferenceType for this preference.
        /// </field>
        /// <field name="Client_Approveds" type="msls.EntityCollection">
        /// Gets the client_Approveds for this preference.
        /// </field>
        /// <field name="details" type="msls.application.Preference.Details">
        /// Gets the details for this preference.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Project(entitySet) {
        /// <summary>
        /// Represents the Project entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this project.
        /// </param>
        /// <field name="ID" type="Number">
        /// Gets or sets the iD for this project.
        /// </field>
        /// <field name="ProjectNo" type="String">
        /// Gets or sets the projectNo for this project.
        /// </field>
        /// <field name="Year" type="Date">
        /// Gets or sets the year for this project.
        /// </field>
        /// <field name="Project_Stakeholders" type="msls.EntityCollection">
        /// Gets the project_Stakeholders for this project.
        /// </field>
        /// <field name="RFQ_P" type="msls.EntityCollection">
        /// Gets the rFQ_P for this project.
        /// </field>
        /// <field name="Name" type="String">
        /// Gets or sets the name for this project.
        /// </field>
        /// <field name="Client1" type="msls.application.Client">
        /// Gets or sets the client1 for this project.
        /// </field>
        /// <field name="Phase1" type="msls.application.Phase">
        /// Gets or sets the phase1 for this project.
        /// </field>
        /// <field name="details" type="msls.application.Project.Details">
        /// Gets the details for this project.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Project_Stakeholder(entitySet) {
        /// <summary>
        /// Represents the Project_Stakeholder entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this project_Stakeholder.
        /// </param>
        /// <field name="Stakeholder_Type" type="msls.application.Stakeholder_Type">
        /// Gets or sets the stakeholder_Type for this project_Stakeholder.
        /// </field>
        /// <field name="Project" type="msls.application.Project">
        /// Gets or sets the project for this project_Stakeholder.
        /// </field>
        /// <field name="Stakeholder1" type="msls.application.Stakeholder">
        /// Gets or sets the stakeholder1 for this project_Stakeholder.
        /// </field>
        /// <field name="id" type="Number">
        /// Gets or sets the id for this project_Stakeholder.
        /// </field>
        /// <field name="details" type="msls.application.Project_Stakeholder.Details">
        /// Gets the details for this project_Stakeholder.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Proposal(entitySet) {
        /// <summary>
        /// Represents the Proposal entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this proposal.
        /// </param>
        /// <field name="ID" type="Number">
        /// Gets or sets the iD for this proposal.
        /// </field>
        /// <field name="SupplierID" type="Number">
        /// Gets or sets the supplierID for this proposal.
        /// </field>
        /// <field name="ShippingRefNo" type="String">
        /// Gets or sets the shippingRefNo for this proposal.
        /// </field>
        /// <field name="BidRecieved" type="Date">
        /// Gets or sets the bidRecieved for this proposal.
        /// </field>
        /// <field name="Comment" type="String">
        /// Gets or sets the comment for this proposal.
        /// </field>
        /// <field name="Award_Selected" type="msls.application.Award_Selected">
        /// Gets or sets the award_Selected for this proposal.
        /// </field>
        /// <field name="RFQ_PItem" type="msls.application.RFQ_PItem">
        /// Gets or sets the rFQ_PItem for this proposal.
        /// </field>
        /// <field name="details" type="msls.application.Proposal.Details">
        /// Gets the details for this proposal.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Proposal_Line(entitySet) {
        /// <summary>
        /// Represents the Proposal_Line entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this proposal_Line.
        /// </param>
        /// <field name="ID" type="Number">
        /// Gets or sets the iD for this proposal_Line.
        /// </field>
        /// <field name="ProposalID" type="Number">
        /// Gets or sets the proposalID for this proposal_Line.
        /// </field>
        /// <field name="CostPerUnit" type="Number">
        /// Gets or sets the costPerUnit for this proposal_Line.
        /// </field>
        /// <field name="MeetSpecs" type="Boolean">
        /// Gets or sets the meetSpecs for this proposal_Line.
        /// </field>
        /// <field name="CountryOfOrigin" type="String">
        /// Gets or sets the countryOfOrigin for this proposal_Line.
        /// </field>
        /// <field name="ShippingARO" type="Number">
        /// Gets or sets the shippingARO for this proposal_Line.
        /// </field>
        /// <field name="SubmittalsARO" type="Number">
        /// Gets or sets the submittalsARO for this proposal_Line.
        /// </field>
        /// <field name="NegotiatedFinalCost" type="Number">
        /// Gets or sets the negotiatedFinalCost for this proposal_Line.
        /// </field>
        /// <field name="Notes" type="String">
        /// Gets or sets the notes for this proposal_Line.
        /// </field>
        /// <field name="RFQ_Line" type="msls.application.RFQ_Line">
        /// Gets or sets the rFQ_Line for this proposal_Line.
        /// </field>
        /// <field name="Shipments" type="msls.EntityCollection">
        /// Gets the shipments for this proposal_Line.
        /// </field>
        /// <field name="details" type="msls.application.Proposal_Line.Details">
        /// Gets the details for this proposal_Line.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function RFQ_Line(entitySet) {
        /// <summary>
        /// Represents the RFQ_Line entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this rFQ_Line.
        /// </param>
        /// <field name="id" type="Number">
        /// Gets or sets the id for this rFQ_Line.
        /// </field>
        /// <field name="RFQLineNo" type="Number">
        /// Gets or sets the rFQLineNo for this rFQ_Line.
        /// </field>
        /// <field name="Description" type="String">
        /// Gets or sets the description for this rFQ_Line.
        /// </field>
        /// <field name="Qty" type="Number">
        /// Gets or sets the qty for this rFQ_Line.
        /// </field>
        /// <field name="TestingReq" type="Boolean">
        /// Gets or sets the testingReq for this rFQ_Line.
        /// </field>
        /// <field name="TestingLevel" type="String">
        /// Gets or sets the testingLevel for this rFQ_Line.
        /// </field>
        /// <field name="Inspection" type="Boolean">
        /// Gets or sets the inspection for this rFQ_Line.
        /// </field>
        /// <field name="ShippingRefNo" type="String">
        /// Gets or sets the shippingRefNo for this rFQ_Line.
        /// </field>
        /// <field name="TagNo" type="String">
        /// Gets or sets the tagNo for this rFQ_Line.
        /// </field>
        /// <field name="RecievedQty" type="Number">
        /// Gets or sets the recievedQty for this rFQ_Line.
        /// </field>
        /// <field name="Notes" type="String">
        /// Gets or sets the notes for this rFQ_Line.
        /// </field>
        /// <field name="Proposal_Lines" type="msls.EntityCollection">
        /// Gets the proposal_Lines for this rFQ_Line.
        /// </field>
        /// <field name="RFQ_PItem" type="msls.application.RFQ_PItem">
        /// Gets or sets the rFQ_PItem for this rFQ_Line.
        /// </field>
        /// <field name="Submittals" type="msls.EntityCollection">
        /// Gets the submittals for this rFQ_Line.
        /// </field>
        /// <field name="UOM1" type="msls.application.UOM">
        /// Gets or sets the uOM1 for this rFQ_Line.
        /// </field>
        /// <field name="details" type="msls.application.RFQ_Line.Details">
        /// Gets the details for this rFQ_Line.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function RFQ_PItem(entitySet) {
        /// <summary>
        /// Represents the RFQ_PItem entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this rFQ_PItem.
        /// </param>
        /// <field name="ID" type="Number">
        /// Gets or sets the iD for this rFQ_PItem.
        /// </field>
        /// <field name="PkgNo" type="String">
        /// Gets or sets the pkgNo for this rFQ_PItem.
        /// </field>
        /// <field name="PkgName" type="String">
        /// Gets or sets the pkgName for this rFQ_PItem.
        /// </field>
        /// <field name="PkgDescription" type="String">
        /// Gets or sets the pkgDescription for this rFQ_PItem.
        /// </field>
        /// <field name="PkgWBS" type="String">
        /// Gets or sets the pkgWBS for this rFQ_PItem.
        /// </field>
        /// <field name="BudgetValue" type="Number">
        /// Gets or sets the budgetValue for this rFQ_PItem.
        /// </field>
        /// <field name="SourceStrategy" type="String">
        /// Gets or sets the sourceStrategy for this rFQ_PItem.
        /// </field>
        /// <field name="ReqdOnSite" type="Date">
        /// Gets or sets the reqdOnSite for this rFQ_PItem.
        /// </field>
        /// <field name="EstTransportDays" type="Number">
        /// Gets or sets the estTransportDays for this rFQ_PItem.
        /// </field>
        /// <field name="EstMfgDays" type="Number">
        /// Gets or sets the estMfgDays for this rFQ_PItem.
        /// </field>
        /// <field name="EstAwdProcessDays" type="Number">
        /// Gets or sets the estAwdProcessDays for this rFQ_PItem.
        /// </field>
        /// <field name="EstProposalDays" type="Number">
        /// Gets or sets the estProposalDays for this rFQ_PItem.
        /// </field>
        /// <field name="ERW" type="Date">
        /// Gets or sets the eRW for this rFQ_PItem.
        /// </field>
        /// <field name="ERWNumber" type="String">
        /// Gets or sets the eRWNumber for this rFQ_PItem.
        /// </field>
        /// <field name="ERW_Rev" type="String">
        /// Gets or sets the eRW_Rev for this rFQ_PItem.
        /// </field>
        /// <field name="ERWContact" type="String">
        /// Gets or sets the eRWContact for this rFQ_PItem.
        /// </field>
        /// <field name="SpecifiedBidDue" type="Date">
        /// Gets or sets the specifiedBidDue for this rFQ_PItem.
        /// </field>
        /// <field name="RevisedBidDue" type="Date">
        /// Gets or sets the revisedBidDue for this rFQ_PItem.
        /// </field>
        /// <field name="BidsReceived" type="Date">
        /// Gets or sets the bidsReceived for this rFQ_PItem.
        /// </field>
        /// <field name="PreBidRequired" type="Boolean">
        /// Gets or sets the preBidRequired for this rFQ_PItem.
        /// </field>
        /// <field name="PreAwardRequired" type="Boolean">
        /// Gets or sets the preAwardRequired for this rFQ_PItem.
        /// </field>
        /// <field name="BidOpening" type="Date">
        /// Gets or sets the bidOpening for this rFQ_PItem.
        /// </field>
        /// <field name="ToEng" type="Date">
        /// Gets or sets the toEng for this rFQ_PItem.
        /// </field>
        /// <field name="EngApproval" type="Date">
        /// Gets or sets the engApproval for this rFQ_PItem.
        /// </field>
        /// <field name="TechComplaint" type="Boolean">
        /// Gets or sets the techComplaint for this rFQ_PItem.
        /// </field>
        /// <field name="Regret" type="Date">
        /// Gets or sets the regret for this rFQ_PItem.
        /// </field>
        /// <field name="CommercialDone" type="Date">
        /// Gets or sets the commercialDone for this rFQ_PItem.
        /// </field>
        /// <field name="CommercialComplaint" type="Boolean">
        /// Gets or sets the commercialComplaint for this rFQ_PItem.
        /// </field>
        /// <field name="Comments" type="String">
        /// Gets or sets the comments for this rFQ_PItem.
        /// </field>
        /// <field name="PreBid_Req" type="Boolean">
        /// Gets or sets the preBid_Req for this rFQ_PItem.
        /// </field>
        /// <field name="CriticalPath" type="Boolean">
        /// Gets or sets the criticalPath for this rFQ_PItem.
        /// </field>
        /// <field name="Award_Selecteds" type="msls.EntityCollection">
        /// Gets the award_Selecteds for this rFQ_PItem.
        /// </field>
        /// <field name="BidLists" type="msls.EntityCollection">
        /// Gets the bidLists for this rFQ_PItem.
        /// </field>
        /// <field name="Proposals" type="msls.EntityCollection">
        /// Gets the proposals for this rFQ_PItem.
        /// </field>
        /// <field name="RFQ_Lines" type="msls.EntityCollection">
        /// Gets the rFQ_Lines for this rFQ_PItem.
        /// </field>
        /// <field name="Project" type="msls.application.Project">
        /// Gets or sets the project for this rFQ_PItem.
        /// </field>
        /// <field name="details" type="msls.application.RFQ_PItem.Details">
        /// Gets the details for this rFQ_PItem.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Safety_Record(entitySet) {
        /// <summary>
        /// Represents the Safety_Record entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this safety_Record.
        /// </param>
        /// <field name="ID" type="Number">
        /// Gets or sets the iD for this safety_Record.
        /// </field>
        /// <field name="Year" type="Number">
        /// Gets or sets the year for this safety_Record.
        /// </field>
        /// <field name="EMR" type="Number">
        /// Gets or sets the eMR for this safety_Record.
        /// </field>
        /// <field name="TIFR" type="Number">
        /// Gets or sets the tIFR for this safety_Record.
        /// </field>
        /// <field name="Comments" type="String">
        /// Gets or sets the comments for this safety_Record.
        /// </field>
        /// <field name="Safety_Status" type="msls.application.Safety_Status">
        /// Gets or sets the safety_Status for this safety_Record.
        /// </field>
        /// <field name="Supplier" type="msls.application.Supplier">
        /// Gets or sets the supplier for this safety_Record.
        /// </field>
        /// <field name="details" type="msls.application.Safety_Record.Details">
        /// Gets the details for this safety_Record.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Safety_Status(entitySet) {
        /// <summary>
        /// Represents the Safety_Status entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this safety_Status.
        /// </param>
        /// <field name="ID" type="Number">
        /// Gets or sets the iD for this safety_Status.
        /// </field>
        /// <field name="Status" type="String">
        /// Gets or sets the status for this safety_Status.
        /// </field>
        /// <field name="Safety_Records" type="msls.EntityCollection">
        /// Gets the safety_Records for this safety_Status.
        /// </field>
        /// <field name="details" type="msls.application.Safety_Status.Details">
        /// Gets the details for this safety_Status.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Shipment(entitySet) {
        /// <summary>
        /// Represents the Shipment entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this shipment.
        /// </param>
        /// <field name="ID" type="Number">
        /// Gets or sets the iD for this shipment.
        /// </field>
        /// <field name="Origin" type="String">
        /// Gets or sets the origin for this shipment.
        /// </field>
        /// <field name="QtyShipments" type="Number">
        /// Gets or sets the qtyShipments for this shipment.
        /// </field>
        /// <field name="Containers_Shipment" type="String">
        /// Gets or sets the containers_Shipment for this shipment.
        /// </field>
        /// <field name="Mode" type="String">
        /// Gets or sets the mode for this shipment.
        /// </field>
        /// <field name="Carrier" type="String">
        /// Gets or sets the carrier for this shipment.
        /// </field>
        /// <field name="CarrierContact" type="String">
        /// Gets or sets the carrierContact for this shipment.
        /// </field>
        /// <field name="SpecialLift_handling" type="String">
        /// Gets or sets the specialLift_handling for this shipment.
        /// </field>
        /// <field name="IncoTerm" type="String">
        /// Gets or sets the incoTerm for this shipment.
        /// </field>
        /// <field name="TitleTransfer" type="String">
        /// Gets or sets the titleTransfer for this shipment.
        /// </field>
        /// <field name="StorageReqts" type="String">
        /// Gets or sets the storageReqts for this shipment.
        /// </field>
        /// <field name="ShipReq" type="Date">
        /// Gets or sets the shipReq for this shipment.
        /// </field>
        /// <field name="ShipDate" type="Date">
        /// Gets or sets the shipDate for this shipment.
        /// </field>
        /// <field name="RevisedShipDate" type="Date">
        /// Gets or sets the revisedShipDate for this shipment.
        /// </field>
        /// <field name="ReasonForRev" type="String">
        /// Gets or sets the reasonForRev for this shipment.
        /// </field>
        /// <field name="Delivery" type="Date">
        /// Gets or sets the delivery for this shipment.
        /// </field>
        /// <field name="BOL_Shipper" type="String">
        /// Gets or sets the bOL_Shipper for this shipment.
        /// </field>
        /// <field name="Comments" type="String">
        /// Gets or sets the comments for this shipment.
        /// </field>
        /// <field name="Expeditings" type="msls.EntityCollection">
        /// Gets the expeditings for this shipment.
        /// </field>
        /// <field name="Proposal_Line" type="msls.application.Proposal_Line">
        /// Gets or sets the proposal_Line for this shipment.
        /// </field>
        /// <field name="Transport_Type" type="msls.application.Transport_Type">
        /// Gets or sets the transport_Type for this shipment.
        /// </field>
        /// <field name="details" type="msls.application.Shipment.Details">
        /// Gets the details for this shipment.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Stakeholder_Type(entitySet) {
        /// <summary>
        /// Represents the Stakeholder_Type entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this stakeholder_Type.
        /// </param>
        /// <field name="ID" type="Number">
        /// Gets or sets the iD for this stakeholder_Type.
        /// </field>
        /// <field name="Stakeholder_Type1" type="String">
        /// Gets or sets the stakeholder_Type1 for this stakeholder_Type.
        /// </field>
        /// <field name="Project_Stakeholders" type="msls.EntityCollection">
        /// Gets the project_Stakeholders for this stakeholder_Type.
        /// </field>
        /// <field name="details" type="msls.application.Stakeholder_Type.Details">
        /// Gets the details for this stakeholder_Type.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Stakeholder(entitySet) {
        /// <summary>
        /// Represents the Stakeholder entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this stakeholder.
        /// </param>
        /// <field name="ID" type="Number">
        /// Gets or sets the iD for this stakeholder.
        /// </field>
        /// <field name="FirstName" type="String">
        /// Gets or sets the firstName for this stakeholder.
        /// </field>
        /// <field name="LastName" type="String">
        /// Gets or sets the lastName for this stakeholder.
        /// </field>
        /// <field name="Phone" type="String">
        /// Gets or sets the phone for this stakeholder.
        /// </field>
        /// <field name="Email" type="String">
        /// Gets or sets the email for this stakeholder.
        /// </field>
        /// <field name="Project_Stakeholders" type="msls.EntityCollection">
        /// Gets the project_Stakeholders for this stakeholder.
        /// </field>
        /// <field name="details" type="msls.application.Stakeholder.Details">
        /// Gets the details for this stakeholder.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Submittal(entitySet) {
        /// <summary>
        /// Represents the Submittal entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this submittal.
        /// </param>
        /// <field name="ID" type="Number">
        /// Gets or sets the iD for this submittal.
        /// </field>
        /// <field name="Submittal1" type="String">
        /// Gets or sets the submittal1 for this submittal.
        /// </field>
        /// <field name="SubmittalName" type="String">
        /// Gets or sets the submittalName for this submittal.
        /// </field>
        /// <field name="SubmittalNo" type="String">
        /// Gets or sets the submittalNo for this submittal.
        /// </field>
        /// <field name="SubmittalRevision" type="String">
        /// Gets or sets the submittalRevision for this submittal.
        /// </field>
        /// <field name="SubmittalDate" type="Date">
        /// Gets or sets the submittalDate for this submittal.
        /// </field>
        /// <field name="SubmittalRequired" type="Date">
        /// Gets or sets the submittalRequired for this submittal.
        /// </field>
        /// <field name="SubmitaalReviewed" type="Date">
        /// Gets or sets the submitaalReviewed for this submittal.
        /// </field>
        /// <field name="Comments" type="String">
        /// Gets or sets the comments for this submittal.
        /// </field>
        /// <field name="Transmittal" type="String">
        /// Gets or sets the transmittal for this submittal.
        /// </field>
        /// <field name="RFQ_Line1" type="msls.application.RFQ_Line">
        /// Gets or sets the rFQ_Line1 for this submittal.
        /// </field>
        /// <field name="SubmittalType1" type="msls.application.SubmittalType">
        /// Gets or sets the submittalType1 for this submittal.
        /// </field>
        /// <field name="details" type="msls.application.Submittal.Details">
        /// Gets the details for this submittal.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Supplier_Contact(entitySet) {
        /// <summary>
        /// Represents the Supplier_Contact entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this supplier_Contact.
        /// </param>
        /// <field name="ID" type="Number">
        /// Gets or sets the iD for this supplier_Contact.
        /// </field>
        /// <field name="First" type="String">
        /// Gets or sets the first for this supplier_Contact.
        /// </field>
        /// <field name="Middle" type="String">
        /// Gets or sets the middle for this supplier_Contact.
        /// </field>
        /// <field name="Last" type="String">
        /// Gets or sets the last for this supplier_Contact.
        /// </field>
        /// <field name="Email" type="String">
        /// Gets or sets the email for this supplier_Contact.
        /// </field>
        /// <field name="Title_Position" type="String">
        /// Gets or sets the title_Position for this supplier_Contact.
        /// </field>
        /// <field name="Phone" type="String">
        /// Gets or sets the phone for this supplier_Contact.
        /// </field>
        /// <field name="Cell" type="String">
        /// Gets or sets the cell for this supplier_Contact.
        /// </field>
        /// <field name="Fax" type="String">
        /// Gets or sets the fax for this supplier_Contact.
        /// </field>
        /// <field name="OtherInfo" type="String">
        /// Gets or sets the otherInfo for this supplier_Contact.
        /// </field>
        /// <field name="Supplier_Specialty" type="msls.application.Supplier_Specialty">
        /// Gets or sets the supplier_Specialty for this supplier_Contact.
        /// </field>
        /// <field name="details" type="msls.application.Supplier_Contact.Details">
        /// Gets the details for this supplier_Contact.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Supplier_Specialty(entitySet) {
        /// <summary>
        /// Represents the Supplier_Specialty entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this supplier_Specialty.
        /// </param>
        /// <field name="ID" type="Number">
        /// Gets or sets the iD for this supplier_Specialty.
        /// </field>
        /// <field name="Specialty" type="String">
        /// Gets or sets the specialty for this supplier_Specialty.
        /// </field>
        /// <field name="SpecialtyWeight" type="Number">
        /// Gets or sets the specialtyWeight for this supplier_Specialty.
        /// </field>
        /// <field name="PerformanceArea" type="String">
        /// Gets or sets the performanceArea for this supplier_Specialty.
        /// </field>
        /// <field name="Comment" type="String">
        /// Gets or sets the comment for this supplier_Specialty.
        /// </field>
        /// <field name="Supplier_Contacts" type="msls.EntityCollection">
        /// Gets the supplier_Contacts for this supplier_Specialty.
        /// </field>
        /// <field name="Supplier" type="msls.application.Supplier">
        /// Gets or sets the supplier for this supplier_Specialty.
        /// </field>
        /// <field name="details" type="msls.application.Supplier_Specialty.Details">
        /// Gets the details for this supplier_Specialty.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function SupplierManufacture(entitySet) {
        /// <summary>
        /// Represents the SupplierManufacture entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this supplierManufacture.
        /// </param>
        /// <field name="ID" type="Number">
        /// Gets or sets the iD for this supplierManufacture.
        /// </field>
        /// <field name="Manufacturer" type="msls.application.Manufacturer">
        /// Gets or sets the manufacturer for this supplierManufacture.
        /// </field>
        /// <field name="Supplier" type="msls.application.Supplier">
        /// Gets or sets the supplier for this supplierManufacture.
        /// </field>
        /// <field name="details" type="msls.application.SupplierManufacture.Details">
        /// Gets the details for this supplierManufacture.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Supplier(entitySet) {
        /// <summary>
        /// Represents the Supplier entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this supplier.
        /// </param>
        /// <field name="id" type="Number">
        /// Gets or sets the id for this supplier.
        /// </field>
        /// <field name="SupplierName" type="String">
        /// Gets or sets the supplierName for this supplier.
        /// </field>
        /// <field name="SupplierFax" type="String">
        /// Gets or sets the supplierFax for this supplier.
        /// </field>
        /// <field name="SupplierPhone" type="String">
        /// Gets or sets the supplierPhone for this supplier.
        /// </field>
        /// <field name="SupplierEmail" type="String">
        /// Gets or sets the supplierEmail for this supplier.
        /// </field>
        /// <field name="SupplierAddress1" type="String">
        /// Gets or sets the supplierAddress1 for this supplier.
        /// </field>
        /// <field name="SupplierAddress2" type="String">
        /// Gets or sets the supplierAddress2 for this supplier.
        /// </field>
        /// <field name="SupplierCity" type="String">
        /// Gets or sets the supplierCity for this supplier.
        /// </field>
        /// <field name="SupplierState" type="String">
        /// Gets or sets the supplierState for this supplier.
        /// </field>
        /// <field name="SupplierPostalCode" type="String">
        /// Gets or sets the supplierPostalCode for this supplier.
        /// </field>
        /// <field name="SupplierCountry" type="String">
        /// Gets or sets the supplierCountry for this supplier.
        /// </field>
        /// <field name="SupplierWebsite" type="String">
        /// Gets or sets the supplierWebsite for this supplier.
        /// </field>
        /// <field name="NoOfEmployees" type="String">
        /// Gets or sets the noOfEmployees for this supplier.
        /// </field>
        /// <field name="VendorNumber" type="String">
        /// Gets or sets the vendorNumber for this supplier.
        /// </field>
        /// <field name="AccountNumber" type="String">
        /// Gets or sets the accountNumber for this supplier.
        /// </field>
        /// <field name="Active" type="Boolean">
        /// Gets or sets the active for this supplier.
        /// </field>
        /// <field name="FederalID" type="String">
        /// Gets or sets the federalID for this supplier.
        /// </field>
        /// <field name="W9OnFile" type="Boolean">
        /// Gets or sets the w9OnFile for this supplier.
        /// </field>
        /// <field name="LicenseExpires" type="Date">
        /// Gets or sets the licenseExpires for this supplier.
        /// </field>
        /// <field name="WCExpires" type="Date">
        /// Gets or sets the wCExpires for this supplier.
        /// </field>
        /// <field name="GLExpires" type="Date">
        /// Gets or sets the gLExpires for this supplier.
        /// </field>
        /// <field name="AutoInsExpires" type="Date">
        /// Gets or sets the autoInsExpires for this supplier.
        /// </field>
        /// <field name="PLExpires" type="Date">
        /// Gets or sets the pLExpires for this supplier.
        /// </field>
        /// <field name="USLHExpires" type="Date">
        /// Gets or sets the uSLHExpires for this supplier.
        /// </field>
        /// <field name="OtherInsExpires" type="Date">
        /// Gets or sets the otherInsExpires for this supplier.
        /// </field>
        /// <field name="Comment" type="String">
        /// Gets or sets the comment for this supplier.
        /// </field>
        /// <field name="BidLists" type="msls.EntityCollection">
        /// Gets the bidLists for this supplier.
        /// </field>
        /// <field name="Client_Approveds" type="msls.EntityCollection">
        /// Gets the client_Approveds for this supplier.
        /// </field>
        /// <field name="Safety_Records" type="msls.EntityCollection">
        /// Gets the safety_Records for this supplier.
        /// </field>
        /// <field name="Supplier_Specialties" type="msls.EntityCollection">
        /// Gets the supplier_Specialties for this supplier.
        /// </field>
        /// <field name="SupplierManufactures" type="msls.EntityCollection">
        /// Gets the supplierManufactures for this supplier.
        /// </field>
        /// <field name="Business_Class" type="msls.application.Business_Class">
        /// Gets or sets the business_Class for this supplier.
        /// </field>
        /// <field name="details" type="msls.application.Supplier.Details">
        /// Gets the details for this supplier.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Transport_Type(entitySet) {
        /// <summary>
        /// Represents the Transport_Type entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this transport_Type.
        /// </param>
        /// <field name="ID" type="Number">
        /// Gets or sets the iD for this transport_Type.
        /// </field>
        /// <field name="TransportType" type="String">
        /// Gets or sets the transportType for this transport_Type.
        /// </field>
        /// <field name="Shipments" type="msls.EntityCollection">
        /// Gets the shipments for this transport_Type.
        /// </field>
        /// <field name="details" type="msls.application.Transport_Type.Details">
        /// Gets the details for this transport_Type.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function SubmittalType(entitySet) {
        /// <summary>
        /// Represents the SubmittalType entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this submittalType.
        /// </param>
        /// <field name="ID" type="Number">
        /// Gets or sets the iD for this submittalType.
        /// </field>
        /// <field name="SubmittalType1" type="String">
        /// Gets or sets the submittalType1 for this submittalType.
        /// </field>
        /// <field name="Submittals" type="msls.EntityCollection">
        /// Gets the submittals for this submittalType.
        /// </field>
        /// <field name="details" type="msls.application.SubmittalType.Details">
        /// Gets the details for this submittalType.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function UOM(entitySet) {
        /// <summary>
        /// Represents the UOM entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this uOM.
        /// </param>
        /// <field name="id" type="Number">
        /// Gets or sets the id for this uOM.
        /// </field>
        /// <field name="UOM1" type="String">
        /// Gets or sets the uOM1 for this uOM.
        /// </field>
        /// <field name="RFQ_Lines" type="msls.EntityCollection">
        /// Gets the rFQ_Lines for this uOM.
        /// </field>
        /// <field name="details" type="msls.application.UOM.Details">
        /// Gets the details for this uOM.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function CL(entitySet) {
        /// <summary>
        /// Represents the CL entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this cL.
        /// </param>
        /// <field name="ClientID" type="String">
        /// Gets or sets the clientID for this cL.
        /// </field>
        /// <field name="Client" type="String">
        /// Gets or sets the client for this cL.
        /// </field>
        /// <field name="Name" type="String">
        /// Gets or sets the name for this cL.
        /// </field>
        /// <field name="Type" type="String">
        /// Gets or sets the type for this cL.
        /// </field>
        /// <field name="Status" type="String">
        /// Gets or sets the status for this cL.
        /// </field>
        /// <field name="ExportInd" type="String">
        /// Gets or sets the exportInd for this cL.
        /// </field>
        /// <field name="WebSite" type="String">
        /// Gets or sets the webSite for this cL.
        /// </field>
        /// <field name="Memo" type="String">
        /// Gets or sets the memo for this cL.
        /// </field>
        /// <field name="CurrentStatus" type="String">
        /// Gets or sets the currentStatus for this cL.
        /// </field>
        /// <field name="CustomCurrencyCode" type="String">
        /// Gets or sets the customCurrencyCode for this cL.
        /// </field>
        /// <field name="ClientInd" type="String">
        /// Gets or sets the clientInd for this cL.
        /// </field>
        /// <field name="VendorInd" type="String">
        /// Gets or sets the vendorInd for this cL.
        /// </field>
        /// <field name="LinkedVendor" type="String">
        /// Gets or sets the linkedVendor for this cL.
        /// </field>
        /// <field name="PriorWork" type="String">
        /// Gets or sets the priorWork for this cL.
        /// </field>
        /// <field name="Recommend" type="String">
        /// Gets or sets the recommend for this cL.
        /// </field>
        /// <field name="DisadvBusiness" type="String">
        /// Gets or sets the disadvBusiness for this cL.
        /// </field>
        /// <field name="DisabledVetOwnedSmallBusiness" type="String">
        /// Gets or sets the disabledVetOwnedSmallBusiness for this cL.
        /// </field>
        /// <field name="HBCU" type="String">
        /// Gets or sets the hBCU for this cL.
        /// </field>
        /// <field name="MinorityBusiness" type="String">
        /// Gets or sets the minorityBusiness for this cL.
        /// </field>
        /// <field name="SmallBusiness" type="String">
        /// Gets or sets the smallBusiness for this cL.
        /// </field>
        /// <field name="VetOwnedSmallBusiness" type="String">
        /// Gets or sets the vetOwnedSmallBusiness for this cL.
        /// </field>
        /// <field name="WomanOwned" type="String">
        /// Gets or sets the womanOwned for this cL.
        /// </field>
        /// <field name="AlaskaNative" type="String">
        /// Gets or sets the alaskaNative for this cL.
        /// </field>
        /// <field name="SpecialtyType" type="String">
        /// Gets or sets the specialtyType for this cL.
        /// </field>
        /// <field name="Specialty" type="String">
        /// Gets or sets the specialty for this cL.
        /// </field>
        /// <field name="CreateUser" type="String">
        /// Gets or sets the createUser for this cL.
        /// </field>
        /// <field name="CreateDate" type="Date">
        /// Gets or sets the createDate for this cL.
        /// </field>
        /// <field name="ModUser" type="String">
        /// Gets or sets the modUser for this cL.
        /// </field>
        /// <field name="ModDate" type="Date">
        /// Gets or sets the modDate for this cL.
        /// </field>
        /// <field name="ParentID" type="String">
        /// Gets or sets the parentID for this cL.
        /// </field>
        /// <field name="ParentLevel1" type="String">
        /// Gets or sets the parentLevel1 for this cL.
        /// </field>
        /// <field name="ParentLevel2" type="String">
        /// Gets or sets the parentLevel2 for this cL.
        /// </field>
        /// <field name="ParentLevel3" type="String">
        /// Gets or sets the parentLevel3 for this cL.
        /// </field>
        /// <field name="ParentLevel4" type="String">
        /// Gets or sets the parentLevel4 for this cL.
        /// </field>
        /// <field name="details" type="msls.application.CL.Details">
        /// Gets the details for this cL.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function ProcurementData(dataWorkspace) {
        /// <summary>
        /// Represents the ProcurementData data service.
        /// </summary>
        /// <param name="dataWorkspace" type="msls.DataWorkspace">
        /// The data workspace that created this data service.
        /// </param>
        /// <field name="Award_Selecteds" type="msls.EntitySet">
        /// Gets the Award_Selecteds entity set.
        /// </field>
        /// <field name="BidLists" type="msls.EntitySet">
        /// Gets the BidLists entity set.
        /// </field>
        /// <field name="Business_Classes" type="msls.EntitySet">
        /// Gets the Business_Classes entity set.
        /// </field>
        /// <field name="ChangeOrders" type="msls.EntitySet">
        /// Gets the ChangeOrders entity set.
        /// </field>
        /// <field name="Client_Approveds" type="msls.EntitySet">
        /// Gets the Client_Approveds entity set.
        /// </field>
        /// <field name="Clients" type="msls.EntitySet">
        /// Gets the Clients entity set.
        /// </field>
        /// <field name="Expeditings" type="msls.EntitySet">
        /// Gets the Expeditings entity set.
        /// </field>
        /// <field name="LineChangeOrders" type="msls.EntitySet">
        /// Gets the LineChangeOrders entity set.
        /// </field>
        /// <field name="Manufacturers" type="msls.EntitySet">
        /// Gets the Manufacturers entity set.
        /// </field>
        /// <field name="Material_Status" type="msls.EntitySet">
        /// Gets the Material_Status entity set.
        /// </field>
        /// <field name="Phases" type="msls.EntitySet">
        /// Gets the Phases entity set.
        /// </field>
        /// <field name="POes" type="msls.EntitySet">
        /// Gets the POes entity set.
        /// </field>
        /// <field name="PO_Lines" type="msls.EntitySet">
        /// Gets the PO_Lines entity set.
        /// </field>
        /// <field name="Preferences" type="msls.EntitySet">
        /// Gets the Preferences entity set.
        /// </field>
        /// <field name="Projects" type="msls.EntitySet">
        /// Gets the Projects entity set.
        /// </field>
        /// <field name="Project_Stakeholders" type="msls.EntitySet">
        /// Gets the Project_Stakeholders entity set.
        /// </field>
        /// <field name="Proposals" type="msls.EntitySet">
        /// Gets the Proposals entity set.
        /// </field>
        /// <field name="Proposal_Lines" type="msls.EntitySet">
        /// Gets the Proposal_Lines entity set.
        /// </field>
        /// <field name="RFQ_Lines" type="msls.EntitySet">
        /// Gets the RFQ_Lines entity set.
        /// </field>
        /// <field name="RFQ_P" type="msls.EntitySet">
        /// Gets the RFQ_P entity set.
        /// </field>
        /// <field name="Safety_Records" type="msls.EntitySet">
        /// Gets the Safety_Records entity set.
        /// </field>
        /// <field name="Safety_Status" type="msls.EntitySet">
        /// Gets the Safety_Status entity set.
        /// </field>
        /// <field name="Shipments" type="msls.EntitySet">
        /// Gets the Shipments entity set.
        /// </field>
        /// <field name="Stakeholder_Types" type="msls.EntitySet">
        /// Gets the Stakeholder_Types entity set.
        /// </field>
        /// <field name="Stakeholders" type="msls.EntitySet">
        /// Gets the Stakeholders entity set.
        /// </field>
        /// <field name="Submittals" type="msls.EntitySet">
        /// Gets the Submittals entity set.
        /// </field>
        /// <field name="Supplier_Contacts" type="msls.EntitySet">
        /// Gets the Supplier_Contacts entity set.
        /// </field>
        /// <field name="Supplier_Specialties" type="msls.EntitySet">
        /// Gets the Supplier_Specialties entity set.
        /// </field>
        /// <field name="SupplierManufactures" type="msls.EntitySet">
        /// Gets the SupplierManufactures entity set.
        /// </field>
        /// <field name="Suppliers" type="msls.EntitySet">
        /// Gets the Suppliers entity set.
        /// </field>
        /// <field name="Transport_Types" type="msls.EntitySet">
        /// Gets the Transport_Types entity set.
        /// </field>
        /// <field name="SubmittalTypes" type="msls.EntitySet">
        /// Gets the SubmittalTypes entity set.
        /// </field>
        /// <field name="UOMs" type="msls.EntitySet">
        /// Gets the UOMs entity set.
        /// </field>
        /// <field name="details" type="msls.application.ProcurementData.Details">
        /// Gets the details for this data service.
        /// </field>
        $DataService.call(this, dataWorkspace);
    };

    function Hargrove_VisionDBData(dataWorkspace) {
        /// <summary>
        /// Represents the Hargrove_VisionDBData data service.
        /// </summary>
        /// <param name="dataWorkspace" type="msls.DataWorkspace">
        /// The data workspace that created this data service.
        /// </param>
        /// <field name="CLs" type="msls.EntitySet">
        /// Gets the CLs entity set.
        /// </field>
        /// <field name="details" type="msls.application.Hargrove_VisionDBData.Details">
        /// Gets the details for this data service.
        /// </field>
        $DataService.call(this, dataWorkspace);
    };
    function DataWorkspace() {
        /// <summary>
        /// Represents the data workspace.
        /// </summary>
        /// <field name="ProcurementData" type="msls.application.ProcurementData">
        /// Gets the ProcurementData data service.
        /// </field>
        /// <field name="Hargrove_VisionDBData" type="msls.application.Hargrove_VisionDBData">
        /// Gets the Hargrove_VisionDBData data service.
        /// </field>
        /// <field name="details" type="msls.application.DataWorkspace.Details">
        /// Gets the details for this data workspace.
        /// </field>
        $DataWorkspace.call(this);
    };

    msls._addToNamespace("msls.application", {

        Award_Selected: $defineEntity(Award_Selected, [
            { name: "ID", type: Number },
            { name: "RFQItem", type: Number },
            { name: "SourceReason", type: String },
            { name: "AwdReqstd", type: Date },
            { name: "AwdApp", type: Date },
            { name: "RequisitionNo", type: String },
            { name: "RequisitionSub", type: Date },
            { name: "RequisitionApp", type: Date },
            { name: "Comment", type: String },
            { name: "PO_Line", kind: "reference", type: PO_Line },
            { name: "PO_Line1", kind: "reference", type: PO_Line },
            { name: "RFQ_PItem", kind: "reference", type: RFQ_PItem },
            { name: "Proposal", kind: "reference", type: Proposal }
        ]),

        BidList: $defineEntity(BidList, [
            { name: "id", type: Number },
            { name: "RFQ_PItem", kind: "reference", type: RFQ_PItem },
            { name: "Supplier", kind: "reference", type: Supplier }
        ]),

        Business_Class: $defineEntity(Business_Class, [
            { name: "ID", type: Number },
            { name: "BusinessClass", type: String },
            { name: "Suppliers", kind: "collection", elementType: Supplier }
        ]),

        ChangeOrder: $defineEntity(ChangeOrder, [
            { name: "ID", type: Number },
            { name: "ChangeOrderNum", type: Number },
            { name: "PCN", type: String },
            { name: "COAward", type: Date },
            { name: "CO_Description", type: String },
            { name: "CO_WBS", type: String },
            { name: "CO_Qty", type: Number },
            { name: "CO_UOM", type: String },
            { name: "CO_CostPerUnit", type: Number },
            { name: "PO", kind: "reference", type: PO },
            { name: "PO_Line", kind: "reference", type: PO_Line },
            { name: "LineChangeOrders", kind: "collection", elementType: LineChangeOrder }
        ]),

        Client_Approved: $defineEntity(Client_Approved, [
            { name: "ID", type: Number },
            { name: "Client", type: String },
            { name: "ServiceAgreement", type: String },
            { name: "SupplierID_No", type: String },
            { name: "SiteApproved", type: Boolean },
            { name: "Preference1", kind: "reference", type: Preference },
            { name: "Supplier", kind: "reference", type: Supplier }
        ]),

        Client: $defineEntity(Client, [
            { name: "ID", type: Number },
            { name: "Name", type: String },
            { name: "Projects", kind: "collection", elementType: Project }
        ]),

        Expediting: $defineEntity(Expediting, [
            { name: "ID", type: Number },
            { name: "ExpeditingLevel", type: String },
            { name: "LastContacted", type: Date },
            { name: "LastResponse", type: Date },
            { name: "Results", type: String },
            { name: "ShipmentRefNum", type: String },
            { name: "ETS", type: Date },
            { name: "ETA", type: Date },
            { name: "Notes", type: String },
            { name: "Material_Status", kind: "reference", type: Material_Status },
            { name: "PO_Line", kind: "reference", type: PO_Line },
            { name: "Shipment", kind: "reference", type: Shipment }
        ]),

        LineChangeOrder: $defineEntity(LineChangeOrder, [
            { name: "ID", type: Number },
            { name: "CO_Description", type: String },
            { name: "CO_WBS", type: String },
            { name: "CO_Qty", type: Number },
            { name: "CO_UOM", type: String },
            { name: "CO_CostPerUnit", type: Number },
            { name: "ChangeOrder", kind: "reference", type: ChangeOrder },
            { name: "PO_Line", kind: "reference", type: PO_Line }
        ]),

        Manufacturer: $defineEntity(Manufacturer, [
            { name: "ID", type: Number },
            { name: "Mfg_Name", type: String },
            { name: "Specialty", type: String },
            { name: "SupplierManufactures", kind: "collection", elementType: SupplierManufacture }
        ]),

        Material_Status: $defineEntity(Material_Status, [
            { name: "ID", type: Number },
            { name: "MaterialStatus", type: String },
            { name: "Expeditings", kind: "collection", elementType: Expediting }
        ]),

        Phase: $defineEntity(Phase, [
            { name: "ID", type: Number },
            { name: "Phase1", type: String },
            { name: "Projects", kind: "collection", elementType: Project }
        ]),

        PO: $defineEntity(PO, [
            { name: "ID", type: Number },
            { name: "PONumber", type: String },
            { name: "AwardDate", type: Date },
            { name: "SupplierID", type: Number },
            { name: "Closed", type: Boolean },
            { name: "ChangeOrders", kind: "collection", elementType: ChangeOrder },
            { name: "PO_Lines", kind: "collection", elementType: PO_Line }
        ]),

        PO_Line: $defineEntity(PO_Line, [
            { name: "id", type: Number },
            { name: "POLineRef", type: Number },
            { name: "PropLineSlctd", type: Number },
            { name: "ProposalSelected", type: Number },
            { name: "Award_Selecteds", kind: "collection", elementType: Award_Selected },
            { name: "Award_Selecteds1", kind: "collection", elementType: Award_Selected },
            { name: "ChangeOrders", kind: "collection", elementType: ChangeOrder },
            { name: "Expeditings", kind: "collection", elementType: Expediting },
            { name: "LineChangeOrders", kind: "collection", elementType: LineChangeOrder },
            { name: "PO", kind: "reference", type: PO }
        ]),

        Preference: $defineEntity(Preference, [
            { name: "ID", type: Number },
            { name: "PreferenceType", type: String },
            { name: "Client_Approveds", kind: "collection", elementType: Client_Approved }
        ]),

        Project: $defineEntity(Project, [
            { name: "ID", type: Number },
            { name: "ProjectNo", type: String },
            { name: "Year", type: Date },
            { name: "Project_Stakeholders", kind: "collection", elementType: Project_Stakeholder },
            { name: "RFQ_P", kind: "collection", elementType: RFQ_PItem },
            { name: "Name", type: String },
            { name: "Client1", kind: "reference", type: Client },
            { name: "Phase1", kind: "reference", type: Phase }
        ]),

        Project_Stakeholder: $defineEntity(Project_Stakeholder, [
            { name: "Stakeholder_Type", kind: "reference", type: Stakeholder_Type },
            { name: "Project", kind: "reference", type: Project },
            { name: "Stakeholder1", kind: "reference", type: Stakeholder },
            { name: "id", type: Number }
        ]),

        Proposal: $defineEntity(Proposal, [
            { name: "ID", type: Number },
            { name: "SupplierID", type: Number },
            { name: "ShippingRefNo", type: String },
            { name: "BidRecieved", type: Date },
            { name: "Comment", type: String },
            { name: "Award_Selected", kind: "reference", type: Award_Selected },
            { name: "RFQ_PItem", kind: "reference", type: RFQ_PItem }
        ]),

        Proposal_Line: $defineEntity(Proposal_Line, [
            { name: "ID", type: Number },
            { name: "ProposalID", type: Number },
            { name: "CostPerUnit", type: Number },
            { name: "MeetSpecs", type: Boolean },
            { name: "CountryOfOrigin", type: String },
            { name: "ShippingARO", type: Number },
            { name: "SubmittalsARO", type: Number },
            { name: "NegotiatedFinalCost", type: Number },
            { name: "Notes", type: String },
            { name: "RFQ_Line", kind: "reference", type: RFQ_Line },
            { name: "Shipments", kind: "collection", elementType: Shipment }
        ]),

        RFQ_Line: $defineEntity(RFQ_Line, [
            { name: "id", type: Number },
            { name: "RFQLineNo", type: Number },
            { name: "Description", type: String },
            { name: "Qty", type: Number },
            { name: "TestingReq", type: Boolean },
            { name: "TestingLevel", type: String },
            { name: "Inspection", type: Boolean },
            { name: "ShippingRefNo", type: String },
            { name: "TagNo", type: String },
            { name: "RecievedQty", type: Number },
            { name: "Notes", type: String },
            { name: "Proposal_Lines", kind: "collection", elementType: Proposal_Line },
            { name: "RFQ_PItem", kind: "reference", type: RFQ_PItem },
            { name: "Submittals", kind: "collection", elementType: Submittal },
            { name: "UOM1", kind: "reference", type: UOM }
        ]),

        RFQ_PItem: $defineEntity(RFQ_PItem, [
            { name: "ID", type: Number },
            { name: "PkgNo", type: String },
            { name: "PkgName", type: String },
            { name: "PkgDescription", type: String },
            { name: "PkgWBS", type: String },
            { name: "BudgetValue", type: Number },
            { name: "SourceStrategy", type: String },
            { name: "ReqdOnSite", type: Date },
            { name: "EstTransportDays", type: Number },
            { name: "EstMfgDays", type: Number },
            { name: "EstAwdProcessDays", type: Number },
            { name: "EstProposalDays", type: Number },
            { name: "ERW", type: Date },
            { name: "ERWNumber", type: String },
            { name: "ERW_Rev", type: String },
            { name: "ERWContact", type: String },
            { name: "SpecifiedBidDue", type: Date },
            { name: "RevisedBidDue", type: Date },
            { name: "BidsReceived", type: Date },
            { name: "PreBidRequired", type: Boolean },
            { name: "PreAwardRequired", type: Boolean },
            { name: "BidOpening", type: Date },
            { name: "ToEng", type: Date },
            { name: "EngApproval", type: Date },
            { name: "TechComplaint", type: Boolean },
            { name: "Regret", type: Date },
            { name: "CommercialDone", type: Date },
            { name: "CommercialComplaint", type: Boolean },
            { name: "Comments", type: String },
            { name: "PreBid_Req", type: Boolean },
            { name: "CriticalPath", type: Boolean },
            { name: "Award_Selecteds", kind: "collection", elementType: Award_Selected },
            { name: "BidLists", kind: "collection", elementType: BidList },
            { name: "Proposals", kind: "collection", elementType: Proposal },
            { name: "RFQ_Lines", kind: "collection", elementType: RFQ_Line },
            { name: "Project", kind: "reference", type: Project }
        ]),

        Safety_Record: $defineEntity(Safety_Record, [
            { name: "ID", type: Number },
            { name: "Year", type: Number },
            { name: "EMR", type: Number },
            { name: "TIFR", type: Number },
            { name: "Comments", type: String },
            { name: "Safety_Status", kind: "reference", type: Safety_Status },
            { name: "Supplier", kind: "reference", type: Supplier }
        ]),

        Safety_Status: $defineEntity(Safety_Status, [
            { name: "ID", type: Number },
            { name: "Status", type: String },
            { name: "Safety_Records", kind: "collection", elementType: Safety_Record }
        ]),

        Shipment: $defineEntity(Shipment, [
            { name: "ID", type: Number },
            { name: "Origin", type: String },
            { name: "QtyShipments", type: Number },
            { name: "Containers_Shipment", type: String },
            { name: "Mode", type: String },
            { name: "Carrier", type: String },
            { name: "CarrierContact", type: String },
            { name: "SpecialLift_handling", type: String },
            { name: "IncoTerm", type: String },
            { name: "TitleTransfer", type: String },
            { name: "StorageReqts", type: String },
            { name: "ShipReq", type: Date },
            { name: "ShipDate", type: Date },
            { name: "RevisedShipDate", type: Date },
            { name: "ReasonForRev", type: String },
            { name: "Delivery", type: Date },
            { name: "BOL_Shipper", type: String },
            { name: "Comments", type: String },
            { name: "Expeditings", kind: "collection", elementType: Expediting },
            { name: "Proposal_Line", kind: "reference", type: Proposal_Line },
            { name: "Transport_Type", kind: "reference", type: Transport_Type }
        ]),

        Stakeholder_Type: $defineEntity(Stakeholder_Type, [
            { name: "ID", type: Number },
            { name: "Stakeholder_Type1", type: String },
            { name: "Project_Stakeholders", kind: "collection", elementType: Project_Stakeholder }
        ]),

        Stakeholder: $defineEntity(Stakeholder, [
            { name: "ID", type: Number },
            { name: "FirstName", type: String },
            { name: "LastName", type: String },
            { name: "Phone", type: String },
            { name: "Email", type: String },
            { name: "Project_Stakeholders", kind: "collection", elementType: Project_Stakeholder }
        ]),

        Submittal: $defineEntity(Submittal, [
            { name: "ID", type: Number },
            { name: "Submittal1", type: String },
            { name: "SubmittalName", type: String },
            { name: "SubmittalNo", type: String },
            { name: "SubmittalRevision", type: String },
            { name: "SubmittalDate", type: Date },
            { name: "SubmittalRequired", type: Date },
            { name: "SubmitaalReviewed", type: Date },
            { name: "Comments", type: String },
            { name: "Transmittal", type: String },
            { name: "RFQ_Line1", kind: "reference", type: RFQ_Line },
            { name: "SubmittalType1", kind: "reference", type: SubmittalType }
        ]),

        Supplier_Contact: $defineEntity(Supplier_Contact, [
            { name: "ID", type: Number },
            { name: "First", type: String },
            { name: "Middle", type: String },
            { name: "Last", type: String },
            { name: "Email", type: String },
            { name: "Title_Position", type: String },
            { name: "Phone", type: String },
            { name: "Cell", type: String },
            { name: "Fax", type: String },
            { name: "OtherInfo", type: String },
            { name: "Supplier_Specialty", kind: "reference", type: Supplier_Specialty }
        ]),

        Supplier_Specialty: $defineEntity(Supplier_Specialty, [
            { name: "ID", type: Number },
            { name: "Specialty", type: String },
            { name: "SpecialtyWeight", type: Number },
            { name: "PerformanceArea", type: String },
            { name: "Comment", type: String },
            { name: "Supplier_Contacts", kind: "collection", elementType: Supplier_Contact },
            { name: "Supplier", kind: "reference", type: Supplier }
        ]),

        SupplierManufacture: $defineEntity(SupplierManufacture, [
            { name: "ID", type: Number },
            { name: "Manufacturer", kind: "reference", type: Manufacturer },
            { name: "Supplier", kind: "reference", type: Supplier }
        ]),

        Supplier: $defineEntity(Supplier, [
            { name: "id", type: Number },
            { name: "SupplierName", type: String },
            { name: "SupplierFax", type: String },
            { name: "SupplierPhone", type: String },
            { name: "SupplierEmail", type: String },
            { name: "SupplierAddress1", type: String },
            { name: "SupplierAddress2", type: String },
            { name: "SupplierCity", type: String },
            { name: "SupplierState", type: String },
            { name: "SupplierPostalCode", type: String },
            { name: "SupplierCountry", type: String },
            { name: "SupplierWebsite", type: String },
            { name: "NoOfEmployees", type: String },
            { name: "VendorNumber", type: String },
            { name: "AccountNumber", type: String },
            { name: "Active", type: Boolean },
            { name: "FederalID", type: String },
            { name: "W9OnFile", type: Boolean },
            { name: "LicenseExpires", type: Date },
            { name: "WCExpires", type: Date },
            { name: "GLExpires", type: Date },
            { name: "AutoInsExpires", type: Date },
            { name: "PLExpires", type: Date },
            { name: "USLHExpires", type: Date },
            { name: "OtherInsExpires", type: Date },
            { name: "Comment", type: String },
            { name: "BidLists", kind: "collection", elementType: BidList },
            { name: "Client_Approveds", kind: "collection", elementType: Client_Approved },
            { name: "Safety_Records", kind: "collection", elementType: Safety_Record },
            { name: "Supplier_Specialties", kind: "collection", elementType: Supplier_Specialty },
            { name: "SupplierManufactures", kind: "collection", elementType: SupplierManufacture },
            { name: "Business_Class", kind: "reference", type: Business_Class }
        ]),

        Transport_Type: $defineEntity(Transport_Type, [
            { name: "ID", type: Number },
            { name: "TransportType", type: String },
            { name: "Shipments", kind: "collection", elementType: Shipment }
        ]),

        SubmittalType: $defineEntity(SubmittalType, [
            { name: "ID", type: Number },
            { name: "SubmittalType1", type: String },
            { name: "Submittals", kind: "collection", elementType: Submittal }
        ]),

        UOM: $defineEntity(UOM, [
            { name: "id", type: Number },
            { name: "UOM1", type: String },
            { name: "RFQ_Lines", kind: "collection", elementType: RFQ_Line }
        ]),

        CL: $defineEntity(CL, [
            { name: "ClientID", type: String },
            { name: "Client", type: String },
            { name: "Name", type: String },
            { name: "Type", type: String },
            { name: "Status", type: String },
            { name: "ExportInd", type: String },
            { name: "WebSite", type: String },
            { name: "Memo", type: String },
            { name: "CurrentStatus", type: String },
            { name: "CustomCurrencyCode", type: String },
            { name: "ClientInd", type: String },
            { name: "VendorInd", type: String },
            { name: "LinkedVendor", type: String },
            { name: "PriorWork", type: String },
            { name: "Recommend", type: String },
            { name: "DisadvBusiness", type: String },
            { name: "DisabledVetOwnedSmallBusiness", type: String },
            { name: "HBCU", type: String },
            { name: "MinorityBusiness", type: String },
            { name: "SmallBusiness", type: String },
            { name: "VetOwnedSmallBusiness", type: String },
            { name: "WomanOwned", type: String },
            { name: "AlaskaNative", type: String },
            { name: "SpecialtyType", type: String },
            { name: "Specialty", type: String },
            { name: "CreateUser", type: String },
            { name: "CreateDate", type: Date },
            { name: "ModUser", type: String },
            { name: "ModDate", type: Date },
            { name: "ParentID", type: String },
            { name: "ParentLevel1", type: String },
            { name: "ParentLevel2", type: String },
            { name: "ParentLevel3", type: String },
            { name: "ParentLevel4", type: String }
        ]),

        ProcurementData: $defineDataService(ProcurementData, lightSwitchApplication.rootUri + "/ProcurementData.svc", [
            { name: "Award_Selecteds", elementType: Award_Selected },
            { name: "BidLists", elementType: BidList },
            { name: "Business_Classes", elementType: Business_Class },
            { name: "ChangeOrders", elementType: ChangeOrder },
            { name: "Client_Approveds", elementType: Client_Approved },
            { name: "Clients", elementType: Client },
            { name: "Expeditings", elementType: Expediting },
            { name: "LineChangeOrders", elementType: LineChangeOrder },
            { name: "Manufacturers", elementType: Manufacturer },
            { name: "Material_Status", elementType: Material_Status },
            { name: "Phases", elementType: Phase },
            { name: "POes", elementType: PO },
            { name: "PO_Lines", elementType: PO_Line },
            { name: "Preferences", elementType: Preference },
            { name: "Projects", elementType: Project },
            { name: "Project_Stakeholders", elementType: Project_Stakeholder },
            { name: "Proposals", elementType: Proposal },
            { name: "Proposal_Lines", elementType: Proposal_Line },
            { name: "RFQ_Lines", elementType: RFQ_Line },
            { name: "RFQ_P", elementType: RFQ_PItem },
            { name: "Safety_Records", elementType: Safety_Record },
            { name: "Safety_Status", elementType: Safety_Status },
            { name: "Shipments", elementType: Shipment },
            { name: "Stakeholder_Types", elementType: Stakeholder_Type },
            { name: "Stakeholders", elementType: Stakeholder },
            { name: "Submittals", elementType: Submittal },
            { name: "Supplier_Contacts", elementType: Supplier_Contact },
            { name: "Supplier_Specialties", elementType: Supplier_Specialty },
            { name: "SupplierManufactures", elementType: SupplierManufacture },
            { name: "Suppliers", elementType: Supplier },
            { name: "Transport_Types", elementType: Transport_Type },
            { name: "SubmittalTypes", elementType: SubmittalType },
            { name: "UOMs", elementType: UOM }
        ], [
            {
                name: "Award_Selecteds_SingleOrDefault", value: function (ID) {
                    return new $DataServiceQuery({ _entitySet: this.Award_Selecteds },
                        lightSwitchApplication.rootUri + "/ProcurementData.svc" + "/Award_Selecteds(" + "ID=" + $toODataString(ID, "Int32?") + ")"
                    );
                }
            },
            {
                name: "BidLists_SingleOrDefault", value: function (id) {
                    return new $DataServiceQuery({ _entitySet: this.BidLists },
                        lightSwitchApplication.rootUri + "/ProcurementData.svc" + "/BidLists(" + "id=" + $toODataString(id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "Business_Classes_SingleOrDefault", value: function (ID) {
                    return new $DataServiceQuery({ _entitySet: this.Business_Classes },
                        lightSwitchApplication.rootUri + "/ProcurementData.svc" + "/Business_Classes(" + "ID=" + $toODataString(ID, "Int32?") + ")"
                    );
                }
            },
            {
                name: "ChangeOrders_SingleOrDefault", value: function (ID) {
                    return new $DataServiceQuery({ _entitySet: this.ChangeOrders },
                        lightSwitchApplication.rootUri + "/ProcurementData.svc" + "/ChangeOrders(" + "ID=" + $toODataString(ID, "Int32?") + ")"
                    );
                }
            },
            {
                name: "Client_Approveds_SingleOrDefault", value: function (ID) {
                    return new $DataServiceQuery({ _entitySet: this.Client_Approveds },
                        lightSwitchApplication.rootUri + "/ProcurementData.svc" + "/Client_Approveds(" + "ID=" + $toODataString(ID, "Int32?") + ")"
                    );
                }
            },
            {
                name: "Clients_SingleOrDefault", value: function (ID) {
                    return new $DataServiceQuery({ _entitySet: this.Clients },
                        lightSwitchApplication.rootUri + "/ProcurementData.svc" + "/Clients(" + "ID=" + $toODataString(ID, "Int32?") + ")"
                    );
                }
            },
            {
                name: "Expeditings_SingleOrDefault", value: function (ID) {
                    return new $DataServiceQuery({ _entitySet: this.Expeditings },
                        lightSwitchApplication.rootUri + "/ProcurementData.svc" + "/Expeditings(" + "ID=" + $toODataString(ID, "Int32?") + ")"
                    );
                }
            },
            {
                name: "LineChangeOrders_SingleOrDefault", value: function (ID) {
                    return new $DataServiceQuery({ _entitySet: this.LineChangeOrders },
                        lightSwitchApplication.rootUri + "/ProcurementData.svc" + "/LineChangeOrders(" + "ID=" + $toODataString(ID, "Int32?") + ")"
                    );
                }
            },
            {
                name: "Manufacturers_SingleOrDefault", value: function (ID) {
                    return new $DataServiceQuery({ _entitySet: this.Manufacturers },
                        lightSwitchApplication.rootUri + "/ProcurementData.svc" + "/Manufacturers(" + "ID=" + $toODataString(ID, "Int32?") + ")"
                    );
                }
            },
            {
                name: "Material_Status_SingleOrDefault", value: function (ID) {
                    return new $DataServiceQuery({ _entitySet: this.Material_Status },
                        lightSwitchApplication.rootUri + "/ProcurementData.svc" + "/Material_Status(" + "ID=" + $toODataString(ID, "Int32?") + ")"
                    );
                }
            },
            {
                name: "Phases_SingleOrDefault", value: function (ID) {
                    return new $DataServiceQuery({ _entitySet: this.Phases },
                        lightSwitchApplication.rootUri + "/ProcurementData.svc" + "/Phases(" + "ID=" + $toODataString(ID, "Int32?") + ")"
                    );
                }
            },
            {
                name: "POes_SingleOrDefault", value: function (ID) {
                    return new $DataServiceQuery({ _entitySet: this.POes },
                        lightSwitchApplication.rootUri + "/ProcurementData.svc" + "/POes(" + "ID=" + $toODataString(ID, "Int32?") + ")"
                    );
                }
            },
            {
                name: "PO_Lines_SingleOrDefault", value: function (id) {
                    return new $DataServiceQuery({ _entitySet: this.PO_Lines },
                        lightSwitchApplication.rootUri + "/ProcurementData.svc" + "/PO_Lines(" + "id=" + $toODataString(id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "Preferences_SingleOrDefault", value: function (ID) {
                    return new $DataServiceQuery({ _entitySet: this.Preferences },
                        lightSwitchApplication.rootUri + "/ProcurementData.svc" + "/Preferences(" + "ID=" + $toODataString(ID, "Int32?") + ")"
                    );
                }
            },
            {
                name: "Projects_SingleOrDefault", value: function (ID) {
                    return new $DataServiceQuery({ _entitySet: this.Projects },
                        lightSwitchApplication.rootUri + "/ProcurementData.svc" + "/Projects(" + "ID=" + $toODataString(ID, "Int32?") + ")"
                    );
                }
            },
            {
                name: "Project_Stakeholders_SingleOrDefault", value: function (id) {
                    return new $DataServiceQuery({ _entitySet: this.Project_Stakeholders },
                        lightSwitchApplication.rootUri + "/ProcurementData.svc" + "/Project_Stakeholders(" + "id=" + $toODataString(id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "Proposals_SingleOrDefault", value: function (ID) {
                    return new $DataServiceQuery({ _entitySet: this.Proposals },
                        lightSwitchApplication.rootUri + "/ProcurementData.svc" + "/Proposals(" + "ID=" + $toODataString(ID, "Int32?") + ")"
                    );
                }
            },
            {
                name: "Proposal_Lines_SingleOrDefault", value: function (ID) {
                    return new $DataServiceQuery({ _entitySet: this.Proposal_Lines },
                        lightSwitchApplication.rootUri + "/ProcurementData.svc" + "/Proposal_Lines(" + "ID=" + $toODataString(ID, "Int32?") + ")"
                    );
                }
            },
            {
                name: "RFQ_Lines_SingleOrDefault", value: function (id) {
                    return new $DataServiceQuery({ _entitySet: this.RFQ_Lines },
                        lightSwitchApplication.rootUri + "/ProcurementData.svc" + "/RFQ_Lines(" + "id=" + $toODataString(id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "RFQ_P_SingleOrDefault", value: function (ID) {
                    return new $DataServiceQuery({ _entitySet: this.RFQ_P },
                        lightSwitchApplication.rootUri + "/ProcurementData.svc" + "/RFQ_P(" + "ID=" + $toODataString(ID, "Int32?") + ")"
                    );
                }
            },
            {
                name: "Safety_Records_SingleOrDefault", value: function (ID) {
                    return new $DataServiceQuery({ _entitySet: this.Safety_Records },
                        lightSwitchApplication.rootUri + "/ProcurementData.svc" + "/Safety_Records(" + "ID=" + $toODataString(ID, "Int32?") + ")"
                    );
                }
            },
            {
                name: "Safety_Status_SingleOrDefault", value: function (ID) {
                    return new $DataServiceQuery({ _entitySet: this.Safety_Status },
                        lightSwitchApplication.rootUri + "/ProcurementData.svc" + "/Safety_Status(" + "ID=" + $toODataString(ID, "Int32?") + ")"
                    );
                }
            },
            {
                name: "Shipments_SingleOrDefault", value: function (ID) {
                    return new $DataServiceQuery({ _entitySet: this.Shipments },
                        lightSwitchApplication.rootUri + "/ProcurementData.svc" + "/Shipments(" + "ID=" + $toODataString(ID, "Int32?") + ")"
                    );
                }
            },
            {
                name: "Stakeholder_Types_SingleOrDefault", value: function (ID) {
                    return new $DataServiceQuery({ _entitySet: this.Stakeholder_Types },
                        lightSwitchApplication.rootUri + "/ProcurementData.svc" + "/Stakeholder_Types(" + "ID=" + $toODataString(ID, "Int32?") + ")"
                    );
                }
            },
            {
                name: "Stakeholders_SingleOrDefault", value: function (ID) {
                    return new $DataServiceQuery({ _entitySet: this.Stakeholders },
                        lightSwitchApplication.rootUri + "/ProcurementData.svc" + "/Stakeholders(" + "ID=" + $toODataString(ID, "Int32?") + ")"
                    );
                }
            },
            {
                name: "Submittals_SingleOrDefault", value: function (ID) {
                    return new $DataServiceQuery({ _entitySet: this.Submittals },
                        lightSwitchApplication.rootUri + "/ProcurementData.svc" + "/Submittals(" + "ID=" + $toODataString(ID, "Int32?") + ")"
                    );
                }
            },
            {
                name: "Supplier_Contacts_SingleOrDefault", value: function (ID) {
                    return new $DataServiceQuery({ _entitySet: this.Supplier_Contacts },
                        lightSwitchApplication.rootUri + "/ProcurementData.svc" + "/Supplier_Contacts(" + "ID=" + $toODataString(ID, "Int32?") + ")"
                    );
                }
            },
            {
                name: "Supplier_Specialties_SingleOrDefault", value: function (ID) {
                    return new $DataServiceQuery({ _entitySet: this.Supplier_Specialties },
                        lightSwitchApplication.rootUri + "/ProcurementData.svc" + "/Supplier_Specialties(" + "ID=" + $toODataString(ID, "Int32?") + ")"
                    );
                }
            },
            {
                name: "SupplierManufactures_SingleOrDefault", value: function (ID) {
                    return new $DataServiceQuery({ _entitySet: this.SupplierManufactures },
                        lightSwitchApplication.rootUri + "/ProcurementData.svc" + "/SupplierManufactures(" + "ID=" + $toODataString(ID, "Int32?") + ")"
                    );
                }
            },
            {
                name: "Suppliers_SingleOrDefault", value: function (id) {
                    return new $DataServiceQuery({ _entitySet: this.Suppliers },
                        lightSwitchApplication.rootUri + "/ProcurementData.svc" + "/Suppliers(" + "id=" + $toODataString(id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "Transport_Types_SingleOrDefault", value: function (ID) {
                    return new $DataServiceQuery({ _entitySet: this.Transport_Types },
                        lightSwitchApplication.rootUri + "/ProcurementData.svc" + "/Transport_Types(" + "ID=" + $toODataString(ID, "Int32?") + ")"
                    );
                }
            },
            {
                name: "SubmittalTypes_SingleOrDefault", value: function (ID) {
                    return new $DataServiceQuery({ _entitySet: this.SubmittalTypes },
                        lightSwitchApplication.rootUri + "/ProcurementData.svc" + "/SubmittalTypes(" + "ID=" + $toODataString(ID, "Int32?") + ")"
                    );
                }
            },
            {
                name: "UOMs_SingleOrDefault", value: function (id) {
                    return new $DataServiceQuery({ _entitySet: this.UOMs },
                        lightSwitchApplication.rootUri + "/ProcurementData.svc" + "/UOMs(" + "id=" + $toODataString(id, "Int32?") + ")"
                    );
                }
            }
        ]),

        Hargrove_VisionDBData: $defineDataService(Hargrove_VisionDBData, lightSwitchApplication.rootUri + "/Hargrove_VisionDBData.svc", [
            { name: "CLs", elementType: CL }
        ], [
            {
                name: "CLs_SingleOrDefault", value: function (ClientID) {
                    return new $DataServiceQuery({ _entitySet: this.CLs },
                        lightSwitchApplication.rootUri + "/Hargrove_VisionDBData.svc" + "/CLs(" + "ClientID=" + $toODataString(ClientID, "String?") + ")"
                    );
                }
            }
        ]),

        DataWorkspace: $defineDataWorkspace(DataWorkspace, [
            { name: "ProcurementData", type: ProcurementData },
            { name: "Hargrove_VisionDBData", type: Hargrove_VisionDBData }
        ])

    });

}(msls.application));
