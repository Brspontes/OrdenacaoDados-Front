$(document).ready(function () {

    $("#btnOrdenar").click(function () {
        var input, file, fr, texto;

        input = document.getElementById('theFile');
        file = input.files[0];
        fr = new FileReader();
        fr.addEventListener('load',function () {
            texto = fr.result;
            $.ajax({
                type: 'POST',
                url: 'http://localhost:58041/api/Selection',
                data: JSON.stringify(texto),
                contentType: 'application/json; charset=UTF-8'
            }).done(function () {
                $('#iframe').attr('src', 'http://localhost:58041/api/Selection/SelectionSortDownload');
                $('#iframe').load();
            });
        });
        fr.readAsText(file);
        texto = fr.result;
    });
});
