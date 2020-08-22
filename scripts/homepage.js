'use strict';

/*
homepage.js - Sphere homepage "Main" script
Copyright (C) 2019-2020  Douile

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

const DEFAULT_LINKS = [
  {url:"https://duckduckgo.com/?kae=d&kax=-1&kad=en_GB&kac=-1&k1=-1&kaj=m&kam=osm&kak=-1&kaq=-1&kao=-1&kap=-1&kp=-2&kz=1&kt=a&ks=n&kw=s&km=l&ka=a&ku=-1&kai=1&kg=p",ic:"data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjA1IDE2NSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPGRlZnM+CiAgICA8Y2xpcFBhdGggaWQ9ImEiPgogICAgICA8Y2lyY2xlIGN4PSIxMjcuMzMiIGN5PSI3OC45NyIgcj0iNTIiLz4KICAgIDwvY2xpcFBhdGg+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImIiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMTg5My4zMiIgeTE9Ii0yMzgxLjk4IiB4Mj0iMTkwMS44OSIgeTI9Ii0yMzgxLjk4IiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIC0xNzg4IC0yMzIxKSI+CiAgICAgIDxzdG9wIG9mZnNldD0iLjAxIiBzdG9wLWNvbG9yPSIjNjE3NmI5Ii8+CiAgICAgIDxzdG9wIG9mZnNldD0iLjY5IiBzdG9wLWNvbG9yPSIjMzk0YTlmIi8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPGxpbmVhckdyYWRpZW50IGlkPSJjIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjE5MjAuMjciIHkxPSItMjM3OS4zNyIgeDI9IjE5MjguMDgiIHkyPSItMjM3OS4zNyIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAtMSAtMTc4OCAtMjMyMSkiPgogICAgICA8c3RvcCBvZmZzZXQ9Ii4wMSIgc3RvcC1jb2xvcj0iIzYxNzZiOSIvPgogICAgICA8c3RvcCBvZmZzZXQ9Ii42OSIgc3RvcC1jb2xvcj0iIzM5NGE5ZiIvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDxwYXRoIGlkPSJkIiBkPSJNMjIuNTYgMTgwLjU3di0yNC42aDguOTJjOC40OSAwIDEyLjM1IDYuMjQgMTIuMzUgMTIuMDQgMCA2LjI1LTMuODIgMTIuNTYtMTIuMzUgMTIuNTZoLTguOTJ6bTIuODQtMi44M2g2LjA4YzYuNTcgMCA5LjUyLTQuOSA5LjUyLTkuNzcgMC00LjQ2LTIuOTgtOS4yNy05LjUyLTkuMjdIMjUuNHYxOS4wNHptMjkuNjYgMy4xMmMtNC41NiAwLTcuNS0zLjE0LTcuNS04di05LjU1aDIuNjV2OS41MmMwIDMuNSAyLjA0IDUuNTggNS40NSA1LjU4IDMuMi0uMDMgNS41MS0yLjQ4IDUuNTEtNS44M3YtOS4yN2gyLjY2djE3LjI2SDYxLjRsLS4xNS0zLS40MS41MmE3LjIgNy4yIDAgMCAxLTUuOCAyLjc3em0yMS43My4wM2MtNC41IDAtOS4wMi0yLjc3LTkuMDItOC45NSAwLTUuMzUgMy42Mi04Ljk0IDkuMDItOC45NCAyLjM2IDAgNC40My44NCA2LjE2IDIuNWwtMS42NyAxLjczYTYuNTMgNi41MyAwIDAgMC00LjQyLTEuNzJjLTMuNzcgMC02LjQgMi42NS02LjQgNi40MyAwIDQuNDUgMy4yIDYuNDQgNi4zNiA2LjQ0IDEuNzggMCAzLjQtLjYzIDQuNTgtMS43OWwxLjczIDEuNzRhOC44IDguOCAwIDAgMS02LjM0IDIuNTZ6bTIwLjktLjMybC04LjQ0LTguNDN2OC40M2gtMi42MnYtMjQuNTZoMi42MnYxNC44Nmw3LjM3LTcuNTZoMy40NGwtOC4xNCA4LjE0IDkuMTMgOS4wOXYuMDN6Ii8+CiAgPC9kZWZzPgogIDxjaXJjbGUgc3Ryb2tlPSIjREU1ODMzIiBzdHJva2Utd2lkdGg9IjUiIGN4PSIxMDQuODMiIGN5PSI2MC4yMTkiIHI9IjU3LjUiIGZpbGw9IiNERTU4MzMiLz4KICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjIuNSAtMTguNzUpIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNhKSI+CiAgICAgIDxwYXRoIGQ9Ik0xMzguNDYgMTMyLjUzYy0yLjUxLTQuODgtNC45MS05LjM3LTYuNC0xMi4zNC0zLjk2LTcuOTMtNy45NC0xOS4xMS02LjEzLTI2LjMyLjMzLTEuMzEtMy43My00OC41MS02LjYtNTAuMDMtMy4xOS0xLjctMTAuMTItMy45NC0xMy43MS00LjU0LTIuNS0uNC0zLjA3LjMtNC4xMi40Ni45OS4xIDUuNyAyLjQyIDYuNjEgMi41NS0uOTEuNjItMy42LS4wMi01LjMyLjc0LS44Ny40LTEuNTIgMS44OC0xLjUgMi41OCA0LjktLjUgMTIuNTYtLjAxIDE3LjEgMi0zLjYxLjQxLTkuMDkuODctMTEuNDUgMi4xMS02Ljg0IDMuNi05Ljg2IDEyLjAzLTguMDYgMjIuMTMgMS43OSAxMC4wOCA5LjcyIDQ2Ljg1IDEyLjI1IDU5LjEzIDIuNTIgMTIuMjcgMzEuNTEgOS43IDI3LjMyIDEuNTN6IiBmaWxsPSIjRDVEN0Q4Ii8+CiAgICAgIDxwYXRoIGQ9Ik0xNDIuMSAxMzMuNzJjLTMuMDEtNS45Ny02LjA4LTExLjY4LTcuODYtMTUuMjItMy45Ny03Ljk0LTcuOTMtMTkuMTEtNi4xMy0yNi4zMi4zNC0xLjMxLjM0LTYuNjcgMS40My03LjM4IDguNDEtNS41IDcuODEtLjE5IDExLjE5LTIuNjUgMS43NC0xLjI3IDMuMTMtMi44IDMuNzQtNC45IDIuMTYtNy41OC0zLTIwLjc3LTguNzgtMjYuNTQtMS44OC0xLjg4LTQuNzYtMy4wNi04LjAyLTMuNjgtMS4yNS0xLjcyLTMuMjctMy4zNi02LjEzLTQuODlhMjguODYgMjguODYgMCAwIDAtMTguMjctMi44OGMxIC4xIDMuMjYgMi4xNCA0LjE3IDIuMjctMS4zOC45NC01LjA1LjgyLTUuMDMgMi45IDQuOTItLjUgMTAuMy4yOCAxNC44NCAyLjMtMy42LjQtNi45NiAxLjMtOS4zMSAyLjU0LTYuODYgMy42LTguNjYgMTAuODEtNi44NiAyMC45MSAxLjgxIDEwLjEgOS43NCA0Ni44OCAxMi4yNiA1OS4xMyAyLjUzIDEyLjI2IDMyLjUgMTEuOCAyOC43NyA0LjQxeiIgZmlsbD0iI0ZGRiIvPgogICAgPC9nPgogICAgPGNpcmNsZSByPSIzLjc5IiBjeD0iMTEyLjgiIGN5PSI3MC42OSIgZmlsbD0iIzJENEY4RSIvPgogICAgPGNpcmNsZSByPSIuOTgiIGN4PSIxMTQuNDkiIGN5PSI2OS40MyIgZmlsbD0iI0ZGRiIvPgogICAgPGNpcmNsZSByPSIzLjI1IiBjeD0iMTM4LjEyIiBjeT0iNjguNDQiIGZpbGw9IiMyRDRGOEUiLz4KICAgIDxjaXJjbGUgcj0iLjg0IiBjeD0iMTM5LjU3IiBjeT0iNjcuMzYiIGZpbGw9IiNGRkYiLz4KICAgIDxwYXRoIGZpbGw9InVybCgjYikiIGQ9Ik0xMTMuODkgNTkuNzJzLTIuODYtMS4zLTUuNjMuNDVjLTIuNzcgMS43NC0yLjY3IDMuNTItMi42NyAzLjUycy0xLjQ3LTMuMjggMi40NS00Ljg5YzMuOTMtMS42IDUuODUuOTIgNS44NS45MnoiLz4KICAgIDxwYXRoIGZpbGw9InVybCgjYykiIGQ9Ik0xNDAuMDggNTkuNDZzLTIuMDUtMS4xNy0zLjY1LTEuMTVjLTMuMjcuMDQtNC4xNiAxLjQ4LTQuMTYgMS40OHMuNTUtMy40NCA0LjczLTIuNzVhNC4yIDQuMiAwIDAgMSAzLjA4IDIuNDJ6Ii8+CiAgICA8cGF0aCBmaWxsPSIjRkREMjBBIiBkPSJNMTI0LjQgODUuM2MuMzgtMi4zIDYuMy02LjYzIDEwLjUtNi45IDQuMi0uMjYgNS41LS4yIDktMS4wNCAzLjUxLS44MyAxMi41NC0zLjA4IDE1LjAzLTQuMjQgMi41LTEuMTUgMTMuMS41NyA1LjYzIDQuNzQtMy4yMyAxLjgxLTExLjk0IDUuMTMtMTguMTcgNi45OS02LjIyIDEuODYtOS45OS0xLjc4LTEyLjA2IDEuMjgtMS42NCAyLjQzLS4zMyA1Ljc2IDcuMSA2LjQ1IDEwLjA0LjkzIDE5LjY2LTQuNTIgMjAuNzItMS42MiAxLjA2IDIuOS04LjYyIDYuNS0xNC41MiA2LjYyLTUuOS4xMS0xNy43OC0zLjktMTkuNTYtNS4xNC0xLjc5LTEuMjMtNC4xNi00LjEzLTMuNjctNy4xNHoiLz4KICAgIDxnPgogICAgICA8cGF0aCBmaWxsPSIjNjVCQzQ2IiBkPSJNMTI4Ljk0IDExNS42cy0xNC4xLTcuNTMtMTQuMzMtNC40OGMtLjI0IDMuMDYgMCAxNS41MSAxLjY0IDE2LjQ1IDEuNjUuOTQgMTMuNC02LjEgMTMuNC02LjFsLS43LTUuODh6bTUuNC0uNDhzOS42NC03LjI5IDExLjc2LTYuODJjMi4xMS40OCAyLjU4IDE1LjUxLjcgMTYuMjMtMS44OC43LTEyLjktMy44MS0xMi45LTMuODFsLjQ1LTUuNnoiLz4KICAgICAgPHBhdGggZmlsbD0iIzQzQTI0NCIgZD0iTTEyNS41MyAxMTYuMzljMCA0LjkzLS43MSA3LjA1IDEuNCA3LjUyIDIuMTIuNDcgNi4xMSAwIDcuNTMtLjk0IDEuNC0uOTQuMjMtNy4yOC0uMjQtOC40Ni0uNDctMS4xOC04LjctLjI0LTguNyAxLjg4eiIvPgogICAgICA8cGF0aCBmaWxsPSIjNjVCQzQ2IiBkPSJNMTI2LjQzIDExNS4zYzAgNC45My0uNzEgNy4wNCAxLjQgNy41MSAyLjExLjQ4IDYuMSAwIDcuNTItLjk0IDEuNDEtLjk0LjI0LTcuMjgtLjIzLTguNDYtLjQ3LTEuMTgtOC43LS4yMy04LjcgMS44OHoiLz4KICAgIDwvZz4KICA8L2c+CiAgPGNpcmNsZSBjeD0iMTA0LjgiIGN5PSI2MC4yNDkiIHI9IjUzLjEiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0ZGRiIgc3Ryb2tlLXdpZHRoPSIzLjg1Ii8+CiAgPGcgZmlsbD0iIzRDNEM0QyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIyLjUgLTE4Ljc1KSI+CiAgICA8dXNlIHhsaW5rOmhyZWY9IiNkIi8+CiAgICA8dXNlIHhsaW5rOmhyZWY9IiNkIiB4PSI4MS43Ii8+CiAgICA8cGF0aCBkPSJNMTk2LjcyIDE4MS4wM2MtOS40NiAwLTEyLjgxLTYuNzUtMTIuODEtMTIuNTItLjAyLTMuNzcgMS4yNS03LjEzIDMuNTgtOS40NyAyLjMtMi4zIDUuNDctMy41MiA5LjItMy41MiAzLjM2IDAgNi41MyAxLjI3IDguOTMgMy42bC0xLjYgMS44N2ExMS4xMiAxMS4xMiAwIDAgMC03LjMzLTIuODVjLTYuODYgMC05Ljk4IDUuMzctOS45OCAxMC4zNiAwIDQuOTEgMy4xIDkuODggMTAuMDUgOS44OCAyLjUzIDAgNC44OC0uODcgNi44MS0yLjUybC4xLS4wN3YtNi4wN2gtNy43NHYtMi40OGgxMC4yOHY5LjY1YTEyLjQ3IDEyLjQ3IDAgMCAxLTkuNSA0LjE0em0yMS43My0uMTRjLTUuMTggMC04Ljk1LTMuNzQtOC45NS04LjkxIDAtNS4yNSAzLjc3LTkuMDYgOC45NS05LjA2IDUuMyAwIDguOTkgMy43MyA4Ljk5IDkuMDYgMCA1LjE3LTMuNzggOC45MS04Ljk5IDguOTF6bS4wNC0xNS41NmMtMy43MyAwLTYuMzMgMi43NC02LjMzIDYuNjUgMCAzLjczIDIuNjUgNi40MyA2LjMgNi40MyAzLjcgMCA2LjMyLTIuNjQgNi4zNS02LjQzIDAtMy44NS0yLjY2LTYuNjUtNi4zMi02LjY1eiIvPgogIDwvZz4KPC9zdmc+"},
  {url:"https://www.youtube.com/",ic:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8c3ZnIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6Y2M9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zIyIgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIiB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgMjU2IiBoZWlnaHQ9IjI1NiIgd2lkdGg9IjI1NiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9InN2ZzIiIHZlcnNpb249IjEuMSI+PG1ldGFkYXRhIGlkPSJtZXRhZGF0YTgiPjxyZGY6UkRGPjxjYzpXb3JrIHJkZjphYm91dD0iIj48ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD48ZGM6dHlwZSByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIi8+PGRjOnRpdGxlLz48L2NjOldvcms+PC9yZGY6UkRGPjwvbWV0YWRhdGE+PGRlZnMgaWQ9ImRlZnM2Ij48Y2xpcFBhdGggaWQ9ImNsaXBQYXRoMTgiIGNsaXBQYXRoVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBpZD0icGF0aDE2IiBkPSJNIDAsMTkyIEggMTkyIFYgMCBIIDAgWiIvPjwvY2xpcFBhdGg+PC9kZWZzPjxnIHRyYW5zZm9ybT0ibWF0cml4KDEuMzMzMzMzMywwLDAsLTEuMzMzMzMzMywwLDI1NikiIGlkPSJnMTAiPjxnIGlkPSJnMTIiPjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwUGF0aDE4KSIgaWQ9ImcxNCI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTgwLjMyMjMsMTM4LjYzNzIpIiBpZD0iZzIwIj48cGF0aCBpZD0icGF0aDIyIiBzdHlsZT0iZmlsbDojZWUzMTIzO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTpub25lIiBkPSJtIDAsMCBjIC0yLjAyNCw3LjYyMiAtNy45ODgsMTMuNjI0IC0xNS41NjEsMTUuNjYxIC0xMy43MjQsMy43MDIgLTY4Ljc2MSwzLjcwMiAtNjguNzYxLDMuNzAyIDAsMCAtNTUuMDM3LDAgLTY4Ljc2MiwtMy43MDIgLTcuNTczLC0yLjAzNyAtMTMuNTM3LC04LjAzOSAtMTUuNTYxLC0xNS42NjEgLTMuNjc3LC0xMy44MTQgLTMuNjc3LC00Mi42MzcgLTMuNjc3LC00Mi42MzcgMCwwIDAsLTI4LjgyMiAzLjY3NywtNDIuNjM3IDIuMDI0LC03LjYyMiA3Ljk4OCwtMTMuNjI0IDE1LjU2MSwtMTUuNjYyIDEzLjcyNSwtMy43MDEgNjguNzYyLC0zLjcwMSA2OC43NjIsLTMuNzAxIDAsMCA1NS4wMzcsMCA2OC43NjEsMy43MDEgNy41NzMsMi4wMzggMTMuNTM3LDguMDQgMTUuNTYxLDE1LjY2MiAzLjY3OCwxMy44MTUgMy42NzgsNDIuNjM3IDMuNjc4LDQyLjYzNyAwLDAgMCwyOC44MjMgLTMuNjc4LDQyLjYzNyIvPjwvZz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg3OCw2OS44MzExKSIgaWQ9ImcyNCI+PHBhdGggaWQ9InBhdGgyNiIgc3R5bGU9ImZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6bm9uZSIgZD0iTSAwLDAgViA1Mi4zMzggTCA0NiwyNi4xNjggWiIvPjwvZz48L2c+PC9nPjwvZz48L3N2Zz4="},
  {url:"https://google.co.uk/",ic:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDQ4IDQ4Ij48cGF0aCBmaWxsPSIjNDI4NUY0IiBkPSJNNDUuMTIgMjQuNWMwLTEuNTYtLjE0LTMuMDYtLjQtNC41SDI0djguNTFoMTEuODRjLS41MSAyLjc1LTIuMDYgNS4wOC00LjM5IDYuNjR2NS41Mmg3LjExYzQuMTYtMy44MyA2LjU2LTkuNDcgNi41Ni0xNi4xN3oiLz48cGF0aCBmaWxsPSIjMzRBODUzIiBkPSJNMjQgNDZjNS45NCAwIDEwLjkyLTEuOTcgMTQuNTYtNS4zM2wtNy4xMS01LjUyYy0xLjk3IDEuMzItNC40OSAyLjEtNy40NSAyLjEtNS43MyAwLTEwLjU4LTMuODctMTIuMzEtOS4wN0g0LjM0djUuN0M3Ljk2IDQxLjA3IDE1LjQgNDYgMjQgNDZ6Ii8+PHBhdGggZmlsbD0iI0ZCQkMwNSIgZD0iTTExLjY5IDI4LjE4QzExLjI1IDI2Ljg2IDExIDI1LjQ1IDExIDI0cy4yNS0yLjg2LjY5LTQuMTh2LTUuN0g0LjM0QTIxLjk5MSAyMS45OTEgMCAwIDAgMiAyNGMwIDMuNTUuODUgNi45MSAyLjM0IDkuODhsNy4zNS01Ljd6Ii8+PHBhdGggZmlsbD0iI0VBNDMzNSIgZD0iTTI0IDEwLjc1YzMuMjMgMCA2LjEzIDEuMTEgOC40MSAzLjI5bDYuMzEtNi4zMUMzNC45MSA0LjE4IDI5LjkzIDIgMjQgMiAxNS40IDIgNy45NiA2LjkzIDQuMzQgMTQuMTJsNy4zNSA1LjdjMS43My01LjIgNi41OC05LjA3IDEyLjMxLTkuMDd6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTIgMmg0NHY0NEgyeiIvPjwvc3ZnPg=="},
  {url:"http://steamcommunity.com/",ic:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyMy4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAyMCAyMCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjAgMjA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+DQoJLnN0MHtmaWxsOiMyNEFDRTM7fQ0KCS5zdDF7ZmlsbDojMTcxQTIxO30NCjwvc3R5bGU+DQo8Zz4NCgk8Zz4NCgkJPHBhdGggY2xhc3M9InN0MSIgZD0iTTEwLDBDNC43LDAsMC40LDQuMSwwLDkuMmw1LjQsMi4yYzAuNS0wLjMsMS0wLjUsMS42LTAuNWMwLjEsMCwwLjEsMCwwLjIsMGwyLjQtMy41YzAsMCwwLDAsMCwwDQoJCQljMC0yLjEsMS43LTMuOCwzLjgtMy44YzIuMSwwLDMuOCwxLjcsMy44LDMuOGMwLDIuMS0xLjcsMy44LTMuOCwzLjhjMCwwLTAuMSwwLTAuMSwwbC0zLjQsMi40YzAsMCwwLDAuMSwwLDAuMQ0KCQkJYzAsMS42LTEuMywyLjgtMi44LDIuOGMtMS40LDAtMi41LTEtMi44LTIuM2wtMy44LTEuNkMxLjUsMTcsNS40LDIwLDEwLDIwYzUuNSwwLDEwLTQuNSwxMC0xMEMyMCw0LjUsMTUuNSwwLDEwLDB6Ii8+DQoJCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik02LjMsMTUuMkw1LDE0LjdjMC4yLDAuNSwwLjYsMC44LDEuMSwxYzEuMSwwLjUsMi4zLTAuMSwyLjgtMS4xYzAuMi0wLjUsMC4yLTEuMSwwLTEuNg0KCQkJYy0wLjItMC41LTAuNi0wLjktMS4xLTEuMmMtMC41LTAuMi0xLjEtMC4yLTEuNiwwbDEuMywwLjVjMC44LDAuMywxLjIsMS4zLDAuOCwyQzgsMTUuMiw3LjEsMTUuNSw2LjMsMTUuMnoiLz4NCgkJPHBhdGggY2xhc3M9InN0MSIgZD0iTTE1LjgsNy40YzAtMS40LTEuMS0yLjUtMi41LTIuNVMxMC44LDYsMTAuOCw3LjRzMS4xLDIuNSwyLjUsMi41UzE1LjgsOC44LDE1LjgsNy40eiBNMTEuNCw3LjQNCgkJCWMwLTEsMC44LTEuOSwxLjktMS45YzEsMCwxLjksMC44LDEuOSwxLjljMCwxLTAuOCwxLjktMS45LDEuOUMxMi4yLDkuMywxMS40LDguNSwxMS40LDcuNHoiLz4NCgk8L2c+DQo8L2c+DQo8L3N2Zz4NCg=="},
  {url:"https://discordapp.com/",ic:"data:image/svg+xml;base64,PHN2ZyBuYW1lPSJOb3ZhX0Rpc2NvcmQiIGNsYXNzPSJob21lSWNvbi10RU1CSzEiIGFyaWEtaGlkZGVuPSJmYWxzZSIgd2lkdGg9IjI4IiBoZWlnaHQ9IjIwIiB2aWV3Qm94PSIwIDAgMjggMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGZpbGw9IiM3Mjg5ZGEiIGQ9Ik0yMC42NjQ0IDIwQzIwLjY2NDQgMjAgMTkuODAxNCAxOC45NzYyIDE5LjA4MjIgMTguMDcxNEMyMi4yMjI2IDE3LjE5MDUgMjMuNDIxMiAxNS4yMzgxIDIzLjQyMTIgMTUuMjM4MUMyMi40Mzg0IDE1Ljg4MSAyMS41MDM0IDE2LjMzMzQgMjAuNjY0NCAxNi42NDI5QzE5LjQ2NTggMTcuMTQyOSAxOC4zMTUxIDE3LjQ3NjIgMTcuMTg4NCAxNy42NjY3QzE0Ljg4NyAxOC4wOTUzIDEyLjc3NzQgMTcuOTc2MiAxMC45Nzk1IDE3LjY0MjlDOS42MTMwMSAxNy4zODEgOC40MzgzNiAxNyA3LjQ1NTQ4IDE2LjYxOTFDNi45MDQxMSAxNi40MDQ4IDYuMzA0NzkgMTYuMTQyOSA1LjcwNTQ4IDE1LjgwOTZDNS42MzM1NiAxNS43NjE5IDUuNTYxNjQgMTUuNzM4MSA1LjQ4OTczIDE1LjY5MDVDNS40NDE3OCAxNS42NjY3IDUuNDE3ODEgMTUuNjQyOSA1LjM5Mzg0IDE1LjYxOTFDNC45NjIzMyAxNS4zODEgNC43MjI2IDE1LjIxNDMgNC43MjI2IDE1LjIxNDNDNC43MjI2IDE1LjIxNDMgNS44NzMyOSAxNy4xMTkxIDguOTE3ODEgMTguMDIzOEM4LjE5ODYzIDE4LjkyODYgNy4zMTE2NCAyMCA3LjMxMTY0IDIwQzIuMDEzNyAxOS44MzMzIDAgMTYuMzgxIDAgMTYuMzgxQzAgOC43MTQ0IDMuNDUyMDUgMi41MDAxNyAzLjQ1MjA1IDIuNTAwMTdDNi45MDQxMSAtMC4wNzEyMyAxMC4xODg0IDAuMDAwMTk3ODYxIDEwLjE4ODQgMC4wMDAxOTc4NjFMMTAuNDI4MSAwLjI4NTkwOUM2LjExMzAxIDEuNTIzOTkgNC4xMjMyOSAzLjQwNDkzIDQuMTIzMjkgMy40MDQ5M0M0LjEyMzI5IDMuNDA0OTMgNC42NTA2OCAzLjExOTIxIDUuNTM3NjcgMi43MTQ0NkM4LjEwMjc0IDEuNTk1NDIgMTAuMTQwNCAxLjI4NTkgMTAuOTc5NSAxLjIxNDQ3QzExLjEyMzMgMS4xOTA2NiAxMS4yNDMyIDEuMTY2ODUgMTEuMzg3IDEuMTY2ODVDMTIuODQ5MyAwLjk3NjM3OSAxNC41MDM0IDAuOTI4NzYgMTYuMjI5NSAxLjExOTIzQzE4LjUwNjggMS4zODExNCAyMC45NTIxIDIuMDQ3OCAyMy40NDUyIDMuNDA0OTNDMjMuNDQ1MiAzLjQwNDkzIDIxLjU1MTQgMS42MTkyMyAxNy40NzYgMC4zODExNDZMMTcuODExNiAwLjAwMDE5Nzg2MUMxNy44MTE2IDAuMDAwMTk3ODYxIDIxLjA5NTkgLTAuMDcxMjMgMjQuNTQ3OSAyLjUwMDE3QzI0LjU0NzkgMi41MDAxNyAyOCA4LjcxNDQgMjggMTYuMzgxQzI4IDE2LjM4MSAyNS45NjIzIDE5LjgzMzMgMjAuNjY0NCAyMFpNOS41MTcxMiA4Ljg4MTA2QzguMTUwNjggOC44ODEwNiA3LjA3MTkyIDEwLjA3MTUgNy4wNzE5MiAxMS41MjM5QzcuMDcxOTIgMTIuOTc2MyA4LjE3NDY2IDE0LjE2NjcgOS41MTcxMiAxNC4xNjY3QzEwLjg4MzYgMTQuMTY2NyAxMS45NjIzIDEyLjk3NjMgMTEuOTYyMyAxMS41MjM5QzExLjk4NjMgMTAuMDcxNSAxMC44ODM2IDguODgxMDYgOS41MTcxMiA4Ljg4MTA2Wk0xOC4yNjcxIDguODgxMDZDMTYuOTAwNyA4Ljg4MTA2IDE1LjgyMTkgMTAuMDcxNSAxNS44MjE5IDExLjUyMzlDMTUuODIxOSAxMi45NzYzIDE2LjkyNDcgMTQuMTY2NyAxOC4yNjcxIDE0LjE2NjdDMTkuNjMzNiAxNC4xNjY3IDIwLjcxMjMgMTIuOTc2MyAyMC43MTIzIDExLjUyMzlDMjAuNzEyMyAxMC4wNzE1IDE5LjYzMzYgOC44ODEwNiAxOC4yNjcxIDguODgxMDZaIi8+PC9zdmc+"},
  {url:"https://twitter.com/",ic:"data:image/svg+xml;base64,PHN2ZyBpZD0iTG9nb19GSVhFRCIgZGF0YS1uYW1lPSJMb2dvIOKAlCBGSVhFRCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNDAwIDQwMCI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOm5vbmU7fS5jbHMtMntmaWxsOiMxZGExZjI7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT5Ud2l0dGVyX0xvZ29fQmx1ZTwvdGl0bGU+PHJlY3QgY2xhc3M9ImNscy0xIiB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTE1My42MiwzMDEuNTljOTQuMzQsMCwxNDUuOTQtNzguMTYsMTQ1Ljk0LTE0NS45NCwwLTIuMjIsMC00LjQzLS4xNS02LjYzQTEwNC4zNiwxMDQuMzYsMCwwLDAsMzI1LDEyMi40N2ExMDIuMzgsMTAyLjM4LDAsMCwxLTI5LjQ2LDguMDcsNTEuNDcsNTEuNDcsMCwwLDAsMjIuNTUtMjguMzcsMTAyLjc5LDEwMi43OSwwLDAsMS0zMi41NywxMi40NSw1MS4zNCw1MS4zNCwwLDAsMC04Ny40MSw0Ni43OEExNDUuNjIsMTQ1LjYyLDAsMCwxLDkyLjQsMTA3LjgxYTUxLjMzLDUxLjMzLDAsMCwwLDE1Ljg4LDY4LjQ3QTUwLjkxLDUwLjkxLDAsMCwxLDg1LDE2OS44NmMwLC4yMSwwLC40MywwLC42NWE1MS4zMSw1MS4zMSwwLDAsMCw0MS4xNSw1MC4yOCw1MS4yMSw1MS4yMSwwLDAsMS0yMy4xNi44OCw1MS4zNSw1MS4zNSwwLDAsMCw0Ny45MiwzNS42MiwxMDIuOTIsMTAyLjkyLDAsMCwxLTYzLjcsMjJBMTA0LjQxLDEwNC40MSwwLDAsMSw3NSwyNzguNTVhMTQ1LjIxLDE0NS4yMSwwLDAsMCw3OC42MiwyMyIvPjwvc3ZnPg=="},
  {url:"https://www.netflix.com/",ic:"data:image/svg+xml;base64,PHN2ZyBjbGFzcz0ibmV0ZmxpeC1zdmciIHdpZHRoPSI4OHB4IiBoZWlnaHQ9IjMycHgiIHZpZXdCb3g9IjAgMCAxMTEgMzAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZmlsbD0iI2U1MDkxNCIgZD0iTTEwNS4wNjIgMTQuMjhMMTExIDMwYy0xLjc1LS4yNS0zLjQ5OS0uNTYzLTUuMjgtLjg0NWwtMy4zNDUtOC42ODYtMy40MzcgNy45NjljLTEuNjg3LS4yODItMy4zNDQtLjM3Ni01LjAzMS0uNTk1bDYuMDMxLTEzLjc1TDk0LjQ2OCAwaDUuMDYzbDMuMDYyIDcuODc0TDEwNS44NzUgMGg1LjEyNGwtNS45MzcgMTQuMjh6TTkwLjQ3IDBoLTQuNTk0djI3LjI1YzEuNS4wOTQgMy4wNjIuMTU2IDQuNTk0LjM0M1Ywem0tOC41NjMgMjYuOTM3Yy00LjE4Ny0uMjgxLTguMzc1LS41My0xMi42NTYtLjYyNVYwaDQuNjg3djIxLjg3NWMyLjY4OC4wNjIgNS4zNzUuMjggNy45NjkuNDA1djQuNjU3ek02NC4yNSAxMC42NTd2NC42ODdoLTYuNDA2VjI2SDUzLjIyVjBoMTMuMTI1djQuNjg3aC04LjV2NS45N2g2LjQwNnptLTE4LjkwNi01Ljk3VjI2LjI1Yy0xLjU2MyAwLTMuMTU2IDAtNC42ODguMDYyVjQuNjg3aC00Ljg0NFYwaDE0LjQwNnY0LjY4N2gtNC44NzR6TTMwLjc1IDE1LjU5M2MtMi4wNjIgMC00LjUgMC02LjI1LjA5NXY2Ljk2OGMyLjc1LS4xODggNS41LS40MDYgOC4yODEtLjV2NC41bC0xMi45NjggMS4wMzJWMEgzMi43OHY0LjY4N0gyNC41VjExYzEuODEzIDAgNC41OTQtLjA5NCA2LjI1LS4wOTR2NC42ODh6TTQuNzggMTIuOTY4djE2LjM3NUMzLjA5NCAyOS41MzEgMS41OTMgMjkuNzUgMCAzMFYwaDQuNDY5bDYuMDkzIDE3LjAzMlYwaDQuNjg4djI4LjA2MmMtMS42NTYuMjgyLTMuMzQ0LjM3Ni01LjEyNS42MjVMNC43OCAxMi45Njh6Ii8+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz4="},
  {url:"https://github.com/",ic:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMzIiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDE2IDE2IiBoZWlnaHQ9IjMyIj48ZGVmcyBpZD0iZCIgLz48cGF0aCBzdHlsZT0iZmlsbC1ydWxlOmV2ZW5vZGQiIGlkPSJwIiBkPSJNIDgsMCBDIDMuNTgsMCAwLDMuNTggMCw4IGMgMCwzLjU0IDIuMjksNi41MyA1LjQ3LDcuNTkgMC40LDAuMDcgMC41NSwtMC4xNyAwLjU1LC0wLjM4IDAsLTAuMTkgLTAuMDEsLTAuODIgLTAuMDEsLTEuNDkgQyA0LDE0LjA5IDMuNDgsMTMuMjMgMy4zMiwxMi43OCAzLjIzLDEyLjU1IDIuODQsMTEuODQgMi41LDExLjY1IDIuMjIsMTEuNSAxLjgyLDExLjEzIDIuNDksMTEuMTIgMy4xMiwxMS4xMSAzLjU3LDExLjcgMy43MiwxMS45NCA0LjQ0LDEzLjE1IDUuNTksMTIuODEgNi4wNSwxMi42IDYuMTIsMTIuMDggNi4zMywxMS43MyA2LjU2LDExLjUzIDQuNzgsMTEuMzMgMi45MiwxMC42NCAyLjkyLDcuNTggMi45Miw2LjcxIDMuMjMsNS45OSAzLjc0LDUuNDMgMy42Niw1LjIzIDMuMzgsNC40MSAzLjgyLDMuMzEgYyAwLDAgMC42NywtMC4yMSAyLjIsMC44MiAwLjY0LC0wLjE4IDEuMzIsLTAuMjcgMiwtMC4yNyAwLjY4LDAgMS4zNiwwLjA5IDIsMC4yNyAxLjUzLC0xLjA0IDIuMiwtMC44MiAyLjIsLTAuODIgMC40NCwxLjEgMC4xNiwxLjkyIDAuMDgsMi4xMiAwLjUxLDAuNTYgMC44MiwxLjI3IDAuODIsMi4xNSAwLDMuMDcgLTEuODcsMy43NSAtMy42NSwzLjk1IDAuMjksMC4yNSAwLjU0LDAuNzMgMC41NCwxLjQ4IDAsMS4wNyAtMC4wMSwxLjkzIC0wLjAxLDIuMiAwLDAuMjEgMC4xNSwwLjQ2IDAuNTUsMC4zOCBBIDguMDEzLDguMDEzIDAgMCAwIDE2LDggQyAxNiwzLjU4IDEyLjQyLDAgOCwwIFoiIC8+PC9zdmc+"}
];

/* Math constants */
Object.defineProperties(Math, {
  TWOPI: {
    configurable: false,
    enumerable: true,
    writable: false,
    value: Math.PI*2
  },
  HALFPI: {
    configurable: false,
    enumerable: true,
    writable: false,
    value: Math.PI/2
  }
});

