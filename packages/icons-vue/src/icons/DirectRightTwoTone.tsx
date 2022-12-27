// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DirectRightTwoToneSvg from '@ant-design/icons-svg/lib/asn/DirectRightTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DirectRightTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DirectRightTwoTone: DirectRightTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DirectRightTwoToneSvg}></AntdIcon>;
};

DirectRightTwoTone.displayName = 'DirectRightTwoTone';
DirectRightTwoTone.inheritAttrs = false;
export default DirectRightTwoTone;