import { expect, test } from "@playwright/test";

test("the most important things are immediately visible", async ({ page }) => {
  await page.goto("/");

  await expect(
    page.getByRole("heading", { name: "Nimo Beeren" })
  ).toBeInViewport();
  await expect(page.getByAltText("Nimo").first()).toBeInViewport();
  await expect(page.getByLabel("socials").first()).toBeInViewport();
});

test("other things are visible", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("region", { name: /projects/i })).toBeVisible();
  await expect(page.getByRole("region", { name: /about/i })).toBeVisible();
});
