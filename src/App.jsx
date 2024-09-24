import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login/Login";
import Dashboard from "./Dashboard/Dashboard";
import EmployeeDashboard from "./EmployeeDashboard/EmployeeDashboard"; 
import EmpleadoDashboard from "./Empleado/EmpleadoDashboard"; // Importar el EmpleadoDashboard
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
import Factura from "./Dashboard/Factura";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />

        {/* Ruta existente para el Dashboard del usuario */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute roles={["usuario"]}>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* Ruta existente para el Dashboard del empleado */}
        <Route
          path="/employee"
          element={
            <ProtectedRoute roles={["contador", "empleado"]}>
              <EmployeeDashboard />
            </ProtectedRoute>
          }
        />

        {/* Nueva ruta para el Dashboard del empleado (Empleado específico) */}
        <Route
          path="/empleado/dashboard"
          element={
            <ProtectedRoute roles={["empleado"]}>
              <EmpleadoDashboard />
            </ProtectedRoute>
          }
        />

        {/* Otras rutas... */}

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

        {/* Rutas para citas y clientes */}
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

        {/* Rutas para clientes */}
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
          path="/cliente/productos"
          element={
            <ProtectedRoute roles={["usuario"]}>
              <ProductosCliente />
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

        {/* Ruta de inicio */}
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>

  );
}

export default App;
