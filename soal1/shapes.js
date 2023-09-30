
function hitungLuasPersegi(sisi) {
          return sisi * sisi;
        }
        
        
        function hitungKelilingPersegi(sisi) {
          return 4 * sisi;
        }
        
        
        function hitungLuasPersegiPanjang(panjang, lebar) {
          return panjang * lebar;
        }
        
        
        function hitungKelilingPersegiPanjang(panjang, lebar) {
          return 2 * (panjang + lebar);
        }
        
        
        module.exports = {
          hitungLuasPersegi,
          hitungKelilingPersegi,
          hitungLuasPersegiPanjang,
          hitungKelilingPersegiPanjang,
        };
        