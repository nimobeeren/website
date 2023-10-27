import { expect, test } from "@playwright/test";

test.skip("can be reached from the home page", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: /projects/i }).click();
  expect(new URL(page.url()).pathname).toBe("/projects");
});

test("projects are shown", async ({ page }) => {
  await page.goto("/projects");

  await expect(page.getByRole("heading", { name: /projects/i })).toBeVisible();
  await expect(
    page
      .getByRole("list", { name: /projects/i })
      .filter({ has: page.getByRole("article") })
  ).toBeVisible();
});

test("filtering decreases the number of projects shown", async ({ page }) => {
  await page.goto("/projects");

  const initialNumberOfProjects = await page
    .getByRole("list", { name: /projects/i })
    .getByRole("article")
    .count();

  await page
    .getByLabel(/filters/i)
    .getByText(/paper/i)
    .click();

  const filteredNumberOfProjects = await page
    .getByRole("list", { name: /projects/i })
    .getByRole("article")
    .count();

  expect(filteredNumberOfProjects).toBeLessThan(initialNumberOfProjects);
});
