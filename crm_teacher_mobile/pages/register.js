export default function Register() {
  return (
    <div style={{ padding: 20 }}>
      <h2>Регистрация</h2>
      <form>
        <input placeholder="Имя" /><br />
        <input placeholder="Email" /><br />
        <button type="submit">Зарегистрироваться</button>
      </form>
    </div>
  );
}
