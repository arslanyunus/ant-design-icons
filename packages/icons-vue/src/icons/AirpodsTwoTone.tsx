// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AirpodsTwoToneSvg from '@ant-design/icons-svg/lib/asn/AirpodsTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AirpodsTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AirpodsTwoTone: AirpodsTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AirpodsTwoToneSvg}></AntdIcon>;
};

AirpodsTwoTone.displayName = 'AirpodsTwoTone';
AirpodsTwoTone.inheritAttrs = false;
export default AirpodsTwoTone;