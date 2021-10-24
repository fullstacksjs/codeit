import { generateStub } from '@codeit/stubGenerator';
import { Prisma } from '@prisma/client';

export const sampleInOutPuzzles: Prisma.PuzzleCreateInput[] = [
  {
    title: 'When pigs fly',
    constraint:
      '2 ≤ [[N]] ≤ 15\n1 ≤ Length of [[S]] ≤ 256\n{{PIGS}} appears in at least one statement\n{{FLY}} appears in at least one statement\nStatements are composed of letters and spaces\n{{OBJECTS}}, {{TRAITS}}, and {{ABILITIES}} are written in uppercase, and everything else is in lowercase.',
    inputDescription:
      '<<Line 1:>> An integer [[N]] representing the number of statements.\n<<Next [[N]] lines:>> A logical statement [[S]] written as described in the prompt.',
    outputDescription:
      'A string stating what can be concluded from the input about pigs flying:\n(1) {{All pigs can fly}}\n(2) {{Some pigs can fly}}\n(3) {{No pigs can fly}}',
    initialTemplates: {
      create: [
        {
          language: 'JavaScript',
          template: generateStub(
            'JavaScript',
            'read N:int\nloop N read S:string(256)\nwrite join("All|Some|No"," pigs can fly")',
          ),
        },
      ],
    },
    statement:
      'Given a set of universal truths, determine whether {{All}}, {{Some}}, or {{No pigs can fly}}.\n\nEach of [[N]] lines contains a logical statement [[S]] in the following general form:\n    {{OBJECTA}} (are {{OBJECTB}} | have {{TRAIT}} | can {{ABILITY}})\n        or\n    {{TRAITA}} are {{TRAITB}}\nwhere parentheses contain options separated by pipes ( {{|}} ). Furthermore, {{OBJECTS}} can be expanded like so:\n    {{OBJECT}} [with {{TRAITA}} [and {{TRAITB}} ...]] [that can {{ABILITYA}} [and {{ABILITYB}} ...]]\nwhere brackets {{[ ]}} denote optional text.\n\nBelow are sample statements.\n    (1) MICE are RODENTS\n    (2) MICE with WINGS are BATS\n    (3) MICE that can FLY are ANIMALS with SUPERPOWERS\n    (4) BATS are RODENTS\n    (5) RODENTS with FEET and NOSES that can EAT are POPSICLES\nTo clarify, statement (1) means that <<all>> MICE are RODENTS, but only <<some>> RODENTS are MICE. Furthermore, it <<cannot be assumed>> from statements (1) and (4) that some MICE are BATS.\n\nThe task is to determine what can be concluded about pigs flying: <<must>> it be true for all pigs, some pigs, or none?',
    mode: 'normal',
    testCases: {
      create: [
        {
          title: 'Object classes',
          assertion: 'All pigs can fly',
          input: '3\nPIGS are BACONS\nBACONS are GODS\nGODS can FLY',
          mode: 'sample',
        },
        {
          title: 'Validator Object',
          assertion: 'All pigs can fly',
          input: '4\nPIGS are OSTRICHES\nOSTRICHES are BIRDS\nBIRDS can FLY\nPIGS are BANANAS',
          mode: 'final',
        },
        {
          title: 'Traits and Abilities',
          assertion: 'All pigs can fly',
          input:
            '4\nPIGS have FEET\nPIGS are ANIMALS\nANIMALS with FEET that can RUN can FLY\nANIMALS can RUN',
          mode: 'sample',
        },
        {
          title: 'Validator Trait Ability',
          assertion: 'All pigs can fly',
          input:
            '5\nRUBIES are GEMSTONES\nPIGS are GEMSTONES\nGEMSTONES can TWINKLE\nRUBIES have COLOR\nGEMSTONES that can TWINKLE can FLY',
          mode: 'final',
        },
        {
          title: 'Some but not all',
          assertion: 'Some pigs can fly',
          input:
            '7\nBACONS with WINGS can FLY\nHAMS are PIGS\nHAMLETS are PIGLETS\nBACONS are GODS\nPIGLETS are PIGS\nHAMS are BACONS\nGODS have WINGS',
          mode: 'sample',
        },
        {
          title: 'Validator Some',
          assertion: 'Some pigs can fly',
          input:
            '7\nPIGS have NOSES\nDOGS are PIGS\nANIMALS with NOSES can FLY\nANIMALS are CREATURES\nBACTERIA are MICROBES\nPIGS have BACTERIA\nDOGS are ANIMALS',
          mode: 'final',
        },
        {
          title: 'Branching inheritance',
          assertion: 'Some pigs can fly',
          input:
            '8\nPIGS have FEET\nFEET are LIMBS\nCATS are POPTARTS\nCATS have LIMBS\nPIGS are MAMMALS\nCATS are MAMMALS\nPOPTARTS with LIMBS can FLY\nCATS are PIGS',
          mode: 'sample',
        },
        {
          title: 'Validator Branching',
          assertion: 'Some pigs can fly',
          input:
            '9\nMEN can EAT\nMEN are PIGS\nMEN have EYES\nEYES are ORGANS\nORGANS are INSTRUMENTS\nMEN can PLAYMUSIC\nPIGS with INSTRUMENTS that can PLAYMUSIC can SING\nMEN that can SING are ANGELS\nANGELS can FLY',
          mode: 'final',
        },
        {
          title: 'Roundabout',
          assertion: 'All pigs can fly',
          input:
            '9\nPIGS have MOUSTACHES\nANIMALS with MOUSTACHES can FLY\nSQUIRRELS have MOUSTACHES\nSQUIRRELS can SCREECH\nSQUIRRELS are PIGS\nREINDEER are SQUIRRELS\nREINDEER are MAMMALS\nMAMMALS that can SCREECH are ANIMALS\nPIGS are ANIMALS',
          mode: 'sample',
        },
        {
          title: 'Validator Round',
          assertion: 'All pigs can fly',
          input:
            '10\nPIGS have WINGS\nANIMALS can FLY\nBEAVERS are PIGS\nBEAVERS are DUCKS\nBEAVERS with WINGS and BILLS are PLATYPUSES\nDUCKS can QUACK\nDUCKS are ANIMALS\nANIMALS that can QUACK have BILLS\nPLATYPUSES are ANIMALS\nPIGS are ANIMALS',
          mode: 'final',
        },
        {
          title: 'Doubles',
          assertion: 'No pigs can fly',
          input:
            '4\nBANANAS with HANDS are BUNNIES with LIMBS\nBANANAS have HANDS\nBUNNIES with LIMBS can FLY\nPIGS are BUNNIES',
          mode: 'sample',
        },
        {
          title: 'Validator Double',
          assertion: 'Some pigs can fly',
          input:
            '5\nBIRDS can POOP\nBIRDS can FLY\nWEASELS with PARACHUTES are BIRDS that can SING\nPIGS have PARACHUTES\nWEASELS are PIGS',
          mode: 'final',
        },
        {
          title: 'Big Loop',
          assertion: 'Some pigs can fly',
          input:
            '9\nCOWS are BURGERS\nCOWS can EAT\nCOWS that can MOO can FLY\nPIGS are COWS\nPIGLETS are PIGS\nPIGLETS are MUSHROOMS\nMUSHROOMS have SPORES\nSPORES are ROCKETSHIPS\nPIGLETS with ROCKETSHIPS can MOO\n',
          mode: 'sample',
        },
        {
          title: 'Validator Loop',
          assertion: 'All pigs can fly',
          input:
            '13\nBOXES are SQUARES\nPIGS are BLOCKS\nBLOCKS are BOXES\nBLOCKS with EQUATIONS are OBJECTS that can FLY\nPIGS are VACUUMS\nVACUUMS are APPLIANCES\nAPPLIANCES can SPARK\nPIGS that can SPARK have NEURONS\nPIGS with NEURONS are MOSQUITOES\nMOSQUITOES can BUZZ\nAPPLIANCES that can BUZZ have ELECTRONS\nELECTRONS are WAVES\nWAVES are EQUATIONS',
          mode: 'final',
        },
        {
          title: 'Unrelated',
          assertion: 'No pigs can fly',
          input:
            '11\nBONES are ITEMS\nMETALS are ITEMS\nITEMS have COST\nITEMS have DEMAND\nBLACKSMITHS can CRAFT\nBLACKSMITHS have MATERIALS\nPIGS have ARMOR\nBLACKSMITHS with HAMMERS can SYNTHESIZE\nBEETLES have HUSKS\nBEETLES are INSECTS\nINSECTS with HUSKS can FLY',
          mode: 'sample',
        },
        {
          title: 'Validator Unrelated',
          assertion: 'No pigs can fly',
          input:
            '15\nFOOTBALLS are BALLS\nBALLS can ROLL\nBASKETBALLS are BALLS\nBASEBALLS are BALLS\nBASKETBALLS have AIR\nPIGS can ROLL\nBALLS with AIR can BOUNCE\nGOLFBALLS have DIMPLES\nBALLS with DIMPLES are OBJECTS with SHAPE that can FLY\nPIGS are PUMPKINS\nPUMPKINS can SMILE\nPLAYERS have FEET\nPLAYERS can GRIN\nPLAYERS with FEET can DRIBBLE\nPIGS have SNOUTS',
          mode: 'final',
        },
        {
          title: 'Final Test',
          assertion: 'Some pigs can fly',
          input:
            '9\nGEESE are CHICKENS\nCHICKENS with BEAKS are LLAMAS with MOUTHS\nMOUTHS are HOLES\nGEESE have BEAKS\nLLAMAS with TOENAILS are PIGS\nPIGS are TREES that can WALK\nCHICKENS with EYES and TOENAILS are TREES that can FLY\nBEAKS are TOENAILS\nCHICKENS have EYES',
          mode: 'sample',
        },
        {
          title: 'Validator Final',
          assertion: 'No pigs can fly',
          input:
            '11\nACORNS with VITAMINS are PLANTS with LEAVES\nBOARS with LIMBS are ACORNS with KITTENS that can GROW\nKITTENS are VITAMINS\nBUSHES are TREES\nPIGS with HANDS are BOARS with LIMBS\nHOGS are BOARS\nHOGS are ACORNS\nTREES are PLANTS with LEAVES\nTREES have ROOTS\nROOTS are APPENDAGES\nBUSHES with ROOTS can FLY',
          mode: 'final',
        },
      ],
    },
  },
  {
    title: 'Find the liars',
    constraint: '2 ≤ [[N]] ≤ 10\n1 ≤ [[L]] ≤ 9',
    inputDescription:
      '<<Line 1:>> An integer [[N]] for the number of people.\n<<Line 2:>> An integer [[L]] for the number of liars.\n<<Next [[N]] lines:>> A string [[sentence]] about the sentence of the person.',
    outputDescription: '<<Line 1:>> The people who lie separated by spaces, in ascending order.',
    initialTemplates: {
      create: [
        {
          language: 'JavaScript',
          template: generateStub(
            'JavaScript',
            'read N:int\nread L:int\nloop N read sentence:string(1024)\nwrite liar1 liar2 liar3...',
          ),
        },
      ],
    },
    statement:
      'Among a group of people, will you be able to find the liars?\nThey each give you a sentence to analyze.\n\nAll [[N]] people give you one single sentence.\nA <<sentence>> is stated like: {{NUM>NUM>NUM[...]=(T or L)}}\nWhere {{NUM}} is a person number. You can have up to a hundred of recursive {{NUM>}}.\nThe Regex of a sentence is {{\\d(>\\d)*=[TL]}}\n\n{{T}} represents "Truth" and {{L}} represents "Lying".\nThat can be translated by:\n<<{{NUM}} told that {{NUM}} told me that {{NUM}} [...] {{NUM}} is telling the truth/is lying>>\n\nThe people are numbered from 0 to 9.\nIf someone is lying, then he inverses everything he says (truth became lie and lie became truth).\nIf someone is telling the truth, then for him everything he said is correct.\n\nFor every case, there is only one single solution.\n\n<<Examples:>>\n{{2>0=L}}: 2 told that 0 is lying\n{{2>3>0=T}}: 2 told that 3 told me that 0 is telling the truth\n\n<<Explanation of the first exemple case :>>\nIf 0 is saying the truth, then 1 must lie {{0>1=L}}\nBut if 1 lie, 2 must lie too {{1>2=T}} (a liar say that 2 is telling the truth)\nIf 0 tell the truth, there is 2 liars, but it is impossible, so 0 is the liar.',
    mode: 'normal',
    testCases: {
      create: [
        {
          title: 'A simple beginning',
          assertion: '0',
          input: '3\n1\n0>1=L\n1>2=T\n2>0=L',
          mode: 'sample',
        },
        {
          title: 'A simple beginning',
          assertion: '0',
          input: '3\n1\n0>1=L\n1>2=T\n2>0=L',
          mode: 'final',
        },
        {
          title: 'Simple but complex',
          assertion: '1 2',
          input: '5\n2\n0>3=T\n1>1=T\n2>1=T\n3>2=L\n4>2=L',
          mode: 'sample',
        },
        {
          title: 'Simple but complex',
          assertion: '1 2',
          input: '5\n2\n0>3=T\n1>1=T\n2>1=T\n3>2=L\n4>2=L',
          mode: 'final',
        },
        {
          title: 'A longer beginning',
          assertion: '0 1',
          input: '3\n2\n0>1>2>1>0>2=T\n1>2>0=T\n2>0>1>2=T',
          mode: 'sample',
        },
        {
          title: 'A longer beginning',
          assertion: '0 1',
          input: '3\n2\n0>1>2>1>0>2=T\n1>2>0=T\n2>0>1>2=T',
          mode: 'final',
        },
        {
          title: 'A messy truth',
          assertion: '0 2 4 5 7 8 9',
          input:
            '10\n7\n0>6>6>4>3>4>8=T\n1>8>4>7>5>4>2=T\n2>3>0>3>4>7>1=T\n3>0>6>1>4>5>8=T\n4>4>7>6>1>2>1=T\n5>0>4>9>1>0>8=T\n6>7>9>6>5>3>7=T\n7>4>8>6>6>8>3=T\n8>4>9>9>0>5>3=T\n9>3>1>2>3>7>5=T',
          mode: 'sample',
        },
        {
          title: 'A messy truth',
          assertion: '0 1 5 6 7 8 9',
          input:
            '10\n7\n0>4>6>8>0>5>0=T\n1>0>1>9>3>1>0=T\n2>8>5>9>3>6>2=T\n3>7>5>0>8>7>0=T\n4>9>9>0>1>8>0=T\n5>6>4>6>0>9>7=T\n6>5>2>3>8>2>5=T\n7>4>9>1>7>8>9=T\n8>1>4>2>9>5>3=T\n9>1>6>7>2>0>5=T',
          mode: 'final',
        },
        {
          title: 'A long path',
          assertion: '0',
          input:
            '3\n1\n0>0>1>0>1>2>1>1>2>1>2>1>1>1>0>2>0>2>0>1>0>0>0>0>2>0>2>1>2>2>0>1>2>2>0>0>2>1>0>2>1>0>0>2>2>2>2>2>2>1>0=T\n1>0>2>2>2>2>2>1>2>1>1>2>0>1>2>2>1>2>0>0>1>2>0>2>0>0>1>2>1>0>2>1>0>2>0>1>0>0>1>2>1>2>2>1>2>2>2>1>2>1>0=L\n2>2>1>2>2>0>1>0>0>2>0>0>0>1>0>2>2>0>1>0>1>1>0>1>1>2>0>1>2>2>0>1>2>2>0>2>1>1>0>1>2>0>0>2>0>1>2>1>2>1>1=L',
          mode: 'sample',
        },
        {
          title: 'A long path',
          assertion: '1',
          input:
            '3\n1\n0>1>1>0>2>0>0>2>2>0>2>2>2>0>0>2>0>0>0>2>1>1>0>0>2>1>0>1>1>2>2>0>1>1>0>0>2>2>0>1>1>0>1>2>1>2>2>2>0>2>1=T\n1>1>0>1>0>2>2>1>2>0>0>0>1>0>0>0>0>1>1>0>2>1>2>0>0>2>2>2>1>2>0>1>0>2>1>0>2>1>2>2>1>1>0>2>1>0>0>0>2>2>0=L\n2>1>2>0>1>1>2>1>0>0>0>2>2>2>1>2>2>2>1>1>1>1>2>1>2>0>1>0>1>2>1>0>1>2>2>1>2>2>2>1>1>1>2>0>2>2>0>2>0>2>1=L',
          mode: 'final',
        },
      ],
    },
  },
];
