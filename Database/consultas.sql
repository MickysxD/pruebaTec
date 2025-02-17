USE pruebatec;

/************************************************/
/************* GESTION DE PROYECTOS *************/
/************************************************/

-- Procedimiento para crear un Proyecto
DELIMITER //
CREATE PROCEDURE crearProyecto(
    IN p_nombre VARCHAR(255),
    IN p_municipio VARCHAR(255),
    IN p_departamento VARCHAR(255),
    IN p_fecha_inicio DATE,
    IN p_fecha_fin DATE,
    IN r_rubros JSON
)
BEGIN
	DECLARE v_proyecto_id INT;
	DECLARE CONTINUE HANDLER FOR SQLEXCEPTION
    BEGIN
        -- En caso de error, revertir la transacción
        ROLLBACK;
		SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Problema en la creacion del proyecto';
    END;

	START TRANSACTION;
		INSERT INTO Proyecto(nombre, municipio, departamento, fecha_inicio, fecha_fin)
		VALUES (p_nombre, p_municipio, p_departamento, p_fecha_inicio, p_fecha_fin);

		SET v_proyecto_id = LAST_INSERT_ID();
		
		INSERT IGNORE INTO ProyectoRubro(proyecto_id, rubro_id)
		SELECT v_proyecto_id, t.rubro_id
		FROM JSON_TABLE(r_rubros, '$[*]' COLUMNS(rubro_id INT PATH '$.id')) t;
		-- FROM JSON_TABLE(r_rubros, '$[*]' COLUMNS(rubro_id INT PATH '$')) t;
	COMMIT;
    
END //
DELIMITER ;


-- Procedimiento para obtener Proyectos
DELIMITER //
CREATE PROCEDURE obtenerProyectos()
BEGIN
    SELECT p.id, p.nombre, p.municipio, p.departamento, 
	DATE_FORMAT(p.fecha_inicio, '%Y-%m-%d') fecha_inicio, DATE_FORMAT(p.fecha_fin, '%Y-%m-%d') fecha_fin,
	CONCAT('[', 
		GROUP_CONCAT(
			JSON_OBJECT('id', r.id, 'nombre', r.nombre)
			SEPARATOR ','
		), 
	']') rubros,
	SUM(pr.monto_total) total, SUM(pr.monto_disponible) disponible
	FROM Proyecto p
	LEFT JOIN ProyectoRubro pr ON p.id = pr.proyecto_id
	LEFT JOIN Rubro r ON pr.rubro_id = r.id
	WHERE p.estado = 1
	GROUP BY p.id;
END //
DELIMITER ;

SELECT p.id, p.nombre, p.municipio, p.departamento,
DATE_FORMAT(p.fecha_inicio, '%Y-%m-%d') fecha_inicio, DATE_FORMAT(p.fecha_fin, '%Y-%m-%d') fecha_fin,
r.disponible disponible, (1-(r.disponible/r.total))*100 ejecutado
FROM Proyecto p,
(SELECT pr.proyecto_id id, SUM(pr.monto_total) total, SUM(pr.monto_disponible) disponible
FROM ProyectoRubro pr GROUP BY pr.proyecto_id) r
WHERE p.estado = 1 AND r.id = p.id;


-- Procedimiento para actualizar un Proyecto
DELIMITER //
CREATE PROCEDURE actualizarProyecto(
    IN p_id INT,
    IN p_nombre VARCHAR(255),
    IN p_municipio VARCHAR(255),
    IN p_departamento VARCHAR(255),
    IN p_fecha_inicio DATE,
    IN p_fecha_fin DATE
)
BEGIN
    UPDATE Proyecto
    SET nombre = p_nombre, municipio = p_municipio, departamento = p_departamento, 
        fecha_inicio = p_fecha_inicio, fecha_fin = p_fecha_fin
    WHERE id = p_id;
END //
DELIMITER ;


