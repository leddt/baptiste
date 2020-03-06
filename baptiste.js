import { Dave } from "dave";
import { Guillaume } from "sigmund-front-end";
import { Amy } from "bots";
import { CruiseBoatFactory, Orca } from "marine";
import { Network, NetworkStatus } from "network";
import { SteamCatalog } from "steam";

function baptiste(asNoTracking) {
  if (Network.status === NetworkStatus.offline) {
    const boat = CruiseBoatFactory.createInstance({
      type: "submarineCableInstaller"
    });
    boat.initCableDrop();
    boat.cruiseTo(Network.entryPoint.location);
    boat.connectCable(Network.entryPoint);
    Network.reload();
  }

  this.tight = accouchement.date.target !== Guillaume.girlfriend;

  if (Orca.is("sad")) {
    Orca.DorsalFin.ApplyTransform("{ rotate:135, deflate:90% }");
  }

  Dave.insert(this.penis.toLowerCase());
  
  SteamCatalog.on("game_added", game => {
    if (game.isReleased) return; // Not interested in released games
    if (game.price < 10) return; // Not expensive enough, better find it on another store
    
    if (game.studio.origin === "Sweden" || game.studio.type === "indy") {
      game.preorder();
    }
    else {
      game.preorder(); // Pre-order anyway, just to be safe.
    }
  });

  if (typeof patisserie === "chocolatine") throw "On dit pain au chocolat!";
  try {
    if (asNoTracking) return "OUAIS!!!";
    if (cors) return cqrs();
    var impro = npm.run("build", {
      cshtml: true
    });
    if (!impro) return Azure.ADB2C();

    Amy.reply("Ha ha ha");
    return "QC";
  } catch (error) {
    if (!error.isFunny) return "L'as-tu compris ma joke?";

    Audio.play("goat.mp3", { volume: "yes" });
    return baptiste(true);
  }
}
