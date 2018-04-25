//#region editRegion
$('#btnEmptyDetail').click(function (e) {
    e.preventDefault();
    $.post("ajax.php", {
            method: 'emptyEntry'
        },
        function (data, textStatus, jqXHR) {
            if (data) {
                location.reload();
            }
        },
        "json"
    );
});

$('.btnSave').click(function (e) {
    e.preventDefault();
    var jDataArr = prepareData();
    $.post("ajax.php", {
            method: 'update',
            data: JSON.stringify(jDataArr)
        },
        function (data, textStatus, jqXHR) {
            if (data) {
                // alert('Data Updated.');
            }
        },
        "json"
    );
});

$('.btnRemove').click(function (e) {
    e.preventDefault();
    var jDataArr = prepareData(parseInt($(this).attr('removeid')));

    $.post("ajax.php", {
            method: 'update',
            data: JSON.stringify(jDataArr)
        },
        function (data, textStatus, jqXHR) {
            if (data) {
                location.reload();
            }
        },
        "json"
    );
});

function prepareData(excludeIndex) {
    var jDataArr = [];
    $('.formArea').each(function (index, element) {
        if (excludeIndex == index) return;
        var jData = new Object();
        jData.id = index + 1;
        jData.display = $(this).find('.txtTitle').val();
        jData.url = $(this).find('.txtURL').val();
        var jString = $(this).find('.txtJSON').val();
        jData.data = IsJsonString(jString) ? JSON.parse(jString) : {};
        jDataArr.push(jData);
    });
    return jDataArr;
}

function IsJsonString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}
//#endregion

//#region loadRegion
$('.btnLoadForm').click(function (e) {
    e.preventDefault();
    var jData = JSON.parse($('#comboForms').val());
    _jsonDATA.data = jData.data;
    $('#appFrame').attr('src', jData.url);
});

$('.btnReload').click(function (e) {
    e.preventDefault();
    $('.txtFilter').val('');
    fetchFormJSON();
});

$(function () {
    fetchFormJSON();
});

$('.txtFilter').keyup(function (e) {
    var filterValPattern = new RegExp('(' + $(this).val() + ')', 'gi');
    $('#comboForms').html('');
    $('#comboForms').append($('<option>', {
        value: 0,
        text: 'Select'
    }));
    $.each(formDetailsJSON, function (i, v) {
        if (!v.display) return true;
        if (v.display.match(filterValPattern)) {
            $('#comboForms').append($('<option>', {
                text: v.display,
                value: JSON.stringify(v)
            }));
        }
    });
});

var formDetailsJSON;
var _jsonDATA = new Object();

function fetchFormJSON() {
    $('#comboForms').html('');
    $('#comboForms').append($('<option>', {
        value: 0,
        text: 'Select'
    }));
    $.getJSON("formdata.json", function (data, textStatus, jqXHR) {
        formDetailsJSON = data;
        $.each(data, function (i, v) {
            $('#comboForms').append($('<option>', {
                text: v.display,
                value: JSON.stringify(v)
            }));
        });
    });
}
//#endregion