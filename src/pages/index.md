### Foreword
## Open your mind

What you are about to read is a provocative take on how we think of space in design. This thesis takes the concepts of Gestalt and pushes them further to identify the _why_. As digital product designers, why do we choose one amount of space over another? "Because it looks better" is a common response but _why_ does it look better? Perhaps more accurately, why does it look more correct?

On the surface this seems to be a subjective determination. However, once we identify the why, we can encode the purpose into a systematic usage making the decision to choose one amount of space over another more clear and objective.

Throw out those T-shirt sized design tokens, it's time we back up our decisions with meaningful motive.

### History
## Design tokens

The following is a definition of design tokens from the [Salesforce Lightning Design System (SLDS)](https://www.lightningdesignsystem.com/design-tokens/); where the concept was first released publicly:

> Design tokens are the visual design atoms of the design system — specifically, they are named entities that store visual design attributes.

You may be familiar with some basic examples of design tokens. For example, `--color-blue-500`[^variable] should represent a shade of blue which a design team has determined to be a part of their regularly used palette of colors. The number often represents its placement among other blue colors within the palette. As you can see, it is possible to encode information about the value within the name. From here, the tokens can be published and used throughout the organization so values can be referenced instead of permanently written. If the value of `--color-blue-500` needs to change, that can happen away from the product development and inside of the curated palette.

It's one task to curate a list of tokens, but it's an entirely different exercise to determine _where_ designers should use that token. In other words, as a design system maintainer, how do I provide guidance on when to use `--color-blue-500`? A solution comes from a related problem; dark-mode.

Many web applications and sites were designed in a primarily light colored theme; expected to resemble paper. After all, the pages on the web were originally designed to be documents. However, people began to identify [the benefits of dark mode](https://blog.weekdone.com/why-you-should-switch-on-dark-mode/). Around 2019, there was a surge of activity in the web design community looking for the most efficient and elegant ways to create beautiful and usable dark-modes for existing pages.

As described above, design tokens should be able to drive this task. Places which used to be one value assigned by a token now needed to resolve to an entirely different value. This should be as easy as changing the current value of `--color-blue-500` to another color. Except, this will ruin the relationship between the name and the value that was once assigned. As a more dramatic example, body text which might be `--color-black` now needed to have a light color assigned for dark-mode. This would ultimately cause confusion when designing an entire experience with dozens of tokens.

The answer here was to name the token by expected usage within the design. These are called "semantic tokens" and they describe purpose instead of describing the value itself. This introduces tokens such as `--body-background-color` which can be used to inform the web page background color without hinting at what the final color value is. This allows the background to be either a light color or dark one depending on an earlier assignment. Using semantic tokens in the styling of the application not only helps support light and dark-mode, but also any additional themeing experiements that the organization may want to explore.

Semantic tokens are a quality of life improvement similar to writing the name of a room on a paint can, opposed to writing the name of a color on the walls of a room. You can quickly recall the colors of each room using the cans, make changes, and reassociate, all without visiting a single room to verify the color. [^paint]

**Label the paint can instead of the wall.**

The difficulty that comes with adoption of semantic tokens is trust. Because `--body-background-color` doesn't explicitly suggest what color it will be, those looking to find a specific color will be disappointed. This requires a mental shift to cease thinking in terms of color and start thinking in terms of purpose. Asking "what is this thing?" instead of "what color should I use?" because the design system has the answer to the latter; only a product designer can answer the former.

### Concept
## Deep into space

Determining why we choose a color is well-documented. We choose for accessibility, branding, precedence, feedback, and more. Encoding these into semantic token names is fairly straight-forward. As an example, error text is often red but which shade to choose will depend on the background the text is on. Choosing `--text-error-color` opens the possibility of different shades of red depending on the rest of the chosen colors.

This works for color (along with other tokens such as font and roundness) because they are targeting elements and content. We can identify each piece of content as an object with several properties of style. This is not the case for space. Because it is effectively nothing, it is hard to associate it with a name and further a purpose of its own. The space is dependent on the objects that create it.[^css]

**Space is the absence of substance.**

So what is the purpose of space? This is covered by the [Gestalt priniciple of proximity](https://www.nngroup.com/articles/gestalt-proximity/).

> The principle of proximity states that items close together are likely to be perceived as part of the same group — sharing similar functionality or traits.

In other words, objects that are closer together are perceived as more related than those which are farther apart. This means the key to naming space values as semantic tokens has to do with encoding the relation of the surrounding items.

Let us consider social relationships to help create an analogous example. When you were young, you most likely lived in a home with your family. Each person within the home was most likely closely related to you in some way. In contrast, the majority of people who live outside of your home have a more distant relationship from you. In this way there are people that are near to you, and those that are far away from you.[^relationships] In other words, people that are _here_ and people that are _there_.[^incomplete]

> <ex-proximity>Spatial demonstratives relative to a subject</ex-proximity>

However, the spatial demonstrative words "here" and "there" suggest focus on a specific place. Remember, we are not concerned with the objects or the locations. We are more interested in the space between those objects. Therefore, we assign distance words to help identify the spatial order of the objects as abstract concepts: "near" and "away". If it helps, you can envision a circular threshold that surrounds a subject and clearly defines when something is near or not. If someone says an object is "near", you might not know exactly where it is in the circle but you can be sure it is inside the circle using our ruleset.

> <ex-threshold>Specific location isn't important, only general relationship</ex-threshold>

As a separate exercise, estimate the number of steps it would take to go from your bedroom to the kitchen. Compare this distance to an estimate in your preferred but scientifically agreed upon units of measurement. Now, picture a dollhouse which is an exact replica of your home. Everything meticulously crafted to the precise scaled dimensions of the full-sized structure. Imagine you were scaled down to the size of the dollhouse. The number of steps it would take to walk from the bedroom to the kitchen would be no different than your regular size but the physical distance in units will be dramatically different.

> <ex-proportional>Relationships are maintained between objects while changing the density</ex-proportional>

EXPLAIN DENSITY HERE

Using these two concepts, we can now begin to encode purpose within spacing tokens.

### Application
## Wisely dense

You may be familiar with the concepts of adding spacing using CSS and foundationally in design. Put simply&hellip; [^margin]

- **Gap** is the space _between_ items.
- **Padding** is the space _around_ items.

We can extend this a bit farther by speaking in terms of relationships. That is, the gap represents a much closer relationship between the items that surround the space because they are all children in the same "house". While the padding often attempts to separate the items between "houses". So this means that we can often assign a "near" spacing token to the gap property and the "away" spacing token to padding property in areas where we want to display the appropriate relationship.

```scss
ul {
    display: flex;
    padding: var(--space-away);
    gap: var(--space-near); 
}
```

The example above applies the `--space-near` spacing token to inform the gap between children of the `<ul/>` element. Adding `--space-near` to the gap is not a hard and fast rule, you can also use these two tokens to describe either padding, gap, or any area where you need to show relationship using space.

```scss
button {
    padding: var(--space-near) var(--space-away);
}
```

This example adds more space on the left and right compared to the top and bottom as is commonly applied to buttons. The important idea here is that there are only two tokens and that the name makes relationships clear.

At this point, the main criticism you may declare is that only having two tokens is extremely limiting. The distance between sections of a page is not often the same as the distance between buttons in a navigation, even if they have similar relationships as near identical children of a parent. This is why many design systems usually land on the T-shirt sizing approach; to support the many various amounts of space. However, not only does T-shirt sizing oppose semantic naming, the abundance of choice is paradoxically causing the very choice of which token to use to become more difficult ([Hick's Law](https://lawsofux.com/hicks-law)). Reducing the number of decisions (ie., tokens) will increase the chance of an appropriate selection. Reframing the question to "what is the relationship between these items?" omits the artistic subjectivity that would otherwise cause biased choices by feeling. The answer is near binary; they are either related or not.[^none]

The method to unlock the expected additional values of space using this system is achieved by curated areas of shifting density; the practical application of the dollhouse effect. This allows the physical amount of space between page sections to be larger than the amount between navigational buttons located deeper into the page.

> <ex-wireframe>Is it a page or is it a card? Does it matter?</ex-wireframe>

The wireframe on the left could be a page, or a card within a page. The wireframe on the right shows that the composition could be nested within itself and maintain all the same relationships by scaling the values down and becoming more dense. The measurement of space becomes smaller, along with the dimensions of images and sizes of the font. Importantly, not every "house" (or container of elements) is required to trigger a density shift. This is a curated process and most compositions can be achieved with a few shifts. Specifically, if your current design token collection has 8 spacing tokens, this would be covered by only 4 density changes. This is possible since each density shift will change how the `--space-near` and `--space-away` token values finally resolve.

The notion of density shifts returns the creative freedom back to designers while maintaining a systematic application of the tokens. This provides designers the flexibility to decide if an area of the experience is meant to be spacious, compact, or something in between. Furthermore, a robust system where the spacing tokens are informed by a single grid unit value could support a themeable spacing system. One theme could support a roomy interface while another expects a data-dense table with a single value difference between them.

This approach isn't limited to describing the area between objects. Many systems will tightly couple typography metrics to curate overall vertical rhythm in a composition. The density shift concept can be leveraged to drive font size changes in new contexts. As an example, a section title of a page should be hierarchically similar to the title of a card in comparison to the surrounding content for each.[^importance] Meanwhile, line-height is inversely propotional to density for the purposes of readability since observers are reading content across densities.

### Execution
## Filling the void

Admittedly, supporting this system outside of a development environment is most likely a challenge. Design tools do not often provide complete coverage to the web medium. What follows will be the engineered solution used on this very site.

The first task is to decide density levels; how many different shifts of density do you need to support? I recommend 3 as a good number to use. The first for the root of the page, the next for the majority of content, and the final for details and passive content. I've opted to avoid naming the levels to deny the possibility of reordering them with the added bonus of not needing to think of meaningful names.

The next task is to create the "trigger" for the shift. This can be done in CSS by creating a selector which changes the values of variables for elements within and in the tree below. While you could use a class name, I recommend a data attribute. This ensures that class name manipulation doesn't affect the density curation and is often easier to spot when inspecting the DOM.[^attribute]

```css
[data-density-shift] {
    /* declarations go here */
}
```

Shifting the density down is done by repeating the selector to find the next shift within the current shift.

```css
[data-density-shift] [data-density-shift] {
    /* declarations go here */
}
```

I also recommend preparing the starting density at the body, so the resulting CSS declaration blocks should finally be prepared as the following:

```css
body {
    /* declarations go here */
}

body [data-density-shift] {
    /* declarations go here */
}

body [data-density-shift] [data-density-shift] {
    /* declarations go here */
}
```

At this point it is time to curate the values. For the remainder of the examples, I'll be using CSS custom property syntax which can be duplicated into any CSS file for experimentation and further adjusted in the browser at run-time. For each declaration block, we will create the "near" and "away" variables.

```css
body {
    --space-near: ;
    --space-away: ;
}

body [data-density-shift] {
    --space-near: ;
    --space-away: ;
}

body [data-density-shift] [data-density-shift] {
    --space-near: ;
    --space-away: ;
}
```

Now you assign the value expected for each. As a reminder, the gap is commonly smaller than the padding and each shift down the next values should be smaller than the previous. Here I'd opted to halve the values between shifts.

```css
body {
    --space-near: 4rem;
    --space-away: 8rem;
}

body [data-density-shift] {
    --space-near: 2rem;
    --space-away: 4rem;
}

body [data-density-shift] [data-density-shift] {
    --space-near: 1rem;
    --space-away: 2rem;
}
```

As recommend earlier, you can support a more flexible spacing system for experimentation and various design needs by calculating the amounts using a base value or grid unit. Here I'd opted to use the golden ratio between shifts.

```css
:root {
    --density: .5rem; /* ~8pt grid */
}

body {
    --space-near: calc(var(--density) * 3);
    --space-away: calc(var(--density) * 5);
}

body [data-density-shift] {
    --space-near: calc(var(--density) * 2);
    --space-away: calc(var(--density) * 3);
}

body [data-density-shift] [data-density-shift] {
    --space-near: calc(var(--density) * 1);
    --space-away: calc(var(--density) * 2);
}
```

Getting typography to behave within the system is tricky as typography tends to be for the web. The root cause for failure is the lack of relationship between the spacing grid unit and the font line height while maintaining readability.[^typography] Generally speaking, you'll also want the font-size to decrease with each density shift.

```css
:root {
    --density: .5rem; /* ~8pt grid */
}

body {
    --space-near: calc(var(--density) * 3);
    --space-away: calc(var(--density) * 5);
    font-size: 1.5625rem;
}

body [data-density-shift] {
    --space-near: calc(var(--density) * 2);
    --space-away: calc(var(--density) * 3);
    font-size: 1.25rem;
}

body [data-density-shift] [data-density-shift] {
    --space-near: calc(var(--density) * 1);
    --space-away: calc(var(--density) * 2);
    font-size: 1rem;
}
```

Finally, downstream component and application developers could use the tokens within their CSS styles.

```css
button {
    padding: var(--space-near) var(--space-away);
}
```

What you might notice is that the `<button/>` component will be rendered with exceptionally large padding when applied in the body without any density shifts. This is by design and allows for different sized components to exist without explicitly activating them. Smaller buttons exist in denser areas of the page. Looking for a smaller button is asking for the surrounding density to change.

[^variable]: I'll be using [CSS Custom Property](https://developer.mozilla.org/en-US/docs/Web/CSS/--*) syntax to describe variables and tokens in this document. While you could use other methods of defining tokens, CSS Custom Properties are the most flexible since they can be redefined in different contexts. This will be helpful in later examples.

[^paint]: In reality, the color of a room is dependent on factors that are often located within the physical space that would be challenging to systemitize. A digital composition is arguably much more manageable but the analogy is pleasant.

[^css]: This aligns with the way we normally apply space in CSS. It is more common to add space to an object than it is to create an element for the sole purpose of adding space.

[^incomplete]: While English has only two words, other languages have additional words to further divide referencial concepts. For example according to [Demonstratives in discourse](https://langsci-press.org/catalog/book/282), Estonian has 6 words: demonstratives _too_ ‘that’, _seal_ ‘there’, and _sealt_ ‘thence’ are used while referring to distant referents while demonstratives _see_ ‘this’, _siin_ ‘here’, and _siit_ ‘hence’ are used for referring to near referents. While this fact might possibly support more than the concepts of here and there, this exploration will argue that the limited set is more helpful.

[^relationships]: When I started thinking about how to quantify space before using density shifts, I originally considered using "degrees" to identify amounts of space; just like how there are degrees of social separation. While I believe a person's first introduction to the idea would potentially slow them down to learn more about the approach, ultimately the usage was discarded since it is no different than T-shirt sizing. Furthermore, trying to provide a meaningful scale and example using the gray area of friends and acquaintences would be socially awkward.

[^margin]: I'm avoiding `margin` here because it commonly can achieve both space around and space between items. In modern development, `margin` is often avoided for specific amounts of space and instead set as `auto` to help with positioning in responsive layouts.

[^none]: You could also choose not to add space at all. This effectively makes the objects visually composed into a single item. This is comparable to applying `transparent` to a color to achieve a similar absence of a value. No token is needed to effectively remove the application of a property.

[^importance]: The example here is specifically commenting on the relation of the title to the content, not to other titles. The underlying HTML elements which drive Search Engine Optimization (SEO) or assisted technology navigation using importance are frequently separate from the visual treatment. In other words, a `<p/>` can follow a `<h1/>`, `<h2/>`, `<h3/>` and so on. This is semantically valid independent of the font size for any of the elements.

[^attribute]: For improved developer experience, you could opt to provide a component which renders a container with the attribute automatically assigned to avoid typos and unexpected results.

[^typography]: There is a great deal more to web typography that will make things more difficult even without thinking of a new spacing approach. I highly recommend reading [Deep dive CSS: font metrics, line-height and vertical-align](https://iamvdo.me/en/blog/css-font-metrics-line-height-and-vertical-align) to understand some of the pitfalls.