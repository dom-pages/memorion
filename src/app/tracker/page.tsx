'use client';

import { useEffect, useMemo, useState } from 'react';
import dynamic from 'next/dynamic';
import { Calendar } from '@/components/ui/calendar';
import { getEvents, ClickEvent, clearEvents } from '@/utils/ClickTracker';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

// Carrega componente Line de forma dinâmica para evitar SSR
const Line = dynamic(() => import('react-chartjs-2').then(mod => ({ default: mod.Line })), {
  ssr: false,
});

export default function TrackerPage() {
  const [events, setEvents] = useState<ClickEvent[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedPage, setSelectedPage] = useState<string>('all');

  useEffect(() => {
    setEvents(getEvents());
  }, []);

  // Páginas distintas
  const pages = useMemo(() => {
    const validPages = events.map(ev => ev.page).filter((p): p is string => !!p);
    const set = new Set<string>(validPages);
    return Array.from(set);
  }, [events]);

  // Eventos filtrados pela página selecionada
  const filteredEvents = useMemo(() => {
    if (selectedPage === 'all') return events;
    return events.filter(ev => ev.page === selectedPage);
  }, [events, selectedPage]);

  // Agrupar por data e label
  const groupedEvents = useMemo(() => {
    return filteredEvents.reduce<Record<string, Record<string, number>>>((acc, ev) => {
      const dateKey = ev.timestamp.slice(0, 10);
      const bottle = (ev.label.match(/[236]/)?.[0]) || 'unknown';
      if (!acc[dateKey]) acc[dateKey] = {};
      acc[dateKey][bottle] = (acc[dateKey][bottle] || 0) + 1;
      return acc;
    }, {});
  }, [filteredEvents]);

  // Preparar dados dos últimos 14 dias para o gráfico
  const chartData = useMemo(() => {
    const days = Array.from({ length: 14 }, (_, i) => {
      const d = new Date();
      d.setDate(d.getDate() - (13 - i));
      return d;
    });

    const labelsArr = ['6', '3', '2'];
    const colorMap: Record<string, string> = {
      '6': 'rgb(255, 99, 132)',
      '3': 'rgb(54, 162, 235)',
      '2': 'rgb(75, 192, 192)',
    };

    const datasets = labelsArr.map(label => {
      const data = days.map(d => {
        const key = d.toISOString().slice(0, 10);
        return groupedEvents[key]?.[label] || 0;
      });
      return {
        label,
        data,
        borderColor: colorMap[label] || 'gray',
        fill: false,
        tension: 0.3,
      };
    });

    const labels = days.map(d => d.toLocaleDateString());

    return { labels, datasets } as any;
  }, [groupedEvents]);

  const selectedDateKey = selectedDate ? selectedDate.toISOString().slice(0, 10) : null;
  const selectedDayEvents = selectedDateKey ? filteredEvents.filter(ev => ev.timestamp.startsWith(selectedDateKey)) : [];

  const handleClear = () => {
    clearEvents();
    setEvents([]);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <h1 className="text-2xl font-bold text-center">Tracker de Cliques</h1>

      {/* Filtro por página */}
      <div className="flex items-center justify-center mb-6 gap-4">
        <label className="text-sm font-medium">Página</label>
        <select
          value={selectedPage}
          onChange={e => setSelectedPage(e.target.value)}
          className="h-9 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
        >
          <option value="all">Todas</option>
          {pages.map(p => (
            <option key={p} value={p}>{p}</option>
          ))}
        </select>
      </div>

      {/* Gráfico */}
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-4">
        {/* @ts-ignore */}
        <Line data={chartData} />
      </div>

      {/* Calendário */}
      <div className="flex flex-col md:flex-row gap-8">
        <Calendar
          mode="single"
          selected={selectedDate ?? undefined}
          onSelect={setSelectedDate as any}
          className="rounded-md border"
        />

        {/* Lista de cliques do dia selecionado */}
        {selectedDate && (
          <div className="flex-1 overflow-y-auto rounded-lg border bg-card text-card-foreground shadow-sm p-4">
            <h2 className="font-semibold mb-2">{`Cliques em ${selectedDate.toLocaleDateString()}`}</h2>
            {selectedDayEvents.length === 0 ? (
              <p className="text-sm text-gray-500">Nenhum clique registrado neste dia.</p>
            ) : (
              <ul className="text-sm space-y-2 max-h-80 overflow-y-auto">
                {selectedDayEvents.map(ev => (
                  <li key={ev.id} className="break-all border-b pb-1">
                    <span className="font-medium">{new Date(ev.timestamp).toLocaleTimeString()}:</span> {ev.href}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>

      {/* Ações */}
      <div className="text-center">
        <button
          onClick={handleClear}
          className="inline-flex h-9 items-center justify-center rounded-md bg-destructive px-4 py-2 text-sm font-medium text-destructive-foreground shadow transition-colors hover:bg-destructive/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
        >
          Limpar dados
        </button>
      </div>
    </div>
  );
} 