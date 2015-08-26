module.exports = function karmaDevelopmentConfigModifier(config) {
  config.singleRun = false;
  config.autoWatch = true;
  return config;
};
