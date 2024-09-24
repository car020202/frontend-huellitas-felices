import React from "react";
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
import Factura from "./Dashboard/Factura";

function App() {
  return (
    /*<Router>
      <Routes>
        <Route path="/login" element={<Login />} />

       
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute roles={["usuario"]}>
              <Dashboard />
            </ProtectedRoute>
          }
        />

       
        <Route
          path="/employee"
          element={
            <ProtectedRoute roles={["contador", "empleado"]}>
              <EmployeeDashboard />
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

        <Route path="/" element={<Login />} />
      </Routes>
    </Router>*/

    <AgregarCliente/>
  );
}

export default App;
