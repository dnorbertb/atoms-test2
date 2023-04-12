<template>
  <a
    :href="`https://www.trustpilot.com/review/${reviewSiteName}?utm_medium=trustbox&utm_source=MicroTrustScore`"
    class="trustpilot flex justify-between items-end gap-xs w-full max-w-[260px] min-h-[46px] bg-white pt-[12px] pb-[14px] px-[12px] rounded-sm drop-shadow-2xl relative"
    target="_blank"
  >
    <span class="font-medium text-trustpilot-1 mb-[1.5px]">Excellent</span>
    <span class="text-trustpilot-2 font-light"
      ><strong class="font-medium">{{ trustScore }}</strong> out of 5</span
    >
    <trustpilot-logo-icon />
  </a>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  // import TrustpilotLogoIcon from '@/assets/icons/TrustpilotLogoIcon.svg';

  const trustScore = ref(0);

  const fetchTrustpilot = async () => {
    const fetchUrl = `https://api.trustpilot.com/v1/business-units/find?name=${props.reviewSiteName}`;
    const fetchHeaders = new Headers({
      'Content-Type': 'application/json',
      apikey: import.meta.env.VITE_TRUSTPILOT_API_KEY,
    });

    const fetchResponse = await fetch(fetchUrl, {
      method: 'GET',
      headers: fetchHeaders,
    });

    if (!fetchResponse.ok) {
      trustScore.value = Number(import.meta.env.VITE_TRUSTPILOT_FALLBACK_SCORE);
    }

    const fetchData = await fetchResponse.json();

    return fetchData;
  };

  fetchTrustpilot()
    .then((data) => {
      trustScore.value = data.score.trustScore;
    })
    .catch((error) => {
      console.log(error.message);
    });

  interface ITrustpilotProps {
    reviewSiteName?: string;
  }

  const props = withDefaults(defineProps<ITrustpilotProps>(), {
    reviewSiteName: 'incfile.com',
  });
</script>
