-- Crear base de datos
CREATE DATABASE IF NOT EXISTS gestion_fondos;
USE gestion_fondos;

-- Tabla de Proyectos
CREATE TABLE IF NOT EXISTS Proyecto (
    id INT AUTO_INCREMENT PRIMARY KEY,
    codigo VARCHAR(10) UNIQUE NOT NULL,
    nombre VARCHAR(255) NOT NULL,
    municipio VARCHAR(255) NOT NULL,
    departamento VARCHAR(255) NOT NULL,
    fecha_inicio DATE NOT NULL,
    fecha_fin DATE NOT NULL,
    estado TINYINT NOT NULL DEFAULT 1
);

-- Tabla de Rubros
CREATE TABLE IF NOT EXISTS Rubro (
    id INT AUTO_INCREMENT UNIQUE PRIMARY KEY,
    nombre VARCHAR(255) UNIQUE NOT NULL,
    estado TINYINT NOT NULL DEFAULT 1
);

-- Tabla de Proyectos/Rubros
CREATE TABLE IF NOT EXISTS ProyectoRubro (
    id INT AUTO_INCREMENT UNIQUE PRIMARY KEY,
    proyecto_id INT NOT NULL,
    rubro_id INT NOT NULL,
    monto_disponible DECIMAL(10,2) NOT NULL DEFAULT 0,
    monto_total DECIMAL(10,2) NOT NULL DEFAULT 0,
    -- estado TINYINT NOT NULL DEFAULT 1,
    FOREIGN KEY (proyecto_id) REFERENCES Proyecto(id) ON DELETE CASCADE,
    FOREIGN KEY (rubro_id) REFERENCES Rubro(id) ON DELETE CASCADE
);

-- Tabla de Donaciones
CREATE TABLE IF NOT EXISTS Donacion (
    id INT AUTO_INCREMENT PRIMARY KEY,
    donador VARCHAR(255) NOT NULL,
    monto DECIMAL(10,2) NOT NULL,
    fecha DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    proyectorubro_id INT NOT NULL,
    estado TINYINT NOT NULL DEFAULT 1,
    FOREIGN KEY (proyectorubro_id) REFERENCES Rubro(id) ON DELETE CASCADE
);

-- Tabla de Órdenes de Compra
CREATE TABLE IF NOT EXISTS Compra (
    id INT AUTO_INCREMENT PRIMARY KEY,
    proveedor VARCHAR(255) NOT NULL,
    monto DECIMAL(10,2) NOT NULL,
    fecha DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    estado TINYINT NOT NULL DEFAULT 1
);

-- Tabla de Órdenes de Compra
CREATE TABLE IF NOT EXISTS CompraProyectoRubro (
    id INT AUTO_INCREMENT PRIMARY KEY,
    monto DECIMAL(10,2) NOT NULL,
    estado TINYINT NOT NULL DEFAULT 1,
    compra_id INT NOT NULL,
    proyectorubro_id INT NOT NULL,
    FOREIGN KEY (compra_id) REFERENCES Compra(id) ON DELETE CASCADE,
    FOREIGN KEY (proyectorubro_id) REFERENCES ProyectoRubro(id) ON DELETE CASCADE
);