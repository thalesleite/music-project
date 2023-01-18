export default {
  beforeMount(el, binding) {
    let iconClass = `fa fa-${binding.value.icon} text-green-400 text-2xl`;

    if (binding.value.right) {
      iconClass += " float-right";
    }

    /*if (binding.modifiers.yellow) {
      iconClass += " text-yellow-400";
    } else {
      iconClass += " text-green-400";
      iconClass += " text-green-400";
    }*/

    el.innerHTML += `<i class="${iconClass}"></i>`;
  },
};
