"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import styles from "./MenuOverview.module.css";

interface MenuCategory {
  title: string;
  description: string;
  image: string;
}

const categories: MenuCategory[] = [
  {
    title: "Korean Food",
    description: "You can pick from a big selection of classic Korean dishes or Korean fusion dishes with a unique modern twist.",
    image: "/bulgogi.jpg"
  },
  {
    title: "Beers",
    description: "We have 35 or more different types of beers that are constantly rotating and available on tap.",
    image: "/beers-on-tap.jpg"
  },
  {
    title: "Cocktails",
    description: "Our mixologists craft exquisite cocktails that are a harmonious blend of flavors, delivering a delightful experience with every sip.",
    image: "/soju-sake-cocktails.jpg"
  },
  {
    title: "Spirits & Wines",
    description: "Our full bar offers a diverse selection of premium spirits, soju, sake and wines to suit every taste.",
    image: "/soju-sake-wine.jpg"
  }
];

interface ChefPick {
  name: string;
  price: string;
  description: string;
  image: string;
}

interface MenuGroup {
  heading: string;
  items: string[];
}

const chefPicks: ChefPick[] = [
  {
    name: "Signature Fried Chicken",
    price: "$34",
    description: "Double-fried to extraordinary crispness, hand-brushed with our proprietary blend of aged gochujang, local honey, and toasted sesame. A perfect balance of heat and complex sweetness, served with house-pickled daikon radish.",
    image: "/chicken-popcorn.jpg"
  },
  {
    name: "Spicy Seafood Fusion Pasta",
    price: "$26",
    description: "A perfect marriage of East and West. Plump prawns, tender calamari, and fresh mussels tossed in our signature spicy gochujang rose cream sauce over al dente pasta, finished with fresh microgreens.",
    image: "/seafood-rose-pasta.jpg"
  }
];

const menuGroups: MenuGroup[] = [
  {
    heading: "Korean Favorites",
    items: [
      "Bulgogi with house-made sauce",
      "Galbi marinated with house-made sauce",
      "Dolsot kimchi fried rice",
      "Udon and ramen noodle bowls",
    ],
  },
  {
    heading: "Fusion & Bar Plates",
    items: [
      "Bulgogi tacos with Korean BBQ rib-eye",
      "Spicy pork bulgogi tacos",
      "Pork cutlet with salad and rice",
      "Corn cheese with cheddar and mozzarella",
    ],
  },
  {
    heading: "Salads & Shared Bites",
    items: [
      "Asian chicken salad with sesame dressing",
      "Shrimp mandarin salad with raspberry walnut vinaigrette",
      "Fried cuttlefish and dried filefish snacks",
      "Shareable plates for happy hour and late-night dining",
    ],
  },
  {
    heading: "Drinks",
    items: [
      "Rotating draft beer and bottled beer",
      "Soju, sake, wine, and Korean bar drinks",
      "American, Scotch, Japanese, and Irish whiskey",
      "Handcrafted cocktails from the full bar",
    ],
  },
];

export default function MenuOverview() {
  return (
    <section className={`section ${styles.menuSection}`} id="menu" aria-labelledby="menu-title">
      <div className="container">
        
        {/* Intro Header */}
        <ScrollReveal variant="fadeInUp" className={styles.intro} distance={20}>
          <span className="btn-outline" style={{ pointerEvents: 'none', border: 'none', padding: '0', color: 'var(--primary)', letterSpacing: '0.2em' }}>
            Gastronomy
          </span>
          <h2 id="menu-title" className={styles.title}>What We Serve</h2>
          <div className={styles.divider} />
          <p className={styles.subtitle}>
            From classic comfort food to bold fusion creations, every dish is crafted with passion and precision. 
            Pair your meal with a variety of beverages, including beers, spirits, soju, wines, and handcrafted cocktails.
          </p>
        </ScrollReveal>

        {/* Categories Grid */}
        <div className={styles.grid}>
          {categories.map((category, index) => (
            <ScrollReveal 
              key={category.title} 
              variant="zoomIn" 
              delay={index * 0.1} 
              className={styles.card}
              distance={25}
            >
              <article style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={category.image}
                    alt={`Delightful representation of our ${category.title} options`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className={styles.cardImage}
                  />
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{category.title}</h3>
                  <p className={styles.cardDescription}>{category.description}</p>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        {/* Full menu CTA */}
        <ScrollReveal variant="simpleFade" className={styles.ctaArea} delay={0.2}>
          <div className={styles.menuActions}>
            <a
              href="/menu.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              See Full Menu
            </a>
          </div>
        </ScrollReveal>

        {/* Search-friendly menu highlights */}
        <div className={styles.menuHighlights} aria-labelledby="menu-highlights-title">
          <ScrollReveal variant="fadeInUp" distance={20}>
            <h3 id="menu-highlights-title" className={styles.highlightsTitle}>Menu Highlights</h3>
            <p className={styles.highlightsIntro}>
              Browse the full PDF menu for current availability. These highlights help guests quickly
              understand the Korean food, fusion plates, happy hour bites, beer, soju, sake, and cocktail
              options available at Nandarang in Koreatown LA.
            </p>
          </ScrollReveal>

          <div className={styles.highlightsGrid}>
            {menuGroups.map((group, index) => (
              <ScrollReveal
                key={group.heading}
                variant="fadeInUp"
                delay={index * 0.08}
                className={styles.highlightCard}
                distance={24}
              >
                <article>
                  <h4 className={styles.highlightHeading}>{group.heading}</h4>
                  <ul className={styles.highlightList}>
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Chef's Picks Subsection */}
        <div className={styles.chefsPicks} aria-labelledby="picks-title">
          <ScrollReveal variant="fadeInUp" distance={20}>
            <h3 id="picks-title" className={styles.picksTitle}>Chef&apos;s Picks</h3>
          </ScrollReveal>
          
          <div className={styles.picksGrid}>
            {chefPicks.map((pick, index) => (
              <ScrollReveal 
                key={pick.name} 
                variant="fadeInUp" 
                delay={index * 0.15} 
                className={styles.pickCard}
                distance={35}
              >
                <article style={{ height: '100%' }}>
                  <div className={styles.pickImageWrapper}>
                    <Image
                      src={pick.image}
                      alt={`Close-up gourmet shot of ${pick.name}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className={styles.pickImage}
                    />
                  </div>
                  <div className={styles.pickHeader}>
                    <h4 className={styles.pickTitle}>{pick.name}</h4>
                    <span className={styles.pickPrice}>{pick.price}</span>
                  </div>
                  <p className={styles.pickDescription}>{pick.description}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
