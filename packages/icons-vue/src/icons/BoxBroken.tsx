// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BoxBrokenSvg from '@ant-design/icons-svg/lib/asn/BoxBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BoxBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BoxBroken: BoxBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BoxBrokenSvg}></AntdIcon>;
};

BoxBroken.displayName = 'BoxBroken';
BoxBroken.inheritAttrs = false;
export default BoxBroken;