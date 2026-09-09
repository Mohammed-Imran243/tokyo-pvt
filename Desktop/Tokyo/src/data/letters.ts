export interface Letter {
  id: string;
  title: string;
  category: string;
  date: string;
  preview: string;
  content: string;
  isSpecial?: boolean;
}

export const lettersData: Letter[] = [
  {
    id: "letter-1",
    title: "When You're Sad",
    category: "🌧️ Read When You're Sad",
    date: "A quiet day",
    preview: "If you're reading this because today isn't going the way you wanted...",
    content: `Hey Bot uh,

Ella naalum naama nenacha maadhiri pogadhu. Adhukaaga naama stress aaga koodadhu.
Aana nee summa irundhaalum tension aaiduva 😅, so konjam free-ah vidu.

Ellame oru naal-la seri panna mudiyadhu. Konjam time kudu, ellame konjam konjama seri aaidum.

I'm there for you da. When things don't go as planned, run to me...
I'll probably ruin it even more. 😂

You are allowed to be tired.
You are allowed to overthink.
You are allowed to take your time.

Tomorrow can be better.

— Harry`
  },
  {
    id: "letter-2",
    title: "Thank You",
    category: "❤️ Thank You",
    date: "For Everything",
    preview: "Thank you for every random conversation...",
    content: `Thanks for coming into my life.

Na thanks solla aarambicha, sollite irukkalam…
yenna nee enakku avlo panni irukka.

Unakku theriyama nee pandra chinna chinna vishayam kooda enakku avlo azhaga irukkum.
Adhuvum adha enakkaaga nee pannumbodhu, adhu innum azhaga aaidum.

Naan expect ae pannadha oru time-la en life-la vandha,
ippo expiry aagaadha honey 🍯 maadhiri en heart-la stay aayita.

Ni the en first friend,bestie,game partner yellma en life la memories nu onnu iruntha athula ni illama yathuma irukathu you give me so much to sit back and remember ni illama yathuvum aagi irukathu so yellathukuma ennoda thanks da bijju ,

Nee life-la enakku neraya vishayangal puriya vechurukka dude.
Adhukkum romba thanks.

Simple-ah sollanum na…

Maybe naan un life-uhndra book-la
one of your favourite chapters-ah irukkalam.

Aana enakku nee dhaan
whole book.

Andha book-ah naan thirumba ezhudha mudiyadhu…
aana thirumba thirumba padikka mattum mudiyum. ❤️

ஒரு சிறு பக்கமாய் என் வாழ்க்கையில் ஆரம்பித்து,
ஒரு முழு புத்தகமாய் என் வாழ்க்கையில் இருக்கிறாய்.. 💜

`
  },
  {
    id: "letter-3",
    title: "Future Letter",
    category: "🔒 Future Letters",
    date: "Someday",
    preview: "I don't know where life will take us...",
    content: `Idha nee eppo padippa nu enakku theriyadhu.

but whenever you open this, I hope you're smiling. 😏

Idha en ways of showing love nu nenachikko.

// Enakku love na enna nu kooda theriyama irundha enna,
// adhula vizha vecha sooniya kaari nee. 😏

Life namma rendu perayum enga kondu pogum nu enakku theriyadhu.
Namma same-ah iruppoma,
illa romba different-ah aayiduvoma nu kooda theriyadhu.

Aana onnu mattum maaradhu…

Un mela irukkura en care.

Na unna eppovume love(Anbu) pannitu iruppen .
Un thoughts illama irukradhu enakku ippo yosikka kooda mudiyadhu,
because somewhere along the way,
nee en life-oda oru part aayita.

And honestly dude,
enakku adhu pudichirukku.

So please…
just let me be your Bijju. 🥹

Naan edhachum pannirundha,
unakku hurt aagirundha,
illa naan purinjikaama edhachum pannirundha,
enna mannichidu dude.

Future-la naan edhachum thappu panna,
adha justify panna maaten.
Purinjika try pannuven,
better-ah irukka try pannuven.

Unna care pandradhu enakku kashtam illa.
It's actually the easiest thing I've ever felt.
And probably one of my favourite parts too.

Because no matter where life takes us,
no matter how much time passes,

I'm always going to be grateful
that you were once—and hopefully still are—
a beautiful part of my story.

That's all I ever wanted for you.

No matter what…

I'm here to take care of you. 💜

 .`
  },
  {
    id: "letter-final",
    title: "A Letter I Never Want You To Forget",
    category: "✨ One Last Letter",
    date: "Happy Birthday",
    preview: "You were the first person who taught me that friendship could feel like home...",
    isSpecial: true,
    content: `💌 Dear Tokyo,

Sila peru namma life-la romba simple-ah dhaan varuvaanga… aana konjam konjama, namma memories-la oru periya part aayiduvaanga.

Nee enakku appadi oru person.

Random-ah pesinadhu, late-night talks, namma sandaigal,naama vaeliya ponathu, konjam annoying moments 😂 — idhellam serndhu paatha, ippo enakku romba special-aana memories ah irukku.

Life namma rendu perayum enga kondu pogumnu enakku theriyadhu. Aana oru vishayam mattum sure…

Unna meet pannadhu-ku naan genuinely happy.

So, un birthday-la naan solla virumburadhu onnu dhaan:

Nee nee-ah irundhadhukku thanks.
Enakku ivlo laughs, chaos, memories kuduthadhukku thanks. ❤️
Naraya puriya vachithukku thanks.

Un life-oda indha pudhu year-la, nee wish panra ellame kidaikkanum. Neraya happiness, nalla health, peaceful days, and smile panna neraya reasons irukkanum.

And please… same crazy Tokyo-va continue pannitu iru. 😂❤️

Happy Birthday, Tokyo!

— Unna meet pannadhu-ku romba happy-a irukkura oruthan 😏`
  }
];