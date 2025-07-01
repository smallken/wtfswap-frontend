import Head from 'next/head';

export default function Haha() {
  return (
    <>
      <Head>
        <title>哈哈页面</title>
        <meta name="description" content="这是一个搞笑的页面" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      {/* 添加实际渲染内容 */}
      <div 
        style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          height: '100vh', 
          flexDirection: 'column',
          backgroundColor: '#f0f9ff'
        }}
      >
        <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>😄 哈哈哈 😂</h1>
        <p style={{ fontSize: '1.5rem', textAlign: 'center' }}>
          恭喜你成功访问了这个搞笑页面！
        </p>
        
        <div style={{ marginTop: '40px', display: 'flex', gap: '20px' }}>
          <button 
            style={{
              padding: '10px 20px',
              fontSize: '1.2rem',
              backgroundColor: '#3b82f6',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
            onClick={() => alert('这是一个有趣的按钮！')}
          >
            点我开心
          </button>
          
          <button 
            style={{
              padding: '10px 20px',
              fontSize: '1.2rem',
              backgroundColor: '#10b981',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
            onClick={() => alert('🎉 祝你天天开心！')}
          >
            再点我一次
          </button>
        </div>
      </div>
    </>
  )
}