-- Procedimiento para eliminar un Proyecto
DELIMITER //
CREATE PROCEDURE eliminarProyecto(
    IN p_id INT
)
BEGIN
    UPDATE Proyecto
    SET estado = 0
    WHERE id = p_id;
END //
DELIMITER ;





/*********************************************/
/************* GESTION DE RUBROS *************/
/*********************************************/

-- Procedimiento para insertar un Rubro asegurando unicidad
DELIMITER //
CREATE PROCEDURE crearRubro(
    IN r_nombre VARCHAR(255)
)
BEGIN
	DECLARE CONTINUE HANDLER FOR SQLEXCEPTION
    BEGIN
        -- En caso de error, revertir la transacción
        ROLLBACK;
		SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Nombre de rubro ya existe';
    END;

	START TRANSACTION;

	INSERT INTO Rubro(nombre) VALUES (r_nombre);
	COMMIT;
	
END //
DELIMITER ;


-- Procedimiento para obtener Rubros
DELIMITER //
CREATE PROCEDURE obtenerRubros()
BEGIN
    SELECT id, nombre
    FROM Rubro
    WHERE estado = 1;
END //
DELIMITER ;


-- Procedimiento para obtener Rubros de Proyecto
DELIMITER //
CREATE PROCEDURE obtenerRubrosProyecto(
    IN p_id INT
)
BEGIN
    SELECT r.id, r.nombre, pr.id proyectorubro
    FROM Rubro r
    LEFT JOIN ProyectoRubro pr ON pr.rubro_id = r.id
    WHERE pr.proyecto_id = p_id;
END //
DELIMITER ;

call obtenerRubrosProyecto(3);
select * from proyecto;
DROP PROCEDURE IF EXISTS obtenerRubrosProyecto;

-- Procedimiento para actualizar un Rubro
DELIMITER //
CREATE PROCEDURE actualizarRubro(
    IN r_id INT,
    IN r_nombre VARCHAR(255)
)
BEGIN
	DECLARE CONTINUE HANDLER FOR SQLEXCEPTION
    BEGIN
        -- En caso de error, revertir la transacción
        ROLLBACK;
		SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Nombre de rubro ya existe';
    END;

	START TRANSACTION;
	UPDATE Rubro
	SET nombre = r_nombre
	WHERE id = r_id;
	COMMIT;

END //
DELIMITER ;


-- Procedimiento para eliminar un Rubro
DELIMITER //
CREATE PROCEDURE eliminarRubro(
    IN r_id INT
)
BEGIN
    UPDATE Rubro
    SET estado = 0
    WHERE id = r_id;
END //
DELIMITER ;







/***********************************************/
/************* GESTION DE DONACION *************/
/***********************************************/

-- Procedimiento para insertar Donacion
DELIMITER //
CREATE PROCEDURE crearDonacion(
    IN d_donador VARCHAR(255),
    IN d_monto DECIMAL(10,2),
    IN d_proyectorubro_id INT
)
BEGIN
	DECLARE CONTINUE HANDLER FOR SQLEXCEPTION
    BEGIN
        -- En caso de error, revertir la transacción
        ROLLBACK;
		SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Problema en la creacion de la donacion';
    END;

	START TRANSACTION;
		INSERT INTO Donacion(donador, monto, proyectorubro_id)
		VALUES (d_donador, d_monto, d_proyectorubro_id);
		
		UPDATE ProyectoRubro
		SET monto_disponible = monto_disponible + d_monto,
			monto_total = monto_total + d_monto
		WHERE id = d_proyectorubro_id;
	COMMIT;
END //
DELIMITER ;

-- Procedimiento para obtener Donaciones
DELIMITER //
CREATE PROCEDURE obtenerDonaciones()
BEGIN
    SELECT d.id, d.donador, d.monto, DATE_FORMAT(d.fecha, '%Y-%m-%d') fecha, p.id proyecto, p.nombre, pr.id proyectorubro, r.nombre rubro
    FROM Donacion d
    LEFT JOIN ProyectoRubro pr ON d.proyectorubro_id = pr.id
    LEFT JOIN Proyecto p ON pr.proyecto_id = p.id
    LEFT JOIN Rubro r ON r.id = pr.rubro_id
    WHERE d.estado = 1;
