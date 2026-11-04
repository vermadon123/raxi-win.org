import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, FileText, Users, CreditCard, Gamepad2, Lock, AlertTriangle, Settings, RefreshCw, Mail } from "lucide-react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { SeoHead } from "@/components/SeoHead";


const TermsAndConditions = () => {
  const termsData = [
    {
      id: 1,
      icon: Users,
      title: "Eligibility to Use the Platform",
      subsections: [
        {
          title: "Age Requirement",
          content: "Access to Raxi Win is restricted to users who are 18 years of age or older. By creating an account, you confirm that you meet the legal age requirement in your region."
        },
        {
          title: "Local Law Compliance", 
          content: "Users are solely responsible for ensuring that online gaming is permitted in their jurisdiction. Raxi Win holds no responsibility for legal consequences arising from use in prohibited areas."
        },
        {
          title: "One User, One Account",
          content: "Each individual may only register one account. Multiple accounts for a single user are strictly prohibited and may result in permanent suspension."
        },
        {
          title: "Identity Verification",
          content: "To maintain the integrity of the platform, Raxi Win may request verification documents. Inaccurate or incomplete information may lead to limited access or closure of your account."
        }
      ]
    },
    {
      id: 2,
      icon: FileText,
      title: "Account Registration and Management",
      subsections: [
        {
          title: "Provide Accurate Information",
          content: "When signing up, please ensure that all personal details such as name, email, and phone number are valid and up to date. Incorrect data can affect your access and withdrawals."
        },
        {
          title: "Keep Your Credentials Secure",
          content: "Protect your account information. If you suspect unauthorized access, notify Raxi Win support immediately."
        },
        {
          title: "Account Suspension",
          content: "Violations of the terms or suspicious behavior may result in account suspension, either temporarily or permanently."
        },
        {
          title: "Self-Exclusion Options",
          content: "Need a break? You may activate a self-exclusion setting in your account, choosing either temporary or permanent restrictions."
        },
        {
          title: "Updating Personal Details",
          content: "Changes to your contact or identification information must be updated via account settings to avoid service interruptions."
        }
      ]
    },
    {
      id: 3,
      icon: CreditCard,
      title: "Promotions and Bonus Use",
      subsections: [
        {
          title: "Eligibility",
          content: "Bonuses and promotions are limited to qualifying members and are subject to specific terms, including event-based campaigns and referral rewards."
        },
        {
          title: "Wagering Terms",
          content: "Certain bonuses require you to meet wagering thresholds before withdrawals are allowed."
        },
        {
          title: "Expiry Periods",
          content: "Bonuses are available for a limited time. If not used within the validity period, they will be removed automatically."
        },
        {
          title: "Misuse of Offers",
          content: "Creating multiple accounts or exploiting promotional loopholes is not permitted and may result in a permanent ban."
        },
        {
          title: "Time-Limited Offers",
          content: "Some offers are only valid for a short window. Always read the terms and act promptly to claim your benefits."
        }
      ]
    },
    {
      id: 4,
      icon: CreditCard,
      title: "Deposits, Withdrawals, and Payments",
      subsections: [
        {
          title: "Accepted Methods",
          content: "Raxi Win accepts a variety of deposit methods including credit/debit cards and USDT (Tether). Refer to the wallet section for a full list."
        },
        {
          title: "Payment Limits",
          content: "Minimum and maximum transaction amounts vary. Please refer to your wallet dashboard for real-time figures."
        },
        {
          title: "Withdrawal Processing",
          content: "Withdrawals are processed only for verified accounts. Approval may take up to 24 hours."
        },
        {
          title: "Document Submission",
          content: "To secure withdrawals, you must verify your identity and ownership of the payment method."
        },
        {
          title: "Failed Transactions",
          content: "If any deposit or withdrawal fails, please contact Raxi Win support with your transaction reference for assistance."
        }
      ]
    },
    {
      id: 5,
      icon: Gamepad2,
      title: "Fair Play and Gaming Integrity",
      subsections: [
        {
          title: "Ethical Gameplay",
          content: "All games on Raxi Win are built on fair algorithms. Users are expected to play honestly."
        },
        {
          title: "Prohibited Tools",
          content: "Use of bots, cheats, or unauthorized scripts is strictly banned and leads to immediate account termination."
        },
        {
          title: "Game Malfunctions",
          content: "In case of system errors or interruptions, game results may be voided. You may resume your session or reach out to support."
        },
        {
          title: "Multiple Account Violations",
          content: "Using multiple accounts to manipulate games or bonuses violates Raxi Win's terms and will result in forfeited winnings."
        },
        {
          title: "Game Changes",
          content: "Raxi Win reserves the right to modify or remove games without prior notice."
        }
      ]
    },
    {
      id: 6,
      icon: Lock,
      title: "Privacy and Data Use",
      subsections: [
        {
          title: "User Data Protection",
          content: "Raxi Win takes your privacy seriously. Your personal details are handled in accordance with strict data protection standards."
        },
        {
          title: "Encryption",
          content: "All sensitive data and financial transactions are secured using advanced encryption technologies."
        },
        {
          title: "Third-Party Integrations",
          content: "Some services may rely on external providers. Raxi Win is not responsible for third-party privacy practices."
        },
        {
          title: "Legal Data Sharing",
          content: "Raxi Win will not share your data without your consent unless legally required."
        },
        {
          title: "Data Access and Deletion",
          content: "You can request to review, modify, or delete your personal data by contacting support."
        }
      ]
    },
    {
      id: 7,
      icon: Shield,
      title: "Responsible Gaming",
      subsections: [
        {
          title: "Responsible Play",
          content: "Raxi Win promotes responsible gaming and offers features like self-limits, session timers, and access restrictions."
        },
        {
          title: "Getting Help",
          content: "If gambling becomes a problem, Raxi Win encourages you to reach out to support organizations in your area."
        },
        {
          title: "Limit Setting",
          content: "Users can set personal playtime and deposit limits for better control."
        },
        {
          title: "Requesting Exclusion",
          content: "You may request temporary or permanent exclusion from the platform at any time."
        },
        {
          title: "Promoting Awareness",
          content: "Raxi Win aims to foster a healthy gaming community and encourage all players to be mindful of their habits."
        }
      ]
    },
    {
      id: 8,
      icon: AlertTriangle,
      title: "Disputes and Conflict Resolution",
      subsections: [
        {
          title: "Raising an Issue",
          content: "If you encounter any problems, Raxi Win support is ready to help. Most concerns are resolved within 48 hours."
        },
        {
          title: "Internal Resolution",
          content: "Unresolved issues will be reviewed by Raxi Win's management team. Their decision will be considered final."
        },
        {
          title: "Jurisdiction",
          content: "Disputes will be governed by the laws applicable to the region of operation."
        },
        {
          title: "Record Keeping",
          content: "Keep copies of your game history and transactions in case you need them for dispute resolution."
        },
        {
          title: "Case Updates",
          content: "Raxi Win will keep you informed throughout the resolution process."
        }
      ]
    },
    {
      id: 9,
      icon: Settings,
      title: "Maintenance and Platform Updates",
      subsections: [
        {
          title: "Scheduled Downtime",
          content: "Raxi Win occasionally performs system maintenance, which may limit access temporarily. Notices will be posted in advance."
        },
        {
          title: "Unexpected Outages",
          content: "In the event of unplanned service disruptions, Raxi Win will restore service as quickly as possible."
        },
        {
          title: "Feature Adjustments",
          content: "Raxi Win may revise or remove services and features at its discretion."
        },
        {
          title: "Communication",
          content: "Important updates may be sent via email, push notifications, or posted on Raxi Win's website."
        },
        {
          title: "User Awareness",
          content: "Users are advised to stay informed by checking notifications regularly."
        }
      ]
    },
    {
      id: 10,
      icon: RefreshCw,
      title: "Revisions to These Terms",
      subsections: [
        {
          title: "Right to Modify",
          content: "Raxi Win may revise these Terms & Conditions at any time."
        },
        {
          title: "Notification of Changes",
          content: "Significant updates will be shared via direct communication or public announcements."
        },
        {
          title: "Continued Use as Agreement",
          content: "Continued use of the platform implies your acceptance of updated terms."
        },
        {
          title: "User Responsibility",
          content: "Check this page periodically to stay current with policy updates."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <SeoHead
        path="/terms"
        title="Terms and Conditions — Raxi Win Game Rules"
        description="Raxi Win terms and conditions: account rules, promotions and policies before you register or login."
        keywords="raxi win terms, raxiwin conditions, raxi win rules, raxiwin policy, raxi win game rules"
      />
      <Header />
      {/* Main Content */}
      <div className="relative z-10 px-4 lg:px-6 pb-8 pt-32">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12 lg:mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Terms & Conditions
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
              Raxi Win welcomes you to our gaming platform. Before using the platform, please review the following terms and conditions carefully.
            </p>
            <div className="gaming-card p-6 max-w-4xl mx-auto">
              <p className="text-muted-foreground text-lg leading-relaxed">
                By registering or accessing our services, you acknowledge that you have read, understood, and agreed to the policies outlined below.
              </p>
            </div>
          </div>

          {/* Terms Sections */}
          <div className="space-y-8">
            {termsData.map((section, index) => {
              const IconComponent = section.icon;
              return (
                <Card 
                  key={section.id} 
                  className="gaming-card border-gaming-orange/20 backdrop-blur-gaming transition-all duration-500 hover:scale-[1.02] hover:shadow-glow group card-entering"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="pb-6">
                    <CardTitle className="flex items-center gap-4 text-2xl lg:text-3xl font-bold text-foreground group-hover:text-gaming-orange transition-colors duration-300">
                      <div className="p-3 rounded-xl bg-gaming-orange/20 group-hover:bg-gaming-orange/30 transition-colors duration-300">
                        <IconComponent className="w-8 h-8 text-gaming-orange" />
                      </div>
                      {section.id}. {section.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {section.subsections.map((subsection, subIndex) => (
                      <div 
                        key={subIndex} 
                        className="p-6 rounded-lg bg-primary/5 border border-gaming-orange/10 hover:border-gaming-orange/30 transition-all duration-300 hover:bg-primary/10"
                      >
                        <h4 className="text-lg font-semibold text-gaming-orange mb-3">
                          {section.id}.{subIndex + 1} {subsection.title}
                        </h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {subsection.content}
                        </p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Contact Section */}
          <Card className="gaming-card border-gaming-orange/20 backdrop-blur-gaming mt-12 hover:scale-[1.02] hover:shadow-glow transition-all duration-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-4 text-2xl lg:text-3xl font-bold text-foreground">
                <div className="p-3 rounded-xl bg-gaming-orange/20">
                  <Mail className="w-8 h-8 text-gaming-orange" />
                </div>
                11. Get in Touch
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                If you have any questions about Raxi Win policies, please reach out to our support team. We're available 24/7 via live chat, email, or phone.
              </p>
              <a href="https://www.raxi888.com/#/register?invitationCode=62622134117" target="_blank" rel="noopener noreferrer">
                <Button variant="hero" size="lg" className="shadow-glow">
                  Contact Support
                </Button>
              </a>
            </CardContent>
          </Card>

          {/* Agreement & Disclaimer */}
          <div className="grid lg:grid-cols-2 gap-8 mt-12">
            <Card className="gaming-card border-gaming-blue/20 backdrop-blur-gaming hover:scale-[1.02] hover:shadow-glow transition-all duration-500">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gaming-blue flex items-center gap-3">
                  <Shield className="w-6 h-6" />
                  User Agreement
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  By using Raxi Win, you agree to these terms and confirm that you are legally allowed to participate in online gaming within your region.
                </p>
              </CardContent>
            </Card>

            <Card className="gaming-card border-gaming-purple/20 backdrop-blur-gaming hover:scale-[1.02] hover:shadow-glow transition-all duration-500">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gaming-purple flex items-center gap-3">
                  <AlertTriangle className="w-6 h-6" />
                  Disclaimer
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  This website operates solely as an independent affiliate and promoter of Raxi Win. Game outcomes are based on chance and skill, and participation is at the user's own risk.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Footer CTA */}
          <div className="text-center mt-16">
            <div className="gaming-card p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                Ready to Join Raxi Win?
              </h3>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Start your gaming journey today with our comprehensive registration guide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/registration">
                  <Button variant="hero" size="lg" className="shadow-glow w-full sm:w-auto">
                    Registration Guide
                  </Button>
                </Link>
                <a href="https://www.raxi888.com/#/register?invitationCode=62622134117" target="_blank" rel="noopener noreferrer">
                  <Button variant="glass" size="lg" className="w-full sm:w-auto">
                    Login Now
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
