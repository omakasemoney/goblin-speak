import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useMemo, useState } from "react";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [input, setInput] = useState("");

  const translatedText = useMemo(() => {
    return normalTextToGoblinText(input);
  }, [input]);

  const TITLE = "Goblin Translator";
  const DESCRIPTION =
    "goblintown.wtf inspired translator for hoomans to gooblins";
  const URL = "https://goblin-speak.vercel.app";
  const IMAGE = `${URL}/goblin-9871.png`;

  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>{TITLE}</title>
          <meta
            name="description"
            content="goblintown.wtf inspired translator for hoomans to gooblins"
          />
          <link rel="icon" href="/favicon.ico" />

          <meta name="title" content={TITLE} />
          <meta name="description" content={DESCRIPTION} />

          <meta property="og:type" content="website" />
          <meta property="og:url" content={URL} />
          <meta property="og:title" content={TITLE} />
          <meta property="og:description" content={DESCRIPTION} />
          <meta property="og:image" content={IMAGE} />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content={URL} />
          <meta property="twitter:title" content={TITLE} />
          <meta property="twitter:description" content={DESCRIPTION} />
          <meta property="twitter:image" content={IMAGE}></meta>
        </Head>

        <h1>{normalTextToGoblinText("goblin translator")}</h1>

        <main>
          <div>
            <p>
              {normalTextToGoblinText(
                "ay you a hooman want to speak with us gooblins??"
              )}
            </p>

            <textarea
              style={{
                fontFamily: "'Open Sans', sans-serif",
              }}
              name=""
              id=""
              cols={30}
              rows={5}
              onChange={(e) => {
                setInput(e.target.value);
              }}
            ></textarea>

            <p className={styles.translatedText}>{translatedText}</p>
          </div>
        </main>

        <footer className={styles.footer}>
          <p>
            Built by{" "}
            <a
              href="https://twitter.com/jarrensj"
              target="_blank"
              rel="noreferrer"
            >
              goblin #8723
            </a>{" "}
            and{" "}
            <a
              href="https://twitter.com/johnphamous"
              target="_blank"
              rel="noreferrer"
            >
              goblin #9871
            </a>
          </p>
        </footer>
      </div>
    </>
  );
};

export default Home;

const normalTextToGoblinText = (inputText: string) => {
  const tokens = inputText.split("");

  for (let i = 0; i < tokens.length; i++) {
    const currentCharacter = tokens[i];
    const currentCharacterLowercase = currentCharacter.toLowerCase();
    const mappingExistsForCurrentCharacter = Boolean(
      CHARACTER_MAPPING[currentCharacter]
    );
    const mappingExistsForCurrentCharacterLowercase = Boolean(
      CHARACTER_MAPPING[currentCharacterLowercase]
    );

    if (mappingExistsForCurrentCharacter) {
      tokens[i] = CHARACTER_MAPPING[currentCharacter];
    } else if (mappingExistsForCurrentCharacterLowercase) {
      tokens[i] = CHARACTER_MAPPING[currentCharacterLowercase];
    }
  }
  return (inputText = tokens.join(""));
};

const CHARACTER_MAPPING: Record<string, string> = {
  0: "???",
  1: "???",
  2: "???",
  3: "???",
  4: "???",
  5: "???",
  6: "???",
  7: "???",
  8: "???",
  9: "???",
  a: "???",
  b: "b",
  c: "c",
  d: "d",
  e: "???",
  f: "f",
  g: "g",
  h: "???",
  i: "???",
  j: "???",
  k: "???",
  l: "???",
  m: "???",
  n: "???",
  o: "???",
  p: "???",
  q: "???",
  r: "???",
  s: "???",
  t: "???",
  u: "???",
  v: "???",
  w: "w",
  x: "???",
  y: "y",
  z: "z",
  A: "???",
  B: "B",
  C: "C",
  D: "D",
  E: "???",
  F: "F",
  G: "G",
  H: "???",
  I: "???",
  J: "???",
  K: "???",
  L: "???",
  M: "???",
  N: "???",
  O: "???",
  P: "???",
  Q: "Q",
  R: "???",
  S: "???",
  T: "???",
  U: "???",
  V: "???",
  W: "W",
  X: "???",
  Y: "Y",
  Z: "Z",
  "+": "???",
  "-": "???",
  "=": "???",
  "(": "???",
  ")": "???",
};
