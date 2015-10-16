export function members(groupName, callback) {
  const {$resource} = this;
  $resource.get(`groups/${groupName}/members.json`, {}, callback);
}

export function add(groupName, aliasLevel, automatic, emailDomains, membershipRetroactive, trustLevel, primaryGroup, title, visible, callback) {
  const {$resource} = this;
  const options = {
    'name': groupName,
    'alias_level': aliasLevel || -2,
    'automatic': automatic || false,
    'automatic_membership_email_domains': emailDomains || '',
    'automatic_membership_retroactive': membershipRetroactive || false,
    'grant_trust_level': trustLevel || 1,
    'primary_group': primaryGroup || false,
    'title': title,
    'visible': visible || true,
  };

  $resource.post('admin/groups', options, callback);
}
