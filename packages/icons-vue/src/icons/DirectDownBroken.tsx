// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DirectDownBrokenSvg from '@ant-design/icons-svg/lib/asn/DirectDownBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DirectDownBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DirectDownBroken: DirectDownBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DirectDownBrokenSvg}></AntdIcon>;
};

DirectDownBroken.displayName = 'DirectDownBroken';
DirectDownBroken.inheritAttrs = false;
export default DirectDownBroken;