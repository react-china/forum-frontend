export function add(name, color, textColor, parentCategoryId, callback) {
  const {$resource} = this;
  const options = {
    name: name,
    color: color || (~~(Math.random() * (1 << 24))).toString(16),
    text_color: textColor || 'FFFFFF',
    parent_category_id: parentCategoryId || null,
  };
  $resource.post('categories', options, callback);
}

export function get(parameters, callback) {
  const {$resource} = this;
  $resource.get('categories.json', parameters || {}, callback);
}
