import useScript from 'react-script-hook';
import React from 'react';
export const ScriptDemo = () => {
  const [loading, error] = useScript({ src: 'https://js.stripe.com/v3/' ,  onload: () => console.log('Script loaded!') });
  if (loading) return <h3>Loading Stripe API...</h3>;
  if (error) return <h3>Failed to load Stripe API: {error.message}</h3>;
  return <div>我是2312</div>
}