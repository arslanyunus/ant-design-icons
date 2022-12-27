// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DirectBrokenSvg from '@ant-design/icons-svg/lib/asn/DirectBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DirectBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DirectBroken: DirectBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DirectBrokenSvg}></AntdIcon>;
};

DirectBroken.displayName = 'DirectBroken';
DirectBroken.inheritAttrs = false;
export default DirectBroken;