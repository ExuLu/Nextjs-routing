export default function DashboardLayout(props: {
  children: React.ReactNode;
  notifications: React.ReactNode;
  user: React.ReactNode;
  revenue: React.ReactNode;
  login: React.ReactNode;
}) {
  const isLogged = true;
  return isLogged ? (
    <div>
      <div>{props.children}</div>
      <div style={{ display: 'flex' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div>{props.revenue}</div>
          <div>{props.user}</div>
        </div>
        <div style={{ display: 'flex', flex: '1' }}>{props.notifications}</div>
      </div>
    </div>
  ) : (
    props.login
  );
}
