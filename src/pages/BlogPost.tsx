import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SeoHead } from "@/components/SeoHead";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import { Fragment, ReactNode } from "react";

const renderInline = (text: string): ReactNode[] => {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-semibold text-foreground">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return <Fragment key={i}>{part}</Fragment>;
  });
};

const renderBlogContent = (content: string) => {
  const lines = content.split("\n");
  const blocks: ReactNode[] = [];
  let listItems: string[] = [];
  let key = 0;

  const flushList = () => {
    if (listItems.length === 0) return;
    blocks.push(
      <ul key={`list-${key++}`} className="list-disc list-outside space-y-2 ml-6 my-4">
        {listItems.map((item, i) => (
          <li key={i} className="text-muted-foreground leading-relaxed pl-1">
            {renderInline(item)}
          </li>
        ))}
      </ul>
    );
    listItems = [];
  };

  for (const rawLine of lines) {
    const line = rawLine.trim();

    if (!line) {
      flushList();
      continue;
    }

    const imageMatch = line.match(/^!\[([^\]]*)\]\(([^)]+)\)$/);
    if (imageMatch) {
      flushList();
      const [, alt, src] = imageMatch;
      blocks.push(
        <div key={`img-${key++}`} className="my-8">
          <img
            src={src}
            alt={alt || "Blog Image"}
            className="w-full h-64 sm:h-72 md:h-80 lg:h-96 object-contain rounded-xl bg-gray-50"
          />
        </div>
      );
      continue;
    }

    if (line.startsWith("### ")) {
      flushList();
      blocks.push(
        <h3 key={`h3-${key++}`} className="text-xl md:text-2xl font-bold text-foreground mt-8 mb-3">
          {renderInline(line.slice(4))}
        </h3>
      );
      continue;
    }

    if (line.startsWith("**") && line.endsWith("**") && !line.slice(2, -2).includes("**")) {
      flushList();
      blocks.push(
        <h2 key={`h2-${key++}`} className="text-2xl font-bold text-foreground mt-8 mb-4">
          {line.slice(2, -2)}
        </h2>
      );
      continue;
    }

    if (line.startsWith("•") || line.startsWith("- ") || line.startsWith("* ")) {
      const item = line.replace(/^[•\-*]\s*/, "").trim();
      if (item) listItems.push(item);
      continue;
    }

    // Heading + first bullet on same line: **Title** • item
    const headingBullet = line.match(/^\*\*([^*]+)\*\*\s*[•\-]\s*(.+)$/);
    if (headingBullet) {
      flushList();
      blocks.push(
        <h2 key={`h2-${key++}`} className="text-2xl font-bold text-foreground mt-8 mb-4">
          {headingBullet[1]}
        </h2>
      );
      listItems.push(headingBullet[2].trim());
      continue;
    }

    flushList();
    blocks.push(
      <p key={`p-${key++}`} className="text-muted-foreground leading-relaxed my-4">
        {renderInline(line)}
      </p>
    );
  }

  flushList();
  return blocks;
};

