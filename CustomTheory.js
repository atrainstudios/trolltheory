import { ExponentialCost, FreeCost, LinearCost } from "./api/Costs";
import { Localization } from "./api/Localization";
import { BigNumber } from "./api/BigNumber";
import { theory } from "./api/Theory";
import { Utils } from "./api/Utils";
import { game } from "../api/Game";
import { Thickness } from '../api/ui/properties/Thickness';
import { LayoutOptions } from '../api/ui/properties/LayoutOptions';
import { ui } from '../api/ui/UI';

var id = "heruhgshfiuhaieefuh";
var name = "wejwiedjisd";
var description = "asoidjoasijd";
var authors = "wpepwpedas";
var version = 69420;
var permissions = Permissions.PERFORM_GAME_ACTIONS

var currency, currency2, currency3;
var c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12;
var c1Exp, c2Exp;

var achievement1, achievement2;
var ch1, ch2, ch3, ch4, ch5, ch6, ch7, ch8, ch9, ch10, ch11, ch12, ch13, ch14, ch15, ch16, ch17, ch18, ch19, ch20;
var a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18, a19, a20;
var cat;
var init = () => {
    currency = theory.createCurrency("a");
    currency2 = theory.createCurrency("b");
    currency3 = theory.createCurrency("c");
    ///////////////////
    // Regular Upgrades

    // c1
    {
        let getDesc = (level) => "c_{\\rho 19}=" + getC5(level).toString(0);
        c1 = theory.createUpgrade(0, currency, new FirstFreeCost(new ExponentialCost(15, Math.log2(2))));
        c1.getDescription = (_) => Utils.getMath(getDesc(c1.level));
        c1.getInfo = (amount) => Utils.getMathTo(getDesc(c1.level), "\\mu");
    }

    // c2
    {
        let getDesc = (level) => "c_9=" + getC7(level).toString(0);
        let getInfo = (level) => "c_{11}\\tau =" + getC3(level).toString(0);
        c2 = theory.createUpgrade(1, currency, new ExponentialCost(5, Math.log2(10)));
        c2.getDescription = (_) => Utils.getMath(getDesc(c11.level));
        c2.getInfo = (amount) => Utils.getMathTo(getInfo(c10.level), "a");
    }

    // c3
    {
        let getDesc = (level) => "c_13=\\omega " + getC11(level).toString(0);
        let getInfo = (level) => "c_31=" + getC12(level).toString(0);
        c3 = theory.createUpgrade(2, currency, new ExponentialCost(9999, Math.log2(103)));
        c3.getDescription = (_) => Utils.getMath(getDesc(c3.level));
        c3.getInfo = (amount) => Utils.getMathTo(getInfo(c4.level), "-\\beta");
    }

    // c4
    {
        let getDesc = (level) => "c_69=744.39438^{" + level + "}";
        let getInfo = (level) => "c_89=" + getC8(level).toString(0);
        c4 = theory.createUpgrade(3, currency, new ExponentialCost(93, Math.log2(42)));
        c4.getDescription = (_) => Utils.getMath(getDesc(c7.level));
        c4.getInfo = (amount) => Utils.getMathTo(getInfo(c5.level), getDesc(c11.level + 14 + amount));
    }

    // c5
    {
        let getDesc = (level) => "java.util.ClassCastException";
        let getInfo = (level) => "java.util.ClassCastException";
        c5 = theory.createUpgrade(4, currency, new ExponentialCost(84, Math.log2(66)));
        c5.getDescription = (_) => "java.util.ClassCastException";
        c5.getInfo = (amount) => "java.util.ClassCastException";
    }

    // c6
    {
        let getDesc = (level) => "java.util.ClassCastException";
        let getInfo = (level) => "java.util.ClassCastException";
        c6 = theory.createUpgrade(7, currency, new ExponentialCost(84, Math.log2(66)));
        c6.getDescription = (_) => "java.util.ClassCastException";
        c6.getInfo = (amount) => "java.util.ClassCastException";
    }

    // c7
    {
        let getDesc = (level) => "NeverGonnaGiveYouUp";
        let getInfo = (level) => "NeverGonnaGiveYouUp";
        c7 = theory.createUpgrade(5, currency, new ExponentialCost(92, Math.log2(194)));
        c7.getDescription = (_) => "NeverGonnaGiveYouUp";
        c7.getInfo = (amount) => "NeverGonnaGiveYouUp";
    }

    // c8
    {
        let getDesc = (level) => "c_13=" + getC4(level).toString(0);
        let getInfo = (level) => "c_\\psi = " + getC6(level).toString(0);
        c8 = theory.createUpgrade(6, currency2, new ExponentialCost(9999, Math.log2(103)));
        c8.getDescription = (_) => Utils.getMath(getDesc(c8.level));
        c8.getInfo = (amount) => Utils.getMathTo(getInfo(c9.level), getDesc(c1.level + amount));
    }

    // c9
    {
        let getDesc = (level) => "Playspout Hax";
        let getInfo = (level) => "Playspout Hax";
        c9 = theory.createUpgrade(10, currency3, new ExponentialCost(1, Math.log2(194)));
        c9.getDescription = (_) => "Playspout Hax";
        c9.getInfo = (amount) => "Playspout Hax";
    }
    // c10
    {
        let getDesc = (level) => "c_13=" + getC9(level).toString(0);
        let getInfo = (level) => "\\phi = " + getC10(level).toString(0);
        c10 = theory.createUpgrade(8, currency, new ExponentialCost(9999, Math.log2(103)));
        c10.getDescription = (_) => Utils.getMath(getDesc(c11.level));
        c10.getInfo = (amount) => Utils.getMathTo(getInfo(c12.level), "getInfo(c3.level + amount)");
    }

     // c11
     {
        let getDesc = (level) => "ouo";
        let getInfo = (level) => "ouob";
        c11 = theory.createUpgrade(9, currency, new ExponentialCost(34934, Math.log2(111)));
        c11.getDescription = (_) => "ouop";
        c11.getInfo = (amount) => "nub hax";
    }

     // c11
     {
        let getDesc = (level) => "æøå";
        let getInfo = (level) => "æøå";
        c12 = theory.createUpgrade(11, currency, new ExponentialCost(9, Math.log2(12)));
        c12.getDescription = (_) => "weierstrab";
        c12.getInfo = (amount) => "xlii";
    }

    /////////////////////
    // Permanent Upgrades
    theory.createPublicationUpgrade(0, currency, 0);
    theory.createBuyAllUpgrade(1, currency, 0);
    theory.createAutoBuyerUpgrade(2, currency, 0);

    ///////////////////////
    //// Milestone Upgrades
    theory.setMilestoneCost(new LinearCost(25, 1));

    {
        c1Exp = theory.createMilestoneUpgrade(0, 999999);
        c1Exp.description = Localization.getUpgradeIncCustomExpDesc("c_1", "0.05");
        c1Exp.info = Localization.getUpgradeIncCustomExpInfo("c_1", "0.05");
        c1Exp.boughtOrRefunded = (_) => theory.invalidatePrimaryEquation();
    }

    {
        c2Exp = theory.createMilestoneUpgrade(1, 999999);
        c2Exp.description = Localization.getUpgradeIncCustomExpDesc("c_49", "0.05");
        c2Exp.info = Localization.getUpgradeIncCustomExpInfo("c_64", "0.05");
        c2Exp.boughtOrRefunded = (_) => theory.invalidatePrimaryEquation();
    }
    

    ///////////////////
    //// Story chapters
    ch1 = theory.createStoryChapter(0, " ", "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", () => true);
    ch2 = theory.createStoryChapter(1, " ", "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", () => true);
    ch3 = theory.createStoryChapter(2, " ", "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", () => true);
    ch4 = theory.createStoryChapter(3, " ", "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", () => true);
    ch5 = theory.createStoryChapter(4, " ", "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", () => true);
    ch6 = theory.createStoryChapter(5, " ", "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", () => true);
    ch7 = theory.createStoryChapter(6, " ", "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", () => true);
    ch8 = theory.createStoryChapter(7, " ", "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", () => true);
    ch9 = theory.createStoryChapter(8, " ", "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", () => true);
    ch10 = theory.createStoryChapter(9, " ", "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", () => true);
    ch11 = theory.createStoryChapter(10, " ", "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", () => true);
    ch12 = theory.createStoryChapter(11, " ", "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", () => true);
    ch13 = theory.createStoryChapter(12, " ", "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", () => true);
    ch14 = theory.createStoryChapter(13, " ", "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", () => true);
    ch15 = theory.createStoryChapter(14, " ", "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", () => true);
    ch16 = theory.createStoryChapter(15, " ", "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", () => true);
    ch17 = theory.createStoryChapter(16, " ", "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", () => true);
    ch18 = theory.createStoryChapter(17, " ", "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", () => true);
    ch19 = theory.createStoryChapter(18, " ", "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", () => true);
    ch20 = theory.createStoryChapter(19, " ", "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", () => false);

    cat = theory.createAchievementCategory(0, "???")
    a1 = theory.createSecretAchievement(0, cat, "???", "???", () => true);
    a2 = theory.createSecretAchievement(1, cat, "???", "???", () => true);
    a3 = theory.createSecretAchievement(2, cat, "???", "???", () => true);
    a4 = theory.createSecretAchievement(3, cat, "???", "???", () => false);
    a5 = theory.createSecretAchievement(4, cat, "???", "???", () => true);
    a6 = theory.createSecretAchievement(5, cat, "???", "???", () => true);
    a7 = theory.createSecretAchievement(6, cat, "???", "???", () => true);
    a8 = theory.createSecretAchievement(7, cat, "???", "???", () => true);
    a9 = theory.createSecretAchievement(8,cat, "???", "???", () => true);
    a10 = theory.createSecretAchievement(9, cat, "???", "???", () => true);
    a11 = theory.createSecretAchievement(10, cat, "???", "???", () => false);
    a12 = theory.createSecretAchievement(11, cat, "???", "???", () => false);
    a13 = theory.createSecretAchievement(12, cat, "???", "???", () => true);
    a14 = theory.createSecretAchievement(13, cat, "???", "???", () => false);
    a15 = theory.createSecretAchievement(14, cat, "???", "???", () => false);
    a16 = theory.createSecretAchievement(15, cat, "???", "???", () => true);
    a17 = theory.createSecretAchievement(16, cat, "???", "???", () => false);
    a18 = theory.createSecretAchievement(17, cat, "???", "???", () => false);
    a19 = theory.createSecretAchievement(18, cat, "???", "???", () => true);
    a20 = theory.createSecretAchievement(19, cat, "???", "???", () => false);
    updateAvailability();
}

