// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BoxTickBrokenSvg from '@ant-design/icons-svg/lib/asn/BoxTickBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BoxTickBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BoxTickBroken: BoxTickBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BoxTickBrokenSvg}></AntdIcon>;
};

BoxTickBroken.displayName = 'BoxTickBroken';
BoxTickBroken.inheritAttrs = false;
export default BoxTickBroken;