-- Ayres Apparel — database schema
-- Run with: C:\xampp7\mysql\bin\mysql.exe -u root < db\schema.sql

CREATE DATABASE IF NOT EXISTS ayres_apparel
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE ayres_apparel;

CREATE TABLE IF NOT EXISTS reseller_registrations (
  id                 INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  -- A. Data Pribadi
  full_name          VARCHAR(150)  NOT NULL,
  wa_number          VARCHAR(30)   NOT NULL,
  email              VARCHAR(150)  NULL,
  city               VARCHAR(100)  NOT NULL,
  province           VARCHAR(100)  NOT NULL,
  address            TEXT          NOT NULL,
  -- B. Data Usaha
  business_name      VARCHAR(150)  NULL,
  business_status    ENUM('already_selling', 'never_sold') NOT NULL,
  reseller_status    ENUM('ayres', 'non_ayres') NOT NULL,
  reseller_type      ENUM('online', 'offline', 'online_offline') NOT NULL,
  sales_channels     VARCHAR(255)  NULL, -- comma-separated: whatsapp,instagram,tiktok,facebook,marketplace,offline_store
  market_area        VARCHAR(150)  NOT NULL,
  -- C. Data Pendukung
  instagram_username VARCHAR(100)  NULL,
  tiktok_username    VARCHAR(100)  NULL,
  ktp_file           VARCHAR(255)  NULL, -- filename in uploads/reseller (served via authenticated admin route)
  logo_file          VARCHAR(255)  NULL,
  -- D. Persetujuan
  agree_data_true    TINYINT(1)    NOT NULL DEFAULT 0,
  agree_terms        TINYINT(1)    NOT NULL DEFAULT 0,
  agree_marketing    TINYINT(1)    NOT NULL DEFAULT 0,
  created_at         TIMESTAMP     NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
