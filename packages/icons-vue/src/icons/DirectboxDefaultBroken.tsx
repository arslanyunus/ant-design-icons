// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DirectboxDefaultBrokenSvg from '@ant-design/icons-svg/lib/asn/DirectboxDefaultBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DirectboxDefaultBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DirectboxDefaultBroken: DirectboxDefaultBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DirectboxDefaultBrokenSvg}></AntdIcon>;
};

DirectboxDefaultBroken.displayName = 'DirectboxDefaultBroken';
DirectboxDefaultBroken.inheritAttrs = false;
export default DirectboxDefaultBroken;