import AnalyticsContainer from "../_components/AnalyticsContainer";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-8 bg-white dark:bg-black sm:items-start">
          <AnalyticsContainer />
      </main>
    </div>
  );
}
