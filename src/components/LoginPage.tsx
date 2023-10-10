import { FormEvent, useState } from "react";
import { useLogin } from '../context/loginContext'

export function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useLogin()

  const handleSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    try {
      await login(email, password)
    } catch (err) {
      alert("Email ou senha");
      console.error("Alguma coisa deu merda parceiro", err);
      return [];
    }
  };
  return (
    <div className="hero min-h-2/4 bg-white/50 rounded-md shadow-md">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Bem-vindo(a)! Faça login para acessar sua conta.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-zinc-200">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black/70">Email</span>
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(ev) => setEmail(ev.target.value)}
                placeholder="email"
                className="input input-ghost"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black/70">Password</span>
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(ev) => setPassword(ev.target.value)}
                placeholder="password"
                className="input input-ghost"
                required
              />
              <label className="label">
                <a
                  href="#"
                  className="label-text-alt link link-hover text-black/60"
                >
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-accent">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}