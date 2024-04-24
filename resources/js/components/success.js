import React, {} from 'react';
import ReactDOM from 'react-dom';
import domtoimage from 'dom-to-image';


export default function Success() {
    document.addEventListener("DOMContentLoaded", function() {
        domtoimage.toJpeg(document.getElementById('verf'), { quality: 0.95 })
    .then(function (dataUrl) {
        var link = document.createElement('a');
        link.download = 'verf.jpeg';
        link.href = dataUrl;
        link.click();
    });
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: "btn btn-success",
                cancelButton: "btn btn-danger"
            },
            buttonsStyling: false
        });
        swalWithBootstrapButtons.fire({
            title: "Success!",
            text: "Anda berhasil melakukan verifikasi.",
            icon: "success",
            confirmButtonText: "Ok!",
    reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                location.href = "/logout";
            }
        });
    });
    return (
        <div>
	<div className="absolute w-[300px] h-[350px] bg-white z-10"></div>
            <div className="w-[250px] h-[300px] bg-white flex flex-col items-center z-1 rounded"  style={{backgroundImage: "url('foto/bg.jpg')"}}  id="verf">
                <div className="relative flex items-center justify-center">
                    <img className="w-10 h-10 rounded mt-2" src="img/logo.png" alt=""/>
                    <span className="absolute bottom-0 left-8 transform translate-y-1/4 w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
                </div>
                <h1 className="text-blue-600 font-bold text-xl mt-3">Verifikasi Berhasil</h1>

                <div className="px-4 py-3 text-center flex flex-col items-center justify-center">
                  <p className="text-gray-700 text-sm truncate mb-3">Anda telah melakukan verifikasi</p>
                  <div className="w-10/12 truncate overflow-hidden">
                      <p className="text-gray-500 text-xs truncate">Nama : <span className="font-bold text-blue-600">{window.userData.name}</span></p>
                  </div>
                  <div className="w-11/12 truncate overflow-hidden">
                      <p className="text-gray-500 text-xs line-clamp-3">Keterangan : <span className="font-bold text-blue-600"> {window.userData.keterangan} </span> </p>
                  </div>
                  <div className="w-10/12 truncate overflow-hidden">
                      <p className="text-gray-500 text-xs truncate">Instansi : <span className="font-bold text-blue-600">{window.userData.institution}</span></p>
                  </div>
                </div>
                <div className="flex justify-center py-4">
                  <i className="mdi mdi-check-circle-outline text-green-500 text-7xl"></i>
                </div>
            </div>
       </div>
    );
}

if (document.getElementById('success')) {
    ReactDOM.render(< Success/>, document.getElementById('success'));
}
