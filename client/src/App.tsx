import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import Academics from "@/pages/Academics";
import People from "@/pages/People";
import Projects from "@/pages/Projects";
import Publications from "@/pages/Publications";
import Opportunities from "@/pages/Opportunities";
import Honors from "@/pages/Honors";
import Research from "@/pages/Research";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/academics" component={Academics} />
      <Route path="/people" component={People} />
      <Route path="/projects" component={Projects} />
      <Route path="/publications" component={Publications} />
      <Route path="/opportunities" component={Opportunities} />
      <Route path="/honors" component={Honors} />
      <Route path="/research" component={Research} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
