---
layout: page
title: Format
parent: Tournament Structure
grand_parent: Tournament Info
nav_order: 1
permalink: /tournament-info/tournament-structure/format/
---

# Format

## Basic Information
The MAP Tournament is a 4v4 international tournament using double elimination format. All matches take place between Friday 23:59 UTC and Monday 23:59 UTC on their designated weekends.

## Tournament Structure
### Double Elimination Bracket
- Teams need two losses to be eliminated
- One loss moves a team to the losers' bracket
- Teams in losers' bracket must win to continue
- Grand Finals features winners' bracket champion vs losers' bracket champion

## Match Format

{: .note }
*LB: Losers Bracket only

| Stage | SR | Protects | Bans | Best of | NM | HD | HR | DT | FM | TB | Async? |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Qualifiers | ★5.30 | NA | NA | NA | 4 | 2 | 2 | 2 | 0 | 0 | NA |
| Round of 32 | ★4.90 | 1 | 2 | 9 | 4 | 2 | 2 | 2 | 2 | 1 | Yes |
| Round of 16 | ★5.10 | 1 | 2 | 9 | 5 | 2 | 2 | 2 | 2 | 1 | Yes |
| Quarterfinals | ★5.30 | 1 | 2 | 11 | 5 | 3 | 3 | 3 | 3 | 1 | LB* |
| Semifinals | ★5.50 | 1 | 2 | 11 | 6 | 3 | 3 | 3 | 3 | 1 | No |
| Finals | ★5.70 | 1 | 3 | 13 | 6 | 3 | 3 | 4 | 3 | 1 | No |
| Grand Finals | ★5.90 | 1 | 3 | 13 | 6 | 3 | 3 | 4 | 3 | 1 | No |

## Match Format Overview
The Mapping Appreciation Project employs the "Corsace Open" match format. All matches follow a structured protect, ban, and pick system.

## Protect, Pick, Ban System  

### Match Process
1. **Rolls**
   * At the start of the match, captains of both teams will use the `!roll` command when prompted by the referee.
   * The winner of the roll (highest number) will:
     * Protect second
     * Ban second
     * Pick first
   * In the rare case where both captains roll the same number, captains will roll again until one of them wins

2. **Protections and Picks**
   * After the roll:
     * Loser of the roll protects their first map
     * Winner of the roll protects their map
     * Loser of the roll bans their map
     * Winner of the roll bans their map
     * Teams alternate picks, starting with the team that won the roll. This pattern continues past ban phases and until a winner is determined.

3. **Ban Phases**
   * **Second Ban Phase**
     * Occurs after the first 4 maps are played
     * Ban order determined by current match score:
       * Team currently winning bans first
       * If the score is tied (i.e., 2-2), the winner of the 4th map bans first
     * Each team bans 1 map

4. **Continuing the Match**
   * **Rounds up to Semifinals**
     * Continue picking maps immediately after the second ban phase
     * Continue until a team wins

   * **Finals and Grand Finals**
     * A 3rd ban phase occurs
     * This phase happens after the 4 maps following the second ban phase
     * Same ban rules and order as the second ban phase apply
     * Each team bans 1 map
     * Continue playing maps until a winner is determined

5. **Tiebreaker**
   * If both teams are one point away from winning, the designated Tiebreaker (TB) map will be played

**Reference:** The match process can be fully visualized in the accompanying infographic, which maps out the entire sequence of actions described in this section.

[image]

### Map Rules
* All maps use Team VS, NoFail, and ScoreV2
* Maps must be played with their designated mods:
  * NM (No Mod) pool: No modifications
  * HD (Hidden) pool: Hidden mod
  * HR (Hard Rock) pool: Hard Rock mod
  * FM (Free Mod) pool: See Free Mod Rules section
* Tiebreaker specific rules:
  * Uses FreeMod rules but mod usage is optional
  * All players must use NoFail (NF)

### Scoring
* Winner determined by higher team score after mod multipliers
* In case of tied scores, the map is replayed with the same rosters

## Freemod Rules
All players in a team must meet the following rules when playing freemod maps:

1. **Player 1: True Freemod**
    - Choose any combination of mods or no mods at all (NM, HD, HR, HDHR, etc.).
2. **Player 2: (Hidden)**
    - Must play with the Hidden mod.
3. **Player 3: (Hard Rock)**
    - Must play with the Hardrock mod.
4. **Player 4: Forcemod**
    - Must use one of the following mods: HD, HR, HDHR, EZ (1.8x multiplier), etc.