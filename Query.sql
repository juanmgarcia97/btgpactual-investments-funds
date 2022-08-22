SELECT 
	DISTINCT "Cliente".nombre, 
	"Cliente".apellidos 
FROM "Cliente" 
	INNER JOIN "Inscripcion" ON "Inscripcion"."idCliente" = "Cliente".id 
	INNER JOIN "Producto" ON "Producto".id = "Inscripcion"."idProducto" 
	INNER JOIN "Disponibilidad" ON "Disponibilidad"."idProducto" = "Producto".id 
	INNER JOIN "Sucursal" ON "Sucursal".id = "Disponibilidad"."idSucursal" 
	INNER JOIN "Visitan" ON "Visitan"."idSucursal" = "Sucursal".id 
		AND "Visitan"."idCliente" = "Cliente".id;