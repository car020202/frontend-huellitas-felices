import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login/Login";
import Dashboard from "./Dashboard/Dashboard";
import EmployeeDashboard from "./EmployeeDashboard/EmployeeDashboard";
import EmpleadoDashboard from "./Empleado/EmpleadoDashboard";
import PlanillaView from "./EmployeeDashboard/PlanillaView";
import CrearPlanilla from "./EmployeeDashboard/CrearPlanilla";
/* nuevas */
import FormularioCita from "./Empleado/FormularioCita";
import VistaCalendario from "./Empleado/VistaClendario";
import EditarCita from "./Empleado/EditarCitas";
import CitasCliente from "./Dashboard/CitasCliente";
import TratamientosCliente from "./Dashboard/TratamientosCliente";
import ProductosCliente from "./Dashboard/ProductosCliente";
import ProtectedRoute from "./ProtectedRoute";
/* nuevo */
import AdminDashboard from "./Admin/AdminDashboard";
import AgregarProductos from "./Admin/AgregarProductos";
import AgregarProductoDetalle from "./Admin/AgregarPrdoctoDetalle";
import CrearUsuario from "./Admin/CrearUsuario";
import AgregarCliente from "./Empleado/AgregarCliente";
import AgregarMascota from "./Empleado/AgregarMascota";
import ProductoDetalle from "./Dashboard/ProductoDetalle";
import AgendarCita from "./Dashboard/AgendarCita";
import Factura from "./Dashboard/Factura"; // Aquí se importa Factura
//nueva la comente por que da error
import VerPlanillaEmpleado from "./Empleado/VerPlanillaEmpleado";
import Chatbot from "./Dashboard/Chatbot";
function App() {
  const [carrito, setCarrito] = useState([]); // Estado global del carrito

  // Función para agregar productos al carrito
  const agregarAlCarrito = (producto) => {
    setCarrito((prevCarrito) => [...prevCarrito, producto]);
  };

  return (
    <Router>
      <Routes>
        {/* Ruta de inicio */}
        <Route path="/" element={<Login />} />

        {/* Ruta para el login */}
        <Route path="/login" element={<Login />} />
        <Route path="/chatbot" element={<Chatbot />} />
        {/* Rutas para el cliente */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute roles={["usuario"]}>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/cliente/productos"
          element={
            <ProtectedRoute roles={["usuario"]}>
              <ProductosCliente
                carrito={carrito}
                agregarAlCarrito={agregarAlCarrito}
              />
            </ProtectedRoute>
          }
        />
        <Route
          path="/cliente/factura"
          element={
            <ProtectedRoute roles={["usuario"]}>
              <Factura carrito={carrito} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/cliente/citas"
          element={
            <ProtectedRoute roles={["usuario"]}>
              <CitasCliente />
            </ProtectedRoute>
          }
        />
        <Route
          path="/cliente/tratamientos"
          element={
            <ProtectedRoute roles={["usuario"]}>
              <TratamientosCliente />
            </ProtectedRoute>
          }
        />
        <Route
          path="/cliente/producto-detalle/:id"
          element={
            <ProtectedRoute roles={["usuario"]}>
              <ProductoDetalle />
            </ProtectedRoute>
          }
        />
        <Route
          path="/cliente/agendar-cita"
          element={
            <ProtectedRoute roles={["usuario"]}>
              <AgendarCita />
            </ProtectedRoute>
          }
        />

        {/* Rutas para el empleado */}
        <Route
          path="/employee"
          element={
            <ProtectedRoute roles={["contador", "empleado"]}>
              <EmployeeDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/empleado/dashboard"
          element={
            <ProtectedRoute roles={["empleado"]}>
              <EmpleadoDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/employee/planillas"
          element={
            <ProtectedRoute roles={["contador"]}>
              <PlanillaView />
            </ProtectedRoute>
          }
        />
        <Route
          path="/employee/crear-planilla"
          element={
            <ProtectedRoute roles={["contador"]}>
              <CrearPlanilla />
            </ProtectedRoute>
          }
        />

        {/* Rutas para citas */}
        <Route
          path="/citas/formulario"
          element={
            <ProtectedRoute roles={["empleado", "usuario"]}>
              <FormularioCita />
            </ProtectedRoute>
          }
        />
        <Route
          path="/citas/calendario"
          element={
            <ProtectedRoute roles={["empleado", "usuario"]}>
              <VistaCalendario />
            </ProtectedRoute>
          }
        />
        <Route
          path="/citas/editar/:id"
          element={
            <ProtectedRoute roles={["empleado"]}>
              <EditarCita />
            </ProtectedRoute>
          }
        />

        {/* Rutas para el admin */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute roles={["admin"]}>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/agregar-productos"
          element={
            <ProtectedRoute roles={["admin"]}>
              <AgregarProductos />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/agregar-producto-detalle/:id"
          element={
            <ProtectedRoute roles={["admin"]}>
              <AgregarProductoDetalle />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/crear-usuario"
          element={
            <ProtectedRoute roles={["admin"]}>
              <CrearUsuario />
            </ProtectedRoute>
          }
        />

        {/* Rutas para agregar cliente y agregar mascota desde el empleado */}
        <Route
          path="/empleado/agregar-cliente"
          element={
            <ProtectedRoute roles={["empleado"]}>
              <AgregarCliente />
            </ProtectedRoute>
          }
        />
        <Route
          path="/empleado/agregar-mascota"
          element={
            <ProtectedRoute roles={["empleado"]}>
              <AgregarMascota />
            </ProtectedRoute>
          }
        />
        <Route
          path="/empleado/ver-planilla"
          element={
            <ProtectedRoute roles={["empleado"]}>
              <VerPlanillaEmpleado />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
