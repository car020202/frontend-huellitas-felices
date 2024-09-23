import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login/Login";
import Dashboard from "./Dashboard/Dashboard";
import EmployeeDashboard from "./EmployeeDashboard/EmployeeDashboard";
import EmpleadoDashboard from "./Empleado/EmpleadoDashboard";
import PlanillaView from "./EmployeeDashboard/PlanillaView";
import CrearPlanilla from "./EmployeeDashboard/CrearPlanilla";

import FormularioCita from "./Empleado/FormularioCita";
import VistaCalendario from "./Empleado/VistaClendario";
import EditarCita from "./Empleado/EditarCitas";

import CitasCliente from "./Dashboard/CitasCliente";
import TratamientosCliente from "./Dashboard/TratamientosCliente";
import ProductosCliente from "./Dashboard/ProductosCliente";
import ProtectedRoute from "./ProtectedRoute";

import AdminDashboard from "./Admin/AdminDashboard";
import AgregarProductos from "./Admin/AgregarProductos";
import AgregarProductoDetalle from "./Admin/AgregarPrdoctoDetalle";
import CrearUsuario from "./Admin/CrearUsuario";
import AgregarCliente from "./Empleado/AgregarCliente";
import AgregarMascota from "./Empleado/AgregarMascota";
import ProductoDetalle from "./Dashboard/ProductoDetalle";
import AgendarCita from "./Dashboard/AgendarCita";

function App() {
  return (
    <Router>
      <Routes>
        {/* Ruta para Login */}
        <Route path="/login" element={<Login />} />

        {/* Rutas protegidas para el usuario */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute roles={["usuario"]}>
              <Dashboard />
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

        {/* Rutas protegidas para contador y empleado */}
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
          path="/employee/agregar-cliente"
          element={
            <ProtectedRoute roles={["empleado"]}>
              <AgregarCliente />
            </ProtectedRoute>
          }
        />
        <Route
          path="/employee/agregar-mascota"
          element={
            <ProtectedRoute roles={["empleado"]}>
              <AgregarMascota />
            </ProtectedRoute>
          }
        />

        {/* Rutas protegidas para citas y calendarios */}
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

        {/* Rutas protegidas para el admin */}
        <Route
      path="/admin"
      element={
        <ProtectedRoute roles={["admin"]}> 
          <AdminDashboard />
        </ProtectedRoute>
      }
    />
    {/* Rutas protegidas para el usuario */}
    <Route
      path="/dashboard"
      element={
        <ProtectedRoute roles={["usuario"]}>  {/* Asegúrate que solo usuarios tengan acceso */}
          <Dashboard />
        </ProtectedRoute>
      }
    />
    {/* Rutas protegidas para contador y empleado */}
    <Route
      path="/employee"
      element={
        <ProtectedRoute roles={["contador", "empleado"]}>  {/* Asegúrate de incluir los roles permitidos */}
          <EmployeeDashboard />
        </ProtectedRoute>
      }
    />


        {/* Ruta por defecto */}
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
