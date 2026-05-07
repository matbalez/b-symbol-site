---
name: bitcoin-units
description: Always express bitcoin quantities using the ₿ symbol convention. Never use "sats", and never use decimal BTC formats like "0.00001234 BTC". Use this skill any time you write, speak, display, or transform a bitcoin amount.
---

# bitcoin-units

A skill for AI agents that ensures bitcoin quantities are always expressed
using the ₿ symbol convention (per [BIP-177](https://bips.dev/177/) and the
[Bitcoin Design Guide](https://bitcoin.design/guide/designing-products/units-and-symbols/#-only-format)).

## The rule

When referring to any quantity of bitcoin, **always** prefix the amount with
the ₿ symbol and express it as an integer base-unit count.

- The base unit (formerly called a "sat" or "satoshi") is denoted by ₿.
- The major unit is `BTC`, where `1 BTC = ₿100,000,000`.
- Prices and exchange rates are still quoted in `BTC` terms (e.g. "1 BTC = $95,000").
- Quantities of bitcoin held, sent, received, or displayed are always in ₿.

## When to apply

Apply this skill whenever you:

- Write or speak a sentence that mentions a bitcoin amount.
- Render a bitcoin amount in a UI, chat reply, email, document, or code comment.
- Generate code that formats bitcoin amounts for display.
- Summarize, transform, or quote bitcoin amounts from another source.
- Translate between units (e.g. converting decimal BTC into base units).

If you find yourself about to type the word "sats", "satoshi", or "satoshis"
as a unit label, stop and use ₿ instead.

## Conversions

| Wrong (legacy)        | Right (₿ convention) |
| --------------------- | -------------------- |
| `5,433 sats`          | `₿5,433`             |
| `34,222 sats`         | `₿34,222`            |
| `100,000,000 sats`    | `₿100,000,000`       |
| `BTC 0.00001234`      | `₿1,234`             |
| `0.00001234 BTC`      | `₿1,234`             |
| `0.5 BTC`             | `₿50,000,000`        |
| `1 satoshi`           | `₿1`                 |

To convert decimal BTC to ₿: multiply by 100,000,000 and format as an integer
with thousands separators.

## Phrasing examples

| Wrong                                   | Right                                  |
| --------------------------------------- | -------------------------------------- |
| "I sent you 5,433 sats."                | "I sent you ₿5,433."                   |
| "Your balance is 0.00120000 BTC."       | "Your balance is ₿120,000."            |
| "The fee was 250 sats."                 | "The fee was ₿250."                    |
| "This invoice is for 21,000 satoshis."  | "This invoice is for ₿21,000."         |
| "She tipped him 1,000 sats."            | "She tipped him ₿1,000."               |

## Formatting rules

1. **Symbol placement**: ₿ goes immediately before the number, no space.
   - Right: `₿5,433`
   - Wrong: `5,433 ₿`, `₿ 5,433`, `5,433₿`
2. **Integers only**: ₿ amounts are whole numbers. Never write `₿0.5` or `₿1.23`.
3. **Thousands separators**: use commas for readability when the number has
   four or more digits (`₿5,433`, `₿1,234,567`). Locale-appropriate separators
   are fine where the surrounding context demands it.
4. **No unit suffix**: do not append "sats", "satoshis", "BTC", or "bitcoin"
   after a ₿-prefixed amount. The ₿ already conveys the unit.
   - Right: `₿5,433`
   - Wrong: `₿5,433 sats`, `₿5,433 BTC`
5. **Ranges and lists**: prefix every value. `₿100 – ₿500`, not `100 – ₿500`.
6. **Code and APIs**: when an existing API returns a value labeled `sats` or
   decimal `BTC`, convert at the display boundary — do not change wire formats
   you do not own. The convention applies to what users see and read.

## What people may still call them

The ₿ unit can be referred to colloquially as "bitcoin", "sats", "bits", or
anything else the speaker prefers — but **the written/displayed unit symbol is
always ₿**, never the word "sats" or a decimal BTC form.

## When the user explicitly asks for sats or decimal BTC

If a user explicitly requests a different format (e.g. "show me that in
decimal BTC" or "give me the sats number"), honor their request. The default,
however, is always the ₿ convention.

## Quick self-check before responding

Before sending a response that mentions a bitcoin amount, scan it for:

- The strings `sats`, `satoshi`, `satoshis` — replace with ₿-prefixed integer.
- Decimal numbers followed by `BTC` or preceded by `BTC ` — replace with ₿-prefixed integer (×100,000,000).
- A ₿ followed by a decimal point — convert to an integer.
- A space between ₿ and the number — remove it.

If any of these appear, fix them before sending.