const BlogPost = () => {
  const { id } = useParams();
  
  // Blog posts data - same as in Blog.tsx
  const blogPosts = [
    {
      id: "0",
      title: "Lost Your Raxi Win Password? A Simple Step-by-Step Recovery Guide",
      excerpt: "Forgot your Raxi Win password? Don't worry! This guide provides a simple, step-by-step process to recover your account and get back to playing in minutes.",
      category: "Account Help",
      date: "October 5, 2026",
      readTime: "5",
      image: "/assets/raxi-win-lost-password.webp",
      content: `Forgetting your password can be frustrating, especially when you're ready to jump into a game. But don't worry—recovering your Raxi Win account is a quick and easy process. This guide will walk you through the exact steps to reset your password and get back to the action.

**Step 1: Go to the Login Page**
First, open the Raxi Win app or visit the official website and navigate to the login page. You'll see the fields for your username and password.

**Step 2: Find the "Forgot Password" Link**
On the login screen, look for a small link that says "Forgot Password?" or "Reset Password." It's usually located right below the password entry field. Click on this link to proceed.

**Step 3: Enter Your Registered Information**
The system will ask you to provide some information to verify your identity. This is a security measure to ensure no one else can access your account. You will likely be asked to enter either:
• Your registered mobile number
• Your registered email address
Enter the correct information and click "Next" or "Submit."

**Step 4: Verify Your Account with a Code**
To confirm that you are the account owner, Raxi Win will send a verification code (also known as an OTP - One-Time Password) to the mobile number or email you provided in the previous step.
• If you used your mobile number: Check your text messages for a code.
• If you used your email address: Check your inbox (and your spam folder, just in case) for an email from Raxi Win containing the code.
Enter this code into the verification field on the website or app.

**Step 5: Create a New Password**
Once the code is verified, you will be prompted to create a new password. Make sure to choose a strong password that you haven't used before. A strong password includes:
• A mix of uppercase and lowercase letters
• Numbers
• Special characters (e.g., !, @, #, $)
Write down your new password in a safe place, or use a password manager, so you don't forget it again!

**Step 6: Log In with Your New Password**
After successfully creating your new password, you will be redirected to the login page. Now, simply use your username and your new password to log in and access your Raxi Win account.

That's it! You have successfully recovered your account and can now continue enjoying all the games and features Raxi Win has to offer.

**Quick Troubleshooting Tips:**
• Didn't receive the OTP? Double-check that you entered the correct mobile number or email. You can also try clicking the "Resend Code" button after waiting for a few minutes.
• Still having trouble? If the above steps don't work, it's best to contact Raxi Win's customer support for personalized assistance. They can help you with more complex account issues.`
    },
    {
       id: "1",
       title: "How to Register on Raxi Win and Use Invite & Gift Codes",
       excerpt: "Complete your Raxi Win register process in just a few simple steps. Get your raxiwin login, and start playing the exciting raxi win game. Join now and claim your bonus!",
       category: "Registration Guide",
       date: "October 7, 2026",
       readTime: "8",
       image: "/assets/raxi-win-registration-explanation.webp",
       content: `Joining Raxi Win is a quick and simple process, but you don't want to miss out on the valuable bonuses you can get with special codes. Whether you have an invite code from a friend or a gift code you found online, this guide will walk you through the entire process—from creating your account to claiming your rewards.

Here's everything you need to know.

**Step 1: Visit the Homepage**
Open your browser and search for raxi-win.org.
Click the Register button on the homepage.
You will be redirected to the Registration Tab.

![Step 1: Visit Homepage](/assets/raxi-win-loginstep1.webp)

**Step 2: Fill in Your Mobile Number and Set Password**
Enter your Mobile Number in the provided field.
Create a Strong Password and re-enter it to confirm.
Review the Privacy Agreement and check the box to agree.
Click the Register Button to proceed.

![Step 2: Fill Mobile & Password](/assets/raxi-win-loginstep2.webp)

**Step 3: Double-Check Your Information**
Before moving forward, make sure all the required fields are filled in accurately:
• Mobile number
• Password (and confirmation)
• Invite Code: 62622134117
Verify that everything is correct before continuing.

![Step 3: Verify Information](/assets/raxi-win-loginstep3.webp)

**Step 4: Complete the Verification**
A verification step will appear. You may need to slide the puzzle piece or complete the required action to confirm you're a real user.
Once verified, your registration process will move to the final step.

![Step 4: Complete Verification](/assets/raxi-win-loginstep4.webp)

**Step 5: Log In and Start Playing**
After successful registration, you'll be redirected to the Login Screen.
Enter your Mobile Number and Password to log in.
Once logged in, you can start exploring games, making deposits, and enjoying the Raxi Win experience.

![Step 5: Login & Start Playing](/assets/raxi-win-loginstep5.webp)

**Using a Raxi Win Invite Code**
An invite code is a special code given by an existing player to a new user. It often provides a bonus to both the new player and the one who shared the code.

Where to Find It: You can get an invite code from a friend, social media influencer, or a community group.

How to Use It: During registration, enter the invite code (e.g., 62622134117) in the dedicated "Invite Code" box.

Why Use It?: Using an invite code gives you a head start with rewards like free coins or deposit bonuses.

**Redeeming a Raxi Win Gift Code**
Gift codes are unique codes that provide players with free rewards even after they've registered. These are usually shared during promotions or special events.

Where to Find It: Official Raxi Win social media pages (Telegram, Facebook), promotional emails, or limited-time events.

How to Redeem It:
• Log in to your Raxi Win account.
• Navigate to the My Account / Profile section.
• Look for Redeem Gift Code.
• Enter the code and click Redeem.
• Your reward (free coins, bonuses, etc.) will be instantly credited to your account.`
    },
    {
      id: "2",
      title:
        "A Guide to the Games on Raxi Win: Chicken Road, Colour Prediction, 5D Lotre & More",
      excerpt:
        "Discover the most exciting games on Raxi Win! From the trending Chicken Road to Colour Prediction and 5D Lotre, explore what makes each game unique and how to play them.",
      category: "Game Guide",
      date: "October 9, 2026",
      readTime: "6",
      image: "/assets/raxi-win-chiken-road-game.webp",
      content: `Raxi Win is quickly becoming a favorite destination for online gaming enthusiasts. The platform offers a wide variety of engaging games, from the fast-paced **Chicken Road** to the strategic **Colour Prediction** and the suspenseful **5D Lotre**. Whether you're a casual player or a serious prediction fan, there's something for everyone. This guide will walk you through some of our most popular games.

### Chicken Road – The Trending Favorite
If there's one game that's stealing the spotlight right now, it's **Chicken Road**. This thrilling prediction-based game keeps you on the edge of your seat as you watch a chicken attempt to cross a busy road. With each successful step, your winnings multiply. But be careful—one wrong move and the game ends.

**Why Players Love It**
• Thrilling gameplay with rising multipliers
• A perfect balance of luck and quick decision-making
• Fast rounds, ideal for short gaming sessions
• Mobile-friendly and easy to understand

**Quick Tips for Success**
• Start with smaller bets to test your strategy
• Know when to cash out and lock in your profits
• Always set a budget and play responsibly

### Colour Prediction
A fan-favorite for its simplicity and excitement, **Colour Prediction** is an addictive game where players predict the outcome of color sequences. It's an easy-to-learn game that offers constant action and is popular among new players.

**What Makes It Stand Out**
• Straightforward and fun to play
• Fast-paced rounds for non-stop action
• Great for both beginners and experienced players

### 5D Lotre
For those who enjoy number-based predictions, **5D Lotre** offers a thrilling lottery-style experience. Choose your combination of numbers and wait for the draw—if your numbers match, you could win big.

**Why Try 5D Lotre**
• High-stakes number-based gameplay
• Multiple ways to win with different combinations
• The perfect choice for players who love suspense and chance

### Other Games on Raxi Win
Beyond our trending titles, Raxi Win also features a variety of other exciting prediction games. The platform is always updating its game list with new card-style predictions and number combinations to keep the experience fresh and engaging for everyone.`
    }
  ];

  // Find the current blog post
  const currentPost = blogPosts.find(post => post.id === id);

  if (!currentPost) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="pt-32 pb-16 text-center">
          <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
          <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
          <Link to="/blog" className="text-primary hover:underline">
            ← Back to Blog
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <SeoHead
        path={`/blog/${id}`}
        title={`${currentPost.title} | Raxi Win Blog`}
        description={currentPost.excerpt}
        keywords={`raxi win blog, gaming tips, ${currentPost.category.toLowerCase()}`}
      />
      
      <Header />
      
      {/* Blog Post Content */}
      <article className="pt-32 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Back Button */}
          <div className="mb-8">
            <Link 
              to="/blog" 
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
          </div>

          {/* Blog Header */}
          <header className="mb-12">
            {/* Category */}
            <div className="inline-block px-4 py-2 bg-gradient-primary/10 text-primary text-sm font-medium rounded-full mb-6">
              {currentPost.category}
            </div>
            
            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {currentPost.title}
            </h1>
            
            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>{currentPost.date}</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                <span>{currentPost.readTime} min read</span>
              </div>
              <div className="flex items-center">
                <Tag className="w-4 h-4 mr-2" />
                <span>{currentPost.category}</span>
              </div>
            </div>
            
            {/* Excerpt */}
            <p className="text-xl text-muted-foreground leading-relaxed">
              {currentPost.excerpt}
            </p>
          </header>

          {/* Featured Image */}
          {currentPost.image && (
            <div className="mb-12">
              <img 
                src={currentPost.image} 
                alt={currentPost.title}
                className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-contain bg-gray-50 rounded-2xl shadow-lg"
              />
            </div>
          )}

          {/* Blog Content */}
          <div className="prose prose-lg max-w-none">
            <div className="leading-relaxed">
              {renderBlogContent(currentPost.content)}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 p-8 bg-gradient-primary/5 rounded-2xl text-center space-y-4">
            <h3 className="text-2xl font-bold mb-2">Continue with Raxi Win guides</h3>
            <p className="text-muted-foreground">
              <Link to="/login" className="text-primary font-medium hover:underline">
                Login
              </Link>
              {" · "}
              <Link to="/registration" className="text-primary font-medium hover:underline">
                Register
              </Link>
              {" · "}
              <Link to="/apk" className="text-primary font-medium hover:underline">
                APK
              </Link>
              {" · "}
              <a href="/#gift-code" className="text-primary font-medium hover:underline">
                Gift code
              </a>
              {" · "}
              <a href="/#payments" className="text-primary font-medium hover:underline">
                Payments
              </a>
            </p>
            <a
              href="https://www.raxi888.com/#/register?invitationCode=62622134117"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-gradient-primary text-white font-semibold rounded-xl hover:scale-105 transition-transform duration-300"
            >
              Open live Register
            </a>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPost;