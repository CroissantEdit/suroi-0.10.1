import { Color } from "pixi.js";

export const HIDE_DEV_REGION = false;
export const UI_DEBUG_MODE = false;
export const HITBOX_DEBUG_MODE = false;

export const HITBOX_COLORS = {
    obstacle: new Color("red"),
    obstacleNoCollision: new Color("yellow"),
    spawnHitbox: new Color("orange"),
    buildingZoomCeiling: new Color("purple"),
    buildingScopeCeiling: new Color("cyan"),
    loot: new Color("magenta"),
    player: new Color("blue"),
    playerWeapon: new Color("red")
};

export const COLORS = {
    grass: new Color("hsl(88, 41%, 49%)"), 
    water: new Color("hsl(200, 55%, 43%)"),
    gas: new Color("hsl(17, 100%, 50%)").setAlpha(0.55),
    beach: new Color("hsl(46, 53%, 58%)")
};

export const PIXI_SCALE = 20;

export enum EmoteSlot {
    Top,
    Right,
    Bottom,
    Left,
    None
}

export const FIRST_EMOTE_ANGLE = Math.atan2(-1, -1);
export const SECOND_EMOTE_ANGLE = Math.atan2(1, 1);
export const THIRD_EMOTE_ANGLE = Math.atan2(-1, 1);
export const FOURTH_EMOTE_ANGLE = Math.atan2(1, -1);
