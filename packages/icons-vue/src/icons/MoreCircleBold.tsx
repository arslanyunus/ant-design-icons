// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MoreCircleBoldSvg from '@ant-design/icons-svg/lib/asn/MoreCircleBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MoreCircleBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MoreCircleBold: MoreCircleBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MoreCircleBoldSvg}></AntdIcon>;
};

MoreCircleBold.displayName = 'MoreCircleBold';
MoreCircleBold.inheritAttrs = false;
export default MoreCircleBold;