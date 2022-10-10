### Foreword
## Open your mind

What you are about to read is a provocative take on how we think of space in design. This thesis takes the concepts of Gestalt and pushes them further to identify the _why_. As digital product designers, why do we choose one amount of space over another? "Because it looks better" is a common response but _why_ does it look better? Perhaps more accurately, why does it look more correct?

On the surface this seems to be a subjective determination. However, once we identify the why, we can encode the purpose into a systematic usage making the decision to choose one amount of space over another more clear and objective.

Throw out those T-shirt sized design tokens, it's time we back up our decisions with meaningful motive.

### Part 1
## A brief history of design tokens

The following is a definition of design tokens from the [Salesforce Lightning Design System (SLDS)](https://www.lightningdesignsystem.com/design-tokens/); where the concept was first released publicly:

> Design tokens are the visual design atoms of the design system — specifically, they are named entities that store visual design attributes.

You may be familiar with some basic examples of design tokens. For example, `$color-blue-500` should represent a shade of blue which a design team has determined to be a part of their regularly used palette of colors. The number often represents its placement among other blue colors within the palette. As you can see, it is possible to encode information about the value within the name. From here, the tokens can be published and used throughout the organization so values can be referenced instead of permanently written. If the value of `$color-blue-500` needs to change, that can happen away from the product development and inside of the curated palette.

It's one task to curate a list of tokens, but it's an entirely different exercise to determine _where_ designers should use that token. In other words, as a design system maintainer, **how do I provide guidance on when to use `$color-blue-500`?** A solution comes from a related problem; dark-mode.

Many web applications and sites were designed in a primarily light colored theme; expected to resemble paper. After all, the pages on the web were originally designed to be documents. However, people began to identify [the benefits of dark mode](https://blog.weekdone.com/why-you-should-switch-on-dark-mode/). Around 2019, there was a surge of activity in the web design community looking for the most efficient and elegant ways to create beautiful and usable dark-modes for existing pages.

As described above, design tokens should be able to drive this task. Places which used to be one value assigned by a token now needed to resolve to an entirely different value. This should be as easy as changing the current value of `$color-blue-500` to another color. Except, **this will ruin the relationship between the name and the value that was once assigned**. As a more dramatic example, body text which might be `$color-black` now needed to have a light color assigned for dark-mode. This would ultimately cause confusion when designing an entire experience with dozens of tokens.

The answer here was to name the token by expected usage within the design. These are called "**semantic tokens**" and they describe purpose instead of describing the value itself. This introduces tokens such as `$body-background-color` which can be used to inform the web page background color without hinting at what the final color value is. This allows the background to be either a light color or dark one depending on an earlier assignment. Using semantic tokens in the styling of the application not only helps support light and dark-mode, but also any additional themeing experiements that the organization may want to explore.

> <ex-semantic>Dark mode support through semantic tokens</ex-semantic>

It was clear that semantic tokens were more flexible than the previous naming approach. Although design system maintainers could still define tokens in the traditional way internally, they would assign those tokens to semantic ones to create themes of color for downstream product teams to use. The point here is that the majority of the organization uses semantic tokens for stylistic choices instead of permanent values or traditional design token named resources.

### Part 2
## Finding meaning in the void

Determining why we choose a color is well-documented. We choose for accessibility, branding, precedence, feedback, and more. Encoding these into semantic token names is fairly straight-forward. As an example, error text is often red but which shade to choose will depend on the background the text is on. Choosing `$text-error-color` opens the possibility of different shades of red depending on the rest of the chosen colors.

This works for color (along with other tokens such as font and roundness) because they are targeting elements and content. We can identify each piece of content an object with several properties of style. This is not the case for space. **Space is the absence of substance**. Because it is effectively nothing, it is hard to associate it with a name and further a purpose of its own.

So what is the purpose of space? This is covered by the [Gestalt priniciple of proximity](https://www.nngroup.com/articles/gestalt-proximity/).

> The principle of proximity states that items close together are likely to be perceived as part of the same group — sharing similar functionality or traits.

In other words, objects that are closer together are perceived as more related than those which are farther apart. The space is dependent on the objects that create it. This means the key to naming space values as semantic tokens has to do with encoding the relation of the surrounding items.

Let us consider social relationships to help create an analogous example. When you were young, you most likely lived in a home with your family. Each person within the home was most likely closely related to you in some way. In contrast, the majority of people who live outside of your home have a more distant relationship from you. In this way there are people that are near to you, and those that are far away from you.[^relationships]

> <ex-proximity>Spatial demonstratives relative to a subject</ex-proximity>

However, the spatial demonstrative words "here" and "there" focus on a specific place. Remember, we are not concerned with the objects or the locations. We are more interested in the space between those objects. Therefore, we assign distance words to help identify the spatial order of the objects as abstract concepts: "near" and "away". If it helps, you can envision a circular threshold that surrounds a subject and clearly defines when something is near or not. If someone says an object is "near", you might not know exactly where it is in the circle but you can be sure it is inside the circle.

Next, estimate the number of steps it would take to go from your bedroom to the kitchen. Compare this distance to an estimate in your preferred but scientifically agreed upon units of measurement. Now, picture a dollhouse which is an exact replica of your home. Everything meticulously crafted to the precise scaled dimensions of the full-sized structure. Imagine you were scaled down to the size of the dollhouse. The number of steps it would take to walk from the bedroom to the kitchen would be no different than your regular size but the physical distance in units will be dramatically different.

An outside observer could assert that the dollhouse is more dense; containing the same amount of content in a smaller space by scaling everything down.

> <ex-proportional>Maintaining proportions; physical measurements differ but relationships are identical</ex-proportional>

Using these two concepts, we can now begin to encode purpose within spacing tokens.

### Part 3
## The moment of truth

> <ex-wireframe>Is it a page or is it a card? Does it matter?</ex-wireframe>

[^relationships]: When I started thinking about how to quantify space before using density shifts, I originally considered using "degrees" to identify amounts of space; just like how there are degrees of social separation. While I believe a person's first introduction to the idea would potentially slow them down to learn more about the approach, ultimately the usage was discarded since it is no different than T-shirt sizing. Furthermore, trying to provide a meaningful scale and example using the gray area of friends and acquaintences would be socially awkward.
