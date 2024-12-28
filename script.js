// script.js

function detectOS() {
    const userAgent = navigator.userAgent;
    let os = "Unknown OS";
    let arch = "Unknown Architecture";
    let distro = ""; // Leave this empty initially
  
    // Detecting Windows versions
    if (userAgent.indexOf("Windows NT 10.0") !== -1) {
      os = "Windows 10";
    } else if (userAgent.indexOf("Windows NT 6.3") !== -1) {
      os = "Windows 8.1";
    } else if (userAgent.indexOf("Windows NT 6.2") !== -1) {
      os = "Windows 8";
    } else if (userAgent.indexOf("Windows NT 6.1") !== -1) {
      os = "Windows 7";
    } else if (userAgent.indexOf("Windows NT 6.0") !== -1) {
      os = "Windows Vista";
    } else if (userAgent.indexOf("Windows NT 5.1") !== -1) {
      os = "Windows XP";
    } else if (userAgent.indexOf("Windows NT 5.0") !== -1) {
      os = "Windows 2000";
    } else if (userAgent.indexOf("Windows 98") !== -1) {
      os = "Windows 98";
    } else if (userAgent.indexOf("Windows ME") !== -1) {
      os = "Windows ME";
    } else if (userAgent.indexOf("Windows NT 4.0") !== -1) {
      os = "Windows NT 4.0";
    } else if (userAgent.indexOf("Win95") !== -1) {
      os = "Windows 95";
    } else if (userAgent.indexOf("Windows CE") !== -1) {
      os = "Windows CE";
    } else if (userAgent.indexOf("Mac") !== -1) {
        os = "macOS";
        
        // macOS version detection based on userAgent string
        if (userAgent.indexOf("Mac OS X 10.15") !== -1) {
          macOSVersion = "macOS 10.15 (Catalina)";
        } else if (userAgent.indexOf("Mac OS X 10.14") !== -1) {
          macOSVersion = "macOS 10.14 (Mojave)";
        } else if (userAgent.indexOf("Mac OS X 10.13") !== -1) {
          macOSVersion = "macOS 10.13 (High Sierra)";
        } else if (userAgent.indexOf("Mac OS X 10.12") !== -1) {
          macOSVersion = "macOS 10.12 (Sierra)";
        } else if (userAgent.indexOf("Mac OS X 10.11") !== -1) {
          macOSVersion = "macOS 10.11 (El Capitan)";
        } else if (userAgent.indexOf("Mac OS X 10.10") !== -1) {
          macOSVersion = "macOS 10.10 (Yosemite)";
        } else if (userAgent.indexOf("Mac OS X 10.9") !== -1) {
          macOSVersion = "macOS 10.9 (Mavericks)";
        } else if (userAgent.indexOf("Mac OS X 10.8") !== -1) {
          macOSVersion = "macOS 10.8 (Mountain Lion)";
        } else if (userAgent.indexOf("Mac OS X 10.7") !== -1) {
          macOSVersion = "macOS 10.7 (Lion)";
        } else if (userAgent.indexOf("Mac OS X 10.6") !== -1) {
          macOSVersion = "macOS 10.6 (Snow Leopard)";
        } else if (userAgent.indexOf("Mac OS X 10.5") !== -1) {
          macOSVersion = "macOS 10.5 (Leopard)";
        } else if (userAgent.indexOf("Mac OS X 10.4") !== -1) {
          macOSVersion = "macOS 10.4 (Tiger)";
        } else if (userAgent.indexOf("Mac OS X 10.3") !== -1) {
          macOSVersion = "macOS 10.3 (Panther)";
        } else if (userAgent.indexOf("Mac OS X 10.2") !== -1) {
          macOSVersion = "macOS 10.2 (Jaguar)";
        } else if (userAgent.indexOf("Mac OS X 10.1") !== -1) {
          macOSVersion = "macOS 10.1 (Puma)";
        } else if (userAgent.indexOf("Mac OS X 10.0") !== -1) {
          macOSVersion = "macOS 10.0 (Cheetah)";
        }
    } else if (userAgent.indexOf("Linux") !== -1) {
      os = "Linux";
      
      // Linux Distro Detection (only for Linux OS)
      if (userAgent.indexOf("Ubuntu") !== -1) {
        distro = "Ubuntu";
      } else if (userAgent.indexOf("Fedora") !== -1) {
        distro = "Fedora";
      } else if (userAgent.indexOf("Debian") !== -1) {
        distro = "Debian";
      } else if (userAgent.indexOf("Arch") !== -1) {
        distro = "Arch Linux";
      } else if (userAgent.indexOf("CentOS") !== -1) {
        distro = "CentOS";
      } else if (userAgent.indexOf("openSUSE") !== -1) {
        distro = "openSUSE";
      } else if (userAgent.indexOf("Manjaro") !== -1) {
        distro = "Manjaro";
      } else if (userAgent.indexOf("Linux Mint") !== -1) {
        distro = "Linux Mint";
      } else if (userAgent.indexOf("Red Hat") !== -1 || userAgent.indexOf("RHEL") !== -1) {
        distro = "Red Hat";
      } else if (userAgent.indexOf("elementary OS") !== -1) {
        distro = "elementary OS";
      } else {
        distro = ""; // No distro detected, so leave empty
      }
    } else if (userAgent.indexOf("FreeBSD") !== -1) {
      os = "FreeBSD";
    }
  
    // Detecting Architecture (x86 or x64)
    if (userAgent.indexOf("x64") !== -1 || userAgent.indexOf("AMD64") !== -1) {
      arch = "x64";
    } else if (userAgent.indexOf("i386") !== -1 || userAgent.indexOf("x86") !== -1) {
      arch = "x86";
    }
  
    return { os, arch, distro };
  }
  
  // Display the detected OS, Distro (if Linux), and Architecture
  const { os, arch, distro } = detectOS();
  let osInfoText = `You are running ${os} (${arch} architecture).`;
  
  if (os === "Linux" && distro) {
    osInfoText = `You are running ${os} (${distro}) with ${arch} architecture.`;
  }
  
  document.getElementById("os-info").textContent = osInfoText;
  
