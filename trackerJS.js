$(function () {
    //orig : https://formsqa4.apps.tax/Scripts/loadsaveform.js
    var e = parent._jsonDATA;

    var i = 0;
    var varTaxYear = e.data.TaxYear;
    var txtTaxYear = document.getElementsByName('txtTY')[0];
    if (varTaxYear && txtTaxYear) {
        txtTaxYear.value = varTaxYear;
        textBoxChangeEvent(txtTaxYear.id, txtTaxYear.name, txtTaxYear.value, '', '');
        i++;
    }

    var varLegalEntity = e.data.LegalEntity;
    var txtLegalEntity = document.getElementsByName('CurrentLE')[0];
    if (varLegalEntity && txtLegalEntity) {
        txtLegalEntity.value = varLegalEntity;
        textBoxChangeEvent(txtLegalEntity.id, txtLegalEntity.name, txtLegalEntity.value, '', '');
        i++;
    }

    var varLocation = e.data.Location;
    var txtLocation = document.getElementsByName('txtLocation')[0];
    if (varLocation && txtLocation) {
        txtLocation.value = varLocation;
        textBoxChangeEvent(txtLocation.id, txtLocation.name, txtLocation.value, '', '');
        i++;
    }

    var varLocationID = e.data.LocationID;
    var txtLocationID = document.getElementsByName('txtLocationID')[0];
    if (varLocationID && txtLocationID) {
        txtLocationID.value = varLocationID;
        textBoxChangeEvent(txtLocationID.id, txtLocationID.name, txtLocationID.value, '', '');
        i++;
    }

    var varTaxYearID = e.data.TaxYearID;
    var txtTaxYearID = document.getElementsByName('txtTaxYearID')[0];
    if (varTaxYearID && txtTaxYearID) {
        txtTaxYearID.value = varTaxYearID;
        textBoxChangeEvent(txtTaxYearID.id, txtTaxYearID.name, txtTaxYearID.value, '', '');
        i++;
    }

    var varLegalEntityID = e.data.LegalEntityID;
    var txtLegalEntityID = document.getElementsByName('txtLegalEntityID')[0];
    if (varLegalEntityID && txtLegalEntityID) {
        txtLegalEntityID.value = varLegalEntityID;
        textBoxChangeEvent(txtLegalEntityID.id, txtLegalEntityID.name, txtLegalEntityID.value, '', '');
        i++;
    }

    var varPeriod = e.data.Period;
    var txtPeriod = document.getElementsByName('txtPeriod')[0];
    if (varPeriod && txtPeriod) {
        txtPeriod.value = varPeriod;
        textBoxChangeEvent(txtPeriod.id, txtPeriod.name, txtPeriod.value, '', '');
        i++;
    }

    var varType = e.data.Type;
    var txtType = document.getElementsByName('txtType')[0];
    if (varType && txtType) {
        txtType.value = varType;
        textBoxChangeEvent(txtType.id, txtType.name, txtType.value, '', '');
        i++;
    }

    var varHostUrl = e.data.HostUrl;
    var txtHostUrl = document.getElementsByName('txtHostUrl')[0];
    if (varHostUrl && txtHostUrl) {
        txtHostUrl.value = varHostUrl;
        textBoxChangeEvent(txtHostUrl.id, txtHostUrl.name, txtHostUrl.value, '', '');
        i++;
    }

    var varItemId = e.data.ItemId;
    var txtItemId = document.getElementsByName('txtItemId')[0];
    if (varItemId && txtItemId) {
        txtItemId.value = varItemId;
        textBoxChangeEvent(txtItemId.id, txtItemId.name, txtItemId.value, '', '');
        i++;
    }

    var varDisplayMode = e.data.Forms[0].DisplayMode;
    var txtDisplayMode = document.getElementsByName('txtDisplayMode')[0];
    if (varDisplayMode && txtDisplayMode) {
        txtDisplayMode.value = varDisplayMode;
        textBoxChangeEvent(txtDisplayMode.id, txtDisplayMode.name, txtDisplayMode.value, '', '');
        i++;
    }

    var varCurrentUser = e.data.CurrentUser.userCode;
    var txtCurrentUser = document.getElementsByName('txtCurrentUser')[0];
    if (varCurrentUser && txtCurrentUser) {
        txtCurrentUser.value = varCurrentUser;
        textBoxChangeEvent(txtCurrentUser.id, txtCurrentUser.name, txtCurrentUser.value, '', '');
        i++;
    }

    var varItemRoles = e.data.Forms[0].ItemRoles;
    var txtItemRolesbox = document.getElementsByName('txtItemRoles')[0];
    if (varItemRoles && txtItemRolesbox) {
        txtItemRolesbox.value = varItemRoles;
        textBoxChangeEvent(txtItemRolesbox.id, txtItemRolesbox.name, txtItemRolesbox.value, '', '');
        i++;
    }

    var varLoggedInUserRole = e.data.LoggedInUserRole;
    var txtLoggedInUserRole = document.getElementsByName('txtLoggedInUserRole')[0];
    if (varLoggedInUserRole && txtLoggedInUserRole) {
        txtLoggedInUserRole.value = varLoggedInUserRole;
        textBoxChangeEvent(txtLoggedInUserRole.id, txtLoggedInUserRole.name, txtLoggedInUserRole.value, '', '');
        i++;
    }

    var varFormRoles = e.data.Forms[0].FormRoles;
    var txtFormRoles = document.getElementsByName('txtFormRoles')[0];
    if (varFormRoles && txtFormRoles) {
        txtFormRoles.value = varFormRoles;
        textBoxChangeEvent(txtFormRoles.id, txtFormRoles.name, txtFormRoles.value, '', '');
        i++;
    }

    var varInstanceId = e.data.InstanceId;
    var txtInstanceId = document.getElementsByName('txtInstanceId')[0];
    if (varInstanceId && txtInstanceId) {
        txtInstanceId.value = varInstanceId;
        textBoxChangeEvent(txtInstanceId.id, txtInstanceId.name, txtInstanceId.value, '', '');
        i++;
    }

    var varParentDefinitionId = e.data.ParentDefinitionId;
    var txtParentDefinitionId = document.getElementsByName('txtParentDefinitionId')[0];
    if (varParentDefinitionId && txtParentDefinitionId) {
        txtParentDefinitionId.value = varParentDefinitionId;
        textBoxChangeEvent(txtParentDefinitionId.id, txtParentDefinitionId.name, txtParentDefinitionId.value, '', '');
        i++;
    }

    var varParentInstanceId = e.data.ParentInstanceId;
    var txtParentInstanceId = document.getElementsByName('txtParentInstanceId')[0];
    if (varParentInstanceId && txtParentInstanceId) {
        txtParentInstanceId.value = varParentInstanceId;
        textBoxChangeEvent(txtParentInstanceId.id, txtParentInstanceId.name, txtParentInstanceId.value, '', '');
        i++;
    }

    var varSiteUrl = e.data.SiteUrl;
    var txtSiteUrl = document.getElementsByName('txtSiteUrl')[0];
    if (varSiteUrl && txtSiteUrl) {
        txtSiteUrl.value = varSiteUrl;
        textBoxChangeEvent(txtSiteUrl.id, txtSiteUrl.name, txtSiteUrl.value, '', '');
        i++;
    }

    var varListName = e.data.ListName;
    var txtListName = document.getElementsByName('txtListName')[0];
    if (varListName && txtListName) {
        txtListName.value = varListName;
        textBoxChangeEvent(txtListName.id, txtListName.name, txtListName.value, '', '');
        i++;
    }

    var specializedSecurityValue = e.data.SpecializedSecurity;
    var txtboxSpecializedSecurity = document.getElementsByName('txtSpecializedSecurity')[0];
    if (specializedSecurityValue && txtboxSpecializedSecurity) {
        txtboxSpecializedSecurity.value = specializedSecurityValue;
        textBoxChangeEvent(txtboxSpecializedSecurity.id, txtboxSpecializedSecurity.name, txtboxSpecializedSecurity.value, '', '');
        i++;
    }

    var varTrackerId = e.data.TrackerId;
    var txtTrackerId = document.getElementsByName('txtTrackerId')[0];
    if (varTrackerId && txtTrackerId) {
        txtTrackerId.value = varTrackerId;
        textBoxChangeEvent(txtTrackerId.id, txtTrackerId.name, txtTrackerId.value, '', '');
        i++;
    }

    var vartxtModuleId = e.data.ModuleID;
    var txtModuleId = document.getElementsByName('txtModuleID')[0];
    if (vartxtModuleId && txtModuleId) {
        txtModuleId.value = vartxtModuleId;
        textBoxChangeEvent(txtModuleId.id, txtModuleId.name, txtModuleId.value, '', '');
        i++;
    }

    var vartxtModule = e.data.Module;
    var txtModule = document.getElementsByName('txtModule')[0];
    if (vartxtModule && txtModule) {
        txtModule.value = vartxtModule;
        textBoxChangeEvent(txtModule.id, txtModule.name, txtModule.value, '', '');
        i++;
    }

    var vartxtMasterObligation = e.data.MasterObligation;
    var txtMasterObligation = document.getElementsByName('txtMasterObligation')[0];
    if (vartxtMasterObligation && txtMasterObligation) {
        txtMasterObligation.value = vartxtMasterObligation;
        textBoxChangeEvent(txtMasterObligation.id, txtMasterObligation.name, txtMasterObligation.value, '', '');
        i++;
    }

    var txtJSTriggerCount = document.getElementsByName('txtJSTriggerCount')[0];
    if (txtJSTriggerCount) {
        txtJSTriggerCount.value = i;
        textBoxChangeEvent(txtJSTriggerCount.id, txtJSTriggerCount.name, i, '', '');
    }

});