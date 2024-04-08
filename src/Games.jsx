// import './css/Game.css';

import image1 from './images/games/batuseremban.jpg';
import image2 from './images/games/galahpanjang.jpeg';
import image3 from './images/games/congkak.jpg';
import image4 from './images/games/gasing.png';
import image5 from './images/games/guli.jpg';
import image6 from './images/games/wau.jpg';
import image7 from './images/games/ceper.jpeg';
import image8 from './images/games/damHaji.jpeg';
import gameBackground from './images/games/background2.jpg';

import React from 'react';
import TitleBoxWithBackground from './reuseComponent/TitleBoxWithBackground';
import Typography from '@mui/material/Typography';

function Game() {
  return (
    <div>
      <TitleBoxWithBackground background={gameBackground}>
        <Typography variant='h2' textAlign='center'>
          Traditional Game in Malaysia
        </Typography>
      </TitleBoxWithBackground>
      <section>
        <div class="container">
          <div id="batuSeremban">
            <h2>Batu Seremban</h2>
            <img src={image1} alt="Batu Seremban" /><br /><br />
            <br />
            <p>
              Batu Seremban, also known as Permainan Batu Selambut or Serembat, is a popular game in
              Kedah, Selangor, Kelantan, and Johor, played individually or in groups of two to four people.
              The game requires five objects called 'buah,' such as rubber seeds, glass marbles, bean bags,
              pebbles, or small pieces of cloth. Players hurl the game piece in different ways through various
              stages, starting from 'buah satu' (game piece one) up to the highest stage, 'buah tujuh'
              (game piece seven) or 'raja,' followed by 'dandling the game pieces' to earn points. If a
              game piece touches another or any body part other than the hand when spreading them on the playing
              surface, the player may face a 'defunct game' status and the next player in line takes their turn.
            </p>
          </div><br /><hr /><br /><br />

          <div id="galahPanjang">
            <h2>Galah Panjang</h2>

            <img src={image2} alt="Galah Panjang" /><br />
            <br />
            <p>
              Galah panjang is a traditional game played on a court drawn on vacant land. The court is
              divided into two columns and several rows based on the number of players. A long pole ring
              is set up according to the number of players. For example, with 10 players, the court consists
              of 4 lines, and with 8 players, it has 3 lines. A leader directs the movement on behalf of the
              players. The game tests players' agility and speed in reaching the ring. Winning is easier if a
              player can reach the ring without facing opposition.
            </p>
          </div><br /><hr /><br /><br />
          <div id="Congkak">
            <h2>Congkak</h2>

            <img src={image3} alt="Congkak" /><br /><br />
            <p>
              Congkak is a traditional Malay game often played indoors or competitively. It typically involves
              hollow wooden planks or holes in the ground, with players using rubber seeds or marbles as game
              pieces. The game likely originated from Melaka in Southeast Asia, a region known for its trading
              history. The name "congkak" is thought to come from the Malay word "congak," meaning mental calculation.
              Besides Malays, the game is popular among Indian and Baba Malacca communities. In the Caribbean, Congkak
              is known as Warri or Awari, while in Indonesia, it's called Congklak, and in the Philippines, Sungka.
              The game set includes a board shaped like a boat with five to seven holes in a line (called 'kampung' or
              village) and a main hole at each end ('rumah' or home). Players take turns picking up pieces from any 'kampung'
              and placing them one by one into subsequent 'kampung' in a clockwise direction, aiming to fill their 'rumah'
              with as many pieces as possible. The round ends when a player's piece lands in an empty 'kampung,' and the player
              with the most pieces in their 'rumah' wins.

            </p>
          </div><br /><hr /><br /><br />
          <div id="Gasing">
            <h2>Gasing</h2>

            <img src={image4} alt="Gasing" /><br /><br />
            <p>
              The "Spinning Top," known as Gasing, is a traditional Malaysian game primarily played by
              young boys. Originating from Kelantan, the game is traditionally played after the rice
              harvest season, where villagers gather to challenge each other and test their skills. It is
              believed that playing gasing brings good harvest. Gasing is played on a flat open area by
              both children and adults, with adult gasing being larger and able to spin longer than those
              used by children, which are smaller. Made of wood, gasing weighs between 0.5 to 1.0 kilograms.
              There are various shapes of gasing, including plate-shaped, heart-shaped, hat-top, and berembang-shaped.
              Gasing Berembang is named after the fruit found freely on the seafront, which is round, somewhat flat,
              and smooth, resembling the shape of the gasing.

            </p>
          </div><br /><hr /><br /><br />
          <div id="Guli">
            <h2>Guli</h2>

            <img src={image5} alt="Guli" /><br /><br />
            <p>

              Guli, also known as marbles, is a simple game that was popular in the olden days. Suitable for
              both girls and boys aged seven to twelve years old, the game is best played with no more than five
              players. It is typically played on a flat surface with a circle drawn with a diameter of approximately
              1 meter. Despite its simplicity, Guli is not an easy game as it requires accurate throwing of the marble
              onto the target. The marbles used in this game are very small and are typically made of limestone, ensuring
              they are round in shape.
            </p>
          </div><br /><hr /><br /><br />
          <div id="Wau">
            <h2>Wau</h2>

            <img src={image6} alt="Wau" /><br /><br />
            <p>
              Wau is a popular traditional game in Malaysia that has been played for centuries. It features authentic Malay
              motifs in its patterns and designs. Villagers used to associate the vines on the wau with a man's life and the
              flowers with a woman's life. The game is especially popular in rural areas, particularly in the East Coast states
              of Kelantan and Terengganu, as well as in Perlis and Kedah in the Northern states. It is often played at the end
              of the harvest season as a way to relax after working in the fields. Wau is a game that tests a player's skills
              and efficiency in making and flying kites. While typically played by male adults, there is no fixed number of players,
              and more players are often welcomed. Played in open areas, the game requires a kite and long strings or yarn. It can
              also be played competitively, with categories such as the highest-flying kite, most skilled player, most melodious kite,
              most colorful kite, most beautifully drawn kite, and straightest flying kite. The three main types of wau are Wau Bulan,
              named for its crescent-like tail shape; Wau Jala Budi, resembling a woman's curves; and Wau Kucing, named for its cat-like shape.
            </p>
          </div><br /><hr /><br /><br />
          <div id="Ceper">
            <h2>Ceper</h2>
            <img src={image7} alt="Ceper" /><br /><br />
            <p>
              This game originally comes from the late 70s and is very popular at that time. This game is
              uses bottle caps. Additionally, these bottle caps are taken from soy sauce bottles or any bottles
              that uses steel bottle caps. This game consists of two players or more and 5 pieces of bottle
              caps are used in a game. The way this game is played is very simple. To play this game, a player
              must count the amount of ceper available during the weighing ceper. Each ceper represents
              two marks. Winners will be determined by the total numbers of ceper successfully weighed and the
              amount of marks obtained.
            </p>
          </div><br /><hr /><br /><br />
          <div id="DamHaji">
            <h2>Dam Haji</h2>
            <img src={image8} alt="DamHaji" /><br /><br />
            <p>
              Dam Haji is a traditional Malay strategy board game played on an 8x8 square board where players
              aim to capture their opponent's pieces by jumping over them, similar to checkers, but without
              mandatory captures. Each player starts with 16 pieces placed on opposite sides of the board. Players
              take turns moving one piece at a time diagonally forward or sideways to an adjacent empty square.
              Capturing is achieved by jumping over an opponent's piece to an empty square beyond it, with multiple
              captures possible in a single turn. The game ends when one player captures all of their opponent's
              pieces or when a player is unable to make a legal move. Dam Haji requires strategic thinking and tactical
              planning, reflecting traditional Malay values of strategy, patience, and intelligence. Beyond its gameplay,
              Dam Haji holds cultural significance as a traditional Malay game and is a symbol of heritage and tradition
              in Malaysia.

            </p>
          </div><br /><hr /><br /><br />
        </div>

      </section>
    </div>
  );
}

export default Game;