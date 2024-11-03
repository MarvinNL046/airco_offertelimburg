"use client";

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    naam: '',
    email: '',
    telefoon: '',
    bericht: '',
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ naam: '', email: '', telefoon: '', bericht: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div>
          <Input
            name="naam"
            placeholder="Uw naam"
            value={formData.naam}
            onChange={handleChange}
            required
            className="w-full"
          />
        </div>
        <div>
          <Input
            type="email"
            name="email"
            placeholder="Uw e-mailadres"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full"
          />
        </div>
        <div>
          <Input
            type="tel"
            name="telefoon"
            placeholder="Uw telefoonnummer"
            value={formData.telefoon}
            onChange={handleChange}
            required
            className="w-full"
          />
        </div>
        <div>
          <Textarea
            name="bericht"
            placeholder="Uw bericht"
            value={formData.bericht}
            onChange={handleChange}
            required
            className="w-full min-h-[150px]"
          />
        </div>
      </div>

      <Button
        type="submit"
        disabled={status === 'sending'}
        className="w-full"
      >
        {status === 'sending' ? (
          'Verzenden...'
        ) : (
          <>
            <Send className="mr-2 h-4 w-4" /> Verstuur Bericht
          </>
        )}
      </Button>

      {status === 'success' && (
        <p className="text-green-600 text-center">
          Uw bericht is succesvol verzonden. We nemen zo spoedig mogelijk contact met u op.
        </p>
      )}
      {status === 'error' && (
        <p className="text-red-600 text-center">
          Er is iets misgegaan. Probeer het later opnieuw of neem telefonisch contact op.
        </p>
      )}
    </form>
  );
}