import namespaces from "./namespaces.js";

/**
 * Separate the element type name from namespace.
 * @param {string} name such as "svg: rect", "svg: svg" ("namespace: elementType")
 */
export default function(name) {
  // namespace(prefix) and element type(name) are sparated by ':'
  var prefix = name += "", i = prefix.indexOf(":");
  // If prefix exists, and prefix is not 'xmlns', delete the prefix from name;
  if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
  // If the prefix exists in namespaces, return a new object {space: prefixAddress, local: elemType}. 
  // Otherwise, ignoring the prefix and just return the elementType.
  return namespaces.hasOwnProperty(prefix) ? {space: namespaces[prefix], local: name} : name; // eslint-disable-line no-prototype-builtins
}
