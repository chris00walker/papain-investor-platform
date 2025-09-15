import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ReshapedProvider } from '@/components/reshaped-provider'
import { DashboardLayout } from '@/components/dashboard/dashboard-layout'
import { VentureLayout } from '@/components/ventures/venture-layout'
import { GrowerPage } from './pages/grower-page'
import { ProcessorPage } from './pages/processor-page'
import { DistributorPage } from './pages/distributor-page'
import { DistributorBusinessModelPage } from './pages/distributor-business-model'
import { GrowerFinancialsPage } from './pages/grower-financials'
import { GrowerBusinessModelPage } from './pages/grower-business-model'
import { GrowerMarketPage } from './pages/grower-market'
import { GrowerRisksPage } from './pages/grower-risks'
import { GrowerOperationsPage } from './pages/grower-operations'
import { ProcessorBusinessModelPage } from './pages/processor-business-model'
import { ProcessorFinancialsPage } from './pages/processor-financials'
import { ProcessorTechnologyPage } from './pages/processor-technology'
import { ProcessorRisksPage } from './pages/processor-risks'
import { ProcessorOperationsPage } from './pages/processor-operations'
import { DistributorFinancialsPage } from './pages/distributor-financials'
import { DistributorStrategyPage } from './pages/distributor-strategy'
import { DistributorRisksPage } from './pages/distributor-risks'
import { DistributorLogisticsPage } from './pages/distributor-logistics'

function App() {
  return (
    <ReshapedProvider>
      <Router>
        <Routes>
          <Route path="/" element={<DashboardLayout />} />
          
          {/* Grower Routes */}
          <Route path="/ventures/grower" element={
            <VentureLayout ventureType="grower">
              <GrowerPage />
            </VentureLayout>
          } />
          <Route path="/ventures/grower/business-model" element={
            <VentureLayout ventureType="grower">
              <GrowerBusinessModelPage />
            </VentureLayout>
          } />
          <Route path="/ventures/grower/financials" element={
            <VentureLayout ventureType="grower">
              <GrowerFinancialsPage />
            </VentureLayout>
          } />
          <Route path="/ventures/grower/market" element={
            <VentureLayout ventureType="grower">
              <GrowerMarketPage />
            </VentureLayout>
          } />
          <Route path="/ventures/grower/risks" element={
            <VentureLayout ventureType="grower">
              <GrowerRisksPage />
            </VentureLayout>
          } />
          <Route path="/ventures/grower/operations" element={
            <VentureLayout ventureType="grower">
              <GrowerOperationsPage />
            </VentureLayout>
          } />

          {/* Processor Routes */}
          <Route path="/ventures/processor" element={
            <VentureLayout ventureType="processor">
              <ProcessorPage />
            </VentureLayout>
          } />
          <Route path="/ventures/processor/business-model" element={
            <VentureLayout ventureType="processor">
              <ProcessorBusinessModelPage />
            </VentureLayout>
          } />
          <Route path="/ventures/processor/financials" element={
            <VentureLayout ventureType="processor">
              <ProcessorFinancialsPage />
            </VentureLayout>
          } />
          <Route path="/ventures/processor/technology" element={
            <VentureLayout ventureType="processor">
              <ProcessorTechnologyPage />
            </VentureLayout>
          } />
          <Route path="/ventures/processor/risks" element={
            <VentureLayout ventureType="processor">
              <ProcessorRisksPage />
            </VentureLayout>
          } />
          <Route path="/ventures/processor/operations" element={
            <VentureLayout ventureType="processor">
              <ProcessorOperationsPage />
            </VentureLayout>
          } />

          {/* Distributor Routes */}
          <Route path="/ventures/distributor" element={
            <VentureLayout ventureType="distributor">
              <DistributorPage />
            </VentureLayout>
          } />
          <Route path="/ventures/distributor/business-model" element={
            <VentureLayout ventureType="distributor">
              <DistributorBusinessModelPage />
            </VentureLayout>
          } />
          <Route path="/ventures/distributor/financials" element={
            <VentureLayout ventureType="distributor">
              <DistributorFinancialsPage />
            </VentureLayout>
          } />
          <Route path="/ventures/distributor/strategy" element={
            <VentureLayout ventureType="distributor">
              <DistributorStrategyPage />
            </VentureLayout>
          } />
          <Route path="/ventures/distributor/risks" element={
            <VentureLayout ventureType="distributor">
              <DistributorRisksPage />
            </VentureLayout>
          } />
          <Route path="/ventures/distributor/logistics" element={
            <VentureLayout ventureType="distributor">
              <DistributorLogisticsPage />
            </VentureLayout>
          } />
        </Routes>
      </Router>
    </ReshapedProvider>
  )
}

export default App
