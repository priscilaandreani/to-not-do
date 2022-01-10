const input = document.querySelectorAll('.controls input');

function handleUpdate() {
  const suffix = this.dataset.sizing || '';
  console.log(suffix);

  document.documentElement.style.setProperty(
    `--${this.name}`,
    `${this.value}${suffix}`
  );
}

input.forEach((input) => input.addEventListener('change', handleUpdate));
input.forEach((input) => input.addEventListener('mousemove', handleUpdate));
