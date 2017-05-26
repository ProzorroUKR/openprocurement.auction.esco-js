export default function AuctionConfig($logProvider, $httpProvider, AuctionConfig, growlProvider, GTMLoggerProvider) {
  $httpProvider.defaults.withCredentials = true;
  GTMLoggerProvider.level('INFO').includeTimestamp( true );
  $logProvider.debugEnabled(AuctionConfig.debug); // default is true
  growlProvider.globalTimeToLive({
    success: 4000,
    error: 10000,
    warning: 10000,
    info: 4000
  });
  growlProvider.globalPosition('top-center');
  growlProvider.onlyUniqueMessages(false);
}
