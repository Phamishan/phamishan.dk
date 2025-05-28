"use client";

export const goTo = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    const btn = event.currentTarget;

    const carousel = btn.parentElement!.parentElement!.parentElement!;

    const href = btn.getAttribute("href")!;
    const target = carousel.querySelector<HTMLDivElement>(href)!;
    const left = target.offsetLeft;
    carousel.scrollTo({ left: left });
};