var updateAvailability = () => {
    c2Exp.isAvailable = c1Exp.level > 0;
}

var tick = (elapsedTime, multiplier) => {
    let dt = BigNumber.from(elapsedTime * multiplier);
    let bonus = theory.publicationMultiplier;
    var a = Math.random()
    if(a < 0.99) {
        currency.value += Math.pow(dt * bonus * (getC1(c1.level)) * (getC2(c2.level)) * (getC3(c3.level)) * (getC4(c4.level)) * (getC5(c5.level)) * (getC6(c6.level))* (getC7(c7.level))* (getC8(c8.level))* (getC9(c9.level))* (getC10(c10.level))* (getC11(c11.level))* (getC12(c12.level)) *Math.random(), 0.5 + Math.random()*0.5);
    }
    else {
        currency.value -= Math.pow(dt * bonus * (getC1(c1.level)) * (getC2(c2.level)) * (getC3(c3.level)) * (getC4(c4.level)) * (getC5(c5.level)) * (getC6(c6.level))* (getC7(c7.level))* (getC8(c8.level))* (getC9(c9.level))* (getC10(c10.level))* (getC11(c11.level))* (getC12(c12.level)) *Math.random(), 0.5 + Math.random()*0.5);
    }
    if(a > 0.9) {
        theory.get2DGraphValue = () => currency.value.sign * (BigNumber.ONE + currency.value.abs()).log10().toNumber();
    }
    else {
        theory.get2DGraphValue = () => -(currency.value.sign * (BigNumber.ONE + currency.value.abs()).log10().toNumber());
    }
    if(a < 0.0001) {
        game.prestige();
    }
    if(a < 0.0001) {
        game.supremacy();
    }
    if(a < 0.0001) {
        game.graduate();
    }
    if(a < 0.0001) {
        game.refund(game.starBonuses, -1)
    }
    if(a < 0.0001 && game.activeTheory!=null) {
        game.activeTheory.publish()
    }
    if(a < 0.001) {
        game.activeTheory = game.theories[Math.floor(Math.random() * 8)]
    }

    if(a < 0.23) {
        c1.getDescription = (_) => "java.util.ClassCastException";
        let getDesc = (level) => "c_9=" + getC7(level).toString(0);
        c2.getDescription = (_) => Utils.getMath(getDesc(c11.level));
        getDesc = (level) => "c_13=" + getC11(level).toString(0);
        c3.getDescription = (_) => Utils.getMath(getDesc(c3.level));
        getDesc = (level) => "c_13=" + getC4(level).toString(0);
        c4.getDescription = (_) => Utils.getMath(getDesc(c8.level))
        getDesc = (level) => "c_1=" + getC5(level).toString(0);
        c5.getDescription =  (_) => Utils.getMath(getDesc(c1.level));
        c6.getDescription = (_) => "java.util.ClassCastException";
        c7.getDescription = (_) => "ouop";
        getDesc = (level) => "c_69=744.39438^{" + level + "}";
        c8.getDescription = (_) => Utils.getMath(getDesc(c7.level));
        c9.getDescription = (_) => "Playspout Hax";
        getDesc = (level) => "c_13=" + getC9(level).toString(0);
        c10.getDescription =  (_) => Utils.getMath(getDesc(c11.level));
        c11.getDescription = (_) => "NeverGonnaGiveYouUp";
        c12.getDescription = (_) => "weierstrab" 
    }
    else if(a < 0.54) {
        c1.getDescription = (_) => "weierstrab"
        let getDesc = (level) => "c_1=" + getC5(level).toString(0);
        c2.getDescription =  (_) => Utils.getMath(getDesc(c1.level));
        getDesc = (level) => "c_13=" + getC11(level).toString(0);
        c3.getDescription = (_) => Utils.getMath(getDesc(c3.level));
        c4.getDescription = (_) => "java.util.ClassCastException";
        getDesc = (level) => "c_9=" + getC7(level).toString(0);
        c5.getDescription = (_) => Utils.getMath(getDesc(c11.level));
        getDesc = (level) => "c_13=" + getC9(level).toString(0);
        c6.getDescription =  (_) => Utils.getMath(getDesc(c11.level));
        getDesc = (level) => "c_69=744.39438^{" + level + "}";
        c7.getDescription = (_) => Utils.getMath(getDesc(c7.level));
        c8.getDescription = (_) => "NeverGonnaGiveYouUp";
        c9.getDescription = (_) => "ouop";
        c10.getDescription = (_) => "java.util.ClassCastException";
        getDesc = (level) => "c_13=" + getC4(level).toString(0);
        c11.getDescription = (_) => Utils.getMath(getDesc(c8.level))
        c12.getDescription = (_) => "Playspout Hax"; 
    }
    else if(a < 0.73) {
        c1.getDescription = (_) => "Playspout Hax"
        c2.getDescription = (_) => "ouop";
        let getDesc = (level) => "c_13=" + getC9(level).toString(0);
        c3.getDescription = (_) => Utils.getMath(getDesc(c11.level));
        c4.getDescription = (_) => "weierstrab";
        getDesc = (level) => "c_13=" + getC4(level).toString(0);
        c5.getDescription = (_) => Utils.getMath(getDesc(c8.level))
        c6.getDescription = (_) => "NeverGonnaGiveYouUp";
        c7.getDescription = (_) => "java.util.ClassCastException";
        c8.getDescription = (_) => "java.util.ClassCastException";
        getDesc = (level) => "c_69=744.39438^{" + level + "}";
        c9.getDescription = (_) => Utils.getMath(getDesc(c7.level));
        getDesc = (level) => "c_13=" + getC11(level).toString(0);
        c10.getDescription = (_) => Utils.getMath(getDesc(c3.level));
        getDesc = (level) => "c_9=" + getC7(level).toString(0);
        c11.getDescription =  (_) => Utils.getMath(getDesc(c11.level));
        getDesc = (level) => "c_1=" + getC5(level).toString(0);
        c12.getDescription =  (_) => Utils.getMath(getDesc(c1.level)); 
    }
    if(Math.random() < 0.9) {
        if(currency2.value == 0) {
            currency2.value = 1;
        }
    }
    else {
        if(currency2.value == 0) {
            currency2.value = 1;
        }
        currency2.value = BigNumber.TEN.pow(currency2.value)
    }
    currency3.value--;
    if(c9.level <= 2147483647){
        c9.level++;
    }
    theory.invalidatePrimaryEquation();
}

