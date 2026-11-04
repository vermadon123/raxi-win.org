import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const AppInfo = () => {
  const appData = [
    { label: "App Name", value: "raxiwin app" },
    { label: "Raxi Win Invite Code", value: "62622134117" },
    { label: "Best Feature", value: "A Lot Of Free Bonuses, Unlimited withdrawal" },
    { label: "APK Size", value: "7.5 MB" },
    { label: "Registration Bonus", value: "₹51" },
    { label: "Referral Bonus", value: "₹100" },
    { label: "Customer Support", value: "24/7" },
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/10" />
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6">
            Raxi Win app info
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Invite code, APK size and bonus notes for the Raxi Win app — confirm details on the live host before you install.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="gaming-card p-8">
            <Table>
              <TableHeader>
                <TableRow className="border-b border-border/50">
                  <TableHead className="text-lg font-semibold text-foreground">Feature</TableHead>
                  <TableHead className="text-lg font-semibold text-foreground">Details</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {appData.map((item, index) => (
                  <TableRow key={index} className="border-b border-border/30 hover:bg-accent/10 transition-colors">
                    <TableCell className="font-medium text-foreground py-4">
                      {item.label}
                    </TableCell>
                    <TableCell className="text-muted-foreground py-4">
                      {item.value}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppInfo;
