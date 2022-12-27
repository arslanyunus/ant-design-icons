// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MoreCircleOutlineSvg from '@ant-design/icons-svg/lib/asn/MoreCircleOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MoreCircleOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MoreCircleOutline: MoreCircleOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MoreCircleOutlineSvg}></AntdIcon>;
};

MoreCircleOutline.displayName = 'MoreCircleOutline';
MoreCircleOutline.inheritAttrs = false;
export default MoreCircleOutline;