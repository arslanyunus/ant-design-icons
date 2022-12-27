// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MoreCircleBrokenSvg from '@ant-design/icons-svg/lib/asn/MoreCircleBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MoreCircleBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MoreCircleBroken: MoreCircleBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MoreCircleBrokenSvg}></AntdIcon>;
};

MoreCircleBroken.displayName = 'MoreCircleBroken';
MoreCircleBroken.inheritAttrs = false;
export default MoreCircleBroken;