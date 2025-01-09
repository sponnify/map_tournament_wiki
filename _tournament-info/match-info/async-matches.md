---
layout: page
title: Async Matches
parent: Match Information
grand_parent: Tournament Info
nav_order: 3
permalink: /tournament-info/match-info/async-matches/
---

# Asynchronous Matches

An asynchronous (async) match allows two teams to play their tournament match at different times while maintaining competitive fairness. This accommodation helps teams who cannot find a mutually workable time to play together due to timezone differences or scheduling conflicts.

The pick/ban and match format follows the standard tournament structure - please familiarize yourself with the [Tournament Format]({{ site.baseurl }}/tournament-info/tournament-structure/format/) before proceeding.

## Availability

The following rounds allow async matches:
- Round of 32: All matches
- Round of 16: All matches
- Quarter Finals: Losers' Bracket matches only
- Semi Finals and beyond: Not available

## Requesting an Async Match

### Requirements
- Must be requested by Thursday, 23:59 UTC
- Must provide evidence of scheduling conflicts (e.g., screenshots of scheduling discussions)
- Both teams must agree to async format
- Teams must submit preferred lobby times by Friday, 23:59 UTC

### Scheduling Process
Unlike regular matches which are scheduled in #scheduling, async matches must be coordinated through Internal Affairs:
- Contact [RaiRei]({{ site.baseurl }}/tournament-info/core-info/staff/#tournament-hosts) through Discord private message
- Provide the following information:
  - Preferred lobby time
  - Evidence of scheduling conflicts
  - Team confirmation of async agreement
- After approval, teams will be added to a pick/ban channel where they must:
  - Agree on a time to conduct pick/ban process
  - Complete pick/ban process by Friday 23:59 UTC

## Match Process

### Discord Channel Setup
Three private channels will be created in the tournament server:
1. **Pick/Ban Channel**
   - Access: Both team captains and tournament staff
   - Purpose: 
     - Coordinate time for pick/ban process
     - Conduct *all* pick/bans and rolls
   - Channel name: `async-pickban-team1-team2`
2. **Team 1 Channel**
   - Access: Team 1 members and tournament staff
   - Purpose: Team 1 lobby scheduling and coordination
   - Channel name: `async-team1`
3. **Team 2 Channel**
   - Access: Team 2 members and tournament staff
   - Purpose: Team 2 lobby scheduling and coordination
   - Channel name: `async-team2`

### Pick/Ban Process Details

The async pick/ban process follows the same format as standard matches for that round, but with all picks and bans completed at once. Teams must strategically choose their maps knowing they won't immediately know the outcome of each map.

#### Format Structure
- Follows standard match procedure for the current round
- All protects, bans, and picks decided in one session
- Teams must select enough maps for a worst-case scenario:
  - Best of 9: 4 maps per team + tiebreaker (9 total maps)
  - Best of 11: 5 maps per team + tiebreaker (11 total maps)
  - Best of 13: 6 maps per team + tiebreaker (13 total maps)
- Tiebreaker automatically added to end of list

#### Strategic Considerations
- **Protects**: Teams must protect their strongest maps early, as they won't know match progress
- **Bans**: Critical to ban uncomfortable maps before opponent can pick them
- **First Phase Picks**: Important to select opponent's potential weak maps before second ban phase
- **Later Picks**: Must be chosen assuming worst-case scenario where all maps are needed

#### Process Order
1. Initial roll for order
2. Protect phase completed
3. First ban phase completed
4. First 4 maps picked (2 per team)
5. Second ban phase
6. Remaining maps picked until round quota met
7. Tiebreaker added to map list

### Pick/Ban Channel Protocol
The entire pick/ban process takes place in the pick/ban Discord channel:
- All communication must be in this channel
- Rolls performed using Bathbot's `/roll` command in channel
- Protects, bans, and picks must be clearly stated in channel
- No external communication methods permitted
- Staff will record and confirm all decisions in channel
- Both captains must agree on time to complete process (deadline: Friday 23:59 UTC)
- 120-second timer for each protect/ban/pick decision
- Missing timer results in:
  - First offense: Warning
  - Further offenses: Pick goes to opponent

### First Team's Match
1. **Before Match**
   - 15 minutes before: Referee pings team captain
   - 5 minutes before: Referee creates lobby and invites captain
   - Captain invites team members
   - 10-minute grace period for team assembly
   - Teams not ready after grace period forfeit

2. **During Match**
   - Team plays *all* maps through to tiebreaker
   - Maps played in previously agreed order
   - Scores recorded but not revealed
   - One 120-second timeout available during preparation
     - Must request before preparation timer ends
     - No timeouts during tiebreaker (180-second break given instead)

3. **After Match**
   - Match completion recorded by referee
   - Team lobby concluded
   - Results remain private until both matches complete

### Second Team's Match
1. **Before Match**
   - Same pre-match procedure as first team
   - Teams will not know if they are first or second team
   - 15 minutes before: Referee pings captain
   - 5 minutes before: Referee creates lobby
   - Same grace period and forfeit rules apply

2. **During Match**
   - Team plays through maps in order
   - If win condition met on both sides:
     - Referee will end lobby
     - Announce that win condition has been met
     - No indication of which team won

3. **After Both Matches Complete**
   - Results announced in shared pick/ban channel
   - Results posted in #match-results
   - All three async channels archived

## Technical Issues

### Captain Substitution
If a captain cannot attend match or pick/ban chat:
- Notify referee in advance
- Designate a replacement captain
- Provide replacement's osu! username

### No-Shows
- Teams not assembled within 10 minutes of start time forfeit
- If neither team has enough players:
  - Both teams forfeit
  - Next week's opponent receives a [bye]({{ site.baseurl }}/tournament-info/additional-info/faq/#glossary)

## Fairness Measures

### Match Isolation
- Teams play their matches independently
- Teams will not know when other team's match occurs
- All scores and results remain private until both matches complete
- Match results announced only after both teams have played
- No communication between teams regarding match details until results are announced

### Timeouts
- One 120-second timeout during match preparation
- Must request before preparation timer ends
- No timeouts during tiebreaker (180-second break given)

## Important Rules

- All regular match rules apply unless specified
- All communication must occur in designated channels
- Staff decisions regarding async matches are final
- No sharing of scores between matches
- Playing order must remain confidential
- Questions must be directed to staff before match day

For complete format details, see [Tournament Format]({{ site.baseurl }}/tournament-info/tournament-structure/format/).