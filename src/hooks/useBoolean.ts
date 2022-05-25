import { ref } from 'vue';

export default function useBoolean(initValue = false) {
  const bool = ref(initValue);

  function setBool(value: boolean) {
    bool.value = value;
  }

  function toggle() {
    setBool(!bool.value);
  }

  return {
    bool,
    setBool,
    toggle
  };
}
