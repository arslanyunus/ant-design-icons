// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DirectDownTwoToneSvg from '@ant-design/icons-svg/lib/asn/DirectDownTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DirectDownTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DirectDownTwoTone: DirectDownTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DirectDownTwoToneSvg}></AntdIcon>;
};

DirectDownTwoTone.displayName = 'DirectDownTwoTone';
DirectDownTwoTone.inheritAttrs = false;
export default DirectDownTwoTone;