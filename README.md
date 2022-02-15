# Social Places test 

A simple contact form application using Laravel and Vue
.

## Installation
Clone the git repo.

Navigate to project directory
```bash
cd social-places-app
```

Rename `env.example` file to `.env`

Install PHP packages.

```bash
composer install
```

Install npm Packages.

```bash
npm install
```
```bash
npm run prod
```

## Create database tables
First create a mysql database named `social-places-app`
, then edit mysql login details in the `.env` file to match yours.
```env
.....
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=social-places-app
DB_USERNAME=YOUR_MYSQL_USER
DB_PASSWORD=YOUR_MYSQL_PWD
......
```
## Sending email with Mail trap
login into [mailtrap](https://mailtrap.io/), using following logins 
* _email:_ **graffiti.nerd@yahoo.com**  
* _password:_ **ItsOver900**
```env
.....
MAIL_MAILER=smtp
MAIL_HOST=smtp.mailtrap.io
MAIL_PORT=587
MAIL_USERNAME=9cf50cc891c535
MAIL_PASSWORD=b793250bce3ac4
MAIL_ENCRYPTION=tls
MAIL_FROM_ADDRESS=africamatji@gmail.com
MAIL_TO_ADDRESS=admin@socialplaces.test
MAIL_FROM_NAME="${APP_NAME}"
......
```
## Run database migration

Run below command to create database tables.
```bash
php artisan migrate
```

## Create sample data (Using Seed)

Create admin user. with below details.
```bash
php artisan db:seed --class=AdminUserSeeder # admin@admin.com / password
```
## Run Application
```bash
php artisan serve #default port is 8000
```
```bash
php artisan serve --port=8001 #to specify port no
```
Open your browser and navigate to `http://127.0.0.1:8000`

## License
[MIT](https://choosealicense.com/licenses/mit/)