END //
DELIMITER ;


-- Procedimiento para actualizar Donacion
DELIMITER //
CREATE PROCEDURE actualizarDonacion(
    IN d_id INT,
    IN d_donador VARCHAR(255),
    IN d_monto DECIMAL(10,2),
    IN d_fecha DATE,
    IN d_proyectorubro_id INT
)
BEGIN
    DECLARE old_monto DECIMAL(10,2);
    DECLARE old_proyectorubro_id INT;
    DECLARE old_monto_disponible DECIMAL(10,2);
    DECLARE new_monto_disponible DECIMAL(10,2);
    
	DECLARE CONTINUE HANDLER FOR SQLEXCEPTION
    BEGIN
        -- En caso de error, revertir la transacción
        ROLLBACK;
		SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Problema en la creacion de la donacion';
    END;

	START TRANSACTION;
    
		SELECT monto, proyectorubro_id INTO old_monto, old_proyectorubro_id
		FROM Donacion WHERE id = d_id;
		
		SELECT monto_disponible - old_monto INTO old_monto_disponible
		FROM ProyectoRubro WHERE id = old_proyectorubro_id;
		
		IF old_monto_disponible < 0 THEN
			SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Error: No es posible modificar el monto debido a las compras realizadas con el monto donado';
		ELSE
			UPDATE Donacion
			SET donador= d_donador, monto = d_monto, proyectorubro_id = d_proyectorubro_id, fecha = d_fecha
			WHERE id = d_id;
			
			UPDATE ProyectoRubro
			SET monto_disponible = old_monto_disponible,
				monto_total = monto_total - old_monto
			WHERE id = old_proyectorubro_id;
			
			UPDATE ProyectoRubro 
			SET monto_disponible = monto_disponible + d_monto,
				monto_total = monto_total + d_monto
			WHERE id = d_proyectorubro_id;
		END IF;
	COMMIT;
END //
DELIMITER ;


-- Procedimiento para eliminar un Donacion
DELIMITER //
CREATE PROCEDURE eliminarDonacion(
    IN d_id INT
)
BEGIN
    DECLARE old_monto DECIMAL(10,2);
    DECLARE old_proyectorubro_id INT;
    DECLARE old_monto_disponible DECIMAL(10,2);
    
	DECLARE CONTINUE HANDLER FOR SQLEXCEPTION
    BEGIN
        -- En caso de error, revertir la transacción
        ROLLBACK;
		SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Problema en la creacion de la donacion';
    END;

	START TRANSACTION;
		SELECT monto, proyectorubro_id
		INTO old_monto, old_proyectorubro_id
		FROM Donacion
		WHERE id = d_id;
		
		SELECT monto_disponible - old_monto
		INTO old_monto_disponible
		FROM ProyectoRubro
		WHERE id = old_proyectorubro_id;
		
		IF old_monto_disponible < 0 THEN
			SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Error: No es posible eliminar la donacion debido a las compras realizadas con el monto donado';
		ELSE
			UPDATE Donacion
			SET estado = 0
			WHERE id = d_id;
			
			UPDATE ProyectoRubro
			SET monto_disponible = old_monto_disponible, monto_total = monto_total - old_monto
			WHERE id = old_proyectorubro_id;
		END IF;
	COMMIT;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS eliminarDonacion;
















/***********************************************/
/************* GESTION DE COMPRA *************/
/***********************************************/

