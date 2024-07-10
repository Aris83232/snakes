const python = document.getElementById("pythons");
const boa = document.getElementById("boa");
const cobra = document.getElementById("cobra");
const viper = document.getElementById("viper");

let heading = document.getElementById("content-heading");
let image = document.getElementById("snakeImg");
let information = document.getElementById("info");

let pythonInfo = `Pythons are the longest snakes in the world.
They’re the classic constrictors: instead of a venomous bite,
they kill their prey by coiling around it,
gradually tightening their grip until their victim is unable to breathe.\n
Pythons are genetically distant from all other snakes,
which leads scientists to believe that they were an early evolutionary offshoot.
The python’s body confirms that view, and also suggests that pythons haven’t
changed much in the tens of millions of years since they first evolved;
unlike other modern snakes, pythons still have tiny back limbs,
an evolutionary holdover from snakes’ lizard ancestors.`;

let boaInfo = `With their huge bulk, anacondas look similar to pythons,
but they’re only distant relatives. Physically, anacondas are shorter and stockier
than pythons, and their heads are less angular. Anacondas are close cousins of the boas,
another group of constrictors in the same family. Boas and anacondas live in South and
Central America, whereas pythons live in Asia and Africa. They give birth to live young,
whereas pythons (and most other snakes) lay eggs.`;

let cobraInfo = `Cobras are some of the most recognizable snakes in the world.
They have muscles around the head and neck that can flatten out into a hood shape,
making them appear larger to potential predators. Cobras can be found across Africa and Asia,
but the most famous species are native to southern Asia. The king cobra, in particular,
is  a famous resident of South Asian tropical forests. King cobras are by far the longest
venomous snakes, growing up to 18 feet.`;

let viperInfo = `The quintessential venomous snakes, vipers are a diverse family with
members all over the world. Vipers can often be identified by their distinctive triangular
heads (other snakes have a more oval or elongated head). Scientists recently discovered that
signals from the loreal pit are processed in the optic tectum, the brain structure
responsible for vision. So pit vipers can literally see heat. The main active ingredients
in viper venom are proteases, essentially digestive enzymes that break down proteins and
damage tissue. Unlike cobras or mambas, vipers don’t have neurotoxins in their venom.
That means the bite can be extremely painful, but is rarely fatal.`;

pythons.onclick = function() {
    heading.textContent = "python";
    image.src = "Aris83232/snakes/tree/main/images/Python.png"
    information.textContent = pythonInfo;

}

boa.onclick = function() {
    heading.textContent = "boas & anacondas";
    image.src = "Aris83232/snakes/tree/main/images/Anaconda.png"
    information.textContent = boaInfo;
}

cobra.onclick = function() {
    heading.textContent = "cobras";
    image.src = "Aris83232/snakes/tree/main/images/Cobra.png"
    information.textContent = cobraInfo;
}

viper.onclick = function() {
    heading.textContent = "viperids";
    image.src = "Aris83232/snakes/tree/main/images/vipert1.png"
    information.textContent = viperInfo;
}
