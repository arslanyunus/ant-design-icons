// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MoreOutlineSvg from '@ant-design/icons-svg/lib/asn/MoreOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MoreOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MoreOutline: MoreOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MoreOutlineSvg}></AntdIcon>;
};

MoreOutline.displayName = 'MoreOutline';
MoreOutline.inheritAttrs = false;
export default MoreOutline;