import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Header from "@/components/Header";

import Home from "@/pages/Home";
import Academics from "@/pages/Academics";
import People from "@/pages/People";
import Projects from "@/pages/Projects";
import Publications from "@/pages/Publications";
import Opportunities from "@/pages/Opportunities";
import Honors from "@/pages/Honors";
import Research from "@/pages/Research";
import NotFound from "@/pages/not-found";
import News from "@/pages/News";
import Labs from "@/pages/Labs";
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
      <Route path="/news" component={News} />
      <Route path="/labs" component={Labs} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Header />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
