import { Stack, } from "@mui/material";
import ProteinSources from "../components/protein/ProteinSources";
import CalorieDenseFood from "../components/protein/CalorieDenseFood";
import FiberFoods from "../components/protein/FiberFoods";
import ProteinRecipes from "../components/protein/ProteinRecipes";
import ProteinChannels from "../components/protein/ProteinChannels";
import PageLayout from "../components/PageLayout";
import ProteinTextRecipes from "../components/protein/ProteinTextRecipes";
import ProteinTabs from "../components/protein/ProteinTabs";
export default function ProteinPage() {
  return (
    <PageLayout title="Protien Sources & Recipies" showBreadcrumb>
      <Stack spacing={6} mt={4}>
        <ProteinSources />
        <CalorieDenseFood />
        <FiberFoods />
        <ProteinTabs/>
        <ProteinChannels />
      </Stack>
    </PageLayout>
  );
}
