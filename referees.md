---
layout: page
title: Referees
nav_order: 3
permalink: /referees/
---

# Referee's Handbook

{: .no_toc }

{: .highlight }
This comprehensive guide provides detailed information for tournament referees. Referees are responsible for match coordination, rule enforcement, and ensuring fair play. All tournament matches take place between **Friday 23:59 UTC** and **Monday 23:59 UTC** on their designated weekends.

## Table of Contents
{: .no_toc }

* TOC
{:toc}

---

## 1. Introduction & Overview

### 1.1 Essential Setup

{: .warning }
Before refereeing any matches, you **MUST** download and set up an osu! chat API (such as chatforosu). Complete this setup well in advance of your assigned matches to avoid any last-minute issues. See [Technical Requirements](#64-handling-technical-issues) for more details.

### 1.2 Quick Reference Resources

{: .note }
Bookmark these important resources:

- [Tournament Rules]({{ site.baseurl }}/tournament-info/core-info/rules/)
- [Match Format]({{ site.baseurl }}/tournament-info/match-info/match-format/)
- [Tournament Format]({{ site.baseurl }}/tournament-info/tournament-structure/format/)
- [Staff List]({{ site.baseurl }}/tournament-info/core-info/staff/)
- [FAQ]({{ site.baseurl }}/tournament-info/additional-info/faq/)

### 1.3 Support Resources

#### 1.3.1 Staff Communication Hierarchy

{: .important }
Follow this hierarchy for different situations:

| Issue Type | First Contact | Escalation Path |
|:-----------|:--------------|:----------------|
| **Match Issues** | Referee Coordinator | → Internal Affairs → Tournament Hosts |
| **Technical Problems** | Referee Coordinator | → Technical Staff → Tournament Hosts |
| **Rule Questions** | Referee Coordinator | → Internal Affairs → Tournament Hosts |
| **Player Conduct** | Internal Affairs | → Tournament Hosts |
| **Emergency Issues** | All Staff | Direct to Tournament Hosts |

#### 1.3.2 Getting Help

1. **Referee Coordinator**
   - Contact My Angel Chino for referee-specific issues
   - Keep communication in referee channels
   - Follow the chain of command

2. **Tournament Administration**
   - Contact RaiRei for general tournament issues
   - Contact spon for technical/format questions
   - Use appropriate staff channels

3. **Emergency Protocol**
   {: .warning }
   For urgent match-day issues:
   1. Contact Referee Coordinator (My Angel Chino)
   2. If unavailable, contact Internal Affairs (RaiRei)
   3. For serious issues, contact:
      - [RaiRei](https://osu.ppy.sh/users/24156254)
      - [spon](https://osu.ppy.sh/users/12304513)

#### 1.3.3 Contact Procedures

1. **Standard Issues**
   ```
   □ Contact appropriate first level
   □ Provide complete information
   □ Wait for response
   □ Document communication
   ```

2. **Urgent Issues**
   ```
   □ Use @Referee in #general
   □ Tag specific staff if needed
   □ Provide brief situation
   □ Follow up with details
   ```

3. **Emergency Protocol**
   ```
   □ Contact RaiRei/spon directly
   □ Brief, clear explanation
   □ Include match link
   □ Note time sensitivity
   ```

---

## 2. Pre-Match Preparation

### 2.1 Referee Sheet Guide

{: .important }
The referee sheet is your primary tool for managing matches. **Well before your scheduled match** (at least 24 hours), familiarize yourself with the components shown in the diagram below and review all match rules and procedures:

![Referee Sheet Overview](/assets/images/ref-sheet-overview.png)

#### 2.1.1 Required Software
1. **osu! Chat Client**
   - Download and set up a chat client (e.g., chatforosu)
   - Test functionality well in advance
   - Ensure Bancho connectivity

#### 2.1.2 Command Reference

```
!mp make MAP Tournament: (Team 1) vs (Team 2)    // Create lobby 
!mp set 0 2                                      // Set team mode
!mp size 8                                       // Set lobby size
!mp invite [username]                            // Invite player
!mp map [mapID]                                  // Set map
!mp mods [modcombination]                        // Set mods
!mp start [timer]                                // Start match
!mp abort                                        // Abort match
!mp team [username] [color]                      // Set team color
```

### 2.2 Match Preparation Timeline

| Time Before Match | Action |
|:-----------------|:--------|
| **24 hours** | Review match details and format |
| **1 hour** | Check software functionality |
| **30 minutes** | Review team information |
| **15 minutes** | Send match notification |
| **5 minutes** | Create lobby and invite captains |

#### 2.2.1 Time Management
{: .note }
Monitor your match timing carefully using the countdown timer (1). For complete timing requirements, see [Match Schedule]({{ site.baseurl }}/tournament-info/match-info/match-format/#match-schedule).

When the timer reaches **15 minutes**:
1. Copy the match ping (2)
2. Post in Discord #general chat
3. Paste create lobby command (2) through your chat API

![Lobby Creation Process](/assets/images/lobby-creation.png)

Before proceeding, review:
- Complete [match rules]({{ site.baseurl }}/tournament-info/core-info/rules/)
- Match ERM (component 3) for:
  - Number of bans
  - Round format
  - Special requirements

### 2.3 Sheet Setup & Usage

#### 2.3.1 Before Match Start
1. **Time Management**
   - Check time until countdown (shown in referee sheet)
   - At 15 minutes before: Post match ping in General chat
   - Copy create lobby command from sheet

2. **Sheet Preparation**
   - Insert mp link into designated field
   - Review match ERM (shows bans and rounds)
   - Check for warmup gimmick eligibility

3. **Command Access**
   - Settings commands available in sheet
   - Player invite commands listed
   - Roll and pick/ban rules provided

#### 2.3.2 During Match
1. **Score Tracking**
   - Input ban order
   - Enter map selections
   - Record winning team for each map

2. **Result Reporting**
   - Click "post results" after match completion
   - Verify results appear in #match-results
   - Update all required fields

### 2.4 Match Settings Review

{: .important }
Verify the following settings based on match stage and format:

#### 2.4.1 Stage-Specific Requirements

| Stage | Protects | Bans | Best of | Async Available |
|:------|:---------|:-----|:--------|:----------------|
| Round of 32 | 1 | 2 | 9 | Yes |
| Round of 16 | 1 | 2 | 9 | Yes |
| Quarterfinals | 1 | 2 | 11 | LB Only |
| Semifinals | 1 | 2 | 11 | No |
| Finals | 1 | 3 | 13 | No |
| Grand Finals | 1 | 3 | 13 | No |

For complete format details, see [Tournament Format]({{ site.baseurl }}/tournament-info/tournament-structure/format/).

#### 2.4.2 Team Information Verification
- Verify captain usernames
- Check for any substitute captain notifications
- Review team rosters
- Verify eligibility if needed

---

## 3. Match Initiation

### 3.1 Lobby Creation

{: .important }
After creating the lobby:

1. **Documentation**
   - Save mp link
   - Insert into sheet (5)
   - Record in match notes

2. **Configuration**
   - Copy settings command (2)
   - Apply tournament settings:
     ```
     !mp set 0 2
     !mp size 8
     ```
   - Verify configuration

3. **Match Settings**
   - Team VS mode
   - ScoreV2
   - Head-to-head scoring
   - 8-player size limit

![Settings Command Copy](/assets/images/settings-command.png)

### 3.2 Captain Management

{: .important }
5 minutes before scheduled start:

1. **Inviting Captains**
   - Send invites using commands (2)
   - For absent captains:
     - Use alternate commands (4)
     - See [Captain Substitution]({{ site.baseurl }}/tournament-info/match-info/match-format/#captain-substitution)

2. **Team Assembly**
   - Captains invite their teams
   - Verify 4 players minimum per team
   - Check player eligibility

### 3.3 Late Penalties

{: .warning }
Enforce these penalties consistently:

| Time Late | Penalty |
|-----------|---------|
| **2 minutes** | Forfeit warmup |
| **5 minutes** | Forfeit protect/bans |
| **10 minutes** | Match forfeit |

For more details, see [Match Format]({{ site.baseurl }}/tournament-info/match-info/match-format/#late-penalties).

### 3.4 Warmup Phase

#### 3.4.1 Standard Warmup
1. **Time Limit**: 4 minutes drain time maximum
2. **No mod restrictions**
3. **Both teams get one warmup**

#### 3.4.2 Warmup Gimmick

{: .important }
If teams are participating in warmup gimmick:

1. **Pre-Match Verification**
   - Search match ID in #warmup-gimmick-results
   - Have both warmup maps prepared and verified
   - Confirm mapper availability for evaluation
   - Follow [Gimmick Guidelines]({{ site.baseurl }}/tournament-info/tournament-structure/gimmicks/)

2. **Gimmick Rules**
   - Winners automatically receive unfavorable rolls
   - Winners lose potential last pick
   - Ensures tiebreaker possibility remains
   - Must be arranged during scheduling

3. **Execution Process**
   - Follow standard warmup procedure
   - Wait for mapper evaluation
   - Document mapper's decision
   - Announce results after warmups

4. **Point Award Impact**
   - If point awarded:
     - Record in mainsheet (7)
     - Skip rolling phase
     - Update score tracking 
     - Document in match results
     - Post in #warmup-winners
   - If roll needed:
     - Post rules (6)
     - Follow roll procedure

![Roll Rules Copy](/assets/images/roll-rules.png)

---

## 4. Pick/Ban Phase

### 4.1 Roll Process

{: .important }
After rolls complete:

1. **Documentation**
   - Record ban order (8)
   - Note roll scores
   - See [Pick/Ban Process]({{ site.baseurl }}/tournament-info/tournament-structure/format/#pickban-process)

2. **Communication**
   - Copy score command (5)
   - Post in lobby
   - Start 120-second timer

![Roll Results Example](/assets/images/roll-results.png)
![Score Command Copy](/assets/images/score-command.png)

### 4.2 Timer Management

#### 4.2.1 Standard Timers
- Pick/Ban decisions: 90 seconds
- Map preparation: 90 seconds
- Team timeout: 120 seconds (one per team)
- Tiebreaker break: 180 seconds

#### 4.2.2 Timer Enforcement
1. Start timer when announcing pick/ban phase
2. Post warning at 30 seconds remaining
3. Enforce penalties for missed timers:
   - First offense: Warning
   - Further offenses: Pick given to opponent
4. Document all timeout usage
5. **Referee Discretion**: You may use reasonable judgment for:
   - Clear timer abuse
   - Excessive stalling/dragging
   - Technical issues beyond player control

### 4.3 Pick/Ban Order Examples

{: .important }
Understand how pick order works in different scenarios:

#### 4.3.1 Regular Match Format
Roll winner protects second, bans second, picks first.

**Best of 9 Example** (First to 5):
1. Roll loser protects
2. Roll winner protects
3. Roll loser bans
4. Roll winner bans
5. Pick order: `Winner → Loser → Winner → Loser`
6. Second ban phase (Leading team bans first)
7. Continue alternating picks
8. TB if needed

**Best of 11 Example** (First to 6):
1. Roll loser protects
2. Roll winner protects
3. Roll loser bans
4. Roll winner bans
5. Pick order: `Winner → Loser → Winner → Loser`
6. Second ban phase (Leading team bans first)
7. Continue alternating picks
8. TB if needed

**Best of 13 Example** (First to 7):
1. Roll loser protects
2. Roll winner protects
3. Roll loser bans
4. Roll winner bans
5. Pick order: `Winner → Loser → Winner → Loser`
6. Second ban phase (Leading team bans first)
7. Continue alternating picks
8. Third ban phase after next 4 maps
9. Final picks
10. TB if needed

#### 4.3.2 Warmup Gimmick Impact

{: .warning }
When a team wins a warmup gimmick point:
- They **lose their favorable pick position**
- **Pick order is reversed** from what rolls would normally determine
- This ensures the warmup **loser** gets the more favorable picking position (the position that would belong to the roll winner)

**Examples with Team A winning warmup point:**

Best of 9:
```
Normal (Team A wins roll):
1. Team B protects
2. Team A protects
3. Team B bans
4. Team A bans
5. Pick order: A → B → A → B
(Second ban phase)
6. Continue: A → B → A → B → TB

With Warmup Point to Team A:
1. Team B protects
2. Team A protects
3. Team B bans
4. Team A bans
5. Pick order: B → A → B → A
(Second ban phase)
6. Continue: B → A → B → A → TB
```

Best of 11:
```
Normal (Team A wins roll):
1. Team B protects
2. Team A protects
3. Team B bans
4. Team A bans
5. Pick order: A → B → A → B
(Second ban phase)
6. Continue: A → B → A → B → A → B → TB

With Warmup Point to Team A:
1. Team B protects
2. Team A protects
3. Team B bans
4. Team A bans
5. Pick order: B → A → B → A
(Second ban phase)
6. Continue: B → A → B → A → B → A → TB
```

Best of 13:
```
Normal (Team A wins roll):
1. Team B protects
2. Team A protects
3. Team B bans
4. Team A bans
5. Pick order: A → B → A → B
(Second ban phase)
6. Continue: A → B → A → B
(Third ban phase)
7. Final: A → B → A → B → TB

With Warmup Point to Team A:
1. Team B protects
2. Team A protects
3. Team B bans
4. Team A bans
5. Pick order: B → A → B → A
(Second ban phase)
6. Continue: B → A → B → A
(Third ban phase)
7. Final: B → A → B → A → TB
```

{: .note }
> Remember:
> - Second ban phase occurs after first 4 maps
> - Leading team bans first in second phase
> - If tied (2-2), winner of 4th map bans first
> - Third ban phase (Finals/Grand Finals) after next 4 maps
> - TB only played if both teams one point from winning

### 4.4 Pick Rules & Limitations

{: .warning }
Enforce these rules consistently:

- **Double picks** (selecting two maps from same mod pool consecutively) are **allowed**
- **Double bans** (banning two maps from same mod pool) are **allowed**
- **Triple picks** (selecting three maps from same mod pool consecutively) are **NOT allowed**
- **Triple bans** (banning three maps from same mod pool) are **NOT allowed**

For more details, see [Format Rules]({{ site.baseurl }}/tournament-info/tournament-structure/format/#pick-limitations).

### 4.5 Ban Recording

{: .warning }
Follow these steps for each ban:

1. **Map Selection**
   - Record in sheet (9)
   - Check [Ban Rules]({{ site.baseurl }}/tournament-info/tournament-structure/format/#ban-phase)

2. **Process Continuation**
   - Update score command
   - Maintain 90-second timer enforcement
   - Document decisions as needed

![Ban Recording](/assets/images/ban-recording.png)
![Updated Score Command](/assets/images/updated-score.png)
![Ban Recording Update](/assets/images/ban-recording-update.png)
![Final Ban Recording](/assets/images/final-ban-recording.png)

---

## 5. Map Phase Management

### 5.1 Map Selection Processing

1. **Map Commands**
   ```
   !mp map [mapID]
   !mp mods [modcombination]
   ```

2. **Pre-Map Verification**
   - Check mod combinations if a freemod map (details in [5.3](#53-freemod-management--verification))
   - Verify player readiness
   - Start preparation timer

### 5.2 Map Readiness Procedure

1. **Before Starting Map**
   - Check player readiness by using `!mp settings`
   - Verify correct mod combinations
   - Ensure all players are present (4 per team)

2. **Starting the Map**
   - Use command `!mp start 10` when all ready
   - Monitor for immediate issues
   - Be prepared for abort requests

### 5.3 FreeMod Management & Verification

{: .important }
Verify these specific player requirements:

| Position | Requirement | Overmodding Rules |
|----------|-------------|-------------------|
| **Player 1** | Any mod combination | Any combination allowed |
| **Player 2** | Hidden mod required | **NO overmodding** (HD only, no HDHR) |
| **Player 3** | HardRock mod required | Overmodding allowed (HR or HDHR) |
| **Player 4** | Must use either:<br>• Difficulty-increasing mod<br>• EZ mod (1.8x multiplier) | Any valid combination |

#### 5.3.1 Pre-Map Verification

1. **Player Position Requirements**
   ```
   Player 1 (Any Mods):
   □ Verify valid mod combination

   Player 2 (Hidden):
   □ Verify HD active
   □ Ensure NO other mods (no HDHR)
   □ Confirm player position

   Player 3 (HardRock):
   □ Verify HR active
   □ HDHR is allowed
   □ Confirm player position

   Player 4 (Forced Mod):
   □ Verify either:
     - Difficulty increasing mod
     - EZ mod (1.8x multiplier)
   ```

2. **Mod Verification Commands**
   ```
   !mp settings (Check current mods)
   !mp mods Freemod (Enable freemod)
   !mp mods None (Reset mods)
   ```

#### 5.3.2 Handling Mod Violations

{: .important }
Referees are responsible for ensuring correct mod combinations before the map starts:

1. **Pre-Map Start**
   ```
   Issue Detected:
   □ Announce incorrect mods
   □ Pause timer if needed
   □ Allow immediate fix
   □ Document warning
   ```

2. **During Map**
   ```
   If incorrect mods detected:
   □ Abort map immediately
   □ Require correct mod setup
   □ Restart with proper mods
   □ No warnings required - mods must be correct
   ```

#### 5.3.3 EZ Mod Rules

1. **Score Multiplier**
   - When a player uses EZ mod, a 1.8x score multiplier applies
   - This is a tournament rule, not something referees need to calculate

2. **Verification**
   - Be aware of the EZ multiplier rule
   - EZ mod is valid for Player 4 in FreeMod

### 5.4 Between Maps

#### 5.4.1 Timer Management
1. 120-second preparation time
2. Verify player readiness
3. Start map when all ready

#### 5.4.2 Timeout Rules
- One 120-second timeout per team
- Must request before 90 seconds of pick timer ends
- No timeouts in tiebreaker
- Document usage in notes

### 5.5 Second Ban Phase

{: .important }
After 4 maps are played:

1. **Determine Order**
   - Leading team bans first
   - If tied (2-2), winner of 4th map bans first

2. **Process**
   - Start 120-second timer
   - Record bans in sheet
   - Announce remaining maps
   - Continue with regular pick process

### 5.6 Third Ban Phase (Finals/Grand Finals)

{: .note }
After next 4 maps in Finals/Grand Finals:

1. **Same Ban Order Rules**
   - Leading team bans first
   - If tied, winner of most recent map bans first

2. **Process**
   - Start 120-second timer
   - Each team bans 1 additional map
   - Document in sheet
   - Continue with final picks

---

## 6. Technical Issues Management

### 6.1 Score Verification Process

{: .warning }
Score verification is critical for tournament integrity. Follow these procedures exactly.

#### 6.1.1 Types of Proof & Requirements

| Proof Type | Required Elements | Time Limit | Verification Steps |
|:-----------|:-----------------|:-----------|:-------------------|
| **Stream Footage** | - Clear score display<br>- Unedited VOD<br>- Visible match details | 5 minutes | 1. Check stream URL<br>2. Locate timestamp<br>3. Verify map/match details<br>4. Record final score shown |
| **Player Recording** | - Full gameplay recording<br>- Results screen<br>- No editing/cuts<br>- Date/time visible | 5 minutes | 1. Watch entire recording<br>2. Verify no cuts/edits<br>3. Check results screen<br>4. Document score and mods |
| **Screenshots** | - Shift+F12 only<br>- osu.ppy.sh hosting<br>- Complete score visible<br>- Match details shown | 2 minutes | 1. Verify screenshot source<br>2. Check upload timestamp<br>3. Compare match details<br>4. Record shown score |
| **Phone Recording** | - Full score visible<br>- Windows+D/Alt+Tab for time<br>- Stable recording<br>- Clear view | 5 minutes | 1. Check recording clarity<br>2. Verify timestamp<br>3. Validate score display<br>4. Document shown score |

{: .important }
All proof must be submitted as issues arise, not after the match concludes. Time limits apply from the moment the issue occurs.

#### 6.1.2 Verification Timeline

1. **During Map Issues**
   - First 30 seconds:
     ```
     □ Team requests abort
     □ Document issue type
     □ Verify eligibility
     □ Allow replay if valid
     ```
   - After 30 seconds:
     ```
     □ Set score to 0
     □ Start proof timer
     □ Review submitted proof
     □ Make final decision
     ```

2. **Proof Submission Windows**
   ```
   Immediate Issues: 5 minutes from occurrence
   Between Maps: 2 minutes from end of map
   Technical Issues: 10 minutes from occurrence
   ```

3. **Verification Checklist**
   ```
   □ Correct match/map details
   □ Clear score visibility
   □ Proper proof format
   □ Timely submission
   □ No signs of editing
   □ Team confirmation
   ```

### 6.2 Network Issues

{: .important }
Follow these procedures for connection-related problems:

#### 6.2.1 Lobby Connection Issues

1. **Initial Response**
   ```
   □ Verify which players affected
   □ Check if issue is lobby-wide
   □ Document start of problems
   □ Note any patterns
   ```

2. **Troubleshooting Steps**
   ```
   If single player:
   □ Player restarts client
   □ Verify stable connection
   □ Consider substitution
   □ Use discretion for minor issues

   If multiple players:
   □ Save old mp link with /save
   □ Create new lobby
   □ Transfer settings
   □ Re-invite players
   □ Monitor stability
   ```

3. **Persistent Problems**
   ```
   □ Contact Referee Coordinator
   □ Consider rescheduling
   □ Document all attempts
   □ Note timing of issues
   ```

#### 6.2.2 Bancho Issues

1. **Verification**
   ```
   □ Check osu! server status
   □ Verify if widespread
   □ Monitor official channels
   □ Document outage timing
   ```

2. **Response Protocol**
   ```
   Minor Issues:
   □ Wait up to 5 minutes
   □ Monitor improvement
   □ Update both teams
   □ Document delays

   Major Issues:
   □ Contact staff immediately
   □ Consider rescheduling
   □ Document thoroughly
   □ Keep teams informed
   ```

### 6.3 Score Dispute Management

{: .warning }
Handle score disputes carefully and systematically:

#### 6.3.1 Initial Dispute Response

1. **Documentation Requirements**
   ```
   □ Screenshot of disputed score
   □ Team statements
   □ Referee observations
   □ Timeline of events
   ```

2. **Immediate Actions**
   ```
   □ Pause match progress
   □ Collect all evidence
   □ Note exact circumstances
   □ Contact staff if needed
   ```

#### 6.3.2 Verification Process

1. **Score Proof Review**
   ```
   □ Check official match history
   □ Review any available streams
   □ Verify screenshots
   □ Compare client scores
   ```

2. **Resolution Steps**
   ```
   Clear Evidence:
   □ Apply correct score
   □ Document resolution
   □ Inform both teams
   □ Continue match

   Unclear Situation:
   □ Escalate to Referee Coordinator
   □ Await staff decision
   □ Document outcome
   □ Update teams
   ```

### 6.4 Handling Technical Issues

#### 6.4.1 Disconnections Within 30 Seconds
1. Team may request referee to abort
2. Same players must replay the map
3. Allow substitution only if player cannot reconnect to osu!
4. Use `!mp abort` command
5. Document incident in match notes

#### 6.4.2 Issues After 30 Seconds
1. Player receives 0 score by default
2. Accept proof if provided (see [proof guidelines](#611-types-of-proof--requirements))
3. Verify proof authenticity
4. Document resolution in match notes

#### 6.4.3 Abort Limits
- Each team allowed ONE abort per match
- Referee may use reasonable discretion for additional aborts in exceptional circumstances
- Note abort usage for post-match logging
- No need to track in referee sheet

#### 6.4.4 Connection Issues
- Monitor for persistent connection problems
- Consider rescheduling if issues affect multiple players
- Document all connection-related incidents
- Contact staff if issues persist

---

## 7. Tiebreaker Management

### 7.1 Tiebreaker Protocol

{: .important }
When match reaches Tiebreaker (TB):

1. **Preparation**
   - Post TB rules
   - Start 180-second timer
   - No timeouts allowed

2. **Tiebreaker Requirements**
   - All players must use **NoFail** mod
   - Players can use any other mod combination they wish (FreeMod)
   - Highest scoring team wins (same as other maps)

![Tiebreaker Process](/assets/images/tiebreaker-process.png)

### 7.2 Tiebreaker Requirements

1. **Mod Requirements**
   - All players must use **NoFail** mod
   - FreeMod rules apply but mod usage is optional

2. **Break Timing**
   - 180-second break before tiebreaker begins
   - No additional timeouts permitted

3. **Score Ties**
   - If teams achieve the same score:
     - Map is replayed
     - Teams must use the *same roster* for replay

---

## 8. Match Conclusion

### 8.1 Results Reporting

1. **In-Game**
   - Announce final score
   - Thank teams for playing
   - Close lobby after confirmation
   - Use `/save` to save match chat log

2. **Discord**
   - **FIRST** verify all data and fields are correct
   - Click "post results" button in referee sheet
   - Post chat log in ref matchlog channel
   - Note any important events:
     - Captain substitutions
     - Match issues
     - Bounty score achievements

3. **Documentation**
   - Sheet is automatically marked complete
   - Add any additional notes to matchlog channel
   - No need to include scoreline (automatic)
   - Include screenshots of any incidents

### 8.2 Documentation Requirements

1. **Match Logs**
   - Save chat logs with `/save`
   - Post in appropriate bracket match log channel
   - Include incident details
   - Note player conduct issues
   - Document any unusual events

2. **Lobby Link**
   - Save mp link
   - Include in match log

3. **Incident Documentation**
   - Screenshot incidents during match
   - Post screenshots in match log channel
   - Include brief description
   - Tag appropriate staff if needed

### 8.3 Post-Match Actions

1. **Player Conduct Review**
   - Note any concerning behavior
   - Document in match report
   - Escalate if necessary

---

## 9. Special Match Types

### 9.1 Qualifier Match Management

{: .important }
Qualifiers require specific procedures:

#### 9.1.1 Pre-Match Setup
- Verify team's assigned qualifier slot
- Create appropriate lobby
- Ensure all maps are downloaded

#### 9.1.2 Player Management
- Minimum 4 players required per map
- Teams may rotate players between maps
- Track player participation
- Verify player eligibility

#### 9.1.3 Map Order
- Must follow exact sequence:
  1. NoMod (NM1, NM2, NM3, NM4)
  2. Hidden (HD1, HD2)
  3. HardRock (HR1, HR2)
  4. DoubleTime (DT1, DT2)

#### 9.1.4 Between Maps
- 120 seconds preparation time
- Start within 10 seconds after prep
- Verify 4 players ready
- Check mod requirements

#### 9.1.5 Second Playthrough
- Teams may request after completing all maps
- 5-minute break allowed
- Teams select maps to improve
- Different players allowed
- Must follow original map order
- Captain must declare replay maps before starting

#### 9.1.6 Late Penalties
- Shared Lobbies:
  - Can join if 4th player arrives before NoMod ends
  - Complete missed maps after regular lobby
  - Must reschedule if too late
- Solo Team Lobbies:
  - 15 minutes late = lobby cancelled
  - Must attempt reschedule

### 9.2 Async Match Procedures

{: .warning }
Async matches are a **LAST RESORT** option. As a referee, you'll only be involved in running the actual matches, not the approval or scheduling process.

#### 9.2.1 Your Role in Async Matches

As a referee for async matches, your responsibilities are:
1. Running the assigned team's match lobby
2. Following the pre-determined map order
3. Maintaining strict privacy
4. Documenting results for staff

You will **not** need to:
- Verify eligibility (RaiRei handles this)
- Create Discord channels (already set up)
- Conduct pick/ban (already completed)
- Publish final results (handled by RaiRei/Chino)

#### 9.2.2 Channel Setup

{: .important }
Three private Discord channels will already be created by staff:

| Channel | Name Format | Access |
|:--------|:------------|:--------|
| Pick/Ban Channel | `async-pickban-team1-team2` | Both captains + staff |
| Team 1 Channel | `async-team1` | Team 1 + staff |
| Team 2 Channel | `async-team2` | Team 2 + staff |

#### 9.2.3 Pick/Ban Information

The pick/ban process will already be completed by RaiRei before your involvement. You'll receive:
1. Complete map list in exact play order
2. All necessary match information
3. Specific privacy instructions

#### 9.2.4 Privacy Requirements

{: .warning }
Maintain absolute confidentiality:

1. **Match Information**
   ```
   □ Never share match times
   □ Keep all scores private
   □ Do not hint about results
   □ No streaming allowed
   □ No spectators permitted
   ```

2. **Communication Rules**
   ```
   □ Only communicate in team's channel
   □ Never mention other team's progress
   □ Maintain complete separation
   □ Report privacy concerns immediately
   ```

#### 9.2.5 Match Execution

1. **Your Team's Match**
   - Regular 15-minute notification in team channel
   - Standard lobby setup
   - Follow provided map order exactly
   - Keep running score comparison to determine match progress
   - Maintain complete privacy

2. **After Match Completion**
   - Save match chat log with `/save`
   - Record all map scores and lobby link
   - Provide all documentation to RaiRei/Chino
   - Do not announce any results
   - Lock channel if instructed to do so

#### 9.2.6 Result Handling

Results compilation and announcement will be handled by RaiRei, Chino, or their designee. Your role is limited to:
1. Providing accurate match documentation
2. Maintaining complete privacy
3. Following staff instructions

#### 9.2.7 Special Considerations

1. **Technical Issues**
   - Handle per standard procedures
   - Use reasonable discretion
   - Document thoroughly
   - Report to RaiRei/Chino

2. **Privacy Breaches**
   - Report immediately
   - Document exact circumstances
   - Do not attempt to correct/address
   - Wait for staff instructions

{: .note }
For detailed async procedures, see [Async Matches]({{ site.baseurl }}/tournament-info/match-info/async-matches/).

---

## 10. Conflict Resolution

### 10.1 Toxic Behavior

1. **Initial Response**
   - Issue warning
   - Screenshot incident
   - Use reasonable discretion for minor issues
   - Contact admin if severe

2. **During Match**
   - Note in match log
   - Continue match if possible
   - Document all interactions
   - Screenshot any further incidents

3. **Post-Match**
   - Submit incident screenshots
   - Include chat logs from `/save`
   - Recommend actions if appropriate

### 10.2 Disciplinary Procedures

{: .warning }
For serious violations, follow these steps:

1. **Documentation**
   - Record exact statements/actions
   - Note timestamps
   - Collect evidence (screenshots)
   - Document witness accounts

2. **Escalation**
   - Report to Referee Coordinator
   - Forward to Internal Affairs
   - Include all documentation
   - Maintain confidentiality

3. **Follow-up**
   - Document staff response
   - Track resolution
   - Note any penalties applied
   - Update records accordingly

For complete guidelines, see [Tournament Rules]({{ site.baseurl }}/tournament-info/core-info/rules/#toxicity).

---

## 11. Documentation Templates

### 11.1 Incident Report Format

```
Match ID: [ID]
Date/Time: [UTC]
Teams: [Team A] vs [Team B]
Referee: [Username]

Incident Type: [Technical/Behavioral/Rule Violation]
Time of Incident: [timestamp]
Map/Phase: [map name or pick/ban phase]

Description:
[Detailed account of what happened]

Players Involved:
[List of relevant players]

Evidence:
[Screenshots/recordings/logs]

Resolution:
[Actions taken, decisions made]

Follow-up Required: [Yes/No]
Staff Contacted: [Names]
```

### 11.2 Match Summary Template

```
Match ID: [ID]
Teams: [Team A] vs [Team B]
Date: [Date in UTC]
Format: [Best of X]
Result: [Team] won [X-Y]

Bans:
- Team A: [maps]
- Team B: [maps]

Protects:
- Team A: [map]
- Team B: [map]

Map Results:
1. [Map] - Winner: [Team] - Score: [X-Y]
2. [Map] - Winner: [Team] - Score: [X-Y]
...

Notable Events:
[Any significant incidents, timeouts, etc.]

Proof Submissions:
[Any score proof submitted, with results]

Referee Notes:
[Additional observations]
```

### 11.3 Technical Issue Documentation

```
Issue Type: [Connection/Client/Server]
Affected Players: [Usernames]
Time Observed: [UTC timestamp]
Duration: [length of disruption]

Symptoms:
[Description of issue]

Troubleshooting Steps:
1. [Action taken]
2. [Action taken]
...

Resolution:
[Final outcome]

Impact on Match:
[How the issue affected gameplay/results]

Prevention Recommendations:
[Steps to prevent recurrence]
```

---

## 12. Reference Information

### 12.1 Common Issues & Resolutions

For detailed troubleshooting, please refer to the [FAQ]({{ site.baseurl }}/tournament-info/additional-info/faq/).

#### Map Loading or Game Freezing Issues

**When does this happen?**
- When trying to play a map and the game freezes
- When the referee uses `!mp start` but your game doesn't respond
- When you can't join or spectate a multiplayer match

{: .warning }
**How to Fix:**

1. **Exit Game Area**
   ```
   If you're in a multiplayer lobby, leave it first!
   ```

2. **Delete the Map**
   - In osu!, navigate to Play → Solo
   - Locate the problematic mapset
   - Right-click → Delete
   - Select "Yes, delete all difficulties!"

3. **Close osu!**
   - Exit osu! completely

4. **Download Clean Version**
   ```
   IMPORTANT: Click "Download without video" specifically
   ```
   - Go to the map's page on the osu! website
   - Click "Download without video"

5. **Open osu!**
   - Start the game

See [Troubleshooting]({{ site.baseurl }}/tournament-info/additional-info/faq/#troubleshooting) in the FAQ for more solutions.

### 12.2 Quick Command Reference

```
// Lobby Creation
!mp make MAP Tournament: (Team 1) vs (Team 2)

// Settings Configuration
!mp set 0 2        // Team vs mode
!mp size 8         // Lobby size
!mp mods freemod   // Enable freemod

// Player Management
!mp invite [username]
!mp team [username] [color]
!mp kick [username]

// Map Control
!mp map [mapID]
!mp mods [modcombination]
!mp start [timer]
!mp abort

// Information Commands
!mp settings
!mp teams
!mp listrefs
```

### 12.3 Staff Contact List

| Role | Staff Member | Contact Method |
|:-----|:-------------|:---------------|
| **Referee Coordinator** | My Angel Chino | Discord DM |
| **Internal Affairs** | RaiRei | Discord DM |
| **Tournament Host** | spon | Discord DM |
| **Technical Support** | spon | Discord DM |
| **Main Sheet Manager** | pericrayola | Discord DM |

For the complete staff list, see [Staff]({{ site.baseurl }}/tournament-info/core-info/staff/).

---

{: .warning }
Remember: Referees are the primary enforcers of tournament rules. Maintain professionalism and friendliness - we want engaging and fair matches, not overly sterile environments. Use reasonable discretion for minor issues while strictly enforcing important rules.