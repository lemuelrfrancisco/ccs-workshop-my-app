import {
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
} from 'react';

const ThemeContext = createContext(null);

export default function Login() {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={theme}>
      <Form />
      <label>
        <input
          type='checkbox'
          checked={theme === 'dark'}
          onChange={(e) => {
            setTheme(e.target.checked ? 'dark' : 'light');
          }}
        />
        Use dark mode
      </label>
    </ThemeContext.Provider>
  );
}

function Form({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const usernameRef = useRef();
  const passwordRef = useRef();

  const handleLogin = () => {
    setIsLoggedIn(true);
    setUsername(usernameRef.current.value);
    setPassword(passwordRef.current.value);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
  };
  return (
    <Panel title={`Welcome ${username}`}>
      {!isLoggedIn ? (
        <>
          <div style={{ display: 'block', marginBottom: 5 }}>
            <span>Username:</span>
            <input type='text' ref={usernameRef} />
          </div>
          <div style={{ display: 'block', marginBottom: 5 }}>
            <span>Password:</span>
            <input type='password' ref={passwordRef} />
          </div>
          <Button>Sign up</Button>
          <Button onClick={handleLogin}>Log in</Button>
        </>
      ) : (
        <>
          <p>Password:{password}</p>
          <Button onClick={handleLogout}>Log out</Button>
        </>
      )}
    </Panel>
  );
}

function Panel({ title, children }) {
  const theme = useContext(ThemeContext);
  const className = 'panel-' + theme;
  return (
    <section className={className}>
      <h1>{title}</h1>
      {children}
    </section>
  );
}

function Button({ children, onClick }) {
  const theme = useContext(ThemeContext);
  const className = 'button-' + theme;
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}