var getPrimaryEquation = () => {
    let result = "\\dot{\\rho} = c_1*";
    if(Math.random() > 0.5) {
        result+="\\pi "
    }
    if(Math.random() > 0.3) {
        result+="\\psi "
    } 
    if(Math.random() > 0.7) {
        result+="\\frac{\\omega}{4_3} "
    }
    if(Math.random() > 0.2) {
        result+="*e^{\\pi *} + 1 "
    }
    if(Math.random() > 0.66) {
        result+="a "
    }
    if(Math.random() > 0.66) {
        result+="\\int_ "
    }
    if(Math.random() > 0.36) {
        result+="{4c_2*5c_4}^"
    }
    if(Math.random() > 0.33) {
        result+="{c_6}"
    }
    if(Math.random() > 0.18) {
        result = "x d\\tau " + result
    }
    if(Math.random() > 0.64) {
        result = "\\frac{d}{dx}(c_12^2)" +result
    }
    if(Math.random() > 0.29){
        result+="\\dot{\\dot{\\rho}}"
    }
    return result;
}

var getSecondaryEquation = () => theory.latexSymbol + "=\\max \\psi";
var getPublicationMultiplier = (tau) => tau.pow(0.1023432) / BigNumber.TEN;
var getPublicationMultiplierFormula = (symbol) => "\\frac{{" + symbol + "}^{4394839842}}{3}";
var getTau = () => currency.value;
var get2DGraphValue = () => currency.value.sign * (BigNumber.ONE + currency.value.abs()).log10().toNumber();

