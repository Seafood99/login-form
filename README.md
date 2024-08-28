# User Authentication and Logout System

- Proyek ini adalah aplikasi web yang menyediakan sistem login dan logout dengan menggunakan SweetAlert untuk animasi logout. Aplikasi ini memungkinkan pengguna untuk login dan logout dengan memanfaatkan token yang disimpan di localStorage. Jika pengguna sudah login, mereka akan diarahkan ke halaman users dan tidak dapat mengakses halaman login.

- Fitur
  - Login: Memungkinkan pengguna untuk login dengan memeriksa username dan password. Token yang diterima setelah login disimpan di localStorage.
  - Logout: Menyediakan tombol logout yang menggunakan SweetAlert untuk konfirmasi dan animasi sebelum menghapus token dan mengarahkan pengguna kembali ke halaman login.
  - Akses Terbatas: Pengguna yang sudah login akan langsung diarahkan ke halaman users jika mencoba mengakses halaman login.
 
- Teknologi yang Digunakan
  - React: Untuk membangun antarmuka pengguna.
  - React Router DOM: Untuk routing dan navigasi antar halaman.
  - SweetAlert2: Untuk menampilkan animasi dan konfirmasi alert.
  - Fetch API: Untuk melakukan permintaan HTTP ke server.
 
- Struktur Kode
  - LoginForm.js
      - Fungsi: Menyediakan form login dengan input username dan password, serta tombol untuk menampilkan atau menyembunyikan password.
      - Fitur:
          - Validasi form.
          - Mengirim permintaan login ke server.
          - Menggunakan SweetAlert untuk menampilkan notifikasi.
          - Mengarahkan pengguna ke halaman users setelah login sukses.
          - Mengecek status login saat komponen dirender dan mengarahkan pengguna jika sudah login.
            
  - User.js
      - Fungsi: Menampilkan halaman users setelah pengguna login.
      - Fitur:
          - Mengecek keberadaan token dan validitasnya.
          - Menggunakan SweetAlert untuk konfirmasi dan animasi saat logout.
          - Mengarahkan pengguna ke halaman login setelah logout.
       
- Instalasi
  - Clone Repository:

bash
Copy code
git clone <repository-url>
cd <repository-folder>
Install Dependencies:

bash
Copy code
npm install
Jalankan Aplikasi:

bash
Copy code
npm start
- Cara Menggunakan
  - Login:
    - Masukkan username dan password pada halaman login.
    - Klik tombol Login untuk masuk ke aplikasi.
  - Logout:
    - Pada halaman users, klik tombol Logout.
    - Konfirmasi logout dengan tombol Yes, logout! pada SweetAlert.
