﻿

//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace LightSwitchApplication
{
    #region Entities
    
    /// <summary>
    /// No Modeled Description Available
    /// </summary>
    [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.LightSwitch.BuildTasks.CodeGen", "11.3.0.0")]
    public sealed partial class SubmittalType : global::Microsoft.LightSwitch.Framework.Base.EntityObject<global::LightSwitchApplication.SubmittalType, global::LightSwitchApplication.SubmittalType.DetailsClass>
    {
        #region Constructors
    
        /// <summary>
        /// Initializes a new instance of the SubmittalType entity.
        /// </summary>
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.LightSwitch.BuildTasks.CodeGen", "11.3.0.0")]
        [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
        public SubmittalType()
            : this(null)
        {
        }
    
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.LightSwitch.BuildTasks.CodeGen", "11.3.0.0")]
        [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
        public SubmittalType(global::Microsoft.LightSwitch.Framework.EntitySet<global::LightSwitchApplication.SubmittalType> entitySet)
            : base(entitySet)
        {
            global::LightSwitchApplication.SubmittalType.DetailsClass.Initialize(this);
        }
    
        [global::System.ComponentModel.EditorBrowsable(global::System.ComponentModel.EditorBrowsableState.Advanced)]
        partial void SubmittalType_Created();
        [global::System.ComponentModel.EditorBrowsable(global::System.ComponentModel.EditorBrowsableState.Advanced)]
        partial void SubmittalType_AllowSaveWithErrors(ref bool result);
    
        #endregion
    
        #region Private Properties
        
        /// <summary>
        /// Gets the Application object for this application.  The Application object provides access to active screens, methods to open screens and access to the current user.
        /// </summary>
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.LightSwitch.BuildTasks.CodeGen", "11.3.0.0")]
        [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
        private global::Microsoft.LightSwitch.IApplication<global::LightSwitchApplication.DataWorkspace> Application
        {
            get
            {
                return (global::Microsoft.LightSwitch.IApplication<global::LightSwitchApplication.DataWorkspace>)global::LightSwitchApplication.Application.Current;
            }
        }
        
        /// <summary>
        /// Gets the containing data workspace.  The data workspace provides access to all data sources in the application.
        /// </summary>
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.LightSwitch.BuildTasks.CodeGen", "11.3.0.0")]
        [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
        private global::LightSwitchApplication.DataWorkspace DataWorkspace
        {
            get
            {
                return (global::LightSwitchApplication.DataWorkspace)this.Details.EntitySet.Details.DataService.Details.DataWorkspace;
            }
        }
        
        #endregion
    
        #region Public Properties
    
        /// <summary>
        /// No Modeled Description Available
        /// </summary>
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.LightSwitch.BuildTasks.CodeGen", "11.3.0.0")]
        [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
        public int ID
        {
            get
            {
                return global::LightSwitchApplication.SubmittalType.DetailsClass.GetValue(this, global::LightSwitchApplication.SubmittalType.DetailsClass.PropertySetProperties.ID);
            }
        }
        
        [global::System.ComponentModel.EditorBrowsable(global::System.ComponentModel.EditorBrowsableState.Advanced)]
        partial void ID_IsReadOnly(ref bool result);
        [global::System.ComponentModel.EditorBrowsable(global::System.ComponentModel.EditorBrowsableState.Advanced)]
        partial void ID_Validate(global::Microsoft.LightSwitch.EntityValidationResultsBuilder results);
        [global::System.ComponentModel.EditorBrowsable(global::System.ComponentModel.EditorBrowsableState.Advanced)]
        partial void ID_Changed();

        /// <summary>
        /// No Modeled Description Available
        /// </summary>
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.LightSwitch.BuildTasks.CodeGen", "11.3.0.0")]
        [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
        public string SubmittalType1
        {
            get
            {
                return global::LightSwitchApplication.SubmittalType.DetailsClass.GetValue(this, global::LightSwitchApplication.SubmittalType.DetailsClass.PropertySetProperties.SubmittalType1);
            }
            set
            {
                global::LightSwitchApplication.SubmittalType.DetailsClass.SetValue(this, global::LightSwitchApplication.SubmittalType.DetailsClass.PropertySetProperties.SubmittalType1, value);
            }
        }
        
        [global::System.ComponentModel.EditorBrowsable(global::System.ComponentModel.EditorBrowsableState.Advanced)]
        partial void SubmittalType1_IsReadOnly(ref bool result);
        [global::System.ComponentModel.EditorBrowsable(global::System.ComponentModel.EditorBrowsableState.Advanced)]
        partial void SubmittalType1_Validate(global::Microsoft.LightSwitch.EntityValidationResultsBuilder results);
        [global::System.ComponentModel.EditorBrowsable(global::System.ComponentModel.EditorBrowsableState.Advanced)]
        partial void SubmittalType1_Changed();

        /// <summary>
        /// No Modeled Description Available
        /// </summary>
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.LightSwitch.BuildTasks.CodeGen", "11.3.0.0")]
        [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
        public global::Microsoft.LightSwitch.Framework.EntityCollection<global::LightSwitchApplication.Submittal> Submittals
        {
            get
            {
                return global::LightSwitchApplication.SubmittalType.DetailsClass.GetValue(this, global::LightSwitchApplication.SubmittalType.DetailsClass.PropertySetProperties.Submittals);
            }
        }
        
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.LightSwitch.BuildTasks.CodeGen", "11.3.0.0")]
        [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
        public Microsoft.LightSwitch.IDataServiceQueryable<global::LightSwitchApplication.Submittal> SubmittalsQuery
        {
            get
            {
                return global::LightSwitchApplication.SubmittalType.DetailsClass.GetQuery(this, global::LightSwitchApplication.SubmittalType.DetailsClass.PropertySetProperties.Submittals);
            }
        }

        #endregion
    
        #region Details Class
    
        [global::System.ComponentModel.EditorBrowsable(global::System.ComponentModel.EditorBrowsableState.Never)]
        [global::System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Design", "CA1034:NestedTypesShouldNotBeVisible")]
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.LightSwitch.BuildTasks.CodeGen", "11.3.0.0")]
        [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
        public sealed class DetailsClass : global::Microsoft.LightSwitch.Details.Framework.Base.EntityDetails<
                global::LightSwitchApplication.SubmittalType,
                global::LightSwitchApplication.SubmittalType.DetailsClass,
                global::LightSwitchApplication.SubmittalType.DetailsClass.IImplementation,
                global::LightSwitchApplication.SubmittalType.DetailsClass.PropertySet,
                global::Microsoft.LightSwitch.Details.Framework.EntityCommandSet<global::LightSwitchApplication.SubmittalType, global::LightSwitchApplication.SubmittalType.DetailsClass>,
                global::Microsoft.LightSwitch.Details.Framework.EntityMethodSet<global::LightSwitchApplication.SubmittalType, global::LightSwitchApplication.SubmittalType.DetailsClass>>
        {
    
            static DetailsClass()
            {
                var initializeEntry = global::LightSwitchApplication.SubmittalType.DetailsClass.PropertySetProperties.ID;
            }
    
            [global::System.Diagnostics.DebuggerBrowsable(global::System.Diagnostics.DebuggerBrowsableState.Never)]
            private static readonly global::Microsoft.LightSwitch.Details.Framework.Base.EntityDetails<global::LightSwitchApplication.SubmittalType, global::LightSwitchApplication.SubmittalType.DetailsClass>.Entry
                __SubmittalTypeEntry = new global::Microsoft.LightSwitch.Details.Framework.Base.EntityDetails<global::LightSwitchApplication.SubmittalType, global::LightSwitchApplication.SubmittalType.DetailsClass>.Entry(
                    global::LightSwitchApplication.SubmittalType.DetailsClass.__SubmittalType_CreateNew,
                    global::LightSwitchApplication.SubmittalType.DetailsClass.__SubmittalType_Created,
                    global::LightSwitchApplication.SubmittalType.DetailsClass.__SubmittalType_AllowSaveWithErrors);
            private static global::LightSwitchApplication.SubmittalType __SubmittalType_CreateNew(global::Microsoft.LightSwitch.Framework.EntitySet<global::LightSwitchApplication.SubmittalType> es)
            {
                return new global::LightSwitchApplication.SubmittalType(es);
            }
            private static void __SubmittalType_Created(global::LightSwitchApplication.SubmittalType e)
            {
                e.SubmittalType_Created();
            }
            private static bool __SubmittalType_AllowSaveWithErrors(global::LightSwitchApplication.SubmittalType e)
            {
                bool result = false;
                e.SubmittalType_AllowSaveWithErrors(ref result);
                return result;
            }
    
            public DetailsClass() : base()
            {
            }
    
            public new global::Microsoft.LightSwitch.Details.Framework.EntityCommandSet<global::LightSwitchApplication.SubmittalType, global::LightSwitchApplication.SubmittalType.DetailsClass> Commands
            {
                get
                {
                    return base.Commands;
                }
            }
    
            public new global::Microsoft.LightSwitch.Details.Framework.EntityMethodSet<global::LightSwitchApplication.SubmittalType, global::LightSwitchApplication.SubmittalType.DetailsClass> Methods
            {
                get
                {
                    return base.Methods;
                }
            }
    
            public new global::LightSwitchApplication.SubmittalType.DetailsClass.PropertySet Properties
            {
                get
                {
                    return base.Properties;
                }
            }
    
            [global::System.ComponentModel.EditorBrowsable(global::System.ComponentModel.EditorBrowsableState.Never)]
            [global::System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Design", "CA1034:NestedTypesShouldNotBeVisible")]
            [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.LightSwitch.BuildTasks.CodeGen", "11.3.0.0")]
            [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
            public sealed class PropertySet : global::Microsoft.LightSwitch.Details.Framework.Base.EntityPropertySet<global::LightSwitchApplication.SubmittalType, global::LightSwitchApplication.SubmittalType.DetailsClass>
            {
    
                public PropertySet() : base()
                {
                }
    
                public global::Microsoft.LightSwitch.Details.Framework.EntityStorageProperty<global::LightSwitchApplication.SubmittalType, global::LightSwitchApplication.SubmittalType.DetailsClass, int> ID
                {
                    get
                    {
                        return base.GetItem(global::LightSwitchApplication.SubmittalType.DetailsClass.PropertySetProperties.ID) as global::Microsoft.LightSwitch.Details.Framework.EntityStorageProperty<global::LightSwitchApplication.SubmittalType, global::LightSwitchApplication.SubmittalType.DetailsClass, int>;
                    }
                }
                
                public global::Microsoft.LightSwitch.Details.Framework.EntityStorageProperty<global::LightSwitchApplication.SubmittalType, global::LightSwitchApplication.SubmittalType.DetailsClass, string> SubmittalType1
                {
                    get
                    {
                        return base.GetItem(global::LightSwitchApplication.SubmittalType.DetailsClass.PropertySetProperties.SubmittalType1) as global::Microsoft.LightSwitch.Details.Framework.EntityStorageProperty<global::LightSwitchApplication.SubmittalType, global::LightSwitchApplication.SubmittalType.DetailsClass, string>;
                    }
                }
                
                public global::Microsoft.LightSwitch.Details.Framework.EntityCollectionProperty<global::LightSwitchApplication.SubmittalType, global::LightSwitchApplication.SubmittalType.DetailsClass, global::LightSwitchApplication.Submittal> Submittals
                {
                    get
                    {
                        return base.GetItem(global::LightSwitchApplication.SubmittalType.DetailsClass.PropertySetProperties.Submittals) as global::Microsoft.LightSwitch.Details.Framework.EntityCollectionProperty<global::LightSwitchApplication.SubmittalType, global::LightSwitchApplication.SubmittalType.DetailsClass, global::LightSwitchApplication.Submittal>;
                    }
                }
                
            }
    
            #pragma warning disable 109
            [global::System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Design", "CA1034:NestedTypesShouldNotBeVisible")]
            public interface IImplementation : global::Microsoft.LightSwitch.Internal.IEntityImplementation
            {
                new int ID { get; }
                new string SubmittalType1 { get; set; }
                new global::System.Collections.IEnumerable Submittals { get; }
            }
            #pragma warning restore 109
    
            [global::System.ComponentModel.EditorBrowsable(global::System.ComponentModel.EditorBrowsableState.Never)]
            [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.LightSwitch.BuildTasks.CodeGen", "11.3.0.0")]
            [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
            internal class PropertySetProperties
            {
    
                [global::System.Diagnostics.DebuggerBrowsable(global::System.Diagnostics.DebuggerBrowsableState.Never)]
                public static readonly global::Microsoft.LightSwitch.Details.Framework.EntityStorageProperty<global::LightSwitchApplication.SubmittalType, global::LightSwitchApplication.SubmittalType.DetailsClass, int>.Entry
                    ID = new global::Microsoft.LightSwitch.Details.Framework.EntityStorageProperty<global::LightSwitchApplication.SubmittalType, global::LightSwitchApplication.SubmittalType.DetailsClass, int>.Entry(
                        "ID",
                        global::LightSwitchApplication.SubmittalType.DetailsClass.PropertySetProperties._ID_Stub,
                        global::LightSwitchApplication.SubmittalType.DetailsClass.PropertySetProperties._ID_ComputeIsReadOnly,
                        global::LightSwitchApplication.SubmittalType.DetailsClass.PropertySetProperties._ID_Validate,
                        global::LightSwitchApplication.SubmittalType.DetailsClass.PropertySetProperties._ID_GetImplementationValue,
                        null,
                        global::LightSwitchApplication.SubmittalType.DetailsClass.PropertySetProperties._ID_OnValueChanged);
                private static void _ID_Stub(global::Microsoft.LightSwitch.Details.Framework.Base.DetailsCallback<global::LightSwitchApplication.SubmittalType.DetailsClass, global::Microsoft.LightSwitch.Details.Framework.EntityStorageProperty<global::LightSwitchApplication.SubmittalType, global::LightSwitchApplication.SubmittalType.DetailsClass, int>.Data> c, global::LightSwitchApplication.SubmittalType.DetailsClass d, object sf)
                {
                    c(d, ref d._ID, sf);
                }
                private static bool _ID_ComputeIsReadOnly(global::LightSwitchApplication.SubmittalType e)
                {
                    bool result = false;
                    e.ID_IsReadOnly(ref result);
                    return result;
                }
                private static void _ID_Validate(global::LightSwitchApplication.SubmittalType e, global::Microsoft.LightSwitch.EntityValidationResultsBuilder r)
                {
                    e.ID_Validate(r);
                }
                private static int _ID_GetImplementationValue(global::LightSwitchApplication.SubmittalType.DetailsClass d)
                {
                    return d.ImplementationEntity.ID;
                }
                private static void _ID_OnValueChanged(global::LightSwitchApplication.SubmittalType e)
                {
                    e.ID_Changed();
                }
    
                [global::System.Diagnostics.DebuggerBrowsable(global::System.Diagnostics.DebuggerBrowsableState.Never)]
                public static readonly global::Microsoft.LightSwitch.Details.Framework.EntityStorageProperty<global::LightSwitchApplication.SubmittalType, global::LightSwitchApplication.SubmittalType.DetailsClass, string>.Entry
                    SubmittalType1 = new global::Microsoft.LightSwitch.Details.Framework.EntityStorageProperty<global::LightSwitchApplication.SubmittalType, global::LightSwitchApplication.SubmittalType.DetailsClass, string>.Entry(
                        "SubmittalType1",
                        global::LightSwitchApplication.SubmittalType.DetailsClass.PropertySetProperties._SubmittalType1_Stub,
                        global::LightSwitchApplication.SubmittalType.DetailsClass.PropertySetProperties._SubmittalType1_ComputeIsReadOnly,
                        global::LightSwitchApplication.SubmittalType.DetailsClass.PropertySetProperties._SubmittalType1_Validate,
                        global::LightSwitchApplication.SubmittalType.DetailsClass.PropertySetProperties._SubmittalType1_GetImplementationValue,
                        global::LightSwitchApplication.SubmittalType.DetailsClass.PropertySetProperties._SubmittalType1_SetImplementationValue,
                        global::LightSwitchApplication.SubmittalType.DetailsClass.PropertySetProperties._SubmittalType1_OnValueChanged);
                private static void _SubmittalType1_Stub(global::Microsoft.LightSwitch.Details.Framework.Base.DetailsCallback<global::LightSwitchApplication.SubmittalType.DetailsClass, global::Microsoft.LightSwitch.Details.Framework.EntityStorageProperty<global::LightSwitchApplication.SubmittalType, global::LightSwitchApplication.SubmittalType.DetailsClass, string>.Data> c, global::LightSwitchApplication.SubmittalType.DetailsClass d, object sf)
                {
                    c(d, ref d._SubmittalType1, sf);
                }
                private static bool _SubmittalType1_ComputeIsReadOnly(global::LightSwitchApplication.SubmittalType e)
                {
                    bool result = false;
                    e.SubmittalType1_IsReadOnly(ref result);
                    return result;
                }
                private static void _SubmittalType1_Validate(global::LightSwitchApplication.SubmittalType e, global::Microsoft.LightSwitch.EntityValidationResultsBuilder r)
                {
                    e.SubmittalType1_Validate(r);
                }
                private static string _SubmittalType1_GetImplementationValue(global::LightSwitchApplication.SubmittalType.DetailsClass d)
                {
                    return d.ImplementationEntity.SubmittalType1;
                }
                private static void _SubmittalType1_SetImplementationValue(global::LightSwitchApplication.SubmittalType.DetailsClass d, string v)
                {
                    d.ImplementationEntity.SubmittalType1 = v;
                }
                private static void _SubmittalType1_OnValueChanged(global::LightSwitchApplication.SubmittalType e)
                {
                    e.SubmittalType1_Changed();
                }
    
                [global::System.Diagnostics.DebuggerBrowsable(global::System.Diagnostics.DebuggerBrowsableState.Never)]
                public static readonly global::Microsoft.LightSwitch.Details.Framework.EntityCollectionProperty<global::LightSwitchApplication.SubmittalType, global::LightSwitchApplication.SubmittalType.DetailsClass, global::LightSwitchApplication.Submittal>.Entry
                    Submittals = new global::Microsoft.LightSwitch.Details.Framework.EntityCollectionProperty<global::LightSwitchApplication.SubmittalType, global::LightSwitchApplication.SubmittalType.DetailsClass, global::LightSwitchApplication.Submittal>.Entry(
                        "Submittals",
                        global::LightSwitchApplication.SubmittalType.DetailsClass.PropertySetProperties._Submittals_Stub,
                        global::LightSwitchApplication.SubmittalType.DetailsClass.PropertySetProperties._Submittals_GetReferencedEntities,
                        global::LightSwitchApplication.SubmittalType.DetailsClass.PropertySetProperties._Submittals_GetEntityCollection);
                private static void _Submittals_Stub(global::Microsoft.LightSwitch.Details.Framework.Base.DetailsCallback<global::LightSwitchApplication.SubmittalType.DetailsClass, global::Microsoft.LightSwitch.Details.Framework.EntityCollectionProperty<global::LightSwitchApplication.SubmittalType, global::LightSwitchApplication.SubmittalType.DetailsClass, global::LightSwitchApplication.Submittal>.Data> c, global::LightSwitchApplication.SubmittalType.DetailsClass d, object sf)
                {
                    c(d, ref d._Submittals, sf);
                }
                private static global::System.Collections.Generic.IEnumerable<global::LightSwitchApplication.Submittal> _Submittals_GetReferencedEntities(global::LightSwitchApplication.SubmittalType.DetailsClass d)
                {
                    return d.GetReferencedEntities<global::LightSwitchApplication.Submittal, global::LightSwitchApplication.Submittal.DetailsClass>(global::LightSwitchApplication.SubmittalType.DetailsClass.PropertySetProperties.Submittals, ref d._Submittals);
                }
                private static global::System.Collections.IEnumerable _Submittals_GetEntityCollection(global::LightSwitchApplication.SubmittalType.DetailsClass d)
                {
                    return d.ImplementationEntity.Submittals;
                }
    
            }
    
            [global::System.Diagnostics.DebuggerBrowsable(global::System.Diagnostics.DebuggerBrowsableState.Never)]
            private global::Microsoft.LightSwitch.Details.Framework.EntityStorageProperty<global::LightSwitchApplication.SubmittalType, global::LightSwitchApplication.SubmittalType.DetailsClass, int>.Data _ID;
            
            [global::System.Diagnostics.DebuggerBrowsable(global::System.Diagnostics.DebuggerBrowsableState.Never)]
            private global::Microsoft.LightSwitch.Details.Framework.EntityStorageProperty<global::LightSwitchApplication.SubmittalType, global::LightSwitchApplication.SubmittalType.DetailsClass, string>.Data _SubmittalType1;
            
            [global::System.Diagnostics.DebuggerBrowsable(global::System.Diagnostics.DebuggerBrowsableState.Never)]
            private global::Microsoft.LightSwitch.Details.Framework.EntityCollectionProperty<global::LightSwitchApplication.SubmittalType, global::LightSwitchApplication.SubmittalType.DetailsClass, global::LightSwitchApplication.Submittal>.Data _Submittals;
            
        }
    
        #endregion
    }
    
    #endregion
}
