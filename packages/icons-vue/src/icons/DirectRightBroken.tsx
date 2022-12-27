// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DirectRightBrokenSvg from '@ant-design/icons-svg/lib/asn/DirectRightBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DirectRightBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DirectRightBroken: DirectRightBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DirectRightBrokenSvg}></AntdIcon>;
};

DirectRightBroken.displayName = 'DirectRightBroken';
DirectRightBroken.inheritAttrs = false;
export default DirectRightBroken;