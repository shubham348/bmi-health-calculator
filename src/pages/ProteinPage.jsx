import { Stack, } from "@mui/material";
import ProteinSources from "../components/protein/ProteinSources";
import CalorieDenseFood from "../components/protein/CalorieDenseFood";
import FiberFoods from "../components/protein/FiberFoods";
import ProteinRecipes from "../components/protein/ProteinRecipes";
import ProteinChannels from "../components/protein/ProteinChannels";
import PageLayout from "../components/PageLayout";

export default function ProteinPage() {
  return (
    <PageLayout title="Protien Sources & Recipies" showBreadcrumb>
      <Stack spacing={4} mt={4}>
        <ProteinSources />
        <CalorieDenseFood />
        <FiberFoods />
        <ProteinRecipes />
        <ProteinChannels />
      </Stack>
    </PageLayout>
  );
}