(function() {

const LOCALSTORAGE_LINKS = 'sphere-links';

function createElement(tagName, attrs) {
  const el = document.createElement(tagName);
  if (attrs) {
    for (let key in attrs) {
      el.setAttribute(key, attrs[key]);
    }
  }
  return el;
}

function query(q) {
  return document.querySelector(q);
}

function getPosStyles() {
  let stylesheet = query('link#positions');
  if (stylesheet === null) {
    stylesheet = document.createElement('link');
    stylesheet.rel = 'stylesheet';
    stylesheet.id = 'positions';
    document.head.appendChild(stylesheet);
  }
  return stylesheet;
}

function generatePositions(poscount) {
  const width = window.innerWidth;

  let smallest = window.innerHeight;
  if (width < smallest) {
    smallest = width;
  }

  let size = (smallest/2)-200;

  let output = "";

  const positions = Array(poscount);
  const mult = Math.TWOPI/poscount;
  let r = size/2 + 150;

  for (let i=0;i<positions.length;i++) {
    const rad = mult*i - Math.HALFPI;
    const x = r * Math.cos(rad);
    const y = r * Math.sin(rad);
    const style = `.contLink[pos="${i}"] { transform: translate(${x}px,${y}px);}`;
    positions[i] = style;
    output += style;
  }

  const stylesheet = getPosStyles();
  URL.revokeObjectURL(stylesheet.href);
  stylesheet.href = URL.createObjectURL(new Blob([output], { type: 'text/css' }));
  return positions;
}

function setupBoxes(poscount) {
  var cont = query(".main-container");
  for (let a=0;a<poscount;a++) {
    let li = document.createElement("a");
    li.setAttribute("class","contLink");
    li.setAttribute("pos",a.toString());
    let img = document.createElement("img");
    li.appendChild(img);
    cont.appendChild(li);
  }
}

function clickHandler(e) {
  // IDs
  switch(e.target.id) {
    case 'settings-button':
    showSettingsModal(window.links);
    return;
  }

  // Classes
  if (e.target.classList.contains('modal-container') && e.target.classList.contains('modal-outside-closes')) {
    return e.target.setAttribute('data-active', 'false');
  }
  if (e.target.classList.contains('settings-link-remove')) {
    const index = parseInt(e.target.parentElement.getAttribute('data-index'));
    if (isNaN(index)) return;
    const links = fetchSettingsLinks();
    links.splice(index, 1);
    showSettingsModal(links);
    return;
  }

  // Following handlers depend on parent element
  if (e.target.parentElement === null) return;

  if (e.target.parentElement.classList.contains('settings-buttons') || e.target.parentElement.classList.contains('settings-new-link')) {
    for (let className of e.target.classList) {
      switch(className) {
        case 'button-reset':
        showSettingsModal(DEFAULT_LINKS);
        return;
        case 'button-cancel':
        query('.modal-container.settings-container').setAttribute('data-active', 'false');
        return;
        case 'button-save':
        const links = fetchSettingsLinks();
        window.links = links;
        saveLinks(links);
        refreshLinks(true);
        query('.modal-container.settings-container').setAttribute('data-active', 'false');
        return;
        case 'button-new':
        showSettingsModal(fetchSettingsLinks().concat([{ url: '', ic: '' }]));
        return;
      }
    }
  }
}

function loadErrorHandler(e) {
  if (e.target.tagName === 'IMG') {
    e.target.removeAttribute('src');
  }
}

function resizeHandler() {
  generatePositions(window.links.length);
}

function parseLinks(links) {
  generatePositions(links.length);
  setupBoxes(links.length);

  for (let i=0;i<links.length;i++) {
    let t = query(`.contLink[pos="${i}"]`);
    t.href = links[i].url;
    t.querySelector('img').src = links[i].ic;
  }
}

function saveLinks(links) {
  const data = JSON.stringify(links);
  saveLinksLocalStorage(data);
}

function saveLinksLocalStorage(data) {
  window.localStorage.setItem(LOCALSTORAGE_LINKS, data);
}

function loadLinks() {
  let data = loadLinksLocalStorage();
  if (data === null) data = DEFAULT_LINKS;
  return data;
}

function loadLinksLocalStorage() {
  let data = null;
  try {
    data = JSON.parse(window.localStorage.getItem(LOCALSTORAGE_LINKS));
  } catch(e) {}
  return data;
}

function refreshLinks(dontLoad) {
  if (!dontLoad) window.links = loadLinks();
  document.querySelectorAll('.contLink').forEach(n => n.remove());
  parseLinks(window.links);
}

function createSettingsLink() {
  const parent = createElement('div', { class: 'settings-link' });
  parent.appendChild(createElement('span', { class: 'modal-list-counter' }));
  parent.appendChild(createElement('img', { class: 'settings-link-icon' }));
  parent.appendChild(createElement('input', { name: 'link', type: 'text', placeholder: 'Link URL' }));
  parent.appendChild(createElement('input', { name: 'icon', type: 'text', placeholder: 'Icon URL' }));
  parent.appendChild(createElement('img', { class: 'settings-link-remove', src: './assets/trash.svg' }));
  return parent;
}

function renderSettingsLink(el, link, index) {
  el.setAttribute('data-index', index);
  el.children[1].src = link.ic;
  el.children[2].value = link.url;
  el.children[3].value = link.ic;
}

function fetchSettingsLinks() {
  const links = [];
  for (let item of document.querySelectorAll('.settings-container .settings-links .settings-link')) {
    links.push({ url: item.children[2].value, ic: item.children[3].value });
  }
  return links;
}

function showSettingsModal(links) {
  const container = query('.modal-container.settings-container');
  const linkContainer = container.querySelector('.settings-links');

  const pre = linkContainer.childElementCount;
  const after = links.length;

  const n = Math.max(pre, after);

  let removed = 0;

  for (let i=0;i<n;i++) {
    const childIndex = i-removed;
    if (i < pre) {
      if (i < after) {
        renderSettingsLink(linkContainer.children[childIndex], links[i], i);
      } else {
        linkContainer.children[childIndex].remove();
        removed++;
      }
    } else if (i < after) {
      const el = createSettingsLink();
      renderSettingsLink(el, links[i], i);
      linkContainer.appendChild(el);
    }
  }

  container.setAttribute('data-active', 'true');
}

window.addEventListener('click', clickHandler);
window.addEventListener('error', loadErrorHandler, { capture: true, passive: true }, true);
window.addEventListener('resize', resizeHandler, { passive: true });

window.links = [];

refreshLinks();

})();
