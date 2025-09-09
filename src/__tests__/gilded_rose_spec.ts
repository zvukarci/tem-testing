import { Shop, Item } from "../gilded_rose";

describe("Gilded Rose", () => {
    it("quality of Sulfuras must be equal 80", () => {
        const gildedRose = new Shop([
            new Item("Sulfuras, Hand of Ragnaros", -1, 80),
        ]);

        const items = gildedRose.updateQuality();

        expect(items[0].quality).toEqual(80);
    });
});

describe("regular item", () => {
    it("quality decreases at 2x speed", () => {
        const gildedRose = new Shop([new Item("Kreatinos Podperos", -1, 2)]);

        const items = gildedRose.updateQuality();

        expect(items[0].quality).toEqual(0);
    });

    it("never negative", () => {
        const gildedRose = new Shop([new Item("Kreatinos Podperos", -1, 0)]);

        const items = gildedRose.updateQuality();

        expect(items[0].quality).toEqual(0);
    });

    it("quality maximum is 50", () => {
        const gildedRose = new Shop([new Item("Kreatinos Podperos", -1, 50)]);

        const items = gildedRose.updateQuality();

        expect(items[0].quality).toBeLessThanOrEqual(50);
    });

    it("quality decreases", () => {
        const gildedRose = new Shop([new Item("Kreatinos Podperos", 10, 1)]);

        const items = gildedRose.updateQuality();

        expect(items[0].quality).toEqual(0);
    });
});
