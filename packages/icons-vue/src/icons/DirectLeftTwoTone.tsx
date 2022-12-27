// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DirectLeftTwoToneSvg from '@ant-design/icons-svg/lib/asn/DirectLeftTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DirectLeftTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DirectLeftTwoTone: DirectLeftTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DirectLeftTwoToneSvg}></AntdIcon>;
};

DirectLeftTwoTone.displayName = 'DirectLeftTwoTone';
DirectLeftTwoTone.inheritAttrs = false;
export default DirectLeftTwoTone;