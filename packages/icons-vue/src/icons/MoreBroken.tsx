// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MoreBrokenSvg from '@ant-design/icons-svg/lib/asn/MoreBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MoreBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MoreBroken: MoreBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MoreBrokenSvg}></AntdIcon>;
};

MoreBroken.displayName = 'MoreBroken';
MoreBroken.inheritAttrs = false;
export default MoreBroken;