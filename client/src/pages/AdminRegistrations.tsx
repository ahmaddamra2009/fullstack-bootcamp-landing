import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";
import { Download, LogOut, Trash2, Users, FileSpreadsheet, FileText } from "lucide-react";

const experienceLabels: Record<string, string> = {
  beginner: "مبتدئ",
  intermediate: "متوسط",
  advanced: "متقدم",
};

export default function AdminRegistrations() {
  const [, setLocation] = useLocation();
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("adminToken");
    if (!storedToken) {
      setLocation("/admin");
      return;
    }
    setToken(storedToken);
  }, [setLocation]);

  const { data: registrations, isLoading, refetch } = trpc.registration.list.useQuery(
    { token: token || "" },
    { enabled: !!token }
  );

  const { data: count } = trpc.registration.count.useQuery(
    { token: token || "" },
    { enabled: !!token }
  );

  const deleteMutation = trpc.registration.delete.useMutation({
    onSuccess: () => {
      toast.success("تم حذف التسجيل بنجاح");
      refetch();
    },
    onError: (error) => {
      toast.error(error.message || "حدث خطأ");
    },
  });

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    setLocation("/admin");
  };

  const handleDelete = (id: number) => {
    if (confirm("هل أنت متأكد من حذف هذا التسجيل؟")) {
      deleteMutation.mutate({ token: token || "", id });
    }
  };

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleString("ar-EG", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const exportToCSV = () => {
    if (!registrations || registrations.length === 0) {
      toast.error("لا توجد بيانات للتصدير");
      return;
    }

    const headers = ["التاريخ", "الاسم", "البريد", "الهاتف", "الخبرة", "الدولة", "المدينة", "المصدر", "الرسالة"];
    const rows = registrations.map(r => [
      formatDate(r.createdAt),
      r.name,
      r.email,
      r.phone,
      experienceLabels[r.experience || "beginner"] || "-",
      r.country || "-",
      r.city || "-",
      r.source || "-",
      r.message || "-",
    ]);

    const csvContent = "\uFEFF" + [headers.join(","), ...rows.map(row => row.map(cell => `"${cell}"`).join(","))].join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `registrations_${new Date().toISOString().split("T")[0]}.csv`;
    link.click();
    toast.success("تم تحميل الملف بنجاح");
  };

  const exportToExcel = () => {
    if (!registrations || registrations.length === 0) {
      toast.error("لا توجد بيانات للتصدير");
      return;
    }

    // Create HTML table for Excel
    let html = `
      <html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel">
      <head><meta charset="UTF-8"></head>
      <body>
      <table border="1" dir="rtl">
        <tr style="background:#1e3a5f;color:white;font-weight:bold;">
          <th>التاريخ</th>
          <th>الاسم</th>
          <th>البريد</th>
          <th>الهاتف</th>
          <th>الخبرة</th>
          <th>الدولة</th>
          <th>المدينة</th>
          <th>المصدر</th>
          <th>الرسالة</th>
        </tr>
    `;

    registrations.forEach(r => {
      html += `
        <tr>
          <td>${formatDate(r.createdAt)}</td>
          <td>${r.name}</td>
          <td>${r.email}</td>
          <td>${r.phone}</td>
          <td>${experienceLabels[r.experience || "beginner"] || "-"}</td>
          <td>${r.country || "-"}</td>
          <td>${r.city || "-"}</td>
          <td>${r.source || "-"}</td>
          <td>${r.message || "-"}</td>
        </tr>
      `;
    });

    html += "</table></body></html>";

    const blob = new Blob([html], { type: "application/vnd.ms-excel;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `registrations_${new Date().toISOString().split("T")[0]}.xls`;
    link.click();
    toast.success("تم تحميل ملف Excel بنجاح");
  };

  if (!token) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100" dir="rtl">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center">
              <Users className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-800">بيانات المسجلين</h1>
              <p className="text-sm text-slate-500">إجمالي المسجلين: {count || 0}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={exportToExcel}
              className="gap-2"
            >
              <FileSpreadsheet className="w-4 h-4" />
              تحميل Excel
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={exportToCSV}
              className="gap-2"
            >
              <FileText className="w-4 h-4" />
              تحميل CSV
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleLogout}
              className="gap-2 text-red-600 hover:text-red-700 hover:bg-red-50"
            >
              <LogOut className="w-4 h-4" />
              خروج
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-6">
        <Card>
          <CardContent className="p-0">
            {isLoading ? (
              <div className="p-8 text-center text-slate-500">جاري التحميل...</div>
            ) : registrations && registrations.length > 0 ? (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-slate-50">
                      <TableHead className="text-right font-bold">التاريخ</TableHead>
                      <TableHead className="text-right font-bold">الاسم</TableHead>
                      <TableHead className="text-right font-bold">البريد</TableHead>
                      <TableHead className="text-right font-bold">الهاتف</TableHead>
                      <TableHead className="text-right font-bold">الخبرة</TableHead>
                      <TableHead className="text-right font-bold">الدولة</TableHead>
                      <TableHead className="text-right font-bold">المدينة</TableHead>
                      <TableHead className="text-right font-bold">إجراءات</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {registrations.map((reg) => (
                      <TableRow key={reg.id} className="hover:bg-slate-50">
                        <TableCell className="text-slate-600 text-sm">
                          {formatDate(reg.createdAt)}
                        </TableCell>
                        <TableCell className="font-medium">{reg.name}</TableCell>
                        <TableCell className="text-slate-600" dir="ltr">{reg.email}</TableCell>
                        <TableCell className="text-slate-600" dir="ltr">{reg.phone}</TableCell>
                        <TableCell>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            reg.experience === "beginner" ? "bg-green-100 text-green-700" :
                            reg.experience === "intermediate" ? "bg-yellow-100 text-yellow-700" :
                            "bg-blue-100 text-blue-700"
                          }`}>
                            {experienceLabels[reg.experience || "beginner"]}
                          </span>
                        </TableCell>
                        <TableCell className="text-slate-600">{reg.country || "-"}</TableCell>
                        <TableCell className="text-slate-600">{reg.city || "-"}</TableCell>
                        <TableCell>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleDelete(reg.id)}
                            className="text-red-600 hover:text-red-700 hover:bg-red-50"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            ) : (
              <div className="p-8 text-center text-slate-500">
                <Users className="w-12 h-12 mx-auto mb-4 text-slate-300" />
                <p>لا توجد تسجيلات حتى الآن</p>
              </div>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
