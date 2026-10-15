import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'space.solaris3d.app',
  appName: 'Solaris 3D',
  webDir: 'public',
  server: {
    url: 'https://www.solaris3d.space',
    cleartext: true,
    androidScheme: 'https',
    allowNavigation: [
      'solaris3d.space',
      '*.solaris3d.space',
      'www.solaris3d.space',
      '*.clerk.accounts.dev',
      '*.clerk.com',
      '*.supabase.co'
    ]
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2500,
      launchAutoHide: true,
      backgroundColor: '#000000',
      androidSplashResourceName: 'splash',
      androidScaleType: 'CENTER_INSIDE',
      showSpinner: false
    }
  }
};

export default config;
