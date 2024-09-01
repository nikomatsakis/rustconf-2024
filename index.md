class: center
name: title
count: false

# Rust Project Goals

.p60[![Ferris](./images/ferris.svg)]

.me[.grey[*by* **Nicholas Matsakis**]]
.left[.citation[View slides at `https://nikomatsakis.github.io/rustconf-2024/`]]

---

# Who is this guy?

???

Hi, I'm Niko!

---

# Rust Project Goals

.p100[![Project Goals RFC header](./images/project-goals-rfc.png)]

---

# What are Project Goals?

---

# What are Project Goals?

.p100[![Project Goals RFC header](./images/submission-period.png)]

???

Begin with a 

---

# Project goal outline

* Motivation:
    * *The status quo*
    * *The next 6 months*
    * *The "shiny future" we are working towards*
--
* Design axioms

--
* Ownership and team asks

---

# Goal owner

Who opens a goal?

* Maintainers
* Individuals
* Organizations

---

# Goals chosen

* 26 total goals
* 3 of which are **flagship goals**
    * Prepare for Rust 2024 Edition
    * Bring Async Rust and Sync Rust closer to parity
    * Bring Linux Kernel closer to building on stable Rust

---

# Rust 2024 Edition

"Stability without stagnation"

---

# What is an edition?

---

# One way: Rust "2.0"

.abspos.left125.top125[ <u>Rust 1.x </u> ]

.abspos.left100.top175.width150px[![Cargo](./images/cargo.png)]
.abspos.left145.top350[<code>serde</code>]
.abspos.left150.top400.width50px.rotate270[![Arrow](./images/Arrow.png)]
.abspos.left100.top450.width150px[![Cargo](./images/cargo.png)]
.abspos.left120.top625[<code>your-crate</code>]

---

# One way: Rust "2.0"

.abspos.left125.top125[ <u>Rust 1.x </u> ]
.abspos.left525.top125[ <u>Rust 2.x </u> ]

.abspos.left100.top175.width150px[![Cargo](./images/cargo.png)]
.abspos.left145.top350[<code>serde</code>]

.abspos.left350.top400.width100px.rotate200[![Arrow](./images/Arrow.png)]
.abspos.left500.top450.width150px[![Cargo](./images/cargo.png)]
.abspos.left520.top625[<code>your-crate</code>]

--

.abspos.left700.top500.fontSize50pt[❌]

---

# Rust way: Editions

.abspos.left125.top125[ <u>Rust 2021</u> ]

.abspos.left100.top175.width150px[![Cargo](./images/cargo.png)]
.abspos.left145.top350[<code>serde</code>]
.abspos.left150.top400.width50px.rotate270[![Arrow](./images/Arrow.png)]
.abspos.left100.top450.width150px[![Cargo](./images/cargo.png)]
.abspos.left120.top625[<code>your-crate</code>]

---

# Rust way: Editions

.abspos.left125.top125[ <u>Rust 2021</u> ]
.abspos.left525.top125[ <u>Rust 2024</u> ]

.abspos.left100.top175.width150px[![Cargo](./images/cargo.png)]
.abspos.left145.top350[<code>serde</code>]

.abspos.left350.top400.width100px.rotate200[![Arrow](./images/Arrow.png)]
.abspos.left500.top450.width150px[![Cargo](./images/cargo.png)]
.abspos.left520.top625[<code>your-crate</code>]

--

.abspos.left700.top500.fontSize50pt[✅]

---

# Rust way: Editions

.abspos.left125.top125[ <u>Rust 2021</u> ]
.abspos.left525.top125[ <u>Rust 2024</u> ]

.abspos.left500.top175.width150px[![Cargo](./images/cargo.png)]
.abspos.left545.top350[<code>serde</code>]

.abspos.left350.top350.width100px.rotate340[![Arrow](./images/Arrow.png)]
.abspos.left100.top450.width150px[![Cargo](./images/cargo.png)]
.abspos.left120.top625[<code>your-crate</code>]

.abspos.left300.top500.fontSize50pt[✅]

---

# What are we actually changing?

```rust
fn process_data(
    datums: &[Datum]
) -> impl Iterator<Item = ProcessedDatum> {
    datums
        .iter()
        .map(|datum| datum.process())
}
```

[Playground.](https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&gist=89418b7fe6748de2c4a335c7d529daa8)

---

# Increasing consistency

In Rust 2021...

```rust
fn process_data(datums: &[Datum]) -> impl Iterator
```

```rust
async fn process_data(input: &Input) -> Result
```

```rust
fn process_data(input: &Input) -> impl Future<Output = Result>
```


```rust
fn process_data(input: &Input) -> impl Future<Output = Result> + '_
```

---

# Increasing consistency
