// src/utils/ClickTracker.ts
'use client';

/*
  Utilitário de rastreamento de cliques 100% client-side.
  Armazena cada clique em localStorage, permitindo visualização posterior
  na página /tracker.
*/

export interface ClickEvent {
  id: string;
  href: string;
  page: string; // pathname onde o clique ocorreu
  label: string; // identificador (ex: '6-bottle')
  utms: Record<string, string>;
  timestamp: string; // ISO string
}

const STORAGE_KEY = 'click_events';
const WEBHOOK =
  'https://script.google.com/macros/s/AKfycbwGP1EEKtGv1I02_y0U9bqjuqQ3K93Xx0A0ZQkTMz2G9tQ063Z6L-ch6E5Y6tchXdqF/exec';  // <-- NOVO webhook

function safeParse<T>(value: string | null, fallback: T): T {
  try {
    return value ? (JSON.parse(value) as T) : fallback;
  } catch {
    return fallback;
  }
}

export function trackClick(href: string, label: string = 'unknown') {
  if (typeof window === 'undefined') return; // garante execução apenas no client

  const url = new URL(window.location.href);
  const utms: Record<string, string> = {};

  url.searchParams.forEach((value, key) => {
    if (key.startsWith('utm_')) {
      utms[key] = value;
    }
  });

  const current: ClickEvent[] = safeParse<ClickEvent[]>(
    localStorage.getItem(STORAGE_KEY),
    []
  );

  current.push({
    id: crypto.randomUUID(),
    href,
    page: window.location.pathname,
    label,
    utms,
    timestamp: new Date().toISOString(),
  });

  localStorage.setItem(STORAGE_KEY, JSON.stringify(current));

  // Envia para Google Sheets ---------------------------------
  const params = new URLSearchParams({
    page: window.location.pathname,
    label,
    url: window.location.href          // grava a URL da página antes do clique
  });

  fetch(`${WEBHOOK}?${params.toString()}`, { mode: 'no-cors' }).catch(() => {});
}

export function getEvents(): ClickEvent[] {
  if (typeof window === 'undefined') return [];
  return safeParse<ClickEvent[]>(localStorage.getItem(STORAGE_KEY), []);
}

export function clearEvents() {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(STORAGE_KEY);
} 