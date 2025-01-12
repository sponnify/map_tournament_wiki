---
layout: page
title: Async Matches
parent: Match Information
grand_parent: Tournament Info
nav_order: 3
permalink: /tournament-info/match-info/async-matches/
---

# Asynchronous Matches

{: .warning }
Asynchronous matches are a **last resort option** that should only be pursued when teams have *exhaustively* attempted to find a mutual match time. These matches require significant additional staff resources and are strongly discouraged unless absolutely necessary.

An asynchronous (async) match allows two teams to play their tournament match at different times while maintaining competitive fairness. This accommodation exists only for situations where teams have made *every reasonable effort* to find a mutual time but cannot due to severe timezone differences or unavoidable scheduling conflicts.

{: .important }
To request an async match, teams **must**:
1. Demonstrate genuine attempts to find a mutual time
2. Provide evidence of scheduling conflicts to Internal Affairs (**@RaiRei**)
3. Receive *explicit* staff approval before proceeding

Staff may deny async requests if:
- Teams haven't made sufficient effort to find a mutual time
- Evidence of scheduling conflicts is inadequate
- Staff resources aren't available to support the async match
- The request is made too close to the match deadline

---

## Availability

| Round | Async Availability |
|-------|-------------------|
| Round of 32 | **All** matches |
| Round of 16 | **All** matches |
| Quarter Finals | **Losers' Bracket only** |
| Semi Finals+ | *Not available* |

---

## Requesting an Async Match

### Requirements

| Deadline | Requirement |
|:---------|:------------|
| **Thursday, 23:59 UTC** | Initial request deadline |
| **Friday, 23:59 UTC** | Submit lobby times |

Additionally:
- Must provide evidence of scheduling conflicts
- Both teams must agree to async format
- All times must be in UTC

### Scheduling Process
Unlike regular matches which are scheduled in #scheduling, async matches must be coordinated through Internal Affairs:
- Contact [RaiRei]({{ site.baseurl }}/tournament-info/core-info/staff/#tournament-hosts) through Discord private message
- Provide:
  - Preferred lobby time
  - Evidence of scheduling conflicts
  - Team confirmation of async agreement

{: .note }
After approval, teams will be added to a pick/ban channel where they must:
- Agree on a time to conduct pick/ban process
- Complete pick/ban process by **Friday 23:59 UTC**

---

## Match Process

### Discord Channel Setup
Three private channels will be created:

| Channel | Access | Purpose |
|---------|---------|---------|
| **Pick/Ban Channel** (`async-pickban-team1-team2`) | Both captains + staff | Coordinate and conduct *all* picks/bans |
| **Team 1 Channel** (`async-team1`) | Team 1 + staff | Team 1 lobby coordination |
| **Team 2 Channel** (`async-team2`) | Team 2 + staff | Team 2 lobby coordination |

### Pick/Ban Process Details

{: .important }
The async pick/ban process follows standard match format but requires all picks and bans completed at once. Teams must choose maps *strategically* without knowing match outcomes.

#### Format Structure
- Follows standard match procedure
- All decisions made in one session
- Map requirements by format:
  - **Best of 9**: 4 maps per team + TB (9 total)
  - **Best of 11**: 5 maps per team + TB (11 total)
  - **Best of 13**: 6 maps per team + TB (13 total)
- Tiebreaker automatically added

#### Strategic Considerations
- **Protects**: Prioritize strongest maps early
- **Bans**: Target opponent's comfort maps
- **First Phase**: Focus on opponent's weaknesses
- **Later Picks**: Plan for full match length

#### Process Order
1. Initial roll for order
2. Protect phase completed
3. First ban phase completed
4. First **4 maps** picked (**2** per team)
5. Second ban phase
6. Remaining maps picked until round quota met
7. Tiebreaker added

### Pick/Ban Channel Protocol
- All communication in designated channel
- Use Bathbot's `/roll` command for rolls
- State all decisions clearly
- No external communication
- Staff records all decisions
- **120-second** timer per decision
- Missing timer penalties:
  - First offense: *Warning*
  - Further offenses: Pick to opponent

### Match Procedures

#### First Team's Match
1. **Before Match**
   - **15 minutes** before: Referee pings captain
   - **5 minutes** before: Lobby creation
   - **10-minute** grace period
   - Late = forfeit

2. **During Match**
   - Play *all* maps through TB
   - Follow agreed order
   - Scores kept private
   - One **120-second** timeout available
   - **180-second** break before TB

3. **After Match**
   - Completion recorded
   - Results remain private

#### Second Team's Match
1. **Before Match**
   - Identical procedure
   - Team order remains secret
   - Same grace period

2. **During Match**
   - Follow map order
   - Win condition announcements only
   - No score reveals

3. **After Completion**
   - Results announced to all
   - Posted in #match-results
   - Channels archived

---

## Technical Issues

### Captain Substitution
If captain unavailable:
- *Advance* notice to referee
- Name replacement captain
- Provide osu! username

### No-Shows
- **10-minute** grace period
- Both teams missing = double forfeit
- Opponent receives [bye]({{ site.baseurl }}/tournament-info/additional-info/faq/#glossary)

---

## Fairness Measures

### Match Isolation
{: .warning }
- Teams play independently
- Match timing kept private
- Scores remain secret
- Results announced only after both matches
- No inter-team communication until results posted

### Timeouts
- One **120-second** timeout per team
- Request before timer ends
- **180-second** TB break (no timeouts)

---

## Important Rules

{: .important }
- Regular match rules apply unless specified
- Use designated channels only
- Staff decisions are final
- No score sharing
- Playing order confidential
- Direct questions to staff before match day

For complete format details, see [Tournament Format]({{ site.baseurl }}/tournament-info/tournament-structure/format/)