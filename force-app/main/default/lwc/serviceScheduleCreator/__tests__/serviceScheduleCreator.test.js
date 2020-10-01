import { createElement } from "lwc";
import ServiceScheduleCreator from "c/serviceScheduleCreator";

describe("c-service-schedule-creator", () => {
    let element;

    afterEach(global.clearDOM);

    beforeEach(() => {
        element = createElement("c-service-schedule-creator", {
            is: ServiceScheduleCreator,
        });
    });

    it("modal is not displayed and element is accessible", () => {
        document.body.appendChild(element);

        return global.flushPromises().then(async () => {
            const modal = element.shadowRoot.querySelector("c-modal");
            // Modal will only display after data is loaded
            expect(modal).toBe(null);

            await expect(element).toBeAccessible();
        });
    });
});