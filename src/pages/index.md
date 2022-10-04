### Foreword
## Open your mind

What you are about to read is a provocative take on how we think of space in design. This thesis takes the concepts of Gestalt and pushes them further to identify the _why_. As digital product designers, why do we choose one amount of space over another? "Because it looks better" is a common response but _why_ does it look better? Perhaps more accurately, why does it look more correct?

On the surface this seems to be a subjective determination. However, once we identify the why, we can encode the purpose into a systematic usage making the decision to choose one amount of space over another more clear and objective.

### Part 1
## A brief history of design tokens

The following is a definition of design tokens from the [Salesforce Lightning Design System (SLDS)](https://www.lightningdesignsystem.com/design-tokens/); where the concept was first released publicly:

> Design tokens are the visual design atoms of the design system — specifically, they are named entities that store visual design attributes.

You may be familiar with some basic examples of design tokens. For example, `$color-blue-500` should represent a shade of blue which a design team has determined to be a part of their regularly used palette of colors. The number often represents its placement among other blue colors within the palette. As you can see, it is possible to encode information about the value within the name. From here, the tokens can be published and used throughout the organization so values can be referenced instead of permanently written. If the value of `$color-blue-500` needs to change, that can happen away from the product development and inside of the curated palette.

It's one task to curate a list of tokens, but it's an entirely different exercise to determine _where_ designers should use that token. In other words, as a design system maintainer, **how do I provide guidance on when to use `$color-blue-500`?** A solution comes from a related problem; dark-mode.

Many web applications and sites were designed in a primarily light colored theme; expected to resemble paper. After all, the pages on the web were originally designed to be documents. However, people began to identify [the benefits of dark mode](https://blog.weekdone.com/why-you-should-switch-on-dark-mode/). Around 2019, there was a surge of activity in the web design community looking for the most efficient and elegant ways to create beautiful and usable dark-modes for existing pages.

As described above, design tokens should be able to drive this task. Places which used to be one value assigned by a token now needed to be an entirely different value. This should be as easy as changing the current value of `$color-blue-500` to another color. Except, **this will ruin the relationship between the name and the value that was once assigned**. As a more dramatic example, body text which might be `$color-black` now needed to have a light color assigned. This would ultimately cause confusion when designing and entire experience for dark-mode.

The answer here was to name the token by expected usage within the design. These are called "**semantic tokens**" and they describe purpose instead of describing the value itself. This introduces tokens such as `$body-background-color` which can be used to inform the web page background color without hinting at what the final color value is. This allows the background to be either a light color or dark one. Using semantic tokens in the styling of the application not only helps support light and dark-mode, but also any additional themeing experiements that the organization may want to explore.

It was clear that semantic tokens were more flexible than the previous naming approach. Although design system maintainers could still define tokens in the traditional way internally, they would assign those tokens to semantic ones to create themes of color. The point here is that the majority of the organization uses semantic tokens for stylistic choices instead of permanent values or traditional design token named resources.

### Part 2
## Finding meaning in the void

Determining why we choose a color is well-documented. We choose for accessibility, branding, precedence, feedback, and more. Encoding these into semantic token names is fairly straight-forward. As an example, error text is often red but which shade to choose will depend on the background the text is on. Choosing `$text-error-color` opens the possibility of different shades of red depending on the rest of the chosen colors.

This works for color (along with other tokens such as font and roundness) because they are targeting elements and content. We can identify each piece of content because there is a reason it exists. If there was no reason for it, it shouldn't be a part of the design. This is not the case for space. **Space is an absence of content**. Because it is effectively nothing, it is hard to justify its purpose at the location where it is applied.

So what is the purpose of space? This is covered by the [Gestalt priniciple of proximity](https://www.nngroup.com/articles/gestalt-proximity/).

> The principle of proximity states that items close together are likely to be perceived as part of the same group — sharing similar functionality or traits.

In other words, objects that are closer together are perceived as more related than those which are farther apart. This means the key to naming space values as semantic tokens has to do with encoding the relation of the surrounding items.

Let us consider social relationships to help create an analogous example. When you were young, you most likely lived in a home with your family. Each person within the home was most likely closely related to you in some way. In contrast, the majority of people who live outside of your home have a more distant relationship from you. In this way there are people that are near to you, and those that are far away from you. This is a binary proximity, either with us or not. The gray area of friends and acquaintences are bucketed into folks outside of the home for the purpose of our example. Hold this thought.

Next, imagine a dollhouse which is an exact replica of your home. Everything meticulously crafted to the precise scaled dimensions of the full-sized structure. This means that the distance between the stove and the sink in the kitchen is proportional between the dollhouse and the real one. A measuring tape will clearly show that the amount of distance is very different but the relationship is identical. Keep this idea in mind as well.

Using these two concepts, binary proximity and proportional relationships, we can now encode purpose within spacing tokens.

### Part 3
## The moment of truth

For this exercise, we'll be referring to examples provided by [Nathan Curtis](https://twitter.com/nathanacurtis) in his article [Space in Design Systems](https://medium.com/eightshapes-llc/space-in-design-systems-188bcbae0d62), specifically this image.

> ![Example cards](nathan-curtis-space.png)

Let's describe the image. There are 3 identical cards with equal space between them. Each card is composed of an image at the top and various text content below. Each piece of content is separated by an amount of space. The third card in particular has the amount of space between the pieces of content, visibly marked with numbers which indicate size in pixels. There are only 3 numbers used: 32, 16, 8.

Let's now describe each piece of the content within a card in more detail. The first two lines are headings; or perhaps more specifically an overline ("video") and a title ("supernova"). Below is a description as a paragraph. Next is a list of categories designed as a tag group. Finally a interactive button to view more details. Think of each as a parent section which holds child content.

Notice that the space between each of the parent sections is the same; 16 pixels. While the space between child content is also the same across all the parent sections; 8 pixels. This is the binary proximity concept at work. People who live in the same home are more closely related than those outside. So the children within each parent section has less space between them than the parents across sections. The items within this area are only either 8 or 16 pixels away depending on their purpose.

The final piece of the puzzle is scaling this up to describe the cards as a group. The space between each is 32 pixels but each is closely related to the next. This means that all of these cards would also live in the same house. However, from the previous example, this was 8 pixels. How do we describe the same relationship with a different amount of space? Proportionally!

You can think of the smaller content sections of the card as a dollhouse that exists in the larger house of the card container. The physical distance between the children is clearly different but **the relationship is identical**. This means we simply need to consider the card as a new context of space where the density shifts down. Children are still closely related while their neighbors are less related.

The card example is especially helpful since this design can be thought of as a mini-marketing page. A hero image, title, content, and call-to-action can be the composition of a full web page or a single card. The difference between them is most notably the density.

