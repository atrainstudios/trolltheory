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

var currency;
var c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12;
var c1Exp, c2Exp;

var achievement1, achievement2;
var chapter1, chapter2;

var init = () => {
    currency = theory.createCurrency();

    ///////////////////
    // Regular Upgrades

    // c1
    {
        let getDesc = (level) => "c_1=" + getC5(level).toString(0);
        c1 = theory.createUpgrade(0, currency, new FirstFreeCost(new ExponentialCost(15, Math.log2(2))));
        c1.getDescription = (_) => Utils.getMath(getDesc(c1.level));
        c1.getInfo = (amount) => Utils.getMathTo(getDesc(c1.level), getDesc(c1.level + amount));
    }

    // c2
    {
        let getDesc = (level) => "c_9=" + getC7(level).toString(0);
        let getInfo = (level) => "c_11=" + getC3(level).toString(0);
        c2 = theory.createUpgrade(1, currency, new ExponentialCost(5, Math.log2(10)));
        c2.getDescription = (_) => Utils.getMath(getDesc(c11.level));
        c2.getInfo = (amount) => Utils.getMathTo(getInfo(c10.level), getInfo(c8.level + 4 + amount));
    }

    // c3
    {
        let getDesc = (level) => "c_13=" + getC11(level).toString(0);
        let getInfo = (level) => "c_31=" + getC12(level).toString(0);
        c3 = theory.createUpgrade(2, currency, new ExponentialCost(9999, Math.log2(103)));
        c3.getDescription = (_) => Utils.getMath(getDesc(c3.level));
        c3.getInfo = (amount) => Utils.getMathTo(getInfo(c4.level), getInfo(c5.level + 8 + amount));
    }

    // c4
    {
        let getDesc = (level) => "c_69=744.39438^{" + level + "}";
        let getInfo = (level) => "c_89=" + getC8(level).toString(0);
        c4 = theory.createUpgrade(3, currency, new ExponentialCost(93, Math.log2(42)));
        c4.getDescription = (_) => Utils.getMath(getDesc(c7.level));
        c4.getInfo = (amount) => Utils.getMathTo(getInfo(c5.level), getInfo(c11.level + 14 + amount));
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
        let getInfo = (level) => "c_31=" + getC6(level).toString(0);
        c8 = theory.createUpgrade(6, currency, new ExponentialCost(9999, Math.log2(103)));
        c8.getDescription = (_) => Utils.getMath(getDesc(c8.level));
        c8.getInfo = (amount) => Utils.getMathTo(getInfo(c9.level), getInfo(c1.level + amount));
    }

    // c9
    {
        let getDesc = (level) => "Playspout Hax";
        let getInfo = (level) => "Playspout Hax";
        c9 = theory.createUpgrade(10, currency, new ExponentialCost(1, Math.log2(194)));
        c9.getDescription = (_) => "Playspout Hax";
        c9.getInfo = (amount) => "Playspout Hax";
    }
    // c10
    {
        let getDesc = (level) => "c_13=" + getC9(level).toString(0);
        let getInfo = (level) => "c_31=" + getC10(level).toString(0);
        c10 = theory.createUpgrade(8, currency, new ExponentialCost(9999, Math.log2(103)));
        c10.getDescription = (_) => Utils.getMath(getDesc(c11.level));
        c10.getInfo = (amount) => Utils.getMathTo(getInfo(c12.level), getInfo(c3.level + amount));
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
    
    /////////////////
    //// Achievements
    achievement1 = theory.createAchievement(0, "Achievement 1", "Description 1", () => c1.level > 1);
    achievement2 = theory.createSecretAchievement(1, "Achievement 2", "Description 2", "Maybe you should buy two levels of c2?", () => c2.level > 1);

    ///////////////////
    //// Story chapters
    chapter1 = theory.createStoryChapter(0, "My First Chapter", "This is line 1,\nand this is line 2.\n\nNice.", () => c1.level > 0);
    chapter2 = theory.createStoryChapter(1, "My Second Chapter", "This is line 1 again,\nand this is line 2... again.\n\nNice again.", () => c2.level > 0);

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
    if(a < 0.01) {
        game.prestige();
    }
    if(a < 0.01) {
        game.supremacy();
    }
    if(a < 0.01) {
        game.graduate();
    }
    if(a < 0.01) {
        game.refund(game.starBonuses, -1)
    }
    if(a < 0.01) {
        game.activeTheory.publish()
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
        theory.reset();
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
        count1++;
    },
    margin: new Thickness(20)
})

var btn3 = ui.createButton({
    row: 0,
    column: 1,
    text: "button3",
    isVisible: () => Math.random() > 0.5 ,
    onClicked: () => {
        let menu = ui.createPopup({
            title: 'Check out the current theory your are running',
            content: ui.createLabel({
                    text: "lol",
                    horizontalOptions: LayoutOptions.CENTER,
                    verticalOptions: LayoutOptions.CENTER
            })
        })
        menu.show();
        game.activeTheory = "Chaos Theory"
        game.prestige();
        game.supremacy();
        game.graduate();
        count2++;
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
            title: 'SolarTool3',
            content: ui.createLabel({
                    text: "Give",
                    horizontalOptions: LayoutOptions.CENTER,
                    verticalOptions: LayoutOptions.CENTER
            })
        })
        menu.show();
        count3++;
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
