import { ArrowLeft, Trash2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { deleteUser, fetchUser } from '@/services/admin-api';
import type { UserDetail } from '@/types/admin';

export function UserDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [user, setUser] = useState<UserDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);

  useEffect(() => {
    if (!id) return;
    fetchUser(id)
      .then(setUser)
      .catch(() => setError('User not found or failed to load'))
      .finally(() => setLoading(false));
  }, [id]);

  const handleDelete = async () => {
    if (!id || !confirmDelete) return;
    setDeleting(true);
    setError('');
    try {
      await deleteUser(id);
      navigate('/users');
    } catch (err: unknown) {
      const msg =
        axiosMessage(err) ?? 'Failed to delete user. They may be the last admin.';
      setError(msg);
      setConfirmDelete(false);
    } finally {
      setDeleting(false);
    }
  };

  if (loading) {
    return <p className="text-muted-foreground">Loading user...</p>;
  }

  if (!user) {
    return (
      <div className="space-y-4">
        <Link to="/users" className="inline-flex items-center gap-2 text-sm text-primary">
          <ArrowLeft className="h-4 w-4" />
          Back to users
        </Link>
        <p className="text-red-400">{error || 'User not found'}</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <Link
        to="/users"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to users
      </Link>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/20 text-xl font-bold text-primary">
            {user.firstName[0]}
            {user.lastName[0]}
          </div>
          <div>
            <h1 className="text-2xl font-bold">
              {user.firstName} {user.lastName}
            </h1>
            <p className="text-muted-foreground">{user.email}</p>
            <div className="mt-2 flex flex-wrap gap-2">
              <span className="inline-block rounded-full bg-primary/15 px-2.5 py-0.5 text-xs font-medium capitalize text-primary">
                {user.role.name}
              </span>
              {user.suspended ? (
                <span className="rounded-full bg-red-500/15 px-2.5 py-0.5 text-xs font-medium text-red-300">
                  Suspended
                </span>
              ) : null}
              <span
                className={
                  user.verified
                    ? 'rounded-full bg-emerald-500/15 px-2.5 py-0.5 text-xs font-medium text-emerald-300'
                    : 'rounded-full bg-amber-500/15 px-2.5 py-0.5 text-xs font-medium text-amber-300'
                }
              >
                {user.verified ? 'Verified' : 'Unverified'}
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 sm:items-end">
          {!confirmDelete ? (
            <button
              type="button"
              onClick={() => setConfirmDelete(true)}
              className="inline-flex items-center gap-2 rounded-lg border border-red-500/40 bg-red-500/10 px-4 py-2 text-sm font-medium text-red-300 hover:bg-red-500/20"
            >
              <Trash2 className="h-4 w-4" />
              Delete user
            </button>
          ) : (
            <div className="flex flex-col gap-2 rounded-lg border border-red-500/40 bg-red-500/10 p-4">
              <p className="text-sm text-red-200">
                Delete {user.firstName} {user.lastName}? This cannot be undone.
              </p>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setConfirmDelete(false)}
                  className="rounded-lg border border-border px-3 py-1.5 text-sm hover:bg-muted"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleDelete}
                  disabled={deleting}
                  className="rounded-lg bg-red-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-red-700 disabled:opacity-50"
                >
                  {deleting ? 'Deleting...' : 'Confirm delete'}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {error ? (
        <div className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
          {error}
        </div>
      ) : null}

      <div className="grid gap-4 md:grid-cols-2">
        <DetailCard title="Account">
          <DetailRow label="User ID" value={user.id} mono />
          <DetailRow label="Email" value={user.email} />
          <DetailRow label="Verified" value={user.verified ? 'Yes' : 'No'} />
          <DetailRow label="Suspended" value={user.suspended ? 'Yes' : 'No'} />
          <DetailRow label="Created" value={new Date(user.createdAt).toLocaleString()} />
          <DetailRow label="Updated" value={new Date(user.updatedAt).toLocaleString()} />
        </DetailCard>

        <DetailCard title="Organization">
          <DetailRow label="Name" value={user.organization.name} />
          <DetailRow label="Org ID" value={user.organization.id} mono />
        </DetailCard>

        <DetailCard title="Activity">
          <DetailRow label="Time entries" value={String(user._count.timeEntries)} />
          <DetailRow label="Timesheets" value={String(user._count.timesheets)} />
          <DetailRow label="Assigned tasks" value={String(user._count.assignedTasks)} />
        </DetailCard>

        <DetailCard title="Profile">
          <DetailRow label="Avatar" value={user.avatarUrl ?? '—'} />
          <DetailRow label="Role ID" value={user.role.id} mono />
        </DetailCard>
      </div>
    </div>
  );
}

function DetailCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-border bg-card p-5">
      <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
        {title}
      </h2>
      <dl className="space-y-3">{children}</dl>
    </div>
  );
}

function DetailRow({
  label,
  value,
  mono,
}: {
  label: string;
  value: string;
  mono?: boolean;
}) {
  return (
    <div className="flex flex-col gap-0.5 sm:flex-row sm:justify-between sm:gap-4">
      <dt className="text-sm text-muted-foreground">{label}</dt>
      <dd className={`text-sm font-medium ${mono ? 'font-mono text-xs break-all' : ''}`}>
        {value}
      </dd>
    </div>
  );
}

function axiosMessage(err: unknown): string | undefined {
  if (typeof err === 'object' && err !== null && 'response' in err) {
    const res = (err as { response?: { data?: { message?: string } } }).response;
    return res?.data?.message;
  }
  return undefined;
}
