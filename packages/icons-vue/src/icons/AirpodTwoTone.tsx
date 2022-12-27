// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AirpodTwoToneSvg from '@ant-design/icons-svg/lib/asn/AirpodTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AirpodTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AirpodTwoTone: AirpodTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AirpodTwoToneSvg}></AntdIcon>;
};

AirpodTwoTone.displayName = 'AirpodTwoTone';
AirpodTwoTone.inheritAttrs = false;
export default AirpodTwoTone;