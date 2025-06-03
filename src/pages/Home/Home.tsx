const Home = () => {
  return (
    <div>
      <h4 className="mb-2 font-medium">
        User credentials with different roles
      </h4>
      <div className="mb-6">
        <h5>Admin</h5>
        <div className="flex gap-x-2">
          <span>Username:</span>
          <span className="text-muted-foreground">emilys</span>
        </div>
        <div className="flex gap-x-2">
          <span>Password:</span>
          <span className="text-muted-foreground">emilyspass</span>
        </div>
      </div>

      <div>
        <h5>User</h5>
        <div className="flex gap-x-2">
          <span>Username:</span>
          <span className="text-muted-foreground">danielc</span>
        </div>
        <div className="flex gap-x-2">
          <span>Password:</span>
          <span className="text-muted-foreground">danielcpass</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
