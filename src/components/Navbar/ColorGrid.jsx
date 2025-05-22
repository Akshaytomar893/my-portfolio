import React from 'react';

const ColorGrid = ({tooltipRef}) => {
  const colors = ['#FF5733', '#33FF57', '#3357FF', '#F39C12', '#8E44AD', '#1ABC9C', '#E74C3C', '#2C3E50', '#FFC300'];

  return (
    <div style={styles.grid}>
      {colors.map((color, index) => (
        <div key={index} style={{ ...styles.bubble, backgroundColor: color }} onClick={()=>{
            document.documentElement.style.setProperty('--theme-color', color);
            tooltipRef.current?.close();
        }}/>
      ))}
    </div>
  );
};

const styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '12px',
    padding: '12px',
  },
  bubble: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: '#000',
  },
};

export default ColorGrid;
