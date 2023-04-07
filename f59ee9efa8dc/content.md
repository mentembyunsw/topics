%% Decision making: choosing an option %%

Suppose you're making a decision, either alone or with the help of a group. And suppose you've identified the options, and their pros and cons. Now it's time to choose one of the options.

How you do this depends on whether you're choosing by yourself, or with the help of a group.

# Choosing by yourself

Suppose it's up to you alone to choose one of the options. How do you do it?

In rare cases, you might have an agreed upon system. For example, you might:

1. Assign each pro and con a numerical value (likely to be a positive value for pros, and a negative value for cons).
2. Calculate the total value of each option, by summing the values of its pros and cons.
3. Choose the option with the best total value.

But deciding upon such a system can be just as difficult and contentious as the original decision, so systems like this tend not to be used.

What do you do instead? It's actually a bit mysterious. Think of a time when you made a decision, by weighing the pros and cons of some options (perhaps you decided what to order for dinner at a restaurant). Chances are, your decision seem to just pop into your head, from nowhere. Does that mean you ignored the weighing of pros and cons, and just guessed? Not necessarily. A large part of our thinking happens subconsciously - below the level of conscious awareness. Hopefully, what happened was this: your conscious deliberations over the pros and cons of the options seeped into your subconscious thought processes, where a fast and sophisticated combination was made, and a decision was reached, which then surfaced back up to your conscious awareness. Although it *seemed* to come from nowhere, as if just a guess, it was actually an informed weighing of the options that happened at a subconscious level, to which you had no access, apart from the outcome.

If it helps, think about how it would have felt if you had indeed just guessed. It would probably have felt different - guessing feels different from the way deliberating feels. This suggests that different mechanisms are involved. Although you can't tell which mechanism you're employing by observing the detailed operations of your mind, you can tell by the way it feels.

# Choosing with the help of a group

What if you're not choosing an option by yourself, but are getting help from a group?

There's only one way in which the group can help to choose, and that's by having the group vote. And it turns out that a group vote can, when done properly, and with the right people, do a better job at choosing an option than you or anyone else can do alone. This is a phenomenon known as **the wisdom of the crowd**. The following video, part of a longer BBC documentary, explains it nicely:

<iframe width="560" height="315" src="https://www.youtube.com/embed/iOucwX7Z1HU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Note that for this technique of choosing an option to be fruitful, a couple of conditions must be satisfied. 

First, there must be a diversity of opinions among the group. Each individual will likely be mistaken in some ways, but with sufficiently diverse opinions those mistakes will tend to cancel out, and the combined opinion will be closer to the truth than any of the individual opinions.

Second, people's votes must be cast independently, without being influenced by the votes of the others. Suppose that the voting is done one-by-one, which each voter getting to see the previous votes. This risks artificially swaying the outcome towards the opinions of the early voters. For suppose that the first person votes for option A. Suppose that the second person, who was going to vote for option B, changes her vote to option A instead, having heard the first person choose A. And suppose that the third person, who was also going to vote for option B, changes his vote to option A as well, having heard the previous *two* people vote for option A. If the votes had been cast independently (e.g. by private ballot), then the result would have been one vote for A and two votes for B. Instead, it's three votes for A, which does not accurately reflect the judgments of the voters at the outset of the vote. This kind of swaying is not *guaranteed* to happen, but there's a risk that it will.

# Voting methods

There are various ways that a vote might be conducted. The following are four common methods.

# First-past-the-post voting

A very simple method is **first-past-the-post** voting, in which everyone votes for one option, and the winning option is the one that gets the most votes.

Suppose there are four options - A, B, C, and D - and that the votes go as follows:

```
A B C D
-------
2 1 1 1
```

Option A wins, because it got the most votes.

Note that the winning option need not achieve an *overall* majority (more than 50% of the votes), it just needs to achieve a *relative* majority (more votes than any other option).

This is one drawback of the method - the winner might get only a small fraction of the total votes. In the case above, the winning option got only 2 of the 5 votes, which is only 40%. Sometimes it's much less - 10% or 5%. It can be a little disconcerting when the winning option receives such a small fraction of the votes.

# Preferential voting

A system that tries to avoid this drawback of first-past-the-post voting, by taking into account the full range of opinions about the options, is **preferential voting**. There are various ways of doing it, but here's one way.

**Voting**. Rather than casting a vote for a single option, a voter ranks all the options in order of preference, from most preferred to least preferred. Let's suppose that our five voters rank the four options as follows, from best on the left to worst on the right:

```
A, C, D, B
C, A, D, B
C, D, A, B
B, A, C, D
A, B, D, C
```

**Counting**. Counting the votes is done in stages. At each stage, the number of first preference votes for each option is counted, and the option with the fewest votes is removed from the lists. This process continues until there is just one remaining option, and it is the winner.

In the example above, the counts at stage 1 are (we look only at the first column):

```
A: 2
B: 1
C: 2
D: 0
```

D has the fewest votes, so it is removed from the lists, and the votes now look like this:

```
A, C, B
C, A, B
C, A, B
B, A, C
A, B, C
```

Now we move to stage 2, and the counts are as follows (again we count just the first column):

```
A: 2
B: 1
C: 2
```

B has the fewest votes, so it is removed from the lists , and the votes now look like this:

```
A, C
C, A
C, A
A, C
A, C
```

Now we move to stage 3, and the counts are as follows (again, we count just the first column):

```
A: 3
C: 2
```

C has the fewest votes, so it is removed from the list, and the votes now look like this:

```
A
A
A
A
A
```

There is now just one remaining option (A), and it is the winner.

# Score voting

Score voting is a variation on preferential voting. Rather than ranking the options from best to worst, voters give each option a score in some pre-determined range (such as 0-10). This requires a bit more work from voters, but it gives them more expressive power (they can specify exactly how much better one option is than another). The winning option is then the one with the highest total score. 

To illustrate, suppose the scoring goes as follows, using a system in which 0 is bad and 10 is excellent:

```
 A  B  C  D
-----------
 6  5  1  1
10  7  2  1
 1 10  1  1
 2  1  4  2
 1  4  1  5
```

Then the total score for each option is:

```
 A  B  C  D
-----------
20 27  9 10
```

The winning option is B, because it has the highest total score.

Notice that if we'd used a first-past-the-post vote in this case the final result would have been different. Assuming that each person would choose the option to which they gave the highest score, the votes would have been as follows, with the winning option being A:

```
A B C D
-------
2 1 1 1
```

# The Delphi method

The Delphi method is more complicated and time consuming than the previous methods. All of the previous methods required voters to vote just once. The Delphi method, in contrast, requires them to vote multiple times. After the first vote, voters are shown the results, and are then asked to vote again, perhaps after a period of discussion. After the second vote, voters are shown the results, and are then asked to vote again, perhaps after another period of discussion. This process continues until the results become stable, at which point the winning option is declared.

The following video describes an example of this process:

<iframe width="560" height="315" src="https://www.youtube.com/embed/bHwohMjG9OA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>