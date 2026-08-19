'use client';

import React, { useState } from 'react';
import { Gift, Copy, Check, CreditCard } from 'lucide-react';
import { copyToClipboard } from '../utils/helpers';

export default function DigitalGift() {
  const [copiedKey, setCopiedKey] = useState(null);

  const bankAccounts = [
    {
      id: 'bca_fatimah',
      bankName: 'Bank BCA',
      accountNumber: '7361275059',
      accountHolder: 'Fatimah Azzahra',
    },
    {
      id: 'bca_rakhasatya',
      bankName: 'Bank BCA',
      accountNumber: '5271655062',
      accountHolder: 'Rakhasatya Mahardhika Pangestu',
    },
  ];

  const handleCopy = async (text, key) => {
    const success = await copyToClipboard(text);
    if (success) {
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 2500);
    }
  };

  return (
    <section className="py-20 px-4 bg-ivory-100 relative">
      
      <div className="max-w-4xl mx-auto space-y-12 text-center">
        
        {/* Header */}
        <div className="space-y-3">
          <div className="inline-flex p-3 rounded-full bg-maroon-800/10 text-maroon-800">
            <Gift size={26} />
          </div>
          <h2 className="font-script text-4xl sm:text-6xl text-maroon-900">
            Amplop Digital & Hadiah
          </h2>
          <p className="font-serif text-stone-600 max-w-lg mx-auto">
            Doa restu Anda merupakan karunia terindah bagi kami. Namun jika Anda ingin memberi hadiah, Anda dapat menggunakan amplop digital di bawah ini:
          </p>
        </div>

        {/* Bank Account Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {bankAccounts.map((account) => (
            <div
              key={account.id}
              className="glass-card p-6 sm:p-8 rounded-3xl border border-gold-500/30 flex flex-col justify-between space-y-6 shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <CreditCard size={24} className="text-maroon-800" />
                  <span className="font-serif font-bold text-lg text-maroon-900">{account.bankName}</span>
                </div>
                <span className="text-xs uppercase font-serif px-2.5 py-1 rounded-full bg-maroon-800/10 text-maroon-800 font-semibold">
                  Transfer Bank
                </span>
              </div>

              <div className="text-left space-y-1">
                <p className="text-xs font-serif uppercase tracking-wider text-stone-500">Nomor Rekening</p>
                <p className="font-mono text-2xl sm:text-3xl font-bold text-maroon-900 tracking-wider">
                  {account.accountNumber}
                </p>
                <p className="text-sm font-serif text-stone-700 pt-1">
                  a.n. <span className="font-semibold">{account.accountHolder}</span>
                </p>
              </div>

              <button
                onClick={() => handleCopy(account.accountNumber, account.id)}
                className="w-full py-3 rounded-xl bg-maroon-800 hover:bg-maroon-900 text-white font-serif text-sm font-semibold transition-all flex items-center justify-center gap-2 shadow"
              >
                {copiedKey === account.id ? (
                  <>
                    <Check size={16} className="text-emerald-300" />
                    <span>Nomor Rekening Berhasil Disalin!</span>
                  </>
                ) : (
                  <>
                    <Copy size={16} />
                    <span>Salin Nomor Rekening</span>
                  </>
                )}
              </button>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}