-- Procedimiento para registrar una Orden de Compra
DELIMITER //
CREATE PROCEDURE crearCompra(
    IN c_proveedor VARCHAR(255),
    IN c_monto DECIMAL(10,2),
    IN c_compra JSON
)
BEGIN
	DECLARE v_compra_id INT;
    DECLARE v_idx INT DEFAULT 0;
    DECLARE v_total_items INT;
    DECLARE v_item_monto DECIMAL(10,2);
    DECLARE v_item_proyectorubro_id INT;
    
    INSERT INTO Compra(proveedor, monto)
    VALUES (c_proveedor, c_monto);
    
	SET v_compra_id = LAST_INSERT_ID();
    
    INSERT IGNORE INTO ProyectoRubro(proyecto_id, rubro_id)
    SELECT v_proyecto_id, t.rubro_id
    FROM JSON_TABLE(r_rubros, '$[*]' COLUMNS(rubro_id INT PATH '$')) t;
    
    SET v_total_items = JSON_LENGTH(c_compra);
    
    WHILE v_idx < v_total_items DO
        -- Extraer los valores del JSON
        SET v_item_monto = JSON_UNQUOTE(JSON_EXTRACT(c_compra, CONCAT('$[', v_idx, '].monto')));
        SET v_item_proyectorubro_id = JSON_UNQUOTE(JSON_EXTRACT(detalles, CONCAT('$[', v_idx, '].proyectorubro_id')));
        
        -- Validar que el monto disponible en el rubro no sea menor al monto a descontar
        IF (SELECT monto_disponible FROM ProyectoRubro WHERE id = v_item_proyectorubro_id) >= v_item_monto THEN
            -- Insertar la relación en CompraProyectoRubro
            INSERT INTO CompraProyectoRubro (monto, compra_id, proyectorubro_id) 
            VALUES (v_item_monto, v_compra_id, v_item_proyectorubro_id);
            
            -- Actualizar el monto disponible en ProyectoRubro
            UPDATE ProyectoRubro 
            SET monto_disponible = monto_disponible - v_item_monto
            WHERE id = v_item_proyectorubro_id;
        ELSE
            SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Error: Fondos insuficientes para revertir la compra';
        END IF;
        
        SET v_idx = v_idx + 1;
    END WHILE;
    
END //
DELIMITER ;

-- Procedimiento para obtener Compras
DELIMITER //
CREATE PROCEDURE obtenerCompras()
BEGIN
    SELECT id, proveedor, monto, DATE_FORMAT(fecha, '%d/%m/%Y')
    FROM Compra
    WHERE estado = 1;
END //
DELIMITER ;

-- Procedimiento para actualizar una Compra
DELIMITER //
CREATE PROCEDURE actualizarCompra(
    IN c_id INT,
    IN c_proveedor VARCHAR(255),
    IN c_fecha DATE
)
BEGIN
    UPDATE Compra
    SET proveedor = c_proveedor, fecha = c_fecha
    WHERE id = c_id;
END //
DELIMITER ;

-- Procedimiento para eliminar una Compra
DELIMITER //
CREATE PROCEDURE eliminarCompra(
    IN c_id INT
)
BEGIN
	DECLARE v_idx INT DEFAULT 0;
    DECLARE v_total_items INT;
    DECLARE v_item_monto DECIMAL(10,2);
    DECLARE v_item_proyectorubro_id INT;
    
    SET v_total_items = (SELECT COUNT(*) FROM CompraProyectoRubro WHERE compra_id = c_id);
    
    WHILE v_idx < v_total_items DO
        SELECT proyectorubro_id, monto INTO v_item_proyectorubro_id, v_item_monto
        FROM CompraProyectoRubro WHERE compra_id = c_id LIMIT 1 OFFSET v_idx;
        
        -- Revertir el monto disponible en ProyectoRubro
        UPDATE ProyectoRubro 
        SET monto_disponible = monto_disponible + v_item_monto
        WHERE id = v_item_proyectorubro_id;
        
        SET v_idx = v_idx + 1;
    END WHILE;

    UPDATE Compra
    SET estado = 0
    WHERE id = c_id;
END //
DELIMITER ;