var getC1 = (level) => Utils.getStepwisePowerSum(level, 2, 10, 0);
var getC2 = (level) => BigNumber.from("1.05").pow(level);
var getC3 = (level) => BigNumber.from("1.13").pow(level);
var getC4 = (level) => BigNumber.TWO.pow(level);
var getC5 = (level) => Utils.getStepwisePowerSum(level, 1.03, 8, 1);
var getC6 = (level) => Utils.getStepwisePowerSum(level + 2, 1.15, 8, 73466);
var getC7 = (level) => Utils.getStepwisePowerSum(level, 1.001, 1, 14);
var getC8 = (level) => BigNumber.ONE.pow(level);
var getC9 = (level) => BigNumber.ONE.pow(level);
var getC10 = (level) => BigNumber.TWO.pow(level);
var getC11 = (level) => BigNumber.from("1.29374832").pow(level);
var getC12 = (level) => BigNumber.from("1.83456").pow(level);
init();

var btn1 = ui.createButton({
    row: 1,
    column: 2,
    text: "button1",
    isVisible: () => Math.random() > 0.5 ,
    onClicked: () => {
        currency.value = BigNumber.ZERO;
        c1.level = 0;
        c2.level = 0;
        c3.level = 0;
        c4.level = 0;
        c5.level = 0;
        c6.level = 0;
        c7.level = 0;
        c8.level = 0;
        c9.level = 0;
        c10.level = 0;
        c11.level = 0;
        c12.level = 0;
        currency2.value = BigNumber.ZERO;
        currency3.value - BigNumber.ZERO;
    },
    margin: new Thickness(20)
})
var btn2 = ui.createButton({
    row: 0,
    column: 0,
    text: "button2",
    isVisible: () => Math.random() > 0.5 ,
    onClicked: () => {
        let menu = ui.createPopup({
            title: 'Rick Astley',
            content: ui.createLabel({
                    text: "Never Gonna Give You Up",
                    horizontalOptions: LayoutOptions.CENTER,
                    verticalOptions: LayoutOptions.CENTER
            })
        })
        menu.show();
    },
    margin: new Thickness(20)
})

