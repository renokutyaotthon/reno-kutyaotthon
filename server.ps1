param (
    [int]$Port = 8080,
    [string]$Root = $PSScriptRoot
)

$listener = New-Object System.Net.HttpListener
$prefix = "http://localhost:$Port/"
$listener.Prefixes.Add($prefix)

$mimeTypes = @{
    ".html" = "text/html; charset=utf-8"
    ".css"  = "text/css; charset=utf-8"
    ".js"   = "application/javascript; charset=utf-8"
    ".jpg"  = "image/jpeg"
    ".jpeg" = "image/jpeg"
    ".png"  = "image/png"
    ".gif"  = "image/gif"
    ".svg"  = "image/svg+xml"
    ".ico"  = "image/x-icon"
    ".json" = "application/json; charset=utf-8"
}

try {
    $listener.Start()
    Write-Host "===================================================="
    Write-Host " Rénó Kutyaotthon Weboldal Tesztszerver Aktív!"
    Write-Host " Nyisd meg a böngésződben: $prefix"
    Write-Host " Gyökérkönyvtár: $Root"
    Write-Host "===================================================="

    while ($listener.IsListening) {
        $context = $listener.GetContext()
        try {
            $req = $context.Request
            $res = $context.Response

            $path = $req.Url.LocalPath.TrimStart('/')
            if ([string]::IsNullOrWhiteSpace($path) -or $path -eq "/") {
                $path = "index.html"
            }

            $relPath = $path.Replace('/', [System.IO.Path]::DirectorySeparatorChar)
            $fullPath = [System.IO.Path]::GetFullPath([System.IO.Path]::Combine($Root, $relPath))

            if (!$fullPath.StartsWith($Root, [System.StringComparison]::OrdinalIgnoreCase) -or !(Test-Path $fullPath -PathType Leaf)) {
                $res.StatusCode = 404
                $msg = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found")
                $res.ContentLength64 = $msg.Length
                $res.ContentType = "text/plain; charset=utf-8"
                if ($req.HttpMethod -ne "HEAD") {
                    $res.OutputStream.Write($msg, 0, $msg.Length)
                }
                $res.Close()
                continue
            }

            $ext = [System.IO.Path]::GetExtension($fullPath).ToLower()
            $contentType = if ($mimeTypes.ContainsKey($ext)) { $mimeTypes[$ext] } else { "application/octet-stream" }

            $res.StatusCode = 200
            $res.ContentType = $contentType
            $bytes = [System.IO.File]::ReadAllBytes($fullPath)
            $res.ContentLength64 = $bytes.Length

            if ($req.HttpMethod -ne "HEAD") {
                $res.OutputStream.Write($bytes, 0, $bytes.Length)
            }
            $res.Close()
        }
        catch {
            try { $context.Response.Close() } catch {}
        }
    }
}
finally {
    try {
        $listener.Stop()
        $listener.Close()
    } catch {}
}
