// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import WindBrokenSvg from '@ant-design/icons-svg/lib/asn/WindBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface WindBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const WindBroken: WindBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WindBrokenSvg}></AntdIcon>;
};

WindBroken.displayName = 'WindBroken';
WindBroken.inheritAttrs = false;
export default WindBroken;