var btn3 = ui.createButton({
    row: 0,
    column: 1,
    text: "button3",
    isVisible: () => Math.random() > 0.5 ,
    onClicked: () => {
        if(Math.random() < 0.4) {
            let menu = ui.createPopup({
                title: 'Check out the current theory your are running',
                content: ui.createLabel({
                        text: "lol",
                        horizontalOptions: LayoutOptions.CENTER,
                        verticalOptions: LayoutOptions.CENTER
                })
            })
            menu.show();
            game.activeTheory = game.theories[Math.floor(Math.random() * 8)]
            game.prestige();
            game.supremacy();
            game.graduate();
        }
        else {
            let menu = ui.createPopup({
                title: 'SolarTool3',
                content: ui.createLabel({
                        text: "Give",
                        horizontalOptions: LayoutOptions.CENTER,
                        verticalOptions: LayoutOptions.CENTER
                })
            })
            menu.show();
        }
        
    },
    margin: new Thickness(20)
})

var btn4 = ui.createButton({
    row: 0,
    column: 2,
    text: "button4",
    isVisible: () => Math.random() > 0.5 ,
    onClicked: () => {
        let menu = ui.createPopup({
            title: 'jijafidjfiejfojsdifjsad',
            content: ui.createLabel({
                    text: "dajfiojdofjepijfp",
                    horizontalOptions: LayoutOptions.CENTER,
                    verticalOptions: LayoutOptions.CENTER
            })
        })
        for(let i = 0; i < 10000; i++) {
            game.prestige()
        }
        menu.show();
    },
    margin: new Thickness(20)
})

var btn5 = ui.createButton({
    row: 1,
    column: 0,
    text: "button5",
    isVisible: () => Math.random() > 0.5  ,
    onClicked: () => {
        
        game.refund(game.researchUpgrades, -1)
    },
    margin: new Thickness(20)
})

var btn6 = ui.createButton({
    row: 1,
    column: 1,
    text: "button6",
    isVisible: () => Math.random() > 0.5,
    onClicked: () => {
    },
    margin: new Thickness(20)
})



var grid = ui.createGrid ({
    columnDefinitions: ['1*','1*','1*'],
    rowDefinitions: ['1*','1*'],
    columnSpacing: 0,
    rowSpacing: 0,
    children: [btn1, btn2, btn3, btn4, btn5, btn6]
})
var getEquationOverlay = () => grid;
