// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DirectTwoToneSvg from '@ant-design/icons-svg/lib/asn/DirectTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DirectTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DirectTwoTone: DirectTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DirectTwoToneSvg}></AntdIcon>;
};

DirectTwoTone.displayName = 'DirectTwoTone';
DirectTwoTone.inheritAttrs = false;
export default DirectTwoTone;