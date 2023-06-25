function BaseLayout() {
  return (
    <div className="flex">
      <div className="h-screen w-16 overflow-y-auto bg-slate-950">guilds</div>
      <div className="h-screen w-64 overflow-y-auto bg-slate-900">channels</div>
      <div className="h-screen w-96 flex-auto overflow-y-auto">messages</div>
      <div className="h-screen w-64 overflow-y-auto bg-slate-900">members</div>
    </div>
  );
}

export default BaseLayout;
