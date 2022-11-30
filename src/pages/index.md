### Foreword
## Open your mind

What you are about to read is a provocative take on how we think of space in design. This thesis takes the concepts of Gestalt and pushes them further to identify the _why_. As digital product designers, why do we choose one amount of space over another? "Because it looks better" is a common response but _why_ does it look better? Perhaps more accurately, why does it look more correct?

On the surface, selecting an amount of space seems to be a subjective determination. However, once we identify the why, we can encode the purpose into a systematic usage making the decision to choose one amount of space over another more clear and objective.

In this journey, we'll review how design tokens are accomplished today for values other than space and why the modern approach is successful. We'll understand why space hasn't been included and take steps to introduce a new way of communicating these values. For folks inclined to experiment with the technique, some code examples are provided that can kickoff further system explorations.

### History
## Design tokens

The following is a definition of design tokens from the [Salesforce Lightning Design System (SLDS)](https://www.lightningdesignsystem.com/design-tokens/); where the concept was first released publicly:

> Design tokens are the visual design atoms of the design system — specifically, they are named entities that store visual design attributes.

**Semantic tokens** are a method of describing purpose within the design token name instead of describing the value itself. They are the difference between `--color-blue-500` and `--body-background-color`[^variable]. This naming technique is a quality of life improvement similar to writing the name of a room on a paint can; opposed to writing the name of a color on the walls of a room. **Label the paint can instead of the wall.** You can quickly recall the colors of each room by visiting the place with cans, make changes, and reassociate. All of this is done without visiting a single painted room to verify the color. [^paint]

The difficulty that comes with adoption of semantic tokens is trust. Because `--body-background-color` doesn't explicitly suggest what color it will be, those looking to find a specific color will be disappointed. This requires a mental shift to cease thinking in terms of value and start thinking in terms of purpose such as for accessibility, branding, precedence, feedback, and more. Asking "what is this thing?" instead of "what color should I use?" because the design system has the answer to the latter; only a product designer can answer the former.

Trust that the semantic token represents an appropriate value for the concept it describes. Letting go of specific value expectations is critical when thinking semantically. This will be important when considering upcoming concepts.

### Concept
## Deep into space

The semantic naming convention works easily for color, font, and roundness because they target elements; _identifiable things_. We can describe each of these pieces as an object in a digital world with several properties of style. This is not the case for space. Because it is effectively nothing, it is hard to associate it with a name and further a purpose of its own. **Space is dependent on the objects that create it.**[^css]

So what is the purpose of space? This is covered by the [Gestalt principle of proximity](https://www.nngroup.com/articles/gestalt-proximity/).

> The principle of proximity states that items close together are likely to be perceived as part of the same group — sharing similar functionality or traits.

In other words, objects that are closer together are perceived as more related than those which are farther apart. This means the key to naming space values as semantic tokens has to do with encoding the relation to the surrounding items. Simply put, there are things that are _here_ and things that are _there_ in relation to a subject.[^incomplete]

> <ex-proximity>Spatial demonstratives relative to a subject</ex-proximity>

However, the spatial demonstrative words "here" and "there" suggest focus on a specific place. Remember, we are not concerned with the objects or the locations. We are more interested in the separation between those objects. Therefore, we assign distance words to help identify the spatial order of the objects as abstract concepts: "near" and "away". If it helps, you can envision a circular threshold that surrounds a subject and clearly defines when something is near or not. If someone says an object is "near", you might not know where it is exactly but you can be sure which circle it is inside using our ruleset.

> <ex-threshold>Specific location isn't important, only general relationship</ex-threshold>

Another concept we'll need to introduce is scaling. When you share a video call application during a video call, you may get a tunneling effect. The video will show a smaller version of the desktop on screen, which would include your video inside. This happens recursively until the amount of space to view the desktop is too small to render. It's the same objects in the video, just reduced to fit the smaller area. A move of your cursor will show the amount of distance traveled to be the same relatively between objects of each screen, even if the physical distance is different from a single point-of-view.

> <ex-scaling>The tunneling effect scales content and space</ex-scaling>

The bottom line here is we can change the size of objects and the space around them proportionally to maintain the same relationships but fit into a smaller area. Our user is experiencing one interface but can traverse across several visual densities at the same time.

### Application
## Wisely dense

You may be familiar with the concepts of adding spacing using CSS and foundationally in design. In short&hellip; [^margin]

- **Gap** is the space _between_ items.
- **Padding** is the space _around_ items.

We can extend this a bit farther by speaking in terms of relationships.[^relationships] That is, the gap represents a much closer relationship between the items because they are all siblings in the same "house". While the padding often attempts to separate the items between different, less-related "houses". Now that we are speaking in terms of relationships, we use semantic spacing tokens to describe those relationships.

```css
ul {
    display: flex;
    padding: var(--space-away);
    gap: var(--space-near);
}
```

The example above applies the `--space-near` spacing token to inform the gap between children of the `<ul/>` element while the `--space-away` token separates the `<ul/>` from other elements around it.

Importantly, the `--space-near` and `--space-away` tokens are not meant to always be assigned to these properties blindly. **The question about relationships is key.** This is why the tokens are not named after padding and gap. For example, if the amount of space between the text and the edge of a button is meant to be larger on the sides, we can describe that space with the tokens as well.

```css
button {
    padding-top: var(--space-near);
    padding-bottom: var(--space-near);

    /* larger space on sides */
    padding-left: var(--space-away);
    padding-right: var(--space-away);
}
```

This example adds more space on the left and right compared to the top and bottom as is commonly applied to buttons. The important idea here is that we use relationships to drive the token curation; not that the `--space-away` must be used for all padding. It is more thoughtful.

At this point, a main criticism you may identify is that only having two tokens is extremely limiting. The distance between sections of a page is not often the same as the distance between buttons in a navigation, even if they have similar relationships as near identical children of a parent. This is why many design systems usually land on a T-shirt sizing approach; to support the many various amounts of space. However, not only does T-shirt sizing oppose semantic naming, the abundance of choice is paradoxically causing the very choice of which token to use to become more difficult ([Hick's Law](https://lawsofux.com/hicks-law)). Reducing the number of decisions (ie., tokens) will increase the chance of an appropriate selection. Reframing the question to "what is the relationship between these items?" omits the artistic subjectivity that would otherwise cause a biased choice. The answer is near binary; they are either related or not.[^none] This is not exclusive to T-shirt sizing; any naming approach in which there is difficulty adding or removing tokens is not truly scalable.

The method to unlock the expected additional values of space using this system is achieved by curated areas of shifting density; **the practical application of the tunneling effect.** This allows the physical amount of space between page sections to be larger than the amount between navigational buttons located deeper into the page.

> <ex-wireframe>Is it a page or is it a card? Does it matter?</ex-wireframe>

The wireframe on the left could be a page, or a card within a page. The wireframe on the right shows that the composition could be nested within itself and maintain all the same relationships by scaling the values down and becoming more dense. The measurement of space becomes smaller, along with the dimensions of images and sizes of the font. Importantly, not every "house" (or container of elements) is required to trigger a density shift. This is a curated process and most compositions can be achieved with a few shifts. Specifically, if your current design token collection has 8 spacing tokens, this would be covered by only 4 density changes (2 tokens &times; 4 shifts = 8 values of space across an interface). This is possible since each density shift will change how the `--space-near` and `--space-away` token values finally resolve.

The notion of density shifts supports the creative freedom for designers while maintaining a systematic application of the tokens. This provides designers the flexibility to decide if an area of the experience is meant to be spacious, compact, or something in between. Furthermore, a robust system where the spacing tokens are informed by a single grid unit value could support a themeable spacing system. One theme could support a roomy interface while another expects a data-dense table with a single themable value difference between them.

Below is a live example which is visually similar to designs provided by [Nathan Curtis](https://eightshapes.com/nathan-curtis/) in [his spacing token exploration](https://medium.com/eightshapes-llc/space-in-design-systems-188bcbae0d62) while using complementary space. Each shift in density is represented with a pink outline.

> <ex-codepen>A live exploration of complementary space</ex-codepen>

This approach isn't limited to describing the space between objects. Many systems will tightly couple typography metrics to curate overall vertical rhythm in a composition. The density shift concept can be leveraged to drive font size changes in new contexts. As an example, a section title of a page should be hierarchically similar to the title of a card in comparison to the surrounding content for each.[^importance] Meanwhile, line-height is inversely proportional to density for the purposes of readability since observers are reading content across densities.

### Execution
## Filling the void

Admittedly, supporting this system outside of a development environment is most likely a challenge. Design tools do not often provide complete coverage to the web medium. **What follows will be the engineered solution used on this very site.**

Before we dive into the details of the code, we should understand a key feature of modern CSS. [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*) can be thought of as author-defined variables. This is similar to the concept of design tokens but with one additional feature. **CSS Custom Properties allow the value of the property to be redefined in different scopes within the same page.** This means you can define `--background-color: white` at start of the page, but then change this to `--background-color: black` in a deeper area of the same page.

```css
body {
    --background-color: white;
    --foreground-color: black;
}

/* new scope, <div data-theme="inverted" /> */
[data-theme="inverted"] {
    --background-color: black;
    --foreground-color: white;
}
```

In this way, a page author can apply `data-theme="inverted"` to any element within the page to immediately invert the colors within as long as elements within the scope are using the same variable names. This is supported without providing a whole new set of variables to define inversion. This keeps the amount of variables low and the names constant; avoiding the need to provide adjustments to existing variable names such as "inverted" or "contrast". The background color will be resolved based on the given scope; triggered by an HTML attribute.

Now that this CSS feature is understood, the first task is to decide density levels. How many different shifts of density do you need to support? Start with 3. The first for the root of the page for big headlines and calls to action, the next for the majority of content, and the final for details and passive content. I've opted to avoid naming the levels to deny the possibility of reordering them with the added bonus of not needing to think of meaningful names.

The next task is to create the "trigger" for the shift. This can be done in CSS by creating a selector which changes the values of variables for elements within and in the tree below. While you could use a class name, Here we use a data attribute. This ensures that class name manipulation doesn't affect the density curation and is often easier to spot when inspecting the DOM.[^attribute]

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

Start preparing the density at the body, so the resulting CSS declaration blocks should finally be prepared as the following:

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

At this point it is time to curate the values. For each declaration block, we will create the "near" and "away" variables. We'll need to redefine what the variable value is at each change in density.

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

Now you assign the value expected for each. As a reminder, near is closer than away so the values provided should represent that relationship. Additionally, with each shift down the next values should be smaller than the previous because nested areas become more dense. Here I'd opted to halve the values between shifts.

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

You might notice that the amount of space in this setup repeats between shifts. As an example, in one density shift `--space-near` equals `4rem` but in the next `--space-away` also equals `4rem`. The curation of the values is completely up to the author based on each density shift. This also has the benefit of keeping focus within one context at a time. We aren't looking across shifts to decide on values, we do so within the context of each individual shift.

As recommended earlier, you can support a more flexible spacing system for experimentation and various design needs by calculating the amounts using a base value or grid unit. Here I'd opted to use the golden ratio between shifts.

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

Finally, downstream component and application developers could use the tokens within their CSS styles.

```css
button {
    padding: var(--space-near) var(--space-away);
}
```

What you might notice is that the `<button/>` component will be rendered with exceptionally large padding when applied in the body without any density shifts. This is by design and allows for different sized components to exist without explicitly activating them. Smaller buttons exist in denser areas of the page. Looking for a smaller button is asking for the surrounding density to change.[^damato]

> <ex-button>Density informs the element size</ex-button>

Getting typography to behave within the system is tricky as typography tends to be for the web. The root cause for failure is the lack of relationship between the spacing grid unit and the font line height while balancing readability.[^typography] Generally speaking, you'll also want the font size to decrease with each density shift. The following is using a [Major Third typescale](https://type-scale.com/) as an example.

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

Downstream component and application developers can leverage `em` units to target specific typography components and adjust the size of text as needed. The `em` unit will use the current font size found in the density shift as a multiplier.[^em] In the example below, the `<h2/>` font size will be 1.5 times the size found within the current density. This means that the resulting size of the text will be different at each density shift but proportionally the same in relation to all other text.

```css
h2 {
  font-size: 1.5em;
}
```

### Adoption
## A space for everyone

Change is hard. Realistically, this approach isn't meant to be a part of a siloed migration effort but instead treated as a reimagining of current paradigms. A point where the organization wholly agrees to explore space as a conversation about relationships and density. This is easier said than done.

To start exploring complementary space in your own designs, consider reviewing wireframes instead of high-fidelity mockups or live pages. Looking at the abstract concepts will help focus the attention on the relationships without including the noise about what the final values of space should be. You can identify where areas of low and high density will occur due to content expectations. This will inform where a shift should take place.

It is important to reiterate: **designers remain in control of the amount of space between elements and content.** This approach simply changes how designers communicate about space and streamlines the curation process. A designer can warrant the amount of space between elements by speaking in terms of relationships and density through a shared language and understanding. Finally, it allows designers to focus on what actually matters; guiding users toward satisfaction by way of an expertly crafted experience.

<div class="signoff">
    <p>Go boldly,</p>
    <img src="/donnie.jpeg"/>
    <a href="https://donnie.damato.design">Donnie D'Amato,<br/>Design Systems Architect</a>
</div>

[^variable]: I'll be using [CSS Custom Property](https://developer.mozilla.org/en-US/docs/Web/CSS/--*) syntax to describe variables and tokens in this document. While you could use other methods of defining tokens, CSS Custom Properties are the most flexible since they can be redefined in different contexts. This will be helpful in later examples.

[^paint]: In reality, the color of a room is dependent on factors that are often located within the physical space that would be challenging to systematize. A digital composition is arguably much more manageable but the analogy is pleasant.

[^css]: This aligns with the way we normally apply space in CSS. It is more common to add space to an object than it is to create an element for the sole purpose of existing as space itself.

[^incomplete]: While English has only two words, other languages have additional words to further divide referencial concepts. For example according to [Demonstratives in discourse](https://langsci-press.org/catalog/book/282), Estonian has 6 words: demonstratives _too_ ‘that’, _seal_ ‘there’, and _sealt_ ‘thence’ are used while referring to distant referents while demonstratives _see_ ‘this’, _siin_ ‘here’, and _siit_ ‘hence’ are used for referring to near referents. While this fact might possibly support more than the concepts of here and there, this exploration will argue that the limited set is more helpful.

[^relationships]: When I started thinking about how to quantify space before using density shifts, I originally considered using "degrees" to identify amounts of space; just like how there are degrees of social separation. While I believe a person's first introduction to the idea would potentially slow them down to learn more about the approach, ultimately the usage was discarded since it is no different than T-shirt sizing. Furthermore, trying to provide a meaningful scale and example using the gray area of friends and acquaintances would be socially awkward.

[^margin]: I'm avoiding `margin` here because it commonly can achieve both space around and space between items. In modern development, `margin` is often avoided for specific amounts of space and instead set as `auto` to help with positioning in responsive layouts. "Features" like [margin collapsing](https://www.joshwcomeau.com/css/rules-of-margin-collapse/) cause irregularities when crafting layouts while `padding` follows a more conventional ruleset.

[^none]: You could also choose not to add space at all. This effectively makes the objects visually composed into a single item. This is comparable to applying `transparent` to a color to achieve a similar absence of a value. No token is needed to effectively remove the application of a property.

[^importance]: The example here is specifically commenting on the relation of the title to the content, not to other titles. The underlying HTML elements which drive Search Engine Optimization (SEO) or assisted technology navigation using importance are frequently separate from the visual treatment. In other words, a `<p/>` can follow a `<h1/>`, `<h2/>`, `<h3/>` and so on. This is semantically valid independent of the font size for any of the elements.

[^attribute]: For improved developer experience, you could opt to provide a component which renders a container with the attribute automatically assigned to avoid typos and unexpected results.

[^damato]: If you'd like to see an example of button sizes relative to density shifts, visit [the button component page at system.damato.design](https://system.damato.design/library/button/). In this system using complementary space, there is no concept of size applied explcitly to the button; it is implicitly determined by the surrounding density.

[^typography]: There is a great deal more to web typography that will make things more difficult even without thinking of a new spacing approach. I highly recommend reading [Deep dive CSS: font metrics, line-height and vertical-align](https://iamvdo.me/en/blog/css-font-metrics-line-height-and-vertical-align) to understand some of the pitfalls.

[^em]: This site does not use this approach exactly. While the `em` unit is used to determine the font at the current density, it is assigned within the density declaration with token names (`--text-title` and `--text-detail`). This limits the number of type styles to choose from, making it easier to choose the correct one to use.